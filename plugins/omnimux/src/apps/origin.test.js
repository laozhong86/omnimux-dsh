import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { assertLocalWrite } from './origin.js'

describe('assertLocalWrite', () => {
  it('allows same-machine origin and missing origin', () => {
    assert.doesNotThrow(() => assertLocalWrite({}))
    assert.doesNotThrow(() => assertLocalWrite({ origin: 'http://127.0.0.1:8787' }))
    assert.doesNotThrow(() => assertLocalWrite({ origin: 'http://localhost:63805' }))
  })

  it('refuses a foreign site origin', () => {
    assert.throws(() => assertLocalWrite({ origin: 'https://evil.example' }), /cross-origin/)
    assert.throws(() => assertLocalWrite({ secFetchSite: 'cross-site' }), /cross-origin/)
  })
})
