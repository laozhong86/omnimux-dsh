import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const scriptPath = join(here, 'git-wt.sh')

describe('scripts/git-wt.sh worktree helper', () => {
  it('exists and is executable', () => {
    assert.ok(existsSync(scriptPath), 'scripts/git-wt.sh must exist')
    const content = readFileSync(scriptPath, 'utf8')
    assert.ok(content.startsWith('#!/usr/bin/env bash'), 'must have bash shebang')
    assert.ok(content.includes('agent/${plugin}-${topic}'), 'follows branch naming contract')
    assert.ok(content.includes('omnimux-dsh-wt-'), 'follows sibling directory naming contract')
    assert.ok(content.includes('clean_issue'), 'supports Issue ID binding')
  })

  it('prints usage on invalid / empty arguments', () => {
    try {
      execSync(`"${scriptPath}"`, { encoding: 'utf8' })
      assert.fail('should fail on empty args')
    } catch (err) {
      assert.ok(err.stdout.includes('OmniMux 多 Agent Worktree 隔离与管理工具'))
      assert.ok(err.stdout.includes('start <plugin> <topic> [issue_id]'))
      assert.ok(err.stdout.includes('clean <topic> [issue_id]'))
    }
  })

  it('runs doctor successfully', () => {
    const out = execSync(`"${scriptPath}" doctor`, { encoding: 'utf8' })
    assert.ok(out.includes('检查主仓库纯净度'))
    assert.ok(out.includes('活跃 Worktree 数量'))
  })

  it('runs list successfully', () => {
    const out = execSync(`"${scriptPath}" list`, { encoding: 'utf8' })
    assert.ok(out.includes('OmniMux 活跃 Worktree 清单'))
    assert.ok(out.includes('omnimux-dsh'))
  })
})
