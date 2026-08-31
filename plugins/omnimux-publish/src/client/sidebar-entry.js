/**
 * 发布 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-publish-entry]'
export const PUBLISH_TAB_ID = 'omnimux-publish:library'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path d="M5.833.833H7.5V2.5h5V.833h1.667V2.5H15A2.5 2.5 0 0 1 17.5 5v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5h.833V.833ZM5 4.167A.833.833 0 0 0 4.167 5v1.667h11.666V5A.833.833 0 0 0 15 4.167H5Zm-.833 4.166V15c0 .46.373.833.833.833h10c.46 0 .833-.373.833-.833V8.333H4.167Z" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor"/></g></svg>'

function createPublishWorkbenchStore(t) {
  const resolveTitle = () => {
    try {
      const val = typeof t === 'function' ? t('nav') : undefined
      if (val && val !== 'nav') return val
    } catch {}
    return '发布'
  }
  const api = () => (typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined)
  return {
    getSnapshot() {
      return Boolean(api()?.isOpen?.(PUBLISH_TAB_ID))
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
      void a.open({ tabId: PUBLISH_TAB_ID, title: resolveTitle() })
    },
    close() {
      api()?.closeTab?.(PUBLISH_TAB_ID)
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
    id: 'omnimux-publish',
    rank: 4.2,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: createPublishWorkbenchStore(t),
    locale,
    access: 'cloud',
    customClassName: 'omnimux-publish-entry',
    datasetKey: 'data-omnimux-publish-entry',
  })
}
