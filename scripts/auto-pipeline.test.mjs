import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..')

describe('OmniMux 无人值守全自动流水线与五维质检门禁', () => {
  it('auto-qa-gate.mjs 脚本存在且支持 JSON 输出模式', () => {
    const qaScript = join(here, 'auto-qa-gate.mjs')
    assert.ok(existsSync(qaScript), 'auto-qa-gate.mjs 必须存在')

    const out = execSync(`node "${qaScript}" "${repoRoot}/plugins/omnimux-accounts" --json`, {
      encoding: 'utf8',
    })
    const report = JSON.parse(out)
    assert.ok(report.timestamp, '报告必须包含 timestamp')
    assert.ok(report.dimensions, '报告必须包含五维指标')
    assert.ok('syntax' in report.dimensions)
    assert.ok('lifecycle' in report.dimensions)
    assert.ok('security' in report.dimensions)
    assert.ok('tokens' in report.dimensions)
    assert.ok('guards' in report.dimensions)
  })

  it('auto-pipeline.mjs 支持 dry-run 完整链路校验', () => {
    const pipelineScript = join(here, 'auto-pipeline.mjs')
    assert.ok(existsSync(pipelineScript), 'auto-pipeline.mjs 必须存在')

    const out = execSync(`node "${pipelineScript}" 999 --plugin omnimux-accounts --topic dry-test --dry-run`, {
      cwd: repoRoot,
      encoding: 'utf8',
    })
    assert.ok(out.includes('启动 OmniMux 无人值守全自动交付流水线'), '必须包含启动横幅')
    assert.ok(out.includes('[1/6] 解析 Issue #999 元数据'), '必须包含阶段1')
    assert.ok(out.includes('[2/6] 创建独立 Worktree 物理沙箱'), '必须包含阶段2')
    assert.ok(out.includes('[4/6] 执行严过关五维自动化质检门禁'), '必须包含阶段4')
    assert.ok(out.includes('[5/6] 自动提交、发起 PR 并预授权 Squash 合入'), '必须包含阶段5')
    assert.ok(out.includes('无人值守全自动流水线执行完毕'), '必须包含完成提示')
  })

  it('omnimux CLI 正确挂载 qa:gate 与 auto:run 命令', () => {
    const omnimuxCli = join(here, 'omnimux.mjs')
    const helpOut = execSync(`node "${omnimuxCli}" help`, { encoding: 'utf8' })
    assert.ok(helpOut.includes('qa:gate'), 'help 必须包含 qa:gate')
    assert.ok(helpOut.includes('auto:run'), 'help 必须包含 auto:run')
  })
})
