/**
 * Same mount as dsh-taskboard: inject a row under 新会话, not footer.action.
 * Plain DOM so React shell re-renders cannot drop a slot child.
 */

export const ENTRY_SELECTOR = '[data-omnimux-esc-entry]'

const ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.1"/><circle cx="11" cy="6" r="2.1"/><path d="M2.5 13c.6-2 2-3 3.5-3s2.9 1 3.5 3"/><path d="M9 13c.4-1.3 1.3-2 2.5-2s2 .6 2.5 2"/></svg>'

// Match official workspace session rows: 32px row / 14px label + 14px icon.
// Product rule: omnimux-dsh/docs/contracts/sidebar-extra-entries.md
const STYLES = `
.omnimux-esc-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-esc-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-esc-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-esc-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-esc-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-esc-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function injectStyles() {
  if (document.getElementById('omnimux-esc-entry-styles')) return
  const style = document.createElement('style')
  style.id = 'omnimux-esc-entry-styles'
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
  const node = entry.querySelector('.omnimux-esc-entry-label')
  if (node) node.textContent = label
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} gallery
 * @param {(key: string) => string} t
 */
function createEntry(gallery, t) {
  const entry = document.createElement('button')
  entry.type = 'button'
  entry.dataset.dshEscEntry = ''
  entry.className = 'omnimux-esc-entry'
  entry.innerHTML = `<span class="omnimux-esc-entry-icon">${ICON}</span><span class="omnimux-esc-entry-label"></span>`
  paintLabel(entry, t('nav'))
  entry.addEventListener('click', () => { gallery.toggle() })
  return entry
}

/**
 * Sit in the same block as 任务看板: after the family rows under 新会话.
 * @param {HTMLElement} root
 * @param {HTMLButtonElement} entry
 */
function placeEntry(root, entry) {
  const button = newSessionButton(root)
  if (button === undefined) return false
  if (entry.parentElement !== root) {
    const row = button.closest('[class*="logoRow"]')
    const base = (row instanceof HTMLElement && row.parentElement === root) ? row : button
    const family = [...root.children].filter(
      (el) => el instanceof HTMLElement && el.matches('[data-dsh-atb-entry], [data-dsh-taskboard-entry], [data-dsh-ssh-entry]'),
    )
    const apps = root.querySelector('[data-omnimux-apps-entry]')
    const last = family[family.length - 1]
    const after = last ?? (apps instanceof HTMLElement ? apps : base)
    const anchor = after.nextElementSibling
    root.insertBefore(entry, anchor === entry ? entry.nextElementSibling : anchor)
  }
  return true
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} gallery
 * @param {(key: string) => string} t
 * @param {{ subscribe?: (fn: () => void) => () => void }} [locale]
 */
export function mountSidebarEntry(gallery, t, locale) {
  injectStyles()
  const entry = createEntry(gallery, t)
  const paint = () => { paintLabel(entry, t('nav')) }
  const unsubscribeLocale = typeof locale?.subscribe === 'function' ? locale.subscribe(paint) : () => {}
  let root
  let placed = false

  const syncActive = () => {
    if (gallery.getSnapshot()) entry.dataset.active = 'true'
    else delete entry.dataset.active
  }

  const tryPlace = () => {
    if (root !== undefined && !root.isConnected) {
      rootObserver.disconnect()
      root = undefined
      placed = false
    }
    if (placed) {
      if (document.body.contains(entry)) return
      rootObserver.disconnect()
      root = undefined
      placed = false
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
    if (!root.contains(entry)) placed = placeEntry(root, entry)
  })

  const retry = setInterval(() => { tryPlace() }, 2000)
  const unsubscribe = gallery.subscribe(syncActive)
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
