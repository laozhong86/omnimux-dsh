/**
 * 资产库 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-assets-entry]'
export const ASSETS_TAB_ID = 'omnimux-assets:library'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="m7.249 11.552-1.691.323A2.335 2.335 0 0 0 6 16.5h10a2.333 2.333 0 0 0 .443-4.625l-1.691-.323.216-1.708a4 4 0 1 0-7.936 0l.217 1.708ZM5.167 9.333a5.833 5.833 0 1 1 11.62.741 4.168 4.168 0 0 1-.787 8.26H6a4.167 4.167 0 0 1-.787-8.26 5.89 5.89 0 0 1-.046-.74Z"/></g></svg>'

function createAssetsWorkbenchStore(t) {
  const resolveTitle = () => {
    try {
      const val = typeof t === 'function' ? t('nav') : undefined
      if (val && val !== 'nav') return val
    } catch {}
    return '资产库'
  }
  const api = () => (typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined)
  return {
    getSnapshot() {
      return Boolean(api()?.isActive?.(ASSETS_TAB_ID))
    },
    subscribe(listener) {
      if (typeof listener !== 'function') return () => {}
      const a = api()
      if (a && typeof a.subscribe === 'function') return a.subscribe(listener)
      let unsub = () => {}
      const started = Date.now()
      const timer = setInterval(() => {
        const next = api()
        if (next && typeof next.subscribe === 'function') {
          clearInterval(timer)
          unsub = next.subscribe(listener)
          return
        }
        if (Date.now() - started > 8000) clearInterval(timer)
      }, 50)
      return () => {
        clearInterval(timer)
        unsub()
      }
    },
    open() {
      const a = api()
      if (!a || typeof a.open !== 'function') return
      void a.open({ tabId: ASSETS_TAB_ID, title: resolveTitle() })
    },
    close() {
      api()?.closeTab?.(ASSETS_TAB_ID)
    },
    set(next) {
      if (next) this.open()
      else this.close()
    },
    readBox() {
      return { top: 0, left: 0, width: 0, height: 0 }
    },
  }
}

export function mountSidebarEntry(_stage, t, locale) {
  return createSidebarEntry({
    id: 'omnimux-assets',
    rank: 6,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: createAssetsWorkbenchStore(t),
    locale,
    access: 'offline',
    customClassName: 'omnimux-assets-entry',
    datasetKey: 'data-omnimux-assets-entry',
  })
}
