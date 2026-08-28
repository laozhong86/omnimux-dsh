/**
 * Shared open state for the sidebar publish entry and the center stage.
 * The product-stage primitives (claim/release/readBox) come from the hub's
 * `window.__omnimuxStage` singleton; access is deferred via the getter so this
 * module never depends on the hub being applied before this plugin
 * (same pattern as omnimux-accounts stage-store.js).
 * @param {() => { claim: (id: string) => void, release: (id: string) => void, readBox: () => { top: number, left: number, width: number, height: number } }} getStage
 */
const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
const STAGE_ID = 'omnimux-publish'

export function createStageStore(getStage) {
  let open = false
  const listeners = new Set()

  function emit() {
    for (const listener of listeners) listener()
  }

  // 互斥：其他一级产品页（应用/任务看板/ESC/账号…）claim 舞台时自动收起
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
