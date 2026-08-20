/**
 * Shared open state for the sidebar workflow entry and the center stage.
 * The product-stage primitives (claim/release/event) come from the hub's
 * `product-stage` client seam, so this plugin does not ship a copy.
 * @param {{ claim: (id: string) => void, release: (id: string) => void, PRODUCT_STAGE_EVENT: string, readBox?: () => { top: number, left: number, width: number, height: number } }} stage
 */
const STAGE_ID = 'omnimux-workflow'

export function createStageStore(stage) {
  let open = false
  const listeners = new Set()

  function emit() {
    for (const listener of listeners) listener()
  }

  window.addEventListener(stage.PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : undefined
    if (id !== STAGE_ID && open) {
      open = false
      emit()
    }
  })

  return {
    getSnapshot: () => open,
    readBox: stage.readBox,
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
      if (open) stage.claim(STAGE_ID)
      else stage.release(STAGE_ID)
      emit()
    },
    toggle() {
      this.set(!open)
    },
  }
}
