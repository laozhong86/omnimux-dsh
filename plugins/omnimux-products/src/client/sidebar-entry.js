/**
 * 产品库 row under 新会话, placed by the single sidebar coordinator
 * (window.__omnimuxSidebar). Rank 6 — do not reorder older rows.
 */

export const ENTRY_SELECTOR = '[data-omnimux-products-entry]'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M12.841 15.1L12 13l-.841 2.1L9 15.292l1.64 1.489L10.146 19L12 17.821L13.854 19l-.494-2.219L15 15.292zM6 2h12v2H6zM4 6h16v2H4z"/><path fill="currentColor" d="M20 12v8H4v-8zm0-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"/></svg>'

const STYLES = `
.omnimux-products-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-products-entry:hover { background: var(--dsw-alias-interactive-bg-hover); }
.omnimux-products-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active); font-weight: 500; }
.omnimux-products-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-products-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-products-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function paintLabel(entry, label) {
  entry.setAttribute('aria-label', label)
  const node = entry.querySelector('.omnimux-products-entry-label')
  if (node) node.textContent = label
}

/**
 * @param {object} row
 * @returns {() => void}
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
 * @returns {() => void}
 */
export function mountSidebarEntry(stage, t, locale) {
  const entry = document.createElement('button')
  entry.type = 'button'
  entry.dataset.omnimuxProductsEntry = ''
  entry.className = 'omnimux-products-entry'
  entry.innerHTML = `<span class="omnimux-products-entry-icon">${ICON}</span><span class="omnimux-products-entry-label"></span>`
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
    id: 'omnimux-products-entry',
    rank: 8,
    styles: STYLES,
    styleId: 'omnimux-products-entry-styles',
    create: () => entry,
  })

  return () => {
    unregister()
    unsubscribeStage()
    unsubscribeLocale()
  }
}
