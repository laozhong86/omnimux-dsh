/**
 * 账号 row under 新会话, placed by the single sidebar coordinator
 * (window.__omnimuxSidebar from the omnimux hub). The coordinator owns all
 * observers and ordering so multiple plugins cannot re-place rows into each
 * other (the dead-loop root cause). This module only describes the row and
 * its label/click behavior.
 */

export const ENTRY_SELECTOR = '[data-omnimux-accounts-entry]'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M12.527 7c.551-2.024 2.29-3.486 4.473-3.643C19.556 3.173 23.335 3 28.5 3c5.133 0 8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.165-.173 8.944-.357 11.5c-.157 2.183-1.62 3.922-3.643 4.473"/><path d="M35.646 17.047c-.182-2.557-2.136-4.51-4.694-4.693C28.397 12.17 24.632 12 19.5 12c-5.133 0-8.897.171-11.452.354c-2.558.182-4.512 2.136-4.694 4.694C3.17 19.602 3 23.367 3 28.5s.171 8.897.354 11.453c.182 2.557 2.136 4.51 4.694 4.693c2.555.183 6.32.354 11.452.354c5.133 0 8.897-.171 11.452-.354c2.558-.182 4.512-2.136 4.694-4.694c.183-2.555.354-6.32.354-11.452c0-5.133-.171-8.897-.354-11.453"/><path d="M24.026 30.727a7 7 0 1 0-8.066-.01c-2.496.933-4.485 2.709-5.5 4.92c-.646 1.405.16 3.087 1.704 3.18l.044.003a150 150 0 0 0 7.77.18c3.309 0 5.874-.081 7.77-.18l.045-.003c1.543-.093 2.35-1.775 1.704-3.18c-1.012-2.203-2.989-3.974-5.471-4.91"/></g></svg>'

// Match official workspace session rows: 32px row / 14px label + 14px icon.
// Product rule: docs/contracts/sidebar-extra-entries.md
const STYLES = `
.omnimux-accounts-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-accounts-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-accounts-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-accounts-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-accounts-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-accounts-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function paintLabel(entry, label) {
  entry.setAttribute('aria-label', label)
  const node = entry.querySelector('.omnimux-accounts-entry-label')
  if (node) node.textContent = label
}

/**
 * Register a row with the hub's sidebar coordinator, retrying until the hub
 * client has installed the global. The coordinator owns all placement, so the
 * retry here only calls register() once successfully — it never re-places
 * rows, so it cannot feed the cross-plugin cascade.
 * @param {object} row
 * @returns {() => void} disposer (safe before registration)
 */
function registerWhenReady(row) {
  let unregister = () => {}
  let disposed = false
  const attempt = () => {
    if (disposed) return
    const api = window.__omnimuxSidebar
    if (!api || typeof api.register !== 'function') return
    unregister = api.register(row)
    clearInterval(timer)
  }
  const timer = setInterval(attempt, 500)
  attempt()
  return () => {
    disposed = true
    clearInterval(timer)
    unregister()
  }
}

/**
 * @param {{ getSnapshot: () => boolean, subscribe: (fn: () => void) => () => void, toggle: () => void }} stage
 * @param {(key: string) => string} t
 * @param {{ subscribe?: (fn: () => void) => () => void }} [locale]
 * @returns {() => void} disposer
 */
export function mountSidebarEntry(stage, t, locale) {
  const entry = document.createElement('button')
  entry.type = 'button'
  entry.dataset.omnimuxAccountsEntry = ''
  entry.className = 'omnimux-accounts-entry'
  entry.innerHTML = `<span class="omnimux-accounts-entry-icon">${ICON}</span><span class="omnimux-accounts-entry-label"></span>`
  paintLabel(entry, t('nav'))
  entry.addEventListener('click', () => { stage.toggle() })

  const paint = () => { paintLabel(entry, t('nav')) }
  const unsubscribeLocale = typeof locale?.subscribe === 'function' ? locale.subscribe(paint) : () => {}
  const syncActive = () => {
    if (stage.getSnapshot()) entry.dataset.active = 'true'
    else delete entry.dataset.active
  }
  const unsubscribeStage = stage.subscribe(syncActive)
  syncActive()

  const unregister = registerWhenReady({
    id: 'omnimux-accounts-entry',
    rank: 3,
    styles: STYLES,
    styleId: 'omnimux-accounts-entry-styles',
    create: () => entry,
  })

  return () => {
    unregister()
    unsubscribeStage()
    unsubscribeLocale()
  }
}
