import { createReadStream, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
import {
  handleAnalyze,
  handleBatchDelete,
  handleCreate,
  handleDeleteItem,
  handleGetItem,
  handleImportUrl,
  handleList,
  handlePatchItem,
} from './http-handlers.js'

export const LOCAL_PREFIX = '/omnimux/inspiration/local'

const CODE_MESSAGES = {
  'omnimux-unconfigured': 'OmniMux 未配置 API Key，请在 设置 → 个人资料 或凭据库中配置 OMNIMUX_API_KEY',
  'needs-omnimux': '需要登录 OmniMux 账号，请在 设置 → 个人资料 中登录',
}

const PLATFORM_PATTERNS = [
  { test: 'tiktok.com', platform: 'tiktok' },
  { test: 'instagram.com', platform: 'instagram' },
  { test: 'youtube.com', platform: 'youtube' },
  { test: 'youtu.be', platform: 'youtube' },
  { test: 'x.com', platform: 'x' },
  { test: 'twitter.com', platform: 'x' },
]

const MEDIA_TYPES = {
  mp4: 'video/mp4',
  webm: 'video/webm',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
}

const COLLECTION_ROUTES = { GET: 'list', POST: 'create' }
const ITEM_ROUTES = { GET: 'get', PATCH: 'patch', DELETE: 'delete' }
const ROUTE_HANDLERS = {
  list: handleList,
  create: handleCreate,
  'import-url': handleImportUrl,
  analyze: handleAnalyze,
  'batch-delete': handleBatchDelete,
  get: handleGetItem,
  patch: handlePatchItem,
  delete: handleDeleteItem,
}

function extractObjectMessage(obj) {
  const code = typeof obj.code === 'string' ? obj.code : ''
  let msg = ''
  if (typeof obj.message === 'string') msg = obj.message
  else if (typeof obj.error === 'string') msg = obj.error
  if (CODE_MESSAGES[code]) return CODE_MESSAGES[code]
  if (code && msg) return `[${code}] ${msg}`
  if (msg) return msg
  if (code) return `[${code}]`
  return stringifyUnknown(obj)
}

function stringifyUnknown(obj) {
  try {
    const serialized = JSON.stringify(obj)
    if (serialized && serialized !== '{}') return serialized
  } catch {
    return ''
  }
  return ''
}

/** Format any thrown error / object safely without [object Object]. */
export function formatErrorMessage(err) {
  if (!err) return '未知错误'
  if (typeof err === 'string') return err
  if (typeof err === 'object') {
    const extracted = extractObjectMessage(err)
    if (extracted) return extracted
  }
  return String(err)
}

/** Detect social platform from URL. */
export function detectPlatformFromUrl(url) {
  if (!url || typeof url !== 'string') return 'unknown'
  const lower = url.toLowerCase()
  const hit = PLATFORM_PATTERNS.find((entry) => lower.includes(entry.test))
  return hit ? hit.platform : 'unknown'
}

function parseJsonChunk(raw, resolve) {
  if (!raw.trim()) {
    resolve({})
    return
  }
  try {
    resolve(JSON.parse(raw))
  } catch {
    resolve(null)
  }
}

/** Read request body safely. */
export async function readJsonBody(req) {
  return new Promise((resolve) => {
    let raw = ''
    req.setEncoding('utf8')
    req.on('data', (chunk) => {
      raw += chunk
      if (raw.length > 2 * 1024 * 1024) resolve(null)
    })
    req.on('end', () => parseJsonChunk(raw, resolve))
    req.on('error', () => resolve(null))
  })
}

/** Send JSON HTTP response. */
export function sendJson(res, status, payload) {
  const json = JSON.stringify(payload)
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(json),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
  })
  res.end(json)
}

function isCollectionPath(path) {
  return path === LOCAL_PREFIX || path === `${LOCAL_PREFIX}/`
}

function parseAnalyzeId(path) {
  if (!path.startsWith(`${LOCAL_PREFIX}/`) || !path.endsWith('/analyze')) return ''
  return decodeURIComponent(path.slice(`${LOCAL_PREFIX}/`.length, -'/analyze'.length))
}

function parseItemId(path) {
  if (!path.startsWith(`${LOCAL_PREFIX}/`) || path === LOCAL_PREFIX) return ''
  const id = decodeURIComponent(path.slice(`${LOCAL_PREFIX}/`.length))
  if (!id || id.includes('/')) return ''
  return id
}

function notFoundRoute() {
  return { name: 'not-found' }
}

function matchCollection(method, path) {
  if (!isCollectionPath(path)) return null
  const name = COLLECTION_ROUTES[method]
  return name ? { name } : notFoundRoute()
}

const SPECIAL_PATHS = {
  [`${LOCAL_PREFIX}/import-url`]: { POST: 'import-url' },
  [`${LOCAL_PREFIX}/batch-delete`]: { POST: 'batch-delete', DELETE: 'batch-delete' },
}

function matchAnalyze(method, path) {
  if (method !== 'POST') return null
  const id = parseAnalyzeId(path)
  if (!id) return null
  return { name: 'analyze', id }
}

function matchSpecial(method, path) {
  const table = SPECIAL_PATHS[path]
  if (table) {
    const name = table[method]
    return name ? { name } : notFoundRoute()
  }
  return matchAnalyze(method, path)
}

function matchItem(method, path) {
  const id = parseItemId(path)
  const name = id ? ITEM_ROUTES[method] : ''
  if (!name) return notFoundRoute()
  return { name, id }
}

function matchRoute(method, path) {
  return matchCollection(method, path) || matchSpecial(method, path) || matchItem(method, path)
}

async function dispatchRequest(ctx, req) {
  const method = (req.method || 'GET').toUpperCase()
  const rawPath = req.url || LOCAL_PREFIX
  const url = new URL(rawPath, 'http://127.0.0.1')
  const route = matchRoute(method, url.pathname)
  const args = { ...ctx, req, url, id: route.id }
  try {
    return await runRoute(route.name, args)
  } catch (error) {
    const status = error.status || 500
    const message = error.message || String(error)
    return { status, body: { error: message } }
  }
}

function createDispatch(ctx) {
  return (req) => dispatchRequest(ctx, req)
}

async function streamLocalMedia(paths, req, res) {
  const url = new URL(req.url || LOCAL_PREFIX, 'http://127.0.0.1')
  const prefix = `${LOCAL_PREFIX}/media/`
  if (!url.pathname.startsWith(prefix)) {
    sendJson(res, 404, { error: 'not found' })
    return
  }
  const subpath = url.pathname.slice(prefix.length)
  if (!subpath || subpath.includes('..')) {
    sendJson(res, 400, { error: 'invalid path' })
    return
  }
  const filePath = join(paths.mediaDir, subpath)
  if (!existsSync(filePath)) {
    sendJson(res, 404, { error: 'file not found' })
    return
  }
  pipeMedia(req, res, filePath)
}

function createStreamer(paths) {
  return (req, res) => streamLocalMedia(paths, req, res)
}

async function runRoute(name, args) {
  const handler = ROUTE_HANDLERS[name]
  if (!handler) return { status: 404, body: { error: 'not found' } }
  return handler(args)
}

function pipeMedia(req, res, filePath) {
  const fileSize = statSync(filePath).size
  const range = req.headers?.range || req.headers?.Range
  const ext = filePath.split('.').pop()?.toLowerCase() || ''
  const contentType = MEDIA_TYPES[ext] || 'application/octet-stream'
  if (typeof range === 'string') {
    pipeRange({ res, filePath, fileSize, range, contentType })
    return
  }
  res.writeHead(200, {
    'Content-Length': fileSize,
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
  })
  createReadStream(filePath).pipe(res)
}

function pipeRange(opts) {
  const parts = opts.range.replace(/bytes=/, '').split('-')
  const start = parseInt(parts[0], 10)
  const end = parts[1] ? parseInt(parts[1], 10) : opts.fileSize - 1
  const file = createReadStream(opts.filePath, { start, end })
  opts.res.writeHead(206, {
    'Content-Range': `bytes ${start}-${end}/${opts.fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': (end - start) + 1,
    'Content-Type': opts.contentType,
  })
  file.pipe(opts.res)
}

/**
 * Create dispatcher for inspiration local endpoints.
 */
export function createLocalInspirationDispatcher(deps) {
  const store = deps.localStore
  const paths = store.paths
  const fetcher = deps.fetcher ?? fetch
  const ctx = {
    store,
    paths,
    socialFetcher: deps.socialFetcher,
    videoAnalyzeTool: deps.videoAnalyzeTool,
    fetcher,
    detectPlatformFromUrl,
    formatErrorMessage,
  }
  return {
    dispatch: createDispatch(ctx),
    streamLocalMedia: createStreamer(paths),
  }
}
