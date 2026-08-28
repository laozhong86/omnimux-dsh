#!/usr/bin/env bash
# ego-browser-qa.sh — mandatory L2 browser evidence collector.
#
# Every browser self-check in this repository must go through ego-browser.
# The script fails closed when the browser, L2 page, semantic evidence, DOM
# evidence, or screenshot cannot be obtained.
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

if [[ -z "$URL" ]]; then
  echo "✗ ego-browser: 必须提供 L2 URL" >&2
  exit 2
fi
if [[ ! "$URL" =~ ^https?:// ]]; then
  echo "✗ ego-browser: URL 必须是 http(s): $URL" >&2
  exit 2
fi
if ! command -v ego-browser >/dev/null 2>&1; then
  echo "✗ ego-browser: 命令不可用；UI 验收不得降级为 skip" >&2
  exit 127
fi

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
GIT_SHA="${EGO_GIT_SHA:-$(git rev-parse HEAD 2>/dev/null || echo unknown)}"
DSH_HOME_VALUE="${DSH_HOME:-}"
export EGO_BROWSER_URL="$URL"
export EGO_BROWSER_EXPECT="$EXPECTED"
export EGO_BROWSER_TASK_NAME="$TASK_NAME"
export EGO_BROWSER_REPORT_PATH="$REPORT_PATH"
export EGO_BROWSER_EVIDENCE_DIR="$EVIDENCE_DIR"
export EGO_BROWSER_GIT_SHA="$GIT_SHA"
export EGO_BROWSER_ISSUE_ID="$ISSUE_ID"
export EGO_BROWSER_PLUGIN="$PLUGIN"
export EGO_BROWSER_DSH_HOME="$DSH_HOME_VALUE"

set +e
EGO_OUTPUT="$(ego-browser nodejs <<'EOF'
const fs = require('node:fs')
const path = require('node:path')

const url = process.env.EGO_BROWSER_URL
const expected = process.env.EGO_BROWSER_EXPECT || ''
const taskName = process.env.EGO_BROWSER_TASK_NAME
const reportPath = process.env.EGO_BROWSER_REPORT_PATH
const evidenceDir = process.env.EGO_BROWSER_EVIDENCE_DIR

const result = {
  pass: false,
  tool: 'ego-browser',
  taskSpaceName: taskName,
  taskSpaceId: null,
  issueId: process.env.EGO_BROWSER_ISSUE_ID || null,
  plugin: process.env.EGO_BROWSER_PLUGIN || null,
  commitSha: process.env.EGO_BROWSER_GIT_SHA || null,
  dshHome: process.env.EGO_BROWSER_DSH_HOME || null,
  requestedUrl: url,
  actualUrl: null,
  title: null,
  viewport: null,
  snapshot: null,
  dom: null,
  screenshot: null,
  expectedText: expected || null,
  errors: [],
  capturedAt: new Date().toISOString(),
}

try {
  const task = await useOrCreateTaskSpace(taskName)
  result.taskSpaceId = task.id

  const tab = await openOrReuseTab(url, { wait: true, timeout: 20 })
  if (!tab) throw new Error('openOrReuseTab 未返回页面')

  const info = await pageInfo()
  result.actualUrl = info?.url || null
  result.title = info?.title || null
  result.viewport = info ? { w: info.w, h: info.h, pw: info.pw, ph: info.ph } : null
  if (info?.dialog) throw new Error(`页面存在未处理原生对话框: ${JSON.stringify(info.dialog)}`)
  if (!info?.url || !/^https?:\/\//.test(info.url)) throw new Error('实际页面 URL 无效')
  const actual = new URL(info.url)
  const port = Number(actual.port)
  if (!Number.isInteger(port) || port < 44200 || port > 44299) {
    throw new Error(`实际页面不是 L2 端口（要求 44200-44299，实际 ${actual.port || '默认端口'}）`)
  }
  if (!info.w || !info.h || info.w <= 0 || info.h <= 0) throw new Error('浏览器 viewport 无效')

  const snapshot = await snapshotText()
  result.snapshot = typeof snapshot === 'string' ? snapshot : String(snapshot ?? '')
  if (!result.snapshot.trim()) throw new Error('snapshotText() 为空')

  const dom = await js(String.raw`(() => ({
    bodyText: (document.body?.innerText || '').slice(0, 4000),
    bodyTextLength: (document.body?.innerText || '').length,
    interactiveCount: document.querySelectorAll('button, a, input, textarea, select, [role="button"]').length,
    errorCount: document.querySelectorAll('[role="alert"], .error, [data-error]').length,
    hasDocumentRoot: Boolean(document.documentElement),
  }))()`)
  result.dom = dom
  if (!dom || typeof dom.bodyTextLength !== 'number' || !dom.hasDocumentRoot) {
    throw new Error('DOM 断言未返回有效结果')
  }
  if (dom.bodyTextLength === 0 && result.snapshot.trim().length === 0) {
    throw new Error('页面没有可见语义内容')
  }
  if (expected && !result.snapshot.includes(expected) && !String(dom.bodyText || '').includes(expected)) {
    throw new Error(`页面未包含期望文本: ${expected}`)
  }
  if (process.env.EGO_BROWSER_FAIL_ON_ERRORS === '1' && dom.errorCount > 0) {
    throw new Error(`页面存在 ${dom.errorCount} 个可见错误节点`)
  }

  const screenshot = await captureScreenshot()
  const source = typeof screenshot === 'string'
    ? screenshot
    : screenshot?.path || screenshot?.screenshot || null
  if (!source || !fs.existsSync(source)) throw new Error('captureScreenshot() 未返回可复制的截图路径')
  const destination = path.join(evidenceDir, 'ego-browser.png')
  fs.copyFileSync(source, destination)
  result.screenshot = 'ego-browser.png'
  result.pass = true
} catch (error) {
  result.errors.push(error instanceof Error ? error.message : String(error))
}

fs.writeFileSync(reportPath, JSON.stringify(result, null, 2) + '\n', { mode: 0o600 })
cliLog(JSON.stringify({
  pass: result.pass,
  taskSpaceId: result.taskSpaceId,
  actualUrl: result.actualUrl,
  screenshot: result.screenshot,
  errors: result.errors,
}, null, 2))
if (!result.pass) process.exitCode = 1
EOF
)"
STATUS=$?
printf '%s\n' "$EGO_OUTPUT" > "$LOG_PATH"

# Complete successful spaces; retain failed spaces for diagnosis and reruns.
if [[ -s "$REPORT_PATH" ]]; then
  set +e
  ego-browser nodejs <<'EOF' >> "$LOG_PATH" 2>&1
const fs = require('node:fs')
const report = JSON.parse(fs.readFileSync(process.env.EGO_BROWSER_REPORT_PATH, 'utf8'))
if (report.taskSpaceId !== null && report.taskSpaceId !== undefined) {
  const cleanup = await completeTaskSpace(report.taskSpaceId, { keep: !report.pass })
  cliLog(JSON.stringify({ taskSpaceCleanup: cleanup, retained: !report.pass }, null, 2))
}
EOF
  CLEANUP_STATUS=$?
  # A retained failed task is intentional; only a successful-run cleanup error
  # should change an otherwise successful result.
  if [[ $STATUS -eq 0 && "$CLEANUP_STATUS" -ne 0 ]]; then STATUS=$CLEANUP_STATUS; fi
fi

if [[ $STATUS -ne 0 ]]; then
  echo "✗ ego-browser 验收失败（证据: $EVIDENCE_DIR；失败空间将保留）" >&2
  exit "$STATUS"
fi

node --input-type=module - "$REPORT_PATH" "$EVIDENCE_DIR" <<'EOF'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
const report = JSON.parse(readFileSync(process.argv[2], 'utf8'))
const evidenceDir = process.argv[3]
const screenshot = report.screenshot && join(evidenceDir, report.screenshot)
const errors = []
if (!report.pass || report.tool !== 'ego-browser') errors.push('报告结论或工具不正确')
if (!report.taskSpaceId) errors.push('缺少 task space id')
if (!/^https?:\/\//.test(report.actualUrl || '')) errors.push('缺少真实 L2 URL')
if (!report.actualUrl || !/:(44(?:2[0-9]{2}))\b/.test(report.actualUrl)) errors.push('实际 URL 不在 L2 端口池')
if (!(report.snapshot || '').trim()) errors.push('缺少 snapshotText 证据')
if (!report.dom || typeof report.dom.bodyTextLength !== 'number') errors.push('缺少 DOM 断言证据')
if (!report.screenshot || !existsSync(screenshot)) errors.push('缺少截图工件')
if (errors.length) {
  console.error(`✗ ego-browser 报告不完整: ${errors.join('；')}`)
  process.exit(1)
}
console.log(`✓ ego-browser evidence: task=${report.taskSpaceId} url=${report.actualUrl} screenshot=${screenshot}`)
EOF
