import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  decideBashCommand,
  decideWrite,
  isDestructiveResetCommand,
  isEphemeralPath,
  isWorktreePath,
} from './guard-worktree.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const worktreeRoot = join(here, '..')
const mainRepoRoot = '/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh'
const scriptPath = join(here, 'guard-worktree.mjs')

function runHook(payload) {
  const res = spawnSync('node', [scriptPath], {
    cwd: mainRepoRoot,
    encoding: 'utf8',
    input: JSON.stringify(payload),
  })
  assert.equal(res.status, 0, `guard exited ${res.status}: ${res.stderr}`)
  return JSON.parse(res.stdout)
}

describe('guard-worktree path classification', () => {
  it('detects worktree vs ephemeral vs tracked', () => {
    assert.equal(
      isWorktreePath('/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-clip-42/plugins/omnimux/src/index.js'),
      true,
    )
    assert.equal(
      isWorktreePath('/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins/omnimux/src/index.js'),
      false,
    )
    assert.equal(isEphemeralPath(`${mainRepoRoot}/plugins/omnimux/node_modules/foo/index.js`), true)
    assert.equal(isEphemeralPath(`${mainRepoRoot}/plugins/omnimux-workflow/dist-harness/app.js`), true)
    assert.equal(isEphemeralPath(`${mainRepoRoot}/plugins/omnimux/tmp/scratch.js`), true)
    assert.equal(isEphemeralPath(`${mainRepoRoot}/plugins/omnimux/src/index.js`), false)
    assert.equal(isEphemeralPath(`${mainRepoRoot}/package.json`), false)
  })
})

describe('guard-worktree decideWrite (全量版本文件拦截)', () => {
  it('denies tracked plugin source on the main checkout', () => {
    const result = decideWrite({
      toolName: 'edit',
      cwd: mainRepoRoot,
      filePath: 'plugins/omnimux/src/host/apply.js',
    })
    assert.equal(result.decision, 'deny')
    assert.equal(result.reason, 'tracked-file')
  })

  it('denies tracked root-level files (e.g. package.json)', () => {
    const result = decideWrite({
      toolName: 'edit',
      cwd: mainRepoRoot,
      filePath: 'package.json',
    })
    assert.equal(result.decision, 'deny')
    assert.equal(result.reason, 'tracked-file')
  })

  it('denies tracked docs files (e.g. docs/contracts/hub.md)', () => {
    const result = decideWrite({
      toolName: 'edit',
      cwd: mainRepoRoot,
      filePath: 'docs/contracts/hub.md',
    })
    assert.equal(result.decision, 'deny')
    assert.equal(result.reason, 'tracked-file')
  })

  it('denies tracked scripts files (e.g. scripts/dev-doctor.sh)', () => {
    const result = decideWrite({
      toolName: 'edit',
      cwd: mainRepoRoot,
      filePath: 'scripts/dev-doctor.sh',
    })
    assert.equal(result.decision, 'deny')
    assert.equal(result.reason, 'tracked-file')
  })

  it('allows gitignored plugin paths in main repo', () => {
    const result = decideWrite({
      toolName: 'write',
      cwd: mainRepoRoot,
      filePath: 'plugins/omnimux/node_modules/not-a-real-pkg/index.js',
    })
    assert.equal(result.decision, 'allow')
    assert.ok(result.reason === 'ephemeral' || result.reason === 'gitignored')
  })

  it('allows workflow dist / dist-harness (temp build dirs)', () => {
    const distHarness = decideWrite({
      toolName: 'write',
      cwd: mainRepoRoot,
      filePath: 'plugins/omnimux-workflow/dist-harness/scratch.js',
    })
    assert.equal(distHarness.decision, 'allow')

    const dist = decideWrite({
      toolName: 'write',
      cwd: mainRepoRoot,
      filePath: 'plugins/omnimux-workflow/dist/index.js',
    })
    assert.equal(dist.decision, 'allow')
    assert.equal(dist.reason, 'ephemeral')
  })

  it('allows untracked scratch files in main repo', () => {
    const result = decideWrite({
      toolName: 'write',
      cwd: mainRepoRoot,
      filePath: '__untracked_scratch_987654.txt',
    })
    assert.equal(result.decision, 'allow')
    assert.equal(result.reason, 'untracked')
  })

  it('allows all writes inside a worktree path (including plugins, docs, root)', () => {
    const wtPlugin = decideWrite({
      toolName: 'edit',
      cwd: worktreeRoot,
      filePath: 'plugins/omnimux/src/index.js',
    })
    assert.equal(wtPlugin.decision, 'allow')
    assert.equal(wtPlugin.reason, 'worktree-isolated')

    const wtRoot = decideWrite({
      toolName: 'edit',
      cwd: worktreeRoot,
      filePath: 'package.json',
    })
    assert.equal(wtRoot.decision, 'allow')
    assert.equal(wtRoot.reason, 'worktree-isolated')
  })
})

describe('guard-worktree PreToolUse protocol', () => {
  it('emits deny JSON for tracked files across plugins, docs, and scripts', () => {
    const outPlugin = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'edit',
      cwd: mainRepoRoot,
      tool_input: { file_path: join(mainRepoRoot, 'plugins/omnimux/src/host/apply.js') },
    })
    assert.equal(outPlugin.hookSpecificOutput.hookEventName, 'PreToolUse')
    assert.equal(outPlugin.hookSpecificOutput.permissionDecision, 'deny')

    const outDoc = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'edit',
      cwd: mainRepoRoot,
      tool_input: { file_path: join(mainRepoRoot, 'docs/contracts/hub.md') },
    })
    assert.equal(outDoc.hookSpecificOutput.permissionDecision, 'deny')

    const outRoot = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'edit',
      cwd: mainRepoRoot,
      tool_input: { file_path: join(mainRepoRoot, 'package.json') },
    })
    assert.equal(outRoot.hookSpecificOutput.permissionDecision, 'deny')
  })

  it('emits allow JSON for untracked / ignored / worktree paths', () => {
    const ignored = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'write',
      cwd: mainRepoRoot,
      tool_input: { file_path: join(mainRepoRoot, 'plugins/omnimux-workflow/dist-harness/hook-test.js') },
    })
    assert.equal(ignored.hookSpecificOutput.permissionDecision, 'allow')

    const untracked = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'write',
      cwd: mainRepoRoot,
      tool_input: { file_path: join(mainRepoRoot, '__guard_untracked_scratch__.tmp') },
    })
    assert.equal(untracked.hookSpecificOutput.permissionDecision, 'allow')
  })
})

describe('guard-worktree git reset --hard safety guard', () => {
  it('correctly classifies destructive git reset commands', () => {
    assert.equal(isDestructiveResetCommand('git reset --hard HEAD~1'), true)
    assert.equal(isDestructiveResetCommand('git reset --hard origin/main'), true)
    assert.equal(isDestructiveResetCommand('git reset --soft HEAD~1'), false)
    assert.equal(isDestructiveResetCommand('git reset HEAD file.txt'), false)
    assert.equal(isDestructiveResetCommand('echo "git reset --hard"'), false)
    assert.equal(isDestructiveResetCommand('gh issue create --body "ran git reset --hard"'), false)
  })
})
