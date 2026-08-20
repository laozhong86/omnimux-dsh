/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 */
export async function accountsRequest(path, opts = {}) {
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
 * @param {{ platform?: string, group?: string }} [filters]
 */
export function listAccounts(filters = {}) {
  const query = new URLSearchParams()
  if (filters.platform) query.set('platform', filters.platform)
  if (filters.group) query.set('group', filters.group)
  const suffix = query.toString() ? `?${query}` : ''
  return accountsRequest(`/omnimux/accounts${suffix}`)
}

/**
 * @param {string} platform
 */
export function connectAccount(platform) {
  return accountsRequest('/omnimux/accounts', { method: 'POST', body: { platform } })
}

/**
 * @param {string} id
 */
export function disconnectAccount(id) {
  return accountsRequest(`/omnimux/accounts/${encodeURIComponent(id)}`, { method: 'DELETE' })
}

/**
 * Updates Host-local account metadata (group / agent_usable).
 * @param {string} id
 * @param {{ group?: string | null, agent_usable?: boolean }} body
 */
export function patchAccount(id, body) {
  return accountsRequest(`/omnimux/accounts/${encodeURIComponent(id)}`, { method: 'PATCH', body })
}
