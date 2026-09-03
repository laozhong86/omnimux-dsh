/**
 * Workbench split: keep the official conversation column, put plugin GUI
 * in dsh-better-sidebar, never claim a product-stage overlay.
 *
 * Installed on `window.__omnimuxWorkbench` at module top-level (same
 * pattern as `__omnimuxStage`). Vertical plugins read the global — they
 * MUST NOT import this module. Opening a workbench tab MUST NOT set
 * `data-dsh-product-stage` (that chrome hides `[data-dsh-panel-host]`).
 *
 * Middle-pane hide (#372) is `conversationCollapsed` (CSS), not solely
 * "right panel = viewport − left". Left-rail resize must not re-show chat.
 */

import {
  getConversationCollapsed,
  hydrateConversationCollapsed,
  resetConversationCollapseForTests,
  setConversationCollapsed,
} from './conversation-collapse.js'

export const WORKBENCH_GLOBAL_KEY = '__omnimuxWorkbench'
export const WORKBENCH_PANEL_MIN_PX = 280
export const WORKBENCH_CONVERSATION_TARGET_PX = 420
export const WORKBENCH_CONVERSATION_MIN_PX = 360
export const WORKBENCH_FOCUS_NEAR_PX = 24
/** Official collapsed rail is ~56px; anything at or below this is "rail-sized". */
export const WORKBENCH_LEFT_RAIL_COLLAPSED_MAX_PX = 72
/**
 * Healthy expanded rail is ~280px. Mid-animation widths (e.g. 80–200) sit above
 * the collapsed max but must NOT poison `lastExpandedOfficialWidth` / gui math.
 */
export const WORKBENCH_LEFT_RAIL_EXPANDED_MIN_PX = 200
/** Fallback when the expanded left rail is crushed by an oversized right panel. */
export const WORKBENCH_LEFT_RAIL_EXPANDED_FALLBACK_PX = 280
/** Debounce left-rail resize sync so mid-tween frames do not write a half-open width. */
export const WORKBENCH_LEFT_RAIL_SYNC_DEBOUNCE_MS = 50
export const WORKBENCH_FOCUS = Object.freeze({
  split: 'split',
  gui: 'gui',
  chat: 'chat',
})

export {
  getConversationCollapsed,
  setConversationCollapsed,
  hydrateConversationCollapsed,
  CONVERSATION_COLLAPSED_ATTR,
} from './conversation-collapse.js'

export const WORKBENCH_OCCUPANTS = Object.freeze([
  'omnimux-workflow:canvas',
  'omnimux-clip:studio',
  'omnimux-assets:library',
  'omnimux-products:library',
  'omnimux-accounts:library',
  'omnimux-inspiration:library',
  'omnimux-publish:library',
  'omnimux-analytics:library',
  'omnimux-workflow:library',
  'omnimux-market:plaza',
])

/** Human-readable Tab titles when registerTab title is unavailable (#345). */
export const WORKBENCH_TAB_TITLE_FALLBACKS = Object.freeze({
  'omnimux-workflow:canvas': '画布工作区',
  'omnimux-clip:studio': '视频剪辑',
  'omnimux-assets:library': '资产库',
  'omnimux-products:library': '产品库',
  'omnimux-accounts:library': '账号',
  'omnimux-inspiration:library': '灵感库',
  'omnimux-publish:library': '发布',
  'omnimux-analytics:library': '数据分析',
  'omnimux-workflow:library': '创作',
  'omnimux-market:plaza': '插件市场',
})

export function resolveWorkbenchTabTitle(tabId, optsTitle, getTab) {
  if (typeof optsTitle === 'string' && optsTitle.trim()) return optsTitle.trim()
  if (typeof getTab === 'function' && tabId) {
    try {
      const desc = getTab(tabId)
      const raw = desc?.title
      const fromDesc = typeof raw === 'function' ? raw() : raw
      if (typeof fromDesc === 'string' && fromDesc.trim() && fromDesc.trim() !== tabId) {
        return fromDesc.trim()
      }
    } catch {
      // fall through
    }
  }
  if (tabId && WORKBENCH_TAB_TITLE_FALLBACKS[tabId]) return WORKBENCH_TAB_TITLE_FALLBACKS[tabId]
  return tabId || ''
}

export function isWorkbenchTab(tabId) {
  if (!tabId || typeof tabId !== 'string') return false
  if (WORKBENCH_OCCUPANTS.includes(tabId)) return true
  return tabId.startsWith('omnimux-') && (tabId.includes(':') || tabId.endsWith('-stage') || tabId.endsWith(':library') || tabId.endsWith(':studio') || tabId.endsWith(':plaza'))
}

export function resolveDefaultFocus(tabId) {
  if (tabId && isWorkbenchTab(tabId) && tabId !== 'omnimux-workflow:canvas') {
    return WORKBENCH_FOCUS.gui
  }
  return WORKBENCH_FOCUS.split
}

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

/** In-memory focus records: sessionId -> { [tabId]: { mode, splitWidth } } */
const focusStorageBySession = new Map()

/** Last healthy expanded left-rail width; used when #root crush reports ~56px. */
let lastExpandedOfficialWidth = WORKBENCH_LEFT_RAIL_EXPANDED_FALLBACK_PX

/** @type {ResizeObserver | null} */
let leftRailResizeObserver = null
/** @type {MutationObserver | null} */
let leftRailAttrObserver = null
/** @type {number | null} */
let leftRailSyncTimer = null
let leftRailObserverDoc = null

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

export function activeTabId(state) {
  if (!state) return undefined
  const activePaneId = state.activePane
  const findLeaf = (node) => {
    if (!node || typeof node !== 'object') return null
    if (node.kind === 'leaf') return node.id === activePaneId || !activePaneId ? node : null
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        const found = findLeaf(child)
        if (found) return found
      }
    }
    return null
  }
  const leaf = findLeaf(state.splits) || findLeaf(state.bottomSplits)
  return leaf?.active ?? leaf?.tabs?.[0]?.id ?? undefined
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

export function isOfficialSidebarCollapsed(doc = hostDocument()) {
  if (!doc || typeof doc.querySelector !== 'function') return false
  return Boolean(doc.querySelector('[data-sidebar-collapsed]'))
}

/**
 * Live width of the official left session rail.
 * When focus is `gui`, better-sidebar crushes `#root` to `viewport − panel`.
 * If that panel was sized while the rail was collapsed, an expanded rail can
 * still report ~56px (or overflow under the z-index:40 panel). Prefer the last
 * healthy expanded width so `gui` can recover instead of locking the cover.
 *
 * Collapse is the inverse: AppFrame flips `data-sidebar-collapsed` before the
 * grid track finishes animating to the ~56px rail. Returning that stale live
 * width (often still ~280) makes `gui = viewport − expanded` leave a gap to
 * the right of the true rail. While collapsed, only trust rail-sized measures.
 */
export function officialSessionSidebarWidth(env = {}) {
  if (typeof env.officialSidebarWidth === 'number' && Number.isFinite(env.officialSidebarWidth)) {
    const forced = Math.max(0, env.officialSidebarWidth)
    if (forced >= WORKBENCH_LEFT_RAIL_EXPANDED_MIN_PX) lastExpandedOfficialWidth = Math.round(forced)
    return forced
  }
  const doc = hostDocument()
  if (!doc || typeof doc.querySelector !== 'function') return 0
  const column = doc.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]')
  if (!column || typeof column.getBoundingClientRect !== 'function') return 0
  const width = column.getBoundingClientRect().width
  if (typeof width !== 'number' || !Number.isFinite(width) || width <= 0) return 0
  const collapsed = isOfficialSidebarCollapsed(doc)
  if (collapsed) {
    // Attribute lands before the track tween finishes. Trust any sub-expanded
    // measure (56 official rail, ~90 macOS advanced, mid-tween). Only reject
    // still-expanded widths so gui can fill instead of leaving a gap.
    if (width > 0 && width < WORKBENCH_LEFT_RAIL_EXPANDED_MIN_PX) {
      return Math.round(width)
    }
    return WORKBENCH_LEFT_RAIL_COLLAPSED_MAX_PX
  }
  // Crushed under an oversized panel, or mid expand/collapse tween: keep last healthy width.
  if (width < WORKBENCH_LEFT_RAIL_EXPANDED_MIN_PX) {
    return lastExpandedOfficialWidth
  }
  lastExpandedOfficialWidth = Math.round(width)
  return width
}

/**
 * Re-apply `gui` geometry from the live left rail.
 * Also clamps any open panel that is wider than `viewport − leftRail` so the
 * fixed right panel cannot cover the official session list (#353 / #356).
 * @returns {boolean} whether a write was attempted
 */
export function syncWorkbenchGuiWidth(store = attachedStore, env = {}) {
  const snapshot = liveSnapshot(store)
  const state = snapshot?.state
  if (!state || state.panelOpen === false) return false
  const tabId = activeTabId(state)
  const record = focusRecordForTab(snapshot?.sessionId, tabId)
  // Intentional gui (or a collapsed middle column) is allowed to squeeze the
  // conversation column, so it is NEVER clamped here. Every other "split"
  // record is clamped to the split max so the column keeps its minimum width.
  const wantsGui = record.mode === WORKBENCH_FOCUS.gui || getConversationCollapsed()
  const target = wantsGui ? workbenchGuiWidthPx(state, env) : workbenchSplitMaxPanelPx(state, env)
  const oversized = typeof state.width === 'number'
    && Number.isFinite(state.width)
    && state.width > target + WORKBENCH_FOCUS_NEAR_PX

  if (wantsGui) {
    return setWorkbenchFocus(WORKBENCH_FOCUS.gui, store, env, tabId)
  }
  // Independence invariant + conversation-column guard: even a "split" record
  // must be clamped so it neither covers the left rail nor squeezes the middle
  // conversation column below its minimum (stale gui width after getFocus
  // clobber looks like split and used to no-op).
  if (!oversized || !store || typeof store.reduce !== 'function') return false
  store.reduce((current) => {
    if (typeof current?.width !== 'number' || !Number.isFinite(current.width)) return current
    const next = Math.min(current.width, target)
    if (Math.abs(current.width - next) < 1) return current
    return { ...current, width: next }
  })
  emit()
  return true
}

function scheduleGuiWidthSync() {
  if (leftRailSyncTimer != null) {
    const win = hostWindow()
    if (win?.clearTimeout) win.clearTimeout(leftRailSyncTimer)
    else clearTimeout(leftRailSyncTimer)
    leftRailSyncTimer = null
  }
  const win = hostWindow()
  const schedule = (fn) => (win?.setTimeout ? win.setTimeout(fn, WORKBENCH_LEFT_RAIL_SYNC_DEBOUNCE_MS) : setTimeout(fn, WORKBENCH_LEFT_RAIL_SYNC_DEBOUNCE_MS))
  leftRailSyncTimer = schedule(() => {
    leftRailSyncTimer = null
    syncWorkbenchGuiWidth()
  })
}

function findOfficialSidebarColumn(doc = hostDocument()) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]')
}

/**
 * Keep `gui` panel width glued to the official left rail as it expands/collapses.
 * Without this, hiding chat while the rail is collapsed (or a stale 56px measure)
 * lets the right panel cover the expanded session list (fixed host z-index 40).
 * @returns {() => void} cleanup
 */
export function installWorkbenchLeftRailObserver(doc = hostDocument()) {
  if (!doc) return () => {}
  if (leftRailObserverDoc === doc && (leftRailResizeObserver || leftRailAttrObserver)) {
    return uninstallWorkbenchLeftRailObserver
  }
  uninstallWorkbenchLeftRailObserver()
  leftRailObserverDoc = doc

  const column = findOfficialSidebarColumn(doc)
  if (column && typeof ResizeObserver !== 'undefined') {
    leftRailResizeObserver = new ResizeObserver(() => { scheduleGuiWidthSync() })
    leftRailResizeObserver.observe(column)
  }

  // Attribute-only: expand/collapse flips `data-sidebar-collapsed`. Do NOT
  // watch childList here — hub chrome already has a body MutationObserver for
  // the chat toggle, and a second subtree childList loop would cascade.
  if (typeof MutationObserver !== 'undefined') {
    leftRailAttrObserver = new MutationObserver(() => { scheduleGuiWidthSync() })
    const root = doc.documentElement || doc.body
    if (root) {
      leftRailAttrObserver.observe(root, {
        attributes: true,
        attributeFilter: ['data-sidebar-collapsed'],
        subtree: true,
      })
    }
  }

  scheduleGuiWidthSync()
  return uninstallWorkbenchLeftRailObserver
}

export function uninstallWorkbenchLeftRailObserver() {
  if (leftRailResizeObserver) {
    try { leftRailResizeObserver.disconnect() } catch { /* ignore */ }
    leftRailResizeObserver = null
  }
  if (leftRailAttrObserver) {
    try { leftRailAttrObserver.disconnect() } catch { /* ignore */ }
    leftRailAttrObserver = null
  }
  if (leftRailSyncTimer != null) {
    const win = hostWindow()
    if (win?.clearTimeout) win.clearTimeout(leftRailSyncTimer)
    else clearTimeout(leftRailSyncTimer)
    leftRailSyncTimer = null
  }
  leftRailObserverDoc = null
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

/**
 * Largest right-panel width that still leaves the middle conversation column at
 * least WORKBENCH_CONVERSATION_MIN_PX wide, given the viewport and the official
 * left session rail. Split focus is clamped to this; intentional gui and the
 * collapsed middle column are never clamped (the column is allowed to be 0).
 * When the viewport cannot be measured it has no safe bound, so it conservatively
 * returns the current panel width / gui upper bound (it never reduces an existing
 * split that it cannot reason about).
 */
export function workbenchSplitMaxPanelPx(state, env = {}) {
  const viewport = typeof env.viewportWidth === 'number' ? env.viewportWidth : viewportWidth()
  const leftRail = officialSessionSidebarWidth(env)
  if (viewport > 0) {
    return Math.max(WORKBENCH_PANEL_MIN_PX, viewport - leftRail - WORKBENCH_CONVERSATION_MIN_PX)
  }
  const current = typeof state?.width === 'number' && Number.isFinite(state.width) ? state.width : 0
  const gui = workbenchGuiWidthPx(state, env)
  return Math.max(WORKBENCH_PANEL_MIN_PX, current, gui)
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

const STORAGE_PREFIX = 'omnimux-workbench-focus:v1:'

function loadSessionFocusMap(sessionId = sessionKey()) {
  if (focusStorageBySession.has(sessionId)) {
    return focusStorageBySession.get(sessionId)
  }
  let map = {}
  try {
    const raw = hostWindow()?.localStorage?.getItem?.(STORAGE_PREFIX + sessionId)
    if (raw) map = JSON.parse(raw) || {}
  } catch {}
  focusStorageBySession.set(sessionId, map)
  return map
}

function persistSessionFocus(sessionId, tabId, patch) {
  if (!sessionId || !tabId) return
  const map = loadSessionFocusMap(sessionId)
  map[tabId] = { ...(map[tabId] || {}), ...patch }
  try {
    hostWindow()?.localStorage?.setItem?.(STORAGE_PREFIX + sessionId, JSON.stringify(map))
  } catch {}
}

export function focusRecordForTab(sessionId = sessionKey(), tabId = undefined) {
  const snap = liveSnapshot()
  const effectiveTabId = tabId || activeTabId(snap?.state) || 'default'
  const map = loadSessionFocusMap(sessionId)
  if (!map[effectiveTabId]) {
    map[effectiveTabId] = {
      mode: resolveDefaultFocus(effectiveTabId),
      splitWidth: null,
    }
  }
  return map[effectiveTabId]
}

function rememberSplitWidth(state, record, sessionId, tabId, env = {}) {
  if (state?.panelOpen === false) return
  if (typeof state?.width !== 'number' || !Number.isFinite(state.width)) return
  if (record.mode !== WORKBENCH_FOCUS.gui && !nearPx(state.width, workbenchGuiWidthPx(state, env))) {
    record.splitWidth = state.width
    if (sessionId && tabId) persistSessionFocus(sessionId, tabId, { splitWidth: state.width })
  }
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
  const state = snapshot?.state
  const inferred = inferWorkbenchFocus(state, env)
  const tabId = activeTabId(state)
  const record = focusRecordForTab(snapshot?.sessionId, tabId)

  // Preserve explicit gui intent while the panel is open. A width sized for the
  // collapsed ~56px rail is farther than NEAR from the expanded-rail gui target;
  // rewriting record.mode to split here makes syncWorkbenchGuiWidth no-op and
  // leaves the fixed panel covering the session list (#356).
  if (record.mode === WORKBENCH_FOCUS.gui && state?.panelOpen !== false) {
    return WORKBENCH_FOCUS.gui
  }
  // Sticky middle-collapse also reports as gui while the right panel is open (#372).
  if (getConversationCollapsed() && state?.panelOpen !== false) {
    return WORKBENCH_FOCUS.gui
  }
  if (record.mode === WORKBENCH_FOCUS.chat && state?.panelOpen === false) {
    return WORKBENCH_FOCUS.chat
  }
  record.mode = inferred
  return inferred
}

/**
 * Switch focus by writing better-sidebar geometry. Never unmounts conversation.
 * @param {'split' | 'gui' | 'chat'} mode
 * @returns {boolean}
 */
export function setWorkbenchFocus(mode, store = attachedStore, env = {}, targetTabId = undefined) {
  if (mode !== WORKBENCH_FOCUS.split && mode !== WORKBENCH_FOCUS.gui && mode !== WORKBENCH_FOCUS.chat) {
    return false
  }
  const snapshot = liveSnapshot(store)
  const state = snapshot?.state
  const sessionId = snapshot?.sessionId
  const prevTabId = activeTabId(state)
  const prevRecord = focusRecordForTab(sessionId, prevTabId)
  rememberSplitWidth(state, prevRecord, sessionId, prevTabId, env)

  const effectiveTabId = targetTabId || prevTabId
  const record = focusRecordForTab(sessionId, effectiveTabId)
  record.mode = mode
  if (mode !== WORKBENCH_FOCUS.chat && sessionId && effectiveTabId) {
    persistSessionFocus(sessionId, effectiveTabId, { mode })
  }
  // gui/split drive middle-pane collapsed intent; chat (right closed) leaves it alone (#372).
  if (mode === WORKBENCH_FOCUS.gui) setConversationCollapsed(true, { sessionId })
  else if (mode === WORKBENCH_FOCUS.split) setConversationCollapsed(false, { sessionId })
  if (!store || typeof store.reduce !== 'function') {
    emit()
    return false
  }
  store.reduce((current) => {
    if (mode === WORKBENCH_FOCUS.chat) {
      return current?.panelOpen === false ? current : { ...current, panelOpen: false }
    }
    let nextWidth = mode === WORKBENCH_FOCUS.gui
      ? workbenchGuiWidthPx(current, env)
      : (typeof record.splitWidth === 'number'
        ? record.splitWidth
        : workbenchDefaultWidthPx(current, env))
    // Split focus must never push the middle conversation column below its min
    // width (gui focus and the collapsed middle are allowed to squeeze it).
    if (mode === WORKBENCH_FOCUS.split) {
      nextWidth = Math.min(nextWidth, workbenchSplitMaxPanelPx(current, env))
    }
    if (current?.panelOpen === true && typeof current.width === 'number' && Math.abs(current.width - nextWidth) < 1) {
      return current
    }
    return {
      ...current,
      panelOpen: true,
      width: nextWidth,
    }
  })
  emit()
  return true
}

export function resetWorkbenchWidthMemory() {
  appliedWidthSessions.clear()
}

export function resetWorkbenchFocusMemory() {
  focusStorageBySession.clear()
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
export function applyDefaultWidth(service, sessionId, store = attachedStore, env = {}, force = false, targetTabId = undefined) {
  if (!sessionId) return null
  if (!force && appliedWidthSessions.has(sessionId + ':' + (targetTabId || ''))) return null
  const snapshot = (typeof store?.getSnapshot === 'function' ? store.getSnapshot() : null)
    || service?.getSnapshot?.()
  const state = snapshot?.state
  if (!state) return undefined
  const tabId = targetTabId || activeTabId(state)
  const record = focusRecordForTab(sessionId, tabId)
  if (!force && record.mode !== WORKBENCH_FOCUS.split) return null
  // Default split width, then clamp so the middle conversation column keeps its
  // minimum width even when a narrow viewport would otherwise squeeze it.
  const splitMax = workbenchSplitMaxPanelPx(state, env)
  let nextWidth = workbenchDefaultWidthPx(state, env)
  if (nextWidth > splitMax) nextWidth = splitMax
  const canReduce = snapshot?.sessionId === sessionId && typeof store?.reduce === 'function'
  if (typeof state.width === 'number' && Math.abs(state.width - nextWidth) < 1) {
    if (!canReduce) return undefined
    appliedWidthSessions.add(sessionId + ':' + (targetTabId || ''))
    return nextWidth
  }
  if (canReduce) {
    store.reduce((currentState) => (
      typeof currentState?.width === 'number' && Math.abs(currentState.width - nextWidth) < 1
        ? currentState
        : { ...currentState, width: nextWidth, panelOpen: currentState?.panelOpen === false ? true : currentState?.panelOpen }
    ))
    appliedWidthSessions.add(sessionId + ':' + (targetTabId || ''))
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
  if (!sessionId) return false
  const cwd = opts.cwd
  const scope = { sessionId, ...(cwd ? { cwd } : {}) }
  const ready = await waitForSidebarSession(service, sessionId, timeoutMs)
  const openScope = ready ? scope : undefined

  closeSeedFiles(service, openScope)

  const title = resolveWorkbenchTabTitle(
    tabId,
    opts.title,
    service && typeof service.getTab === 'function' ? (id) => service.getTab(id) : undefined,
  )
  const path = typeof opts.path === 'string' && opts.path ? opts.path : tabId
  service.openTab({
    type: tabId,
    id: tabId,
    title,
    path,
  }, openScope)

  const map = loadSessionFocusMap(sessionId)
  const explicitMode = map[tabId]?.mode
  const targetMode = explicitMode || resolveDefaultFocus(tabId)
  setWorkbenchFocus(targetMode, attachedStore, {}, tabId)
  emit()
  return true
}

export function closeWorkbenchTab(tabId) {
  if (!tabId) return false
  const service = getService()
  if (!service || typeof service.closeTab !== 'function') return false
  const snapshot = liveSnapshot()
  const sessionId = snapshot?.sessionId
  const scope = sessionId ? { sessionId } : undefined
  try {
    service.closeTab(tabId, scope)
  } catch {
    return false
  }
  const afterSnap = liveSnapshot()
  const remaining = listOpenTabs(afterSnap?.state).filter((t) => isWorkbenchTab(t.id || t.type))
  if (remaining.length === 0) {
    closeWorkbenchPanel()
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

/**
 * Left-row selection predicate: focused workbench tab only.
 * Presence (`isOpen`) may be true for several coexisting tabs; only the
 * active leaf tab lights the matching left entry. Cleared while the right
 * panel is collapsed (`panelOpen === false` / focus `chat`).
 */
export function isWorkbenchActive(tabId) {
  if (!tabId) return false
  const snapshot = liveSnapshot()
  const state = snapshot?.state
  if (!state || state.panelOpen === false) return false
  return activeTabId(state) === tabId
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
  const tabId = activeTabId(snapshot?.state)
  const record = focusRecordForTab(sessionId, tabId)
  rememberSplitWidth(snapshot?.state, record, sessionId, tabId)
  if (record.mode === WORKBENCH_FOCUS.gui || record.mode === WORKBENCH_FOCUS.chat) {
    setWorkbenchFocus(record.mode, store)
    return
  }
  record.mode = inferWorkbenchFocus(snapshot?.state)
  applyDefaultWidth(getService(), sessionId, store, {}, false, tabId)
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
    closeTab: closeWorkbenchTab,
    closePanel: closeWorkbenchPanel,
    isOpen: isWorkbenchOpen,
    isActive: isWorkbenchActive,
    isWorkbenchTab,
    resolveDefaultFocus,
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
    syncGuiWidth: syncWorkbenchGuiWidth,
    splitMaxPx: workbenchSplitMaxPanelPx,
    installLeftRailObserver: installWorkbenchLeftRailObserver,
    getConversationCollapsed,
    setConversationCollapsed,
    hydrateConversationCollapsed,
  }
}

/**
 * Install the shared workbench API on the window global. Idempotent.
 * @param {Window & { [WORKBENCH_GLOBAL_KEY]?: unknown }} [target]
 */
export function installWorkbenchGlobal(target = hostWindow()) {
  if (!target) return createApi()
  const existing = target[WORKBENCH_GLOBAL_KEY]
  // Upgrade in place when an older singleton is missing pane APIs (#372).
  if (existing !== undefined) {
    if (typeof existing.getConversationCollapsed === 'function') return existing
    const api = createApi()
    target[WORKBENCH_GLOBAL_KEY] = api
    return api
  }
  const api = createApi()
  target[WORKBENCH_GLOBAL_KEY] = api
  return api
}

/**
 * Test-only: drop bound services, listeners, and the window singleton.
 * @param {Window & { [WORKBENCH_GLOBAL_KEY]?: unknown }} [target]
 */
export function resetWorkbenchForTests(target = hostWindow()) {
  uninstallWorkbenchLeftRailObserver()
  deps.betterSidebar = null
  deps.layout = null
  deps.sessions = null
  attachedStore = null
  listeners.clear()
  appliedWidthSessions.clear()
  focusStorageBySession.clear()
  lastExpandedOfficialWidth = WORKBENCH_LEFT_RAIL_EXPANDED_FALLBACK_PX
  resetConversationCollapseForTests()
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
      if (api && typeof api.isActive === 'function') return Boolean(api.isActive(tabId))
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
      if (api && typeof api.closeTab === 'function') {
        api.closeTab(tabId)
      } else {
        api?.closePanel?.()
      }
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
