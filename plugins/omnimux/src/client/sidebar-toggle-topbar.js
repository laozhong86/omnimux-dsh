/**
 * Relocate the left-sidebar toggle into the topbar (traffic-light safe inset →
 * toggle → workbench tab bar). Plugin CSS + DOM only — never touch harness
 * packages, better-sidebar, middle-pane hide toggle, or conversation collapse
 * APIs.
 *
 * The official AppFrame toggle is trapped in the sidebar's low stacking context
 * (logoRow z-index 11 inside a transformed fixed shell), so it cannot be fixed
 * over the full-width workbench tab bar (better-sidebar subtree stacks above
 * the app root). Instead we inject our OWN toggle button as a child of the
 * better-sidebar `tabBar` (guaranteed on top + hit-testable) and drive the
 * official sidebar action by programmatically clicking the (hidden) official
 * button. Icons + blue-dot mirror the collapse flag on `<html>`.
 */

export const SIDEBAR_TOGGLE_TOPBAR_ATTR = 'data-omnimux-sidebar-toggle-topbar'
export const SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR = 'data-omnimux-sidebar-toggle-topbar'
export const LEFT_COLLAPSED_HTML_ATTR = 'data-omnimux-left-collapsed'
/** Marks the hidden official AppFrame toggle used as the programmatic trigger. */
export const SIDEBAR_ORIGINAL_TOGGLE_ATTR = 'data-omnimux-original-sidebar-toggle'

/** Traffic-light safe width (darwin titlebar inset) + small gap before toggle
 *  while the rail is collapsed. When the rail expands, the toggle moves to the
 *  sidebar's top-right corner (measured width minus the toggle size/margin). */
export const TOPBAR_TOGGLE_LEFT_PX = 84
export const TOPBAR_TOGGLE_SIZE_PX = 32
export const TOPBAR_TOGGLE_GAP_PX = 8
export const TOPBAR_TOGGLE_RIGHT_MARGIN_PX = 8
export const TOPBAR_TOGGLE_TOP_PX = 4
export const TOPBAR_TOGGLE_Z_INDEX = 9999

const TOGGLE_ARIA_LABELS = Object.freeze([
  '打开侧边栏',
  '收起侧边栏',
  'Open sidebar',
  'Collapse sidebar',
])

/** Shown while the sidebar is expanded (action = collapse). */
const COLLAPSE_ICON_SVG = `<svg data-omnimux-sidebar-toggle-icon="collapse" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2.5" width="12" height="11" rx="2"/><line x1="6.8" y1="2.5" x2="6.8" y2="13.5"/><path d="M11.5 8h-1.3"/><path d="M11.4 6.9l-1.2 1.1 1.2 1.1"/></svg>`

/** Shown while the sidebar is collapsed (action = expand). */
const EXPAND_ICON_SVG = `<svg data-omnimux-sidebar-toggle-icon="expand" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2.5" width="12" height="11" rx="2"/><line x1="6.8" y1="2.5" x2="6.8" y2="13.5"/><path d="M9.8 8h1.3"/><path d="M9.9 6.9l1.2 1.1-1.2 1.1"/></svg>`

/**
 * @param {Document | null | undefined} doc
 * @returns {HTMLElement | null}
 */
export function findOfficialSidebarToggle(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  // Never match our own injected topbar toggle (would cause click recursion).
  const notInjected = `:not([${SIDEBAR_TOGGLE_TOPBAR_ATTR}])`
  for (const label of TOGGLE_ARIA_LABELS) {
    const byAria = doc.querySelector(`button[aria-label="${label}"]${notInjected}`)
    if (byAria instanceof HTMLElement) return byAria
  }
  const fallback = doc.querySelector(
    `[class*="sidebarCol"] [class*="logoRow"] [class*="toggle"]${notInjected}, [class*="sidebarCol"] [class*="logoRow"] button[class*="toggle"]${notInjected}`,
  )
  if (fallback instanceof HTMLElement) return fallback
  return null
}

/**
 * @param {Document | null | undefined} doc
 * @returns {Element | null}
 */
export function findSidebarCollapsedHost(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  const column = doc.querySelector(
    '[data-pane="sidebar"], [class*="sidebarCol"], .dshDesktopSidebarSurface, [class*="dshDesktopSidebarSurface"]',
  )
  if (column && typeof column.closest === 'function') {
    try {
      const marked = column.closest('[data-sidebar-collapsed]')
      if (marked) return marked
    } catch {
      // ignore
    }
  }
  return doc.querySelector(
    '[class*="frame"][data-sidebar-collapsed], .dshDesktopFrame[data-sidebar-collapsed], [data-sidebar-collapsed]',
  )
}

/**
 * @param {Document | null | undefined} doc
 * @returns {boolean}
 */
export function isLeftSidebarCollapsed(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return false
  const column = doc.querySelector(
    '[data-pane="sidebar"], [class*="sidebarCol"], .dshDesktopSidebarSurface, [class*="dshDesktopSidebarSurface"]',
  )
  if (column && typeof column.closest === 'function') {
    try {
      if (column.closest('[data-sidebar-collapsed]')) return true
    } catch {
      // ignore
    }
  }
  return Boolean(
    doc.querySelector(
      '[class*="frame"][data-sidebar-collapsed], .dshDesktopFrame[data-sidebar-collapsed]',
    ),
  )
}

/**
 * Mirror frame `data-sidebar-collapsed` onto html for icon + blue-dot CSS.
 * @param {Document | null | undefined} doc
 * @returns {boolean}
 */
export function syncLeftCollapsedHtmlAttr(doc) {
  const root = doc?.documentElement
  if (!root || typeof root.setAttribute !== 'function') return false
  const collapsed = isLeftSidebarCollapsed(doc)
  if (collapsed) root.setAttribute(LEFT_COLLAPSED_HTML_ATTR, '')
  else root.removeAttribute(LEFT_COLLAPSED_HTML_ATTR)
  return collapsed
}

/**
 * Visible right workbench panel (not the hidden off-screen clone, not the
 * bottom drawer, not panelBody/Resize). Used to dock tab labels to overlap
 * with the topbar toggle instead of a collapsed-boolean padding hack.
 * @param {Document | null | undefined} doc
 * @returns {Element | null}
 */
export function findVisibleWorkbenchPanel(doc) {
  if (!doc || typeof doc.querySelectorAll !== 'function') return null
  const vw = (() => {
    try {
      const w = doc.defaultView?.innerWidth
      return typeof w === 'number' && w > 0 ? w : 1e9
    } catch {
      return 1e9
    }
  })()
  const scoped = doc.querySelectorAll('[data-dsh-better-sidebar] [class*="panel"]')
  const nodes = scoped.length ? scoped : doc.querySelectorAll('[class*="panel"]')
  for (const el of nodes) {
    const cls = typeof el.className === 'string' ? el.className : String(el.className || '')
    // Official right panel class fragment is `_panel` (CSS-module hashed).
    if (!/(^|[\s_])panel($|[\s_])/i.test(cls)) continue
    if (/panelHidden|bottomPanel|panelResize|panelBody|panelHost/i.test(cls)) continue
    try {
      const box = el.getBoundingClientRect?.()
      if (!box) continue
      if (box.width > 40 && box.height > 40 && box.left < vw - 8) return el
    } catch {
      // ignore
    }
  }
  return null
}

/**
 * Single chrome layout snapshot. Tab padding is the horizontal overlap
 * between the fixed toggle and the visible workbench panel — NOT a function
 * of the collapsed boolean alone (collapsed+split must not shove tabs right).
 * @param {Document | null | undefined} doc
 * @returns {{
 *   collapsed: boolean,
 *   leftRailW: number,
 *   toggleLeft: number,
 *   toggleEnd: number,
 *   panelLeft: number | null,
 *   tabPadLeft: number,
 * }}
 */
export function computeChromeLayout(doc) {
  const collapsed = isLeftSidebarCollapsed(doc)
  let leftRailW = 0
  if (!collapsed) {
    const col = findSidebarColumn(doc)
    if (col) {
      try {
        leftRailW = col.offsetWidth || Math.round(col.getBoundingClientRect().width) || 0
      } catch {
        leftRailW = 0
      }
    }
  }
  const toggleLeft = collapsed
    ? TOPBAR_TOGGLE_LEFT_PX
    : Math.max(TOPBAR_TOGGLE_LEFT_PX, Math.round(leftRailW - TOPBAR_TOGGLE_SIZE_PX - TOPBAR_TOGGLE_RIGHT_MARGIN_PX))
  const toggleEnd = toggleLeft + TOPBAR_TOGGLE_SIZE_PX + TOPBAR_TOGGLE_GAP_PX
  const panel = findVisibleWorkbenchPanel(doc)
  let panelLeft = null
  if (panel) {
    try {
      panelLeft = Math.round(panel.getBoundingClientRect().left)
    } catch {
      panelLeft = null
    }
  }
  const tabPadLeft = panelLeft == null ? 0 : Math.max(0, toggleEnd - panelLeft)
  return { collapsed, leftRailW, toggleLeft, toggleEnd, panelLeft, tabPadLeft }
}

/**
 * Where the topbar toggle sits horizontally (CSS px). Collapsed rail → a small
 * top-left offset (over the full-width tab bar). Expanded rail → the sidebar's
 * top-right corner (measured sidebar width minus toggle size + margin).
 * @param {Document | null | undefined} doc
 * @returns {number}
 */
export function computeToggleLeftPx(doc) {
  return computeChromeLayout(doc).toggleLeft
}

/**
 * Left padding the open workbench tabBar needs so labels clear the fixed toggle.
 * Zero when the panel already starts to the right of toggleEnd (split / expanded).
 * @param {Document | null | undefined} doc
 * @returns {number}
 */
export function computeTabBarPadLeft(doc) {
  return computeChromeLayout(doc).tabPadLeft
}

/**
 * The official left sidebar column (the width we dock the toggle against).
 * @param {Document | null | undefined} doc
 * @returns {Element | null}
 */
export function findSidebarColumn(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector('[class*="sidebarCol"], [data-pane="sidebar"]')
}

/**
 * Write geometry CSS variables used by tabBar padding and the fixed toggle.
 * @param {Document | null | undefined} doc
 * @param {{ left?: number, size?: number, gap?: number, top?: number }} [geom]
 */
export function applyTopbarToggleCssVars(doc, geom = {}) {
  const root = doc?.documentElement
  if (!root?.style?.setProperty) return
  const layout = computeChromeLayout(doc)
  const left = typeof geom.left === 'number' ? geom.left : layout.toggleLeft
  const size = typeof geom.size === 'number' ? geom.size : TOPBAR_TOGGLE_SIZE_PX
  const gap = typeof geom.gap === 'number' ? geom.gap : TOPBAR_TOGGLE_GAP_PX
  const top = typeof geom.top === 'number' ? geom.top : TOPBAR_TOGGLE_TOP_PX
  const end = left + size + gap
  const tabPad = typeof geom.tabPadLeft === 'number' ? geom.tabPadLeft : layout.tabPadLeft
  root.style.setProperty('--omnimux-topbar-toggle-left', `${left}px`)
  root.style.setProperty('--omnimux-topbar-toggle-size', `${size}px`)
  root.style.setProperty('--omnimux-topbar-toggle-gap', `${gap}px`)
  root.style.setProperty('--omnimux-topbar-toggle-top', `${top}px`)
  root.style.setProperty('--omnimux-topbar-toggle-end', `${end}px`)
  root.style.setProperty('--omnimux-tabbar-pad-left', `${Math.max(0, Math.round(tabPad))}px`)
}

/**
 * The better-sidebar workbench tab bar is the highest-stacking chrome in the
 * workspace; a fixed toggle child of it is guaranteed on top + clickable.
 * @param {Document | null | undefined} doc
 * @returns {Element | null}
 */
export function findTopbarAnchor(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return (
    doc.querySelector('[data-dsh-better-sidebar] [class*="tabBar"], [class*="tabBar"], [data-dsh-better-sidebar]')
  )
}

/**
 * Inject (idempotently) our own topbar toggle button into the better-sidebar
 * tab bar. Its click drives the official button's programmatic click.
 * @param {Document | null | undefined} doc
 * @returns {HTMLElement | null}
 */
export function injectTopbarToggleButton(doc) {
  const anchor = findTopbarAnchor(doc)
  if (!anchor) return null
  let btn = doc.querySelector(`[${SIDEBAR_TOGGLE_TOPBAR_ATTR}="1"]`)
  if (!btn) {
    btn = doc.createElement('button')
    btn.setAttribute('type', 'button')
    btn.setAttribute(SIDEBAR_TOGGLE_TOPBAR_ATTR, '1')
    btn.setAttribute('aria-label', '收起侧边栏')
    btn.innerHTML = COLLAPSE_ICON_SVG + EXPAND_ICON_SVG
    btn.addEventListener('click', () => {
      const official = findOfficialSidebarToggle(doc)
      if (official) official.click()
    })
    anchor.appendChild(btn)
  }
  applyButtonChrome(btn)
  return btn
}

/**
 * Defense in depth: inline no-drag + z-index + pointer-events (CSS also sets
 * these; Electron app-region needs no-drag + a high z-index to be clickable).
 * @param {HTMLElement} btn
 */
function applyButtonChrome(btn) {
  const inlineChrome = [
    `-webkit-app-region:no-drag`,
    `z-index:${TOPBAR_TOGGLE_Z_INDEX}`,
    'pointer-events:auto',
  ].join(';')
  try {
    btn.style.setProperty('-webkit-app-region', 'no-drag', 'important')
    btn.style.setProperty('z-index', String(TOPBAR_TOGGLE_Z_INDEX), 'important')
    btn.style.setProperty('pointer-events', 'auto', 'important')
  } catch {
    // ignore
  }
  try {
    const prev = btn.getAttribute('style') || ''
    if (!/-webkit-app-region\s*:\s*no-drag/i.test(prev)) {
      btn.setAttribute('style', `${prev};${inlineChrome}`.replace(/^;/, ''))
    }
  } catch {
    // ignore
  }
}

/**
 * Hide the official AppFrame toggle (it is only used as the programmatic
 * trigger). Also mark it so its own React onClick still fires on .click().
 * @param {Document | null | undefined} doc
 * @returns {HTMLElement | null}
 */
function hideOriginalToggle(doc) {
  const btn = findOfficialSidebarToggle(doc)
  if (!btn) return null
  btn.setAttribute(SIDEBAR_ORIGINAL_TOGGLE_ATTR, '1')
  try {
    btn.style.setProperty('display', 'none', 'important')
  } catch {
    // ignore
  }
  return btn
}

/**
 * Wire the topbar toggle + collapsed mirror. Returns the injected toggle button.
 * @param {Document | null | undefined} doc
 * @returns {HTMLElement | null}
 */
export function ensureSidebarToggleTopbar(doc) {
  if (!doc?.documentElement) return null
  const root = doc.documentElement
  root.setAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR, '')
  applyTopbarToggleCssVars(doc)
  const collapsed = syncLeftCollapsedHtmlAttr(doc)
  hideOriginalToggle(doc)
  const btn = injectTopbarToggleButton(doc)
  // Guard against the observer's aria-label attribute filter: setting the same
  // value would still fire a MutationRecord and loop forever.
  if (btn) {
    const label = collapsed ? '打开侧边栏' : '收起侧边栏'
    if (btn.getAttribute('aria-label') !== label) btn.setAttribute('aria-label', label)
  }
  return btn
}

/**
 * Install MutationObserver to keep the injected toggle present and collapsed
 * attr mirrored. Re-applies whenever the official toggle or tab bar re-renders.
 * @param {Document | null | undefined} [doc]
 * @returns {() => void}
 */
export function installSidebarToggleTopbar(doc = typeof document !== 'undefined' ? document : undefined) {
  if (!doc) return () => {}
  ensureSidebarToggleTopbar(doc)

  /** @type {MutationObserver | null} */
  let stateObserver = null
  /** @type {ResizeObserver | null} */
  let widthObserver = null
  /** @type {((this: Window, ev: UIEvent) => void) | null} */
  let resizeListener = null

  // Track the CURRENT sidebar column AND the visible workbench panel.
  // React re-creates both on state flips; a stale ResizeObserver never fires,
  // which used to leave tabs parked at the window's right edge until some
  // unrelated mutation. Tab pad is overlap(toggleEnd, panel.left), recomputed
  // every resize frame.
  const syncGeometry = () => {
    try { applyTopbarToggleCssVars(doc) } catch { /* ignore */ }
    try {
      const api = doc.defaultView?.__omnimuxWorkbench
      if (api && typeof api.syncGuiWidth === 'function') api.syncGuiWidth()
    } catch { /* ignore — layout only; never flip mid-pane */ }
  }
  let observedCol = null
  let observedPanel = null
  const retarget = (next, prev) => {
    if (typeof ResizeObserver === 'undefined') return prev
    if (!next || next === prev) return prev || next
    if (widthObserver && prev) {
      try { widthObserver.unobserve(prev) } catch { /* ignore */ }
    }
    if (!widthObserver) widthObserver = new ResizeObserver(syncGeometry)
    try { widthObserver.observe(next) } catch { /* ignore */ }
    return next
  }
  const ensureObserveTargets = () => {
    observedCol = retarget(findSidebarColumn(doc), observedCol)
    observedPanel = retarget(findVisibleWorkbenchPanel(doc), observedPanel)
  }

  if (typeof MutationObserver !== 'undefined') {
    stateObserver = new MutationObserver(() => {
      ensureSidebarToggleTopbar(doc)
      ensureObserveTargets()
    })
    const host = doc.body || doc.documentElement
    if (host) {
      stateObserver.observe(host, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-sidebar-collapsed', 'aria-label', 'class'],
      })
    }
  }
  ensureObserveTargets()
  try {
    const win = doc.defaultView
    if (win?.addEventListener) {
      resizeListener = () => { syncGeometry() }
      win.addEventListener('resize', resizeListener)
    }
  } catch { /* ignore */ }

  return () => {
    if (stateObserver) {
      try { stateObserver.disconnect() } catch { /* ignore */ }
      stateObserver = null
    }
    if (widthObserver) {
      try { widthObserver.disconnect() } catch { /* ignore */ }
      widthObserver = null
    }
    if (resizeListener) {
      try { doc.defaultView?.removeEventListener?.('resize', resizeListener) } catch { /* ignore */ }
      resizeListener = null
    }
    const root = doc.documentElement
    if (root) {
      root.removeAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR)
      root.removeAttribute(LEFT_COLLAPSED_HTML_ATTR)
      for (const k of ['--omnimux-topbar-toggle-left', '--omnimux-topbar-toggle-size', '--omnimux-topbar-toggle-gap', '--omnimux-topbar-toggle-top', '--omnimux-topbar-toggle-end', '--omnimux-tabbar-pad-left']) {
        try { root.style.removeProperty(k) } catch { /* ignore */ }
      }
    }
    const injected = doc.querySelector?.(`[${SIDEBAR_TOGGLE_TOPBAR_ATTR}="1"]`)
    if (injected instanceof HTMLElement) {
      try { injected.remove() } catch { /* ignore */ }
    }
    const official = doc.querySelector?.(`[${SIDEBAR_ORIGINAL_TOGGLE_ATTR}="1"]`)
    if (official instanceof HTMLElement) {
      official.removeAttribute(SIDEBAR_ORIGINAL_TOGGLE_ATTR)
      try { official.style.removeProperty('display') } catch { /* ignore */ }
    }
  }
}
