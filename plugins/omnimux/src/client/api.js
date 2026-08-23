/**
 * Browser calls to the Host auth routes. Response parsing drops unknown keys.
 */

const PUBLIC_KEYS = [
  'logged_in', 'verified', 'base_url', 'id', 'username', 'display_name',
  'group', 'quota_usd', 'used_quota_usd', 'flow_id', 'verification_url',
  'user_code', 'expires_in', 'interval', 'kind', 'error',
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

/** Non-verify convenience used by the unified login gate's short path. */
export function getStatusCached() {
  return getStatus(false)
}

/** The Host uses this exact code to signal "sign in to OmniMux first". */
export const NEEDS_AUTH_CODE = 'needs-omnimux'

/**
 * Normalized "this call needs auth" detector. It accepts both the 401 status
 * and the `error` code so the client works regardless of the two Host route
 * formats (official maps `needs-omnimux` to a message body, avatar to a code).
 * @param {{ ok?: boolean, status?: number, body?: unknown }} result
 * @returns {string | null} the auth code when the call was rejected, else null.
 */
export function pickAuthError(result) {
  const body = result && typeof result.body === 'object' ? /** @type {Record<string, unknown>} */ (result.body) : null
  if (body && body.error === NEEDS_AUTH_CODE) return NEEDS_AUTH_CODE
  if (result && result.status === 401) return NEEDS_AUTH_CODE
  return null
}

/**
 * Wrap any `/omnimux/*` request so a 401 / needs-omnimux response triggers the
 * unified login gate, then replays the original call once the user signs in.
 * When the gate is unavailable (or the user cancels) the original result is
 * returned untouched. The replay bypasses the guard so a still-401 response
 * cannot recursively re-open the gate.
 * @param {(...args: any[]) => Promise<{ ok: boolean, status: number, body: unknown }>} fn
 * @returns {(...args: any[]) => Promise<{ ok: boolean, status: number, body: unknown }>}
 */
export function authGuard(fn) {
  return (...args) => {
    const run = async () => {
      const result = await fn(...args)
      if (pickAuthError(result) === null) return result
      const authGlobal = typeof window !== 'undefined' ? /** @type {any} */ (window).__omnimuxAuth : undefined
      if (!authGlobal || typeof authGlobal.ensureLogin !== 'function') return result
      return new Promise((resolve, reject) => {
        authGlobal.ensureLogin({
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

const TABS_KEYS = [
  'schema', 'tabs', 'error',
]

const TAB_ROW_KEYS = [
  'id', 'title', 'pinned', 'lastOpenedAt',
]

/**
 * Whitelist picker for the tabs view. Response parsing drops unknown keys.
 * @param {unknown} raw
 */
export function pickTabsView(raw) {
  const row = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {}
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const key of TABS_KEYS) {
    if (key in row) out[key] = row[key]
  }
  if (Array.isArray(out.tabs)) {
    out.tabs = out.tabs.map((item) => {
      const tab = item && typeof item === 'object' ? /** @type {Record<string, unknown>} */ (item) : {}
      /** @type {Record<string, unknown>} */
      const next = {}
      for (const key of TAB_ROW_KEYS) {
        if (key in tab) next[key] = tab[key]
      }
      return next
    })
  }
  return out
}

/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 */
export async function tabsRequest(path, opts = {}) {
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
  return { ok: response.ok, status: response.status, body: pickTabsView(json) }
}

export function getAppTabs() {
  return tabsRequest('/omnimux/apps/tabs')
}

/**
 * @param {string} id
 */
export function upsertAppTab(id) {
  return tabsRequest(`/omnimux/apps/tabs/${encodeURIComponent(id)}`, { method: 'POST' })
}

/**
 * @param {string} id
 * @param {{ pinned?: boolean, order?: 'top' }} body
 */
export function patchAppTab(id, body) {
  return tabsRequest(`/omnimux/apps/tabs/${encodeURIComponent(id)}`, { method: 'PATCH', body })
}

/**
 * @param {string} id
 */
export function removeAppTab(id) {
  return tabsRequest(`/omnimux/apps/tabs/${encodeURIComponent(id)}`, { method: 'DELETE' })
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
