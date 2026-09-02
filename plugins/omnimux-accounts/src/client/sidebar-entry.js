/**
 * 账号 row under 新会话, placed by the single sidebar coordinator.
 * Consumes standardized createSidebarEntry from dsh-ui-kit with idempotent activation.
 */
import { createSidebarEntry } from 'dsh-ui-kit'

export const ENTRY_SELECTOR = '[data-omnimux-accounts-entry]'
export const ACCOUNTS_TAB_ID = 'omnimux-accounts:library'

const ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M12.527 7c.551-2.024 2.29-3.486 4.473-3.643C19.556 3.173 23.335 3 28.5 3c5.133 0 8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.165-.173 8.944-.357 11.5c-.157 2.183-1.62 3.922-3.643 4.473"/><path d="M35.646 17.047c-.182-2.557-2.136-4.51-4.694-4.693C28.397 12.17 24.632 12 19.5 12c-5.133 0-8.897.171-11.452.354c-2.558.182-4.512 2.136-4.694 4.694C3.17 19.602 3 23.367 3 28.5s.171 8.897.354 11.453c.182 2.557 2.136 4.51 4.694 4.693c2.555.183 6.32.354 11.452.354c5.133 0 8.897-.171 11.452-.354c2.558-.182 4.512-2.136 4.694-4.694c.183-2.555.354-6.32.354-11.452c0-5.133-.171-8.897-.354-11.453"/><path d="M24.026 30.727a7 7 0 1 0-8.066-.01c-2.496.933-4.485 2.709-5.5 4.92c-.646 1.405.16 3.087 1.704 3.18l.044.003a150 150 0 0 0 7.77.18c3.309 0 5.874-.081 7.77-.18l.045-.003c1.543-.093 2.35-1.775 1.704-3.18c-1.012-2.203-2.989-3.974-5.471-4.91"/></g></svg>'

function createAccountsWorkbenchStore(t) {
  const resolveTitle = () => {
    try {
      const val = typeof t === 'function' ? t('nav') : undefined
      if (val && val !== 'nav') return val
    } catch {}
    return '账号'
  }
  const api = () => (typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined)
  return {
    getSnapshot() {
      return Boolean(api()?.isActive?.(ACCOUNTS_TAB_ID))
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
      void a.open({ tabId: ACCOUNTS_TAB_ID, title: resolveTitle() })
    },
    close() {
      api()?.closeTab?.(ACCOUNTS_TAB_ID)
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
    id: 'omnimux-accounts',
    rank: 3,
    label: () => t('nav'),
    iconSvg: ICON,
    stageStore: createAccountsWorkbenchStore(t),
    locale,
    access: 'cloud',
    customClassName: 'omnimux-accounts-entry',
    datasetKey: 'data-omnimux-accounts-entry',
  })
}
