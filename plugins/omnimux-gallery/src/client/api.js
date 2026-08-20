/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 */
export async function escFetch(path, opts = {}) {
  const method = opts.method || 'GET'
  const init = {
    method,
    headers: method === 'POST' ? { 'Content-Type': 'application/json' } : undefined,
    body: method === 'POST' ? JSON.stringify(opts.body ?? {}) : undefined,
  }
  const res = await fetch(path, init)
  const data = await res.json().catch(() => ({ error: 'invalid json' }))
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`)
  return data
}

export function loadCatalog() {
  return escFetch('/esc/catalog')
}

/**
 * @param {{ query?: string, category?: string, limit?: number, offset?: number }} [opts]
 */
export function searchHub(opts = {}) {
  const params = new URLSearchParams()
  if (opts.query) params.set('q', opts.query)
  if (opts.category) params.set('category', opts.category)
  if (opts.limit) params.set('limit', String(opts.limit))
  if (opts.offset) params.set('offset', String(opts.offset))
  return escFetch(`/esc/hub/search?${params.toString()}`)
}

/**
 * 安装 SkillHub 技能。走已加载的 skillhub 插件的本机 /skillhub HTTP 路由。
 * @param {string} slug
 */
export async function installHub(slug) {
  const res = await fetch('/skillhub', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ method: 'install', slug }),
  })
  const data = await res.json().catch(() => ({ error: 'invalid json' }))
  if (!res.ok) {
    const err = new Error(data.error || `HTTP ${res.status}`)
    if (res.status === 404) err.missingPlugin = true
    throw err
  }
  return data
}

/**
 * 列出已装 SkillHub 技能（走 skillhub 插件本机路由）。
 */
export async function listHub() {
  const res = await fetch('/skillhub', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ method: 'list' }),
  })
  const data = await res.json().catch(() => ({ error: 'invalid json' }))
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`)
  return data
}

/**
 * 卸载 SkillHub 技能。
 * @param {string} slug
 */
export async function uninstallHub(slug) {
  const res = await fetch('/skillhub', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ method: 'uninstall', slug }),
  })
  const data = await res.json().catch(() => ({ error: 'invalid json' }))
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`)
  return data
}

/**
 * @param {string} id
 */
export function installItem(id) {
  return escFetch('/esc/install', { method: 'POST', body: { id } })
}

/**
 * @param {string} id
 * @param {'blank' | 'locked'} sessionState
 */
export function summonItem(id, sessionState) {
  return escFetch('/esc/summon', { method: 'POST', body: { id, sessionState } })
}
