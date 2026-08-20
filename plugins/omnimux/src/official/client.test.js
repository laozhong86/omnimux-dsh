import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import { createOfficialClient } from './client.js'

describe('official client', () => {
  it('withSk throws omnimux-unconfigured without a key', async () => {
    const client = createOfficialClient({
      siteBaseUrl: 'https://omnimux.ai',
      resolveApiKey: () => '',
      resolveAccess: async () => ({ token: '' }),
    })
    await assert.rejects(
      () => client.withSk('/v1/chat/completions', { method: 'POST', body: {} }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-unconfigured',
    )
  })

  it('withPat throws needs-omnimux without a token', async () => {
    const client = createOfficialClient({
      siteBaseUrl: 'https://omnimux.ai',
      resolveApiKey: () => 'sk-x',
      resolveAccess: async () => {
        throw new OmnimuxError('needs-omnimux', 'sign in')
      },
    })
    await assert.rejects(
      () => client.withPat('/api/social/v1/accounts'),
      (error) => error instanceof OmnimuxError && error.code === 'needs-omnimux',
    )
  })

  it('refuses a secret-bearing payload', async () => {
    const client = createOfficialClient({
      siteBaseUrl: 'https://omnimux.ai',
      apiBaseUrl: 'https://api.omnimux.ai',
      resolveApiKey: () => 'sk-x',
      resolveAccess: async () => ({ token: 'pat-x', userId: 1 }),
      fetcher: async () => ({
        ok: true,
        status: 200,
        json: async () => ({ access_token: 'pat-leaked' }),
      }),
    })
    await assert.rejects(
      () => client.withSk('/v1/models'),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-response',
    )
  })

  it('maps 401 to needs-omnimux', async () => {
    const client = createOfficialClient({
      siteBaseUrl: 'https://omnimux.ai',
      resolveApiKey: () => 'sk-x',
      resolveAccess: async () => ({ token: 'pat-x' }),
      fetcher: async () => ({
        ok: false,
        status: 401,
        json: async () => ({ error: 'unauthorized' }),
      }),
    })
    await assert.rejects(
      () => client.withSk('/v1/chat/completions', { method: 'POST', body: {} }),
      (error) => error instanceof OmnimuxError && error.code === 'needs-omnimux',
    )
  })
})
