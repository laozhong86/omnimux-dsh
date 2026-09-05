import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { disconnectHubAccount, errorText } from './api.js'

describe('errorText (UI 同时露码与 message)', () => {
  it('prefers message and prefixes the error code when they differ', () => {
    assert.equal(
      errorText({ error: 'hub-tool-error', message: 'tool omnimux_accounts_list threw: boom' }, 502),
      'hub-tool-error: tool omnimux_accounts_list threw: boom',
    )
  })

  it('does not duplicate when message equals the code', () => {
    assert.equal(errorText({ error: 'not-local', message: 'not-local' }), 'not-local')
  })

  it('falls back to HTTP status when the body has neither field', () => {
    assert.equal(errorText({}, 500), 'HTTP 500')
  })
})

describe('disconnectHubAccount', () => {
  it('sends a same-origin DELETE for the exact encoded account id', async () => {
    const originalFetch = globalThis.fetch
    /** @type {{ path?: string, init?: RequestInit }} */
    const observed = {}
    globalThis.fetch = async (path, init) => {
      observed.path = String(path)
      observed.init = init
      return new Response(JSON.stringify({ ok: true }), { status: 200 })
    }
    try {
      const result = await disconnectHubAccount('same/name?two')
      assert.equal(result.ok, true)
      assert.equal(observed.path, '/omnimux/accounts/same%2Fname%3Ftwo')
      assert.equal(observed.init?.method, 'DELETE')
      assert.equal(observed.init?.body, undefined)
    } finally {
      globalThis.fetch = originalFetch
    }
  })

  for (const invalidId of [undefined, null, 7, {}, '', '   ']) {
    it(`rejects ${String(invalidId)} without calling fetch`, async () => {
      const originalFetch = globalThis.fetch
      let fetchCalls = 0
      globalThis.fetch = async () => {
        fetchCalls += 1
        throw new Error('fetch must not run for an invalid account id')
      }
      try {
        const result = await disconnectHubAccount(invalidId)
        assert.deepEqual(result, { ok: false, status: 400, body: { error: 'id is required' } })
        assert.equal(fetchCalls, 0)
      } finally {
        globalThis.fetch = originalFetch
      }
    })
  }
})
