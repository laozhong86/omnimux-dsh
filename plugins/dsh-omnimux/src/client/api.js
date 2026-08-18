/**
 * Browser calls to the Host auth routes. Response parsing drops unknown keys.
 */

const PUBLIC_KEYS = [
  'logged_in', 'verified', 'base_url', 'id', 'username', 'display_name',
  'group', 'quota_usd', 'used_quota_usd', 'flow_id', 'verification_url',
  'user_code', 'expires_in', 'interval', 'kind', 'error',
  'identity', 'videoGenerate', 'imageGenerate', 'textComplete', 'official',
]

/**
 * @param {unknown} raw
 */
export function pickPublic(raw) {
  const row = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {}
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const key of PUBLIC_KEYS) {
    if (key in row) out[key] = row[key]
  }
  return out
}

/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 */
export async function authRequest(path, opts = {}) {
  const response = await fetch(path, {
    method: opts.method ?? 'GET',
    headers: opts.body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
  })
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('json')) {
    return {
      ok: false,
      status: response.status,
      body: { error: response.status === 404 ? 'auth routes not mounted' : `unexpected ${contentType || 'response'}` },
    }
  }
  let json = null
  try {
    json = await response.json()
  } catch {
    json = {}
  }
  const body = pickPublic(json)
  if (typeof JSON.stringify(body) === 'string' && /access_token|"sk-/.test(JSON.stringify(body))) {
    throw new Error('refused a secret-bearing auth payload')
  }
  return { ok: response.ok, status: response.status, body }
}

export function getStatus(verify = false) {
  return authRequest(verify ? '/omnimux/auth/status?verify=1' : '/omnimux/auth/status')
}

export function startLogin() {
  return authRequest('/omnimux/auth/login', { method: 'POST' })
}

/**
 * @param {string} flowId
 */
export function pollLogin(flowId) {
  return authRequest('/omnimux/auth/poll', { method: 'POST', body: { flow_id: flowId } })
}

export function logout() {
  return authRequest('/omnimux/auth/logout', { method: 'POST' })
}

export function getCapabilities() {
  return authRequest('/omnimux/capabilities')
}

const APP_KEYS = [
  'schema', 'source', 'stale', 'fetched_at', 'refresh', 'error', 'apps',
]

const APP_ROW_KEYS = [
  'id', 'title', 'summary', 'kind', 'capabilities', 'client', 'spec', 'state', 'install_spec',
]

/**
 * @param {unknown} raw
 */
export function pickAppsView(raw) {
  const row = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {}
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const key of APP_KEYS) {
    if (key in row) out[key] = row[key]
  }
  if (Array.isArray(out.apps)) {
    out.apps = out.apps.map((item) => {
      const app = item && typeof item === 'object' ? /** @type {Record<string, unknown>} */ (item) : {}
      /** @type {Record<string, unknown>} */
      const next = {}
      for (const key of APP_ROW_KEYS) {
        if (key in app) next[key] = app[key]
      }
      return next
    })
  }
  return out
}

/**
 * @param {string} path
 * @param {{ method?: string }} [opts]
 */
export async function appsRequest(path, opts = {}) {
  const response = await fetch(path, { method: opts.method ?? 'GET' })
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('json')) {
    return {
      ok: false,
      status: response.status,
      body: { error: response.status === 404 ? 'apps routes not mounted' : `unexpected ${contentType || 'response'}` },
    }
  }
  let json = null
  try {
    json = await response.json()
  } catch {
    json = {}
  }
  return { ok: response.ok, status: response.status, body: pickAppsView(json) }
}

export function getApps() {
  return appsRequest('/omnimux/apps')
}

export function refreshApps() {
  return appsRequest('/omnimux/apps/refresh', { method: 'POST' })
}

/**
 * @param {string} spec
 */
export async function installApp(spec) {
  const response = await fetch('/omnimux/plugins', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ spec }),
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
 * @param {string} name
 */
export async function uninstallApp(name) {
  const response = await fetch(`/omnimux/plugins/${encodeURIComponent(name)}`, { method: 'DELETE' })
  let json = {}
  try {
    json = await response.json()
  } catch {
    json = { error: `HTTP ${String(response.status)}` }
  }
  return { ok: response.ok, status: response.status, body: json }
}
