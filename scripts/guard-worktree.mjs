#!/usr/bin/env node
/**
 * scripts/guard-worktree.mjs
 * dsh-hooks-plugin PreToolUse Guard for OmniMux DSH
 *
 * Intercepts edit/write calls targeting the main repo's plugins/ directory,
 * forcing agents to create and work in isolated worktrees (./scripts/git-wt.sh).
 *
 * Exemptions (still allowed on the main checkout):
 *   - ephemeral dirs/files: node_modules, dist, dist-harness, tmp, temp, coverage, *.log, …
 *   - paths matching .gitignore (git check-ignore)
 *   - files and dirs that git does not track (untracked / not in the index)
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
  return fullPath.includes(WORKTREE_MARK)
}

export function isMainRepoPluginPath(fullPath) {
  // Support both full path containing omnimux-dsh/plugins/ and relative plugins/
  if (isWorktreePath(fullPath)) return false
  if (fullPath.includes(MAIN_PLUGINS_MARK)) return true
  // Check if starts with plugins/ or contains /plugins/
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
  // Git missing / not a repo → treat as tracked so the plugins/ gate stays closed.
  if (gitUnavailable(res)) return true
  return res.status === 0
}

function toFullPath(filePath, cwd) {
  if (!filePath) return ''
  return filePath.startsWith('/') || isAbsolute(filePath) ? filePath : resolve(cwd, filePath)
}

export function decideWrite({ filePath, cwd, toolName }) {
  // Normalize toolName to handle namespace e.g. "default_api:edit" -> "edit"
  const rawName = String(toolName || '').toLowerCase()
  const name = rawName.replace(/^.*:/, '')
  if (name !== 'edit' && name !== 'write') return { decision: 'allow' }

  const fullPath = toFullPath(String(filePath || '').trim(), cwd)
  if (!fullPath) return { decision: 'allow' }
  if (!isMainRepoPluginPath(fullPath)) return { decision: 'allow', fullPath }
  if (isEphemeralPath(fullPath)) {
    return { decision: 'allow', fullPath, reason: 'ephemeral' }
  }
  if (isGitIgnored(fullPath, cwd)) {
    return { decision: 'allow', fullPath, reason: 'gitignored' }
  }
  if (!isGitTracked(fullPath, cwd)) {
    return { decision: 'allow', fullPath, reason: 'untracked' }
  }
  return { decision: 'deny', fullPath, reason: 'tracked-plugin' }
}

function decisionJson(hookEventName, decision) {
  const output = {
    hookEventName,
    permissionDecision: decision,
  }
  if (decision === 'deny') {
    output.permissionDecisionReason = [
      '🚫【DSH 核心门禁阻断】严禁在主仓库 main 分支直接修改 plugins/ 已跟踪的业务代码！',
      '📌 违反了《OmniMux 插件 Git / PR 合同》（docs/contracts/plugin-git-pr.md）中「强制 Worktree 物理隔离」与「No Issue, No Code」红线。',
      '👉 请先调用 bash 运行: ./scripts/git-wt.sh start <plugin> <topic> <issue_id> 创建并进入独立 Worktree 工作区！',
      'ℹ️  豁免：gitignore / 临时目录（node_modules、dist、dist-harness、tmp、*.log 等）以及未被 git 跟踪的文件仍可在主仓修改。',
    ].join('\n')
  }
  return { hookSpecificOutput: output }
}

function handle(rawInput) {
  const input = JSON.parse(rawInput || '{}')
  const hookEventName = input.hook_event_name || 'PreToolUse'
  const toolName = String(input.tool_name || '').toLowerCase()
  const toolInput = input.tool_input || {}
  const filePath = String(toolInput.file_path || '').trim()
  const cwd = String(input.cwd || process.cwd())

  const result = decideWrite({ filePath, cwd, toolName })
  return decisionJson(hookEventName, result.decision)
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
