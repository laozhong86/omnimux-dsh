import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createWorkbenchMailbox } from './mailbox.js'
import { createHubEventBus } from '../events/hub-event-bus.js'

describe('WorkbenchMailbox', () => {
  it('stores viewport and flags stale when capturedAt is old', () => {
    const mailbox = createWorkbenchMailbox()
    const now = Date.now()
    const freshRes = mailbox.updateViewport({
      schemaVersion: 1,
      ok: true,
      capturedAt: now,
      surface: { tabId: 'omnimux-assets:library', panelOpen: true },
    })
    assert.equal(freshRes.ok, true)
    const view1 = mailbox.getActiveView()
    assert.equal(view1.ok, true)
    assert.equal(view1.stale, false)
    assert.equal(view1.uiContext.surface.tabId, 'omnimux-assets:library')

    // Stale check
    mailbox.updateViewport({
      schemaVersion: 1,
      ok: true,
      capturedAt: now - 4000,
      surface: { tabId: 'omnimux-assets:library', panelOpen: true },
    })
    const view2 = mailbox.getActiveView()
    assert.equal(view2.stale, true)
  })

  it('handles RPC roundtrip with ack', async () => {
    const bus = createHubEventBus()
    const mailbox = createWorkbenchMailbox({ hubEvents: bus, rpcTimeoutMs: 1000 })

    let capturedEvent = null
    bus.subscribe((ev) => {
      if (ev.type === 'omnimux:workbench:rpc') {
        capturedEvent = ev
      }
    })

    const rpcPromise = mailbox.sendRpc({
      requestId: 'req_123',
      tabId: 'omnimux-assets:library',
      reason: '测试切页',
    })

    assert.ok(capturedEvent)
    assert.equal(capturedEvent.payload.requestId, 'req_123')

    // Simulate browser sending ack
    const ackRes = mailbox.handleRpcAck({
      requestId: 'req_123',
      ok: true,
      applied: true,
      code: 'opened',
      tabId: 'omnimux-assets:library',
    })
    assert.equal(ackRes.ok, true)

    const result = await rpcPromise
    assert.equal(result.ok, true)
    assert.equal(result.applied, true)
    assert.equal(result.code, 'opened')
  })

  it('timeouts RPC when ack does not arrive', async () => {
    const bus = createHubEventBus()
    const mailbox = createWorkbenchMailbox({ hubEvents: bus, rpcTimeoutMs: 50 })

    const result = await mailbox.sendRpc({
      requestId: 'req_timeout',
      tabId: 'omnimux-clip:studio',
      reason: '测试超时',
    })

    assert.equal(result.ok, true)
    assert.equal(result.applied, false)
    assert.equal(result.code, 'rpc-timeout')
  })
})
