import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { homedir } from 'node:os'
import { CREDENTIAL_REF } from './omnimux-auth.js'

/**
 * @param {string | undefined} homeDir
 */
export function resolveDshHome(homeDir) {
  return homeDir || process.env.DSH_HOME || join(homedir(), '.dsh')
}

/**
 * @param {{
 *   credentials?: { resolve?: Function, set?: Function, unset?: Function, describe?: Function },
 *   homeDir?: string,
 * }} opts
 */
export function createTokenStore(opts = {}) {
  const home = resolveDshHome(opts.homeDir)
  const tokenPath = join(home, 'omnimux', 'access-token')
  const profilePath = join(home, 'omnimux', 'profile.json')
  const credentials = opts.credentials

  function readFileToken() {
    try {
      const value = readFileSync(tokenPath, 'utf8').trim()
      return value || undefined
    } catch {
      return undefined
    }
  }

  function writeFileToken(value) {
    mkdirSync(dirname(tokenPath), { recursive: true, mode: 0o700 })
    writeFileSync(tokenPath, value, { mode: 0o600 })
  }

  /**
   * @returns {Promise<string | undefined>}
   */
  async function resolve() {
    if (credentials && typeof credentials.resolve === 'function') {
      try {
        const hit = await credentials.resolve(CREDENTIAL_REF)
        if (hit && typeof hit.value === 'string' && hit.value) return hit.value
      } catch {
        // fall through to file
      }
    }
    return readFileToken()
  }

  /**
   * @returns {Promise<{ configured: boolean, source?: string, writable: boolean }>}
   */
  async function describe() {
    if (credentials && typeof credentials.describe === 'function') {
      try {
        const info = await credentials.describe(CREDENTIAL_REF)
        if (info && typeof info.configured === 'boolean') return info
      } catch {
        // fall through
      }
    }
    const value = readFileToken()
    return { configured: Boolean(value), source: value ? 'file' : undefined, writable: true }
  }

  /**
   * @param {string} value
   */
  async function set(value) {
    if (!value) throw new Error('empty access token')
    if (credentials && typeof credentials.set === 'function') {
      try {
        await credentials.set(CREDENTIAL_REF, value)
        return
      } catch {
        // env-shadowed writes fail loud; keep a plugin-owned copy
      }
    }
    writeFileToken(value)
  }

  async function unset() {
    if (credentials && typeof credentials.unset === 'function') {
      try {
        await credentials.unset(CREDENTIAL_REF)
      } catch {
        // still remove the file copy
      }
    }
    try {
      rmSync(tokenPath)
    } catch {
      // absent is success
    }
    try {
      rmSync(profilePath)
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
    mkdirSync(dirname(profilePath), { recursive: true, mode: 0o700 })
    writeFileSync(profilePath, `${JSON.stringify(profile)}\n`, { mode: 0o600 })
  }

  return { resolve, describe, set, unset, readProfileCache, writeProfileCache, tokenPath, profilePath }
}
