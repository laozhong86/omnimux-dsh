import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  checkTrackedWorkflowArtifacts,
  forbiddenTrackedPaths,
  formatFailure,
  isForbiddenWorkflowArtifact,
} from './check-tracked-artifacts.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(here, '..')

describe('check-tracked-artifacts：omnimux-workflow 生成物不入库', () => {
  it('识别 dist 与 lib 客户端/画布包，放过源码与其它插件', () => {
    assert.equal(isForbiddenWorkflowArtifact('plugins/omnimux-workflow/dist/index.js'), true)
    assert.equal(isForbiddenWorkflowArtifact('plugins/omnimux-workflow/lib/client.js'), true)
    assert.equal(isForbiddenWorkflowArtifact('plugins/omnimux-workflow/lib/canvas.js'), true)
    assert.equal(isForbiddenWorkflowArtifact('plugins/omnimux-workflow/src/index.ts'), false)
    assert.equal(isForbiddenWorkflowArtifact('plugins/omnimux-accounts/lib/client.js'), false)
    assert.equal(isForbiddenWorkflowArtifact(''), false)
  })

  it('从 git ls-files 输出抽出违规路径', () => {
    const tracked = forbiddenTrackedPaths([
      'plugins/omnimux-workflow/dist/index.js',
      'plugins/omnimux-workflow/src/index.ts',
      'plugins/omnimux-workflow/lib/canvas.js',
      'plugins/omnimux-accounts/lib/client.js',
    ].join('\n'))
    assert.deepEqual(tracked, [
      'plugins/omnimux-workflow/dist/index.js',
      'plugins/omnimux-workflow/lib/canvas.js',
    ])
    assert.equal(forbiddenTrackedPaths('').length, 0)
  })

  it('失败文案要求 git rm --cached 并现场 build', () => {
    const text = formatFailure(['plugins/omnimux-workflow/dist/index.js'])
    assert.match(text, /源码唯一真相/)
    assert.match(text, /git rm --cached/)
    assert.match(text, /sync-to-app/)
    assert.match(text, /dist\/index\.js/)
  })

  it('当前仓库 git ls-files 不得跟踪 workflow 生成物', () => {
    const result = checkTrackedWorkflowArtifacts(repoRoot)
    assert.equal(result.ok, true, result.message)
    assert.deepEqual(result.tracked, [])
  })

  it('CLI 在本仓退出 0', () => {
    const out = execSync(`node "${join(here, 'check-tracked-artifacts.mjs')}" --root "${repoRoot}"`, {
      encoding: 'utf8',
    })
    assert.match(out, /未跟踪/)
  })
})
