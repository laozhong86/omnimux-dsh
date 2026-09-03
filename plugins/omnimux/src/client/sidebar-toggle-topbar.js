/**
 * Relocate the official left-sidebar toggle into the topbar (traffic-light
 * safe inset → toggle → workbench tab bar). Plugin CSS + DOM only — never
 * touch harness packages, better-sidebar, middle-pane hide toggle, or
 * conversation collapse APIs.
 */

export const SIDEBAR_TOGGLE_TOPBAR_ATTR = 'data-omnimux-sidebar-toggle-topbar'
export const SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR = 'data-omnimux-sidebar-toggle-topbar'
export const LEFT_COLLAPSED_HTML_ATTR = 'data-omnimux-left-collapsed'

/** Traffic-light safe width (darwin titlebar inset) + small gap before toggle. */
export const TOPBAR_TOGGLE_LEFT_PX = 78
export const TOPBAR_TOGGLE_SIZE_PX = 36
export const TOPBAR_TOGGLE_GAP_PX = 8
export const TOPBAR_TOGGLE_TOP_PX = 4
export const TOPBAR_TOGGLE_Z_INDEX = 50

const TOGGLE_ARIA_LABELS = Object.freeze([
  '打开侧边栏',
  '收起侧边栏',
  'Open sidebar',
  'Collapse sidebar',
])

/**
 * @param {Document | null | undefined} doc
 * @returns {HTMLElement | null}
 */
export function findOfficialSidebarToggle(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  for (const label of TOGGLE_ARIA_LABELS) {
    const byAria = doc.querySelector(`button[aria-label="${label}"]`)
    if (byAria instanceof HTMLElement) return byAria
  }
  const fallback = doc.querySelector(
    '[class*="sidebarCol"] [class*="logoRow"] [class*="toggle"], [class*="sidebarCol"] [class*="logoRow"] button[class*="toggle"]',
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
 * Mirror frame `data-sidebar-collapsed` onto html for blue-dot CSS.
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
 * Write geometry CSS variables used by tabBar padding and fixed toggle.
 * @param {Document | null | undefined} doc
 * @param {{ left?: number, size?: number, gap?: number }} [geom]
 */
export function applyTopbarToggleCssVars(doc, geom = {}) {
  const root = doc?.documentElement
  if (!root?.style?.setProperty) return
  const left = typeof geom.left === 'number' ? geom.left : TOPBAR_TOGGLE_LEFT_PX
  const size = typeof geom.size === 'number' ? geom.size : TOPBAR_TOGGLE_SIZE_PX
  const gap = typeof geom.gap === 'number' ? geom.gap : TOPBAR_TOGGLE_GAP_PX
  const end = left + size + gap
  root.style.setProperty('--omnimux-topbar-toggle-left', `${left}px`)
  root.style.setProperty('--omnimux-topbar-toggle-size', `${size}px`)
  root.style.setProperty('--omnimux-topbar-toggle-gap', `${gap}px`)
  root.style.setProperty('--omnimux-topbar-toggle-end', `${end}px`)
}

/**
 * Mark the official toggle and lift it into the topbar via CSS.
 * @param {Document | null | undefined} doc
 * @returns {HTMLElement | null}
 */
export function ensureSidebarToggleTopbar(doc) {
  if (!doc?.documentElement) return null
  const root = doc.documentElement
  root.setAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR, '')
  applyTopbarToggleCssVars(doc)
  syncLeftCollapsedHtmlAttr(doc)

  const btn = findOfficialSidebarToggle(doc)
  if (!btn) return null
  if (btn.getAttribute(SIDEBAR_TOGGLE_TOPBAR_ATTR) !== '1') {
    btn.setAttribute(SIDEBAR_TOGGLE_TOPBAR_ATTR, '1')
  }
  // Defense in depth: inline no-drag + z-index (CSS also sets these).
  // Electron app-region needs no-drag + z-index≥50; jsdom drops vendor-prefixed
  // CSSOM writes, so also stamp the attribute string for tests / stubborn hosts.
  const inlineChrome = [
    '-webkit-app-region:no-drag',
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
  return btn
}

/**
 * Install MutationObserver to keep the toggle marked and collapsed attr mirrored.
 * @param {Document | null | undefined} [doc]
 * @returns {() => void}
 */
export function installSidebarToggleTopbar(doc = typeof document !== 'undefined' ? document : undefined) {
  if (!doc) return () => {}
  ensureSidebarToggleTopbar(doc)

  /** @type {MutationObserver | null} */
  let observer = null
  if (typeof MutationObserver !== 'undefined') {
    observer = new MutationObserver(() => {
      ensureSidebarToggleTopbar(doc)
    })
    const host = doc.body || doc.documentElement
    if (host) {
      observer.observe(host, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-sidebar-collapsed', 'aria-label', 'class'],
      })
    }
  }

  return () => {
    if (observer) {
      try { observer.disconnect() } catch { /* ignore */ }
      observer = null
    }
    const root = doc.documentElement
    if (root) {
      root.removeAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR)
      root.removeAttribute(LEFT_COLLAPSED_HTML_ATTR)
      try {
        root.style.removeProperty('--omnimux-topbar-toggle-left')
        root.style.removeProperty('--omnimux-topbar-toggle-size')
        root.style.removeProperty('--omnimux-topbar-toggle-gap')
        root.style.removeProperty('--omnimux-topbar-toggle-end')
      } catch { /* ignore */ }
    }
    const marked = doc.querySelector?.(`[${SIDEBAR_TOGGLE_TOPBAR_ATTR}="1"]`)
    if (marked instanceof HTMLElement) {
      marked.removeAttribute(SIDEBAR_TOGGLE_TOPBAR_ATTR)
    }
  }
}
