#!/usr/bin/env node
/**
 * Issue-driven delivery pipeline.
 *
 * The pipeline is deliberately fail-closed:
 *   metadata -> isolated worktree -> implementation -> real tests -> L0/L2/L3
 *   evidence -> PR/CI -> (R2/R3 only) merge confirmation -> materialize -> cleanup
 *
 * Issue text is metadata, never shell input. An implementation command must be
 * supplied explicitly by the trusted Agent (`--implementation-command`) or the
 * caller must explicitly acknowledge an already-modified worktree
 * (`--allow-existing-changes`).
 */

import { spawnSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs'
import {
  basename,
  dirname,
  extname,
  join,
  relative,
  resolve,
} from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  acquireIssueLock,
  assertSameRun,
  makeRunKey,
  readState,
  transitionState,
  writeState,
} from './pipeline-state.mjs'
import { changedFilesFromGit, validateBrowserEvidence } from './auto-qa-gate.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')

function detectRepoFromGit(root) {
  try {
    const res = spawnSync('git', ['-C', root, 'remote', 'get-url', 'origin'], { encoding: 'utf8' })
    if (res.status === 0 && res.stdout) {
      const match = res.stdout.trim().match(/github\.com[:/]([^/]+\/[^/.]+)(?:\.git)?$/)
      if (match && match[1]) return match[1]
    }
  } catch {}
  return 'laozhong86/omnimux-dsh'
}

const REPO = process.env.OMNIMUX_REPO || detectRepoFromGit(repoRoot)
const BASE_BRANCH = process.env.OMNIMUX_BASE_BRANCH || 'main'
const STATUS_LABELS = [
  'status:triage',
  'status:planning',
  'status:ready-to-run',
  'status:pipeline-running',
  'status:in-progress',
  'status:qa-review',
  'status:ready-for-boss',
  'status:auto-merge-pending',
  'status:auto-merged',
  'status:blocked',
]
const RISK_LABELS = ['risk:R0', 'risk:R1', 'risk:R2', 'risk:R3']
const HIGH_RISK_PATHS = [
  /^AGENTS\.md$/,
  /^CLAUDE\.md$/,
  /^docs\/contracts\//,
  /^\.github\//,
  /^scripts\//,
  /^package\.json$/,
  /^pnpm-lock\.yaml$/,
  /(?:^|\/)dsh\.manifest\.json$/,
  /(?:^|\/)cordis\.patch\.ya?ml$/,
]
const CODE_EXTENSIONS = new Set(['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.css', '.scss', '.html'])
const TEST_FILE_RE = /(?:^|[./\\])[^/\\]*\.(?:test|spec)\.[^/\\]+$/
const UI_FILE_RE = /(?:^|[\\/])(?:client|apps|web)(?:[\\/]|$)|Stage\.(?:js|jsx|ts|tsx)$|\.(?:jsx|tsx)$/i
const DEFAULT_WAIT_SECONDS = 600

export class PipelineError extends Error {
  constructor(message, details = {}) {
    super(message)
    this.name = 'PipelineError'
    Object.assign(this, details)
  }
}

export function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    issueId: '',
    plugin: '',
    topic: '',
    dryRun: false,
    manual: false,
    forceRetry: false,
    allowExistingChanges: false,
    implementationCommand: process.env.OMNIMUX_IMPLEMENT_COMMAND || '',
    l2Url: process.env.OMNIMUX_L2_URL || '',
    expectedText: process.env.OMNIMUX_EGO_EXPECT || '',
    evidenceDir: '',
    waitSeconds: Number(process.env.OMNIMUX_PIPELINE_WAIT_SECONDS || DEFAULT_WAIT_SECONDS),
    noMerge: false,
    materialize: true,
    worktree: '',
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    const next = () => {
      if (!argv[index + 1] || argv[index + 1].startsWith('-')) {
        throw new PipelineError(`参数 ${arg} 需要一个值`)
      }
      index += 1
      return argv[index]
    }
    if (arg === '--plugin') options.plugin = next()
    else if (arg === '--topic') options.topic = next()
    else if (arg === '--implementation-command' || arg === '--implement-command') options.implementationCommand = next()
    else if (arg === '--l2-url') options.l2Url = next()
    else if (arg === '--expected-text') options.expectedText = next()
    else if (arg === '--evidence-dir') options.evidenceDir = resolve(next())
    else if (arg === '--wait-seconds') options.waitSeconds = Number(next())
    else if (arg === '--worktree') options.worktree = resolve(next())
    else if (arg === '--dry-run') options.dryRun = true
    else if (arg === '--manual') options.manual = true
    else if (arg === '--force-retry') options.forceRetry = true
    else if (arg === '--allow-existing-changes') options.allowExistingChanges = true
    else if (arg === '--no-merge') options.noMerge = true
    else if (arg === '--no-materialize') options.materialize = false
    else if (!arg.startsWith('-') && !options.issueId) options.issueId = arg.replace(/^#/, '')
    else throw new PipelineError(`未知参数: ${arg}`)
  }

  if (!options.issueId) throw new PipelineError('必须指定 Issue 编号')
  if (!/^\d+$/.test(options.issueId)) throw new PipelineError(`Issue 编号无效: ${options.issueId}`)
  if (!Number.isFinite(options.waitSeconds) || options.waitSeconds < 0) {
    throw new PipelineError('--wait-seconds 必须是非负数字')
  }
  return options
}

function displayArgs(args) {
  return args.map(value => {
    const text = String(value)
    return /token|secret|password|key/i.test(text) ? '<redacted>' : text
  }).join(' ')
}

export function runCommand(command, args = [], options = {}) {
  const cwd = options.cwd || repoRoot
  const dryRun = Boolean(options.dryRun)
  process.stdout.write(`\n$ [${cwd}] ${command} ${displayArgs(args)}\n`)
  if (dryRun) {
    process.stdout.write('  (dry-run 跳过实际执行)\n')
    return { status: 0, stdout: '', stderr: '', dryRun: true }
  }

  const result = spawnSync(command, args, {
    cwd,
    env: { ...process.env, ...(options.env || {}) },
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 16 * 1024 * 1024,
  })
  const stdout = result.stdout || ''
  const stderr = result.stderr || ''
  if (stdout) process.stdout.write(stdout)
  if (stderr) process.stderr.write(stderr)
  const status = result.status == null ? 1 : result.status
  if (status !== 0 && !options.allowFailure) {
    throw new PipelineError(`命令失败（exit ${status}）: ${command} ${displayArgs(args)}`, {
      command,
      args,
      status,
      stdout,
      stderr,
    })
  }
  return { status, stdout, stderr, signal: result.signal }
}

function readJsonFile(path, fallback = null) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    return fallback
  }
}

export function parseFrontmatter(body = '') {
  const result = {}
  const match = /^\s*---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(body)
  if (!match) return result
  for (const rawLine of match[1].split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const separator = line.indexOf(':')
    if (separator <= 0) continue
    const key = line.slice(0, separator).trim()
    let value = line.slice(separator + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (value === 'true') result[key] = true
    else if (value === 'false') result[key] = false
    else if (/^\d+$/.test(value)) result[key] = Number(value)
    else result[key] = value
  }
  return result
}

function labelNames(issue) {
  return new Set((issue.labels || []).map(label => typeof label === 'string' ? label : label?.name).filter(Boolean))
}

function normalizeTier(value) {
  const match = String(value || '').toUpperCase().match(/R[0-3]/)
  return match ? match[0] : ''
}

export function maintainersFor(repo = REPO) {
  const configured = String(process.env.OMNIMUX_PIPELINE_MAINTAINERS || '')
    .split(',')
    .map(value => value.trim())
    .filter(Boolean)
  if (configured.length > 0) return new Set(configured)
  const owner = repo.split('/')[0]
  return owner ? new Set([owner]) : new Set()
}

export function assessAuthorization(issue, maintainers = maintainersFor()) {
  const labels = labelNames(issue)
  const frontmatter = parseFrontmatter(issue.body || '')
  const tier = normalizeTier(frontmatter['risk-tier'] || frontmatter.riskTier || [...labels].find(label => label.startsWith('risk:')))
  const preAuthorized = frontmatter['pre-authorized'] === true || frontmatter.preAuthorized === true
  const ready = labels.has('status:ready-to-run')
  const riskLabel = labels.has(`risk:${tier}`)
  const comments = Array.isArray(issue.comments) ? issue.comments : []
  let approval = null
  let revoked = false

  for (const comment of comments) {
    const login = comment?.author?.login || comment?.author?.name || ''
    const text = String(comment?.body || '').trim()
    const approvalMatch = /^\/auto-approve\s+risk:(R[23])\b/i.exec(text)
    if (approvalMatch && maintainers.has(login)) {
      approval = { tier: approvalMatch[1].toUpperCase(), login, createdAt: comment.createdAt || null }
      revoked = false
    }
    if (/^\/revoke\b/i.test(text) && maintainers.has(login)) revoked = true
  }

  const reasons = []
  if (!ready) reasons.push('缺少 status:ready-to-run')
  if (!tier || !['R2', 'R3'].includes(tier)) reasons.push('风险不是 R2/R3')
  if (!riskLabel) reasons.push('risk 标签与 frontmatter 不一致')
  if (!preAuthorized) reasons.push('frontmatter pre-authorized 不是 true')
  if (!approval) reasons.push('缺少维护者 /auto-approve 评论')
  if (approval && approval.tier !== tier) reasons.push('授权评论风险等级与 Issue 不一致')
  if (revoked) reasons.push('已被 /revoke 撤销')

  return {
    eligible: reasons.length === 0,
    tier,
    preAuthorized,
    approval,
    revoked,
    reasons,
  }
}

export function classifyRisk(issue, changedFiles = []) {
  const frontmatter = parseFrontmatter(issue?.body || '')
  const labels = labelNames(issue || {})
  const declared = normalizeTier(frontmatter['risk-tier'] || frontmatter.riskTier || [...labels].find(label => label.startsWith('risk:')))
  const reasons = []
  let tier = declared || 'R2'

  if (declared === 'R0') reasons.push('Issue 声明为 R0')
  if (declared === 'R1') reasons.push('Issue 声明为 R1')
  if (changedFiles.some(file => HIGH_RISK_PATHS.some(pattern => pattern.test(file)))) {
    tier = 'R1'
    reasons.push('变更命中合同/CI/脚本/manifest 等 R1 路径')
  }

  const pluginPaths = new Set(changedFiles
    .map(file => /^plugins\/([^/]+)\//.exec(file)?.[1])
    .filter(Boolean))
  if (pluginPaths.size > 1) {
    tier = 'R1'
    reasons.push(`跨插件变更（${[...pluginPaths].join(', ')}）`)
  }
  if (changedFiles.some(file => /(?:^|\/)production|rollback|credentials?|secret|token/i.test(file))) {
    tier = 'R0'
    reasons.push('变更命中生产/回滚/凭据边界')
  }

  if (!['R0', 'R1', 'R2', 'R3'].includes(tier)) {
    tier = 'R1'
    reasons.push('无法解析风险等级，按高风险处理')
  }
  return { tier, reasons, automaticAllowed: tier === 'R2' || tier === 'R3' }
}

function issueFromGhJson(raw) {
  const parsed = JSON.parse(raw)
  if (!parsed || typeof parsed !== 'object') throw new PipelineError('gh 返回的 Issue JSON 无效')
  return parsed
}

export function fetchIssue(issueId, options = {}) {
  if (options.dryRun) {
    return {
      number: Number(issueId),
      title: `Dry-run implementation for #${issueId}`,
      body: '---\nrisk-tier: R2\npre-authorized: true\n---\n',
      labels: [{ name: 'status:ready-to-run' }, { name: 'risk:R2' }],
      comments: [{ author: { login: 'dry-run' }, body: '/auto-approve risk:R2' }],
      state: 'OPEN',
      synthetic: true,
    }
  }
  const result = runCommand('gh', [
    'issue', 'view', String(issueId), '--repo', REPO,
    '--json', 'number,title,labels,body,comments,state,url,author',
  ], { cwd: repoRoot })
  const issue = issueFromGhJson(result.stdout)
  if (String(issue.state || '').toUpperCase() !== 'OPEN') throw new PipelineError(`Issue #${issueId} 不是 OPEN 状态`)
  return issue
}

function inferPlugin(issue, explicit) {
  if (explicit) return explicit
  const title = String(issue.title || '')
  const scope = /^(?:feat|fix|refactor|docs|chore)\(([^)]+)\)/i.exec(title)?.[1]
  return scope || 'common'
}

export function slugifyTopic(value, issueId) {
  const slug = String(value || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0,  forty())
  return slug || `issue-${issueId}`
}

function forty() {
  return 40
}

function packagePath(root, plugin) {
  if (!plugin || plugin === 'common') return null
  return join(root, 'plugins', plugin)
}

function getPackageInfo(root, plugin) {
  const dir = packagePath(root, plugin)
  if (!dir || !existsSync(join(dir, 'package.json'))) return null
  const packageJson = readJsonFile(join(dir, 'package.json'))
  if (!packageJson) throw new PipelineError(`无法解析插件 package.json: ${dir}`)
  return { dir, packageJson }
}

function branchName(plugin, topic, issueId) {
  const scope = plugin && plugin !== 'common' ? plugin : 'governance'
  return `agent/${scope}-${topic}-issue-${issueId}`
}

function worktreePath(topic, issueId, explicit) {
  return explicit || resolve(repoRoot, '..', `omnimux-dsh-wt-${topic}-${issueId}`)
}

function currentBranch(root) {
  const result = runCommand('git', ['-C', root, 'branch', '--show-current'])
  return result.stdout.trim()
}

function baseSha(root, options) {
  if (options.dryRun) return 'dry-run-base'
  runCommand('git', ['-C', root, 'fetch', 'origin', BASE_BRANCH])
  const result = runCommand('git', ['-C', root, 'rev-parse', `origin/${BASE_BRANCH}`])
  const sha = result.stdout.trim()
  if (!sha) throw new PipelineError('无法解析 origin/main SHA')
  return sha
}

function statusPorcelain(root) {
  const result = runCommand('git', ['-C', root, 'status', '--porcelain', '--untracked-files=all'])
  return result.stdout.trim()
}

function changedPaths(root, base, options) {
  if (options.dryRun) return []
  return changedFilesFromGit(root, base)
    .map(file => relative(root, file).replaceAll('\\', '/'))
}

function hasCodeChanges(paths) {
  return paths.some(file => CODE_EXTENSIONS.has(extname(file)) && !TEST_FILE_RE.test(file))
}

function requiresBrowser(paths) {
  return paths.some(file => UI_FILE_RE.test(file))
}

function pluginNamesFromChanges(paths) {
  return [...new Set(paths.map(file => /^plugins\/([^/]+)\//.exec(file)?.[1]).filter(Boolean))]
}

function parseTestSummary(output) {
  const lines = String(output || '').split(/\r?\n/)
  const findLast = (patterns) => {
    let value = null
    for (const line of lines) {
      for (const pattern of patterns) {
        const match = pattern.exec(line)
        if (match) value = Number(match[1])
      }
    }
    return value
  }
  return {
    tests: findLast([/(?:^|\s)[#ℹ]?\s*tests?\s+(\d+)\s*$/i, /(?:^|\s)tests\s*[:=]\s*(\d+)/i]),
    passed: findLast([/(?:^|\s)[#ℹ]?\s*pass(?:ed)?\s+(\d+)\s*$/i, /pass(?:ed)?\s*[:=]\s*(\d+)/i]),
    failed: findLast([/(?:^|\s)[#ℹ]?\s*fail(?:ed)?\s+(\d+)\s*$/i, /fail(?:ed)?\s*[:=]\s*(\d+)/i]),
    skipped: findLast([/(?:^|\s)[#ℹ]?\s*skipped?\s+(\d+)\s*$/i, /skipped?\s*[:=]\s*(\d+)/i]),
  }
}

function writeEvidence(path, content) {
  mkdirSync(dirname(path), { recursive: true, mode: 0o700 })
  writeFileSync(path, content, { encoding: 'utf8', mode: 0o600 })
}

function runPackageTest(root, packageName, packageDir, options, evidenceDir, codeChanged, allowSkips) {
  const packageJson = readJsonFile(join(packageDir, 'package.json'))
  if (!packageJson?.scripts?.test) {
    if (codeChanged) throw new PipelineError(`${packageName} 没有 test script，代码变更不能放行`)
    return { packageName, status: 0, tests: 0, skipped: 0, notApplicable: true }
  }
  const result = runCommand('pnpm', ['--filter', packageJson.name || packageName, 'test'], {
    cwd: root,
    dryRun: options.dryRun,
  })
  const output = `${result.stdout || ''}${result.stderr || ''}`
  const summary = options.dryRun ? { tests: 1, passed: 1, failed: 0, skipped: 0 } : parseTestSummary(output)
  writeEvidence(join(evidenceDir, `test-${packageName}.log`), output)
  if (result.status !== 0) throw new PipelineError(`${packageName} 测试失败`, { packageName, summary })
  if (summary.tests == null || summary.tests <= 0) {
    throw new PipelineError(`${packageName} 测试未报告实际用例数（0 tests 或输出不可解析）`, { packageName, summary })
  }
  if ((summary.failed || 0) > 0) throw new PipelineError(`${packageName} 存在失败测试`, { packageName, summary })
  if ((summary.skipped || 0) > 0 && !allowSkips) {
    throw new PipelineError(`${packageName} 存在未声明 skip 测试`, { packageName, summary })
  }
  return { packageName, status: result.status, ...summary }
}

function updateIssueLabels(issueId, add = [], remove = [], options = {}) {
  if (options.dryRun) {
    process.stdout.write(`[dry-run] Issue #${issueId} add=${add.join(',')} remove=${remove.join(',')}\n`)
    return
  }
  const args = ['issue', 'edit', String(issueId), '--repo', REPO]
  for (const label of add) args.push('--add-label', label)
  for (const label of remove) args.push('--remove-label', label)
  runCommand('gh', args, { cwd: repoRoot })
}

function transitionIssue(issueId, target, options, extraAdd = [], extraRemove = []) {
  const remove = STATUS_LABELS.filter(label => label !== target).concat(extraRemove)
  const add = target ? [target, ...extraAdd] : extraAdd
  updateIssueLabels(issueId, add, remove, options)
}

function saveState(root, issueId, current, next, patch = {}) {
  return transitionState(root, issueId, current, next, patch)
}

function ensureBranchAndWorktree(plugin, topic, issueId, options) {
  const expectedBranch = branchName(plugin, topic, issueId)
  const wtDir = worktreePath(topic, issueId, options.worktree)
  if (options.dryRun) {
    process.stdout.write(`· [dry-run] Worktree=${wtDir} branch=${expectedBranch}\n`)
    return { wtDir, expectedBranch }
  }
  if (!existsSync(wtDir)) {
    runCommand('bash', ['scripts/git-wt.sh', 'start', plugin, topic, issueId], { cwd: repoRoot })
  }
  if (!existsSync(join(wtDir, '.git'))) throw new PipelineError(`Worktree 未正确创建: ${wtDir}`)
  const actualBranch = currentBranch(wtDir)
  if (actualBranch !== expectedBranch) {
    throw new PipelineError(`Worktree 分支不匹配：期望 ${expectedBranch}，实际 ${actualBranch}`)
  }
  return { wtDir, expectedBranch }
}

function runImplementation(wtDir, plugin, topic, issueId, options) {
  const before = options.dryRun ? '' : statusPorcelain(wtDir)
  if (options.implementationCommand) {
    runCommand('bash', ['-lc', options.implementationCommand], {
      cwd: wtDir,
      dryRun: options.dryRun,
      env: {
        DSH_PIPELINE: '1',
        OMNIMUX_ISSUE_ID: String(issueId),
        OMNIMUX_PLUGIN: plugin,
        OMNIMUX_TOPIC: topic,
        OMNIMUX_WORKTREE: wtDir,
      },
    })
  } else if (!options.allowExistingChanges && !options.dryRun) {
    throw new PipelineError('没有显式 implementation command，且未声明 --allow-existing-changes；拒绝猜测或执行 Issue 正文命令')
  }
  const after = options.dryRun ? 'dry-run changes' : statusPorcelain(wtDir)
  if (!options.dryRun && !after) {
    throw new PipelineError('实施阶段没有产生任何工作树变更')
  }
  return { before, after }
}

function runStaticQa(wtDir, plugin, base, options, evidenceDir) {
  const qaScript = join(wtDir, 'scripts', 'auto-qa-gate.mjs')
  if (!existsSync(qaScript)) throw new PipelineError(`Worktree 缺少 auto-qa-gate.mjs: ${qaScript}`)
  const reportPath = join(evidenceDir, 'auto-qa-report.json')
  const args = [qaScript, wtDir, '--plugin', plugin, '--diff', '--base', base, '--json', '--output', reportPath]
  const browserRequired = options.browserRequired
  if (browserRequired) args.push('--require-browser', '--evidence-dir', evidenceDir)
  const result = runCommand('node', args, { cwd: wtDir, dryRun: options.dryRun })
  if (options.dryRun) return { pass: true, reportPath, browserRequired }
  const report = readJsonFile(reportPath)
  if (!report || !report.pass || result.status !== 0) throw new PipelineError('L0 auto-qa-gate 未通过', { report })
  if (browserRequired && !validateBrowserEvidence(evidenceDir).pass) {
    throw new PipelineError('UI 变更缺少完整 ego-browser 证据')
  }
  return { pass: true, reportPath, browserRequired, report }
}

function runBrowserQa(wtDir, issueId, plugin, options, evidenceDir) {
  if (!options.browserRequired) return { required: false, pass: true }
  if (!options.l2Url) throw new PipelineError('检测到 UI/Host/Stage 变更，但未提供 --l2-url；ego-browser 是硬门禁，不能 skip')
  const script = join(wtDir, 'scripts', 'ego-browser-qa.sh')
  if (!existsSync(script)) throw new PipelineError(`缺少 ego-browser 验收脚本: ${script}`)
  const result = runCommand('bash', [script, options.l2Url, evidenceDir, options.expectedText], {
    cwd: wtDir,
    dryRun: options.dryRun,
    env: {
      EGO_ISSUE_ID: String(issueId),
      EGO_PLUGIN: plugin,
      EGO_TASK_SPACE_NAME: `omnimux-qa-issue-${issueId}-${plugin}`,
    },
  })
  if (options.dryRun) return { required: true, pass: true }
  const evidence = validateBrowserEvidence(evidenceDir)
  if (result.status !== 0 || !evidence.pass) throw new PipelineError('ego-browser L3 验收失败', { evidence })
  return { required: true, pass: true, evidence: evidence.report }
}

function runIntegrationGates(root, options, evidenceDir) {
  const commands = [
    ['pnpm', ['test:gates']],
    ['pnpm', ['check:boundaries']],
    ['pnpm', ['verify:stages']],
  ]
  const results = []
  for (const [command, args] of commands) {
    const result = runCommand(command, args, { cwd: root, dryRun: options.dryRun })
    writeEvidence(join(evidenceDir, `integration-${command}-${args[0]}.log`), `${result.stdout || ''}${result.stderr || ''}`)
    if (result.status !== 0) throw new PipelineError(`集成门禁失败: ${command} ${args.join(' ')}`)
    results.push({ command, args, status: result.status })
  }
  return results
}

function commitAndPush(wtDir, plugin, title, issueId, branch, options) {
  if (options.dryRun) {
    process.stdout.write(`· [dry-run] commit/push branch=${branch}\n`)
    return { branch, committed: true }
  }
  const status = statusPorcelain(wtDir)
  if (!status) throw new PipelineError('没有可提交的变更')
  runCommand('git', ['add', '--all'], { cwd: wtDir })
  const staged = runCommand('git', ['diff', '--cached', '--quiet'], { cwd: wtDir, allowFailure: true })
  if (staged.status === 0) throw new PipelineError('git add 后没有 staged 变更')
  const type = /^(feat|fix|refactor|docs|chore)\b/i.exec(title)?.[1]?.toLowerCase() || 'feat'
  const scope = plugin && plugin !== 'common' ? plugin : 'contracts'
  const summary = String(title).replace(/\r?\n/g, ' ').trim().slice(0,  sixty()) || `Issue #${issueId} delivery pipeline`
  runCommand('git', ['commit', '-m', `${type}(${scope}): ${summary} (#${issueId})`], { cwd: wtDir })
  runCommand('git', ['push', '-u', 'origin', branch], { cwd: wtDir })
  return { branch, committed: true }
}

function sixty() {
  return 60
}

function prFromList(raw) {
  const list = readJsonText(raw, [])
  return Array.isArray(list) && list.length > 0 ? list[0] : null
}

function readJsonText(raw, fallback) {
  try { return JSON.parse(raw) } catch { return fallback }
}

function findOrCreatePr(wtDir, branch, plugin, title, issueId, reports, risk, options, evidenceDir) {
  const body = [
    `Closes #${issueId}`,
    '',
    '## 变更说明',
    `- Issue: #${issueId}`,
    `- branch: \`${branch}\``,
    `- risk-tier: ${risk.tier}`,
    `- merge channel: ${risk.automaticAllowed ? 'auto only with explicit Issue authorization' : 'boss-only'}`,
    '',
    '## 机器证据',
    `- L0 report: \`${relative(wtDir, reports.qa.reportPath).replaceAll('\\', '/') }\``,
    `- Browser required: ${reports.browser.required ? 'yes' : 'no'}`,
    `- Browser evidence: ${reports.browser.required ? `\`${relative(wtDir, evidenceDir).replaceAll('\\', '/') }\`` : 'not applicable to changed surface'}`,
    `- Integration gates: ${reports.integration.length} command(s) completed`,
    '',
    '## 合入规则',
    '- `qa:pass` 由 CI 聚合门禁写入；本流水线不自授予。',
    '- R0/R1 必须由老板人工合入；R2/R3 只有显式预授权且 required checks 全绿才可自动合入。',
    '- 未确认 `MERGED` 前不物化、不清理 Worktree。',
  ].join('\n')
  const bodyPath = join(evidenceDir, 'pr-body.md')
  writeEvidence(bodyPath, `${body}\n`)

  if (options.dryRun) {
    process.stdout.write(`· [dry-run] PR body -> ${bodyPath}\n`)
    return { number: null, url: null, bodyPath }
  }

  const existingResult = runCommand('gh', [
    'pr', 'list', '--repo', REPO, '--head', branch, '--state', 'open', '--json', 'number,url,title',
  ], { cwd: wtDir })
  const existing = prFromList(existingResult.stdout)
  if (existing) return { ...existing, bodyPath, reused: true }

  const created = runCommand('gh', [
    'pr', 'create', '--repo', REPO, '--base', BASE_BRANCH,
    '--head', branch, '--title', `${title} (#${issueId})`, '--body-file', bodyPath,
  ], { cwd: wtDir })
  const url = /(https?:\/\/[^\s]+\/pull\/\d+)/.exec(created.stdout)?.[1]
  if (!url) throw new PipelineError('gh pr create 未返回可解析 PR URL')
  const viewed = runCommand('gh', ['pr', 'view', url, '--repo', REPO, '--json', 'number,url,title'], { cwd: wtDir })
  const pr = readJsonText(viewed.stdout, null)
  if (!pr?.number) throw new PipelineError('无法读取新建 PR number')
  return { ...pr, bodyPath, reused: false }
}

function labelPr(prNumber, risk, options) {
  if (options.dryRun || !prNumber) return
  const labels = ['status:qa-review', `risk:${risk.tier}`]
  const args = ['pr', 'edit', String(prNumber), '--repo', REPO]
  for (const label of labels) args.push('--add-label', label)
  runCommand('gh', args, { cwd: repoRoot })
}

function checkRollup(rollup) {
  const entries = Array.isArray(rollup) ? rollup : []
  const states = entries.map(entry => String(entry.conclusion || entry.state || entry.status || '').toUpperCase())
  const failures = states.filter(state => ['FAILURE', 'FAILED', 'ERROR', 'CANCELLED', 'TIMED_OUT'].includes(state))
  const pending = states.filter(state => ['PENDING', 'QUEUED', 'IN_PROGRESS', 'REQUESTED', 'WAITING', ''].includes(state))
  return {
    hasChecks: entries.length > 0,
    pass: entries.length > 0 && failures.length === 0 && pending.length === 0,
    pending: pending.length > 0,
    failures,
  }
}

function queryPr(prNumber, options) {
  if (options.dryRun) return { state: 'OPEN', statusCheckRollup: [{ conclusion: 'SUCCESS' }] }
  const result = runCommand('gh', [
    'pr', 'view', String(prNumber), '--repo', REPO,
    '--json', 'number,url,state,mergedAt,mergeCommit,statusCheckRollup,headRefName,baseRefName',
  ], { cwd: repoRoot })
  return readJsonText(result.stdout, null)
}

async function waitForCi(prNumber, options) {
  if (options.dryRun) return { pass: true, checks: { hasChecks: true, pass: true, pending: false, failures: [] } }
  const deadline = Date.now() + options.waitSeconds * 1000
  let last = null
  while (Date.now() <= deadline) {
    last = queryPr(prNumber, options)
    const checks = checkRollup(last?.statusCheckRollup)
    if (checks.pass) return { pass: true, checks }
    if (checks.failures.length > 0) throw new PipelineError(`PR required checks 失败: ${checks.failures.join(', ')}`, { checks })
    if (!checks.hasChecks && Date.now() + 15000 > deadline) break
    await new Promise(resolvePromise => setTimeout(resolvePromise, 15000))
  }
  throw new PipelineError('等待 CI required checks 超时或没有任何 check', { last })
}

async function requestAndConfirmMerge(prNumber, options) {
  if (options.noMerge) throw new PipelineError('已通过 --no-merge 禁止合入；保留 PR 供老板处理')
  if (options.dryRun) return { state: 'MERGED', mergedAt: 'dry-run', mergeCommit: { oid: 'dry-run' } }
  runCommand('gh', ['pr', 'merge', String(prNumber), '--repo', REPO, '--squash', '--auto', '--delete-branch'], { cwd: repoRoot })
  const deadline = Date.now() + options.waitSeconds * 1000
  let last = null
  while (Date.now() <= deadline) {
    last = queryPr(prNumber, options)
    if (String(last?.state).toUpperCase() === 'MERGED' && last.mergedAt && last.mergeCommit?.oid) return last
    if (String(last?.state).toUpperCase() === 'CLOSED') throw new PipelineError('PR 已关闭但未确认 MERGED', { last })
    await new Promise(resolvePromise => setTimeout(resolvePromise, 10000))
  }
  throw new PipelineError('已请求 auto-merge，但在超时时间内没有确认 MERGED', { last })
}

function ensureMainCleanForPostMerge(options) {
  if (options.dryRun) return
  const branch = currentBranch(repoRoot)
  if (branch !== BASE_BRANCH) throw new PipelineError(`收尾要求主仓在 ${BASE_BRANCH}，当前是 ${branch}`)
  const dirty = statusPorcelain(repoRoot)
  if (dirty) throw new PipelineError('主仓存在既有脏文件，拒绝 pull/物化/清理以保护现场')
}

function materializeAndCleanup(wt, plugin, topic, issueId, pr, options) {
  if (options.dryRun) {
    process.stdout.write('· [dry-run] 仅模拟合入确认后的物化与 Worktree 清理\n')
    return
  }
  ensureMainCleanForPostMerge(options)
  runCommand('git', ['-C', repoRoot, 'pull', '--ff-only', 'origin', BASE_BRANCH], { cwd: repoRoot })
  if (options.materialize && plugin && plugin !== 'common') {
    const wrapper = join(repoRoot, 'scripts', 'materialize-with-rollback.sh')
    const script = existsSync(wrapper) ? wrapper : join(repoRoot, 'scripts', 'sync-to-app.sh')
    runCommand('bash', [script, plugin], { cwd: repoRoot, env: { OMNIMUX_MERGE_CONFIRMED: '1' } })
  }
  runCommand('bash', [join(repoRoot, 'scripts', 'git-wt.sh'), 'clean', topic, issueId, '--pr', String(pr.number)], {
    cwd: repoRoot,
    env: { OMNIMUX_MERGE_CONFIRMED: '1' },
  })
}

function printDryRun(options, issue, plugin, topic) {
  process.stdout.write(`\n================================================================\n`)
  process.stdout.write(`🚀 启动 OmniMux 无人值守全自动交付流水线 (Issue #${options.issueId})\n`)
  process.stdout.write(`================================================================\n`)
  process.stdout.write(`· [dry-run] 不读取远端、不执行写操作、不合入、不物化\n`)
  process.stdout.write(`· 任务定义: 插件=[${plugin}] 主题=[${topic}] 标题=[${issue.title}]\n`)
  process.stdout.write(`\n==> [1/6] 解析 Issue #${options.issueId} 元数据...\n`)
  process.stdout.write('✓ Issue 元数据、风险、预授权与 DoD 校验（dry-run）\n')
  process.stdout.write(`\n==> [2/6] 创建独立 Worktree 物理沙箱...\n`)
  process.stdout.write('✓ Worktree/branch 绑定校验（dry-run）\n')
  process.stdout.write(`\n==> [3/6] 执行 L1 敏捷自动化测试 (Worktree)...\n`)
  process.stdout.write('✓ 真实测试命令与计数门禁（dry-run）\n')
  process.stdout.write(`\n==> [4/6] 执行严过关五维自动化质检门禁...\n`)
  process.stdout.write('✓ L0 diff-aware / L2 integration / L3 ego-browser 条件门禁（dry-run）\n')
  process.stdout.write(`\n==> [5/6] 自动提交、发起 PR 并按风险决定合入...\n`)
  process.stdout.write('✓ PR body、CI required checks、R0-R3 通道（dry-run）\n')
  process.stdout.write(`\n==> [6/6] 合入确认后物化、回滚保护并清理...\n`)
  process.stdout.write('✓ 仅在 state=MERGED 且 mergeCommit 存在后执行（dry-run）\n')
  process.stdout.write(`\n================================================================\n`)
  process.stdout.write('🎉 无人值守全自动流水线执行完毕（dry-run，未修改远端）\n')
  process.stdout.write('================================================================\n\n')
}

export async function executePipeline(options) {
  const issue = fetchIssue(options.issueId, options)
  const plugin = inferPlugin(issue, options.plugin)
  const topic = options.topic || slugifyTopic(issue.title, options.issueId)
  if (options.dryRun) {
    printDryRun(options, issue, plugin, topic)
    return { state: 'dry-run', issue, plugin, topic }
  }

  const lock = acquireIssueLock(repoRoot, options.issueId)
  let current = null
  let stateWritten = false
  try {
    const sha = baseSha(repoRoot, options)
    const runKey = makeRunKey(options.issueId, sha)
    const previous = readState(repoRoot, options.issueId)
    const idem = assertSameRun(previous, runKey)
    if (idem.kind === 'terminal' && !options.forceRetry) {
      process.stdout.write(`· Issue #${options.issueId} 已有相同 runKey 的终态 ${previous.state}，幂等返回\n`)
      return previous
    }
    if ((idem.kind === 'active' || idem.kind === 'different') && !options.forceRetry) {
      throw new PipelineError(`Issue #${options.issueId} 存在未完成或不同 runKey 的流水线状态，使用 --force-retry 前先人工检查现场`)
    }

    const auth = assessAuthorization(issue)
    const preRisk = classifyRisk(issue, [])
    const channel = preRisk.automaticAllowed && auth.eligible ? 'auto' : 'boss'
    if (!options.manual && !auth.eligible && preRisk.automaticAllowed) {
      throw new PipelineError(`R2/R3 Issue 未满足自动授权，拒绝进入无人值守通道: ${auth.reasons.join('；')}`)
    }
    if (preRisk.tier === 'R0' || preRisk.tier === 'R1') {
      process.stdout.write(`· 风险 ${preRisk.tier}：强制老板人工合入\n`)
    }

    current = 'preflight'
    saveState(repoRoot, options.issueId, null, current, {
      runKey,
      baseSha: sha,
      plugin,
      topic,
      channel,
      riskTier: preRisk.tier,
      authorization: auth,
    })
    stateWritten = true
    transitionIssue(options.issueId, 'status:pipeline-running', options, [`risk:${preRisk.tier}`])

    process.stdout.write(`\n================================================================\n`)
    process.stdout.write(`🚀 启动 OmniMux 无人值守全自动交付流水线 (Issue #${options.issueId})\n`)
    process.stdout.write(`================================================================\n`)
    process.stdout.write(`· 任务定义: 插件=[${plugin}] 主题=[${topic}] 风险=[${preRisk.tier}] 通道=[${channel}]\n`)

    process.stdout.write(`\n==> [1/6] 解析 Issue #${options.issueId} 元数据...\n`)
    current = 'metadata'
    saveState(repoRoot, options.issueId, 'preflight', current, { issueTitle: issue.title })
    transitionIssue(options.issueId, 'status:in-progress', options, [`risk:${preRisk.tier}`])

    process.stdout.write('\n==> [2/6] 创建独立 Worktree 物理沙箱并实施代码...\n')
    const wt = ensureBranchAndWorktree(plugin, topic, options.issueId, options)
    current = 'implementation'
    saveState(repoRoot, options.issueId, 'metadata', current, { worktree: wt.wtDir, branch: wt.expectedBranch })
    runImplementation(wt.wtDir, plugin, topic, options.issueId, options)
    const paths = changedPaths(wt.wtDir, sha, options)
    const risk = classifyRisk(issue, paths)
    const effectiveChannel = risk.automaticAllowed && auth.eligible ? 'auto' : 'boss'
    saveState(repoRoot, options.issueId, current, current, { changedFiles: paths, riskTier: risk.tier, channel: effectiveChannel, riskReasons: risk.reasons })

    process.stdout.write('\n==> [3/6] 执行 L1 敏捷自动化测试 (Worktree)...\n')
    current = 'tests'
    saveState(repoRoot, options.issueId, 'implementation', current)
    const evidenceDir = options.evidenceDir || join(wt.wtDir, '.workbuddy', 'evidence', `issue-${options.issueId}`)
    mkdirSync(evidenceDir, { recursive: true, mode: 0o700 })
    const allowSkips = parseFrontmatter(issue.body || '')['allow-skips'] === true
    const changedPlugins = pluginNamesFromChanges(paths)
    const packages = changedPlugins.length > 0 ? changedPlugins : (plugin !== 'common' ? [plugin] : [])
    const testReports = []
    const codeChanged = hasCodeChanges(paths)
    for (const changedPlugin of packages) {
      const info = getPackageInfo(wt.wtDir, changedPlugin)
      if (!info) throw new PipelineError(`无法定位变更插件 package.json: ${changedPlugin}`)
      testReports.push(runPackageTest(wt.wtDir, changedPlugin, info.dir, options, evidenceDir, codeChanged, allowSkips))
    }
    if (packages.length === 0 || paths.some(file => !file.startsWith('plugins/'))) {
      const rootGate = runCommand('pnpm', ['test:gates'], { cwd: wt.wtDir, dryRun: options.dryRun })
      writeEvidence(join(evidenceDir, 'test-root-gates.log'), `${rootGate.stdout || ''}${rootGate.stderr || ''}`)
      if (rootGate.status !== 0) throw new PipelineError('根级 test:gates 失败')
    }

    process.stdout.write('\n==> [4/6] 执行严过关五维自动化质检门禁与 L2/L3 验收...\n')
    current = 'qa'
    saveState(repoRoot, options.issueId, 'tests', current, { testReports })
    const browserRequired = requiresBrowser(paths)
    options.browserRequired = browserRequired
    const browser = runBrowserQa(wt.wtDir, options.issueId, plugin, options, evidenceDir)
    const qa = runStaticQa(wt.wtDir, plugin, sha, options, evidenceDir)
    const integration = runIntegrationGates(wt.wtDir, options, evidenceDir)
    const reports = { qa, browser, integration, tests: testReports }
    saveState(repoRoot, options.issueId, 'qa', 'qa', { reports })
    transitionIssue(options.issueId, 'status:qa-review', options, [`risk:${risk.tier}`])

    process.stdout.write('\n==> [5/6] 自动提交、发起 PR 并按风险决定合入...\n')
    current = 'pr'
    saveState(repoRoot, options.issueId, 'qa', current)
    const commit = commitAndPush(wt.wtDir, plugin, issue.title || `Issue #${options.issueId}`, options.issueId, wt.expectedBranch, options)
    const pr = findOrCreatePr(wt.wtDir, wt.expectedBranch, plugin, issue.title || `Issue #${options.issueId}`, options.issueId, reports, risk, options, evidenceDir)
    labelPr(pr.number, risk, options)
    if (risk.tier === 'R0' || risk.tier === 'R1' || effectiveChannel !== 'auto') {
      transitionIssue(options.issueId, 'status:ready-for-boss', options, [`risk:${risk.tier}`])
      saveState(repoRoot, options.issueId, 'pr', 'ready-for-boss', { commit, pr, reports })
      process.stdout.write(`✓ PR #${pr.number || '(dry-run)'} 已交老板人工通道；不自动合入、不物化、不清理\n`)
      return { state: 'ready-for-boss', issue, plugin, topic, risk, pr, reports }
    }

    process.stdout.write('\n==> [6/6] CI、受控合入确认、物化与收尾...\n')
    current = 'ci'
    saveState(repoRoot, options.issueId, 'pr', current, { commit, pr, reports })
    transitionIssue(options.issueId, 'status:auto-merge-pending', options, [`risk:${risk.tier}`])

    // Re-verify authorization right before requesting merge to honor any late /revoke.
    const latestIssue = fetchIssue(options.issueId, options)
    const latestAuth = assessAuthorization(latestIssue)
    if (!latestAuth.eligible) {
      throw new PipelineError(`合入前重新核验授权失败，已被撤销或状态改变: ${latestAuth.reasons.join('；')}`)
    }

    const ci = await waitForCi(pr.number, options)
    saveState(repoRoot, options.issueId, 'ci', 'auto-merge-pending', { ci })
    const merged = await requestAndConfirmMerge(pr.number, options)
    saveState(repoRoot, options.issueId, 'auto-merge-pending', 'merged-confirmed', { merged })
    materializeAndCleanup(wt, plugin, topic, options.issueId, pr, options)
    transitionIssue(options.issueId, 'status:auto-merged', options, [`risk:${risk.tier}`])
    saveState(repoRoot, options.issueId, 'merged-confirmed', 'succeeded', { merged, materialized: options.materialize })
    process.stdout.write(`\n🎉 Issue #${options.issueId} 已确认 MERGED、物化并完成收尾\n`)
    return { state: 'succeeded', issue, plugin, topic, risk, pr, merged, reports }
  } catch (error) {
    if (stateWritten) {
      const message = error instanceof Error ? error.message : String(error)
      try {
        writeState(repoRoot, options.issueId, {
          ...(readState(repoRoot, options.issueId) || {}),
          state: 'blocked',
          error: message,
        })
      } catch (stateError) {
        process.stderr.write(`⚠ 无法写入 blocked 状态: ${stateError.message}\n`)
      }
      try {
        transitionIssue(options.issueId, 'status:blocked', options, [], [])
      } catch (labelError) {
        process.stderr.write(`⚠ 无法更新 Issue blocked 标签: ${labelError.message}\n`)
      }
    }
    throw error
  } finally {
    lock.release()
  }
}

export async function main(argv = process.argv.slice(2)) {
  try {
    const options = parseArgs(argv)
    await executePipeline(options)
    return 0
  } catch (error) {
    process.stderr.write(`\n❌ 流水线执行阻断: ${error instanceof Error ? error.message : String(error)}\n`)
    return 1
  }
}

const entry = process.argv[1] ? resolve(process.argv[1]) : ''
if (entry && fileURLToPath(import.meta.url) === entry) {
  process.exitCode = await main()
}
