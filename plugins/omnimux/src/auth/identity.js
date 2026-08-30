import { OmnimuxError } from '../media/errors.js'
import { fetchSelf, publicStatus, resolveSiteBaseUrl } from './omnimux-auth.js'

/**
 * Shared identity read. Never returns a token.
 * @param {{
 *   store: ReturnType<typeof import('./store.js').createTokenStore>,
 *   siteBaseUrl: string,
 *   fetcher?: typeof fetch,
 * }} deps
 */
export function createIdentity(deps) {
  const siteBaseUrl = resolveSiteBaseUrl(deps.siteBaseUrl)
  const fetcher = deps.fetcher ?? fetch

  /**
   * @param {{ verify?: boolean }} [opts]
   */
  async function load(opts = {}) {
    const verify = opts.verify === true
    const info = await deps.store.describe()
    if (!info.configured) {
      return { kind: 'unsigned', body: publicStatus({ loggedIn: false, verified: null, siteBaseUrl }) }
    }
    const cached = deps.store.readProfileCache()
    if (!verify) {
      if (typeof deps.store.isExpired === 'function' && deps.store.isExpired()) {
        return {
          kind: 'token_invalid',
          body: publicStatus({ loggedIn: false, verified: false, siteBaseUrl, profile: cached }),
        }
      }
      if (hasPublicProfile(cached)) {
        return {
          kind: 'cached',
          body: publicStatus({ loggedIn: true, verified: null, siteBaseUrl, profile: cached }),
        }
      }
      // Token is shared (CLI/App) but this home has no public profile yet.
      // Fall through to /self so the settings card and cloud sidebar fill in.
    }
    const token = await deps.store.resolve()
    if (!token) {
      return { kind: 'unsigned', body: publicStatus({ loggedIn: false, verified: false, siteBaseUrl }) }
    }
    try {
      const profile = await fetchSelf({
        fetcher,
        siteBaseUrl,
        token,
      })
      deps.store.writeProfileCache(profile)
      if (profile && profile.id != null && typeof deps.store.writeConfig === 'function') {
        deps.store.writeConfig({ userId: String(profile.id), baseUrl: siteBaseUrl })
      }
      if (typeof deps.store.clearExpired === 'function') {
        deps.store.clearExpired()
      }
      return {
        kind: 'verified',
        body: publicStatus({ loggedIn: true, verified: true, siteBaseUrl, profile }),
      }
    } catch (error) {
      const invalid = error instanceof Error && error.code === 'token_invalid'
      if (invalid) {
        if (typeof deps.store.markExpired === 'function') {
          deps.store.markExpired()
        }
        return {
          kind: 'token_invalid',
          body: publicStatus({ loggedIn: false, verified: false, siteBaseUrl, profile: cached }),
        }
      }
      if (!verify) {
        return {
          kind: 'cached',
          body: publicStatus({ loggedIn: true, verified: false, siteBaseUrl, profile: cached }),
        }
      }
      return {
        kind: 'self_failed',
        body: publicStatus({ loggedIn: false, verified: false, siteBaseUrl }),
      }
    }
  }

  /**
   * @param {{ verify?: boolean }} [opts]
   */
  async function status(opts = {}) {
    const loaded = await load(opts)
    assertPublic(loaded.body)
    return loaded.body
  }

  /**
   * @param {{ verify?: boolean }} [opts]
   */
  async function require(opts = {}) {
    const body = await status(opts)
    if (!body.logged_in) {
      throw new OmnimuxError('needs-omnimux', 'sign in to OmniMux or set OMNIMUX_ACCESS_TOKEN')
    }
    return body
  }

  return { load, status, require }
}

/**
 * @param {unknown} profile
 */
function hasPublicProfile(profile) {
  if (!profile || typeof profile !== 'object') return false
  const row = /** @type {Record<string, unknown>} */ (profile)
  if (row.id != null && String(row.id).trim() !== '') return true
  if (typeof row.username === 'string' && row.username.trim() !== '') return true
  if (typeof row.display_name === 'string' && row.display_name.trim() !== '') return true
  return false
}

/**
 * @param {unknown} body
 */
export function assertPublic(body) {
  const text = JSON.stringify(body)
  if (/access_token|"sk-/.test(text)) {
    throw new OmnimuxError('omnimux-invalid-response', 'refused to emit a secret')
  }
}
