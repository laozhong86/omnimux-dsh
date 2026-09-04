/**
 * Blank-session heuristics copied from the market composer (do NOT import market).
 * `hasAnySession` is this package's stricter gate so a missing header is not
 * treated as a reusable blank chat.
 */

function resolveDoc(doc, argsLength) {
  if (argsLength === 0) {
    return typeof document !== 'undefined' ? document : undefined
  }
  return doc
}

function resolveWindow(doc) {
  if (doc && doc.defaultView) return doc.defaultView
  if (typeof window !== 'undefined') return window
  return undefined
}

/**
 * Align with market composer.js. No document → true (SSR / unit tests).
 * Production is gated by `hasAnySession` first.
 * @param {Document | { querySelector?: Function } | null | undefined} [doc]
 * @returns {boolean}
 */
export function isBlankSession(doc) {
  const d = resolveDoc(doc, arguments.length)
  if (!d || typeof d.querySelector !== 'function') return true
  const header = d.querySelector('[data-slot="conversation.session.header"]')
  const title = (header && header.textContent) || ''
  if (/新会话|New session|Untitled/i.test(title)) return true
  const scroll = d.querySelector('[data-conversation-scroll]')
  if (!scroll) return true
  return (scroll.textContent || '').trim().length < 40
}

/**
 * True when a real conversation exists (header, sidebar row, or active id).
 * Missing chrome + `default` active id → false (noSession).
 * @param {Document | { querySelector?: Function, defaultView?: object } | null | undefined} [doc]
 * @returns {boolean}
 */
export function hasAnySession(doc) {
  const d = resolveDoc(doc, arguments.length)
  if (d && typeof d.querySelector === 'function') {
    if (d.querySelector('[data-slot="conversation.session.header"]')) return true
    if (d.querySelector('[role="treeitem"]')) return true
  }
  const win = resolveWindow(d)
  const getter = win && win.__omnimuxAttachments && win.__omnimuxAttachments.getActiveSessionId
  const id = typeof getter === 'function' ? getter.call(win.__omnimuxAttachments) : ''
  return Boolean(id) && String(id) !== 'default'
}
