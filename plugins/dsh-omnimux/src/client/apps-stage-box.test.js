import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { readConversationBox } from './conversation-box.js'

function fakeEl(rect, parent = null) {
  return {
    getBoundingClientRect: () => rect,
    parentElement: parent,
  }
}

/**
 * @param {Record<string, unknown>} nodes
 */
function stubDocument(nodes) {
  const previous = globalThis.document
  globalThis.document = {
    querySelector(sel) {
      return nodes[sel] ?? null
    },
  }
  return () => {
    globalThis.document = previous
  }
}

describe('readConversationBox', () => {
  it('covers the whole conversation column, session header included', () => {
    const scroll = fakeEl({ top: 80, left: 260, width: 800, height: 600 })
    const column = fakeEl({ top: 0, left: 260, width: 800, height: 680 })
    const restore = stubDocument({
      '[data-conversation-scroll]': scroll,
      '[data-slot="conversation"]': column,
    })
    try {
      // First-level product pages are not session views: the box must span
      // the whole conversation column, not only the scrollport.
      assert.deepEqual(readConversationBox(), { top: 0, left: 260, width: 800, height: 680 })
    } finally {
      restore()
    }
  })

  it('walks up to a sizable ancestor when the conversation node is flat', () => {
    const ancestor = fakeEl({ top: 0, left: 200, width: 900, height: 700 })
    const column = fakeEl({ top: 0, left: 260, width: 0, height: 0 }, ancestor)
    const restore = stubDocument({ '[data-slot="conversation"]': column })
    try {
      assert.deepEqual(readConversationBox(), { top: 0, left: 200, width: 900, height: 700 })
    } finally {
      restore()
    }
  })

  it('falls back to the scrollport when no conversation column is sizable', () => {
    const scroll = fakeEl({ top: 80, left: 260, width: 800, height: 600 })
    const column = fakeEl({ top: 0, left: 260, width: 0, height: 0 })
    const restore = stubDocument({
      '[data-conversation-scroll]': scroll,
      '[data-slot="conversation"]': column,
    })
    try {
      assert.deepEqual(readConversationBox(), { top: 80, left: 260, width: 800, height: 600 })
    } finally {
      restore()
    }
  })
})
