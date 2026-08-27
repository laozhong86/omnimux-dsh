import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { en, zh } from '../locales.js'

describe('Workflow Projects Locales & i18n Dictionaries', () => {
  it('contains projects.all in both zh and en dictionaries', () => {
    assert.equal(zh['projects.all'], '全部')
    assert.equal(en['projects.all'], 'All')
  })

  it('ensures all projects.* keys exist in both zh and en dictionaries', () => {
    const zhKeys = Object.keys(zh).filter((k) => k.startsWith('projects.'))
    const enKeys = Object.keys(en).filter((k) => k.startsWith('projects.'))

    assert.deepEqual(zhKeys.sort(), enKeys.sort())

    for (const key of zhKeys) {
      assert.ok(zh[key] && typeof zh[key] === 'string', `zh missing valid string for ${key}`)
      assert.ok(en[key] && typeof en[key] === 'string', `en missing valid string for ${key}`)
    }
  })
})
