import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { afterEach, describe, it } from 'node:test'
import {
  consumeSessionPrefill,
  getPendingSessionPrefill,
  queueSessionPrefill,
  resetSessionPrefill,
  subscribeSessionPrefill,
} from './session-prefill.js'

afterEach(() => resetSessionPrefill())

describe('session-scoped replication prefill', () => {
  it('registers in the official input dock, which remains mounted for a blank-session Hero', () => {
    const source = readFileSync(new URL('./index.js', import.meta.url), 'utf8')
    assert.match(source, /SESSION_PREFILL_SLOT = 'conversation\.input\.dock'/)
    assert.match(source, /ctx\.slots\.inject\(SESSION_PREFILL_SLOT,/)
    assert.doesNotMatch(source, /SESSION_PREFILL_SLOT = 'conversation\.composer\.dock'/)
  })

  it('wires queued intents into the mounted official composer consumer', () => {
    const source = readFileSync(new URL('./index.js', import.meta.url), 'utf8')
    assert.match(
      source,
      /const intent = useSyncExternalStore\(\s*subscribeSessionPrefill,\s*getPendingSessionPrefill,/s,
    )
  })

  it('writes one exact prompt through target inputActions only', async () => {
    const prompt = '/video-deconstruct\n\n完整正文'
    const completion = queueSessionPrefill({ targetSessionId: 'new-session', prompt })
    const writes = []

    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'old-session',
      draft: '',
      inputActions: { setDraft(next) { writes.push(next) } },
    }), 'waiting')
    assert.deepEqual(writes, [])

    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'new-session',
      draft: '',
      inputActions: { setDraft(next) { writes.push(next) } },
    }), 'consumed')
    assert.deepEqual(await completion, { ok: true, via: 'input-actions' })
    assert.deepEqual(writes, [prompt])
    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'new-session', draft: '', inputActions: { setDraft() { writes.push('again') } },
    }), 'waiting')
    assert.deepEqual(writes, [prompt])
  })

  it('protects an existing target draft without attaching replacement text', async () => {
    const completion = queueSessionPrefill({ targetSessionId: 'blank-reused', prompt: '/video-deconstruct\n\n正文' })
    const writes = []
    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'blank-reused',
      draft: '用户尚未发送的草稿',
      inputActions: { setDraft(next) { writes.push(next) } },
    }), 'protected')
    assert.deepEqual(await completion, { ok: false, error: 'draft-protected' })
    assert.deepEqual(writes, [])
  })

  it('does not let a delayed old composer consume a newer target intent', async () => {
    const completion = queueSessionPrefill({ targetSessionId: 'new-session', prompt: '正文' })
    const writes = []
    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'old-session', draft: '', inputActions: { setDraft(next) { writes.push(next) } },
    }), 'waiting')
    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'new-session', draft: '', inputActions: { setDraft(next) { writes.push(next) } },
    }), 'consumed')
    assert.deepEqual(await completion, { ok: true, via: 'input-actions' })
    assert.deepEqual(writes, ['正文'])
  })

  it('notifies an already-mounted consumer when an intent is queued', async () => {
    const writes = []
    const unsubscribe = subscribeSessionPrefill(() => {
      const intent = getPendingSessionPrefill()
      if (!intent) return
      consumeSessionPrefill(intent, {
        sessionId: 'mounted-target',
        draft: '',
        inputActions: { setDraft(next) { writes.push(next) } },
      })
    })

    const completion = queueSessionPrefill({ targetSessionId: 'mounted-target', prompt: '挂载后排队' })
    assert.deepEqual(await completion, { ok: true, via: 'input-actions' })
    assert.deepEqual(writes, ['挂载后排队'])
    unsubscribe()
  })

  it('expires an unconsumed intent and ignores its stale target afterward', async () => {
    const completion = queueSessionPrefill({
      targetSessionId: 'expired-target',
      prompt: '超时不应再写入',
      timeoutMs: 0,
    })
    const staleIntent = getPendingSessionPrefill()
    assert.deepEqual(await completion, { ok: false, error: 'composer-missing' })
    assert.equal(getPendingSessionPrefill(), null)

    const writes = []
    assert.equal(consumeSessionPrefill(staleIntent, {
      sessionId: 'expired-target',
      draft: '',
      inputActions: { setDraft(next) { writes.push(next) } },
    }), 'waiting')
    assert.deepEqual(writes, [])
  })

  it('fails safely when target inputActions are unavailable', async () => {
    const completion = queueSessionPrefill({ targetSessionId: 'new-session', prompt: '正文' })
    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'new-session', draft: '', inputActions: undefined,
    }), 'rejected')
    assert.deepEqual(await completion, { ok: false, error: 'composer-rejected' })
  })

  it('releases a busy CTA when the scoped prefill fails', async () => {
    const first = queueSessionPrefill({ targetSessionId: 'first', prompt: '一' })
    const second = queueSessionPrefill({ targetSessionId: 'second', prompt: '二' })
    assert.deepEqual(await first, { ok: false, error: 'composer-rejected' })
    assert.equal(consumeSessionPrefill(getPendingSessionPrefill(), {
      sessionId: 'second', draft: '', inputActions: { setDraft() {} },
    }), 'consumed')
    assert.deepEqual(await second, { ok: true, via: 'input-actions' })
  })
})
