import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { attachComposerEnvelope, setComposerValue } from './composer-envelope.js'

describe('Composer Envelope', () => {
  it('setComposerValue sets value and triggers event', () => {
    let eventFired = false
    const fakeTextarea = {
      value: '',
      dispatchEvent: () => { eventFired = true },
    }

    setComposerValue(fakeTextarea, 'hello world')
    assert.equal(fakeTextarea.value, 'hello world')
    assert.equal(eventFired, true)
  })

  it('attachComposerEnvelope prefixes compact block', () => {
    const fakeTextarea = {
      value: '帮我生一张图',
      dispatchEvent: () => {},
    }

    const getUiContext = () => ({
      schemaVersion: 1,
      ok: true,
      surface: { tabId: 'omnimux-assets:library', panelOpen: true },
    })

    const formatBlock = () => '<ui_context schema="1">' + String.fromCharCode(10) + 'tab: omnimux-assets:library' + String.fromCharCode(10) + '</ui_context>'

    const attached = attachComposerEnvelope(fakeTextarea, getUiContext, formatBlock)
    assert.equal(attached, true)
    assert.ok(fakeTextarea.value.startsWith('<ui_context schema="1">'))
    assert.ok(fakeTextarea.value.includes('帮我生一张图'))

    // Second call does not duplicate
    const second = attachComposerEnvelope(fakeTextarea, getUiContext, formatBlock)
    assert.equal(second, false)
  })
})
