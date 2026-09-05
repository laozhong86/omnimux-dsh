import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { closeSync, existsSync, mkdirSync, openSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { runStageProbe } from './live-stage-probe.mjs'
import { captureRuntimeProof, assertRuntimeProofStable } from './live-runtime-proof.mjs'
import { verifyL2Runtime } from './live-qa.mjs'
import { validateLiveQaReport } from './live-qa-validation.mjs'

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { mode: 0o600 })
}

function consumeRequest(requestPath, request, now = Date.now()) {
  assert.ok(existsSync(requestPath), 'Prepared QA request does not exist')
  const lockPath = `${requestPath}.consumed`
  let fd
  try { fd = openSync(lockPath, 'wx', 0o600) } catch { throw new Error('Prepared QA request was already consumed') }
  try {
    assert.equal(request.version, 1, 'Unsupported QA request version')
    assert.ok(!request.consumedAt, 'Prepared QA request was already consumed')
    assert.ok(Date.parse(request.expiresAt) > now, 'Prepared QA request expired; run verify:live again')
    request.consumedAt = new Date(now).toISOString()
    writeJson(requestPath, request)
    return request
  } finally { if (fd !== undefined) closeSync(fd) /* lock file deliberately remains as the one-shot receipt */ }
}

function sameUrl(actual, expected) {
  const got = new URL(actual); const wanted = new URL(expected)
  return got.origin === wanted.origin && got.pathname === wanted.pathname && !got.username && !got.password && !got.search
}

async function evaluate(tab, expression) {
  const cdp = await tab.capabilities.get('cdp')
  const response = await cdp.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (response?.exceptionDetails) throw new Error(`CDP page evaluation failed: ${response.exceptionDetails.text || 'exception'}`)
  return response?.result?.value
}

export async function captureIabPng(tab) {
  const cdp = await tab.capabilities.get('cdp')
  let response
  try { response = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }) } catch (error) { throw new Error(`browser-transport: CDP PNG screenshot failed: ${error.message}`) }
  assert.match(response?.data || '', /^[A-Za-z0-9+/]+={0,2}$/, 'browser-transport: CDP PNG screenshot payload is missing')
  const bytes = Buffer.from(response.data, 'base64')
  assert.ok(bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), 'browser-transport: CDP screenshot was not PNG')
  return bytes
}

function browserFor(tab) {
  return {
    js: expression => evaluate(tab, expression),
    click: async selector => tab.playwright.locator(selector).click(),
    waitForElement: async (selector, { timeout = 12 } = {}) => tab.playwright.locator(selector).waitFor({ state: 'visible', timeoutMs: timeout * 1000 }),
    captureScreenshot: () => captureIabPng(tab),
  }
}

/** Execute a one-shot prepared request in a real Codex IAB Tab. */
const moduleRoot = fileURLToPath(new URL('..', import.meta.url))
const isInside = (parent, candidate) => { const rel = relative(parent, candidate); return rel && !rel.startsWith('..') && !rel.includes('/../') }

export async function runPreparedQa(requestPath, { tab, now = () => Date.now() } = {}) {
  assert.ok(tab?.playwright?.locator && tab?.capabilities?.get && typeof tab?.screenshot === 'function' && typeof tab?.url === 'function', 'A real Codex IAB Tab is required')
  let request
  let report
  let safeRequest = false
  try {
    assert.ok(existsSync(requestPath), 'Prepared QA request does not exist')
    request = JSON.parse(readFileSync(requestPath, 'utf8'))
    const root = request.root || moduleRoot
    assert.equal(resolve(root), resolve(moduleRoot), 'Prepared QA request belongs to another worktree')
    assert.ok(isInside(join(root, '.workbuddy', 'evidence', 'live-qa'), resolve(request.evidenceDir)), 'Prepared QA evidence directory is outside this worktree')
    assert.equal(resolve(request.reportPath), resolve(root, 'docs/evidence/live-qa-report.json'), 'Prepared QA report path is outside this worktree')
    safeRequest = true
    report = { ...request, status: 'running', pass: false, errors: [], assertions: [], screenshots: [], tool: 'codex-iab', startedAt: new Date(now()).toISOString() }
    consumeRequest(requestPath, request, now())
    report.consumedAt = request.consumedAt
    assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), request.commitSha, 'Prepared QA request SHA is stale')
    const actualUrl = await tab.url()
    assert.ok(sameUrl(actualUrl, request.url), 'browser-transport: selected IAB tab URL does not match prepared request')
    assert.ok(typeof tab.id === 'string' && tab.id.length > 0, 'Selected IAB tab has no stable identity')
    report.tabId = tab.id
    const parsedActual = new URL(actualUrl)
    report.actualUrl = `${parsedActual.origin}${parsedActual.pathname}`
    const l2Before = request.target === 'l2' ? verifyL2Runtime(request) : null
    const before = await captureRuntimeProof(tab, { root, targets: request.targets, url: request.url, target: request.target, allocation: request.allocation })
    const probe = await runStageProbe(browserFor(tab), { targets: request.targets, sidebarSelectors: request.sidebarSelectors, evidenceDir: request.evidenceDir, onProgress: value => { report.probe = value } })
    const after = await captureRuntimeProof(tab, { root, targets: request.targets, url: request.url, target: request.target, allocation: request.allocation })
    assertRuntimeProofStable(before, after)
    if (request.target === 'l2') assert.deepEqual(verifyL2Runtime(request), l2Before, 'L2 Host changed during verification')
    assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), request.commitSha, 'Code SHA changed during verification')
    report.probe = probe; report.runtimeProof = { before, after }; report.assertions = probe.assertions; report.screenshots = probe.screenshots
    report.cleanup = { kind: 'workbench-restored', success: probe.assertions.some(item => item.name === 'initial-session-restored' && item.pass) && probe.assertions.some(item => item.name === 'initial-workbench-restored' && item.pass), tabRetained: true }
    report.completedAt = new Date(now()).toISOString()
    report.status = 'completed'; report.pass = true
    validateLiveQaReport(report, request, { root, runId: request.runId, commitSha: request.commitSha, stage: request.stage, target: request.target })
  } catch (error) {
    report ||= { runId: request?.runId || 'rejected-request', status: 'failed', pass: false, errors: [], tool: 'codex-iab', evidenceDir: join(moduleRoot, '.workbuddy/evidence/live-qa/rejected-request'), reportPath: join(moduleRoot, 'docs/evidence/live-qa-report.json') }
    report.status = 'failed'; report.pass = false; report.errors.push(error instanceof Error ? error.message : String(error))
  } finally {
    if (report && safeRequest) {
      report.completedAt ||= new Date(now()).toISOString()
      writeJson(join(request.evidenceDir, 'live-qa-report.json'), report)
      writeJson(request.reportPath, report)
    } else if (report) {
      report.completedAt ||= new Date(now()).toISOString()
      writeJson(join(report.evidenceDir, 'live-qa-report.json'), report)
    }
  }
  return report
}
