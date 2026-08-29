#!/usr/bin/env node
/**
 * scripts/guard-worktree.mjs
 * dsh-hooks-plugin PreToolUse Guard for OmniMux DSH
 *
 * 全域版本控制守卫 (Universal Version-Control Guard):
 * 严禁在主仓库 main 分支直接对任何已加入 Git 版本管理（Tracked）的文件/文件夹执行 edit/write 操作。
 * 强制所有改动走独立 Worktree 工作区 (./scripts/git-wt.sh) 进行物理隔离，防止主干污染、冲突覆盖与成果丢弃。
 * 同时拦截对未推送提交具有毁灭性覆盖风险的 `git reset --hard` 操作。
 *
 * 豁免清单 (允许在主仓操作):
 *   - 独立 Worktree 目录 (路径含 omnimux-dsh-wt-)
 *   - 临时/衍生目录或文件: node_modules, dist, dist-harness, tmp, temp, coverage, *.log, *.tsbuildinfo, .pnpm-store 等
 *   - 符合 .gitignore 的未跟踪/忽略文件 (git check-ignore)
 *   - 尚未被 git 跟踪的本地临时文件/草稿
 */

import { spawnSync } from 'node:child_process'
import { isAbsolute, resolve, sep } from 'node:path'
import { pathToFileURL } from 'node:url'

const MAIN_PLUGINS_MARK = `${sep}omnimux-dsh${sep}plugins${sep}`
const WORKTREE_MARK = `${sep}omnimux-dsh-wt-`

const EPHEMERAL_DIR_NAMES = new Set([
  'node_modules',
  'dist',
  'dist-harness',
  'tmp',
  'temp',
  '.tmp',
  '.cache',
  'coverage',
  '.pnpm-store',
])

const EPHEMERAL_BASENAMES = new Set(['.DS_Store'])
const EPHEMERAL_SUFFIXES = ['.log', '.tsbuildinfo']

export function isWorktreePath(fullPath) {
  return typeof fullPath === 'string' && fullPath.includes(WORKTREE_MARK)
}

export function isMainRepoPluginPath(fullPath) {
  if (isWorktreePath(fullPath)) return false
  if (fullPath.includes(MAIN_PLUGINS_MARK)) return true
  const normalized = fullPath.replace(/\\/g, '/')
  return normalized.includes('/omnimux-dsh/plugins/') || normalized.startsWith('plugins/') || normalized.includes('/plugins/')
}

export function isEphemeralPath(fullPath) {
  const parts = fullPath.split(/[\\/]/).filter(Boolean)
  if (parts.some((part) => EPHEMERAL_DIR_NAMES.has(part))) return true
  const base = parts[parts.length - 1] || ''
  if (EPHEMERAL_BASENAMES.has(base)) return true
  return EPHEMERAL_SUFFIXES.some((suffix) => base.endsWith(suffix))
}

function git(args, cwd) {
  return spawnSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function gitUnavailable(res) {
  return Boolean(res.error) || res.status === 128 || res.status == null
}

function gitRoot(cwd) {
  const res = git(['rev-parse', '--show-toplevel'], cwd)
  if (gitUnavailable(res) || res.status !== 0) return ''
  return String(res.stdout || '').trim()
}

export function isGitIgnored(fullPath, cwd) {
  const root = gitRoot(cwd) || cwd
  const res = git(['check-ignore', '-q', '--', fullPath], root)
  if (gitUnavailable(res)) return false
  return res.status === 0
}

export function isGitTracked(fullPath, cwd) {
  const root = gitRoot(cwd) || cwd
  const res = git(['ls-files', '--error-unmatch', '--', fullPath], root)
  // Git missing / not a repo → treat as tracked so the gate stays closed safely.
  if (gitUnavailable(res)) return true
  return res.status === 0
}

function toFullPath(filePath, cwd) {
  if (!filePath) return ''
  return filePath.startsWith('/') || isAbsolute(filePath) ? filePath : resolve(cwd, filePath)
}

export function getUnpushedCommits(cwd) {
  const root = gitRoot(cwd) || cwd
  const res = git(['rev-list', 'origin/main..HEAD'], root)
  if (gitUnavailable(res) || res.status !== 0) return []
  return String(res.stdout || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

export function isDestructiveResetCommand(command) {
  if (!command || typeof command !== 'string') return false
  // Ignore non-git commands like gh, echo, grep, cat, node, etc. that might mention git reset in quotes
  const trimmed = command.trim()
  if (trimmed.startsWith('gh ') || trimmed.startsWith('echo ') || trimmed.startsWith('grep ') || trimmed.startsWith('node ')) {
    return false
  }
  // Match git reset --hard as a real command invocation (at start or after shell operator)
  return /(?:^|[;&|]\s*)git\s+reset\s+[^;&|]*--hard\b/i.test(command)
}

export function decideBashCommand({ command, cwd }) {
  if (!command || typeof command !== 'string') return { decision: 'allow' }
  if (!isDestructiveResetCommand(command)) return { decision: 'allow' }

  // Check if unpushed commits exist on current HEAD
  const unpushed = getUnpushedCommits(cwd)
  if (unpushed.length > 0) {
    return {
      decision: 'deny',
      reason: 'unpushed-commits-at-risk',
      unpushedCount: unpushed.length,
      unpushedCommits: unpushed,
    }
  }
  return { decision: 'allow', reason: 'clean-upstream' }
}

export function decideWrite({ filePath, cwd, toolName }) {
  // Normalize toolName to handle namespace e.g. "default_api:edit" -> "edit"
  const rawName = String(toolName || '').toLowerCase()
  const name = rawName.replace(/^.*:/, '')
  if (name !== 'edit' && name !== 'write') return { decision: 'allow' }

  const fullPath = toFullPath(String(filePath || '').trim(), cwd)
  if (!fullPath) return { decision: 'allow' }

  // 1. 独立 Worktree 目录完全豁免放行
  if (isWorktreePath(fullPath)) {
    return { decision: 'allow', fullPath, reason: 'worktree-isolated' }
  }

  // 2. 临时与衍生文件豁免放行
  if (isEphemeralPath(fullPath)) {
    return { decision: 'allow', fullPath, reason: 'ephemeral' }
  }

  // 3. 符合 .gitignore 的被忽略文件豁免放行
  if (isGitIgnored(fullPath, cwd)) {
    return { decision: 'allow', fullPath, reason: 'gitignored' }
  }

  // 4. 未加入版本管理的全新临时草稿文件豁免放行
  if (!isGitTracked(fullPath, cwd)) {
    return { decision: 'allow', fullPath, reason: 'untracked' }
  }

  // 5. 【核心全域拦截】任何已加入 Git 版本管理（Tracked）的文件，在主仓一律严禁直接修改！
  return { decision: 'deny', fullPath, reason: 'tracked-file' }
}

function decisionJson(hookEventName, decision, reason, extra = {}) {
  const output = {
    hookEventName,
    permissionDecision: decision,
  }
  if (decision === 'deny') {
    if (reason === 'unpushed-commits-at-risk') {
      output.permissionDecisionReason = [
        `🚫【DSH 核心安全阻断】拦截破坏性重置：检测到当前本地分支存在尚未推送到远端 origin/main 的提交（共 ${extra.unpushedCount || 0} 个）！`,
        '📌 事故防范守则：执行 git reset --hard 会导致这些未同步的本地工作成果被永久抹去（本会话曾出现同类事故）。',
        '👉 正确流程：',
        '  1. 若成果有效：请切换到工作分支推送远端（git push / 提 PR 合入 main）；',
        '  2. 若确需重置：请先执行备份命令（如 git tag backup/safety-$(date +%s)）后再安全处理。',
      ].join('\n')
    } else {
      output.permissionDecisionReason = [
        '🚫【DSH 核心门禁阻断】严禁在主仓库 main 分支直接修改任何已加入版本管理（Git Tracked）的文件！',
        '📌 核心防线原则：版本管理的文件一旦在主目录被修改，将面临未经审核的脏提交，或者在同步拉取时被覆盖/丢弃。',
        '👉 正确流程：请先调用 bash 运行: ./scripts/git-wt.sh start <plugin> <topic> <issue_id> 创建并切入独立 Worktree 工作区！',
        'ℹ️  豁免范围：独立 Worktree 目录、gitignore 规则文件、临时缓存（node_modules、dist、tmp、*.log）与尚未跟踪的草稿文件。',
      ].join('\n')
    }
  }
  return { hookSpecificOutput: output }
}

function handle(rawInput) {
  const input = JSON.parse(rawInput || '{}')
  const hookEventName = input.hook_event_name || 'PreToolUse'
  const rawTool = String(input.tool_name || '').toLowerCase()
  const toolName = rawTool.replace(/^.*:/, '')
  const toolInput = input.tool_input || {}
  const cwd = String(input.cwd || process.cwd())

  if (toolName === 'bash') {
    const command = String(toolInput.command || '')
    const bashResult = decideBashCommand({ command, cwd })
    return decisionJson(hookEventName, bashResult.decision, bashResult.reason, bashResult)
  }

  const filePath = String(toolInput.file_path || '').trim()
  const result = decideWrite({ filePath, cwd, toolName })
  return decisionJson(hookEventName, result.decision, result.reason, result)
}

function main() {
  let rawInput = ''
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', (chunk) => {
    rawInput += chunk
  })
  process.stdin.on('end', () => {
    try {
      process.stdout.write(JSON.stringify(handle(rawInput)) + '\n')
    } catch (err) {
      process.stderr.write(`[guard-worktree error] ${err.message}\n`)
      process.stdout.write(
        JSON.stringify({
          hookSpecificOutput: {
            hookEventName: 'PreToolUse',
            permissionDecision: 'allow',
          },
        }) + '\n',
      )
    }
  })
}

const isMain = Boolean(process.argv[1]) && import.meta.url === pathToFileURL(resolve(process.argv[1])).href

if (isMain) main()
