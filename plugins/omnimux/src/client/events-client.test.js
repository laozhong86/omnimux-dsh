import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createEventsClient } from './events-client.js'

describe('EventsClient', () => {
  it('dispatches RPC and sends ack', async () => {
    let ackPayload = null
    let openedTab = null

    const fakeFetch = async (url, opts) => {
      if (url.includes('/rpc/ack')) {
        ackPayload = JSON.parse(opts.body)
      }
      return { ok: true }
    }

    const fakeWorkbench = {
      open: async ({ tabId }) => {
        openedTab = tabId
        return true
      },
      getUiContext: () => ({ schemaVersion: 1, ok: true }),
    }

    const client = createEventsClient({
      fetch: fakeFetch,
      getWorkbench: () => fakeWorkbench,
    })

    // Simulate RPC event arriving
    await client.notifyMessageForTests({
      type: 'omnimux:workbench:rpc',
      payload: {
        requestId: 'req_abc',
        tabId: 'omnimux-assets:library',
      },
    })

    assert.equal(openedTab, 'omnimux-assets:library')
    assert.ok(ackPayload)
    assert.equal(ackPayload.requestId, 'req_abc')
    assert.equal(ackPayload.ok, true)
    assert.equal(ackPayload.applied, true)
    assert.equal(ackPayload.code, 'opened')
    assert.equal(ackPayload.tabId, 'omnimux-assets:library')
  })

  it('notifies subscribers on specific and wildcard events', () => {
    const client = createEventsClient()
    const received = []

    client.subscribe('omnimux:assets:changed', (ev) => received.push(ev.type))
    client.subscribe('*', (ev) => received.push(`all:${ev.type}`))

    client.notifyMessageForTests({
      type: 'omnimux:assets:changed',
      payload: { lrev: 1 },
    })

    assert.deepEqual(received, ['omnimux:assets:changed', 'all:omnimux:assets:changed'])
  })
})
