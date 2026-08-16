import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { pickPublic } from './api.js'

describe('client auth payload filter', () => {
  it('keeps public fields and drops tokens', () => {
    const picked = pickPublic({
      logged_in: true,
      username: 'ada',
      access_token: 'pat-nope',
      email: 'x@y.z',
    })
    assert.equal(picked.logged_in, true)
    assert.equal(picked.username, 'ada')
    assert.equal('access_token' in picked, false)
    assert.equal('email' in picked, false)
  })
})
