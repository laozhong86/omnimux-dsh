import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, test } from 'node:test'
import { captureIabPng, runPreparedQa } from './codex-browser-qa.mjs'
import { saveProbeScreenshot } from './live-stage-probe.mjs'

const repo = process.cwd()
const roots = []
const evidenceDirs = []
const sha = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: repo, encoding: 'utf8' }).trim()
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64')

afterEach(() => {
  roots.splice(0).forEach((root) => rmSync(root, { recursive: true, force: true }))
  evidenceDirs.splice(0).forEach((root) => rmSync(root, { recursive: true, force: true }))
})

function request(overrides = {}) {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-codex-qa-'))
  roots.push(root)
  const evidenceDir = join(repo, '.workbuddy', 'evidence', 'live-qa', `test-${Date.now()}-${Math.random().toString(16).slice(2)}`)
  evidenceDirs.push(evidenceDir)
  const value = {
    version: 1, root: repo, runId: 'run-581', commitSha: sha, target: 'dev', profile: 'omnimux-dev',
    url: 'http://127.0.0.1:45120/', allocation: null, runtime: null, stage: 'assets', targets: [],
    sidebarSelectors: [], evidenceDir, reportPath: join(repo, 'docs/evidence/live-qa-report.json'),
    createdAt: new Date(1000).toISOString(), expiresAt: new Date(Date.now() + 60_000).toISOString(), consumedAt: null,
    ...overrides,
  }
  const path = join(root, 'request.json')
  writeFileSync(path, `${JSON.stringify(value)}\n`)
  return { path, value }
}

function tab(url = 'http://127.0.0.1:45120/') {
  return { url: async () => url, playwright: { locator: () => ({}) }, capabilities: { get: async () => ({}) }, screenshot: async () => png }
}

test('expired prepared request fails and is one-shot consumed', async () => {
  const item = request({ expiresAt: new Date(0).toISOString() })
  const first = await runPreparedQa(item.path, { tab: tab(), root: repo })
  assert.equal(first.pass, false)
  assert.match(first.errors.join(';'), /expired/i)
  const second = await runPreparedQa(item.path, { tab: tab(), root: repo })
  assert.equal(second.pass, false)
  assert.match(second.errors.join(';'), /already consumed/i)
})

test('wrong SHA fails closed while retaining the prepared run identity in evidence', async () => {
  const item = request({ commitSha: '0'.repeat(40) })
  const result = await runPreparedQa(item.path, { tab: tab(), root: repo })
  assert.equal(result.pass, false)
  assert.equal(result.runId, item.value.runId)
  const saved = JSON.parse(readFileSync(item.value.reportPath, 'utf8'))
  assert.equal(saved.runId, item.value.runId)
  assert.match(saved.errors.join(';'), /SHA is stale/i)
})

test('selected IAB URL mismatch is classified as browser transport failure', async () => {
  const item = request()
  const result = await runPreparedQa(item.path, { tab: tab('http://127.0.0.1:45121/'), root: repo })
  assert.equal(result.pass, false)
  assert.match(result.errors.join(';'), /browser-transport/i)
})

test('empty screenshots fail while typed array screenshots are validated and written as PNG', () => {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-png-'))
  roots.push(root)
  assert.throws(() => saveProbeScreenshot(new Uint8Array(), join(root, 'empty.png')), /PNG/i)
  const destination = join(root, 'typed.png')
  saveProbeScreenshot(new Uint8Array(png), destination)
  assert.deepEqual(readFileSync(destination), png)
})

test('IAB adapter requests a PNG through the selected tab CDP when tab.screenshot returns JPEG', async () => {
  const calls = []
  const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x4a, 0x46, 0x49, 0x46])
  const result = await captureIabPng({
    screenshot: async () => jpeg,
    capabilities: { get: async () => ({ send: async (method, options) => {
      calls.push([method, options])
      return { data: png.toString('base64') }
    } }) },
  })
  assert.deepEqual(result, png)
  assert.deepEqual(calls, [['Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }]])
})
