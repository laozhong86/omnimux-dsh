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
        gate.ensureLogin({
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
 * @param {unknown} url
 */
export function hostMediaSrc(url) {
  if (typeof url !== 'string' || url === '') return ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('/omnimux/inspiration/media/')) return url
  if (url.startsWith('/api/inspiration/v1/media/')) {
    return `/omnimux/inspiration/media/${url.slice('/api/inspiration/v1/media/'.length)}`
  }
  return url
}
