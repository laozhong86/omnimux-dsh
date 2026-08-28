/**
 * Wait helper for the workflow client seam.
 * Inspiration never imports omnimux-workflow — it only reads window.
 */

export const WORKFLOW_GLOBAL_KEY = '__omnimuxWorkflow'
export const WORKFLOW_WAIT_MS = 4000
export const WORKFLOW_POLL_MS = 50

/**
 * @param {unknown} api
 * @returns {boolean}
 */
export function isWorkflowGlobalReady(api) {
  return Boolean(
    api
    && api.version === 1
    && typeof api.startReplicationProject === 'function',
  )
}

/**
 * @param {{
 *   getWindow?: () => any,
 *   now?: () => number,
 *   sleep?: (ms: number) => Promise<void>,
 *   timeoutMs?: number,
 *   pollMs?: number,
 * }} [opts]
 * @returns {Promise<object | null>}
 */
export async function waitForWorkflowGlobal(opts = {}) {
  const getWindow = typeof opts.getWindow === 'function'
    ? opts.getWindow
    : () => (typeof window !== 'undefined' ? window : undefined)
  const now = typeof opts.now === 'function' ? opts.now : () => Date.now()
  const sleep = typeof opts.sleep === 'function'
    ? opts.sleep
    : (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const timeoutMs = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : WORKFLOW_WAIT_MS
  const pollMs = Number.isFinite(opts.pollMs) ? opts.pollMs : WORKFLOW_POLL_MS

  const started = now()
  for (;;) {
    const win = getWindow()
    const api = win ? win[WORKFLOW_GLOBAL_KEY] : undefined
    if (isWorkflowGlobalReady(api)) return api
    if (now() - started >= timeoutMs) return null
    await sleep(pollMs)
  }
}
