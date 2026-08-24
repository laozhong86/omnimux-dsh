/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 */
export async function inspirationRequest(path, opts = {}) {
  const response = await fetch(path, {
    method: opts.method ?? 'GET',
    headers: opts.body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
  })
  let json = {}
  try {
    json = await response.json()
  } catch {
    json = { error: `HTTP ${String(response.status)}` }
  }
  return { ok: response.ok, status: response.status, body: json }
}

/**
 * Wrap a Host call so a 401 pops the hub login gate, then replays once.
 * @param {(...args: any[]) => Promise<{ ok: boolean, status: number, body: any }>} fn
 */
export function authGuard(fn) {
  return (...args) => {
    const run = async () => {
      const result = await fn(...args)
      if (result.status !== 401) return result
      const gate = typeof window !== 'undefined' ? /** @type {any} */ (window).__omnimuxAuth : undefined
      if (!gate || typeof gate.ensureLogin !== 'function') return result
      return new Promise((resolve, reject) => {
        // forceVerify: a 401 means the cached "logged_in" may already be stale;
        // without verify the gate short-circuits and the page stays stuck.
        gate.ensureLogin({
          forceVerify: true,
          onSuccess: () => {
            fn(...args).then(resolve, reject)
          },
          onCancel: () => resolve(result),
        })
      })
    }
    return run()
  }
}

/**
 * @param {(api: any) => void} cb
 * @returns {() => void}
 */
export function whenAuthReady(cb) {
  if (typeof window === 'undefined') return () => {}
  let done = false
  const attempt = () => {
    if (done) return
    const api = window.__omnimuxAuth
    if (!api || typeof api.ensureLogin !== 'function') return
    done = true
    clearInterval(timer)
    cb(api)
  }
  const timer = setInterval(attempt, 500)
  attempt()
  return () => {
    done = true
    clearInterval(timer)
  }
}

/**
 * @param {{ type?: string, tag?: string, tags?: string, q?: string, is_favorite?: string, sort?: string, page?: number, page_size?: number }} [filters]
 */
export function listInspirations(filters = {}) {
  const query = new URLSearchParams()
  for (const key of ['type', 'tag', 'tags', 'q', 'is_favorite', 'sort', 'page', 'page_size']) {
    const value = filters[/** @type {keyof typeof filters} */ (key)]
    if (value == null || value === '') continue
    query.set(key, String(value))
  }
  const suffix = query.toString() ? `?${query}` : ''
  return inspirationRequest(`/omnimux/inspiration${suffix}`)
}

export const listInspirationsGuarded = authGuard(listInspirations)

export function listTags() {
  return inspirationRequest('/omnimux/inspiration/tags')
}

/**
 * Host-rewritten media path for <img src>. Absolute http(s) URLs pass through.
 * Bare keys (detail envelope) get the Host media prefix.
 * @param {unknown} url
 */
export function hostMediaSrc(url) {
  if (typeof url !== 'string' || url === '') return ''
  if (url.includes('..')) return ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('/omnimux/inspiration/media/')) return url
  if (url.startsWith('/api/inspiration/v1/media/')) {
    return `/omnimux/inspiration/media/${url.slice('/api/inspiration/v1/media/'.length)}`
  }
  return `/omnimux/inspiration/media/${url.replace(/^\/+/, '')}`
}

/**
 * @param {unknown} row
 */
export function pickCoverSrc(row) {
  if (!row || typeof row !== 'object') return ''
  const rec = /** @type {Record<string, unknown>} */ (row)
  return hostMediaSrc(rec.cover_key ?? rec.cover_url)
}

/**
 * Gateway seed covers are 1×1 JPEG stubs. Treat those as empty.
 * @param {number} width
 * @param {number} height
 */
export function isUsableCoverSize(width, height) {
  return Number(width) >= 8 && Number(height) >= 8
}

/**
 * @param {unknown} title
 */
export function coverGlyph(title) {
  const text = typeof title === 'string' ? title.trim() : ''
  return text.slice(0, 1) || '灵'
}

const TIKTOK_VIDEO_RE = /tiktok\.com\/@?[^/]+\/video\/(\d{15,25})/i
const TIKTOK_V_RE = /tiktok\.com\/v\/(\d{15,25})/i

/**
 * Extract TikTok video ID from a URL or raw string.
 * @param {unknown} url
 * @returns {string | null}
 */
export function extractTikTokVideoId(url) {
  if (typeof url !== 'string' || !url.trim()) return null
  const m = url.match(TIKTOK_VIDEO_RE) || url.match(TIKTOK_V_RE)
  if (m && m[1]) return m[1]
  return null
}

/**
 * Construct safe TikTok official embed player URL.
 * @param {unknown} sourceUrlOrId
 * @returns {string | null}
 */
export function resolveTikTokEmbedUrl(sourceUrlOrId) {
  if (!sourceUrlOrId) return null
  const raw = String(sourceUrlOrId).trim()
  if (/^\d{15,25}$/.test(raw)) {
    return `https://www.tiktok.com/player/v1/${raw}`
  }
  const id = extractTikTokVideoId(raw)
  return id ? `https://www.tiktok.com/player/v1/${id}` : null
}
