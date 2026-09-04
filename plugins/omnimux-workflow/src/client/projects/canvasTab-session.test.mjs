/**
 * CanvasTab：sessionId 未就绪不得挂画布岛，避免 workspaceId=undefined 误开最新图。
 * 且必须把 session 绑定的 workspaceId 贡献进 UI Context Envelope。
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

test('源码契约：注册 Context Contributor 携带 canvas workspaceId', () => {
  const src = readFileSync(join(here, 'CanvasTab.jsx'), 'utf8')
  assert.match(src, /registerContextContributor\(CANVAS_TAB_ID/)
  assert.match(src, /kind:\s*'canvas'/)
  assert.match(src, /extra:\s*\{\s*workspaceId:\s*targetWorkspaceId\s*\}/)
  assert.match(src, /CANVAS_PAGE_ID/)
})
