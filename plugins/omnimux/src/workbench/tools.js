/**
 * Agent Workbench Tools:
 * - workbench_get_active_view: reads current client viewport
 * - workbench_open_tab: drives workbench open tab via RPC with anti-annoyance guards
 */

import { isValidTabId } from './schema.js'

export const MAX_TAB_SWITCHES_PER_SESSION = 3

export function mountWorkbenchTools(ctx, deps) {
  const mailbox = deps.mailbox
  const getSettings = deps.getSettings
  const jsonOut = deps.jsonOut || ((res) => ({ content: [{ type: 'text', text: JSON.stringify(res) }] }))

  // session auto-switch counter: sessionId -> count
  const sessionSwitchCounts = new Map()

  // 1. workbench_get_active_view
  ctx.tools?.register({
    name: 'workbench_get_active_view',
    description: '获取当前右侧工作台（better-sidebar）激活的选项卡、子视图与用户选中的实体列表，感知用户界面视口。',
    parameters: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
    execute: async () => {
      const view = mailbox.getActiveView()
      return jsonOut(view)
    },
  })

  // 2. workbench_open_tab
  ctx.tools?.register({
    name: 'workbench_open_tab',
    description: '控制右侧工作台切换并打开指定的插件选项卡（如资产库、创作画布、视频剪辑等），支持附带视图过滤与实体高亮。',
    parameters: {
      type: 'object',
      properties: {
        tabId: {
          type: 'string',
          description: '合规的 Occupant tabId，例如 omnimux-assets:library, omnimux-workflow:canvas, omnimux-clip:studio 等',
        },
        reason: {
          type: 'string',
          description: '为什么需要切换页面的说明（4-80字），会展示在对话记录中',
        },
        view: {
          type: 'object',
          description: '可选的子视图或分类参数，如 { filterType: "character" }',
        },
        highlightIds: {
          type: 'array',
          items: { type: 'string' },
          description: '打开后需要高亮聚焦的资产或实体 ID 列表（至多20个）',
        },
        undoToken: {
          type: 'string',
          description: '用于撤销上一次切换动作的凭证（60秒内有效）',
        },
      },
      required: ['tabId', 'reason'],
      additionalProperties: false,
    },
    execute: async (args) => {
      const { tabId, reason, view, highlightIds, undoToken } = args || {}

      if (!reason || typeof reason !== 'string' || reason.trim().length < 4) {
        return jsonOut({ ok: true, applied: false, code: 'reason-required' })
      }

      if (!isValidTabId(tabId)) {
        return jsonOut({ ok: true, applied: false, code: 'unknown-tab' })
      }

      // Check settings toggle
      const settings = typeof getSettings === 'function' ? getSettings() : null
      if (settings && settings.allowAgentSwitchTab === false) {
        return jsonOut({ ok: true, applied: false, code: 'user-denied' })
      }

      // Check current viewport state
      const currentView = mailbox.getActiveView()
      const surface = currentView?.uiContext?.surface

      if (surface && surface.panelOpen === false) {
        return jsonOut({ ok: true, applied: false, code: 'panel-collapsed' })
      }

      if (surface && surface.tabId === tabId) {
        return jsonOut({ ok: true, applied: true, code: 'already-active' })
      }

      const sessionId = currentView?.uiContext?.sessionId || 'default'
      const switchCount = sessionSwitchCounts.get(sessionId) || 0
      if (!undoToken && switchCount >= MAX_TAB_SWITCHES_PER_SESSION) {
        return jsonOut({ ok: true, applied: false, code: 'quota-exceeded' })
      }

      const requestId = `rpc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
      const newUndoToken = `undo_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

      const rpcPayload = {
        requestId,
        method: 'open',
        tabId,
        path: tabId,
        view,
        highlightIds: (highlightIds || []).slice(0, 20),
        reason: reason.trim(),
        previousTabId: surface?.tabId,
        undoToken: newUndoToken,
        sessionId,
      }

      const ack = await mailbox.sendRpc(rpcPayload)

      if (ack?.ok && ack?.applied) {
        if (!undoToken) {
          sessionSwitchCounts.set(sessionId, switchCount + 1)
        }
      }

      return jsonOut({
        ...ack,
        undoToken: newUndoToken,
      })
    },
  })
}
