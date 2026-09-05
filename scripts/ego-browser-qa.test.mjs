import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import {
  chmodSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { afterEach, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { acquireTaskLock, releaseTaskLock } from './ego-task-lock.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const scriptPath = join(here, 'ego-browser-qa.sh')
const temporaryRoots = []
const expectedSha = '1234567890abcdef1234567890abcdef12345678'

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true })
  }
})

function writeFakeEgoBrowser(binPath) {
  const executable = `#!/usr/bin/env node
const { readFileSync, writeFileSync } = require('node:fs')
const { spawnSync } = require('node:child_process')

if (process.argv[2] !== 'nodejs') {
  process.stderr.write('mock only supports ego-browser nodejs\\n')
  process.exit(64)
}

const source = readFileSync(0, 'utf8')
const phase = source.includes('useOrCreateTaskSpace') ? 'browser' : 'cleanup'
const mode = process.env.MOCK_EGO_MODE || 'success'
if (mode === 'subprocess-failure' && phase === 'browser') {
  process.stderr.write('mock ego runtime crashed before evaluation\\n')
  process.exit(23)
}

const config = {
  mode,
  phase,
  snapshot: process.env.MOCK_EGO_SNAPSHOT || 'OmniMux ready',
  screenshotSource: process.env.MOCK_EGO_SCREENSHOT_SOURCE,
  tracePath: process.env.MOCK_EGO_TRACE_PATH,
}
const prelude = \`const __mockConfig = \${JSON.stringify(config)}
const __mockFs = await import('node:fs')
globalThis.useOrCreateTaskSpace = async (name) => ({ id: 'task:' + name })
globalThis.openOrReuseTab = async () => {
  if (__mockConfig.mode === 'browser-hard-exit-after-task') process.exit(23)
  if (__mockConfig.mode === 'browser-failure') throw new Error('mock browser open failed')
  return { id: 'mock-tab' }
}
globalThis.pageInfo = async () => ({ url: EGO_INPUT.url, title: 'Mock OmniMux', w: 1280, h: 720, pw: 1280, ph: 720 })
globalThis.snapshotText = async () => __mockConfig.mode === 'empty-snapshot' ? '' : __mockConfig.snapshot
globalThis.js = async () => ({ bodyText: __mockConfig.snapshot, bodyTextLength: __mockConfig.snapshot.length, interactiveCount: 2, errorCount: 0, hasDocumentRoot: true })
globalThis.captureScreenshot = async () => {
  if (__mockConfig.mode === 'screenshot-failure') throw new Error('mock screenshot failed')
  __mockFs.writeFileSync(__mockConfig.screenshotSource, 'mock png')
  return { path: __mockConfig.screenshotSource }
}
globalThis.completeTaskSpace = async (id, options) => {
  if (__mockConfig.mode === 'cleanup-exit-zero') process.exit(0)
  if (__mockConfig.mode === 'cleanup-failure') throw new Error('mock cleanup failed')
  if (__mockConfig.mode === 'cleanup-skipped') return { done: false, skipped: 'user-owned' }
  __mockFs.appendFileSync(__mockConfig.tracePath, JSON.stringify({ id, keep: options.keep }) + '\\\\n')
  return { done: true, id, keep: options.keep }
}
globalThis.cliLog = (value) => console.log(value)
for (const name of ['click', 'gotoAndWait', 'waitForElement']) globalThis[name] = async () => {}
\`

const child = spawnSync(process.execPath, ['--input-type=module'], {
  input: prelude + source,
  encoding: 'utf8',
  env: { PATH: process.env.PATH || '' },
})
if (child.stdout) process.stdout.write(child.stdout)
if (child.stderr) process.stderr.write(child.stderr)
process.exit(child.status === null ? 70 : child.status)
`

  writeFileSync(binPath, executable)
  chmodSync(binPath, 0o755)
}

function runCollector({
  mode = 'success',
  url = 'http://127.0.0.1:44201/',
  expected = '',
  snapshot = expected || 'OmniMux ready',
  taskName = 'qa task',
  evidenceName = 'evidence',
  staleEvidence = false,
  root: suppliedRoot,
  evidenceDir: suppliedEvidenceDir,
  runId = `run-${mode}`,
  target = 'l2',
  probeSource,
} = {}) {
  const root = suppliedRoot || mkdtempSync(join(tmpdir(), 'omnimux-ego-qa-'))
  if (!suppliedRoot) temporaryRoots.push(root)
  const binDir = join(root, 'bin')
  const evidenceDir = suppliedEvidenceDir || join(root, evidenceName)
  const tracePath = join(root, 'cleanup.jsonl')
  const screenshotSource = join(root, 'source screenshot.png')
  mkdirSync(binDir, { recursive: true })
  mkdirSync(evidenceDir, { recursive: true })
  writeFakeEgoBrowser(join(binDir, 'ego-browser'))
  if (probeSource) {
    writeFileSync(join(root, 'probe.mjs'), probeSource)
    writeFileSync(join(root, 'probe-options.json'), '{}')
  }

  if (staleEvidence) {
    writeFileSync(join(evidenceDir, 'ego-browser-report.json'), '{"pass":true,"runId":"stale"}\n')
    writeFileSync(join(evidenceDir, 'ego-browser.png'), 'stale screenshot')
  }

  const result = spawnSync('/bin/bash', [scriptPath, url, evidenceDir, expected], {
    cwd: dirname(here),
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${binDir}:${process.env.PATH || ''}`,
      DSH_HOME: '',
      EGO_GIT_SHA: expectedSha,
      EGO_ISSUE_ID: '508',
      EGO_PLUGIN: 'cross',
      EGO_RUN_ID: runId,
      EGO_TASK_SPACE_NAME: taskName,
      EGO_TARGET_PROFILE: target,
      EGO_BROWSER_PROBE_FILE: probeSource ? join(root, 'probe.mjs') : '',
      EGO_BROWSER_PROBE_OPTIONS: probeSource ? join(root, 'probe-options.json') : '',
      MOCK_EGO_MODE: mode,
      MOCK_EGO_SNAPSHOT: snapshot,
      MOCK_EGO_SCREENSHOT_SOURCE: screenshotSource,
      MOCK_EGO_TRACE_PATH: tracePath,
    },
  })

  const reportPath = join(evidenceDir, 'ego-browser-report.json')
  assert.ok(existsSync(reportPath), `collector must write a report; stderr=${result.stderr}`)
  return {
    ...result,
    evidenceDir,
    report: JSON.parse(readFileSync(reportPath, 'utf8')),
    trace: existsSync(tracePath)
      ? readFileSync(tracePath, 'utf8').trim().split('\n').filter(Boolean).map((line) => JSON.parse(line))
      : [],
  }
}

test('collector uses an ESM-safe serialized prelude instead of child environment passthrough', () => {
  const source = readFileSync(scriptPath, 'utf8')
  assert.match(source, /const fs = await import\('node:fs'\)/)
  assert.match(source, /Buffer\.from\('\%s', 'base64'\)/)
  assert.doesNotMatch(source, /export EGO_BROWSER_/)
  assert.doesNotMatch(source, /process\.env\.EGO_BROWSER_/)
})

test('success preserves escaped JSON values and completes the task space', () => {
  const expected = `quote " and apostrophe ' and newline\n中文 \\ \${notCode}`
  const taskName = `issue 508 / 测试 ' " \${task}`
  const run = runCollector({
    expected,
    snapshot: `prefix ${expected} suffix`,
    taskName,
    evidenceName: '证据 空格 "quote"',
    staleEvidence: true,
  })

  assert.equal(run.status, 0, run.stderr)
  assert.equal(run.report.pass, true)
  assert.equal(run.report.runId, 'run-success')
  assert.equal(run.report.commitSha, expectedSha)
  assert.equal(run.report.expectedText, expected)
  assert.equal(run.report.taskSpaceName, taskName)
  assert.equal(run.report.dshHome, null)
  assert.equal(run.report.cleanup.state, 'completed')
  assert.equal(run.report.cleanup.keep, false)
  assert.equal(run.report.cleanup.success, true)
  assert.deepEqual(run.trace, [{ id: `task:${taskName}`, keep: false }])
  assert.equal(readFileSync(join(run.evidenceDir, 'ego-browser.png'), 'utf8'), 'mock png')
})

test('empty optional values remain empty without breaking a successful report', () => {
  const run = runCollector({ expected: '', snapshot: 'visible content' })

  assert.equal(run.status, 0, run.stderr)
  assert.equal(run.report.pass, true)
  assert.equal(run.report.expectedText, null)
  assert.equal(run.report.dshHome, null)
  assert.equal(run.report.errors.length, 0)
})

test('Dev is explicit and production is rejected before browser task creation', () => {
  assert.equal(runCollector({ target: 'dev', url: 'http://127.0.0.1:45120/' }).status, 0)
  for (const options of [{ url: 'http://127.0.0.1:44200/' }, { url: 'http://127.0.0.1:45120/' }, { target: 'dev', url: 'http://127.0.0.1:44201/' }]) {
    const result = runCollector(options)
    assert.notEqual(result.status, 0)
    assert.equal(result.report.phase, 'preflight')
    assert.equal(result.report.taskSpaceId, null)
  }
})

test('semantic probe failure survives the collector and keeps the failed task evidence', () => {
  const result = runCollector({ probeSource: `export async function runStageProbe(browser, options) {
    options.onProgress({ assertions: [{ name: 'empty-stage', pass: false }] });
    throw new Error('empty stage despite HTTP 200');
  }` })
  assert.notEqual(result.status, 0)
  assert.match(result.report.errors.join(';'), /empty stage despite HTTP 200/)
  assert.equal(result.report.probe.assertions[0].pass, false)
  assert.equal(result.report.cleanup.state, 'retained')
})

test('browser failure exits nonzero, records the error, and retains the task space', () => {
  const run = runCollector({ mode: 'browser-failure' })

  assert.notEqual(run.status, 0)
  assert.equal(run.report.pass, false)
  assert.match(run.report.errors.join('\n'), /mock browser open failed/)
  assert.equal(run.report.cleanup.state, 'retained')
  assert.equal(run.report.cleanup.keep, true)
  assert.deepEqual(run.trace, [{ id: 'task:qa task', keep: true }])
})

test('empty snapshot fails closed and retains the task space', () => {
  const run = runCollector({ mode: 'empty-snapshot' })

  assert.notEqual(run.status, 0)
  assert.equal(run.report.pass, false)
  assert.match(run.report.errors.join('\n'), /snapshotText\(\) 为空/)
  assert.equal(run.report.cleanup.state, 'retained')
  assert.equal(run.report.cleanup.keep, true)
})

test('screenshot failure exits nonzero with a complete retained-task report', () => {
  const run = runCollector({ mode: 'screenshot-failure' })

  assert.notEqual(run.status, 0)
  assert.equal(run.report.pass, false)
  assert.match(run.report.errors.join('\n'), /mock screenshot failed/)
  assert.equal(run.report.screenshot, null)
  assert.equal(run.report.cleanup.state, 'retained')
  assert.equal(run.report.cleanup.success, true)
})

test('hard ego-browser subprocess failure still produces traceable evidence', () => {
  const run = runCollector({ mode: 'subprocess-failure' })

  assert.equal(run.status, 23)
  assert.equal(run.report.pass, false)
  assert.equal(run.report.runId, 'run-subprocess-failure')
  assert.equal(run.report.commitSha, expectedSha)
  assert.equal(run.report.requestedUrl, 'http://127.0.0.1:44201/')
  assert.equal(run.report.browserProcessExitCode, 23)
  assert.match(run.report.errors.join('\n'), /子进程失败（exit 23）/)
  assert.equal(run.report.cleanup.state, 'not-created')
  assert.equal(run.report.cleanup.attempted, false)
})

test('cleanup failure turns an otherwise successful run into a recorded failure', () => {
  const run = runCollector({ mode: 'cleanup-failure' })

  assert.notEqual(run.status, 0)
  assert.equal(run.report.pass, false)
  assert.match(run.report.errors.join('\n'), /task space 清理失败: mock cleanup failed/)
  assert.equal(run.report.cleanup.state, 'failed')
  assert.equal(run.report.cleanup.success, false)
  assert.equal(run.report.cleanup.keep, false)
})

test('a skipped cleanup cannot be reported as completed', () => {
  const run = runCollector({ mode: 'cleanup-skipped' })

  assert.notEqual(run.status, 0)
  assert.equal(run.report.pass, false)
  assert.match(run.report.errors.join('\n'), /completeTaskSpace 未完成/)
  assert.equal(run.report.cleanup.state, 'failed')
  assert.equal(run.report.cleanup.success, false)
  assert.equal(run.report.cleanup.keep, false)
})

test('invalid URL records the intended preflight failure instead of an unset-variable error', () => {
  const run = runCollector({ url: 'invalid-url' })

  assert.equal(run.status, 2, run.stderr)
  assert.equal(run.report.phase, 'preflight')
  assert.match(run.report.errors.join('\n'), /URL 必须是 http\(s\): invalid-url/)
  assert.doesNotMatch(run.stderr, /unbound variable/)
})

test('a hard browser exit after task creation persists the task id and retains it', () => {
  const run = runCollector({ mode: 'browser-hard-exit-after-task' })

  assert.equal(run.status, 23, run.stderr)
  assert.equal(run.report.pass, false)
  assert.equal(run.report.taskSpaceId, 'task:qa task')
  assert.equal(run.report.cleanup.state, 'retained')
  assert.equal(run.report.cleanup.keep, true)
  assert.deepEqual(run.trace, [{ id: 'task:qa task', keep: true }])
})

test('a cleanup child that exits successfully without writing a result is recorded as failed', () => {
  const run = runCollector({ mode: 'cleanup-exit-zero' })

  assert.equal(run.status, 1, run.stderr)
  assert.equal(run.report.pass, false)
  assert.equal(run.report.cleanup.state, 'failed')
  assert.equal(run.report.cleanup.success, false)
  assert.match(run.report.errors.join('\n'), /清理子进程没有写入结果/)
})

test('a concurrent collector cannot overwrite the active run evidence', () => {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-ego-qa-lock-'))
  temporaryRoots.push(root)
  const evidenceDir = join(root, 'evidence')
  const lockDir = join(evidenceDir, '.ego-browser-qa.lock')
  const activeReport = {
    pass: true,
    runId: 'active-run',
    taskSpaceId: 'active-task',
    requestedUrl: 'http://127.0.0.1:44201/',
  }
  mkdirSync(lockDir, { recursive: true })
  writeFileSync(join(lockDir, 'owner.json'), `${JSON.stringify({ pid: process.pid })}\n`)
  writeFileSync(join(evidenceDir, 'ego-browser-report.json'), `${JSON.stringify(activeReport)}\n`)
  writeFileSync(join(evidenceDir, 'ego-browser.png'), 'active screenshot')

  const run = runCollector({
    root,
    evidenceDir,
    runId: 'run-lock-contention',
  })

  assert.equal(run.status, 75, `${run.stderr}\n${run.stdout}\n${JSON.stringify(run.report)}`)
  assert.deepEqual(run.report, activeReport)
  const rejectedReportNames = readdirSync(evidenceDir)
    .filter((name) => name.startsWith('ego-browser-report-rejected-'))
  assert.equal(rejectedReportNames.length, 1)
  const rejected = JSON.parse(readFileSync(join(evidenceDir, rejectedReportNames[0]), 'utf8'))
  assert.equal(rejected.runId, 'run-lock-contention')
  assert.equal(rejected.exitCode, 75)
  assert.match(rejected.errors.join('\n'), /证据目录正在被另一个/)
})

test('different evidence directories cannot control the same browser task concurrently', () => {
  const taskName = `lock-test-${process.pid}`
  const lock = acquireTaskLock(`task:${taskName}`, 'other-run', process.pid)
  try {
    const run = runCollector({ taskName, evidenceName: 'new-run-directory' })
    assert.notEqual(run.status, 0)
    assert.match(run.report.errors.join(';'), /task space .* is busy/)
    assert.equal(run.report.cleanup.attempted, false)
    assert.equal(run.report.taskLock, undefined)
    assert.deepEqual(run.trace, [])
  } finally { releaseTaskLock(lock) }
})
