import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  AUTH_GLOBAL_KEY,
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

/**
 * @param {{
 *   loggedIn?: boolean,
 *   verifiedLoggedIn?: boolean,
 * }} [opts]
 * @returns {{ win: {}, gate: any, run: ReturnType<typeof makeRunLogin>, calls: () => boolean[] }}
 */
function install({ loggedIn = false, verifiedLoggedIn } = {}) {
  const win = {}
  const run = makeRunLogin()
  /** @type {boolean[]} */
  const verifyFlags = []
  const getStatus = async (verify = false) => {
    verifyFlags.push(verify === true)
    const live = verify === true && verifiedLoggedIn !== undefined ? verifiedLoggedIn : loggedIn
    return { ok: true, status: 200, body: { logged_in: live, username: 'ada', verified: verify ? live : null } }
  }
  installAuthGlobal(win, { getStatus, runLogin: run.fn })
  resetAuthGate()
  return { win, gate: win[AUTH_GLOBAL_KEY], run, calls: () => verifyFlags.slice() }
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
    const { gate, run, calls } = install({ loggedIn: true })
    let resolved = null
    await gate.ensureLogin({ reason: 'x', onSuccess: (p) => { resolved = p } })
    assert.equal(resolved?.username, 'ada')
    assert.equal(getSnapshot().phase, 'closed')
    assert.equal(run.captured(), null, 'no device flow was started')
    assert.deepEqual(calls(), [false], 'default path stays cached (no verify)')
  })

  it('forceVerify + stale cache → opens the gate even when cached logged_in', async () => {
    const { gate, run, calls } = install({ loggedIn: true, verifiedLoggedIn: false })
    let resolved = null
    await gate.ensureLogin({
      reason: 'stale-token',
      forceVerify: true,
      onSuccess: (p) => { resolved = p },
    })
    assert.equal(resolved, null, 'must not short-circuit on a stale cache')
    assert.equal(getSnapshot().phase, 'waiting')
    assert.equal(run.count(), 1, 'device flow must start when verify fails')
    assert.deepEqual(calls(), [true])
  })

  it('forceVerify + live session → short path without opening the gate', async () => {
    const { gate, run, calls } = install({ loggedIn: true, verifiedLoggedIn: true })
    let resolved = null
    await gate.ensureLogin({
      forceVerify: true,
      onSuccess: (p) => { resolved = p },
    })
    assert.equal(resolved?.username, 'ada')
    assert.equal(getSnapshot().phase, 'closed')
    assert.equal(run.captured(), null)
    assert.deepEqual(calls(), [true])
  })

  it('not logged in → opens the gate and reaches waiting', async () => {
    const { gate } = install({ loggedIn: false })
    await gate.ensureLogin({ reason: 'x', onSuccess: () => {} })
    const state = getSnapshot()
    assert.equal(state.phase, 'waiting')
    assert.equal(state.user_code, 'ABCD')
    assert.equal(state.verification_url, 'https://verify.example/dev')
  })

  it('single-gate: a second intent enqueues without re-opening the flow', async () => {
    const { gate, run } = install({ loggedIn: false })
    await gate.ensureLogin({ reason: 'a', onSuccess: () => {} })
    assert.equal(run.count(), 1)
    // Second call while the gate is open: only enqueue, no second start.
    await gate.ensureLogin({ reason: 'b', onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'waiting')
    assert.equal(run.count(), 1, 'the device flow must not restart for a queued intent')
  })

  it('poll success → resolveAll(profile) resumes every queued intent', async () => {
    const { gate, run } = install({ loggedIn: false })
    const seen = []
    await gate.ensureLogin({ reason: 'a', onSuccess: (p) => { seen.push({ kind: 'a', p }) } })
    await gate.ensureLogin({ reason: 'b', onSuccess: (p) => { seen.push({ kind: 'b', p }) } })
    run.captured().onSuccess({ logged_in: true, username: 'ada' })
    assert.deepEqual(seen, [
      { kind: 'a', p: { logged_in: true, username: 'ada' } },
      { kind: 'b', p: { logged_in: true, username: 'ada' } },
    ])
    assert.equal(getSnapshot().phase, 'closed')
  })

  it('cancel → every intent onCancel, gate closes', async () => {
    const { gate, run } = install({ loggedIn: false })
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
    assert.equal(getSnapshot().phase, 'waiting')
  })

  it('resetting clears queued intents and returns to closed', async () => {
    const { gate, run } = install({ loggedIn: false })
    await gate.ensureLogin({ onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'waiting')
    resetAuthGate()
    assert.equal(getSnapshot().phase, 'closed')
    assert.equal(run.captured().onSuccess !== undefined, true)
    // A reset gate should be able to reopen without stale intents.
    await gate.ensureLogin({ onSuccess: () => {} })
    assert.equal(getSnapshot().phase, 'waiting')
  })
})
