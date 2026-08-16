import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { createTokenStore } from './store.js'

describe('token store', () => {
  it('sets and unsets a file-backed token', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'dsh-omnimux-auth-'))
    const store = createTokenStore({ homeDir })
    try {
      assert.equal((await store.describe()).configured, false)
      await store.set('pat-test')
      assert.equal(await store.resolve(), 'pat-test')
      assert.equal((await store.describe()).configured, true)
      store.writeProfileCache({ username: 'ada' })
      assert.equal(store.readProfileCache().username, 'ada')
      await store.unset()
      assert.equal(await store.resolve(), undefined)
      assert.equal(store.readProfileCache(), null)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
    }
  })

  it('prefers credentials when present and falls back after a failed set', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'dsh-omnimux-auth-'))
    /** @type {Record<string, string>} */
    const mem = {}
    const store = createTokenStore({
      homeDir,
      credentials: {
        async resolve(ref) {
          const value = mem[ref]
          return value ? { value, source: 'file' } : undefined
        },
        async describe(ref) {
          return { configured: Boolean(mem[ref]), writable: true }
        },
        async set(ref, value) {
          mem[ref] = value
        },
        async unset(ref) {
          delete mem[ref]
        },
      },
    })
    try {
      await store.set('pat-from-cred')
      assert.equal(await store.resolve(), 'pat-from-cred')
      await store.unset()
      assert.equal(await store.resolve(), undefined)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
    }
  })
})
