import { sendJson, readJsonBody } from '../auth/http-routes.js'
import {
  assertNpmSpec,
  assertRemovable,
  readProfilePlugins,
  resolvePluginCli,
  runDshPlugin,
} from './manage.js'

/**
 * @param {{ env?: NodeJS.ProcessEnv, spawn?: Function }} [deps]
 */
export function createPluginDispatcher(deps = {}) {
  const env = deps.env ?? process.env

  /**
   * @param {{ method: string, url: string, body?: unknown }} req
   */
  function dispatch(req) {
    const url = new URL(req.url, 'http://127.0.0.1')
    const method = req.method.toUpperCase()
    const path = url.pathname
    const exe = resolvePluginCli(env)

    if (method === 'GET' && path === '/omnimux/plugins') {
      if (exe === undefined) return { status: 200, body: { available: false, plugins: [] } }
      try {
        return { status: 200, body: { available: true, plugins: readProfilePlugins(exe.profile, env) } }
      } catch (error) {
        return { status: 500, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }

    if (exe === undefined) return { status: 501, body: { error: 'desktop plugin CLI is not configured' } }

    if (method === 'POST' && path === '/omnimux/plugins') {
      const spec = req.body && typeof req.body === 'object' ? /** @type {{ spec?: unknown }} */ (req.body).spec : undefined
      try {
        const name = assertNpmSpec(typeof spec === 'string' ? spec : '')
        runDshPlugin({ args: ['add', name], env, spawn: deps.spawn })
        return { status: 200, body: { ok: true, plugins: readProfilePlugins(exe.profile, env) } }
      } catch (error) {
        return { status: 400, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }

    if (method === 'DELETE' && path.startsWith('/omnimux/plugins/')) {
      const name = decodeURIComponent(path.slice('/omnimux/plugins/'.length))
      try {
        assertRemovable(name)
        runDshPlugin({ args: ['remove', name], env, spawn: deps.spawn })
        return { status: 200, body: { ok: true, plugins: readProfilePlugins(exe.profile, env) } }
      } catch (error) {
        return { status: 400, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }

    return { status: 404, body: { error: 'not found' } }
  }

  return { dispatch }
}

/**
 * @param {{ register: (route: { kind: string, path: string, handler: Function }) => () => void }} webServer
 * @param {ReturnType<typeof createPluginDispatcher>} dispatcher
 */
export function registerPluginRoutes(webServer, dispatcher) {
  const disposers = [
    webServer.register({
    kind: 'prefix',
    path: '/omnimux/plugins',
    async handler(req, res) {
      try {
        const body = req.method === 'POST' ? await readJsonBody(req) : undefined
        if (req.method === 'POST' && body === null) {
          sendJson(res, 400, { error: 'invalid json' })
          return
        }
        const result = dispatcher.dispatch({
          method: req.method || 'GET',
          url: req.url || '/omnimux/plugins',
          body,
        })
        sendJson(res, result.status, result.body)
      } catch {
        sendJson(res, 500, { error: 'internal error' })
      }
    },
    }),
  ]
  return () => {
    for (const dispose of disposers) dispose()
  }
}
