import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  authGuard,
  hostMediaSrc,
  resolveCreatorProfileUrl,
  resolveTikTokEmbedUrl,
  whenAuthReady,
} from './api.js'

function fakeGate() {
  let ensureArgs = null
  return {
    api: {
      ensureLogin(opts) {
        ensureArgs = opts
        if (typeof opts.onSuccess === 'function') opts.onSuccess({ logged_in: true })
        return { ok: true }
      },
    },
    args: () => ensureArgs,
  }
}

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

describe('inspiration api authGuard', () => {
  it('passes through a non-401 result untouched', async () => {
    const fn = async () => ({ ok: true, status: 200, body: { success: true } })
    assert.deepEqual(await authGuard(fn)(), { ok: true, status: 200, body: { success: true } })
  })

  it('401 → ensureLogin → replays the original call once', async () => {
    const gate = fakeGate()
    await withWindow({ __omnimuxAuth: gate.api }, async () => {
      let calls = 0
      const fn = async () => {
        calls += 1
        return calls === 1
          ? { ok: false, status: 401, body: { error: 'needs-omnimux' } }
          : { ok: true, status: 200, body: { success: true } }
      }
      const result = await authGuard(fn)()
      assert.equal(calls, 2)
      assert.equal(result.status, 200)
      assert.equal(gate.args() !== null, true)
    })
  })

  it('does not throw when the gate global is absent', async () => {
    await withWindow({}, async () => {
      const fn = async () => ({ ok: false, status: 401, body: { error: 'needs-omnimux' } })
      const result = await authGuard(fn)()
      assert.equal(result.status, 401)
    })
  })
})

describe('inspiration api whenAuthReady', () => {
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
      assert.equal(called, 1)
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
      dispose()
      win.__omnimuxAuth = { ensureLogin: () => {} }
      timer.tick()
      assert.equal(called, 0)
    } finally {
      globalThis.window = saved
      timer.restore()
    }
  })
})

describe('hostMediaSrc', () => {
  it('rewrites gateway media paths onto Host', () => {
    assert.equal(hostMediaSrc('/api/inspiration/v1/media/covers/a.jpg'), '/omnimux/inspiration/media/covers/a.jpg')
    assert.equal(hostMediaSrc('/omnimux/inspiration/media/covers/a.jpg'), '/omnimux/inspiration/media/covers/a.jpg')
    assert.equal(hostMediaSrc('https://cdn.example/a.jpg'), 'https://cdn.example/a.jpg')
    assert.equal(hostMediaSrc(''), '')
  })
})

describe('resolveCreatorProfileUrl', () => {
  it('resolves explicit profile_url or url on creator object', () => {
    assert.equal(resolveCreatorProfileUrl({ profile_url: 'https://tiktok.com/@alex' }), 'https://tiktok.com/@alex')
    assert.equal(resolveCreatorProfileUrl({ url: 'https://instagram.com/alex' }), 'https://instagram.com/alex')
  })

  it('builds profile URL for TikTok by default or from sourceUrl', () => {
    assert.equal(resolveCreatorProfileUrl({ handle: 'luckylynndee' }), 'https://www.tiktok.com/@luckylynndee')
    assert.equal(resolveCreatorProfileUrl({ handle: '@shi.learn' }), 'https://www.tiktok.com/@shi.learn')
  })

  it('builds platform-specific profile URL for Instagram and YouTube', () => {
    assert.equal(resolveCreatorProfileUrl({ handle: 'designer' }, 'https://instagram.com/reel/123'), 'https://www.instagram.com/designer')
    assert.equal(resolveCreatorProfileUrl({ handle: 'tech_channel' }, 'https://youtube.com/watch?v=123'), 'https://www.youtube.com/@tech_channel')
  })

  it('falls back to source URL @handle when creator handle is generic', () => {
    assert.equal(resolveCreatorProfileUrl({ handle: 'creator' }, 'https://www.tiktok.com/@mariaqvcpb9/video/123'), 'https://www.tiktok.com/@mariaqvcpb9')
  })
})
