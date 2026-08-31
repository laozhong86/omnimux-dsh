import { sendJson } from '../auth/http-routes.js'

/**
 * @param {{ register: (route: { kind: string, path: string, handler: Function }) => () => void }} webServer
 * @param {{ list: () => object }} deps
 */
export function registerCatalogRoutes(webServer, deps) {
  return webServer.register({
    kind: 'exact',
    path: '/omnimux/model-catalog',
    async handler(req, res) {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'GET') {
        sendJson(res, 404, { error: 'not found' })
        return
      }
      try {
        const body = typeof deps.list === 'function' ? deps.list() : null
        if (!body || typeof body !== 'object') {
          sendJson(res, 503, { error: 'catalog unavailable' })
          return
        }
        sendJson(res, 200, body)
      } catch {
        sendJson(res, 500, { error: 'internal error' })
      }
    },
  })
}
