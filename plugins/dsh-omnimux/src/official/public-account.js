/** Strip official account payloads down to browser-safe fields. */

export const ACCOUNT_KEYS = Object.freeze([
  'id', 'platform', 'display_name', 'username', 'name', 'group', 'status',
])

/**
 * @param {unknown} raw
 */
export function pickAccount(raw) {
  const row = raw && typeof raw === 'object' && !Array.isArray(raw)
    ? /** @type {Record<string, unknown>} */ (raw)
    : {}
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const key of ACCOUNT_KEYS) {
    const value = row[key]
    if (value == null) continue
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      out[key] = value
    }
  }
  if (typeof row.id === 'number') out.id = String(row.id)
  const avatar = row.avatar_url
  if (typeof avatar === 'string' && /^https:\/\//i.test(avatar)) out.avatar_url = avatar
  return out
}

/**
 * @param {unknown} raw
 */
export function listFromPayload(raw) {
  if (Array.isArray(raw)) return raw
  if (!raw || typeof raw !== 'object') return []
  const row = /** @type {Record<string, unknown>} */ (raw)
  if (Array.isArray(row.accounts)) return row.accounts
  if (Array.isArray(row.data)) return row.data
  const data = row.data && typeof row.data === 'object' && !Array.isArray(row.data)
    ? /** @type {Record<string, unknown>} */ (row.data)
    : null
  if (data && Array.isArray(data.accounts)) return data.accounts
  if (data && Array.isArray(data.items)) return data.items
  return []
}

/**
 * @param {unknown} raw
 */
export function pickAccountsView(raw) {
  const accounts = listFromPayload(raw)
    .map(pickAccount)
    .filter((row) => typeof row.id === 'string' && row.id !== '')
  return { accounts }
}

/**
 * @param {unknown} raw
 */
export function pickConnectView(raw) {
  const row = raw && typeof raw === 'object' && !Array.isArray(raw)
    ? /** @type {Record<string, unknown>} */ (raw)
    : {}
  const nested = row.data && typeof row.data === 'object' && !Array.isArray(row.data)
    ? /** @type {Record<string, unknown>} */ (row.data)
    : {}
  const url = [row.auth_url, row.url, nested.auth_url, nested.url].find((value) => typeof value === 'string')
  if (typeof url === 'string' && /^https:\/\//i.test(url)) return { auth_url: url }
  return { auth_url: '' }
}

/**
 * @param {unknown} raw
 * @param {{ platform?: string, group?: string }} [filters]
 */
export function filterAccounts(raw, filters = {}) {
  const platform = typeof filters.platform === 'string' ? filters.platform.trim().toLowerCase() : ''
  const group = typeof filters.group === 'string' ? filters.group.trim().toLowerCase() : ''
  const view = pickAccountsView(raw)
  return {
    accounts: view.accounts.filter((row) => {
      if (platform && String(row.platform || '').toLowerCase() !== platform) return false
      if (group && String(row.group || '').toLowerCase() !== group) return false
      return true
    }),
  }
}
