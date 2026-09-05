#!/usr/bin/env bash
# ego-browser-qa.sh — mandatory L2 browser evidence collector.
#
# Every browser self-check in this repository must go through ego-browser.
# The script fails closed when the browser, L2 page, semantic evidence, DOM
# evidence, screenshot, or task-space cleanup cannot be obtained.
#
# Usage:
#   scripts/ego-browser-qa.sh <l2-url> [evidence_dir] [expected_text]
set -euo pipefail

URL="${1:-${OMNIMUX_L2_URL:-}}"
EVIDENCE_DIR_INPUT="${2:-${OMNIMUX_EVIDENCE_DIR:-}}"
EXPECTED="${3:-${OMNIMUX_EGO_EXPECT:-}}"
ISSUE_ID="${EGO_ISSUE_ID:-local}"
PLUGIN="${EGO_PLUGIN:-surface}"
TASK_NAME="${EGO_TASK_SPACE_NAME:-omnimux-qa-issue-${ISSUE_ID}-${PLUGIN}}"
TARGET_PROFILE="${EGO_TARGET_PROFILE:-l2}"

if [[ -n "$EVIDENCE_DIR_INPUT" ]]; then
  mkdir -p "$EVIDENCE_DIR_INPUT"
  EVIDENCE_DIR="$(cd "$EVIDENCE_DIR_INPUT" && pwd)"
else
  REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
  EVIDENCE_DIR="$REPO_ROOT/.workbuddy/evidence/ego-browser"
  mkdir -p "$EVIDENCE_DIR"
fi

REPORT_PATH="$EVIDENCE_DIR/ego-browser-report.json"
LOG_PATH="$EVIDENCE_DIR/ego-browser.log"
SCREENSHOT_PATH="$EVIDENCE_DIR/ego-browser.png"
GIT_SHA="${EGO_GIT_SHA:-$(git rev-parse HEAD 2>/dev/null || echo unknown)}"
DSH_HOME_VALUE="${DSH_HOME:-}"
RUN_ID="${EGO_RUN_ID:-$(node -e 'process.stdout.write(require("node:crypto").randomUUID())')}"
RUN_ARTIFACT_ID="$(node -e "process.stdout.write(require('node:crypto').randomUUID())")"
LOCK_DIR="$EVIDENCE_DIR/.ego-browser-qa.lock"
REJECTED_REPORT_PATH="$EVIDENCE_DIR/ego-browser-report-rejected-${RUN_ARTIFACT_ID}.json"
LOCK_HELD=0

release_lock() {
  if [[ "$LOCK_HELD" != '1' ]]; then return; fi
  local lock_is_ours
  lock_is_ours="$(node -e 'try { const owner = JSON.parse(require("node:fs").readFileSync(process.argv[1], "utf8")); process.stdout.write(owner.pid === Number(process.argv[2]) && owner.runId === process.argv[3] ? "1" : "0") } catch { process.stdout.write("0") }' "$LOCK_DIR/owner.json" "$$" "$RUN_ID" 2>/dev/null || true)"
  if [[ "$lock_is_ours" == '1' ]]; then
    rm -f "$LOCK_DIR/owner.json"
    rmdir "$LOCK_DIR" 2>/dev/null || true
  fi
  LOCK_HELD=0
}

reclaim_stale_lock() {
  if [[ -L "$LOCK_DIR" || ! -d "$LOCK_DIR" ]]; then return 1; fi

  local owner_pid
  owner_pid="$(node -e 'try { const owner = require("node:fs").readFileSync(process.argv[1], "utf8"); const { pid } = JSON.parse(owner); process.stdout.write(Number.isSafeInteger(pid) ? String(pid) : "") } catch {}' "$LOCK_DIR/owner.json" 2>/dev/null || true)"
  if [[ ! "$owner_pid" =~ ^[1-9][0-9]*$ ]] || kill -0 "$owner_pid" 2>/dev/null; then
    return 1
  fi

  rm -f "$LOCK_DIR/owner.json"
  rmdir "$LOCK_DIR"
}

write_rejected_report() {
  local message="$1"
  node --input-type=module - \
    "$REJECTED_REPORT_PATH" "$RUN_ID" "$TASK_NAME" "$ISSUE_ID" "$PLUGIN" \
    "$GIT_SHA" "$DSH_HOME_VALUE" "$URL" "$EXPECTED" "$message" <<'EOF'
import { writeFileSync } from 'node:fs'

const [
  reportPath,
  runId,
  taskSpaceName,
  issueId,
  plugin,
  commitSha,
  dshHome,
  requestedUrl,
  expectedText,
  message,
] = process.argv.slice(2)

writeFileSync(reportPath, `${JSON.stringify({
  pass: false,
  tool: 'ego-browser',
  runId,
  phase: 'lock',
  taskSpaceName,
  taskSpaceId: null,
  issueId: issueId || null,
  plugin: plugin || null,
  commitSha: commitSha || null,
  dshHome: dshHome || null,
  requestedUrl,
  actualUrl: null,
  title: null,
  viewport: null,
  snapshot: null,
  dom: null,
  screenshot: null,
  expectedText: expectedText || null,
  browserProcessExitCode: null,
  cleanup: { attempted: false, keep: null, success: null, state: 'not-created', result: null, error: null },
  errors: [message],
  capturedAt: new Date().toISOString(),
  completedAt: new Date().toISOString(),
  exitCode: 75,
}, null, 2)}\n`, { mode: 0o600 })
EOF
}

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  reclaim_stale_lock || true
  if ! mkdir "$LOCK_DIR" 2>/dev/null; then
    LOCK_MESSAGE='证据目录正在被另一个 ego-browser 验收运行使用'
    write_rejected_report "$LOCK_MESSAGE"
    echo "✗ ego-browser: ${LOCK_MESSAGE}（失败报告: ${REJECTED_REPORT_PATH}）" >&2
    exit 75
  fi
fi
LOCK_HELD=1
trap release_lock EXIT

node --input-type=module - "$LOCK_DIR/owner.json" "$$" "$RUN_ID" <<'EOF'
import { writeFileSync } from 'node:fs'

const [ownerPath, rawPid, runId] = process.argv.slice(2)
writeFileSync(ownerPath, `${JSON.stringify({
  pid: Number(rawPid),
  runId,
  startedAt: new Date().toISOString(),
})}\n`, { mode: 0o600 })
EOF

# Never accept a report or screenshot left by an earlier run as current proof.
rm -f "$REPORT_PATH" "$SCREENSHOT_PATH"
: > "$LOG_PATH"
chmod 600 "$LOG_PATH"

node --input-type=module - \
  "$REPORT_PATH" "$RUN_ID" "$TASK_NAME" "$ISSUE_ID" "$PLUGIN" \
  "$GIT_SHA" "$DSH_HOME_VALUE" "$URL" "$EXPECTED" <<'EOF'
import { writeFileSync } from 'node:fs'

const [
  reportPath,
  runId,
  taskSpaceName,
  issueId,
  plugin,
  commitSha,
  dshHome,
  requestedUrl,
  expectedText,
] = process.argv.slice(2)

const report = {
  pass: false,
  tool: 'ego-browser',
  runId,
  phase: 'pending',
  taskSpaceName,
  taskSpaceId: null,
  issueId: issueId || null,
  plugin: plugin || null,
  commitSha: commitSha || null,
  dshHome: dshHome || null,
  requestedUrl,
  actualUrl: null,
  title: null,
  viewport: null,
  snapshot: null,
  dom: null,
  screenshot: null,
  expectedText: expectedText || null,
  browserProcessExitCode: null,
  cleanup: {
    attempted: false,
    keep: null,
    success: null,
    state: 'not-created',
    result: null,
    error: null,
  },
  errors: [],
  capturedAt: new Date().toISOString(),
  completedAt: null,
}

writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
EOF

record_failure() {
  local exit_code="$1"
  local phase="$2"
  local message="$3"
  node --input-type=module - "$REPORT_PATH" "$phase" "$message" "$exit_code" <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs'

const [reportPath, phase, message, exitCode] = process.argv.slice(2)
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
report.pass = false
report.phase = phase
report.exitCode = Number(exitCode)
if (!report.errors.includes(message)) report.errors.push(message)
report.completedAt = new Date().toISOString()
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
EOF
  printf '%s\n' "$message" >> "$LOG_PATH"
}

fail_preflight() {
  local exit_code="$1"
  local message="$2"
  record_failure "$exit_code" 'preflight' "$message"
  echo "✗ ego-browser: ${message}（证据: ${EVIDENCE_DIR}）" >&2
  exit "$exit_code"
}

if [[ -z "$URL" ]]; then
  fail_preflight 2 '必须提供 L2 URL'
fi
if [[ ! "$URL" =~ ^https?:// ]]; then
  fail_preflight 2 "URL 必须是 http(s): $URL"
fi
if ! command -v ego-browser >/dev/null 2>&1; then
  fail_preflight 127 '命令不可用；UI 验收不得降级为 skip'
fi

if ! node --input-type=module - "$URL" "$TARGET_PROFILE" <<'EOF' >> "$LOG_PATH" 2>&1
const [raw, target] = process.argv.slice(2)
const url = new URL(raw)
const local = url.protocol === 'http:' && ['127.0.0.1', 'localhost'].includes(url.hostname)
const port = Number(url.port)
const allowed = target === 'dev' ? port === 45120 : target === 'l2' && port >= 44201 && port <= 44299
if (!local || !allowed) throw new Error('目标必须是 Dev 45120 或 L2 44201–44299；禁止生产 44200')
EOF
then
  fail_preflight 2 '目标 URL 或 profile 不符合 Dev/L2 隔离契约'
fi

# ego-browser nodejs filters custom environment variables. Encode all values in
# a base64 JSON prelude so quotes, newlines, and Unicode cannot become code.
EGO_INPUT_B64="$(node -e 'const values={url:process.argv[1],expected:process.argv[2],taskName:process.argv[3],reportPath:process.argv[4],evidenceDir:process.argv[5],runId:process.argv[6],failOnErrors:process.argv[7]||"",target:process.argv[8],probeFile:process.argv[9],probeOptionsFile:process.argv[10]};process.stdout.write(Buffer.from(JSON.stringify(values),"utf8").toString("base64"))' \
  "$URL" "$EXPECTED" "$TASK_NAME" "$REPORT_PATH" "$EVIDENCE_DIR" "$RUN_ID" "${EGO_BROWSER_FAIL_ON_ERRORS:-}" "$TARGET_PROFILE" "${EGO_BROWSER_PROBE_FILE:-}" "${EGO_BROWSER_PROBE_OPTIONS:-}")"

emit_ego_input_prelude() {
  printf "const EGO_INPUT = JSON.parse(Buffer.from('%s', 'base64').toString('utf8'))\n" "$EGO_INPUT_B64"
}

set +e
{
  emit_ego_input_prelude
  cat <<'EOF'
const fs = await import('node:fs')
const path = await import('node:path')

const report = JSON.parse(fs.readFileSync(EGO_INPUT.reportPath, 'utf8'))
const writeReport = () => fs.writeFileSync(
  EGO_INPUT.reportPath,
  `${JSON.stringify(report, null, 2)}\n`,
  { mode: 0o600 },
)
report.phase = 'browser'
report.cleanup = {
  attempted: false,
  keep: null,
  success: null,
  state: 'not-created',
  result: null,
  error: null,
}
writeReport()

try {
  const task = await useOrCreateTaskSpace(EGO_INPUT.taskName)
  if (!task || task.id === null || task.id === undefined) {
    throw new Error('useOrCreateTaskSpace() 未返回 task space id')
  }
  report.taskSpaceId = task.id
  report.cleanup.success = null
  report.cleanup.state = 'pending'
  writeReport()

  const tab = await openOrReuseTab(EGO_INPUT.url, { wait: true, timeout: 20 })
  if (!tab) throw new Error('openOrReuseTab 未返回页面')

  const info = await pageInfo()
  report.actualUrl = info?.url || null
  report.title = info?.title || null
  report.viewport = info ? { w: info.w, h: info.h, pw: info.pw, ph: info.ph } : null
  if (info?.dialog) throw new Error(`页面存在未处理原生对话框: ${JSON.stringify(info.dialog)}`)
  if (!info?.url || !/^https?:\/\//.test(info.url)) throw new Error('实际页面 URL 无效')
  const actual = new URL(info.url)
  const port = Number(actual.port)
  const expected = new URL(EGO_INPUT.url)
  if (actual.origin !== expected.origin || !(EGO_INPUT.target === 'dev' ? port === 45120 : port >= 44201 && port <= 44299)) {
    throw new Error('实际页面偏离分配的 Dev/L2 目标')
  }
  if (!info.w || !info.h || info.w <= 0 || info.h <= 0) throw new Error('浏览器 viewport 无效')

  if (EGO_INPUT.probeFile) {
    const { pathToFileURL } = await import('node:url')
    const { runStageProbe } = await import(pathToFileURL(EGO_INPUT.probeFile).href)
    const options = JSON.parse(fs.readFileSync(EGO_INPUT.probeOptionsFile, 'utf8'))
    report.probe = await runStageProbe({ js, click, snapshotText, pageInfo, captureScreenshot, gotoAndWait, waitForElement }, {
      ...options, evidenceDir: EGO_INPUT.evidenceDir,
      onProgress(probe) { report.probe = probe; writeReport() },
    })
  }

  const snapshot = await snapshotText()
  report.snapshot = typeof snapshot === 'string' ? snapshot : String(snapshot ?? '')
  if (!report.snapshot.trim()) throw new Error('snapshotText() 为空')

  const dom = await js(String.raw`(() => ({
    bodyText: (document.body?.innerText || '').slice(0, 4000),
    bodyTextLength: (document.body?.innerText || '').length,
    interactiveCount: document.querySelectorAll('button, a, input, textarea, select, [role="button"]').length,
    errorCount: document.querySelectorAll('[role="alert"], .error, [data-error]').length,
    hasDocumentRoot: Boolean(document.documentElement),
  }))()`)
  report.dom = dom
  if (!dom || typeof dom.bodyTextLength !== 'number' || !dom.hasDocumentRoot) {
    throw new Error('DOM 断言未返回有效结果')
  }
  if (dom.bodyTextLength === 0 && report.snapshot.trim().length === 0) {
    throw new Error('页面没有可见语义内容')
  }
  if (EGO_INPUT.expected && !report.snapshot.includes(EGO_INPUT.expected) && !String(dom.bodyText || '').includes(EGO_INPUT.expected)) {
    throw new Error(`页面未包含期望文本: ${EGO_INPUT.expected}`)
  }
  if (EGO_INPUT.failOnErrors === '1' && dom.errorCount > 0) {
    throw new Error(`页面存在 ${dom.errorCount} 个可见错误节点`)
  }

  const screenshot = await captureScreenshot()
  const source = typeof screenshot === 'string'
    ? screenshot
    : screenshot?.path || screenshot?.screenshot || null
  if (!source || !fs.existsSync(source)) throw new Error('captureScreenshot() 未返回可复制的截图路径')
  const destination = path.join(EGO_INPUT.evidenceDir, 'ego-browser.png')
  if (path.resolve(source) !== path.resolve(destination)) fs.copyFileSync(source, destination)
  report.screenshot = 'ego-browser.png'
  report.pass = true
} catch (error) {
  report.pass = false
  report.errors.push(error instanceof Error ? error.message : String(error))
}

report.completedAt = new Date().toISOString()
writeReport()
cliLog(JSON.stringify({
  runId: report.runId,
  pass: report.pass,
  taskSpaceId: report.taskSpaceId,
  actualUrl: report.actualUrl,
  screenshot: report.screenshot,
  errors: report.errors,
}, null, 2))
if (!report.pass) process.exitCode = 1
EOF
} | ego-browser nodejs >> "$LOG_PATH" 2>&1
BROWSER_STATUS=$?
set -e

# Record even a hard child-process failure that happened before browser code
# could write its structured result.
node --input-type=module - "$REPORT_PATH" "$RUN_ID" "$BROWSER_STATUS" "$LOG_PATH" <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs'

const [reportPath, expectedRunId, rawStatus, logPath] = process.argv.slice(2)
const status = Number(rawStatus)
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
report.browserProcessExitCode = status
if (report.runId !== expectedRunId) {
  report.pass = false
  report.errors.push(`报告 run id 不匹配: expected ${expectedRunId}, got ${String(report.runId)}`)
}
if (status !== 0) {
  report.pass = false
  if (report.phase === 'pending' || report.errors.length === 0) {
    const detail = readFileSync(logPath, 'utf8').trim().slice(0, 2000)
    report.errors.push(`ego-browser nodejs 子进程失败（exit ${status}）${detail ? `: ${detail}` : ''}`)
  }
}
if (status === 0 && report.phase === 'pending') {
  report.pass = false
  report.errors.push('ego-browser nodejs 未写入浏览器阶段报告')
}
report.completedAt = new Date().toISOString()
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
EOF

REPORT_PASS="$(node -e 'const r=JSON.parse(require("node:fs").readFileSync(process.argv[1],"utf8"));process.stdout.write(r.pass?"1":"0")' "$REPORT_PATH")"
if [[ "$REPORT_PASS" != '1' && "$BROWSER_STATUS" -eq 0 ]]; then
  BROWSER_STATUS=1
fi

TASK_SPACE_PRESENT="$(node -e 'const r=JSON.parse(require("node:fs").readFileSync(process.argv[1],"utf8"));process.stdout.write(r.runId===process.argv[2]&&r.taskSpaceId!==null&&r.taskSpaceId!==undefined?"1":"0")' "$REPORT_PATH" "$RUN_ID")"
CLEANUP_STATUS=0

if [[ "$TASK_SPACE_PRESENT" == '1' ]]; then
  node --input-type=module - "$REPORT_PATH" <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs'
const reportPath = process.argv[2]
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
report.cleanup = {
  attempted: true,
  keep: !report.pass,
  success: null,
  state: 'pending',
  result: null,
  error: null,
}
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
EOF

  set +e
  {
    emit_ego_input_prelude
    cat <<'EOF'
const fs = await import('node:fs')
const report = JSON.parse(fs.readFileSync(EGO_INPUT.reportPath, 'utf8'))
const keep = !report.pass

try {
  const cleanup = await completeTaskSpace(report.taskSpaceId, { keep })
  if (!cleanup || cleanup.done !== true) {
    throw new Error(`completeTaskSpace 未完成: ${JSON.stringify(cleanup ?? null)}`)
  }
  report.cleanup = {
    attempted: true,
    keep,
    success: true,
    state: keep ? 'retained' : 'completed',
    result: cleanup ?? null,
    error: null,
  }
} catch (error) {
  const message = error instanceof Error ? error.message : String(error)
  report.pass = false
  report.errors.push(`task space 清理失败: ${message}`)
  report.cleanup = {
    attempted: true,
    keep,
    success: false,
    state: 'failed',
    result: null,
    error: message,
  }
  process.exitCode = 1
}

report.completedAt = new Date().toISOString()
fs.writeFileSync(EGO_INPUT.reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
cliLog(JSON.stringify({ runId: report.runId, taskSpaceCleanup: report.cleanup }, null, 2))
EOF
  } | ego-browser nodejs >> "$LOG_PATH" 2>&1
  CLEANUP_STATUS=$?
  set -e

  if [[ "$CLEANUP_STATUS" -ne 0 ]]; then
    node --input-type=module - "$REPORT_PATH" "$CLEANUP_STATUS" <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs'
const [reportPath, rawStatus] = process.argv.slice(2)
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
const status = Number(rawStatus)
const message = `task space 清理子进程失败（exit ${status}）`
report.pass = false
if (!report.errors.some((entry) => entry.startsWith('task space 清理失败:'))) report.errors.push(message)
report.cleanup = {
  ...report.cleanup,
  attempted: true,
  success: false,
  state: 'failed',
  error: report.cleanup?.error || message,
}
report.completedAt = new Date().toISOString()
writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
EOF
  fi

  CLEANUP_RESULT_MISSING="$(node --input-type=module - "$REPORT_PATH" "$RUN_ID" <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs'

const [reportPath, expectedRunId] = process.argv.slice(2)
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
if (report.runId !== expectedRunId || report.cleanup?.state !== 'pending') {
  process.stdout.write('0')
} else {
  const message = 'task space 清理子进程没有写入结果'
  report.pass = false
  if (!report.errors.includes(message)) report.errors.push(message)
  report.cleanup = {
    ...report.cleanup,
    attempted: true,
    success: false,
    state: 'failed',
    error: message,
  }
  report.completedAt = new Date().toISOString()
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
  process.stdout.write('1')
}
EOF
)"
  if [[ "$CLEANUP_RESULT_MISSING" == '1' ]]; then
    CLEANUP_STATUS=1
  fi
fi

FINAL_STATUS="$BROWSER_STATUS"
if [[ "$FINAL_STATUS" -eq 0 && "$CLEANUP_STATUS" -ne 0 ]]; then
  FINAL_STATUS="$CLEANUP_STATUS"
fi

set +e
node --input-type=module - "$REPORT_PATH" "$EVIDENCE_DIR" "$RUN_ID" "$FINAL_STATUS" "$TARGET_PROFILE" <<'EOF'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const [reportPath, evidenceDir, expectedRunId, rawStatus, target] = process.argv.slice(2)
const processStatus = Number(rawStatus)
const report = JSON.parse(readFileSync(reportPath, 'utf8'))
const screenshot = report.screenshot && join(evidenceDir, report.screenshot)
const structuralErrors = []

if (!report.runId) structuralErrors.push('缺少 run id')
if (report.runId !== expectedRunId) structuralErrors.push('run id 与当前运行不匹配')
if (!report.commitSha) structuralErrors.push('缺少 commit SHA')
if (typeof report.requestedUrl !== 'string') structuralErrors.push('缺少请求 URL')
if (!Array.isArray(report.errors)) structuralErrors.push('errors 不是数组')
if (!report.cleanup || typeof report.cleanup.state !== 'string') structuralErrors.push('缺少 task space 清理状态')

if (processStatus === 0) {
  if (!report.pass || report.tool !== 'ego-browser') structuralErrors.push('报告结论或工具不正确')
  if (report.taskSpaceId === null || report.taskSpaceId === undefined) structuralErrors.push('缺少 task space id')
  if (!/^https?:\/\//.test(report.actualUrl || '')) structuralErrors.push('缺少真实 L2 URL')
  const actual = new URL(report.actualUrl)
  if (actual.origin !== new URL(report.requestedUrl).origin || !(target === 'dev' ? actual.port === '45120' : Number(actual.port) >= 44201 && Number(actual.port) <= 44299)) structuralErrors.push('实际 URL 偏离 Dev/L2 目标')
  if (!(report.snapshot || '').trim()) structuralErrors.push('缺少 snapshotText 证据')
  if (!report.dom || typeof report.dom.bodyTextLength !== 'number') structuralErrors.push('缺少 DOM 断言证据')
  if (!report.screenshot || !existsSync(screenshot)) structuralErrors.push('缺少截图工件')
  if (!report.cleanup.success || report.cleanup.state !== 'completed' || report.cleanup.keep !== false) {
    structuralErrors.push('成功任务未完成 task space 清理')
  }
} else {
  if (report.pass) structuralErrors.push('失败进程被报告为通过')
  if (report.errors.length === 0) structuralErrors.push('失败报告没有错误')
  if (report.taskSpaceId !== null && report.taskSpaceId !== undefined && report.cleanup.state !== 'retained' && report.cleanup.state !== 'failed') {
    structuralErrors.push('失败 task space 未保留或记录清理失败')
  }
}

if (structuralErrors.length) {
  report.pass = false
  for (const message of structuralErrors) {
    const entry = `报告不完整: ${message}`
    if (!report.errors.includes(entry)) report.errors.push(entry)
  }
  report.completedAt = new Date().toISOString()
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
  console.error(`✗ ego-browser 报告不完整: ${structuralErrors.join('；')}`)
  process.exit(1)
}

if (processStatus === 0) {
  console.log(`✓ ego-browser evidence: run=${report.runId} task=${report.taskSpaceId} url=${report.actualUrl} screenshot=${screenshot}`)
} else {
  console.error(`✗ ego-browser run=${report.runId} failed: ${report.errors.join('；')}`)
}
EOF
VALIDATION_STATUS=$?
set -e

if [[ "$VALIDATION_STATUS" -ne 0 && "$FINAL_STATUS" -eq 0 ]]; then
  FINAL_STATUS="$VALIDATION_STATUS"
fi

if [[ "$FINAL_STATUS" -ne 0 ]]; then
  echo "✗ ego-browser 验收失败（证据: ${EVIDENCE_DIR}；失败空间将保留）" >&2
  exit "$FINAL_STATUS"
fi
