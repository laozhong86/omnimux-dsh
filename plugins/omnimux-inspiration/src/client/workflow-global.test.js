import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  WORKFLOW_GLOBAL_KEY,
  isWorkflowGlobalReady,
  waitForWorkflowGlobal,
} from './workflow-global.js'

describe('isWorkflowGlobalReady', () => {
  it('requires version 1 and a function', () => {
    assert.equal(isWorkflowGlobalReady(null), false)
    assert.equal(isWorkflowGlobalReady({ version: 1 }), false)
    assert.equal(isWorkflowGlobalReady({ version: 2, startReplicationProject: () => {} }), false)
    assert.equal(isWorkflowGlobalReady({ version: 1, startReplicationProject: () => {} }), true)
  })
})

describe('waitForWorkflowGlobal', () => {
  it('returns the api as soon as it appears', async () => {
    const target = {}
    let clock = 0
    const api = { version: 1, startReplicationProject: async () => ({ ok: true }) }
    const result = await waitForWorkflowGlobal({
      getWindow: () => target,
      now: () => clock,
      timeoutMs: 4000,
      pollMs: 50,
      async sleep(ms) {
        clock += ms
        if (clock >= 100) target[WORKFLOW_GLOBAL_KEY] = api
      },
    })
    assert.equal(result, api)
  })

  it('returns null after the fake 4s timeout', async () => {
    let clock = 0
    const result = await waitForWorkflowGlobal({
      getWindow: () => ({}),
      now: () => clock,
      timeoutMs: 4000,
      pollMs: 50,
      async sleep(ms) { clock += ms },
    })
    assert.equal(result, null)
    assert.ok(clock >= 4000)
  })
})
