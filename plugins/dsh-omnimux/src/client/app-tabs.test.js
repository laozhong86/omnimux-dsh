import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { placeTabsContainer, tabRowModel } from './app-tabs.js'
import { TABS_CHANGED_EVENT } from './open-app-flow.js'

describe('tabRowModel', () => {
  it('maps view rows to render models', () => {
    const rows = tabRowModel({
      schema: 1,
      tabs: [
        { id: 'accounts', title: '账号', pinned: true, lastOpenedAt: '2026-08-20T07:00:00Z' },
        { id: 'other-app', title: '其他', pinned: false, lastOpenedAt: '2026-08-19T07:00:00Z' },
      ],
    })
    assert.deepEqual(rows, [
      { id: 'accounts', title: '账号', pinned: true, lastOpenedAt: '2026-08-20T07:00:00Z' },
      { id: 'other-app', title: '其他', pinned: false, lastOpenedAt: '2026-08-19T07:00:00Z' },
    ])
  })

  it('defaults bad rows and drops rows without an id', () => {
    const rows = tabRowModel({
      tabs: [
        null,
        'not-an-object',
        { pinned: 'yes' },
        { id: 'ghost-app', title: 42, pinned: true },
      ],
    })
    assert.deepEqual(rows, [
      { id: 'ghost-app', title: 'ghost-app', pinned: true, lastOpenedAt: '' },
    ])
  })

  it('treats missing or malformed views as empty', () => {
    assert.deepEqual(tabRowModel(null), [])
    assert.deepEqual(tabRowModel(undefined), [])
    assert.deepEqual(tabRowModel({}), [])
    assert.deepEqual(tabRowModel({ tabs: 'nope' }), [])
    assert.deepEqual(tabRowModel(42), [])
  })
})

describe('TABS_CHANGED_EVENT', () => {
  it('uses the contract literal', () => {
    assert.equal(TABS_CHANGED_EVENT, 'dsh-omnimux-app-tabs-changed')
  })
})

describe('placeTabsContainer', () => {
  function fixture(next) {
    const calls = []
    const parent = {
      insertBefore(...args) {
        calls.push(args)
      },
    }
    const container = { marker: 'container' }
    const entry = { parentElement: parent, nextElementSibling: next }
    return { calls, container, entry, parent }
  }

  it('inserts the container right after the apps entry', () => {
    const next = { marker: 'taskboard' }
    const { calls, container, entry } = fixture(next)
    assert.equal(placeTabsContainer(entry, container), true)
    assert.equal(calls.length, 1)
    assert.equal(calls[0][0], container)
    assert.equal(calls[0][1], next)
  })

  it('is a no-op when the container already follows the entry', () => {
    const calls = []
    const parent = { insertBefore(...args) { calls.push(args) } }
    const container = { marker: 'container' }
    const entry = { parentElement: parent, nextElementSibling: container }
    assert.equal(placeTabsContainer(entry, container), true)
    assert.equal(calls.length, 0)
  })

  it('inserts before null when the entry is last', () => {
    const { calls, container, entry } = fixture(null)
    assert.equal(placeTabsContainer(entry, container), true)
    assert.deepEqual(calls, [[container, null]])
  })

  it('refuses entries without a parent', () => {
    const container = { marker: 'container' }
    assert.equal(placeTabsContainer({ parentElement: null, nextElementSibling: null }, container), false)
    assert.equal(placeTabsContainer(null, container), false)
    assert.equal(placeTabsContainer(undefined, container), false)
  })
})
