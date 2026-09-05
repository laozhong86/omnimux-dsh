/**
 * Programmatic click of the official sidebar "新会话" control.
 * Aligns with conversation-box.js `shellNewSessionControl`. DOM click only.
 *
 * Collapsed rail: hub intercepts `button[class*=newSession]` (and the topbar
 * twin) and opens `#omnimux-sidebar-new-menu`. Real new-session happens only
 * after the "新建会话" menuitem click. This helper mirrors that gesture.
 */
export const NEW_SESSION_WAIT_MS = 1500
export const NEW_SESSION_POLL_MS = 50

const SESSION_MENU_RE = /新会话|新建会话|new session/i
const PROJECT_MENU_RE = /新建项目|create project|new project/i

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

function isTopbarNewSession(button) {
  if (!button) return false
  if (typeof button.getAttribute === 'function') {
    const value = button.getAttribute('data-omnimux-topbar-new-session')
    if (value != null && value !== 'false' && value !== '0') return true
  }
  if (typeof button.hasAttribute === 'function'
    && button.hasAttribute('data-omnimux-topbar-new-session')) {
    return true
  }
  if (typeof button.closest === 'function') {
    if (button.closest('[data-omnimux-topbar-new-session="1"]')) return true
    if (button.closest('[data-omnimux-topbar-new-session]')) return true
  }
  return false
}

function matchesOfficialNewSession(button) {
  if (!button || typeof button.getAttribute !== 'function') return false
  if (isTopbarNewSession(button)) return false
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
  const classHits = hits.filter((el) => String(el.className || '').includes('newSession'))
  const pool = classHits.length > 0 ? classHits : hits
  const visible = pool.find((el) => isVisible(el))
  return visible || pool[0]
}

function menuItemLabel(el) {
  if (!el) return ''
  const text = el.textContent
  if (text != null && String(text).trim()) return String(text).trim()
  if (typeof el.getAttribute === 'function') {
    return String(el.getAttribute('aria-label') || '').trim()
  }
  return ''
}

function isNewSessionMenuItem(el) {
  if (!el) return false
  const label = menuItemLabel(el)
  if (!label) return false
  if (PROJECT_MENU_RE.test(label)) return false
  return SESSION_MENU_RE.test(label)
}

function queryMenuItems(doc) {
  const d = resolveDoc(doc)
  if (!d) return []
  if (typeof d.querySelector === 'function') {
    const menu = d.querySelector('#omnimux-sidebar-new-menu')
    if (menu && typeof menu.querySelectorAll === 'function') {
      return Array.from(menu.querySelectorAll('[role="menuitem"]'))
    }
  }
  if (typeof d.querySelectorAll === 'function') {
    return Array.from(d.querySelectorAll('#omnimux-sidebar-new-menu [role="menuitem"]'))
  }
  return []
}

/**
 * Session row inside the collapsed-rail menu. Never the project item.
 * @param {Document | { querySelectorAll?: Function, querySelector?: Function } | null | undefined} [doc]
 * @returns {HTMLElement | null}
 */
export function findNewSessionMenuItem(doc) {
  return queryMenuItems(doc).find((el) => isNewSessionMenuItem(el)) || null
}

function clickIfPossible(el) {
  if (!el || typeof el.click !== 'function') return false
  el.click()
  return true
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

function openedNewSessionId(win, beforeId) {
  const afterId = readActiveSessionId(win)
  if (!afterId || afterId === 'default' || afterId === beforeId) return null
  return { ok: true, sessionId: afterId }
}

/**
 * Only `button.click()` / menuitem.click(). Never the sessions API.
 * Collapsed rail: click the already-open session menuitem, or click the
 * official `.newSession` then the session menuitem once the menu appears.
 * @param {{
 *   document?: unknown,
 *   window?: unknown,
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
  const timeoutMs = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : NEW_SESSION_WAIT_MS
  const pollMs = Number.isFinite(opts.pollMs) ? opts.pollMs : NEW_SESSION_POLL_MS
  const now = typeof opts.now === 'function' ? opts.now : () => Date.now()
  const sleep = typeof opts.sleep === 'function'
    ? opts.sleep
    : (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const beforeId = readActiveSessionId(win)
  let clickedMenu = clickIfPossible(findNewSessionMenuItem(doc))
  let clickedButton = false

  if (!clickedMenu) {
    const button = findNewSessionButton(doc)
    if (!button || typeof button.click !== 'function') {
      return { ok: false, error: 'newSessionFailed' }
    }
    button.click()
    clickedButton = true
    // Menu may open synchronously (collapsed rail interceptor).
    clickedMenu = clickIfPossible(findNewSessionMenuItem(doc))
  }

  const started = now()
  while (now() - started < timeoutMs) {
    if (!clickedMenu) {
      clickedMenu = clickIfPossible(findNewSessionMenuItem(doc))
    }
    const opened = openedNewSessionId(win, beforeId)
    if (opened) return opened
    await sleep(pollMs)
  }

  const opened = openedNewSessionId(win, beforeId)
  if (opened) return opened
  return { ok: false, error: 'newSessionFailed' }
}
