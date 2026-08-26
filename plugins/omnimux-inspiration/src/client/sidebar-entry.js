/**
 * 灵感库 row under 新会话, placed by the single sidebar coordinator
 * (window.__omnimuxSidebar from the omnimux hub).
 */

export const ENTRY_SELECTOR = '[data-omnimux-inspiration-entry]'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.833 4.813a2.52 2.52 0 0 1 2.521-2.521h6.875a2.52 2.52 0 0 1 2.521 2.52v12.375a2.52 2.52 0 0 1-2.52 2.521H4.353a2.52 2.52 0 0 1-2.52-2.52V4.813Zm2.521-.688h6.875c.38 0 .688.308.688.688v12.375c0 .38-.308.687-.688.687H4.354a.687.687 0 0 1-.687-.688V4.813c0-.38.307-.688.687-.688Z"/><path fill="currentColor" d="m20.9 7.428-1.65-.953v9.05l1.65-.953V7.428Zm-3.483-2.011-1.834-1.059v13.284l1.834-1.059V5.417Z"/></g></svg>'

const STYLES = `
.omnimux-inspiration-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-inspiration-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-inspiration-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-inspiration-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-inspiration-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-inspiration-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`

function paintLabel(entry, label) {
  entry.setAttribute('aria-label', label)
  const node = entry.querySelector('.omnimux-inspiration-entry-label')
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
  entry.dataset.omnimuxInspirationEntry = ''
  entry.className = 'omnimux-inspiration-entry'
  entry.innerHTML = `<span class="omnimux-inspiration-entry-icon">${ICON}</span><span class="omnimux-inspiration-entry-label"></span>`
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
    id: 'omnimux-inspiration-entry',
    rank: 7,
    styles: STYLES,
    styleId: 'omnimux-inspiration-entry-styles',
    create: () => entry,
  })

  return () => {
    unregister()
    unsubscribeStage()
    unsubscribeLocale()
  }
}
