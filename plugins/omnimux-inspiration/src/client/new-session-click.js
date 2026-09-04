/**
 * Programmatic click of the official sidebar "新会话" control.
 * Aligns with conversation-box.js `shellNewSessionControl`. DOM click only.
 */
import { isBlankSession } from './is-blank-session.js'

export const NEW_SESSION_WAIT_MS = 1500
export const NEW_SESSION_POLL_MS = 50

function resolveDoc(doc) {
  if (doc) return doc
  return typeof document !== 'undefined' ? document : null
}

function resolveWindow(doc, win) {
  if (win) return win
  if (doc && doc.defaultView) return doc.defaultView
  if (typeof window !== 'undefined') return window
  return undefined
}

function isVisible(el) {
  if (!el) return false
  if (typeof el.getClientRects !== 'function') return true
  try {
    return el.getClientRects().length > 0
  } catch {
    return true
  }
}

function matchesOfficialNewSession(button) {
  if (!button || typeof button.getAttribute !== 'function') return false
  if (typeof button.closest === 'function') {
    if (button.closest('#omnimux-sidebar-new-menu')) return false
    if (button.closest('[role="treeitem"]')) return false
  }
  if (String(button.className || '').includes('newSession')) return true
  const aria = String(button.getAttribute('aria-label') || '').trim()
  return /^(新建会话|新会话|New session)$/i.test(aria)
}

/**
 * @param {Document | { querySelectorAll?: Function, querySelector?: Function } | null | undefined} [doc]
 * @returns {HTMLElement | null}
 */
export function findNewSessionButton(doc) {
  const d = resolveDoc(doc)
  if (!d) return null
  const list = typeof d.querySelectorAll === 'function'
    ? Array.from(d.querySelectorAll('button'))
    : (typeof d.querySelector === 'function' ? [d.querySelector('button')].filter(Boolean) : [])
  const hits = list.filter((el) => matchesOfficialNewSession(el))
  if (hits.length === 0) return null
  const visible = hits.find((el) => isVisible(el))
  return visible || hits[0]
}

function readActiveSessionId(win) {
  const getter = win && win.__omnimuxAttachments && win.__omnimuxAttachments.getActiveSessionId
  if (typeof getter !== 'function') return ''
  try {
    return String(getter.call(win.__omnimuxAttachments) || '')
  } catch {
    return ''
  }
}

/**
 * Only `button.click()`. Never the sessions API.
 * @param {{
 *   document?: unknown,
 *   window?: unknown,
 *   isBlank?: (doc?: unknown) => boolean,
 *   now?: () => number,
 *   sleep?: (ms: number) => Promise<void>,
 *   timeoutMs?: number,
 *   pollMs?: number,
 * }} [opts]
 * @returns {Promise<{ ok: true, sessionId?: string } | { ok: false, error: 'newSessionFailed' }>}
 */
export async function clickOfficialNewSession(opts = {}) {
  const doc = resolveDoc(opts.document)
  const win = resolveWindow(doc, opts.window)
  const button = findNewSessionButton(doc)
  if (!button || typeof button.click !== 'function') {
    return { ok: false, error: 'newSessionFailed' }
  }

  const beforeId = readActiveSessionId(win)
  button.click()

  const timeoutMs = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : NEW_SESSION_WAIT_MS
  const pollMs = Number.isFinite(opts.pollMs) ? opts.pollMs : NEW_SESSION_POLL_MS
  const now = typeof opts.now === 'function' ? opts.now : () => Date.now()
  const sleep = typeof opts.sleep === 'function'
    ? opts.sleep
    : (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const blank = typeof opts.isBlank === 'function' ? opts.isBlank : isBlankSession

  const started = now()
  while (now() - started < timeoutMs) {
    const afterId = readActiveSessionId(win)
    if (blank(doc) || (afterId && afterId !== beforeId)) {
      return { ok: true, sessionId: afterId && afterId !== 'default' ? afterId : undefined }
    }
    await sleep(pollMs)
  }

  const afterId = readActiveSessionId(win)
  if (blank(doc) || (afterId && afterId !== beforeId)) {
    return { ok: true, sessionId: afterId && afterId !== 'default' ? afterId : undefined }
  }
  return { ok: false, error: 'newSessionFailed' }
}
