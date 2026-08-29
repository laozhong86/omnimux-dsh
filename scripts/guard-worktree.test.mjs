import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  decideWrite,
  isEphemeralPath,
  isMainRepoPluginPath,
  isWorktreePath,
} from './guard-worktree.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..')
const scriptPath = join(here, 'guard-worktree.mjs')

function runHook(payload) {
  const res = spawnSync('node', [scriptPath], {
    cwd: repoRoot,
    encoding: 'utf8',
    input: JSON.stringify(payload),
  })
  assert.equal(res.status, 0, `guard exited ${res.status}: ${res.stderr}`)
  return JSON.parse(res.stdout)
}

describe('guard-worktree path classification', () => {
  it('detects main-repo plugins vs worktree vs ephemeral', () => {
    assert.equal(
      isMainRepoPluginPath('/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins/omnimux/src/index.js'),
      true,
    )
    assert.equal(
      isWorktreePath('/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-clip-42/plugins/omnimux/src/index.js'),
      true,
    )
    assert.equal(
      isMainRepoPluginPath('/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-clip-42/plugins/omnimux/src/index.js'),
      false,
    )
    assert.equal(isEphemeralPath(`${repoRoot}/plugins/omnimux/node_modules/foo/index.js`), true)
    assert.equal(isEphemeralPath(`${repoRoot}/plugins/omnimux-workflow/dist-harness/app.js`), true)
    assert.equal(isEphemeralPath(`${repoRoot}/plugins/omnimux/tmp/scratch.js`), true)
    assert.equal(isEphemeralPath(`${repoRoot}/plugins/omnimux/src/index.js`), false)
  })
})

describe('guard-worktree decideWrite', () => {
  it('denies tracked plugin source on the main checkout', () => {
    const result = decideWrite({
      toolName: 'edit',
      cwd: repoRoot,
      filePath: 'plugins/omnimux/src/host/apply.js',
    })
    assert.equal(result.decision, 'deny')
    assert.equal(result.reason, 'tracked-plugin')
  })

  it('denies namespaced tool default_api:edit on tracked plugin source', () => {
    const result = decideWrite({
      toolName: 'default_api:edit',
      cwd: repoRoot,
      filePath: 'plugins/omnimux/src/host/apply.js',
    })
    assert.equal(result.decision, 'deny')
    assert.equal(result.reason, 'tracked-plugin')
  })

  it('allows gitignored plugin paths', () => {
    const result = decideWrite({
      toolName: 'write',
      cwd: repoRoot,
      filePath: 'plugins/omnimux/node_modules/not-a-real-pkg/index.js',
    })
    assert.equal(result.decision, 'allow')
    assert.ok(result.reason === 'ephemeral' || result.reason === 'gitignored')
  })

  it('allows workflow dist / dist-harness (temp build dirs)', () => {
    const distHarness = decideWrite({
      toolName: 'write',
      cwd: repoRoot,
      filePath: 'plugins/omnimux-workflow/dist-harness/scratch.js',
    })
    assert.equal(distHarness.decision, 'allow')

    const dist = decideWrite({
      toolName: 'write',
      cwd: repoRoot,
      filePath: 'plugins/omnimux-workflow/dist/index.js',
    })
    assert.equal(dist.decision, 'allow')
    assert.equal(dist.reason, 'ephemeral')
  })

  it('allows untracked files under plugins/', () => {
    const result = decideWrite({
      toolName: 'write',
      cwd: repoRoot,
      filePath: 'plugins/omnimux/__guard_untracked_scratch__.js',
    })
    assert.equal(result.decision, 'allow')
    assert.equal(result.reason, 'untracked')
  })

  it('allows writes outside plugins/', () => {
    const result = decideWrite({
      toolName: 'write',
      cwd: repoRoot,
      filePath: 'docs/contracts/plugin-git-pr.md',
    })
    assert.equal(result.decision, 'allow')
  })

  it('allows plugin writes inside a worktree path', () => {
    const result = decideWrite({
      toolName: 'edit',
      cwd: repoRoot,
      filePath: '/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-clip-42/plugins/omnimux/src/index.js',
    })
    assert.equal(result.decision, 'allow')
  })
})

describe('guard-worktree PreToolUse protocol', () => {
  it('emits deny JSON for tracked plugin source', () => {
    const out = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'edit',
      cwd: repoRoot,
      tool_input: { file_path: join(repoRoot, 'plugins/omnimux/src/host/apply.js') },
    })
    assert.equal(out.hookSpecificOutput.hookEventName, 'PreToolUse')
    assert.equal(out.hookSpecificOutput.permissionDecision, 'deny')
    assert.match(out.hookSpecificOutput.permissionDecisionReason, /Worktree/)
  })

  it('emits allow JSON for untracked / ignored plugin paths', () => {
    const ignored = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'write',
      cwd: repoRoot,
      tool_input: { file_path: join(repoRoot, 'plugins/omnimux-workflow/dist-harness/hook-test.js') },
    })
    assert.equal(ignored.hookSpecificOutput.permissionDecision, 'allow')

    const untracked = runHook({
      hook_event_name: 'PreToolUse',
      tool_name: 'write',
      cwd: repoRoot,
      tool_input: { file_path: join(repoRoot, 'plugins/omnimux/__guard_untracked_scratch__.js') },
    })
    assert.equal(untracked.hookSpecificOutput.permissionDecision, 'allow')
  })
})
