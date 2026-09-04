import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { mountWorkbenchTools } from './tools.js'
import { createHubEventBus } from '../events/hub-event-bus.js'
import { createWorkbenchMailbox } from './mailbox.js'

describe('Workbench Tools', () => {
  it('registers tools and executes get_active_view', async () => {
    const tools = new Map()
    const ctx = {
      tools: {
        register: (t) => tools.set(t.name, t),
      },
    }

    const bus = createHubEventBus()
    const mailbox = createWorkbenchMailbox({ hubEvents: bus })
    mailbox.updateViewport({
      schemaVersion: 1,
      ok: true,
      capturedAt: Date.now(),
      surface: { tabId: 'omnimux-assets:library', panelOpen: true },
    })

    mountWorkbenchTools(ctx, {
      mailbox,
      jsonOut: (res) => res,
    })

    assert.ok(tools.has('workbench_get_active_view'))
    assert.ok(tools.has('workbench_open_tab'))

    const getTool = tools.get('workbench_get_active_view')
    const viewRes = await getTool.execute({})
    assert.equal(viewRes.ok, true)
    assert.equal(viewRes.stale, false)
    assert.equal(viewRes.uiContext.surface.tabId, 'omnimux-assets:library')
  })

  it('workbench_open_tab respects panel-collapsed anti-annoyance guard', async () => {
    const tools = new Map()
    const ctx = { tools: { register: (t) => tools.set(t.name, t) } }
    const bus = createHubEventBus()
    const mailbox = createWorkbenchMailbox({ hubEvents: bus })

    mailbox.updateViewport({
      schemaVersion: 1,
      ok: true,
      capturedAt: Date.now(),
      surface: { tabId: 'omnimux-assets:library', panelOpen: false },
    })

    mountWorkbenchTools(ctx, { mailbox, jsonOut: (r) => r })
    const openTool = tools.get('workbench_open_tab')

    const res = await openTool.execute({
      tabId: 'omnimux-workflow:canvas',
      reason: '需要切换至创作画布查看效果',
    })

    assert.equal(res.ok, true)
    assert.equal(res.applied, false)
    assert.equal(res.code, 'panel-collapsed')
  })

  it('workbench_open_tab returns already-active when opening same active tab', async () => {
    const tools = new Map()
    const ctx = { tools: { register: (t) => tools.set(t.name, t) } }
    const bus = createHubEventBus()
    const mailbox = createWorkbenchMailbox({ hubEvents: bus })

    mailbox.updateViewport({
      schemaVersion: 1,
      ok: true,
      capturedAt: Date.now(),
      surface: { tabId: 'omnimux-assets:library', panelOpen: true },
    })

    mountWorkbenchTools(ctx, { mailbox, jsonOut: (r) => r })
    const openTool = tools.get('workbench_open_tab')

    const res = await openTool.execute({
      tabId: 'omnimux-assets:library',
      reason: '再次聚焦资产库',
    })

    assert.equal(res.ok, true)
    assert.equal(res.applied, true)
    assert.equal(res.code, 'already-active')
  })
})
