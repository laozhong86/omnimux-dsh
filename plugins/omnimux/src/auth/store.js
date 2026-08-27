import { chmodSync, existsSync, readdirSync, readFileSync, renameSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { homedir, tmpdir } from 'node:os'
import { atomicWriteFileSync } from './atomic-write.js'
import { createKeychain } from './keychain.js'
import { CREDENTIAL_REF } from './omnimux-auth.js'

/**
 * @param {string | undefined} homeDir
 */
export function resolveDshHome(homeDir) {
  return homeDir || process.env.DSH_HOME || join(homedir(), '.dsh')
}

/**
 * Scans and cleans up stale login flow files in ~/.config/omnimux/login-flows/
 * @param {string} configDir
 * @param {() => number} nowFn
 */
function cleanupStaleLoginFlows(configDir, nowFn) {
  const flowsDir = join(configDir, 'login-flows')
  try {
    if (!existsSync(flowsDir)) return
    const entries = readdirSync(flowsDir)
    const currentTime = nowFn()
    for (const entry of entries) {
      if (!entry.endsWith('.json')) continue
      const filePath = join(flowsDir, entry)
      try {
        const stat = statSync(filePath)
        const isOlderThan24h = currentTime - stat.mtimeMs > 24 * 60 * 60 * 1000
        let isExpiredAt = false
        try {
          const raw = JSON.parse(readFileSync(filePath, 'utf8'))
          if (raw && typeof raw.expires_at === 'number' && raw.expires_at < currentTime) {
            isExpiredAt = true
          }
        } catch {
          // ignore json parse error
        }
        if (isOlderThan24h || isExpiredAt) {
          rmSync(filePath, { force: true })
        }
      } catch {
        // ignore per-file stat error
      }
    }
  } catch {
    // ignore directory error
  }
}

/**
 * @param {{
 *   credentials?: { resolve?: Function, set?: Function, unset?: Function, describe?: Function },
 *   homeDir?: string,
 *   configDir?: string,
 *   env?: Record<string, string | undefined>,
 *   platform?: string,
 *   keychain?: ReturnType<typeof createKeychain>,
 *   now?: () => number,
 *   tokenPath?: string,
 *   profilePath?: string,
 * }} [opts]
 */
function runningUnderNodeTest() {
  return Boolean(process.env.NODE_TEST_CONTEXT)
}

export function createTokenStore(opts = {}) {
  const env = opts.env || process.env
  const underTest = runningUnderNodeTest()
  const platform = opts.platform || (underTest ? 'linux' : process.platform)
  const now = opts.now || Date.now
  const home = resolveDshHome(opts.homeDir)
  const realDshHome = join(homedir(), '.dsh')
  const realConfigDir = join(homedir(), '.config', 'omnimux')
  const sandboxRoot = join(tmpdir(), `omnimux-node-test-${process.pid}`)
  const pinchesRealHome = underTest && home === realDshHome
  const configDir = opts.configDir || (underTest ? join(sandboxRoot, 'config') : realConfigDir)
  const secretsPath = join(configDir, 'secrets.json')
  const tokenPath = opts.tokenPath || (pinchesRealHome
    ? join(sandboxRoot, 'access-token')
    : join(home, 'omnimux', 'access-token'))
  const migratedTokenPath = `${tokenPath}.migrated`
  const profilePath = opts.profilePath || (pinchesRealHome
    ? join(sandboxRoot, 'profile.json')
    : join(home, 'omnimux', 'profile.json'))
  const credentials = opts.credentials
  const keychain = opts.keychain || createKeychain({
    platform: underTest && !opts.keychain ? 'linux' : platform,
  })

  let expired = false

  // Never sweep the operator's real login-flows directory from unit tests.
  if (!underTest || Boolean(opts.configDir)) {
    cleanupStaleLoginFlows(configDir, now)
  }

  function isExpired() {
    return expired
  }

  function markExpired() {
    expired = true
  }

  function clearExpired() {
    expired = false
  }

  /**
   * Reads raw secrets.json and extracts token.
   * Ensures 0600 permissions if the file exists.
   * @returns {{ token?: string, raw?: Record<string, unknown> } | null}
   */
  function readSecrets() {
    try {
      if (!existsSync(secretsPath)) return null
      try {
        const stat = statSync(secretsPath)
        if ((stat.mode & 0o777) !== 0o600) {
          chmodSync(secretsPath, 0o600)
        }
      } catch {
        // ignore chmod failure
      }
      const raw = JSON.parse(readFileSync(secretsPath, 'utf8'))
      if (!raw || typeof raw !== 'object') return null

      let token = undefined
      if (raw.active_slot && raw.slots && typeof raw.slots === 'object') {
        const slot = raw.slots[raw.active_slot]
        if (slot && typeof slot.access_token === 'string' && slot.access_token.trim()) {
          token = slot.access_token.trim()
        }
      }
      if (!token && typeof raw.access_token === 'string' && raw.access_token.trim()) {
        token = raw.access_token.trim()
      }
      return { token, raw }
    } catch {
      return null
    }
  }

  /**
   * Writes token to secrets.json using atomic write.
   * Preserves existing slots if present.
   * @param {string} token
   */
  function writeSecrets(token) {
    const existing = readSecrets()?.raw || {}
    const slots = existing.slots && typeof existing.slots === 'object' ? { ...existing.slots } : {}
    const activeSlot = typeof existing.active_slot === 'string' && existing.active_slot ? existing.active_slot : 'desktop:default'
    const targetSlot = slots[activeSlot] ? activeSlot : 'desktop:default'

    slots[targetSlot] = {
      ...(slots[targetSlot] && typeof slots[targetSlot] === 'object' ? slots[targetSlot] : {}),
      access_token: token,
      updated_at: now(),
    }

    const payload = {
      version: typeof existing.version === 'number' ? existing.version : 1,
      active_slot: targetSlot,
      access_token: token,
      slots,
    }

    atomicWriteFileSync(secretsPath, `${JSON.stringify(payload, null, 2)}\n`, { mode: 0o600, dirMode: 0o700 })
  }

  /**
   * Cleans up token in secrets.json on logout.
   */
  function unsetSecrets() {
    try {
      if (!existsSync(secretsPath)) return
      const existing = readSecrets()?.raw
      if (!existing || typeof existing !== 'object') {
        rmSync(secretsPath, { force: true })
        return
      }

      const slots = existing.slots && typeof existing.slots === 'object' ? { ...existing.slots } : {}
      delete slots['desktop:default']
      if (existing.active_slot && slots[existing.active_slot]) {
        delete slots[existing.active_slot]
      }

      const remainingSlots = Object.keys(slots).filter((k) => slots[k] && slots[k].access_token)
      if (remainingSlots.length === 0) {
        rmSync(secretsPath, { force: true })
      } else {
        const nextActive = remainingSlots[0]
        const payload = {
          version: existing.version || 1,
          active_slot: nextActive,
          access_token: slots[nextActive].access_token,
          slots,
        }
        atomicWriteFileSync(secretsPath, `${JSON.stringify(payload, null, 2)}\n`, { mode: 0o600, dirMode: 0o700 })
      }
    } catch {
      // absent or clean failure is ignored
    }
  }

  function readLegacyFileToken() {
    try {
      const value = readFileSync(tokenPath, 'utf8').trim()
      return value || undefined
    } catch {
      return undefined
    }
  }

  function writeLegacyFileToken(value) {
    atomicWriteFileSync(tokenPath, value, { mode: 0o600, dirMode: 0o700 })
  }

  /**
   * @returns {Promise<string | undefined>}
   */
  async function resolve() {
    // 1. Process environment override
    const envToken = typeof env.OMNIMUX_ACCESS_TOKEN === 'string' ? env.OMNIMUX_ACCESS_TOKEN.trim() : ''
    if (envToken) return envToken

    // 2. Credentials seam
    if (credentials && typeof credentials.resolve === 'function') {
      try {
        const hit = await credentials.resolve(CREDENTIAL_REF)
        if (hit && typeof hit.value === 'string' && hit.value.trim()) return hit.value.trim()
      } catch {
        // fall through
      }
    }

    const isLegacy = env.OMNIMUX_AUTH_LEGACY_STORE === '1'

    if (isLegacy) {
      return readLegacyFileToken()
    }

    // 3. Platform canonical shared store
    // 3a. macOS Keychain
    if (platform === 'darwin' && keychain) {
      try {
        const kcToken = keychain.get()
        if (kcToken) return kcToken
      } catch {
        // fallback to secrets.json
      }
    }

    // 3b. ~/.config/omnimux/secrets.json
    const secretsResult = readSecrets()
    if (secretsResult && secretsResult.token) {
      return secretsResult.token
    }

    // 4. Legacy fallback & lazy promotion
    const legacyToken = readLegacyFileToken()
    if (legacyToken) {
      try {
        // Promote to canonical store
        if (platform === 'darwin' && keychain) {
          try {
            keychain.set(legacyToken)
          } catch {
            // ignore keychain failure
          }
        }
        writeSecrets(legacyToken)
        // Rename legacy file to .migrated
        try {
          renameSync(tokenPath, migratedTokenPath)
        } catch {
          // ignore rename failure
        }
      } catch {
        // ignore promotion failure
      }
      return legacyToken
    }

    return undefined
  }

  /**
   * @returns {Promise<{ configured: boolean, source?: string, writable: boolean }>}
   */
  async function describe() {
    const envToken = typeof env.OMNIMUX_ACCESS_TOKEN === 'string' ? env.OMNIMUX_ACCESS_TOKEN.trim() : ''
    if (envToken) {
      return { configured: true, source: 'env', writable: false }
    }

    if (credentials && typeof credentials.describe === 'function') {
      try {
        const info = await credentials.describe(CREDENTIAL_REF)
        if (info && typeof info.configured === 'boolean' && info.configured) return info
      } catch {
        // fall through
      }
    }

    const token = await resolve()
    return { configured: Boolean(token), source: token ? 'file' : undefined, writable: true }
  }

  /**
   * @param {string} value
   */
  async function set(value) {
    if (!value || typeof value !== 'string' || !value.trim()) {
      throw new Error('empty access token')
    }
    const token = value.trim()
    clearExpired()

    const isLegacy = env.OMNIMUX_AUTH_LEGACY_STORE === '1'

    if (isLegacy) {
      writeLegacyFileToken(token)
      if (credentials && typeof credentials.set === 'function') {
        try {
          await credentials.set(CREDENTIAL_REF, token)
        } catch {
          // ignore
        }
      }
      return
    }

    // Non-legacy mode:
    // Write to Keychain on darwin (best effort)
    if (platform === 'darwin' && keychain) {
      try {
        keychain.set(token)
      } catch {
        // ignore keychain failure
      }
    }

    // Always write to secrets.json
    writeSecrets(token)

    // Attempt credentials.set
    if (credentials && typeof credentials.set === 'function') {
      try {
        await credentials.set(CREDENTIAL_REF, token)
      } catch {
        // env-shadowed writes fail loud; keep a plugin-owned copy
      }
    }
  }

  /**
   * Explicit logout. Cleans up canonical and legacy stores.
   */
  async function unset() {
    clearExpired()

    if (credentials && typeof credentials.unset === 'function') {
      try {
        await credentials.unset(CREDENTIAL_REF)
      } catch {
        // still remove the file copy
      }
    }

    if (platform === 'darwin' && keychain) {
      try {
        keychain.unset()
      } catch {
        // ignore
      }
    }

    unsetSecrets()

    try {
      rmSync(tokenPath, { force: true })
    } catch {
      // absent is success
    }
    try {
      rmSync(profilePath, { force: true })
    } catch {
      // absent is success
    }
  }

  function readProfileCache() {
    try {
      const raw = JSON.parse(readFileSync(profilePath, 'utf8'))
      return raw && typeof raw === 'object' ? raw : null
    } catch {
      return null
    }
  }

  /**
   * @param {Record<string, unknown>} profile
   */
  function writeProfileCache(profile) {
    atomicWriteFileSync(profilePath, `${JSON.stringify(profile)}\n`, { mode: 0o600, dirMode: 0o700 })
  }

  return {
    resolve,
    describe,
    set,
    unset,
    readProfileCache,
    writeProfileCache,
    markExpired,
    isExpired,
    clearExpired,
    tokenPath,
    profilePath,
    configDir,
    secretsPath,
  }
}
