import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { errorText } from './api.js'

describe('errorText (UI 同时露码与 message)', () => {
  it('prefers message and prefixes the error code when they differ', () => {
    assert.equal(
      errorText({ error: 'hub-tool-error', message: 'tool omnimux_accounts_list threw: boom' }, 502),
      'hub-tool-error: tool omnimux_accounts_list threw: boom',
    )
  })

  it('does not duplicate when message equals the code', () => {
    assert.equal(errorText({ error: 'not-local', message: 'not-local' }), 'not-local')
  })

  it('falls back to HTTP status when the body has neither field', () => {
    assert.equal(errorText({}, 500), 'HTTP 500')
  })
})
