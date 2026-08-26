import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { authGuard, NEEDS_AUTH_CODE, pickAuthError } from './api.js'

describe('pickAuthError', () => {
  it('recognises the needs-omnimux error code', () => {
    assert.equal(pickAuthError({ ok: false, status: 401, body: { error: 'needs-omnimux' } }), NEEDS_AUTH_CODE)
  })

  it('recognises a bare 401 (Host routes that message the code differently)', () => {
    assert.equal(pickAuthError({ ok: false, status: 401, body: { error: 'sign in to OmniMux' } }), NEEDS_AUTH_CODE)
    assert.equal(pickAuthError({ ok: false, status: 401, body: {} }), NEEDS_AUTH_CODE)
  })

  it('returns null for success and non-auth failures', () => {
    assert.equal(pickAuthError({ ok: true, status: 200, body: { logged_in: true } }), null)
    assert.equal(pickAuthError({ ok: false, status: 500, body: { error: 'boom' } }), null)
    assert.equal(pickAuthError(null), null)
    assert.equal(pickAuthError(undefined), null)
  })
})

describe('authGuard', () => {
  it('passes through a non-auth result untouched', async () => {
    const fn = async () => ({ ok: true, status: 200, body: { logged_in: true } })
    const guarded = authGuard(fn)
    assert.deepEqual(await guarded(), { ok: true, status: 200, body: { logged_in: true } })
  })

  it('replays the original call once after a 401 via the unified gate', async () => {
    let calls = 0
    const previousWindow = globalThis.window
    let ensureArgs = null
    globalThis.window = {
      __omnimuxAuth: {
        ensureLogin(opts) {
          ensureArgs = opts
          // Simulate the user signing in.
          opts.onSuccess({ logged_in: true, username: 'ada' })
        },
      },
    }
    try {
      const fn = async () => {
        calls += 1
        return calls === 1
          ? { ok: false, status: 401, body: { error: 'needs-omnimux' } }
          : { ok: true, status: 200, body: { accounts: [{ id: 1 }] } }
      }
      const guarded = authGuard(fn)
      const result = await guarded()
      assert.equal(calls, 2, 'the original call is replayed once')
      assert.deepEqual(result, { ok: true, status: 200, body: { accounts: [{ id: 1 }] } })
      assert.equal(ensureArgs !== null, true)
    } finally {
      globalThis.window = previousWindow
    }
  })

  it('returns the original result when the user cancels (no replay)', async () => {
    const previousWindow = globalThis.window
    globalThis.window = {
      __omnimuxAuth: {
        ensureLogin(opts) {
          opts.onCancel('cancelled')
        },
      },
    }
    try {
      let calls = 0
      const fn = async () => {
        calls += 1
        return { ok: false, status: 401, body: { error: 'needs-omnimux' } }
      }
      const result = await authGuard(fn)()
      assert.equal(calls, 1)
      assert.equal(result.status, 401)
    } finally {
      globalThis.window = previousWindow
    }
  })

  it('does not throw when the gate global is absent', async () => {
    const previousWindow = globalThis.window
    globalThis.window = {} // no __omnimuxAuth
    try {
      const fn = async () => ({ ok: false, status: 401, body: { error: 'needs-omnimux' } })
      const result = await authGuard(fn)()
      assert.equal(result.status, 401)
    } finally {
      globalThis.window = previousWindow
    }
  })
})
