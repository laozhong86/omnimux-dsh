/**
 * fetch wrapper over the plugin's local HTTP routes. Every call resolves to
 * `{ ok, status, body }`; the UI only renders `body.error` / `body.message`.
 */

/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown }} [opts]
 * @returns {Promise<{ ok: boolean, status: number, body: any }>}
 */
export async function workflowRequest(path, opts = {}) {
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
 * Build manifest (canvas.js content hash) for cache-busting the island.
 * @returns {Promise<string | null>}
 */
export async function fetchCanvasHash() {
  try {
    const result = await workflowRequest('/dsh-workflow/api/manifest')
    const hash = result.body?.canvasHash
    return typeof hash === 'string' ? hash : null
  } catch {
    return null
  }
}
