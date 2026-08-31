/**
 * Workbench split: keep the official conversation column, put plugin GUI
 * in dsh-better-sidebar, never claim a product-stage overlay.
 *
 * Installed on `window.__omnimuxWorkbench` at module top-level (same
 * pattern as `__omnimuxStage`). Vertical plugins read the global — they
 * MUST NOT import this module. Opening a workbench tab MUST NOT set
 * `data-dsh-product-stage` (that chrome hides `[data-dsh-panel-host]`).
 */

export const WORKBENCH_GLOBAL_KEY = '__omnimuxWorkbench'
export const WORKBENCH_PANEL_MIN_PX = 280
export const WORKBENCH_CONVERSATION_TARGET_PX = 420
export const WORKBENCH_CONVERSATION_MIN_PX = 360
export const WORKBENCH_FOCUS_NEAR_PX = 24
export const WORKBENCH_FOCUS = Object.freeze({
  split: 'split',
  gui: 'gui',
  chat: 'chat',
})

const EMPTY_BOX = Object.freeze({ top: 0, left: 0, width: 0, height: 0 })

/** @type {Set<() => void>} */
const listeners = new Set()

/** @type {{ betterSidebar?: object, layout?: object, sessions?: object }} */
const deps = {
  betterSidebar: null,
  layout: null,
  sessions: null,
}

/** @type {object | null} */
let attachedStore = null

/** @type {WeakMap<object, number>} */
const attachCounts = new WeakMap()

/** Sessions that already received a default width write. */
const appliedWidthSessions = new Set()

/** @type {Map<string, { mode: string, splitWidth: number | null, lastOpenMode: string }>} */
const focusBySession = new Map()

function emit() {
  for (const listener of listeners) {
    try { listener() } catch (err) {
      console.error('[omnimux-workbench] listener error:', err)
    }
  }
}

function waitMs(ms) {
  return new Promise((resolve) => { setTimeout(resolve, ms) })
}

/**
 * Recursively collect split-tree tabs (does not depend on better-sidebar internals).
 * @param {object | null | undefined} node
 * @returns {Array<{ id?: string, type?: string, path?: string }>}
 */
export function collectTabs(node) {
  if (!node || typeof node !== 'object') return []
  if (node.kind === 'leaf') return Array.isArray(node.tabs) ? node.tabs : []
  if (!Array.isArray(node.children)) return []
  return node.children.flatMap(collectTabs)
}

/**
 * Empty Files seed: type=editor with no path. User-opened editors keep their path.
 * @param {{ type?: string, path?: string }} tab
 */
export function isSeedFilesTab(tab) {
  return tab?.type === 'editor' && (tab.path === undefined || tab.path === '')
}

export function listOpenTabs(state) {
  if (!state) return []
  return collectTabs(state.splits).concat(collectTabs(state.bottomSplits))
}

export function tabIsOpen(state, tabId) {
  if (!tabId) return false
  return listOpenTabs(state).some((tab) => tab.id === tabId || tab.type === tabId)
}

function hostWindow() {
  return typeof globalThis.window !== 'undefined' ? globalThis.window : undefined
}

function hostDocument() {
  return typeof globalThis.document !== 'undefined' ? globalThis.document : hostWindow()?.document
}

function viewportWidth() {
  return hostWindow()?.innerWidth || 0
}

export function officialSessionSidebarWidth(env = {}) {
  if (typeof env.officialSidebarWidth === 'number' && Number.isFinite(env.officialSidebarWidth)) {
    return Math.max(0, env.officialSidebarWidth)
  }
  const doc = hostDocument()
  if (!doc || typeof doc.querySelector !== 'function') return 0
  const column = doc.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]')
  if (!column || typeof column.getBoundingClientRect !== 'function') return 0
  const width = column.getBoundingClientRect().width
  return typeof width === 'number' && Number.isFinite(width) ? width : 0
}

export function workbenchUsableWidthPx(state, env = {}) {
  const viewport = typeof env.viewportWidth === 'number' ? env.viewportWidth : viewportWidth()
  const official = officialSessionSidebarWidth(env)
  if (viewport > 0 && official > 0) return Math.max(0, viewport - official)
  const extra = state?.panelOpen === false
    ? 0
    : (typeof state?.width === 'number' && Number.isFinite(state.width) ? state.width : 0)
  const conversation = typeof env.conversationWidth === 'number' ? env.conversationWidth : 0
  return conversation > 0 ? conversation + extra : 0
}

/**
 * Default GUI width: keep ~420px for the conversation column, give the rest
 * to the right panel (same ruler as the project canvas 15:85).
 */
export function workbenchDefaultWidthPx(state, env = {}) {
  const viewport = typeof env.viewportWidth === 'number' ? env.viewportWidth : viewportWidth()
  const max = viewport > 0 ? Math.max(WORKBENCH_PANEL_MIN_PX, viewport) : WORKBENCH_PANEL_MIN_PX
  const usable = workbenchUsableWidthPx(state, env)
  if (usable <= 0) {
    const raw = viewport > 0
      ? Math.max(WORKBENCH_PANEL_MIN_PX, viewport - WORKBENCH_CONVERSATION_TARGET_PX)
      : WORKBENCH_PANEL_MIN_PX
    return Math.min(max, raw)
  }
  let target = usable - WORKBENCH_CONVERSATION_TARGET_PX
  if (target < WORKBENCH_PANEL_MIN_PX) target = usable - WORKBENCH_CONVERSATION_MIN_PX
  return Math.min(max, Math.max(WORKBENCH_PANEL_MIN_PX, Math.round(target)))
}

/**
 * GUI-focus width: occupy the remainder of the viewport after the official
 * left rail. Conversation stays mounted and is squeezed by better-sidebar's
 * `#root { margin-right }`.
 */
export function workbenchGuiWidthPx(state, env = {}) {
  const viewport = typeof env.viewportWidth === 'number' ? env.viewportWidth : viewportWidth()
  const official = officialSessionSidebarWidth(env)
  const max = viewport > 0 ? Math.max(WORKBENCH_PANEL_MIN_PX, viewport) : WORKBENCH_PANEL_MIN_PX
  if (viewport > 0) {
    const next = Math.max(WORKBENCH_PANEL_MIN_PX, Math.round(viewport - Math.max(0, official)))
    return Math.min(max, next)
  }
  const usable = workbenchUsableWidthPx({ ...state, panelOpen: false }, env)
  if (usable > 0) return Math.min(max, Math.max(WORKBENCH_PANEL_MIN_PX, Math.round(usable)))
  return WORKBENCH_PANEL_MIN_PX
}

function nearPx(width, target) {
  return Math.abs(width - target) <= WORKBENCH_FOCUS_NEAR_PX
}

function liveSnapshot(store = attachedStore) {
  return (typeof store?.getSnapshot === 'function' ? store.getSnapshot() : null)
    || getService()?.getSnapshot?.()
    || null
}

function sessionKey(explicitId) {
  return explicitId || currentSessionId() || liveSnapshot()?.sessionId || '__none__'
}

function focusRecord(sessionId = sessionKey()) {
  if (!focusBySession.has(sessionId)) {
    focusBySession.set(sessionId, {
      mode: WORKBENCH_FOCUS.split,
      splitWidth: null,
      lastOpenMode: WORKBENCH_FOCUS.split,
    })
  }
  return focusBySession.get(sessionId)
}

function rememberSplitWidth(state, record) {
  if (state?.panelOpen === false) return
  if (typeof state?.width !== 'number' || !Number.isFinite(state.width)) return
  if (record.mode !== WORKBENCH_FOCUS.gui) record.splitWidth = state.width
}

/**
 * Infer the current focus from live panel geometry. Chat = collapsed panel
 * (conversation still mounted). GUI = panel ≈ viewport − left rail. Else split.
 */
export function inferWorkbenchFocus(state, env = {}) {
  if (!state || state.panelOpen === false) return WORKBENCH_FOCUS.chat
  if (typeof state.width === 'number' && nearPx(state.width, workbenchGuiWidthPx(state, env))) {
    return WORKBENCH_FOCUS.gui
  }
  return WORKBENCH_FOCUS.split
}

export function getWorkbenchFocus(env = {}) {
  const snapshot = liveSnapshot()
  const inferred = inferWorkbenchFocus(snapshot?.state, env)
  const record = focusRecord(snapshot?.sessionId)
  record.mode = inferred
  return inferred
}

/**
 * Switch focus by writing better-sidebar geometry. Never unmounts conversation.
 * @param {'split' | 'gui' | 'chat'} mode
 * @returns {boolean}
 */
export function setWorkbenchFocus(mode, store = attachedStore, env = {}) {
  if (mode !== WORKBENCH_FOCUS.split && mode !== WORKBENCH_FOCUS.gui && mode !== WORKBENCH_FOCUS.chat) {
    return false
  }
  const snapshot = liveSnapshot(store)
  const state = snapshot?.state
  const record = focusRecord(snapshot?.sessionId)
  rememberSplitWidth(state, record)
  record.mode = mode
  if (mode !== WORKBENCH_FOCUS.chat) record.lastOpenMode = mode
  if (!store || typeof store.reduce !== 'function') {
    emit()
    return false
  }
  store.reduce((current) => {
    if (mode === WORKBENCH_FOCUS.chat) {
      return current?.panelOpen === false ? current : { ...current, panelOpen: false }
    }
    const nextWidth = mode === WORKBENCH_FOCUS.gui
      ? workbenchGuiWidthPx(current, env)
      : (typeof record.splitWidth === 'number'
        ? record.splitWidth
        : workbenchDefaultWidthPx(current, env))
    if (current?.panelOpen === true && typeof current.width === 'number' && Math.abs(current.width - nextWidth) < 1) {
      return current
    }
    return { ...current, panelOpen: true, width: nextWidth }
  })
  emit()
  return true
}

export function resetWorkbenchWidthMemory() {
  appliedWidthSessions.clear()
}

export function resetWorkbenchFocusMemory() {
  focusBySession.clear()
}

function getService() {
  return deps.betterSidebar || null
}

function currentSessionId(sessions = deps.sessions) {
  try {
    const snap = sessions?.list?.getSnapshot?.()
    if (snap?.current) return String(snap.current)
  } catch {
    // Cordis Proxy may throw on unread services.
  }
  return undefined
}

async function ensureSessionId(sessions, explicitId) {
  if (explicitId) return String(explicitId)
  return currentSessionId(sessions)
}

export async function waitForBetterSidebar(timeoutMs = 4000) {
  const first = getService()
  if (first && typeof first.openTab === 'function') return first
  if (timeoutMs <= 0) return first
  const started = Date.now()
  while (Date.now() - started <= timeoutMs) {
    const service = getService()
    if (service && typeof service.openTab === 'function') return service
    await waitMs(50)
  }
  return getService()
}

async function waitForSidebarSession(service, sessionId, timeoutMs = 4000) {
  if (!service || !sessionId || typeof service.getSnapshot !== 'function') return false
  if (service.getSnapshot()?.sessionId === sessionId) return true
  if (timeoutMs <= 0) return false
  const started = Date.now()
  while (Date.now() - started <= timeoutMs) {
    if (service.getSnapshot()?.sessionId === sessionId) return true
    await waitMs(50)
  }
  return service.getSnapshot()?.sessionId === sessionId
}

async function waitForTab(service, tabId, timeoutMs = 4000) {
  if (!service || typeof service.getTab !== 'function') return Boolean(service)
  if (service.getTab(tabId)) return true
  if (timeoutMs <= 0) return false
  const started = Date.now()
  while (Date.now() - started <= timeoutMs) {
    if (service.getTab(tabId)) return true
    await waitMs(50)
  }
  return Boolean(service.getTab(tabId))
}

function closeSeedFiles(service, openScope) {
  const state = service.getSnapshot?.()?.state
  if (!state || typeof service.closeTab !== 'function') return
  const tabs = listOpenTabs(state)
  for (const tab of tabs) {
    if (isSeedFilesTab(tab) && tab.id) {
      try { service.closeTab(tab.id, openScope) } catch { /* ignore */ }
    }
  }
}

/**
 * Write the default GUI width through the tab store (public API has no setWidth).
 * @returns {number | null | undefined} number = applied; null = skip; undefined = wait
 */
export function applyDefaultWidth(service, sessionId, store = attachedStore, env = {}, force = false) {
  if (!sessionId) return null
  if (!force && appliedWidthSessions.has(sessionId)) return null
  const snapshot = (typeof store?.getSnapshot === 'function' ? store.getSnapshot() : null)
    || service?.getSnapshot?.()
  const state = snapshot?.state
  if (!state) return undefined
  const record = focusRecord(sessionId)
  if (!force && record.mode !== WORKBENCH_FOCUS.split) return null
  const nextWidth = workbenchDefaultWidthPx(state, env)
  const canReduce = snapshot?.sessionId === sessionId && typeof store?.reduce === 'function'
  if (typeof state.width === 'number' && Math.abs(state.width - nextWidth) < 1) {
    if (!canReduce) return undefined
    appliedWidthSessions.add(sessionId)
    return nextWidth
  }
  if (canReduce) {
    store.reduce((currentState) => (
      typeof currentState?.width === 'number' && Math.abs(currentState.width - nextWidth) < 1
        ? currentState
        : { ...currentState, width: nextWidth, panelOpen: currentState?.panelOpen === false ? true : currentState?.panelOpen }
    ))
    appliedWidthSessions.add(sessionId)
    emit()
    return nextWidth
  }
  return undefined
}

function closeDetails() {
  try {
    if (typeof deps.layout?.closeDetails === 'function') deps.layout.closeDetails()
  } catch {
    // layout may be an unwired Proxy
  }
}

/**
 * Library overlays claim `data-dsh-product-stage`, which hides the
 * better-sidebar panel. Opening a workbench tab must drop that claim
 * without claiming a new one.
 */
export function releaseCurrentProductStage() {
  const win = hostWindow()
  const doc = hostDocument()
  const current = doc?.documentElement?.dataset?.dshProductStage
  if (!current) return false
  try {
    const stage = win?.__omnimuxStage
    if (stage && typeof stage.release === 'function') stage.release(current)
  } catch {
    // ignore
  }
  if (doc?.documentElement?.dataset?.dshProductStage === current) {
    try { delete doc.documentElement.dataset.dshProductStage } catch { /* ignore */ }
  }
  try {
    win?.dispatchEvent?.(new CustomEvent('dsh-product-stage', { detail: { id: null } }))
  } catch {
    // ignore
  }
  return true
}

/**
 * Open a workbench tab in the right panel. Never claims a product stage.
 * @param {{
 *   tabId: string,
 *   title?: string,
 *   path?: string,
 *   sessionId?: string,
 *   cwd?: string,
 *   timeoutMs?: number,
 * }} opts
 * @returns {Promise<boolean>}
 */
export async function openWorkbench(opts = {}) {
  const tabId = typeof opts.tabId === 'string' ? opts.tabId : ''
  if (!tabId) return false
  closeDetails()
  releaseCurrentProductStage()
  const timeoutMs = opts.timeoutMs ?? 4000
  const service = await waitForBetterSidebar(timeoutMs)
  if (!service || typeof service.openTab !== 'function') return false
  await waitForTab(service, tabId, timeoutMs)

  const sessionId = await ensureSessionId(deps.sessions, opts.sessionId)
  const cwd = opts.cwd
  const scope = sessionId ? { sessionId, ...(cwd ? { cwd } : {}) } : undefined
  const ready = sessionId ? await waitForSidebarSession(service, sessionId, timeoutMs) : true
  const openScope = ready ? scope : undefined

  closeSeedFiles(service, openScope)

  const title = typeof opts.title === 'string' && opts.title ? opts.title : tabId
  const path = typeof opts.path === 'string' && opts.path ? opts.path : tabId
  service.openTab({
    type: tabId,
    id: tabId,
    title,
    path,
  }, openScope)
  applyDefaultWidth(service, sessionId)
  const snapshot = liveSnapshot()
  if (inferWorkbenchFocus(snapshot?.state) === WORKBENCH_FOCUS.chat) {
    const restore = focusRecord(snapshot?.sessionId).lastOpenMode || WORKBENCH_FOCUS.split
    setWorkbenchFocus(restore === WORKBENCH_FOCUS.chat ? WORKBENCH_FOCUS.split : restore)
  }
  emit()
  return true
}

export function closeWorkbenchPanel() {
  return setWorkbenchFocus(WORKBENCH_FOCUS.chat)
}

export function isWorkbenchOpen(tabId) {
  const service = getService()
  const snapshot = (typeof attachedStore?.getSnapshot === 'function' ? attachedStore.getSnapshot() : null)
    || service?.getSnapshot?.()
  return tabIsOpen(snapshot?.state, tabId)
}

function subscribeWorkbench(listener) {
  if (typeof listener !== 'function') return () => {}
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}

function attachStore(store) {
  if (!store) return
  const next = (attachCounts.get(store) || 0) + 1
  attachCounts.set(store, next)
  if (attachedStore === store) return
  attachedStore = store
  const snapshot = liveSnapshot(store)
  const sessionId = currentSessionId() || snapshot?.sessionId
  const record = focusRecord(sessionId)
  rememberSplitWidth(snapshot?.state, record)
  if (record.mode === WORKBENCH_FOCUS.gui || record.mode === WORKBENCH_FOCUS.chat) {
    setWorkbenchFocus(record.mode, store)
    return
  }
  record.mode = inferWorkbenchFocus(snapshot?.state)
  applyDefaultWidth(getService(), sessionId, store)
  emit()
}

function detachStore(store) {
  if (!store) {
    attachedStore = null
    return
  }
  const remaining = Math.max(0, (attachCounts.get(store) || 1) - 1)
  if (remaining === 0) attachCounts.delete(store)
  else attachCounts.set(store, remaining)
  if (attachedStore !== store) return
  if (remaining === 0) attachedStore = null
}

function bind(next = {}) {
  if (next.betterSidebar !== undefined) deps.betterSidebar = next.betterSidebar || null
  if (next.layout !== undefined) deps.layout = next.layout || null
  if (next.sessions !== undefined) deps.sessions = next.sessions || null
  const service = getService()
  if (service && typeof service.subscribeState === 'function' && !service.__omnimuxWorkbenchHooked) {
    try {
      service.subscribeState(() => { emit() })
      service.__omnimuxWorkbenchHooked = true
    } catch {
      // ignore
    }
  }
  emit()
}

function createApi() {
  return {
    open: openWorkbench,
    closePanel: closeWorkbenchPanel,
    isOpen: isWorkbenchOpen,
    subscribe: subscribeWorkbench,
    attachStore,
    detachStore,
    bind,
    createSidebarStore: createWorkbenchSidebarStore,
    waitForService: waitForBetterSidebar,
    applyDefaultWidth: (sessionId, store, env, force) => applyDefaultWidth(getService(), sessionId, store || attachedStore, env, force),
    getSnapshot: () => getService()?.getSnapshot?.() || null,
    getFocus: getWorkbenchFocus,
    setFocus: setWorkbenchFocus,
    inferFocus: inferWorkbenchFocus,
  }
}

/**
 * Install the shared workbench API on the window global. Idempotent.
 * @param {Window & { [WORKBENCH_GLOBAL_KEY]?: unknown }} [target]
 */
export function installWorkbenchGlobal(target = hostWindow()) {
  if (!target) return createApi()
  const existing = target[WORKBENCH_GLOBAL_KEY]
  if (existing !== undefined) return existing
  const api = createApi()
  target[WORKBENCH_GLOBAL_KEY] = api
  return api
}

/**
 * Test-only: drop bound services, listeners, and the window singleton.
 * @param {Window & { [WORKBENCH_GLOBAL_KEY]?: unknown }} [target]
 */
export function resetWorkbenchForTests(target = hostWindow()) {
  deps.betterSidebar = null
  deps.layout = null
  deps.sessions = null
  attachedStore = null
  listeners.clear()
  appliedWidthSessions.clear()
  focusBySession.clear()
  if (target && Object.prototype.hasOwnProperty.call(target, WORKBENCH_GLOBAL_KEY)) {
    try { delete target[WORKBENCH_GLOBAL_KEY] } catch { target[WORKBENCH_GLOBAL_KEY] = undefined }
  }
}

/**
 * StageStore-shaped adapter for `createSidebarEntry`. `open()` talks to the
 * workbench global; it never claims a product stage.
 * @param {{ tabId: string, title?: string | (() => string), path?: string }} options
 */
export function createWorkbenchSidebarStore(options) {
  const tabId = options.tabId
  const path = options.path || tabId
  const resolveTitle = () => {
    const title = options.title
    return typeof title === 'function' ? title() : (title || tabId)
  }
  const apiOf = () => hostWindow()?.[WORKBENCH_GLOBAL_KEY]
  return {
    getSnapshot() {
      const api = apiOf()
      return Boolean(api && typeof api.isOpen === 'function' && api.isOpen(tabId))
    },
    subscribe(listener) {
      if (typeof listener !== 'function') return () => {}
      const api = apiOf()
      if (api && typeof api.subscribe === 'function') return api.subscribe(listener)
      let unsub = () => {}
      const started = Date.now()
      const timer = setInterval(() => {
        const next = apiOf()
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
      const api = apiOf()
      if (!api || typeof api.open !== 'function') return
      void api.open({ tabId, title: resolveTitle(), path })
    },
    close() {
      const api = apiOf()
      api?.closePanel?.()
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

if (hostWindow()) installWorkbenchGlobal(hostWindow())
