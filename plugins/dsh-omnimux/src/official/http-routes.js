import { sendJson, readJsonBody } from '../auth/http-routes.js'
import { DEFAULT_SITE, resolveSiteBaseUrl } from '../auth/omnimux-auth.js'
import { assertLocalWrite } from '../apps/origin.js'
import { OmnimuxError } from '../media/errors.js'
import { connectAccount, disconnectAccount, listAccounts } from './accounts.js'
import { createOfficialClient } from './client.js'
import { parseOfficialConfig } from './config.js'
import { filterAccounts, pickConnectView } from './public-account.js'

/**
 * @param {{
 *   official?: { mount: boolean },
 *   identity?: { require: Function },
 *   store?: { resolve: () => Promise<string | undefined> },
 *   siteBaseUrl?: string,
 *   env?: NodeJS.ProcessEnv,
 *   fetcher?: typeof fetch,
 *   client?: { withPat: Function },
 * }} [deps]
 */
export function createOfficialDispatcher(deps = {}) {
  const env = deps.env ?? process.env
  const official = deps.official ?? parseOfficialConfig(undefined)
  const siteBaseUrl = resolveSiteBaseUrl(deps.siteBaseUrl || env.OMNIMUX_SITE_URL || DEFAULT_SITE)
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
        return {
          status: 200,
          body: filterAccounts(raw, {
            platform: url.searchParams.get('platform') || '',
            group: url.searchParams.get('group') || '',
          }),
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
      if (method === 'DELETE' && path.startsWith('/omnimux/accounts/')) {
        const id = decodeURIComponent(path.slice('/omnimux/accounts/'.length))
        if (!id) return { status: 400, body: { error: 'id is required' } }
        await disconnectAccount(client, { id })
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
        const body = req.method === 'POST' ? await readJsonBody(req) : undefined
        if (req.method === 'POST' && body === null) {
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
