import { jsonRequest } from './api-json.js'

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
  const result = await jsonRequest(path, {
    ...opts,
    pick: pickPublic,
    requireJson: true,
    notMounted: 'auth routes not mounted',
  })
  const dumped = JSON.stringify(result.body)
  if (typeof dumped === 'string' && /access_token|"sk-/.test(dumped)) {
    throw new Error('refused a secret-bearing auth payload')
  }
  return result
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
