import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  authGuard,
  coverGlyph,
  extractTikTokVideoId,
  hostMediaSrc,
  isUsableCoverSize,
  pickCoverSrc,
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
      assert.equal(gate.args().forceVerify, true, '401 path must force-verify stale cache')
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

  it('prefixes a bare media key (detail envelope)', () => {
    assert.equal(hostMediaSrc('seed/cover-04.jpg'), '/omnimux/inspiration/media/seed/cover-04.jpg')
    assert.equal(hostMediaSrc('/seed/cover-04.jpg'), '/omnimux/inspiration/media/seed/cover-04.jpg')
  })

  it('rejects traversal', () => {
    assert.equal(hostMediaSrc('../etc/passwd'), '')
    assert.equal(hostMediaSrc('seed/../../x.jpg'), '')
  })
})

describe('pickCoverSrc', () => {
  it('prefers cover_key over cover_url', () => {
    assert.equal(
      pickCoverSrc({ cover_key: 'seed/cover-04.jpg', cover_url: '/api/inspiration/v1/media/covers/a.jpg' }),
      '/omnimux/inspiration/media/seed/cover-04.jpg',
    )
  })

  it('falls back to cover_url and treats missing as empty', () => {
    assert.equal(
      pickCoverSrc({ cover_url: '/api/inspiration/v1/media/covers/a.jpg' }),
      '/omnimux/inspiration/media/covers/a.jpg',
    )
    assert.equal(pickCoverSrc({ id: 1 }), '')
    assert.equal(pickCoverSrc(null), '')
  })
})

describe('isUsableCoverSize', () => {
  it('rejects 1×1 seed stubs and tiny thumbs', () => {
    assert.equal(isUsableCoverSize(1, 1), false)
    assert.equal(isUsableCoverSize(7, 120), false)
    assert.equal(isUsableCoverSize(320, 200), true)
  })
})

describe('coverGlyph', () => {
  it('takes the first trimmed character', () => {
    assert.equal(coverGlyph('好物开箱脚本模板：痛点三连'), '好')
    assert.equal(coverGlyph('  3 步'), '3')
    assert.equal(coverGlyph(''), '灵')
  })
})

describe('extractTikTokVideoId & resolveTikTokEmbedUrl', () => {
  it('extracts video ID from standard tiktok web URLs', () => {
    assert.equal(
      extractTikTokVideoId('https://www.tiktok.com/@futurecompanion/video/7637493208297131277?is_from_webapp=1'),
      '7637493208297131277',
    )
    assert.equal(
      extractTikTokVideoId('https://www.tiktok.com/@aniston3060/video/7581306324319767838'),
      '7581306324319767838',
    )
    assert.equal(
      resolveTikTokEmbedUrl('https://www.tiktok.com/@futurecompanion/video/7637493208297131277'),
      'https://www.tiktok.com/player/v1/7637493208297131277',
    )
    assert.equal(resolveTikTokEmbedUrl('7637493208297131277'), 'https://www.tiktok.com/player/v1/7637493208297131277')
    assert.equal(resolveTikTokEmbedUrl('https://example.com/other'), null)
    assert.equal(resolveTikTokEmbedUrl(null), null)
  })
})
