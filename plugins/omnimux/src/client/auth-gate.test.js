import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  AUTH_GLOBAL_KEY,
  MAX_INTENTS,
  cancel,
  ensureLogin,
  getSnapshot,
  installAuthGlobal,
  resetAuthGate,
  retry,
} from './auth-gate.js'

/**
 * A controllable fake device flow. `start()` drives the gate into `waiting`
 * synchronously; the test then drives the outcome by calling the captured
 * `onSuccess` / `onState`. No timers, no fetch, no `window`.
 */
function makeRunLogin() {
  let captured = null
  let count = 0
  const fn = (opts) => {
    count += 1
    captured = opts
    return {
      start() {
        captured.onState('starting')
        captured.onState('waiting', {
          flow_id: 'flow-1',
          user_code: 'ABCD',
          verification_url: 'https://verify.example/dev',
          interval: 5,
        })
      },
      stop() {},
      cancel() {},
    }
  }
  return { fn, captured: () => captured, count: () => count }
}

/** @returns {{ win: {}, gate: any, run: ReturnType<typeof makeRunLogin> }} */
function install({ loggedIn = false } = {}) {
  const win = {}
  const run = makeRunLogin()
  const getStatus = async () => ({ ok: true, status: 200, body: { logged_in: loggedIn, username: 'ada' } })
  installAuthGlobal(win, { getStatus, runLogin: run.fn })
  resetAuthGate()
  return { win, gate: win[AUTH_GLOBAL_KEY], run }
}

describe('auth-gate store', () => {
  it('installs window.__omnimuxAuth idempotently', () => {
    const win = {}
    const a = installAuthGlobal(win, { getStatus: async () => ({ status: 200, body: {} }), runLogin: makeRunLogin().fn })
    const b = installAuthGlobal(win)
    assert.equal(a, b)
    assert.equal(win[AUTH_GLOBAL_KEY], a)
    assert.equal(typeof a.ensureLogin, 'function')
    assert.equal(typeof a.cancel, 'function')
    assert.equal(typeof a.subscribe, 'function')
    assert.equal(typeof a.getSnapshot, 'function')
  })

  it('short path: already logged in → onSuccess immediately, gate stays closed', async () => {
    const { gate, run } = install({ loggedIn: true })
    let resolved = null
    await gate.ensureLogin({ reason: 'x', onSuccess: (p) => { resolved = p } })
    assert.equal(resolved?.username, 'ada')
    assert.equal(getSnapshot().phase, 'closed')
    assert.equal(run.captured(), null, 'no device flow was started')
  })

  it('not logged in → opens the marketing prompt (device flow waits for CTA)', async () => {
    const { gate, run } = install({ loggedIn: false })
    await gate.ensureLogin({ reason: 'x', onSuccess: () => {} })
    const state = getSnapshot()
    assert.equal(state.phase, 'prompt')
    assert.equal(state.reason, 'x')
    assert.equal(run.count(), 0, 'device flow must not start until the CTA')
  })

  it('CTA begin() starts the device handshake and reaches waiting', async () => {
    const { gate, run } = install({ loggedIn: false })
    await gate.ensureLogin({ reason: 'x', onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'prompt')
    gate.begin()
    const state = getSnapshot()
    assert.equal(state.phase, 'waiting')
    assert.equal(state.user_code, 'ABCD')
    assert.equal(state.verification_url, 'https://verify.example/dev')
    assert.equal(run.count(), 1)
  })

  it('single-gate: a second intent enqueues without re-opening the flow', async () => {
    const { gate, run } = install({ loggedIn: false })
    await gate.ensureLogin({ reason: 'a', onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'prompt')
    assert.equal(run.count(), 0)
    // Second call while the gate is open: only enqueue, no second start.
    await gate.ensureLogin({ reason: 'b', onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'prompt')
    assert.equal(run.count(), 0, 'the device flow must not start for a queued intent')
    gate.begin()
    assert.equal(getSnapshot().phase, 'waiting')
    assert.equal(run.count(), 1, 'the device flow must not restart for a queued intent')
  })

  it('poll success → resolveAll(profile) resumes every queued intent', async () => {
    const { gate, run } = install({ loggedIn: false })
    const seen = []
    await gate.ensureLogin({ reason: 'a', onSuccess: (p) => { seen.push({ kind: 'a', p }) } })
    await gate.ensureLogin({ reason: 'b', onSuccess: (p) => { seen.push({ kind: 'b', p }) } })
    gate.begin()
    run.captured().onSuccess({ logged_in: true, username: 'ada' })
    assert.deepEqual(seen, [
      { kind: 'a', p: { logged_in: true, username: 'ada' } },
      { kind: 'b', p: { logged_in: true, username: 'ada' } },
    ])
    assert.equal(getSnapshot().phase, 'closed')
  })

  it('cancel → every intent onCancel, gate closes', async () => {
    const { gate } = install({ loggedIn: false })
    const cancelled = []
    await gate.ensureLogin({ reason: 'a', onCancel: (r) => { cancelled.push(['a', r]) } })
    await gate.ensureLogin({ reason: 'b', onCancel: (r) => { cancelled.push(['b', r]) } })
    cancel('cancelled')
    assert.deepEqual(cancelled, [['a', 'cancelled'], ['b', 'cancelled']])
    assert.equal(getSnapshot().phase, 'closed')
  })

  it('denied → intents rejected, gate shows denied; retry re-opens the handshake', async () => {
    const { gate, run } = install({ loggedIn: false })
    const cancelled = []
    await gate.ensureLogin({ reason: 'a', onCancel: (r) => { cancelled.push(r) } })
    gate.begin()
    run.captured().onState('denied', { detail: 'nope' })
    assert.deepEqual(cancelled, ['denied'])
    assert.equal(getSnapshot().phase, 'denied')
    retry()
    assert.equal(getSnapshot().phase, 'waiting')
  })

  it('expired → intents rejected, gate shows expired', async () => {
    const { gate, run } = install({ loggedIn: false })
    const cancelled = []
    await gate.ensureLogin({ onCancel: (r) => { cancelled.push(r) } })
    gate.begin()
    run.captured().onState('expired', { detail: 'late' })
    assert.deepEqual(cancelled, ['expired'])
    assert.equal(getSnapshot().phase, 'expired')
  })

  it('status read failure is treated as needs-login (opens the gate)', async () => {
    const win = {}
    const run = makeRunLogin()
    installAuthGlobal(win, {
      getStatus: async () => { throw new Error('boom') },
      runLogin: run.fn,
    })
    resetAuthGate()
    await win[AUTH_GLOBAL_KEY].ensureLogin({ onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'prompt')
  })

  it('MAX_INTENTS overflow rejects only the 101st intent and keeps the queued 100', async () => {
    assert.equal(MAX_INTENTS, 100)
    const { gate, run } = install({ loggedIn: false })
    const resolved = []
    const cancelled = []
    for (let i = 0; i < MAX_INTENTS; i += 1) {
      await gate.ensureLogin({
        reason: `keep-${i}`,
        onSuccess: (profile) => { resolved.push(i) },
        onCancel: (reason) => { cancelled.push({ i, reason }) },
      })
    }
    assert.equal(getSnapshot().phase, 'prompt')

    let overflowCancel = 0
    await gate.ensureLogin({
      reason: 'overflow-101',
      onSuccess: () => { throw new Error('overflow intent must not resolve') },
      onCancel: (reason) => {
        overflowCancel += 1
        assert.equal(reason, 'overflow')
      },
    })
    assert.equal(overflowCancel, 1)
    assert.deepEqual(cancelled, [], 'queued intents must not be rejectAll-killed on overflow')
    assert.equal(getSnapshot().phase, 'prompt', 'gate stays on the marketing prompt')

    gate.begin()
    assert.equal(getSnapshot().phase, 'waiting')
    run.captured().onSuccess({ logged_in: true, username: 'ada' })
    assert.equal(resolved.length, MAX_INTENTS)
    assert.deepEqual(resolved, Array.from({ length: MAX_INTENTS }, (_, i) => i))
    assert.equal(getSnapshot().phase, 'closed')
    assert.equal(overflowCancel, 1)
  })

  it('MAX_INTENTS overflow still only rejects the new intent while waiting or error', async () => {
    const { gate, run } = install({ loggedIn: false })
    const resolved = []
    const cancelled = []
    for (let i = 0; i < MAX_INTENTS; i += 1) {
      await gate.ensureLogin({
        onSuccess: () => { resolved.push(i) },
        onCancel: (reason) => { cancelled.push(reason) },
      })
    }
    gate.begin()
    assert.equal(getSnapshot().phase, 'waiting')

    const waitingOverflow = []
    await gate.ensureLogin({
      onSuccess: () => { throw new Error('waiting overflow must not resolve') },
      onCancel: (reason) => { waitingOverflow.push(reason) },
    })
    assert.deepEqual(waitingOverflow, ['overflow'])
    assert.equal(getSnapshot().phase, 'waiting')
    assert.deepEqual(cancelled, [])

    run.captured().onState('error', { detail: 'net' })
    assert.equal(getSnapshot().phase, 'error')
    assert.equal(cancelled.length, MAX_INTENTS)
    assert.ok(cancelled.every((reason) => reason === 'error'))

    // After a terminal failure the queue is empty, so a new intent may enqueue
    // (and restart the handshake). Fill back to the cap, then overflow again.
    cancelled.length = 0
    const refill = []
    for (let i = 0; i < MAX_INTENTS; i += 1) {
      await gate.ensureLogin({
        onSuccess: () => { refill.push(i) },
        onCancel: (reason) => { cancelled.push(reason) },
      })
    }
    assert.equal(getSnapshot().phase, 'waiting')
    const errorOverflow = []
    await gate.ensureLogin({
      onSuccess: () => { throw new Error('error-phase overflow must not resolve') },
      onCancel: (reason) => { errorOverflow.push(reason) },
    })
    assert.deepEqual(errorOverflow, ['overflow'])
    assert.equal(getSnapshot().phase, 'waiting')
    run.captured().onSuccess({ logged_in: true, username: 'ada' })
    assert.equal(refill.length, MAX_INTENTS)
    assert.deepEqual(cancelled, [])
  })

  it('resetting clears queued intents and returns to closed', async () => {
    const { gate, run } = install({ loggedIn: false })
    await gate.ensureLogin({ onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'prompt')
    resetAuthGate()
    assert.equal(getSnapshot().phase, 'closed')
    assert.equal(run.captured(), null)
    // A reset gate should be able to reopen without stale intents.
    await gate.ensureLogin({ onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'prompt')
  })
})
