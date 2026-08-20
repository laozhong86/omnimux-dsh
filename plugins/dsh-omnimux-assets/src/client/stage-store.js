/** Shared open state for the sidebar assets entry and the center stage. */

import { PRODUCT_STAGE_EVENT, claimProductStage, releaseProductStage } from './stage-box.js'

const STAGE_ID = 'dsh-omnimux-assets'

export function createStageStore() {
  let open = false
  const listeners = new Set()

  function emit() {
    for (const listener of listeners) listener()
  }

  window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : undefined
    if (id !== STAGE_ID && open) {
      open = false
      emit()
    }
  })

  return {
    getSnapshot: () => open,
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
      if (open) claimProductStage(STAGE_ID)
      else releaseProductStage(STAGE_ID)
      emit()
    },
    toggle() {
      this.set(!open)
    },
  }
}
