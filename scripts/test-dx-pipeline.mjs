/**
 * test-dx-pipeline.mjs — DX 流水线 L1 自动化单元测试套件
 *
 * 验证目标：
 * 1. CLI 命令路由与 help 提示完整性
 * 2. Agent 误杀桌面应用的 Fail-closed 拦截守卫
 * 3. build:all 全量构建调度器的一致性与快速失败
 * 4. dev-env.sh / watch-plugin.mjs 进程模型与参数合法性
 */

import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../..')
const productDir = join(rootDir, 'product/omnimux-dsh')
const cliPath = join(rootDir, 'scripts/omnimux.mjs')
const buildAllPath = join(rootDir, 'scripts/build-all.mjs')

test('TC-L1-01: omnimux.mjs help 输出必须包含 restart-host 与 build:all', () => {
  const res = spawnSync(process.execPath, [cliPath, 'help'], { encoding: 'utf8' })
  assert.equal(res.status, 0)
  assert.match(res.stdout, /dev restart-host <task>/)
  assert.match(res.stdout, /build:all/)
  assert.match(res.stdout, /sync/)
})

test('TC-L1-02: Agent 环境下执行桌面应用重启必须被 Fail-closed 严格拦截', () => {
  const env = { ...process.env, DSH_AGENT_SESSION: '1' }
  const res = spawnSync(process.execPath, [cliPath, 'restart', 'dev'], {
    env,
    encoding: 'utf8',
  })
  assert.equal(res.status, 1)
  assert.match(res.stderr, /Agent 严禁强杀或重启任何桌面应用/)
})

test('TC-L1-03: scripts/build-all.mjs 全量构建应能正常执行且退出码为 0', () => {
  const res = spawnSync(process.execPath, [buildAllPath], {
    cwd: rootDir,
    encoding: 'utf8',
  })
  assert.equal(res.status, 0)
  assert.match(res.stdout, /全量构建成功/)
})

test('TC-L1-04: watch-plugin.mjs 传入不存在插件必须优雅非零退出且无 uncaught 崩溃', () => {
  const watchScript = join(productDir, 'scripts/watch-plugin.mjs')
  const res = spawnSync(process.execPath, [watchScript, 'non-existent-plugin-xyz'], {
    cwd: productDir,
    encoding: 'utf8',
  })
  assert.equal(res.status, 1)
  assert.match(res.stderr, /插件源码不存在/)
})

test('TC-L1-05: dev-env.sh 非法任务名输入必须立即阻断', () => {
  const devEnvScript = join(productDir, 'scripts/dev-env.sh')
  const res = spawnSync('bash', [devEnvScript, 'start', '../../bad-name', 'omnimux-assets'], {
    cwd: productDir,
    encoding: 'utf8',
  })
  assert.equal(res.status, 1)
  assert.match(res.stderr, /非法任务名/)
})
