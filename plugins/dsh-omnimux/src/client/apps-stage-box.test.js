import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { readConversationBox } from './conversation-box.js'

function fakeEl(rect, parent = null) {
  return {
    getBoundingClientRect: () => rect,
    parentElement: parent,
  }
}

describe('readConversationBox', () => {
  it('prefers the conversation scrollport so session header tabs stay free', () => {
    const scroll = fakeEl({ top: 80, left: 260, width: 800, height: 600 })
    const column = fakeEl({ top: 0, left: 260, width: 800, height: 680 })
    const previous = globalThis.document
    globalThis.document = {
      querySelector(sel) {
        if (sel === '[data-conversation-scroll]') return scroll
        if (sel === '[data-slot="conversation"]') return column
        return null
      },
    }
    try {
      assert.deepEqual(readConversationBox(), { top: 80, left: 260, width: 800, height: 600 })
    } finally {
      globalThis.document = previous
    }
  })
})
