import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { isLocalRequest, registerWorkbenchHttpRoutes } from './http-routes.js'
import { createHubEventBus } from '../events/hub-event-bus.js'
import { createWorkbenchMailbox } from './mailbox.js'

describe('Workbench HTTP Routes', () => {
  it('isLocalRequest validates origin / referer / sec-fetch-site', () => {
    assert.equal(isLocalRequest({ headers: {} }), true)
    assert.equal(isLocalRequest({ headers: { origin: 'http://127.0.0.1:45120' } }), true)
    assert.equal(isLocalRequest({ headers: { origin: 'http://localhost:45120' } }), true)
    assert.equal(isLocalRequest({ headers: { origin: 'https://evil.com' } }), false)
    assert.equal(isLocalRequest({ headers: { 'sec-fetch-site': 'cross-site' } }), false)
  })

  it('routes register on fake webServer', () => {
    const routes = new Map()
    const fakeServer = {
      get: (path, handler) => routes.set(`GET ${path}`, handler),
      post: (path, handler) => routes.set(`POST ${path}`, handler),
    }

    const bus = createHubEventBus()
    const mailbox = createWorkbenchMailbox({ hubEvents: bus })

    registerWorkbenchHttpRoutes(fakeServer, { hubEvents: bus, mailbox })

    assert.ok(routes.has('GET /omnimux/events/stream'))
    assert.ok(routes.has('POST /omnimux/workbench/viewport'))
    assert.ok(routes.has('POST /omnimux/workbench/rpc/ack'))
  })
})
