/**
 * Same mount as dsh-taskboard: a row under 新会话, not footer.action.
 * Always sits immediately after 新会话 so 任务看板 cannot jump in front.
 */

export const ENTRY_SELECTOR = '[data-dsh-omnimux-apps-entry]'

const ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="1.5" y="1.5" width="5" height="5" rx="1"/><rect x="9.5" y="1.5" width="5" height="5" rx="1"/><rect x="1.5" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/></svg>'

// Match official workspace session rows: 32px row / 14px label + 14px icon.
// Product rule: docs/contracts/sidebar-extra-entries.md
const STYLES = `
.dsh-omnimux-apps-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.dsh-omnimux-apps-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.dsh-omnimux-apps-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.dsh-omnimux-apps-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.dsh-omnimux-apps-entry svg { display: block; width: 14px; height: 14px; }
.dsh-omnimux-apps-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function injectStyles() {
  if (document.getElementById('dsh-omnimux-apps-entry-styles')) return
  const style = document.createElement('style')
  style.id = 'dsh-omnimux-apps-entry-styles'
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
 * @param {HTMLButtonElement} entry
 * @param {string} label
 */
function paintLabel(entry, label) {
  entry.setAttribute('aria-label', label)
  const node = entry.querySelector('.dsh-omnimux-apps-entry-label')
  if (node) node.textContent = label
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} apps
 * @param {(key: string) => string} t
 */
function createEntry(apps, t) {
  const entry = document.createElement('button')
  entry.type = 'button'
  entry.dataset.dshOmnimuxAppsEntry = ''
  entry.className = 'dsh-omnimux-apps-entry'
  entry.innerHTML = `<span class="dsh-omnimux-apps-entry-icon">${ICON}</span><span class="dsh-omnimux-apps-entry-label"></span>`
  paintLabel(entry, t('plugins.nav'))
  entry.addEventListener('click', () => { apps.toggle() })
  return entry
}

/**
 * Keep this row the first extra under 新会话 (above 任务看板).
 * @param {HTMLElement} root
 * @param {HTMLButtonElement} entry
 */
function placeEntry(root, entry) {
  const button = newSessionButton(root)
  if (button === undefined) return false
  if (entry.previousElementSibling === button && entry.parentElement === root) return true
  const next = button.nextElementSibling
  root.insertBefore(entry, next === entry ? entry.nextElementSibling : next)
  return true
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} apps
 * @param {(key: string) => string} t
 * @param {{ subscribe?: (fn: () => void) => () => void }} [locale]
 */
export function mountSidebarEntry(apps, t, locale) {
  injectStyles()
  const entry = createEntry(apps, t)
  const paint = () => { paintLabel(entry, t('plugins.nav')) }
  const unsubscribeLocale = typeof locale?.subscribe === 'function' ? locale.subscribe(paint) : () => {}
  let root
  let placed = false

  const syncActive = () => {
    if (apps.getSnapshot()) entry.dataset.active = 'true'
    else delete entry.dataset.active
  }

  const tryPlace = () => {
    if (root !== undefined && !root.isConnected) {
      rootObserver.disconnect()
      root = undefined
      placed = false
    }
    if (placed) {
      if (document.body.contains(entry) && entry.previousElementSibling && /新会话|新建会话|new session/i.test(entry.previousElementSibling.getAttribute?.('aria-label') || entry.previousElementSibling.textContent || '')) {
        return
      }
      if (!document.body.contains(entry)) {
        rootObserver.disconnect()
        root = undefined
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
    if (!root.contains(entry) || entry.previousElementSibling !== newSessionButton(root)) {
      placed = placeEntry(root, entry)
    }
  })

  const retry = setInterval(() => { tryPlace() }, 2000)
  const unsubscribe = apps.subscribe(syncActive)
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
