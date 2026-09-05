#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import { dirname, resolve } from 'node:path';

const DEFAULT_PORT = 45120;
const DEFAULT_TIMEOUT_MS = 10_000;
const stage = process.argv[2] ?? 'all';
const targetPort = Number.parseInt(process.env.OMNIMUX_PORT ?? String(DEFAULT_PORT), 10);
const targetUrl = process.env.OMNIMUX_LIVE_URL ?? `http://127.0.0.1:${targetPort}/`;
const reportPath = resolve(process.env.OMNIMUX_LIVE_REPORT ?? 'docs/evidence/live-qa-report.json');
const timeoutMs = Number.parseInt(process.env.OMNIMUX_LIVE_TIMEOUT_MS ?? String(DEFAULT_TIMEOUT_MS), 10);

function fail(message) {
  throw new Error(message);
}

if (!Number.isSafeInteger(targetPort) || targetPort < 1 || targetPort > 65535) {
  fail(`OMNIMUX_PORT must be a TCP port, got ${JSON.stringify(process.env.OMNIMUX_PORT)}`);
}
if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1) {
  fail(`OMNIMUX_LIVE_TIMEOUT_MS must be a positive integer, got ${JSON.stringify(process.env.OMNIMUX_LIVE_TIMEOUT_MS)}`);
}

const report = {
  formatVersion: 1,
  command: 'pnpm verify:live',
  stage,
  target: { url: targetUrl, port: targetPort },
  timestamp: new Date().toISOString(),
  checks: {
    host: { status: 'not-run' },
    authentication: { status: 'not-run' },
    runtime: { status: 'not-run' },
    dom: { status: 'not-run' },
  },
  verdict: 'FAIL',
  nextAction: 'QA must run the real authenticated built-in browser probe and record DOM/runtime evidence.',
};

function writeReport() {
  mkdirSync(dirname(reportPath), { recursive: true });
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
}

function requestHost() {
  return new Promise((resolveRequest, rejectRequest) => {
    const request = http.get(targetUrl, { timeout: timeoutMs }, (response) => {
      let bytes = 0;
      response.on('data', (chunk) => { bytes += chunk.length; });
      response.on('end', () => resolveRequest({ statusCode: response.statusCode ?? 0, bytes }));
    });
    request.on('timeout', () => request.destroy(new Error(`request timed out after ${timeoutMs}ms`)));
    request.on('error', rejectRequest);
  });
}

try {
  const response = await requestHost();
  report.checks.host = { status: 'observed', httpStatus: response.statusCode, responseBytes: response.bytes };
  if (response.statusCode >= 200 && response.statusCode < 300) {
    report.checks.authentication = {
      status: 'incomplete',
      detail: 'An unauthenticated HTTP response cannot prove the authenticated renderer session.',
    };
  } else if (response.statusCode === 401 || response.statusCode === 403) {
    report.checks.authentication = {
      status: 'blocked',
      detail: 'Host requires authenticated browser/session evidence; no launch token or authenticated renderer was supplied.',
    };
  } else {
    report.checks.authentication = { status: 'blocked', detail: `Host returned HTTP ${response.statusCode}.` };
  }
  report.checks.runtime = {
    status: 'incomplete',
    detail: 'This entrypoint does not infer runtime-overlay content from host reachability.',
  };
  report.checks.dom = {
    status: 'blocked',
    detail: 'No authenticated built-in browser DOM assertion or screenshot artifact was supplied.',
  };
} catch (error) {
  report.checks.host = { status: 'blocked', detail: error instanceof Error ? error.message : String(error) };
  report.checks.authentication = { status: 'blocked', detail: 'Host was unreachable.' };
  report.checks.runtime = { status: 'blocked', detail: 'Runtime cannot be observed without a reachable Host.' };
  report.checks.dom = { status: 'blocked', detail: 'DOM probe cannot run without a reachable authenticated renderer.' };
} finally {
  writeReport();
}

console.error(`[live-qa] FAIL: wrote ${reportPath}`);
console.error('[live-qa] This fail-closed entrypoint only records host preflight. QA must add real authenticated built-in browser composer assertions.');
process.exitCode = 1;
