import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { apply } from '../index.js'
import { OmnimuxError } from '../media/errors.js'
import { createIdentity } from './identity.js'
import { createTokenStore } from './store.js'

describe('identity seam', () => {
  it('reports unsigned without a token and require throws needs-omnimux', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'dsh-omnimux-id-'))
    const identity = createIdentity({
      store: createTokenStore({ homeDir }),
      siteBaseUrl: 'https://omnimux.ai',
    })
    try {
      const body = await identity.status()
      assert.equal(body.logged_in, false)
      assert.equal(body.base_url, 'https://omnimux.ai')
      assert.equal(/access_token|sk-/.test(JSON.stringify(body)), false)
      await assert.rejects(
        () => identity.require(),
        (error) => error instanceof OmnimuxError && error.code === 'needs-omnimux',
      )
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
    }
  })

  it('returns cached public fields and never the PAT', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'dsh-omnimux-id-'))
    const store = createTokenStore({ homeDir })
    await store.set('pat-secret')
    store.writeProfileCache({ id: 9, username: 'ada', quota_usd: 1, used_quota_usd: 0 })
    const identity = createIdentity({ store, siteBaseUrl: 'https://omnimux.ai' })
    try {
      const body = await identity.status()
      assert.equal(body.logged_in, true)
      assert.equal(body.username, 'ada')
      assert.equal(body.quota_usd, 1)
      assert.equal(/pat-secret|access_token|sk-/.test(JSON.stringify(body)), false)
      const required = await identity.require()
      assert.equal(required.username, 'ada')
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
    }
  })

  it('verify refreshes the profile and unsets an invalid token', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'dsh-omnimux-id-'))
    const store = createTokenStore({ homeDir })
    await store.set('pat-dead')
    let hits = 0
    const identity = createIdentity({
      store,
      siteBaseUrl: 'https://omnimux.ai',
      fetcher: async () => {
        hits += 1
        return { ok: false, status: 401, json: async () => ({}) }
      },
    })
    try {
      const loaded = await identity.load({ verify: true })
      assert.equal(loaded.kind, 'token_invalid')
      assert.equal(loaded.body.logged_in, false)
      assert.equal(hits, 1)
      assert.equal(await store.resolve(), undefined)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
    }
  })

  it('apply provides identity and dispose unregisters it', () => {
    const provided = {}
    apply({
      tools: { register() {} },
      provide(name, value) { provided[name] = value },
      get() { return undefined },
    })
    assert.equal(typeof provided.identity.status, 'function')
    assert.equal(typeof provided.identity.require, 'function')
    assert.equal(typeof provided.videoGenerate.execute, 'function')
    assert.equal(typeof provided.textComplete.execute, 'function')
  })
})
