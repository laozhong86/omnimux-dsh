/**
 * 资产库 row under 新会话, placed by the single sidebar coordinator
 * (window.__omnimuxSidebar from the omnimux hub). The coordinator owns all
 * observers and ordering so multiple plugins cannot re-place rows into each
 * other (the dead-loop root cause). This module only describes the row and
 * its label/click behavior.
 */

export const ENTRY_SELECTOR = '[data-omnimux-assets-entry]'

const ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><path d="M1.5 6.5h13"/><path d="M5.5 6.5v7"/></svg>'

// Match official workspace session rows: 32px row / 14px label + 14px icon.
// Product rule: docs/contracts/sidebar-extra-entries.md
const STYLES = `
.omnimux-assets-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-assets-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-assets-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-assets-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-assets-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-assets-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function paintLabel(entry, label) {
  entry.setAttribute('aria-label', label)
  const node = entry.querySelector('.omnimux-assets-entry-label')
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
  entry.dataset.omnimuxAssetsEntry = ''
  entry.className = 'omnimux-assets-entry'
  entry.innerHTML = `<span class="omnimux-assets-entry-icon">${ICON}</span><span class="omnimux-assets-entry-label"></span>`
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
    id: 'omnimux-assets-entry',
    rank: 4,
    styles: STYLES,
    styleId: 'omnimux-assets-entry-styles',
    create: () => entry,
  })

  return () => {
    unregister()
    unsubscribeStage()
    unsubscribeLocale()
  }
}
