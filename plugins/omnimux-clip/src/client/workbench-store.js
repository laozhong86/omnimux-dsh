/**
 * StageStore-shaped adapter for the clip sidebar row.
 * Talks to `window.__omnimuxWorkbench` lazily so hub/clip load order
 * does not matter. Vertical plugins MUST NOT import the hub module.
 */
export const CLIP_TAB_ID = 'omnimux-clip:studio'
export const CLIP_SENTINEL_PATH = 'omnimux-clip:studio'

const EMPTY_BOX = Object.freeze({ top: 0, left: 0, width: 0, height: 0 })

function workbenchApi() {
  return typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
}

/**
 * @param {(key: string) => string} [t]
 */
export function createClipWorkbenchStore(t) {
  return {
    getSnapshot() {
      return Boolean(workbenchApi()?.isActive?.(CLIP_TAB_ID))
    },
    subscribe(listener) {
      if (typeof listener !== 'function') return () => {}
      const api = workbenchApi()
      if (api && typeof api.subscribe === 'function') return api.subscribe(listener)
      let unsub = () => {}
      const started = Date.now()
      const timer = setInterval(() => {
        const next = workbenchApi()
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
      const api = workbenchApi()
      if (!api || typeof api.open !== 'function') return
      const title = typeof t === 'function' ? t('tab.title') : '视频剪辑'
      void api.open({ tabId: CLIP_TAB_ID, title, path: CLIP_SENTINEL_PATH })
    },
    close() {
      workbenchApi()?.closePanel?.()
    },
    set(next) {
      if (next) this.open()
      else this.close()
    },
    readBox() {
      return EMPTY_BOX
    },
  }
}
