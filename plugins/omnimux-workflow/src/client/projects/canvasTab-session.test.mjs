/**
 * CanvasTab：sessionId 未就绪不得挂画布岛，避免 workspaceId=undefined 误开最新图。
 */
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

test('源码契约：无 targetWorkspaceId 不渲染 CanvasBridge', () => {
  const src = readFileSync(join(here, 'CanvasTab.jsx'), 'utf8')
  assert.match(src, /targetWorkspaceId \?/)
  assert.match(src, /t\('canvas\.loading'\)/)
  const bridgeIdx = src.lastIndexOf('<CanvasBridge')
  const guardIdx = src.indexOf('targetWorkspaceId ?')
  assert.ok(guardIdx >= 0 && bridgeIdx > guardIdx, 'CanvasBridge 必须在 sessionId 守卫之后')
})
