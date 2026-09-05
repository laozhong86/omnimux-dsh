import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import vm from 'node:vm'
import { afterEach, test } from 'node:test'
import { captureIabPng } from './codex-browser-qa.mjs'
import { assertStageState, saveProbeScreenshot } from './live-stage-probe.mjs'

const repo = process.cwd()
const roots = []
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64')

afterEach(() => {
  roots.splice(0).forEach((root) => rmSync(root, { recursive: true, force: true }))
})

async function fixtureRunner(root) {
  const scripts = join(root, 'scripts')
  mkdirSync(scripts, { recursive: true })
  for (const file of ['codex-browser-qa.mjs', 'live-qa.mjs', 'live-qa-validation.mjs', 'live-stage-probe.mjs', 'live-runtime-proof.mjs', 'live-stage-contracts.mjs']) copyFileSync(join(repo, 'scripts', file), join(scripts, file))
  symlinkSync(join(repo, 'node_modules'), join(root, 'node_modules'))
  execFileSync('git', ['init', '-q'], { cwd: root })
  writeFileSync(join(root, 'README'), 'fixture\n')
  execFileSync('git', ['add', '.'], { cwd: root })
  execFileSync('git', ['-c', 'user.name=QA', '-c', 'user.email=qa@localhost', 'commit', '-qm', 'fixture'], { cwd: root })
  return import(`${pathToFileURL(join(scripts, 'codex-browser-qa.mjs')).href}?fixture=${Date.now()}`)
}

async function request(overrides = {}) {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-codex-qa-'))
  roots.push(root)
  const runner = await fixtureRunner(root)
  const evidenceDir = join(root, '.workbuddy', 'evidence', 'live-qa', 'run-581')
  const sha = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim()
  const value = {
    version: 1, root, runId: 'run-581', commitSha: sha, target: 'dev', profile: 'omnimux-dev',
    url: 'http://127.0.0.1:45120/', allocation: null, runtime: null, stage: 'assets', targets: [],
    sidebarSelectors: [], evidenceDir, reportPath: join(root, 'docs/evidence/live-qa-report.json'),
    createdAt: new Date(1000).toISOString(), expiresAt: new Date(Date.now() + 60_000).toISOString(), consumedAt: null,
    ...overrides,
  }
  const path = join(root, 'request.json')
  writeFileSync(path, `${JSON.stringify(value)}\n`)
  return { path, value, runner }
}

function tab(url = 'http://127.0.0.1:45120/') {
  return { url: async () => url, playwright: { locator: () => ({}) }, capabilities: { get: async () => ({}) }, screenshot: async () => png }
}

test('expired prepared request fails and is one-shot consumed', async () => {
  const item = await request({ expiresAt: new Date(0).toISOString() })
  const first = await item.runner.runPreparedQa(item.path, { tab: tab() })
  assert.equal(first.pass, false)
  assert.match(first.errors.join(';'), /expired/i)
  const second = await item.runner.runPreparedQa(item.path, { tab: tab() })
  assert.equal(second.pass, false)
  assert.match(second.errors.join(';'), /already consumed/i)
})

test('wrong SHA fails closed while retaining the prepared run identity in evidence', async () => {
  const item = await request({ commitSha: '0'.repeat(40) })
  const result = await item.runner.runPreparedQa(item.path, { tab: tab() })
  assert.equal(result.pass, false)
  assert.equal(result.runId, item.value.runId)
  const saved = JSON.parse(readFileSync(item.value.reportPath, 'utf8'))
  assert.equal(saved.runId, item.value.runId)
  assert.match(saved.errors.join(';'), /SHA is stale/i)
})

test('selected IAB URL mismatch is classified as browser transport failure', async () => {
  const item = await request()
  const result = await item.runner.runPreparedQa(item.path, { tab: tab('http://127.0.0.1:45121/') })
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

test('Stage selection accepts a serialized cross-realm array with exactly the expected selector', () => {
  const target = { stage: 'assets', selector: '[data-omnimux-assets-entry]', tabId: 'omnimux-assets:library' }
  const selected = vm.runInNewContext(`['${target.selector}']`)
  assert.notEqual(Object.getPrototypeOf(selected), Array.prototype)
  assertStageState({ hasState: true, sessionId: 's1', contextSessionId: 's1', entryCount: 1, panelOpen: true, active: true, activeTab: target.tabId, selected, contentCount: 1, contentLength: 1, loadingOnly: false, visibleErrors: 0 }, target, 's1')
})
