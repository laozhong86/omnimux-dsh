/**
 * Shared open state for the sidebar accounts entry and the center stage.
 * The product-stage primitives (claim/release/readBox) come from the hub's
 * `window.__omnimuxStage` singleton. A getter is passed so this store does
 * not depend on the hub being applied before this plugin: stage access is
 * deferred until claim/release/readBox is actually used, by which time the
 * hub has materialized.
 * @param {() => { claim: (id: string) => void, release: (id: string) => void, PRODUCT_STAGE_EVENT: string, readBox: () => { top: number, left: number, width: number, height: number } }} getStage
 */
const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
const STAGE_ID = 'omnimux-accounts'

export function createStageStore(getStage) {
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
