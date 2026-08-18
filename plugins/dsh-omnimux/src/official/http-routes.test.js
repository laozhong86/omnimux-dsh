import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import { createOfficialDispatcher } from './http-routes.js'

function clientWith(handler) {
  return {
    async withPat(path, init = {}) {
      return handler(path, init)
    },
  }
}

describe('official accounts dispatcher', () => {
  it('lists public account fields and applies filters', async () => {
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => ({
        data: {
          accounts: [
            { id: 'a', platform: 'tiktok', group: 'ops', access_token: 'pat-nope' },
            { id: 'b', platform: 'youtube', group: 'ads' },
          ],
        },
      })),
    })
    const all = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts' })
    assert.equal(all.status, 200)
    assert.deepEqual(all.body.accounts.map((row) => row.id), ['a', 'b'])
    assert.equal('access_token' in all.body.accounts[0], false)
    const filtered = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts?platform=tiktok' })
    assert.deepEqual(filtered.body.accounts.map((row) => row.id), ['a'])
  })

  it('connects and disconnects through the official client', async () => {
    /** @type {string[]} */
    const seen = []
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async (path, init) => {
        seen.push(`${init.method || 'GET'} ${path}`)
        if (path === '/api/social/v1/connect') return { auth_url: 'https://omnimux.ai/cli/connect' }
        return { ok: true }
      }),
    })
    const connected = await dispatcher.dispatch({
      method: 'POST',
      url: '/omnimux/accounts',
      origin: 'http://127.0.0.1:8787',
      body: { platform: 'tiktok' },
    })
    assert.equal(connected.status, 200)
    assert.equal(connected.body.auth_url, 'https://omnimux.ai/cli/connect')
    const removed = await dispatcher.dispatch({
      method: 'DELETE',
      url: '/omnimux/accounts/acc-1',
      origin: 'http://127.0.0.1:8787',
    })
    assert.equal(removed.status, 200)
    assert.deepEqual(seen, ['POST /api/social/v1/connect', 'DELETE /api/social/v1/accounts/acc-1'])
  })

  it('maps unsigned calls to 401 and refuses a cross-origin write', async () => {
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => {
        throw new OmnimuxError('needs-omnimux', 'sign in')
      }),
    })
    const unsigned = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts' })
    assert.equal(unsigned.status, 401)
    const refused = await dispatcher.dispatch({
      method: 'POST',
      url: '/omnimux/accounts',
      origin: 'https://evil.example',
      body: { platform: 'tiktok' },
    })
    assert.equal(refused.status, 403)
  })

  it('is absent when official tools are unmounted', async () => {
    const dispatcher = createOfficialDispatcher({ official: { mount: false } })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts' })
    assert.equal(result.status, 404)
  })
})
