import { sendJson, readJsonBody } from '../auth/http-routes.js'
import { DEFAULT_SITE, resolveSiteBaseUrl } from '../auth/omnimux-auth.js'
import { assertLocalWrite } from '../apps/origin.js'
import { OmnimuxError } from '../media/errors.js'
import { connectAccount, disconnectAccount, listAccounts } from './accounts.js'
import { createOfficialClient } from './client.js'
import { parseOfficialConfig } from './config.js'
import { computeStatus, filterRows, pickAccountsView, pickConnectView } from './public-account.js'
import { mergeMeta } from './account-meta.js'

/** In-memory no-op store so a dispatcher assembled without one still works. */
function emptyMetaStore() {
  return {
    read: () => ({}),
    update: (_id, patch) => ({ ...(patch && typeof patch === 'object' ? patch : {}) }),
    remove: () => {},
    prune: () => [],
  }
}

/**
 * Validates a PATCH body against the metadata contract
 * `{ group?: string | null, agent_usable?: boolean }`.
 * Returns a normalized patch, or an error message on invalid input.
 * @param {unknown} body
 * @returns {{ patch: Record<string, string | boolean | null> } | { error: string }}
 */
function parseMetaPatch(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'json object body is required' }
  }
  /** @type {Record<string, string | boolean | null>} */
  const patch = {}
  for (const [key, value] of Object.entries(/** @type {Record<string, unknown>} */ (body))) {
    if (key === 'group') {
      if (value === null) {
        patch.group = null
      } else if (typeof value === 'string') {
        const trimmed = value.trim()
        patch.group = trimmed === '' ? null : trimmed
      } else {
        return { error: 'group must be a string or null' }
      }
      continue
    }
    if (key === 'agent_usable') {
      if (typeof value !== 'boolean') return { error: 'agent_usable must be a boolean' }
      patch.agent_usable = value
      continue
    }
    return { error: `unexpected field: ${key}` }
  }
  if (!('group' in patch) && !('agent_usable' in patch)) {
    return { error: 'nothing to update' }
  }
  return { patch }
}

/**
 * @param {{
 *   official?: { mount: boolean },
 *   identity?: { require: Function },
 *   store?: { resolve: () => Promise<string | undefined> },
 *   siteBaseUrl?: string,
 *   env?: NodeJS.ProcessEnv,
 *   fetcher?: typeof fetch,
 *   client?: { withPat: Function },
 *   metaStore?: { read: Function, update: Function, remove: Function, prune: Function },
 * }} [deps]
 */
export function createOfficialDispatcher(deps = {}) {
  const env = deps.env ?? process.env
  const official = deps.official ?? parseOfficialConfig(undefined)
  const siteBaseUrl = resolveSiteBaseUrl(deps.siteBaseUrl || env.OMNIMUX_SITE_URL || DEFAULT_SITE)
  const metaStore = deps.metaStore ?? emptyMetaStore()
  const client = deps.client ?? createOfficialClient({
    fetcher: deps.fetcher,
    siteBaseUrl,
    apiBaseUrl: (env.OMNIMUX_BASE_URL || 'https://api.omnimux.ai/v1').replace(/\/v1\/?$/, ''),
    resolveApiKey: () => env.OMNIMUX_API_KEY || env.OMNIMUX_TOKEN,
    async resolveAccess() {
      if (!deps.identity || typeof deps.identity.require !== 'function') {
        throw new OmnimuxError('needs-omnimux', 'sign in to OmniMux or set OMNIMUX_ACCESS_TOKEN')
      }
      const profile = await deps.identity.require()
      const token = await deps.store?.resolve()
      if (!token) {
        throw new OmnimuxError('needs-omnimux', 'sign in to OmniMux or set OMNIMUX_ACCESS_TOKEN')
      }
      return { token, userId: profile.id }
    },
  })

  /**
   * @param {{ method: string, url: string, body?: unknown, origin?: string, referer?: string, secFetchSite?: string }} req
   */
  async function dispatch(req) {
    if (!official.mount) return { status: 404, body: { error: 'not found' } }
    const url = new URL(req.url, 'http://127.0.0.1')
    const method = req.method.toUpperCase()
    const path = url.pathname
    if (method !== 'GET') {
      try {
        assertLocalWrite(req)
      } catch (error) {
        return { status: 403, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }
    try {
      if (method === 'GET' && path === '/omnimux/accounts') {
        const raw = await listAccounts(client)
        const meta = metaStore.read()
        const view = pickAccountsView(raw, { meta, now: Date.now() })
        // Lazy cleanup: overlay rows whose id the site no longer returns are
        // dropped so the local document cannot accumulate dead ids.
        metaStore.prune(view.accounts.map((row) => String(row.id)))
        return {
          status: 200,
          body: {
            accounts: filterRows(view.accounts, {
              platform: url.searchParams.get('platform') || '',
              group: url.searchParams.get('group') || '',
            }),
          },
        }
      }
      if (method === 'POST' && path === '/omnimux/accounts') {
        const body = req.body && typeof req.body === 'object' ? /** @type {Record<string, unknown>} */ (req.body) : {}
        const platform = typeof body.platform === 'string' ? body.platform.trim() : ''
        if (!platform) return { status: 400, body: { error: 'platform is required' } }
        const redirect = typeof body.redirect_url === 'string' ? body.redirect_url.trim() : ''
        if (redirect && !/^https:\/\//i.test(redirect)) {
          return { status: 400, body: { error: 'redirect_url must be https' } }
        }
        const raw = await connectAccount(client, {
          platform,
          redirect_url: redirect || undefined,
        })
        return { status: 200, body: pickConnectView(raw) }
      }
      if (method === 'PATCH' && path.startsWith('/omnimux/accounts/')) {
        const id = decodeURIComponent(path.slice('/omnimux/accounts/'.length))
        if (!id) return { status: 400, body: { error: 'id is required' } }
        const parsed = parseMetaPatch(req.body)
        if ('error' in parsed) return { status: 400, body: { error: parsed.error } }
        const raw = await listAccounts(client)
        const siteRow = pickAccountsView(raw).accounts.find((row) => String(row.id) === id)
        // The overlay update is allowed even when the site row is gone: pure
        // metadata (group / agent_usable) is Host-local state.
        const meta = metaStore.update(id, parsed.patch)
        if (siteRow) {
          const account = mergeMeta(siteRow, meta)
          account.status = computeStatus(account, Date.now())
          return { status: 200, body: { account } }
        }
        const account = /** @type {Record<string, unknown>} */ ({ id })
        if (typeof meta.group === 'string' && meta.group !== '') account.group = meta.group
        if (typeof meta.agent_usable === 'boolean') account.agent_usable = meta.agent_usable
        if (typeof meta.last_used_at === 'string' && meta.last_used_at !== '') account.last_used_at = meta.last_used_at
        return { status: 200, body: { account } }
      }
      if (method === 'DELETE' && path.startsWith('/omnimux/accounts/')) {
        const id = decodeURIComponent(path.slice('/omnimux/accounts/'.length))
        if (!id) return { status: 400, body: { error: 'id is required' } }
        await disconnectAccount(client, { id })
        metaStore.remove(id)
        return { status: 200, body: { ok: true } }
      }
    } catch (error) {
      if (error instanceof OmnimuxError && error.code === 'needs-omnimux') {
        return { status: 401, body: { error: error.message } }
      }
      return { status: 502, body: { error: error instanceof Error ? error.message : String(error) } }
    }
    return { status: 404, body: { error: 'not found' } }
  }

  return { dispatch }
}

/**
 * @param {{ register: (route: { kind: string, path: string, handler: Function }) => () => void }} webServer
 * @param {ReturnType<typeof createOfficialDispatcher>} dispatcher
 */
export function registerOfficialRoutes(webServer, dispatcher) {
  const dispose = webServer.register({
    kind: 'prefix',
    path: '/omnimux/accounts',
    async handler(req, res) {
      try {
        const wantsBody = req.method === 'POST' || req.method === 'PATCH'
        const body = wantsBody ? await readJsonBody(req) : undefined
        if (wantsBody && body === null) {
          sendJson(res, 400, { error: 'invalid json' })
          return
        }
        const result = await dispatcher.dispatch({
          method: req.method || 'GET',
          url: req.url || '/omnimux/accounts',
          body,
          origin: header(req, 'origin'),
          referer: header(req, 'referer'),
          secFetchSite: header(req, 'sec-fetch-site'),
        })
        sendJson(res, result.status, result.body)
      } catch {
        sendJson(res, 500, { error: 'internal error' })
      }
    },
  })
  return () => {
    dispose()
  }
}

/**
 * @param {{ headers?: Record<string, string | string[] | undefined> }} req
 * @param {string} name
 */
function header(req, name) {
  const value = req.headers?.[name] ?? req.headers?.[name.toLowerCase()]
  return Array.isArray(value) ? value[0] : value
}
