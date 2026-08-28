import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  assessAuthorization,
  classifyRisk,
  parseFrontmatter,
  slugifyTopic,
} from './auto-pipeline.mjs'
import {
  acquireIssueLock,
  makeRunKey,
  readState,
  transitionState,
  writeState,
} from './pipeline-state.mjs'
import { validateBrowserEvidence } from './auto-qa-gate.mjs'
import { evaluateVerdict } from './ci-verdict.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..')

describe('OmniMux 自动化交付流水线与质量门禁套件', () => {
  it('auto-qa-gate.mjs 脚本存在且支持 JSON 输出模式与五维指标', () => {
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
    assert.equal(typeof report.pass, 'boolean')
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
    assert.ok(out.includes('[3/6] 执行 L1 敏捷自动化测试'), '必须包含阶段3')
    assert.ok(out.includes('[4/6] 执行严过关五维自动化质检门禁'), '必须包含阶段4')
    assert.ok(out.includes('[5/6] 自动提交、发起 PR 并按风险决定合入'), '必须包含阶段5')
    assert.ok(out.includes('[6/6] 合入确认后物化、回滚保护并清理'), '必须包含阶段6')
    assert.ok(out.includes('无人值守全自动流水线执行完毕（dry-run，未修改远端）'), '必须包含完成提示')
  })

  it('omnimux CLI 正确挂载 qa:gate 与 auto:run 命令', () => {
    const omnimuxCli = join(here, 'omnimux.mjs')
    const helpOut = execSync(`node "${omnimuxCli}" help`, { encoding: 'utf8' })
    assert.ok(helpOut.includes('qa:gate'), 'help 必须包含 qa:gate')
    assert.ok(helpOut.includes('auto:run'), 'help 必须包含 auto:run')
  })

  it('parseFrontmatter 正确解析 YAML frontmatter', () => {
    const body = `---
track: Track B
risk-tier: R2
pre-authorized: true
allow-skips: false
---
### 需求正文
`
    const fm = parseFrontmatter(body)
    assert.equal(fm.track, 'Track B')
    assert.equal(fm['risk-tier'], 'R2')
    assert.equal(fm['pre-authorized'], true)
    assert.equal(fm['allow-skips'], false)
  })

  it('assessAuthorization 正确识别有效与无效的自动合入授权', () => {
    const maintainers = new Set(['boss-user'])
    const validIssue = {
      body: '---\nrisk-tier: R2\npre-authorized: true\n---\n',
      labels: [{ name: 'status:ready-to-run' }, { name: 'risk:R2' }],
      comments: [{ author: { login: 'boss-user' }, body: '/auto-approve risk:R2' }],
    }
    const validAuth = assessAuthorization(validIssue, maintainers)
    assert.equal(validAuth.eligible, true, '合法 R2 授权必须通过')

    const revokedIssue = {
      ...validIssue,
      comments: [
        { author: { login: 'boss-user' }, body: '/auto-approve risk:R2' },
        { author: { login: 'boss-user' }, body: '/revoke 取消授权' },
      ],
    }
    const revokedAuth = assessAuthorization(revokedIssue, maintainers)
    assert.equal(revokedAuth.eligible, false, '被 /revoke 后必须拒绝自动合入')

    const mismatchedIssue = {
      body: '---\nrisk-tier: R1\npre-authorized: true\n---\n',
      labels: [{ name: 'status:ready-to-run' }, { name: 'risk:R1' }],
      comments: [{ author: { login: 'boss-user' }, body: '/auto-approve risk:R1' }],
    }
    const mismatchedAuth = assessAuthorization(mismatchedIssue, maintainers)
    assert.equal(mismatchedAuth.eligible, false, 'R1 严禁被判定为自动合入授权')
  })

  it('classifyRisk 识别 R1 契约路径与跨插件变更', () => {
    const issue = { body: '---\nrisk-tier: R2\n---\n', labels: [{ name: 'risk:R2' }] }
    const r1Files = ['AGENTS.md', 'plugins/omnimux-clip/src/index.js']
    const classifiedR1 = classifyRisk(issue, r1Files)
    assert.equal(classifiedR1.tier, 'R1')
    assert.equal(classifiedR1.automaticAllowed, false)

    const crossPluginFiles = ['plugins/omnimux-clip/src/index.js', 'plugins/omnimux-assets/src/index.js']
    const classifiedCross = classifyRisk(issue, crossPluginFiles)
    assert.equal(classifiedCross.tier, 'R1')

    const r2Files = ['plugins/omnimux-accounts/src/client/view.js']
    const classifiedR2 = classifyRisk(issue, r2Files)
    assert.equal(classifiedR2.tier, 'R2')
    assert.equal(classifiedR2.automaticAllowed, true)
  })

  it('pipeline-state 排他锁与原子状态机工作正常', () => {
    const tmpRoot = join(repoRoot, '.workbuddy', 'tmp-test-state')
    mkdirSync(tmpRoot, { recursive: true })
    try {
      const lock1 = acquireIssueLock(tmpRoot, '888')
      assert.ok(lock1.lock, '锁路径有效')
      assert.throws(() => acquireIssueLock(tmpRoot, '888'), /已有流水线运行锁/)

      const state1 = transitionState(tmpRoot, '888', null, 'preflight', { runKey: '888@abc' })
      assert.equal(state1.state, 'preflight')

      const read1 = readState(tmpRoot, '888')
      assert.equal(read1.state, 'preflight')
      assert.equal(read1.runKey, '888@abc')

      lock1.release()
      // 释放后应能再次上锁
      const lock2 = acquireIssueLock(tmpRoot, '888')
      lock2.release()
    } finally {
      rmSync(tmpRoot, { recursive: true, force: true })
    }
  })

  it('validateBrowserEvidence 正确核验证据完整性', () => {
    const tmpEvidence = join(repoRoot, '.workbuddy', 'tmp-test-evidence')
    mkdirSync(tmpEvidence, { recursive: true })
    try {
      const shotFile = join(tmpEvidence, 'shot.png')
      writeFileSync(shotFile, 'fake image data')

      const validReport = {
        pass: true,
        tool: 'ego-browser',
        taskSpaceId: 'task-1',
        actualUrl: 'http://127.0.0.1:44201/',
        snapshot: 'OmniMux Stage Content',
        dom: { bodyTextLength: 100 },
        screenshot: 'shot.png',
      }
      writeFileSync(join(tmpEvidence, 'ego-browser-report.json'), JSON.stringify(validReport))

      const validResult = validateBrowserEvidence(tmpEvidence)
      assert.equal(validResult.pass, true, '合法证据必须放行')

      const invalidReport = { ...validReport, pass: false, errors: ['页面崩溃'] }
      writeFileSync(join(tmpEvidence, 'ego-browser-report.json'), JSON.stringify(invalidReport))
      const invalidResult = validateBrowserEvidence(tmpEvidence)
      assert.equal(invalidResult.pass, false, 'FAIL 证据必须拦截')
    } finally {
      rmSync(tmpEvidence, { recursive: true, force: true })
    }
  })

  it('evaluateVerdict 聚合 CI 判定逻辑正确', () => {
    const passQa = { pass: true, summary: 'L0 PASS' }
    const failQa = { pass: false, summary: 'L0 FAIL' }
    const passBrowser = { pass: true, tool: 'ego-browser', taskSpaceId: 't1', actualUrl: 'http://127.0.0.1:44205' }

    assert.equal(evaluateVerdict(passQa, null, { requireBrowser: false }).pass, true)
    assert.equal(evaluateVerdict(failQa, null, { requireBrowser: false }).pass, false)
    assert.equal(evaluateVerdict(passQa, passBrowser, { requireBrowser: true }).pass, true)
    assert.equal(evaluateVerdict(passQa, null, { requireBrowser: true }).pass, false)
  })

  it('slugifyTopic 截断长度且保留有效字符', () => {
    const slug = slugifyTopic('feat(clip): Support Multi-Track Video Timeline Editing & Export!', '42')
    assert.ok(slug.length <= 40, 'Topic 长度必须不超过 40 字符')
    assert.ok(!/[^a-z0-9-]/.test(slug), 'Topic 只能包含小写字母、数字和中划线')
  })
})
