import { chmodSync, existsSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { homedir, tmpdir } from 'node:os'
import { atomicWriteFileSync } from './atomic-write.js'
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

function runningUnderNodeTest() {
  return Boolean(process.env.NODE_TEST_CONTEXT)
}

/**
 * Creates the single canonical token store backed by ~/.config/omnimux/secrets.json (0600).
 * No OS Keychain dependencies; no legacy migration overhead.
 *
 * @param {{
 *   credentials?: { resolve?: Function, set?: Function, unset?: Function, describe?: Function },
 *   homeDir?: string,
 *   configDir?: string,
 *   env?: Record<string, string | undefined>,
 *   now?: () => number,
 *   profilePath?: string,
 * }} [opts]
 */
export function createTokenStore(opts = {}) {
  const env = opts.env || process.env
  const underTest = runningUnderNodeTest()
  const now = opts.now || Date.now
  const home = resolveDshHome(opts.homeDir)
  const realDshHome = join(homedir(), '.dsh')
  const realConfigDir = join(homedir(), '.config', 'omnimux')
  const sandboxRoot = join(tmpdir(), `omnimux-node-test-${process.pid}`)
  const pinchesRealHome = underTest && home === realDshHome
  const configDir = opts.configDir || (underTest ? join(sandboxRoot, 'config') : realConfigDir)
  const secretsPath = join(configDir, 'secrets.json')
  const configPath = join(configDir, 'config.json')
  const profilePath = opts.profilePath || (pinchesRealHome
    ? join(sandboxRoot, 'profile.json')
    : join(home, 'omnimux', 'profile.json'))
  const credentials = opts.credentials

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
   * Reads config.json (non-secret user configuration).
   * @returns {Record<string, unknown> | null}
   */
  function readConfig() {
    try {
      if (!existsSync(configPath)) return null
      const raw = JSON.parse(readFileSync(configPath, 'utf8'))
      return raw && typeof raw === 'object' ? raw : null
    } catch {
      return null
    }
  }

  /**
   * Writes/patches config.json (e.g. user_id, base_url).
   * @param {{ userId?: string | number, baseUrl?: string, autoUpdate?: boolean }} patch
   */
  function writeConfig(patch = {}) {
    const existing = readConfig() || {}
    const payload = { ...existing }
    if (patch.baseUrl) payload.base_url = String(patch.baseUrl).trim()
    if (patch.userId != null) payload.user_id = String(patch.userId).trim()
    if (patch.autoUpdate !== undefined) payload.auto_update = Boolean(patch.autoUpdate)
    atomicWriteFileSync(configPath, `${JSON.stringify(payload, null, 2)}\n`, { mode: 0o600, dirMode: 0o700 })
  }

  /**
   * Cleans user_id in config.json on explicit logout.
   */
  function unsetConfig() {
    try {
      if (!existsSync(configPath)) return
      const existing = readConfig()
      if (existing && typeof existing === 'object') {
        delete existing.user_id
        if (Object.keys(existing).filter((k) => k !== 'base_url' && k !== 'auto_update').length === 0 && !existing.base_url) {
          rmSync(configPath, { force: true })
        } else {
          atomicWriteFileSync(configPath, `${JSON.stringify(existing, null, 2)}\n`, { mode: 0o600, dirMode: 0o700 })
        }
      }
    } catch {
      // ignore
    }
  }

  /**
   * Reads secrets.json and extracts token.
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
      if (typeof raw.access_token === 'string' && raw.access_token.trim()) {
        token = raw.access_token.trim()
      } else if (raw.active_slot && raw.slots && typeof raw.slots === 'object') {
        const slot = raw.slots[raw.active_slot]
        if (slot && typeof slot.access_token === 'string' && slot.access_token.trim()) {
          token = slot.access_token.trim()
        }
      }
      return { token, raw }
    } catch {
      return null
    }
  }

  /**
   * Writes token to secrets.json using atomic write (tmp -> fsync -> 0600 -> rename).
   * @param {string} token
   */
  function writeSecrets(token) {
    const existing = readSecrets()?.raw || {}
    const slots = existing.slots && typeof existing.slots === 'object' ? { ...existing.slots } : {}
    const targetSlot = typeof opts.slot === 'string' && opts.slot ? opts.slot : (existing.active_slot || 'desktop:default')

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
   * Cleans up token in secrets.json on explicit logout.
   */
  function unsetSecrets() {
    try {
      if (!existsSync(secretsPath)) return
      if (!opts.slot) {
        rmSync(secretsPath, { force: true })
        return
      }

      const existing = readSecrets()?.raw
      if (!existing || typeof existing !== 'object') {
        rmSync(secretsPath, { force: true })
        return
      }

      const slots = existing.slots && typeof existing.slots === 'object' ? { ...existing.slots } : {}
      delete slots[opts.slot]
      if (existing.active_slot === opts.slot) {
        delete existing.active_slot
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

  /**
   * Resolves active access token across the 3-level pipeline:
   * Level 1: env OMNIMUX_ACCESS_TOKEN (explicit process override)
   * Level 2: Canonical ~/.config/omnimux/secrets.json (Single Source of Truth for shared CLI + App auth)
   * Level 3: DSH credentials seam ($DSH_HOME/.credentials.yaml fallback)
   *
   * @returns {Promise<string | undefined>}
   */
  async function resolve() {
    // 1. Process environment override
    const envToken = typeof env.OMNIMUX_ACCESS_TOKEN === 'string' ? env.OMNIMUX_ACCESS_TOKEN.trim() : ''
    if (envToken) return envToken

    // 2. Canonical secrets.json file (0600) — Single Source of Truth for shared CLI + App
    const secrets = readSecrets()
    if (secrets?.token) return secrets.token

    // 3. Credentials seam fallback
    if (credentials && typeof credentials.resolve === 'function') {
      try {
        const hit = await credentials.resolve(CREDENTIAL_REF)
        if (hit && typeof hit.value === 'string' && hit.value.trim()) return hit.value.trim()
      } catch {
        // fall through
      }
    }

    return undefined
  }

  /**
   * Describes the current token configuration state.
   * @returns {Promise<{ configured: boolean, source?: string, writable: boolean }>}
   */
  async function describe() {
    // 1. Process environment override
    const envToken = typeof env.OMNIMUX_ACCESS_TOKEN === 'string' ? env.OMNIMUX_ACCESS_TOKEN.trim() : ''
    if (envToken) {
      return { configured: true, source: 'env', writable: false }
    }

    // 2. Canonical secrets.json file (0600)
    const secrets = readSecrets()
    if (secrets?.token) {
      return { configured: true, source: 'secrets', writable: true }
    }

    // 3. Credentials seam fallback
    if (credentials && typeof credentials.describe === 'function') {
      try {
        const info = await credentials.describe(CREDENTIAL_REF)
        if (info && typeof info.configured === 'boolean' && info.configured) {
          return { configured: true, source: info.source || 'credentials', writable: info.writable !== false }
        }
      } catch {
        // fall through
      }
    }

    return { configured: false, source: undefined, writable: true }
  }

  /**
   * Sets new access token into canonical secrets.json.
   * @param {string} value
   * @param {{ userId?: string | number, baseUrl?: string }} [extra]
   */
  async function set(value, extra = {}) {
    if (!value || typeof value !== 'string' || !value.trim()) {
      throw new Error('empty access token')
    }
    const token = value.trim()
    clearExpired()

    // 1. Write to canonical secrets.json
    writeSecrets(token)

    // 2. Sync to canonical config.json if metadata is present
    if (extra && (extra.userId != null || extra.baseUrl)) {
      writeConfig({ userId: extra.userId, baseUrl: extra.baseUrl })
    }

    // 3. Best-effort mirror to credentials seam
    if (credentials && typeof credentials.set === 'function') {
      try {
        await credentials.set(CREDENTIAL_REF, token)
      } catch {
        // ignore credentials seam write errors
      }
    }
  }

  /**
   * Cleans up token on explicit user logout.
   */
  async function unset() {
    clearExpired()

    // 1. Unset from canonical secrets.json
    unsetSecrets()

    // 2. Clean user_id in config.json
    unsetConfig()

    // 3. Unset credentials seam
    if (credentials && typeof credentials.unset === 'function') {
      try {
        await credentials.unset(CREDENTIAL_REF)
      } catch {
        // ignore seam failure
      }
    }

    // 4. Clean profile cache
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
    profilePath,
    configDir,
    configPath,
    secretsPath,
    readConfig,
    writeConfig,
    unsetConfig,
  }
}
