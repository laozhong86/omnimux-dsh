import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const here = dirname(fileURLToPath(import.meta.url))
const scriptPath = join(here, 'dev-env.sh')

describe('scripts/dev-env.sh --source (worktree source root)', () => {
  let testRoot

  const setupSandbox = () => {
    const runId = Math.random().toString(36).substring(2, 9)
    testRoot = join(tmpdir(), `omnimux-dev-env-src-${runId}`)
    mkdirSync(testRoot, { recursive: true })
    return testRoot
  }

  const cleanupSandbox = () => {
    if (testRoot && existsSync(testRoot)) {
      try {
        rmSync(testRoot, { recursive: true, force: true })
      } catch {
        // ignore
      }
    }
  }

  const run = (args, env = {}) => execSync(
    `bash "${scriptPath}" ${args}`,
    { encoding: 'utf8', env: { ...process.env, DSH_DEV_HOME: join(testRoot, 'dshdev'), ...env } },
  )

  it('rejects a non-existent --source directory', () => {
    setupSandbox()
    try {
      try {
        run(`stop foo --source=${join(testRoot, 'no-such-dir')}`)
        assert.fail('should have rejected a missing source dir')
      } catch (err) {
        const msg = `${err.stdout || ''}${err.stderr || ''}`
        assert.ok(msg.includes('目录不存在'), `expected missing-dir error, got: ${msg}`)
      }
    } finally {
      cleanupSandbox()
    }
  })

  it('rejects a --source that is not a plugin-tree root', () => {
    setupSandbox()
    try {
      mkdirSync(join(testRoot, 'empty-root'), { recursive: true })
      try {
        run(`stop foo --source=${join(testRoot, 'empty-root')}`)
        assert.fail('should have rejected a non-plugin-tree source')
      } catch (err) {
        const msg = `${err.stdout || ''}${err.stderr || ''}`
        assert.ok(msg.includes('必须是插件树根'), `expected plugin-tree-root error, got: ${msg}`)
      }
    } finally {
      cleanupSandbox()
    }
  })

  it('accepts a valid worktree-style --source and preserves stop semantics', () => {
    setupSandbox()
    try {
      // 构造工作树形态：wt-root/plugins/omnimux-assets/package.json
      const wtRoot = join(testRoot, 'omnimux-dsh-wt-demo')
      mkdirSync(join(wtRoot, 'plugins', 'omnimux-assets'), { recursive: true })
      writeFileSync(
        join(wtRoot, 'plugins', 'omnimux-assets', 'package.json'),
        JSON.stringify({ name: 'omnimux-assets', version: '1.0.0' }),
      )

      const out = run(`stop demo --source=${wtRoot}`)
      assert.ok(out.includes('源码源'), `expected source echo, got: ${out}`)
      assert.ok(out.includes('omnimux-dsh-wt-demo/plugins'), 'should point into the worktree plugins dir')
    } finally {
      cleanupSandbox()
    }
  })

  it('keeps default source when --source is omitted', () => {
    setupSandbox()
    try {
      const out = run('stop bar')
      assert.ok(!out.includes('源码源'), 'no --source should not echo a source line')
    } finally {
      cleanupSandbox()
    }
  })
})
