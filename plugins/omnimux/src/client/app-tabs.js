/**
 * Sidebar tab rows for opened Apps. Same DOM-injection skeleton as
 * sidebar-entry.js; metrics are the contract rows
 * (docs/contracts/sidebar-extra-entries.md). The container sits right after
 * the fixed 应用 row and stays empty (no gap) until an app is opened.
 */

import { PRODUCT_STAGE_EVENT } from './conversation-box.js'
import { openApp } from './open-app.js'
import { TABS_CHANGED_EVENT } from './open-app-flow.js'
import { getAppTabs, patchAppTab, removeAppTab } from './api.js'

export const TABS_CONTAINER_SELECTOR = '[data-omnimux-app-tabs]'

const ICON_ACCOUNTS = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="5.2" r="2.4"/><path d="M3.4 13c.6-2.4 2.3-3.6 4.6-3.6s4 1.2 4.6 3.6" stroke-linecap="round"/></svg>'

const ICON_DEFAULT = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25" aria-hidden="true"><rect x="1.5" y="1.5" width="5" height="5" rx="1"/><rect x="9.5" y="1.5" width="5" height="5" rx="1"/><rect x="1.5" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/></svg>'

// Match official workspace session rows: 32px row / 14px label + 14px icon.
// Product rule: docs/contracts/sidebar-extra-entries.md
const STYLES = `
[data-omnimux-app-tabs]{display:flex;flex-direction:column;}
.omnimux-app-tab {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-app-tab:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-app-tab[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-app-tab-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-app-tab svg { display: block; width: 14px; height: 14px; }
.omnimux-app-tab-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
.omnimux-app-tab-pin { flex: none; font-size: 10px; line-height: 1; }
.omnimux-app-tab-actions { position: absolute; top: 0; right: 6px; height: 32px; display: flex; align-items: center; gap: 2px; opacity: 0; }
.omnimux-app-tab:hover .omnimux-app-tab-actions,
.omnimux-app-tab:focus-within .omnimux-app-tab-actions { opacity: 1; }
.omnimux-app-tab-action {
  box-sizing: border-box; display: grid; place-items: center;
  width: 22px; height: 22px; padding: 0; border: none; border-radius: 6px;
  background: transparent; color: var(--dsw-alias-label-secondary, inherit);
  font: inherit; font-size: 12px; line-height: 1; cursor: pointer;
}
.omnimux-app-tab-action:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); color: var(--dsw-alias-label-primary, inherit); }
.omnimux-app-tab[data-pinned="true"] .omnimux-app-tab-action[data-kind="pin"] { color: var(--dsw-alias-state-business-primary, #4c8dff); }
`

/**
 * View rows → render models. Pure so tests cover the mapping.
 * @param {{ tabs?: unknown } | null | undefined} view
 * @returns {Array<{ id: string, title: string, pinned: boolean, lastOpenedAt: string }>}
 */
export function tabRowModel(view) {
  const tabs = view && typeof view === 'object' && Array.isArray(view.tabs) ? view.tabs : []
  /** @type {Array<{ id: string, title: string, pinned: boolean, lastOpenedAt: string }>} */
  const rows = []
  for (const item of tabs) {
    const tab = item && typeof item === 'object' ? /** @type {Record<string, unknown>} */ (item) : {}
    const id = typeof tab.id === 'string' ? tab.id : ''
    if (id === '') continue
    rows.push({
      id,
      title: typeof tab.title === 'string' && tab.title !== '' ? tab.title : id,
      pinned: tab.pinned === true,
      lastOpenedAt: typeof tab.lastOpenedAt === 'string' ? tab.lastOpenedAt : '',
    })
  }
  return rows
}

/**
 * Keep the tab container immediately after the fixed 应用 row (above 任务看板).
 * Duck-typed so tests can drive it with fake elements.
 * @param {{ parentElement?: unknown, nextElementSibling?: unknown } | null | undefined} entry
 * @param {Element} container
 */
export function placeTabsContainer(entry, container) {
  const parent = entry?.parentElement
  if (!parent || typeof parent.insertBefore !== 'function') return false
  if (entry.nextElementSibling === container) return true
  parent.insertBefore(container, entry.nextElementSibling ?? null)
  return true
}

/**
 * @param {string} id
 */
function iconFor(id) {
  return id === 'accounts' ? ICON_ACCOUNTS : ICON_DEFAULT
}

/**
 * Row is a div (not a button) because it contains the hover action buttons;
 * role/tabIndex keep it keyboard reachable.
 * @param {{ id: string, title: string, pinned: boolean }} model
 */
function createTabRow(model) {
  const row = document.createElement('div')
  row.className = 'omnimux-app-tab'
  row.dataset.dshOmnimuxAppTab = model.id
  row.setAttribute('role', 'button')
  row.setAttribute('tabindex', '0')
  if (model.pinned) row.dataset.pinned = 'true'
  row.innerHTML = `
    ${model.pinned ? '<span class="omnimux-app-tab-pin" aria-hidden="true">\u{1F4CC}</span>' : ''}
    <span class="omnimux-app-tab-icon" aria-hidden="true">${iconFor(model.id)}</span>
    <span class="omnimux-app-tab-label"></span>
    <span class="omnimux-app-tab-actions">
      <button type="button" class="omnimux-app-tab-action" data-kind="top">\u2B06</button>
      <button type="button" class="omnimux-app-tab-action" data-kind="pin">\u{1F4CC}</button>
      <button type="button" class="omnimux-app-tab-action" data-kind="remove">\u2715</button>
    </span>`
  return row
}

/**
 * @param {Element} row
 * @param {string} kind
 * @param {string} label
 * @param {string} glyph
 */
function paintAction(row, kind, label, glyph) {
  const action = row.querySelector(`[data-kind="${kind}"]`)
  if (!(action instanceof HTMLElement)) return
  action.title = label
  action.setAttribute('aria-label', label)
  action.textContent = glyph
}

/**
 * @param {{ getSnapshot?: Function }} [locale]
 * @param {(key: string) => string} t
 */
export function mountAppTabs(t, locale, register) {
  const container = document.createElement('div')
  container.dataset.dshOmnimuxAppTabs = ''
  /** @type {Array<{ id: string, title: string, pinned: boolean, lastOpenedAt: string }>} */
  let rows = []

  const modelFor = (id) => rows.find((row) => row.id === id)

  function syncActive() {
    const stage = document.documentElement.dataset.dshProductStage
    for (const row of container.children) {
      const id = row instanceof Element ? row.getAttribute('data-omnimux-app-tab') : null
      if (typeof stage === 'string' && stage !== '' && id !== null && stage === `omnimux-app-${id}`) {
        row.dataset.active = 'true'
      } else {
        delete row.dataset.active
      }
    }
  }

  function render() {
    container.replaceChildren()
    for (const model of rows) {
      const row = createTabRow(model)
      const label = row.querySelector('.omnimux-app-tab-label')
      if (label) label.textContent = model.title
      row.setAttribute('aria-label', model.title)
      paintAction(row, 'remove', t('plugins.tab.remove'), '\u2715')
      paintAction(row, 'pin', model.pinned ? t('plugins.tab.unpin') : t('plugins.tab.pin'), '\u{1F4CC}')
      paintAction(row, 'top', t('plugins.tab.top'), '\u2B06')
      container.append(row)
    }
    syncActive()
  }

  function refresh() {
    return getAppTabs().then((result) => {
      if (!result.ok) return
      rows = tabRowModel(result.body)
      render()
    }).catch(() => {})
  }

  function runPatch(id, body) {
    void patchAppTab(id, body).then((result) => {
      if (result.ok) void refresh()
    }).catch(() => {})
  }

  function onClick(event) {
    const target = event.target
    if (!(target instanceof Element)) return
    const row = target.closest('[data-omnimux-app-tab]')
    if (!(row instanceof Element)) return
    const id = row.getAttribute('data-omnimux-app-tab') ?? ''
    if (id === '') return
    const action = target.closest('[data-omnimux-app-tab-action]')
    if (action instanceof Element) {
      const kind = action.getAttribute('data-kind')
      if (kind === 'remove') {
        void removeAppTab(id).then((result) => {
          if (result.ok) void refresh()
        }).catch(() => {})
        return
      }
      if (kind === 'pin') {
        runPatch(id, { pinned: !(modelFor(id)?.pinned === true) })
        return
      }
      if (kind === 'top') {
        runPatch(id, { order: 'top' })
        return
      }
      return
    }
    // Row click = open. The login gate stays a card-side concern (P1).
    openApp(id)
  }

  function onKeyDown(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return
    const target = event.target
    if (!(target instanceof Element)) return
    const row = target.closest('[data-omnimux-app-tab]')
    if (row !== target || !(row instanceof Element)) return
    event.preventDefault()
    const id = row.getAttribute('data-omnimux-app-tab') ?? ''
    if (id !== '') openApp(id)
  }

  container.addEventListener('click', onClick)
  container.addEventListener('keydown', onKeyDown)

  const onTabsChanged = () => { void refresh() }
  const onStageChange = () => { syncActive() }
  window.addEventListener(TABS_CHANGED_EVENT, onTabsChanged)
  window.addEventListener(PRODUCT_STAGE_EVENT, onStageChange)
  const unsubscribeLocale = typeof locale?.subscribe === 'function' ? locale.subscribe(render) : () => {}

  const unregister = register({
    id: 'omnimux-app-tabs',
    rank: 2,
    styles: STYLES,
    styleId: 'omnimux-app-tabs-styles',
    create: () => container,
  })

  void refresh()

  return () => {
    unregister()
    window.removeEventListener(TABS_CHANGED_EVENT, onTabsChanged)
    window.removeEventListener(PRODUCT_STAGE_EVENT, onStageChange)
    unsubscribeLocale()
    container.remove()
  }
}
