import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { afterEach, describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { hasAnySession, isBlankSession } from './is-blank-session.js'

const here = dirname(fileURLToPath(import.meta.url))
const source = readFileSync(join(here, 'is-blank-session.js'), 'utf8')

afterEach(() => {
  if (typeof globalThis.window !== 'undefined') {
    delete globalThis.window.__omnimuxAttachments
  }
})

function fakeDoc(nodes) {
  return {
    querySelector(selector) {
      return Object.prototype.hasOwnProperty.call(nodes, selector) ? nodes[selector] : null
    },
  }
}

describe('is-blank-session.js isolation', () => {
  it('does not import market or workflow packages', () => {
    assert.doesNotMatch(source, /omnimux-market/)
    assert.doesNotMatch(source, /omnimux-workflow/)
    assert.doesNotMatch(source, /from ['"].*composer/)
  })
})

describe('isBlankSession', () => {
  it('returns true when there is no document', () => {
    assert.equal(isBlankSession(undefined), true)
    assert.equal(isBlankSession(null), true)
  })

  it('returns true when the session header matches 新会话 / New session / Untitled', () => {
    assert.equal(isBlankSession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: '新会话' },
      '[data-conversation-scroll]': { textContent: 'x'.repeat(80) },
    })), true)
    assert.equal(isBlankSession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: 'New session' },
    })), true)
    assert.equal(isBlankSession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: 'Untitled draft' },
    })), true)
  })

  it('returns true when the conversation scroll region is missing', () => {
    assert.equal(isBlankSession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: '夏日护肤' },
    })), true)
  })

  it('returns true when the scroll region is shorter than 40 chars', () => {
    assert.equal(isBlankSession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: '夏日护肤' },
      '[data-conversation-scroll]': { textContent: '  short  ' },
    })), true)
  })

  it('returns false when the title is not a blank pattern and the scroll region has 40+ chars', () => {
    assert.equal(isBlankSession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: '夏日护肤' },
      '[data-conversation-scroll]': { textContent: 'x'.repeat(40) },
    })), false)
  })
})

describe('hasAnySession', () => {
  it('is false with no header, no treeitem, and default/empty active id', () => {
    const win = { __omnimuxAttachments: { getActiveSessionId: () => 'default' } }
    const doc = {
      querySelector() { return null },
      defaultView: win,
    }
    assert.equal(hasAnySession(doc), false)
  })

  it('is true when a conversation header exists', () => {
    assert.equal(hasAnySession(fakeDoc({
      '[data-slot="conversation.session.header"]': { textContent: '新会话' },
    })), true)
  })

  it('is true when a sidebar treeitem exists', () => {
    assert.equal(hasAnySession(fakeDoc({
      '[role="treeitem"]': { textContent: '夏日护肤' },
    })), true)
  })

  it('is true when getActiveSessionId is a real session id', () => {
    const win = { __omnimuxAttachments: { getActiveSessionId: () => 'sess-9' } }
    const doc = {
      querySelector() { return null },
      defaultView: win,
    }
    assert.equal(hasAnySession(doc), true)
  })
})
