import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { decorateCatalog, loadCatalog } from './catalog.js'
import { isSkillInstalled, searchSkills } from './hub.js'
import { installItem } from './install.js'
import { assertLocalWrite, readOriginHeaders } from './origin.js'
import { catalogRoot } from './catalog.js'
import { profileDir, resolveHome } from './paths.js'
import { summonItem } from './summon.js'

/**
 * @param {import('node:http').ServerResponse} res
 * @param {number} status
 * @param {unknown} body
 */
export function sendJson(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(body))
}

/**
 * @param {import('node:http').IncomingMessage} req
 */
export async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  if (chunks.length === 0) return {}
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
  } catch {
    return null
  }
}

/**
 * @param {{
 *   home?: string,
 *   profile?: string,
 *   packageRoot?: string,
 *   catalogPath?: string,
 * }} [deps]
 */
export function createDispatcher(deps = {}) {
  const home = resolveHome(deps.home)
  const profile = deps.profile || process.env.OMNIMUX_PLUGIN_PROFILE || 'omnimux'
  const packageRoot = deps.packageRoot || catalogRoot(deps.catalogPath).replace(/\/catalog$/, '')
  const catalogPath = deps.catalogPath

  function roots() {
    return { home, profileDir: profileDir(home, profile), packageRoot }
  }

  function catalog() {
    return loadCatalog(catalogPath)
  }

  /**
   * @param {{ method: string, url: string, origin?: string, referer?: string, secFetchSite?: string, body?: unknown }} req
   */
  async function dispatch(req) {
    const url = new URL(req.url, 'http://127.0.0.1')
    const method = req.method.toUpperCase()
    const path = url.pathname.replace(/\/$/, '') || '/'
    if (method === 'POST') {
      try {
        assertLocalWrite(req)
      } catch (error) {
        return { status: 403, body: { error: error instanceof Error ? error.message : String(error) } }
      }
    }
    try {
      if (method === 'GET' && path === '/esc/catalog') {
        return { status: 200, body: decorateCatalog(catalog(), roots()) }
      }
      if (method === 'GET' && path === '/esc/hub/search') {
        const query = String(url.searchParams.get('q') || '').trim()
        const category = String(url.searchParams.get('category') || '').trim()
        const limit = clamp(Number(url.searchParams.get('limit')) || 24, 1, 80)
        const offset = Math.max(0, Number(url.searchParams.get('offset')) || 0)
        const { items, total } = await searchSkills({ query, category, limit, offset })
        const home = roots().home
        return {
          status: 200,
          body: {
            total,
            offset,
            items: items.map((it) => ({ ...it, installed: isSkillInstalled(home, it.slug) })),
          },
        }
      }
      if (method === 'POST' && path === '/esc/install') {
        const id = String(/** @type {{ id?: string }} */ (req.body || {}).id || '')
        const result = installItem({ catalog: catalog(), id, ...roots() })
        return { status: 200, body: result }
      }
      if (method === 'POST' && path === '/esc/summon') {
        const body = /** @type {{ id?: string, sessionState?: string }} */ (req.body || {})
        const sessionState = body.sessionState === 'blank' ? 'blank' : 'locked'
        const result = summonItem({
          catalog: catalog(),
          id: String(body.id || ''),
          sessionState,
          ...roots(),
        })
        return { status: 200, body: result }
      }
    } catch (error) {
      return { status: 400, body: { error: error instanceof Error ? error.message : String(error) } }
    }
    return { status: 404, body: { error: 'not found' } }
  }

  return { dispatch, roots, catalog }
}

const AVATAR_NAME = /^[a-z0-9-]+\.png$/

/**
 * Serve a bundled expert avatar. GET only, read-only.
 * @param {ReturnType<typeof createDispatcher>} dispatcher
 * @param {import('node:http').IncomingMessage} req
 * @param {import('node:http').ServerResponse} res
 */
function serveAvatar(dispatcher, req, res) {
  const url = new URL(req.url || '/esc', 'http://127.0.0.1')
  const name = url.pathname.replace(/^\/esc\/avatars\//, '').replace(/\/$/, '')
  if (!AVATAR_NAME.test(name)) {
    sendJson(res, 404, { error: 'not found' })
    return
  }
  const { packageRoot } = dispatcher.roots()
  const file = join(packageRoot, 'catalog', 'avatars', name)
  if (!existsSync(file)) {
    sendJson(res, 404, { error: 'not found' })
    return
  }
  res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' })
  res.end(readFileSync(file))
}

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

/**
 * @param {{ register: (route: { kind: string, path: string, handler: Function }) => () => void }} webServer
 * @param {ReturnType<typeof createDispatcher>} dispatcher
 */
export function registerRoutes(webServer, dispatcher) {
  return webServer.register({
    kind: 'prefix',
    path: '/esc',
    async handler(req, res) {
      try {
        const method = req.method || 'GET'
        if (method.toUpperCase() === 'GET' && /^\/esc\/avatars\//.test(req.url || '')) {
          serveAvatar(dispatcher, req, res)
          return
        }
        const body = method.toUpperCase() === 'POST' ? await readJsonBody(req) : undefined
        if (method.toUpperCase() === 'POST' && body === null) {
          sendJson(res, 400, { error: 'invalid json' })
          return
        }
        const result = await dispatcher.dispatch({
          method,
          url: req.url || '/esc',
          ...readOriginHeaders(req),
          body,
        })
        sendJson(res, result.status, result.body)
      } catch {
        sendJson(res, 500, { error: 'internal error' })
      }
    },
  })
}
