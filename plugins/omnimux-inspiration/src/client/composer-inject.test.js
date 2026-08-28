import assert from 'node:assert/strict'
import { EventEmitter } from 'node:events'
import { describe, it } from 'node:test'
import {
  findComposer,
  findSendButton,
  setComposerValue,
  prefillReplicationPrompt,
} from './composer-inject.js'

function fakeField(initial = '') {
  const emitter = new EventEmitter()
  const field = {
    value: initial,
    selectionStart: initial.length,
    selectionEnd: initial.length,
    setSelectionRange(start, end) {
      this.selectionStart = start
      this.selectionEnd = end
    },
    focus() { this.focused = true },
    dispatchEvent(event) {
      emitter.emit(event?.type || 'input', event)
      this.lastEvent = event
      return true
    },
    on(type, fn) { emitter.on(type, fn) },
  }
  return field
}

class FakeInputEvent {
  constructor(type, init = {}) {
    this.type = type
    this.bubbles = Boolean(init.bubbles)
    this.inputType = init.inputType
    this.data = init.data
  }
}

describe('setComposerValue', () => {
  it('replaces the whole value and dispatches input', () => {
    const field = fakeField('old')
    const events = []
    field.on('input', (e) => events.push(e))
    const ok = setComposerValue(field, 'hello inspiration_id: x', { InputEvent: FakeInputEvent })
    assert.equal(ok, true)
    assert.equal(field.value, 'hello inspiration_id: x')
    assert.equal(events.length, 1)
    assert.equal(events[0].inputType, 'insertText')
    assert.equal(field.focused, true)
  })

  it('uses the prototype setter when present (React 18 path)', () => {
    const proto = {}
    const calls = []
    Object.defineProperty(proto, 'value', {
      set(next) { calls.push(next); this._value = next },
      get() { return this._value },
    })
    const field = Object.create(proto)
    field._value = ''
    field.setSelectionRange = () => {}
    field.dispatchEvent = () => true
    field.focus = () => {}
    setComposerValue(field, 'inspiration_id: z', { InputEvent: FakeInputEvent })
    assert.deepEqual(calls, ['inspiration_id: z'])
    assert.equal(field.value, 'inspiration_id: z')
  })
})

describe('findComposer / findSendButton', () => {
  it('uses the documented selectors', () => {
    const textarea = { tag: 'textarea' }
    const send = { tag: 'button', disabled: false }
    const doc = {
      querySelector(sel) {
        if (sel.includes('[data-composer-card] textarea')) return textarea
        if (sel.includes('aria-label="发送消息"')) return send
        return null
      },
    }
    assert.equal(findComposer(doc), textarea)
    assert.equal(findSendButton(doc), send)
  })
})

describe('prefillReplicationPrompt', () => {
  it('writes, focuses, moves caret to the end, and never clicks send', async () => {
    const field = fakeField('')
    const clicks = []
    const send = { disabled: false, click() { clicks.push(1) } }
    const prompt = '/video-replication\n\n- inspiration_id: a'
    const result = await prefillReplicationPrompt(prompt, {
      document: {
        querySelector(sel) {
          if (sel.includes('textarea')) return field
          if (sel.includes('aria-label')) return send
          return null
        },
      },
      InputEvent: FakeInputEvent,
      timeoutMs: 10,
      pollMs: 1,
    })
    assert.deepEqual(result, { ok: true, via: 'prefill' })
    assert.equal(field.value, prompt)
    assert.match(field.value, /inspiration_id: a/)
    assert.equal(field.focused, true)
    assert.equal(field.selectionStart, prompt.length)
    assert.equal(field.selectionEnd, prompt.length)
    assert.deepEqual(clicks, [])
  })

  it('succeeds even when send is missing or disabled (no auto-submit)', async () => {
    const field = fakeField('')
    const prompt = '- inspiration_id: a'
    const clicks = []
    const result = await prefillReplicationPrompt(prompt, {
      document: {
        querySelector(sel) {
          if (sel.includes('textarea')) return field
          if (sel.includes('aria-label')) return { disabled: true, click() { clicks.push(1); throw new Error('clicked') } }
          return null
        },
      },
      InputEvent: FakeInputEvent,
      timeoutMs: 10,
    })
    assert.deepEqual(result, { ok: true, via: 'prefill' })
    assert.equal(field.value, prompt)
    assert.equal(field.focused, true)
    assert.deepEqual(clicks, [])
  })

  it('returns composer-missing when the field never appears', async () => {
    let clock = 0
    const result = await prefillReplicationPrompt('- inspiration_id: a', {
      document: { querySelector() { return null } },
      timeoutMs: 100,
      pollMs: 50,
      now: () => clock,
      async sleep(ms) { clock += ms },
    })
    assert.deepEqual(result, { ok: false, error: 'composer-missing' })
  })

  it('returns composer-rejected when the field drops inspiration_id', async () => {
    const field = fakeField('')
    field.focus = () => { field.focused = true }
    const result = await prefillReplicationPrompt('plain text without id', {
      document: {
        querySelector(sel) {
          if (sel.includes('textarea')) return field
          return null
        },
      },
      InputEvent: FakeInputEvent,
      timeoutMs: 10,
    })
    assert.deepEqual(result, { ok: false, error: 'composer-rejected' })
  })
})
