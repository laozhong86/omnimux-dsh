import { randomUUID } from 'node:crypto'
import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { parseArgs } from 'node:util'
import assert from 'node:assert/strict'
import { captureStageContracts, selectStages } from './live-stage-contracts.mjs'
import { STAGE_ASSERTIONS } from './live-stage-probe.mjs'

export function resolveTarget({ target = 'dev', url }, root) {
  assert.ok(target === 'dev' || target === 'l2', `Unknown target: ${target}`)
  assert.ok(target !== 'l2' || url, 'L2 requires --url from this worktree .l2-dev.env')
  const address = new URL(url || 'http://127.0.0.1:45120/')
  assert.ok(address.protocol === 'http:' && ['127.0.0.1', 'localhost'].includes(address.hostname), 'Target must be a local HTTP origin')
  assert.ok(!address.username && !address.password && !address.search && !address.hash && address.pathname === '/', 'Target URL must contain only its origin; authenticate in the browser separately')
  if (target === 'dev') {
    assert.equal(address.port, '45120', 'Dev target must use port 45120')
    return { target, profile: 'omnimux-dev', url: address.href }
  }
  assert.ok(Number(address.port) >= 44201 && Number(address.port) <= 44299, 'L2 port must be 44201–44299; 44200 is production')
  const allocation = Object.fromEntries(readFileSync(join(root, '.l2-dev.env'), 'utf8').split('\n')
    .filter((line) => /^[A-Z_]+=/.test(line)).map((line) => {
      const i = line.indexOf('=')
      return [line.slice(0, i), line.slice(i + 1)]
    }))
  assert.equal(new URL(allocation.URL).href, address.href, 'L2 URL does not match this worktree allocation')
  assert.equal(allocation.PORT, address.port, 'L2 PORT does not match allocated URL')
  assert.equal(realpathSync(allocation.SOURCE), realpathSync(join(root, 'plugins')), 'L2 SOURCE belongs to another worktree')
  assert.match(allocation.TOPIC || '', /^[a-zA-Z0-9_-]+$/, 'Missing or invalid L2 topic')
  const sha = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim()
  assert.ok(allocation.COMMIT?.length >= 7 && sha.startsWith(allocation.COMMIT), 'L2 allocation has a stale COMMIT; rerun pnpm wt dev')
  return { target, profile: `omnimux-dev-${allocation.TOPIC}`, url: address.href }
}

export function validateBrowserReport(browser, report, processStatus) {
  assert.equal(processStatus, 0, `Browser collector failed (exit ${processStatus})`)
  assert.equal(browser.runId, report.runId, 'Stale browser report: run ID mismatch')
  assert.equal(browser.commitSha, report.commitSha, 'Browser report code SHA mismatch')
  assert.equal(browser.requestedUrl, report.url, 'Browser report target mismatch')
  assert.equal(browser.pass, true, `Browser assertions failed: ${browser.errors?.join('; ')}`)
  assert.equal(browser.probe?.targets?.length, report.targets.length, 'Zero or missing browser targets')
  assert.ok(report.targets.length > 0, 'Zero stage targets')
  for (const target of report.targets) {
    const actual = browser.probe.targets.find((entry) => entry.stage === target.stage)
    assert.equal(actual?.tabId, target.tabId, `Missing browser coverage for ${target.stage}`)
    for (const suffix of STAGE_ASSERTIONS) {
      assert.ok(browser.probe.assertions.some((item) => item.name === `${target.stage}:${suffix}` && item.pass), `Missing assertion: ${target.stage}:${suffix}`)
    }
    assert.ok(browser.probe.screenshots?.some((file) => file === join(report.evidenceDir, `${target.stage}.png`) && existsSync(file)), `Missing screenshot: ${target.stage}`)
  }
  assert.ok(browser.probe.assertions.length > 0 && browser.probe.assertions.every((item) => item.pass), 'Missing or failed browser assertions')
  assert.equal(browser.cleanup?.success, true, 'Browser task cleanup failed')
}

export async function runLiveQa(args, { root = process.cwd(), collect = spawnSync } = {}) {
  const report = {
    runId: randomUUID(), commitSha: null, target: null, profile: null, url: null,
    stage: null, targets: [], assertions: [], screenshots: [], pass: false,
    startedAt: new Date().toISOString(), completedAt: null, errors: [],
  }
  const reportPath = join(root, 'docs/evidence/live-qa-report.json')
  let evidenceDir = join(root, '.workbuddy/evidence/live-qa', report.runId)
  try {
    report.commitSha = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim()
    report.dirty = Boolean(execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).trim())
    const { values, positionals } = parseArgs({ args, allowPositionals: true, strict: true, options: {
      target: { type: 'string', default: 'dev' }, url: { type: 'string' }, 'evidence-dir': { type: 'string' },
    } })
    assert.equal(positionals.length, 1, 'Usage: pnpm verify:live <stage|all> [--target=l2 --url=<allocated URL>]')
    report.stage = positionals[0]
    const stages = selectStages(report.stage)
    Object.assign(report, resolveTarget(values, root))
    if (values['evidence-dir']) evidenceDir = resolve(root, values['evidence-dir'], report.runId)
    report.evidenceDir = evidenceDir
    mkdirSync(evidenceDir, { recursive: true })
    const registry = await captureStageContracts(root)
    report.targets = registry.filter((target) => stages.includes(target.stage))
    report.assertions.push({ name: 'actual-sidebar-contracts', pass: true, count: report.targets.length })
    const optionsFile = join(evidenceDir, 'probe-options.json')
    writeFileSync(optionsFile, JSON.stringify({ targets: report.targets, sidebarSelectors: registry.map((t) => t.selector), runId: report.runId }), { mode: 0o600 })
    const result = collect('/bin/bash', [join(root, 'scripts/ego-browser-qa.sh'), report.url, evidenceDir], {
      cwd: root, encoding: 'utf8', timeout: 300_000,
      env: {
        ...process.env, EGO_RUN_ID: report.runId, EGO_GIT_SHA: report.commitSha,
        EGO_TARGET_PROFILE: report.target,
        EGO_BROWSER_PROBE_FILE: join(root, 'scripts/live-stage-probe.mjs'),
        EGO_BROWSER_PROBE_OPTIONS: optionsFile,
      },
    })
    if (result.error) throw result.error
    const browser = JSON.parse(readFileSync(join(evidenceDir, 'ego-browser-report.json'), 'utf8'))
    report.assertions.push(...(browser.probe?.assertions || []))
    report.screenshots = browser.probe?.screenshots || []
    report.browser = { report: join(evidenceDir, 'ego-browser-report.json'), exitCode: result.status, cleanup: browser.cleanup }
    validateBrowserReport(browser, report, result.status)
    report.pass = true
  } catch (error) {
    report.errors.push(error instanceof Error ? error.message : String(error))
  } finally {
    report.completedAt = new Date().toISOString()
    report.evidenceDir = evidenceDir
    mkdirSync(evidenceDir, { recursive: true })
    mkdirSync(dirname(reportPath), { recursive: true })
    const json = `${JSON.stringify(report, null, 2)}\n`
    writeFileSync(join(evidenceDir, 'live-qa-report.json'), json, { mode: 0o600 })
    writeFileSync(reportPath, json, { mode: 0o600 })
  }
  return report
}
