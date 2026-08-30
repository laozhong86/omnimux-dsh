import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { authGuard, whenAuthReady } from './api.js'

/** Small stub of the hub's `window.__omnimuxAuth` gate. */
function fakeGate() {
  let ensureArgs = null
  return {
    api: {
      ensureLogin(opts) {
        ensureArgs = opts
        // Simulate the user signing in immediately.
        if (typeof opts.onSuccess === 'function') opts.onSuccess({ logged_in: true })
        return { ok: true }
      },
    },
    args: () => ensureArgs,
  }
}

/**
 * Replace `globalThis.window` for the duration of a test. If `run` returns a
 * promise (async body), the window stays set until it settles, then restores.
 * @param {object} win
 * @param {(restore: () => void) => any} run
 */
function withWindow(win, run) {
  const saved = globalThis.window
  globalThis.window = win
  let restored = false
  const restore = () => {
    if (restored) return
    restored = true
    globalThis.window = saved
  }
  const out = run(restore)
  if (out && typeof out.then === 'function') return out.finally(restore)
  restore()
  return out
}

/** Stub `setInterval`/`clearInterval` so `whenAuthReady`'s poll is driverable. */
function captureTimer() {
  const savedSet = globalThis.setInterval
  const savedClear = globalThis.clearInterval
  let cb = null
  let id = 0
  globalThis.setInterval = (fn) => { cb = fn; id += 1; return id }
  globalThis.clearInterval = () => { cb = null }
  return {
    restore() {
      globalThis.setInterval = savedSet
      globalThis.clearInterval = savedClear
    },
    tick() {
      if (cb) cb()
    },
  }
}

describe('accounts api authGuard', () => {
  it('passes through a non-401 result untouched', async () => {
    const fn = async () => ({ ok: true, status: 200, body: { accounts: [{ id: 1 }] } })
    assert.deepEqual(await authGuard(fn)(), { ok: true, status: 200, body: { accounts: [{ id: 1 }] } })
  })

  it('401 → ensureLogin → replays the original call once', async () => {
    const gate = fakeGate()
    const win = { __omnimuxAuth: gate.api }
    await withWindow(win, async (restore) => {
      try {
        let calls = 0
        const fn = async () => {
          calls += 1
          return calls === 1
            ? { ok: false, status: 401, body: { error: 'needs-omnimux' } }
            : { ok: true, status: 200, body: { accounts: [{ id: 1 }] } }
        }
        const result = await authGuard(fn)()
        assert.equal(calls, 2, 'the original call is replayed once')
        assert.deepEqual(result, { ok: true, status: 200, body: { accounts: [{ id: 1 }] } })
        assert.equal(gate.args() !== null, true)
        assert.equal(gate.args()?.kind, 'write')
      } finally {
        restore()
      }
    })
  })

  it('cancel → returns the original 401 without replaying', async () => {
    const win = {
      __omnimuxAuth: {
        ensureLogin(opts) {
          opts.onCancel('cancelled')
        },
      },
    }
    await withWindow(win, async (restore) => {
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
        restore()
      }
    })
  })

  it('does not throw when the gate global is absent', async () => {
    await withWindow({}, async (restore) => {
      try {
        const fn = async () => ({ ok: false, status: 401, body: { error: 'needs-omnimux' } })
        const result = await authGuard(fn)()
        assert.equal(result.status, 401)
      } finally {
        restore()
      }
    })
  })
})

describe('accounts api whenAuthReady', () => {
  it('does nothing without a window global', () => {
    const saved = globalThis.window
    delete globalThis.window
    try {
      const dispose = whenAuthReady(() => {})
      assert.equal(typeof dispose, 'function')
    } finally {
      globalThis.window = saved
    }
  })

  it('calls cb once the hub global becomes ready', () => {
    const timer = captureTimer()
    const win = {}
    const saved = globalThis.window
    globalThis.window = win
    try {
      let called = 0
      const dispose = whenAuthReady((api) => {
        called += 1
        assert.equal(api.marker, 'A')
      })
      assert.equal(called, 0, 'no cb before the hub global is ready')
      // Make the hub global ready, then fire the poll once.
      win.__omnimuxAuth = { ensureLogin: () => {}, marker: 'A' }
      timer.tick()
      assert.equal(called, 1)
      timer.tick()
      assert.equal(called, 1, 'cb runs exactly once even if the poll keeps firing')
      dispose()
    } finally {
      globalThis.window = saved
      timer.restore()
    }
  })

  it('calls cb immediately when the hub global is already ready', () => {
    const win = { __omnimuxAuth: { ensureLogin: () => {}, marker: 'ready' } }
    const saved = globalThis.window
    globalThis.window = win
    try {
      let called = 0
      const dispose = whenAuthReady((api) => {
        called += 1
        assert.equal(api.marker, 'ready')
      })
      assert.equal(called, 1, 'cb fires on the first synchronous attempt')
      dispose()
    } finally {
      globalThis.window = saved
    }
  })

  it('disposer stops further polling', () => {
    const timer = captureTimer()
    const win = {}
    const saved = globalThis.window
    globalThis.window = win
    try {
      let called = 0
      const dispose = whenAuthReady(() => { called += 1 })
      assert.equal(called, 0)
      dispose()
      win.__omnimuxAuth = { ensureLogin: () => {} }
      timer.tick()
      assert.equal(called, 0, 'disposed watcher must not fire')
    } finally {
      globalThis.window = saved
      timer.restore()
    }
  })
})
