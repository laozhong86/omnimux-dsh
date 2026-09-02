import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import {
  WORKBENCH_FOCUS,
  WORKBENCH_LEFT_RAIL_EXPANDED_FALLBACK_PX,
  WORKBENCH_OCCUPANTS,
  WORKBENCH_TAB_TITLE_FALLBACKS,
  activeTabId,
  applyDefaultWidth,
  collectTabs,
  createWorkbenchSidebarStore,
  inferWorkbenchFocus,
  installWorkbenchGlobal,
  isSeedFilesTab,
  isWorkbenchActive,
  isWorkbenchOpen,
  isWorkbenchTab,
  officialSessionSidebarWidth,
  openWorkbench,
  releaseCurrentProductStage,
  resetWorkbenchForTests,
  resolveDefaultFocus,
  resolveWorkbenchTabTitle,
  setWorkbenchFocus,
  syncWorkbenchGuiWidth,
  tabIsOpen,
  workbenchDefaultWidthPx,
  workbenchGuiWidthPx,
} from './workbench.js'

const previousWindow = globalThis.window
const previousDocument = globalThis.document

afterEach(() => {
  resetWorkbenchForTests(globalThis.window)
  if (previousWindow === undefined) delete globalThis.window
  else globalThis.window = previousWindow
  if (previousDocument === undefined) delete globalThis.document
  else globalThis.document = previousDocument
})

function makeState(tabs = [], width = 780, panelOpen = true) {
  return {
    width,
    panelOpen,
    activePane: 'main',
    splits: {
      kind: 'leaf',
      id: 'main',
      tabs,
    },
  }
}

function setupWindow() {
  const doc = {
    documentElement: { dataset: {} },
    querySelector: () => null,
  }
  const win = {
    innerWidth: 1200,
    document: doc,
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {},
    localStorage: {
      _data: new Map(),
      getItem(k) { return this._data.get(k) ?? null },
      setItem(k, v) { this._data.set(k, String(v)) },
      removeItem(k) { this._data.delete(k) },
    },
  }
  globalThis.window = win
  globalThis.document = doc
  return win
}

test('collectTabs / isSeedFilesTab / tabIsOpen walk split trees', () => {
  const node = {
    kind: 'split',
    children: [
      { kind: 'leaf', tabs: [{ id: 't1', type: 'editor', path: '' }] },
      { kind: 'leaf', tabs: [{ id: 't2', type: 'omnimux-assets:library' }] },
    ],
  }
  const tabs = collectTabs(node)
  assert.equal(tabs.length, 2)
  assert.equal(isSeedFilesTab(tabs[0]), true)
  assert.equal(isSeedFilesTab(tabs[1]), false)
  assert.equal(tabIsOpen({ splits: node }, 'omnimux-assets:library'), true)
  assert.equal(tabIsOpen({ splits: node }, 'omnimux-clip:studio'), false)
})

test('default focus matrix: canvas defaults to split, all 9 libraries default to gui', () => {
  assert.equal(resolveDefaultFocus('omnimux-workflow:canvas'), WORKBENCH_FOCUS.split)
  const libraries = [
    'omnimux-clip:studio',
    'omnimux-assets:library',
    'omnimux-products:library',
    'omnimux-accounts:library',
    'omnimux-inspiration:library',
    'omnimux-publish:library',
    'omnimux-analytics:library',
    'omnimux-workflow:library',
    'omnimux-market:plaza',
  ]
  for (const lib of libraries) {
    assert.equal(resolveDefaultFocus(lib), WORKBENCH_FOCUS.gui, `${lib} must default to gui`)
    assert.ok(isWorkbenchTab(lib), `${lib} must be recognized as workbench tab`)
  }
  assert.equal(WORKBENCH_OCCUPANTS.length, 10)
})

test('workbenchDefaultWidthPx keeps ~420px for conversation', () => {
  assert.equal(workbenchDefaultWidthPx(makeState([], 780), { viewportWidth: 1200 }), 780)
  assert.equal(workbenchDefaultWidthPx(makeState([], 780), { viewportWidth: 600 }), 280)
})

test('releaseCurrentProductStage drops a library overlay without claiming', () => {
  const win = setupWindow()
  let released = null
  win.__omnimuxStage = {
    release(id) { released = id },
  }
  win.document.documentElement.dataset.dshProductStage = 'omnimux-assets-stage'
  const dropped = releaseCurrentProductStage()
  assert.equal(dropped, true)
  assert.equal(released, 'omnimux-assets-stage')
  assert.equal(win.document.documentElement.dataset.dshProductStage, undefined)
})

test('installWorkbenchGlobal is idempotent and never claims a product stage', () => {
  const win = setupWindow()
  const api1 = installWorkbenchGlobal(win)
  const api2 = installWorkbenchGlobal(win)
  assert.equal(api1, api2)
  assert.equal(win.__omnimuxWorkbench, api1)
  assert.equal(win.document.documentElement.dataset.dshProductStage, undefined)
})

test('openWorkbench returns false without better-sidebar and does not throw', async () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  const ok = await api.open({ tabId: 'omnimux-assets:library', timeoutMs: 0 })
  assert.equal(ok, false)
})

test('openWorkbench without current session does not create a session or claim overlay', async () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  let claimed = 0
  let created = 0
  win.__omnimuxStage = { claim() { claimed += 1 } }
  const opened = []
  const state = makeState([])
  api.bind({
    betterSidebar: {
      openTab(seed, scope) { opened.push({ seed, scope }) },
      getTab() { return { id: 'omnimux-clip:studio' } },
      getSnapshot() { return { state } },
    },
    sessions: {
      list: { getSnapshot: () => ({ current: undefined }) },
      create: async () => { created += 1; throw new Error('no workspace') },
    },
  })
  const ok = await api.open({ tabId: 'omnimux-clip:studio', timeoutMs: 0 })
  assert.equal(ok, false, 'returns false when no session is active')
  assert.equal(opened.length, 0)
  assert.equal(created, 0)
  assert.equal(claimed, 0)
})

test('openWorkbench switches focus mode to default per tab without cross-tab leakage', async () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  let state = makeState([{ id: 'omnimux-workflow:canvas', type: 'omnimux-workflow:canvas' }], 780, true)
  const store = {
    getSnapshot: () => ({ sessionId: 's1', state }),
    reduce: (fn) => { state = fn(state) },
  }
  const opened = []
  api.bind({
    betterSidebar: {
      openTab(seed, scope) {
        opened.push({ seed, scope })
        state = {
          ...state,
          splits: {
            kind: 'leaf',
            id: 'main',
            active: seed.id,
            tabs: [{ id: seed.id, type: seed.type }],
          },
        }
      },
      getTab(id) { return { id } },
      getSnapshot() { return { sessionId: 's1', state } },
    },
    sessions: {
      list: { getSnapshot: () => ({ current: 's1' }) },
    },
  })
  api.attachStore(store)

  // 1. Open canvas -> defaults to split
  await api.open({ tabId: 'omnimux-workflow:canvas', timeoutMs: 0 })
  assert.equal(api.getFocus(), WORKBENCH_FOCUS.split)
  assert.equal(state.width, 780)

  // 2. Open assets library -> defaults to gui
  await api.open({ tabId: 'omnimux-assets:library', timeoutMs: 0 })
  assert.equal(api.getFocus(), WORKBENCH_FOCUS.gui)
  assert.equal(state.width, 1200)

  // 3. Switch back to canvas -> split
  await api.open({ tabId: 'omnimux-workflow:canvas', timeoutMs: 0 })
  assert.equal(api.getFocus(), WORKBENCH_FOCUS.split)
})

test('applyDefaultWidth writes via store.reduce and skips a second write', () => {
  setupWindow()
  let state = makeState([{ id: 't1', type: 't1' }], 500, true)
  const store = {
    getSnapshot: () => ({ sessionId: 's1', state }),
    reduce: (fn) => { state = fn(state) },
  }
  const applied1 = applyDefaultWidth(null, 's1', store, { viewportWidth: 1200 })
  assert.equal(applied1, 780)
  assert.equal(state.width, 780)

  state.width = 600
  const applied2 = applyDefaultWidth(null, 's1', store, { viewportWidth: 1200 })
  assert.equal(applied2, null)
  assert.equal(state.width, 600)
})

test('workbenchGuiWidthPx occupies viewport minus the left rail', () => {
  assert.equal(workbenchGuiWidthPx(makeState([], 780), { viewportWidth: 1200, officialSidebarWidth: 0 }), 1200)
  assert.equal(workbenchGuiWidthPx(makeState([], 780), { viewportWidth: 1200, officialSidebarWidth: 280 }), 920)
  assert.equal(workbenchGuiWidthPx(makeState([], 780), { viewportWidth: 300, officialSidebarWidth: 0 }), 300)
})

test('officialSessionSidebarWidth falls back when expanded rail is crushed to rail size', () => {
  const doc = {
    querySelector(sel) {
      if (sel === '[data-sidebar-collapsed]') return null
      if (sel === '[data-pane="sidebar"], [class*="sidebarCol"]') {
        return { getBoundingClientRect: () => ({ width: 56 }) }
      }
      return null
    },
  }
  globalThis.document = doc
  globalThis.window = { document: doc }
  // Seed a healthy expanded width first.
  assert.equal(officialSessionSidebarWidth({ officialSidebarWidth: 280 }), 280)
  assert.equal(officialSessionSidebarWidth(), WORKBENCH_LEFT_RAIL_EXPANDED_FALLBACK_PX)
  assert.equal(
    workbenchGuiWidthPx(makeState([], 1672), { viewportWidth: 1728 }),
    1728 - WORKBENCH_LEFT_RAIL_EXPANDED_FALLBACK_PX,
  )
})

test('syncWorkbenchGuiWidth resizes gui panel after left rail width changes', () => {
  setupWindow()
  let state = makeState([{ id: 'omnimux-assets:library', type: 'omnimux-assets:library' }], 1672, true)
  const store = {
    getSnapshot: () => ({ sessionId: 's-sync-gui', state }),
    reduce: (fn) => { state = fn(state) },
  }
  // Stale gui width as if measured while the left rail was collapsed (56px).
  setWorkbenchFocus(WORKBENCH_FOCUS.gui, store, { viewportWidth: 1728, officialSidebarWidth: 56 })
  assert.equal(state.width, 1672)

  // Left rail expands to 280 — sync must shrink the panel so it no longer covers the session list.
  const synced = syncWorkbenchGuiWidth(store, { viewportWidth: 1728, officialSidebarWidth: 280 })
  assert.equal(synced, true)
  assert.equal(state.width, 1448)
  assert.equal(inferWorkbenchFocus(state, { viewportWidth: 1728, officialSidebarWidth: 280 }), WORKBENCH_FOCUS.gui)
})

test('inferWorkbenchFocus maps collapsed / full / split geometry', () => {
  const env = { viewportWidth: 1200, officialSidebarWidth: 0 }
  assert.equal(inferWorkbenchFocus(makeState([], 780, false), env), WORKBENCH_FOCUS.chat)
  assert.equal(inferWorkbenchFocus(makeState([], 1200, true), env), WORKBENCH_FOCUS.gui)
  assert.equal(inferWorkbenchFocus(makeState([], 1180, true), env), WORKBENCH_FOCUS.gui)
  assert.equal(inferWorkbenchFocus(makeState([], 780, true), env), WORKBENCH_FOCUS.split)
})

test('setWorkbenchFocus chat/gui/split writes panel geometry and restores split width', () => {
  setupWindow()
  const env = { viewportWidth: 1200, officialSidebarWidth: 0 }
  let state = makeState([{ id: 'omnimux-assets:library', type: 'omnimux-assets:library' }], 780, true)
  const store = {
    getSnapshot: () => ({ sessionId: 's1', state }),
    reduce: (fn) => { state = fn(state) },
  }

  setWorkbenchFocus(WORKBENCH_FOCUS.chat, store, env)
  assert.equal(state.panelOpen, false)

  setWorkbenchFocus(WORKBENCH_FOCUS.split, store, env)
  assert.equal(state.panelOpen, true)
  assert.equal(state.width, 780)

  state.width = 650
  setWorkbenchFocus(WORKBENCH_FOCUS.gui, store, env)
  assert.equal(state.panelOpen, true)
  assert.equal(state.width, 1200)

  setWorkbenchFocus(WORKBENCH_FOCUS.split, store, env)
  assert.equal(state.panelOpen, true)
  assert.equal(state.width, 650)
})

test('attachStore reapplies gui focus so default width cannot stomp it', () => {
  setupWindow()
  let state = makeState([{ id: 'omnimux-assets:library', type: 'omnimux-assets:library' }], 500, true)
  const store = {
    getSnapshot: () => ({ sessionId: 's-gui', state }),
    reduce: (fn) => { state = fn(state) },
  }
  const api = installWorkbenchGlobal()
  api.setFocus(WORKBENCH_FOCUS.gui, store, { viewportWidth: 1200, officialSidebarWidth: 0 })
  assert.equal(state.width, 1200)

  state.width = 500
  api.attachStore(store)
  assert.equal(state.width, 1200)
})

test('applyDefaultWidth skips while focus is gui', () => {
  setupWindow()
  let state = makeState([{ id: 'omnimux-assets:library', type: 'omnimux-assets:library' }], 500, true)
  const store = {
    getSnapshot: () => ({ sessionId: 's-gui-2', state }),
    reduce: (fn) => { state = fn(state) },
  }
  const api = installWorkbenchGlobal()
  api.setFocus(WORKBENCH_FOCUS.gui, store, { viewportWidth: 1200, officialSidebarWidth: 0 })

  const applied = applyDefaultWidth(null, 's-gui-2', store, { viewportWidth: 1200 })
  assert.equal(applied, null)
})

test('createWorkbenchSidebarStore.open never claims product stage', () => {
  const win = setupWindow()
  let claimed = 0
  win.__omnimuxStage = { claim() { claimed += 1 } }
  let openedTab = null
  win.__omnimuxWorkbench = {
    open(opts) { openedTab = opts },
    isOpen() { return false },
    isActive() { return false },
    subscribe() { return () => {} },
  }
  const adapter = createWorkbenchSidebarStore({
    tabId: 'omnimux-assets:library',
    title: '资产库',
  })
  adapter.open()
  assert.equal(openedTab?.tabId, 'omnimux-assets:library')
  assert.equal(claimed, 0)
})

test('isActive follows focused tab; isOpen keeps coexistence; chat clears active', () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  const assets = 'omnimux-assets:library'
  const clip = 'omnimux-clip:studio'
  let state = makeState([
    { id: assets, type: assets },
    { id: clip, type: clip },
  ], 780, true)
  state.splits.active = assets
  api.bind({
    betterSidebar: {
      getSnapshot() { return { sessionId: 's-active', state } },
      subscribeState() { return () => {} },
    },
  })

  assert.equal(isWorkbenchOpen(assets), true)
  assert.equal(isWorkbenchOpen(clip), true)
  assert.equal(isWorkbenchActive(assets), true)
  assert.equal(isWorkbenchActive(clip), false)
  assert.equal(api.isActive(assets), true)
  assert.equal(api.isActive(clip), false)

  state = {
    ...state,
    splits: { ...state.splits, active: clip },
  }
  assert.equal(api.isActive(assets), false)
  assert.equal(api.isActive(clip), true)
  assert.equal(isWorkbenchOpen(assets), true)

  const assetsStore = createWorkbenchSidebarStore({ tabId: assets })
  const clipStore = createWorkbenchSidebarStore({ tabId: clip })
  assert.equal(assetsStore.getSnapshot(), false)
  assert.equal(clipStore.getSnapshot(), true)

  state = { ...state, panelOpen: false }
  assert.equal(api.isActive(assets), false)
  assert.equal(api.isActive(clip), false)
  assert.equal(assetsStore.getSnapshot(), false)
  assert.equal(clipStore.getSnapshot(), false)
})

test('resolveWorkbenchTabTitle prefers opts, then getTab, then human fallback (#345)', () => {
  assert.equal(resolveWorkbenchTabTitle('omnimux-assets:library', '自定义', () => ({ title: '资产库' })), '自定义')
  assert.equal(
    resolveWorkbenchTabTitle('omnimux-assets:library', '', () => ({ title: () => '资产库' })),
    '资产库',
  )
  assert.equal(
    resolveWorkbenchTabTitle('omnimux-accounts:library', '', () => ({ title: 'omnimux-accounts:library' })),
    WORKBENCH_TAB_TITLE_FALLBACKS['omnimux-accounts:library'],
  )
  assert.equal(
    resolveWorkbenchTabTitle('omnimux-products:library', undefined, undefined),
    '产品库',
  )
  assert.notEqual(
    resolveWorkbenchTabTitle('omnimux-publish:library', '', () => null),
    'omnimux-publish:library',
  )
})

test('openWorkbench uses human title fallback when getTab has no title (#345)', async () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  const opened = []
  const state = makeState([])
  api.bind({
    betterSidebar: {
      openTab(seed, scope) { opened.push({ seed, scope }) },
      getTab() { return { id: 'omnimux-assets:library' } },
      getSnapshot() { return { state } },
    },
    sessions: {
      list: { getSnapshot: () => ({ current: 's-title' }) },
    },
  })
  const ok = await api.open({ tabId: 'omnimux-assets:library', timeoutMs: 0 })
  assert.equal(ok, true)
  assert.equal(opened.length, 1)
  assert.equal(opened[0].seed.title, '资产库')
  assert.notEqual(opened[0].seed.title, 'omnimux-assets:library')
})
