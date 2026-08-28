#!/usr/bin/env node
/**
 * scripts/ci-verdict.mjs — authoritative CI quality gate verdict aggregator.
 *
 * This script runs in GitHub Actions CI to evaluate L0/L1/L2 reports and
 * browser evidence. It writes the authoritative check result and adds the
 * `qa:pass` label to the PR only when all required dimensions pass.
 *
 * Usage:
 *   node scripts/ci-verdict.mjs [--pr <number>] [--report <path>] [--browser-report <path>] [--dry-run]
 */

import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const REPO = process.env.GITHUB_REPOSITORY || process.env.OMNIMUX_REPO || 'laozhong86/omnimux-dsh'

function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    pr: process.env.PR_NUMBER || '',
    report: '',
    browserReport: '',
    requireBrowser: false,
    dryRun: false,
  }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--pr' && argv[i + 1]) options.pr = argv[++i]
    else if (arg === '--report' && argv[i + 1]) options.report = resolve(argv[++i])
    else if (arg === '--browser-report' && argv[i + 1]) options.browserReport = resolve(argv[++i])
    else if (arg === '--require-browser') options.requireBrowser = true
    else if (arg === '--dry-run') options.dryRun = true
  }
  return options
}

function readJson(path) {
  if (!path || !existsSync(path)) return null
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return null
  }
}

export function evaluateVerdict(qaReport, browserReport, options = {}) {
  const errors = []
  if (!qaReport) {
    errors.push('缺少 L0 auto-qa-report.json 报告')
  } else if (!qaReport.pass) {
    errors.push(`L0 QA 未通过: ${qaReport.summary || '存在未通过维度'}`)
  }

  if (options.requireBrowser) {
    if (!browserReport) {
      errors.push('缺少 ego-browser-report.json 浏览器验收报告')
    } else {
      if (browserReport.tool !== 'ego-browser') errors.push('浏览器验收工具不是 ego-browser')
      if (!browserReport.pass) errors.push(`ego-browser 结论为 FAIL: ${(browserReport.errors || []).join('；')}`)
      if (!browserReport.taskSpaceId) errors.push('缺少 taskSpaceId')
      if (!browserReport.actualUrl) errors.push('缺少 actualUrl')
    }
  }

  return {
    pass: errors.length === 0,
    errors,
    summary: errors.length === 0 ? 'PASS: 所有 CI 门禁与证据均通过' : `FAIL: ${errors.join('；')}`,
  }
}

export function applyVerdictLabel(prNumber, pass, dryRun = false) {
  if (!prNumber || dryRun) {
    process.stdout.write(`[ci-verdict] PR #${prNumber || '(none)'} pass=${pass} (dry-run 或未提供 PR 编号)\n`)
    return
  }
  if (pass) {
    process.stdout.write(`✓ CI 门禁全绿，向 PR #${prNumber} 授予 qa:pass 标签\n`)
    const res = spawnSync('gh', ['pr', 'edit', String(prNumber), '--repo', REPO, '--add-label', 'qa:pass'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    if (res.status !== 0) {
      process.stderr.write(`⚠ 无法添加 qa:pass 标签: ${res.stderr || res.stdout}\n`)
    }
  }
}

export function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv)
  const qaReport = readJson(options.report)
  const browserReport = readJson(options.browserReport)
  const verdict = evaluateVerdict(qaReport, browserReport, options)

  process.stdout.write(`\n======================================================\n`)
  process.stdout.write(`🛡️ CI 聚合门禁最终判定: ${verdict.pass ? '✅ PASS' : '❌ FAIL'}\n`)
  process.stdout.write(`======================================================\n`)
  process.stdout.write(`${verdict.summary}\n\n`)

  if (verdict.pass) {
    applyVerdictLabel(options.pr, true, options.dryRun)
    return 0
  }
  return 1
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exitCode = main()
}
