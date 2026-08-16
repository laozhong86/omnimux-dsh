import { sendJson } from '../auth/http-routes.js'
import { resolveDshHome } from '../auth/store.js'
import { DEFAULT_SITE, resolveSiteBaseUrl } from '../auth/omnimux-auth.js'
import { parseAppsConfig } from './config.js'
import { assertLocalWrite } from './origin.js'
import { resolvePluginCli } from '../plugins/manage.js'
import { createAppsStore } from './store.js'

/**
 * @param {{
 *   env?: NodeJS.ProcessEnv,
 *   homeDir?: string,
 *   profile?: string,
 *   apps?: { remote: boolean, catalogUrl: string, ttlSeconds: number, timeoutMs: number },
 *   siteBaseUrl?: string,
 *   store?: ReturnType<typeof createAppsStore>,
 *   fetcher?: typeof fetch,
 * }} [deps]
 */
export function createAppsDispatcher(deps = {}) {
  const env = deps.env ?? process.env
  const home = resolveDshHome(deps.homeDir || env.DSH_HOME)
  const profile = deps.profile
    || (env.OMNIMUX_PLUGIN_PROFILE && env.OMNIMUX_PLUGIN_PROFILE.trim() !== ''
      ? env.OMNIMUX_PLUGIN_PROFILE
      : resolvePluginCli(env)?.profile)
    || 'omnimux'
  const siteBaseUrl = resolveSiteBaseUrl(deps.siteBaseUrl || env.OMNIMUX_SITE_URL || DEFAULT_SITE)
  const apps = deps.apps ?? parseAppsConfig(undefined, siteBaseUrl)
  const store = deps.store ?? createAppsStore({
    home,
    profile,
    env,
    apps,
    siteBaseUrl,
    fetcher: deps.fetcher,
  })

  /**
   * @param {{ method: string, url: string, origin?: string, referer?: string, secFetchSite?: string }} req
   */
  async function dispatch(req) {
    const url = new URL(req.url, 'http://127.0.0.1')
    const method = req.method.toUpperCase()
    const path = url.pathname
    if (method === 'POST') {
      try {
        assertLocalWrite(req)
      } catch (error) {
        return { status: 403, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }
    if (method === 'GET' && path === '/omnimux/apps') {
      try {
        const body = store.view()
        store.maybeRefresh()
        return { status: 200, body }
      } catch (error) {
        return { status: 500, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }
    if (method === 'POST' && path === '/omnimux/apps/refresh') {
      try {
        const body = await waitFor(store.refreshOnce(true), apps.timeoutMs, () => store.view())
        return { status: 200, body }
      } catch (error) {
        return { status: 500, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }
    return { status: 404, body: { error: 'not found' } }
  }

  return { dispatch, store }
}

/**
 * @param {{ register: (route: { kind: string, path: string, handler: Function }) => () => void }} webServer
 * @param {ReturnType<typeof createAppsDispatcher>} dispatcher
 */
export function registerAppsRoutes(webServer, dispatcher) {
  const dispose = webServer.register({
    kind: 'prefix',
    path: '/omnimux/apps',
    async handler(req, res) {
      try {
        const result = await dispatcher.dispatch({
          method: req.method || 'GET',
          url: req.url || '/omnimux/apps',
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
 * @template T
 * @param {Promise<T>} work
 * @param {number} timeoutMs
 * @param {() => T} fallback
 */
/**
 * @param {{ headers?: Record<string, string | string[] | undefined> }} req
 * @param {string} name
 */
function header(req, name) {
  const value = req.headers?.[name] ?? req.headers?.[name.toLowerCase()]
  return Array.isArray(value) ? value[0] : value
}

function waitFor(work, timeoutMs, fallback) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(fallback()), timeoutMs)
    timer.unref?.()
    work.then((value) => {
      clearTimeout(timer)
      resolve(value)
    }, (error) => {
      clearTimeout(timer)
      reject(error)
    })
  })
}
