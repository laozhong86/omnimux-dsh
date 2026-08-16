import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createAppsStore } from './apps-store.js'

describe('apps store', () => {
  it('toggles and notifies subscribers', () => {
    const store = createAppsStore()
    let ticks = 0
    const stop = store.subscribe(() => { ticks += 1 })
    assert.equal(store.getSnapshot(), false)
    store.toggle()
    assert.equal(store.getSnapshot(), true)
    store.set(true)
    assert.equal(ticks, 1)
    store.set(false)
    assert.equal(store.getSnapshot(), false)
    assert.equal(ticks, 2)
    stop()
    store.toggle()
    assert.equal(ticks, 2)
  })
})
