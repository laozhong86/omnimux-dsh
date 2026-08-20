/**
 * Sidebar row under 新会话: same mount mechanism as the hub's sidebar-entry.js
 * (sidebarRoot / newSessionButton probing + double MutationObserver + 2s retry
 * + unmount cleanup). Placement: after the assets entry, then after the ESC
 * entry, then after the taskboard entry, then right after 新会话.
 */

const ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="4" cy="4" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="4" cy="12" r="2"/><path d="M5.8 4.9 10 7.1M10 8.9 5.8 11.1"/></svg>'

// Match official workspace session rows: 32px row / 14px label + 14px icon.
// Product rule: docs/contracts/sidebar-extra-entries.md
const STYLES = `
.dsh-workflow-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.dsh-workflow-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.dsh-workflow-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.dsh-workflow-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.dsh-workflow-entry svg { display: block; width: 14px; height: 14px; }
.dsh-workflow-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function injectStyles() {
  if (document.getElementById('dsh-workflow-entry-styles')) return
  const style = document.createElement('style')
  style.id = 'dsh-workflow-entry-styles'
  style.textContent = STYLES
  document.head.append(style)
}

function sidebarRoot() {
  const column = document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]')
  if (!(column instanceof HTMLElement)) return undefined
  const logoOwner = column.querySelector('[class*="logoRow"]')?.parentElement
  return logoOwner ?? (column.firstElementChild instanceof HTMLElement ? column.firstElementChild : undefined)
}

function newSessionButton(root) {
  const nested = root.querySelector('button[class*="newSession"]')
  if (nested instanceof HTMLButtonElement) return nested
  for (const child of root.children) {
    if (child instanceof HTMLButtonElement) return child
  }
  const byAria = root.querySelector(
    'button[aria-label="新建会话"], button[aria-label="New Session"], button[aria-label*="新会话"], button[aria-label*="new session" i]',
  )
  if (byAria instanceof HTMLButtonElement) return byAria
  return [...root.querySelectorAll('button')].find((button) => /新会话|新建会话|new session/i.test(button.textContent ?? ''))
}

/**
 * Default placement: after the assets row (if present), else after the ESC
 * row, else after the taskboard row, else right after 新会话.
 * @param {HTMLElement} root
 */
function anchorRow(root) {
  const assets = root.querySelector('[data-omnimux-assets-entry]')
  if (assets instanceof HTMLElement) return assets
  const esc = root.querySelector('[data-dsh-esc-entry]')
  if (esc instanceof HTMLElement) return esc
  const taskboard = root.querySelector('[data-dsh-taskboard-entry]')
  if (taskboard instanceof HTMLElement) return taskboard
  return newSessionButton(root)
}

/**
 * @param {HTMLButtonElement} entry
 * @param {string} label
 */
function paintLabel(entry, label) {
  entry.setAttribute('aria-label', label)
  const node = entry.querySelector('.dsh-workflow-entry-label')
  if (node) node.textContent = label
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} stage
 * @param {(key: string) => string} t
 */
function createEntry(stage, t) {
  const entry = document.createElement('button')
  entry.type = 'button'
  entry.dataset.dshWorkflowEntry = ''
  entry.className = 'dsh-workflow-entry'
  entry.innerHTML = `<span class="dsh-workflow-entry-icon">${ICON}</span><span class="dsh-workflow-entry-label"></span>`
  paintLabel(entry, t('nav'))
  entry.addEventListener('click', () => { stage.toggle() })
  return entry
}

/**
 * Keep this row placed after the anchor under 新会话.
 * @param {HTMLElement} root
 * @param {HTMLButtonElement} entry
 */
function placeEntry(root, entry) {
  const anchor = anchorRow(root)
  if (anchor === undefined) return false
  if (entry.previousElementSibling === anchor && entry.parentElement === root) return true
  anchor.after(entry)
  return true
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} stage
 * @param {(key: string) => string} t
 * @param {{ subscribe?: (fn: () => void) => () => void }} [locale]
 * @returns {() => void} disposer
 */
export function mountSidebarEntry(stage, t, locale) {
  injectStyles()
  const entry = createEntry(stage, t)
  const paint = () => { paintLabel(entry, t('nav')) }
  const unsubscribeLocale = typeof locale?.subscribe === 'function' ? locale.subscribe(paint) : () => {}
  let root
  let placed = false

  const syncActive = () => {
    if (stage.getSnapshot()) entry.dataset.active = 'true'
    else delete entry.dataset.active
  }

  const tryPlace = () => {
    if (root !== undefined && !root.isConnected) {
      rootObserver.disconnect()
      root = undefined
      placed = false
    }
    if (placed) {
      if (!document.body.contains(entry)) {
        rootObserver.disconnect()
        root = undefined
        placed = false
      } else if (root !== undefined) {
        const anchor = anchorRow(root)
        if (anchor !== undefined && entry.previousElementSibling === anchor && entry.parentElement === root) return
        placed = false
      }
    }
    root ??= sidebarRoot()
    if (root === undefined) return
    placed = placeEntry(root, entry)
    if (placed) rootObserver.observe(root, { childList: true, subtree: true })
  }

  const waitObserver = new MutationObserver(() => { tryPlace() })
  waitObserver.observe(document.body, { childList: true, subtree: true })

  const rootObserver = new MutationObserver(() => {
    if (root === undefined || !root.isConnected) {
      placed = false
      tryPlace()
      return
    }
    if (!root.contains(entry) || entry.previousElementSibling !== anchorRow(root)) {
      placed = placeEntry(root, entry)
    }
  })

  const retry = setInterval(() => { tryPlace() }, 2000)
  const unsubscribe = stage.subscribe(syncActive)
  syncActive()
  tryPlace()

  return () => {
    clearInterval(retry)
    waitObserver.disconnect()
    rootObserver.disconnect()
    unsubscribe()
    unsubscribeLocale()
    entry.remove()
  }
}
