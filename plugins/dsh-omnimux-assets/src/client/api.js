/**
 * fetch wrapper over the plugin's local HTTP routes. Every call resolves to
 * `{ ok, status, body }`; the UI only renders `body.error` / `body.message`.
 */

/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 * @returns {Promise<{ ok: boolean, status: number, body: any }>}
 */
export async function assetsRequest(path, opts = {}) {
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
 * Cheap polling state. Pass current revisions to get `unchanged: true`
 * when nothing moved; omit them for a full snapshot.
 * @param {number | undefined} [mrev]
 * @param {number | undefined} [arev]
 */
export function getState(mrev, arev) {
  const query = new URLSearchParams()
  if (Number.isFinite(/** @type {number} */ (mrev))) query.set('mrev', String(mrev))
  if (Number.isFinite(/** @type {number} */ (arev))) query.set('arev', String(arev))
  const suffix = query.toString() ? `?${query}` : ''
  return assetsRequest(`/omnimux/assets/state${suffix}`)
}

/**
 * @param {string} path
 * @param {string} name
 */
export function addMapping(path, name) {
  return assetsRequest('/omnimux/assets/mappings', { method: 'POST', body: { path, name } })
}

/**
 * @param {string} id
 * @param {string} name
 */
export function renameMapping(id, name) {
  return assetsRequest('/omnimux/assets/mappings/rename', { method: 'POST', body: { id, name } })
}

/**
 * Only deletes the registry record — real files stay untouched.
 * @param {string} id
 */
export function deleteMapping(id) {
  return assetsRequest('/omnimux/assets/mappings/delete', { method: 'POST', body: { id } })
}

/**
 * Open the OS chooser. Resolves { path } or { path: null } when cancelled.
 * @param {'file' | 'directory'} kind
 */
export function pickPath(kind) {
  return assetsRequest('/omnimux/assets/pick', { method: 'POST', body: { kind } })
}

/**
 * @param {string} id
 */
export function rescanMapping(id) {
  return assetsRequest('/omnimux/assets/mappings/rescan', { method: 'POST', body: { id } })
}

/**
 * @param {string} id
 * @param {string} [subPath] relative sub directory for drill-down ('' = root)
 */
export function listFiles(id, subPath = '') {
  const query = new URLSearchParams({ id })
  if (subPath !== '') query.set('path', subPath)
  return assetsRequest(`/omnimux/assets/mappings/files?${query}`)
}

/**
 * @param {string} [type]
 * @param {number | undefined} [arev]
 */
export function listArtifacts(type, arev) {
  const query = new URLSearchParams()
  if (type) query.set('type', type)
  if (Number.isFinite(/** @type {number} */ (arev))) query.set('arev', String(arev))
  const suffix = query.toString() ? `?${query}` : ''
  return assetsRequest(`/omnimux/assets/artifacts${suffix}`)
}

/**
 * @param {string} id
 */
export function artifactDetail(id) {
  return assetsRequest(`/omnimux/assets/artifacts/detail?id=${encodeURIComponent(id)}`)
}
