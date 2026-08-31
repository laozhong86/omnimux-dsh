/**
 * 灵感库 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-inspiration-entry]'
export const INSPIRATION_TAB_ID = 'omnimux-inspiration:library'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.833 4.813a2.52 2.52 0 0 1 2.521-2.521h6.875a2.52 2.52 0 0 1 2.521 2.52v12.375a2.52 2.52 0 0 1-2.52 2.521H4.353a2.52 2.52 0 0 1-2.52-2.52V4.813Zm2.521-.688h6.875c.38 0 .688.308.688.688v12.375c0 .38-.308.687-.688.687H4.354a.687.687 0 0 1-.687-.688V4.813c0-.38.307-.688.687-.688Z"/><path fill="currentColor" d="m20.9 7.428-1.65-.953v9.05l1.65-.953V7.428Zm-3.483-2.011-1.834-1.059v13.284l1.834-1.059V5.417Z"/></g></svg>'

function createInspirationWorkbenchStore(t) {
  const resolveTitle = () => {
    try {
      const val = typeof t === 'function' ? t('nav') : undefined
      if (val && val !== 'nav') return val
    } catch {}
    return '灵感库'
  }
  const api = () => (typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined)
  return {
    getSnapshot() {
      return Boolean(api()?.isOpen?.(INSPIRATION_TAB_ID))
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
      void a.open({ tabId: INSPIRATION_TAB_ID, title: resolveTitle() })
    },
    close() {
      api()?.closeTab?.(INSPIRATION_TAB_ID)
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
    id: 'omnimux-inspiration',
    rank: 7,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: createInspirationWorkbenchStore(t),
    locale,
    access: 'cloud',
    customClassName: 'omnimux-inspiration-entry',
    datasetKey: 'data-omnimux-inspiration-entry',
  })
}
