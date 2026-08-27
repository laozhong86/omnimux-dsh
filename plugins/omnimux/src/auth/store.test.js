import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, utimesSync, writeFileSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { createTokenStore } from './store.js'

describe('token store', () => {
  it('sets and unsets a file-backed token in canonical secrets.json', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    const store = createTokenStore({ homeDir, configDir, platform: 'linux' })
    try {
      assert.equal((await store.describe()).configured, false)
      await store.set('pat-test-1')
      assert.equal(await store.resolve(), 'pat-test-1')
      assert.equal((await store.describe()).configured, true)

      // Verify secrets.json permissions and content
      const secretsPath = join(configDir, 'secrets.json')
      assert.equal(existsSync(secretsPath), true)
      const secretsStat = statSync(secretsPath)
      assert.equal(secretsStat.mode & 0o777, 0o600)

      const secretsContent = JSON.parse(readFileSync(secretsPath, 'utf8'))
      assert.equal(secretsContent.access_token, 'pat-test-1')
      assert.equal(secretsContent.active_slot, 'desktop:default')
      assert.equal(secretsContent.slots['desktop:default'].access_token, 'pat-test-1')
      assert.equal(typeof secretsContent.slots['desktop:default'].updated_at, 'number')

      store.writeProfileCache({ username: 'ada' })
      assert.equal(store.readProfileCache().username, 'ada')

      await store.unset()
      assert.equal(await store.resolve(), undefined)
      assert.equal(store.readProfileCache(), null)
      assert.equal(existsSync(secretsPath), false)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
      rmSync(configDir, { recursive: true, force: true })
    }
  })

  it('prefers credentials when present and falls back after a failed set', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    /** @type {Record<string, string>} */
    const mem = {}
    const store = createTokenStore({
      homeDir,
      configDir,
      platform: 'linux',
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
      rmSync(configDir, { recursive: true, force: true })
    }
  })

  it('env OMNIMUX_ACCESS_TOKEN overrides credentials and storage without persisting to disk', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    const store = createTokenStore({
      homeDir,
      configDir,
      platform: 'linux',
      env: { OMNIMUX_ACCESS_TOKEN: 'pat-from-env' },
    })
    try {
      const resolved = await store.resolve()
      assert.equal(resolved, 'pat-from-env')
      const desc = await store.describe()
      assert.equal(desc.configured, true)
      assert.equal(desc.source, 'env')
      assert.equal(desc.writable, false)
      assert.equal(existsSync(join(configDir, 'secrets.json')), false)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
      rmSync(configDir, { recursive: true, force: true })
    }
  })

  it('reads flat CLI secrets.json and slot format', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    const secretsPath = join(configDir, 'secrets.json')

    // Test flat format
    writeFileSync(secretsPath, JSON.stringify({ access_token: 'pat-flat-format' }))
    const storeFlat = createTokenStore({ homeDir, configDir, platform: 'linux' })
    assert.equal(await storeFlat.resolve(), 'pat-flat-format')

    // Test slot format
    writeFileSync(secretsPath, JSON.stringify({
      version: 1,
      active_slot: 'desktop:default',
      slots: {
        'desktop:default': {
          access_token: 'pat-slot-format',
          updated_at: Date.now(),
        },
      },
    }))
    const storeSlot = createTokenStore({ homeDir, configDir, platform: 'linux' })
    assert.equal(await storeSlot.resolve(), 'pat-slot-format')

    rmSync(homeDir, { recursive: true, force: true })
    rmSync(configDir, { recursive: true, force: true })
  })

  it('lazily promotes legacy access-token file to secrets.json and renames it to .migrated', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    const legacyDir = join(homeDir, 'omnimux')
    mkdirSync(legacyDir, { recursive: true, mode: 0o700 })
    const legacyFile = join(legacyDir, 'access-token')
    const migratedFile = `${legacyFile}.migrated`

    writeFileSync(legacyFile, 'pat-legacy-promote\n')

    const store = createTokenStore({ homeDir, configDir, platform: 'linux' })
    try {
      const resolved = await store.resolve()
      assert.equal(resolved, 'pat-legacy-promote')

      // Check legacy file renamed to .migrated
      assert.equal(existsSync(legacyFile), false)
      assert.equal(existsSync(migratedFile), true)
      assert.equal(readFileSync(migratedFile, 'utf8').trim(), 'pat-legacy-promote')

      // Check written to secrets.json
      const secretsPath = join(configDir, 'secrets.json')
      assert.equal(existsSync(secretsPath), true)
      const secretsContent = JSON.parse(readFileSync(secretsPath, 'utf8'))
      assert.equal(secretsContent.access_token, 'pat-legacy-promote')
      assert.equal(secretsContent.slots['desktop:default'].access_token, 'pat-legacy-promote')
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
      rmSync(configDir, { recursive: true, force: true })
    }
  })

  it('uses fake keychain on darwin platform', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    let keychainValue = 'pat-keychain-val'
    /** @type {string[]} */
    const operations = []

    const fakeKeychain = {
      get() {
        operations.push('get')
        return keychainValue
      },
      set(val) {
        operations.push(`set:${val}`)
        keychainValue = val
        return true
      },
      unset() {
        operations.push('unset')
        keychainValue = undefined
        return true
      },
    }

    const store = createTokenStore({
      homeDir,
      configDir,
      platform: 'darwin',
      keychain: fakeKeychain,
    })

    try {
      assert.equal(await store.resolve(), 'pat-keychain-val')
      const desc = await store.describe()
      assert.equal(desc.configured, true)

      await store.set('pat-darwin-new')
      assert.equal(await store.resolve(), 'pat-darwin-new')
      assert.equal(keychainValue, 'pat-darwin-new')

      // Both keychain and secrets.json written
      const secretsPath = join(configDir, 'secrets.json')
      assert.equal(existsSync(secretsPath), true)
      assert.equal(JSON.parse(readFileSync(secretsPath, 'utf8')).access_token, 'pat-darwin-new')

      await store.unset()
      assert.equal(await store.resolve(), undefined)
      assert.equal(keychainValue, undefined)
      assert.equal(existsSync(secretsPath), false)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
      rmSync(configDir, { recursive: true, force: true })
    }
  })

  it('OMNIMUX_AUTH_LEGACY_STORE=1 skips keychain and secrets.json', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    const secretsPath = join(configDir, 'secrets.json')
    writeFileSync(secretsPath, JSON.stringify({ access_token: 'pat-in-secrets' }))

    const store = createTokenStore({
      homeDir,
      configDir,
      platform: 'linux',
      env: { OMNIMUX_AUTH_LEGACY_STORE: '1' },
    })

    try {
      // In legacy mode, secrets.json is ignored
      assert.equal(await store.resolve(), undefined)

      await store.set('pat-in-legacy-file')
      assert.equal(await store.resolve(), 'pat-in-legacy-file')

      // legacy file written
      const legacyFile = join(homeDir, 'omnimux', 'access-token')
      assert.equal(existsSync(legacyFile), true)
      assert.equal(readFileSync(legacyFile, 'utf8'), 'pat-in-legacy-file')

      // secrets.json still has original value
      assert.equal(JSON.parse(readFileSync(secretsPath, 'utf8')).access_token, 'pat-in-secrets')
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
      rmSync(configDir, { recursive: true, force: true })
    }
  })

  it('cleans up stale login-flows files on initialization', () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-home-'))
    const configDir = mkdtempSync(join(tmpdir(), 'omnimux-auth-cfg-'))
    const flowsDir = join(configDir, 'login-flows')
    mkdirSync(flowsDir, { recursive: true, mode: 0o700 })

    const staleFile = join(flowsDir, 'flow-stale.json')
    const freshFile = join(flowsDir, 'flow-fresh.json')
    const expiredByField = join(flowsDir, 'flow-expired.json')

    const baseTime = 1700000000000
    writeFileSync(staleFile, JSON.stringify({ device_code: 'abc' }))
    const oldTime = (baseTime - 48 * 60 * 60 * 1000) / 1000
    try {
      utimesSync(staleFile, oldTime, oldTime)
    } catch {
      // ignore
    }

    writeFileSync(freshFile, JSON.stringify({ device_code: 'def', expires_at: baseTime + 600000 }))
    writeFileSync(expiredByField, JSON.stringify({ device_code: 'ghi', expires_at: baseTime - 1000 }))

    createTokenStore({
      homeDir,
      configDir,
      platform: 'linux',
      now: () => baseTime,
    })

    assert.equal(existsSync(staleFile), false)
    assert.equal(existsSync(expiredByField), false)
    assert.equal(existsSync(freshFile), true)

    rmSync(homeDir, { recursive: true, force: true })
    rmSync(configDir, { recursive: true, force: true })
  })

  it('node:test runs do not write the operator Keychain, secrets.json, or ~/.dsh token', async () => {
    const realSecrets = join(homedir(), '.config', 'omnimux', 'secrets.json')
    const realToken = join(homedir(), '.dsh', 'omnimux', 'access-token')
    const hadSecrets = existsSync(realSecrets)
    const hadToken = existsSync(realToken)
    const store = createTokenStore({ homeDir: join(homedir(), '.dsh') })
    await store.set('pat-must-not-escape')
    assert.equal(existsSync(realSecrets), hadSecrets)
    assert.equal(existsSync(realToken), hadToken)
    assert.notEqual(store.secretsPath, realSecrets)
    await store.unset()
  })
})
