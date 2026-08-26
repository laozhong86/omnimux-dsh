/**
 * Shared open state for the sidebar analytics entry and the center stage.
 * Product-stage primitives come from the hub `window.__omnimuxStage`.
 * A getter is passed so this store does not depend on the hub being applied
 * first: claim/release/readBox run only after the hub has materialized.
 * @param {() => { claim: (id: string) => void, release: (id: string) => void, readBox: () => { top: number, left: number, width: number, height: number } }} getStage
 */
import { STAGE_ID } from './defaults.js'

const PRODUCT_STAGE_EVENT = 'dsh-product-stage'

export function createStageStore(getStage) {
  let open = false
  try {
    open = window.localStorage.getItem('omnimux_active_product_stage') === STAGE_ID
  } catch {}

  const listeners = new Set()

  function emit() {
    for (const listener of listeners) listener()
  }

  if (open) {
    const restore = () => {
      try {
        const stage = getStage()
        if (stage && typeof stage.claim === 'function') {
          stage.claim(STAGE_ID)
        }
      } catch {}
    }
    if (typeof queueMicrotask === 'function') queueMicrotask(restore)
    else setTimeout(restore, 0)
  }

  window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : undefined
    if (id !== STAGE_ID && open) {
      open = false
      emit()
    } else if (id === STAGE_ID && !open) {
      open = true
      emit()
    }
  })

  return {
    getSnapshot: () => open,
    readBox() {
      return getStage().readBox()
    },
    /**
     * @param {() => void} listener
     */
    subscribe(listener) {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    /**
     * @param {boolean} next
     */
    set(next) {
      if (open === next) return
      open = next
      const stage = getStage()
      if (open) stage.claim(STAGE_ID)
      else stage.release(STAGE_ID)
      emit()
    },
    toggle() {
      this.set(!open)
    },
  }
}
