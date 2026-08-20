import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import { createOfficialDispatcher } from './http-routes.js'
import { createAccountMetaStore } from './account-meta.js'

function clientWith(handler) {
  return {
    async withPat(path, init = {}) {
      return handler(path, init)
    },
  }
}

const LOCAL_ORIGIN = 'http://127.0.0.1:8787'

/** In-memory meta store that records every call. */
function fakeMetaStore(doc = {}) {
  const state = { ...doc }
  /** @type {Array<{ op: string, id: string, patch?: Record<string, unknown> }>} */
  const calls = []
  return {
    calls,
    read: () => ({ ...state }),
    update: (id, patch) => {
      calls.push({ op: 'update', id, patch: { ...patch } })
      const current = { ...(state[id] || {}) }
      for (const [key, value] of Object.entries(patch)) {
        if (value === null) delete current[key]
        else current[key] = value
      }
      current.updated_at = '2026-08-20T10:00:00Z'
      state[id] = current
      return { ...current }
    },
    remove: (id) => {
      calls.push({ op: 'remove', id })
      delete state[id]
    },
    prune: (validIds) => {
      calls.push({ op: 'prune', id: String(Array.from(validIds).sort().join(',')) })
      const valid = new Set(validIds)
      /** @type {string[]} */
      const removed = []
      for (const id of Object.keys(state)) {
        if (!valid.has(id)) {
          delete state[id]
          removed.push(id)
        }
      }
      return removed
    },
  }
}

function accountFixture() {
  return {
    data: {
      accounts: [
        { id: 'a', platform: 'tiktok', display_name: 'Ada', username: 'ada', group: 'site-group' },
        { id: 'b', platform: 'youtube', display_name: 'Bo', username: 'bo' },
      ],
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
      origin: LOCAL_ORIGIN,
      body: { platform: 'tiktok' },
    })
    assert.equal(connected.status, 200)
    assert.equal(connected.body.auth_url, 'https://omnimux.ai/cli/connect')
    const removed = await dispatcher.dispatch({
      method: 'DELETE',
      url: '/omnimux/accounts/acc-1',
      origin: LOCAL_ORIGIN,
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

describe('official accounts overlay', () => {
  it('merges meta into GET rows and lazily prunes stale ids', async () => {
    const meta = fakeMetaStore({
      a: { group: 'local-group', agent_usable: true },
      gone: { group: 'ops' },
    })
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => accountFixture()),
      metaStore: meta,
    })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts' })
    assert.equal(result.status, 200)
    const a = result.body.accounts.find((row) => row.id === 'a')
    assert.equal(a.group, 'local-group')
    assert.equal(a.agent_usable, true)
    assert.equal(a.status, 'active')
    const b = result.body.accounts.find((row) => row.id === 'b')
    assert.equal('agent_usable' in b, false)
    assert.deepEqual(meta.calls, [{ op: 'prune', id: 'a,b' }])
  })

  it('patches group and agent_usable and returns the merged view row', async () => {
    const meta = fakeMetaStore()
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => accountFixture()),
      metaStore: meta,
    })
    const result = await dispatcher.dispatch({
      method: 'PATCH',
      url: '/omnimux/accounts/a',
      origin: LOCAL_ORIGIN,
      body: { group: 'brand', agent_usable: false },
    })
    assert.equal(result.status, 200)
    assert.equal(result.body.account.id, 'a')
    assert.equal(result.body.account.display_name, 'Ada')
    assert.equal(result.body.account.group, 'brand')
    assert.equal(result.body.account.agent_usable, false)
    assert.deepEqual(meta.calls, [{ op: 'update', id: 'a', patch: { group: 'brand', agent_usable: false } }])
  })

  it('normalizes an empty-string group to a clear and allows pure metadata patches', async () => {
    const meta = fakeMetaStore({ ghost: { group: 'old', agent_usable: true } })
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => accountFixture()),
      metaStore: meta,
    })
    const cleared = await dispatcher.dispatch({
      method: 'PATCH',
      url: '/omnimux/accounts/a',
      origin: LOCAL_ORIGIN,
      body: { group: '  ' },
    })
    assert.equal(cleared.status, 200)
    assert.equal('group' in cleared.body.account, true, 'site group still shows when overlay is cleared')
    assert.equal(cleared.body.account.group, 'site-group')
    assert.deepEqual(meta.calls, [{ op: 'update', id: 'a', patch: { group: null } }])
    // site row missing: still updates and returns the metadata-only row
    const ghost = await dispatcher.dispatch({
      method: 'PATCH',
      url: '/omnimux/accounts/ghost',
      origin: LOCAL_ORIGIN,
      body: { agent_usable: false },
    })
    assert.equal(ghost.status, 200)
    assert.deepEqual(ghost.body.account, { id: 'ghost', group: 'old', agent_usable: false })
  })

  it('rejects invalid PATCH bodies with 400', async () => {
    const meta = fakeMetaStore()
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => accountFixture()),
      metaStore: meta,
    })
    const cases = [
      { group: 12 },
      { agent_usable: 'yes' },
      { scopes: ['read'] },
      {},
      null,
    ]
    for (const body of cases) {
      const result = await dispatcher.dispatch({
        method: 'PATCH',
        url: '/omnimux/accounts/a',
        origin: LOCAL_ORIGIN,
        body,
      })
      assert.equal(result.status, 400, `expected 400 for ${JSON.stringify(body)}`)
    }
    assert.deepEqual(meta.calls, [], 'no meta writes on invalid input')
    const missingId = await dispatcher.dispatch({
      method: 'PATCH',
      url: '/omnimux/accounts/',
      origin: LOCAL_ORIGIN,
      body: { group: 'x' },
    })
    assert.equal(missingId.status, 400)
  })

  it('refuses a cross-origin PATCH and clears meta after a DELETE', async () => {
    const meta = fakeMetaStore({ 'acc-1': { group: 'ops' } })
    const dispatcher = createOfficialDispatcher({
      official: { mount: true },
      client: clientWith(async () => accountFixture()),
      metaStore: meta,
    })
    const refused = await dispatcher.dispatch({
      method: 'PATCH',
      url: '/omnimux/accounts/acc-1',
      origin: 'https://evil.example',
      body: { group: 'nope' },
    })
    assert.equal(refused.status, 403)
    assert.deepEqual(meta.calls, [])
    const removed = await dispatcher.dispatch({
      method: 'DELETE',
      url: '/omnimux/accounts/acc-1',
      origin: LOCAL_ORIGIN,
    })
    assert.equal(removed.status, 200)
    assert.deepEqual(meta.calls, [{ op: 'remove', id: 'acc-1' }])
    assert.equal('acc-1' in meta.read(), false)
  })

  it('works against the real file-backed store end to end', async () => {
    const home = mkdtempSync(join(tmpdir(), 'omnimux-acct-routes-'))
    try {
      const metaStore = createAccountMetaStore({ home, now: () => '2026-08-20T10:00:00Z' })
      const dispatcher = createOfficialDispatcher({
        official: { mount: true },
        client: clientWith(async () => accountFixture()),
        metaStore,
      })
      const patched = await dispatcher.dispatch({
        method: 'PATCH',
        url: '/omnimux/accounts/a',
        origin: LOCAL_ORIGIN,
        body: { agent_usable: false },
      })
      assert.equal(patched.status, 200)
      assert.equal(patched.body.account.agent_usable, false)
      const listed = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts' })
      const a = listed.body.accounts.find((row) => row.id === 'a')
      assert.equal(a.agent_usable, false)
      await dispatcher.dispatch({ method: 'DELETE', url: '/omnimux/accounts/a', origin: LOCAL_ORIGIN })
      const after = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/accounts' })
      const gone = after.body.accounts.find((row) => row.id === 'a')
      assert.equal('agent_usable' in gone, false)
    } finally {
      rmSync(home, { recursive: true, force: true })
    }
  })
})
