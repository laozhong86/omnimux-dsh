import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createRequire } from 'node:module'
import { afterEach, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { resolveTarget, runLiveQa, validateBrowserReport } from './live-qa.mjs'
import { captureStageContracts, selectStages } from './live-stage-contracts.mjs'
import { assertStageState, readStageState, STAGE_ASSERTIONS } from './live-stage-probe.mjs'

const repo = fileURLToPath(new URL('..', import.meta.url))
const roots = []
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }) })
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-live-qa-'))
  roots.push(root)
  symlinkSync(join(repo, 'plugins'), join(root, 'plugins'))
  execFileSync('git', ['init', '-q', root])
  writeFileSync(join(root, 'README'), 'QA fixture\n')
  execFileSync('git', ['add', 'README'], { cwd: root })
  execFileSync('git', ['-c', 'user.name=QA', '-c', 'user.email=qa@localhost', 'commit', '-qm', 'fixture'], { cwd: root })
  return root
}
function allocate(root, changes = {}) {
  const values = { TOPIC: 'qa', PLUGIN: 'omnimux', PORT: '44201', URL: 'http://127.0.0.1:44201',
    COMMIT: execFileSync('git', ['rev-parse', '--short', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    SOURCE: join(root, 'plugins'), ...changes }
  writeFileSync(join(root, '.l2-dev.env'), Object.entries(values).map(([key, value]) => `${key}=${value}`).join('\n'))
}

test('Dev has a fixed 45120 default and rejects stale env ports, production and remote origins', () => {
  assert.deepEqual(resolveTarget({}, repo), { target: 'dev', profile: 'omnimux-dev', url: 'http://127.0.0.1:45120/' })
  for (const url of ['http://127.0.0.1:44200', 'http://127.0.0.1:44120', 'http://example.com:45120', 'http://127.0.0.1:45120/?token=secret']) {
    assert.throws(() => resolveTarget({ url }, repo))
  }
  assert.throws(() => resolveTarget({ target: 'prod' }, repo), /Unknown target/)
})

test('L2 must match its worktree URL, port, source and current code revision', () => {
  const root = fixture()
  const options = { target: 'l2', url: 'http://127.0.0.1:44201/' }
  assert.throws(() => resolveTarget({ target: 'l2' }, root), /requires --url/)
  assert.throws(() => resolveTarget(options, root), /ENOENT/)
  allocate(root)
  assert.equal(resolveTarget(options, root).profile, 'omnimux-dev-qa')
  for (const mismatch of [{ URL: 'http://127.0.0.1:44202' }, { PORT: '44202' }, { SOURCE: root }, { COMMIT: '0000000' }]) {
    allocate(root, mismatch)
    assert.throws(() => resolveTarget(options, root))
  }
  allocate(root, { PORT: '44200', URL: 'http://127.0.0.1:44200' })
  assert.throws(() => resolveTarget({ target: 'l2', url: 'http://127.0.0.1:44200' }, root), /production/)
})

test('stage selection and actual runtime discovery reject empty or unknown targets', async () => {
  assert.throws(() => selectStages('typo'), /Unknown stage/)
  assert.throws(() => selectStages(''), /Unknown stage/)
  await assert.rejects(captureStageContracts(repo, []), /Zero stage/)
  const targets = await captureStageContracts(repo)
  assert.equal(targets.length, 8)
  assert.equal(targets.filter((target) => target.adapter === 'six-methods-and-disposer').length, 7)
  assert.equal(targets.find((target) => target.stage === 'workflow').selector, '[data-dsh-omnimux-workflow-entry]')
})

const target = { stage: 'assets', selector: '[data-omnimux-assets-entry]', tabId: 'omnimux-assets:library' }
const visible = { hasState: true, sessionId: 's1', contextSessionId: 's1', entryCount: 1, panelOpen: true, active: true,
  activeTab: target.tabId, selected: [target.selector], contentCount: 1, contentLength: 12, loadingOnly: false, visibleErrors: 0 }
test('homepage content cannot replace a visible, nonempty and uniquely selected target Tab', () => {
  assertStageState(visible, target, 's1')
  for (const bad of [{ contentCount: 0 }, { contentLength: 0 }, { loadingOnly: true }, { selected: [] },
    { selected: [target.selector, '[data-other-entry]'] }, { activeTab: 'wrong' }, { visibleErrors: 1 }, { contextSessionId: 's2' }]) {
    assert.throws(() => assertStageState({ ...visible, ...bad }, target, 's1'))
  }
})

test('positive-size content outside the viewport or covered by another panel is not visible', () => {
  const { JSDOM } = createRequire(join(repo, 'plugins/omnimux/package.json'))('jsdom')
  const dom = new JSDOM('<div id="root"><button data-omnimux-assets-entry data-active="true">Assets</button></div><main>Real assets</main><aside>Overlay</aside>', { runScripts: 'outside-only' })
  try {
    const win = dom.window
    const doc = win.document
    const content = doc.querySelector('main')
    const entry = doc.querySelector('button')
    win.HTMLElement.prototype.getAnimations = () => []
    Object.defineProperty(win.HTMLElement.prototype, 'innerText', { get() { return this.textContent } })
    const box = (x) => ({ x, y: 100, left: x, top: 100, right: x + 200, bottom: 300, width: 200, height: 200 })
    entry.getBoundingClientRect = () => box(0)
    content.getBoundingClientRect = () => box(300)
    doc.elementFromPoint = (x) => x < 200 ? entry : content
    const read = () => win.eval(`(${readStageState.toString()})(${JSON.stringify({ ...target, content: 'main' })}, ${JSON.stringify([target.selector])})`)
    assert.equal(read().contentCount, 1)
    content.getBoundingClientRect = () => box(2000)
    assert.equal(read().contentCount, 0)
    content.getBoundingClientRect = () => box(300)
    doc.elementFromPoint = () => doc.querySelector('aside')
    assert.equal(read().contentCount, 0)
    doc.elementFromPoint = () => content
    content.style.opacity = '0'
    assert.equal(read().contentCount, 0)
  } finally { dom.window.close() }
})

test('fresh evidence is required even when a child exits zero', () => {
  const evidenceDir = fixture()
  const screenshot = join(evidenceDir, 'assets.png')
  writeFileSync(screenshot, 'test screenshot')
  const report = { runId: 'new', commitSha: 'head', url: 'http://127.0.0.1:45120/', targets: [target], evidenceDir }
  const browser = { ...report, requestedUrl: report.url, pass: true, cleanup: { success: true },
    probe: { targets: [target], assertions: STAGE_ASSERTIONS.map((suffix) => ({ name: `assets:${suffix}`, pass: true })), screenshots: [screenshot] } }
  validateBrowserReport(browser, report, 0)
  assert.throws(() => validateBrowserReport({ ...browser, runId: 'old' }, report, 0), /Stale/)
  assert.throws(() => validateBrowserReport(browser, report, 23), /failed/)
  assert.throws(() => validateBrowserReport({ ...browser, probe: { targets: [], assertions: [] } }, report, 0), /targets/)
  assert.throws(() => validateBrowserReport({ ...browser, pass: false }, report, 0), /assertions failed/)
  assert.throws(() => validateBrowserReport({ ...browser, probe: { ...browser.probe, assertions: [{ name: 'homepage', pass: true }] } }, report, 0), /Missing assertion/)
})

test('CLI argument failures overwrite stale success and retain per-run failure evidence', async () => {
  const root = fixture()
  mkdirSync(join(root, 'docs/evidence'), { recursive: true })
  writeFileSync(join(root, 'docs/evidence/live-qa-report.json'), '{"pass":true,"runId":"old"}')
  for (const args of [[], ['typo'], ['assets', '--target=dev', '--url=http://127.0.0.1:44200']]) {
    const report = await runLiveQa(args, { root, collect() { assert.fail('invalid input must not launch browser') } })
    assert.equal(report.pass, false)
    assert.ok(report.errors.length)
    assert.notEqual(report.runId, 'old')
    assert.deepEqual(JSON.parse(readFileSync(join(root, 'docs/evidence/live-qa-report.json'), 'utf8')), report)
    assert.deepEqual(JSON.parse(readFileSync(join(report.evidenceDir, 'live-qa-report.json'), 'utf8')), report)
  }
})

test('a child crash cannot reuse previous browser evidence or turn into a skipped live probe', async () => {
  const root = fixture()
  const report = await runLiveQa(['assets'], { root, collect(_command, args) {
    writeFileSync(join(args[2], 'ego-browser-report.json'), JSON.stringify({ pass: true, runId: 'old' }))
    return { status: 23 }
  } })
  assert.equal(report.pass, false)
  assert.match(report.errors.join(';'), /exit 23/)
  const cli = spawnSync(process.execPath, [join(repo, 'scripts/agent-live-qa.mjs'), 'assets', '--target=prod'], { encoding: 'utf8' })
  assert.notEqual(cli.status, 0)
})
