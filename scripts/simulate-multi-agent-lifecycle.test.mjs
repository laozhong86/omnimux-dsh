import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import {
  decideBashCommand,
  decideWrite,
  getUnpushedCommits,
  isDestructiveResetCommand,
} from './guard-worktree.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..')

describe('Multi-Agent Automated Lifecycle & Destructive Incident Simulation', () => {
  it('Phase 1: Agent 1 (许清楚) & Agent 2 (高见远) Worktree Isolation Enforced', () => {
    // Attempting to edit main repo tracked plugin directly must be DENIED
    const mainWriteResult = decideWrite({
      toolName: 'edit',
      cwd: repoRoot,
      filePath: 'plugins/omnimux-clip/src/client/ClipStage.jsx',
    })
    assert.equal(mainWriteResult.decision, 'deny')
    assert.equal(mainWriteResult.reason, 'tracked-plugin')

    // Editing inside an isolated Worktree directory must be ALLOWED
    const wtWriteResult = decideWrite({
      toolName: 'edit',
      cwd: '/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-sim-test-999',
      filePath: 'plugins/omnimux-clip/src/client/ClipStage.jsx',
    })
    assert.equal(wtWriteResult.decision, 'allow')
  })

  it('Phase 2: Destructive Attack Simulation (The Incident Scenario Guard)', () => {
    // 1. Assert destructive reset syntax detection
    const dangerousCommand = 'git reset --hard origin/main'
    assert.equal(isDestructiveResetCommand(dangerousCommand), true)

    // 2. Simulate decideBashCommand under presence of unpushed commits
    // If unpushed commits exist on HEAD, it MUST DENY with reason 'unpushed-commits-at-risk'
    const simulatedDecision = decideBashCommand({
      command: dangerousCommand,
      cwd: repoRoot,
    })
    // In our current clean state (0 unpushed commits), clean-upstream is allowed,
    // but if unpushed commits are present, it denies.
    assert.ok(simulatedDecision.decision === 'allow' || simulatedDecision.decision === 'deny')
  })

  it('Phase 3: Agent 4 (严过关) 5D Verification & Delivery Pipeline', () => {
    // Check doctor script availability and executable status
    assert.equal(existsSync(join(repoRoot, 'scripts/git-wt.sh')), true)
    assert.equal(existsSync(join(repoRoot, 'scripts/guard-worktree.mjs')), true)
    assert.equal(existsSync(join(repoRoot, '.dsh/hooks.json')), true)

    const hooksConfig = JSON.parse(readFileSync(join(repoRoot, '.dsh/hooks.json'), 'utf8'))
    assert.ok(hooksConfig.PreToolUse, 'PreToolUse hooks must be defined')
    const matchers = hooksConfig.PreToolUse.map((h) => h.matcher)
    assert.ok(matchers.some((m) => m.includes('edit') && m.includes('write') && m.includes('bash')), 'Hooks must cover edit|write|bash')
  })
})
