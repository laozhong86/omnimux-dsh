/**
 * Shared open state and session context for the sidebar clip entry,
 * the center stage, and canvas workflow integration.
 *
 * @param {() => { claim: (id: string) => void, release: (id: string) => void, PRODUCT_STAGE_EVENT: string, readBox: () => { top: number, left: number, width: number, height: number } }} getStage
 */
const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
const STAGE_ID = 'omnimux-clip'
const EMPTY_BOX = Object.freeze({ top: 0, left: 0, width: 0, height: 0 })

let globalActiveStageStore = null

export function getActiveClipStageStore() {
  return globalActiveStageStore
}

export function getActiveClipSession() {
  return globalActiveStageStore?.getSessionSnapshot() ?? null
}

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

  const handleStageEvent = (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : undefined
    // 画布联动模式下与 omnimux-workflow 共存，不被工作流 Stage 声明关闭
    if (activeSession?.source === 'canvas') {
      if (id && id !== STAGE_ID && id !== 'omnimux-workflow') {
        open = false
        activeSession = null
        emit()
      }
      return
    }
    if (id !== STAGE_ID && open) {
      open = false
      activeSession = null
      emit()
    } else if (id === STAGE_ID && !open) {
      open = true
      emit()
    }
  }

  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener(PRODUCT_STAGE_EVENT, handleStageEvent)
  }

  function readBox() {
    let stage
    try {
      stage = typeof getStage === 'function' ? getStage() : undefined
    } catch {
      return EMPTY_BOX
    }
    if (!stage || typeof stage.readBox !== 'function') return EMPTY_BOX
    let box
    try {
      box = stage.readBox()
    } catch {
      return EMPTY_BOX
    }
    if (!box || typeof box !== 'object') return EMPTY_BOX
    // 仅提取最小标量叶子字段，避免活数据泄漏
    const top = typeof box.top === 'number' ? box.top : 0
    const left = typeof box.left === 'number' ? box.left : 0
    const width = typeof box.width === 'number' ? box.width : 0
    const height = typeof box.height === 'number' ? box.height : 0
    return { top, left, width, height }
  }

  const store = {
    getSnapshot: () => open,
    getSessionSnapshot: () => activeSession,
    readBox,
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
      if (activeSession?.source === 'canvas') {
        if (next === false) {
          open = false
          activeSession = null
          emit()
        } else {
          if (!open) {
            open = true
            emit()
          }
        }
        return
      }

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
      open = true
      emit()
    },
    /**
     * Set or clear active session context without changing visibility.
     * @param {any} session
     */
    setSession(session) {
      activeSession = session
      emit()
    },
    /**
     * Standard StageStore open method for sidebar entry activation.
     */
    open() {
      this.set(true)
    },
    /**
     * Standard StageStore close method.
     */
    close() {
      this.set(false)
    },
    toggle() {
      this.set(!open)
    },
    /**
     * Unbind the product-stage listener and drop all subscribers.
     * Must be wired into the Cordis lifecycle via ctx.effect so the
     * plugin never leaks window listeners after unload.
     */
    dispose() {
      if (typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
        window.removeEventListener(PRODUCT_STAGE_EVENT, handleStageEvent)
      }
      listeners.clear()
      activeSession = null
      open = false
      if (globalActiveStageStore === store) {
        globalActiveStageStore = null
      }
      try {
        if (typeof window !== 'undefined' && window.__omnimuxClipStageStore === store) {
          delete window.__omnimuxClipStageStore
        }
      } catch {}
    },
  }

  globalActiveStageStore = store
  try {
    if (typeof window !== 'undefined') {
      window.__omnimuxClipStageStore = store
    }
  } catch {}

  return store
}