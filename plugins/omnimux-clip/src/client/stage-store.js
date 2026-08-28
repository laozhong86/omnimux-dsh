/**
 * Shared open state and session context for the sidebar clip entry,
 * the center stage, and canvas workflow integration.
 *
 * @param {() => { claim: (id: string) => void, release: (id: string) => void, PRODUCT_STAGE_EVENT: string, readBox: () => { top: number, left: number, width: number, height: number } }} getStage
 */
const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
const STAGE_ID = 'omnimux-clip'

export function createStageStore(getStage) {
  let open = false
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      open = window.localStorage.getItem('omnimux_active_product_stage') === STAGE_ID
    }
  } catch {}

  /** @type {null | { source: 'canvas' | 'sidebar' | 'agent', nodeId?: string, nodeTitle?: string, projectId?: string, draftSchema?: unknown, upstreamInputs?: unknown }} */
  let activeSession = null

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

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : undefined
      if (id !== STAGE_ID && open) {
        open = false
        activeSession = null
        emit()
      } else if (id === STAGE_ID && !open) {
        open = true
        emit()
      }
    })
  }

  return {
    getSnapshot: () => open,
    getSessionSnapshot: () => activeSession,
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
      if (open) {
        if (stage && typeof stage.claim === 'function') stage.claim(STAGE_ID)
      } else {
        if (stage && typeof stage.release === 'function') stage.release(STAGE_ID)
        activeSession = null
      }
      emit()
    },
    /**
     * Open clip editor in canvas mode with node session.
     * @param {{ nodeId?: string, nodeTitle?: string, projectId?: string, draftSchema?: unknown, upstreamInputs?: unknown }} payload
     */
    openFromCanvas(payload) {
      activeSession = {
        source: 'canvas',
        nodeId: payload?.nodeId,
        nodeTitle: payload?.nodeTitle,
        projectId: payload?.projectId,
        draftSchema: payload?.draftSchema,
        upstreamInputs: payload?.upstreamInputs,
      }
      this.set(true)
    },
    /**
     * Set or clear active session context without changing visibility.
     * @param {any} session
     */
    setSession(session) {
      activeSession = session
      emit()
    },
    toggle() {
      this.set(!open)
    },
  }
}
