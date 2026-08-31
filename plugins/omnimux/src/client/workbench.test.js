import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import {
  WORKBENCH_FOCUS,
  WORKBENCH_GLOBAL_KEY,
  applyDefaultWidth,
  collectTabs,
  createWorkbenchSidebarStore,
  inferWorkbenchFocus,
  installWorkbenchGlobal,
  isSeedFilesTab,
  listOpenTabs,
  openWorkbench,
  releaseCurrentProductStage,
  resetWorkbenchFocusMemory,
  resetWorkbenchForTests,
  resetWorkbenchWidthMemory,
  setWorkbenchFocus,
  tabIsOpen,
  workbenchDefaultWidthPx,
  workbenchGuiWidthPx,
  workbenchUsableWidthPx,
} from './workbench.js'

const previousWindow = globalThis.window
const previousDocument = globalThis.document

afterEach(() => {
  resetWorkbenchForTests(globalThis.window)
  resetWorkbenchWidthMemory()
  resetWorkbenchFocusMemory()
  if (previousWindow === undefined) delete globalThis.window
  else globalThis.window = previousWindow
  if (previousDocument === undefined) delete globalThis.document
  else globalThis.document = previousDocument
})

function setupWindow() {
  const html = { dataset: {} }
  const win = {
    innerWidth: 1440,
    document: { documentElement: html, querySelector: () => null },
    dispatchEvent() {},
  }
  globalThis.window = win
  globalThis.document = win.document
  return win
}

function makeState(tabs, extra = {}) {
  return {
    panelOpen: true,
    width: extra.width ?? 400,
    splits: { kind: 'leaf', id: 'pane-1', tabs, active: tabs[0]?.id ?? null },
    bottomSplits: { kind: 'leaf', id: 'pane-b', tabs: extra.bottomTabs || [], active: null },
    ...extra,
  }
}

test('collectTabs / isSeedFilesTab / tabIsOpen walk split trees', () => {
  const files = { id: 'files-1', type: 'editor' }
  const clip = { id: 'omnimux-clip:studio', type: 'omnimux-clip:studio', path: 'omnimux-clip:studio' }
  const tree = {
    kind: 'split',
    id: 's1',
    children: [
      { kind: 'leaf', tabs: [files] },
      { kind: 'leaf', tabs: [clip] },
    ],
  }
  assert.deepEqual(collectTabs(tree).map((t) => t.id), ['files-1', 'omnimux-clip:studio'])
  assert.equal(isSeedFilesTab(files), true)
  assert.equal(isSeedFilesTab({ type: 'editor', path: '/tmp/a.ts' }), false)
  const state = { splits: tree, bottomSplits: { kind: 'leaf', tabs: [] } }
  assert.equal(tabIsOpen(state, 'omnimux-clip:studio'), true)
  assert.equal(tabIsOpen(state, 'missing'), false)
  assert.equal(listOpenTabs(state).length, 2)
})

test('workbenchDefaultWidthPx keeps ~420px for conversation', () => {
  const env = { viewportWidth: 1440, officialSidebarWidth: 240 }
  const usable = workbenchUsableWidthPx({ panelOpen: true, width: 400 }, env)
  assert.equal(usable, 1200)
  assert.equal(workbenchDefaultWidthPx({ panelOpen: true, width: 400 }, env), 780)
})

test('releaseCurrentProductStage drops a library overlay without claiming', () => {
  const win = setupWindow()
  const released = []
  const events = []
  win.document.documentElement.dataset.dshProductStage = 'omnimux-assets'
  win.__omnimuxStage = { claim() {}, release(id) { released.push(id) } }
  win.dispatchEvent = (event) => { events.push(event?.detail?.id) }
  assert.equal(releaseCurrentProductStage(), true)
  assert.deepEqual(released, ['omnimux-assets'])
  assert.equal(win.document.documentElement.dataset.dshProductStage, undefined)
  assert.deepEqual(events, [null])
})

test('installWorkbenchGlobal is idempotent and never claims a product stage', async () => {
  const win = setupWindow()
  const first = installWorkbenchGlobal(win)
  const second = installWorkbenchGlobal(win)
  assert.equal(first, second)
  assert.equal(win[WORKBENCH_GLOBAL_KEY], first)

  let claimed = 0
  const released = []
  win.document.documentElement.dataset.dshProductStage = 'omnimux-accounts'
  win.__omnimuxStage = {
    claim() { claimed += 1 },
    release(id) { released.push(id) },
  }
  win.dispatchEvent = () => {}

  const opened = []
  const closed = []
  const state = makeState([{ id: 'files-1', type: 'editor' }])
  const service = {
    openTab(seed, scope) { opened.push({ seed, scope }) },
    closeTab(id, scope) { closed.push({ id, scope }) },
    getTab(id) { return id === 'omnimux-clip:studio' ? { id } : undefined },
    getSnapshot() { return { sessionId: 'sess-1', state } },
    subscribeState() { return () => {} },
  }
  first.bind({
    betterSidebar: service,
    layout: { closeDetails() { claimed += 10 } },
    sessions: { list: { getSnapshot: () => ({ current: 'sess-1' }) } },
  })

  const ok = await openWorkbench({ tabId: 'omnimux-clip:studio', title: '视频剪辑' })
  assert.equal(ok, true)
  assert.equal(claimed, 10, 'closeDetails may run; claim must not')
  assert.deepEqual(released, ['omnimux-accounts'])
  assert.equal(closed.length, 1)
  assert.equal(closed[0].id, 'files-1')
  assert.equal(opened.length, 1)
  assert.equal(opened[0].seed.type, 'omnimux-clip:studio')
  assert.equal(opened[0].seed.path, 'omnimux-clip:studio')
  assert.equal(opened[0].scope.sessionId, 'sess-1')
  assert.equal(win.document.documentElement.dataset.dshProductStage, undefined)
})

test('openWorkbench returns false without better-sidebar and does not throw', async () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  api.bind({ betterSidebar: null, layout: { closeDetails() {} } })
  const ok = await api.open({ tabId: 'omnimux-clip:studio', timeoutMs: 0 })
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
  assert.equal(ok, true, 'tab still opens on the current (empty) session')
  assert.equal(opened.length, 1)
  assert.equal(opened[0].scope, undefined)
  assert.equal(created, 0)
  assert.equal(claimed, 0)
})

test('applyDefaultWidth writes via store.reduce and skips a second write', () => {
  resetWorkbenchWidthMemory()
  const writes = []
  const store = {
    getSnapshot: () => ({ sessionId: 'sess-1', state: makeState([], { width: 400 }) }),
    reduce(fn) { writes.push(fn({ width: 400, panelOpen: true })) },
  }
  const env = { viewportWidth: 1440, officialSidebarWidth: 240 }
  const first = applyDefaultWidth({}, 'sess-1', store, env)
  assert.equal(first, 780)
  assert.equal(writes[0].width, 780)
  const second = applyDefaultWidth({}, 'sess-1', store, env)
  assert.equal(second, null)
  assert.equal(writes.length, 1)
})

test('workbenchGuiWidthPx occupies viewport minus the left rail', () => {
  const env = { viewportWidth: 1440, officialSidebarWidth: 56 }
  assert.equal(workbenchGuiWidthPx({ panelOpen: true, width: 780 }, env), 1384)
})

test('inferWorkbenchFocus maps collapsed / full / split geometry', () => {
  const env = { viewportWidth: 1440, officialSidebarWidth: 240 }
  assert.equal(inferWorkbenchFocus({ panelOpen: false, width: 780 }, env), WORKBENCH_FOCUS.chat)
  assert.equal(inferWorkbenchFocus({ panelOpen: true, width: 1200 }, env), WORKBENCH_FOCUS.gui)
  assert.equal(inferWorkbenchFocus({ panelOpen: true, width: 780 }, env), WORKBENCH_FOCUS.split)
})

test('setWorkbenchFocus chat/gui/split writes panel geometry and restores split width', () => {
  setupWindow()
  const env = { viewportWidth: 1440, officialSidebarWidth: 240 }
  let state = makeState([], { width: 780, panelOpen: true, sessionId: 'sess-1' })
  const store = {
    getSnapshot: () => ({ sessionId: 'sess-1', state }),
    reduce(fn) { state = fn(state) },
  }
  assert.equal(setWorkbenchFocus('chat', store, env), true)
  assert.equal(state.panelOpen, false)
  assert.equal(state.width, 780)
  assert.equal(setWorkbenchFocus('gui', store, env), true)
  assert.equal(state.panelOpen, true)
  assert.equal(state.width, 1200)
  assert.equal(setWorkbenchFocus('split', store, env), true)
  assert.equal(state.panelOpen, true)
  assert.equal(state.width, 780)
})

test('attachStore reapplies gui focus so default width cannot stomp it', () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  const env = { viewportWidth: 1440, officialSidebarWidth: 240 }
  let state = makeState([], { width: 780, panelOpen: true })
  const store = {
    getSnapshot: () => ({ sessionId: 'sess-attach', state }),
    reduce(fn) { state = fn(state) },
  }
  api.attachStore(store)
  assert.equal(setWorkbenchFocus('gui', store, env), true)
  assert.equal(state.width, 1200)
  state = { ...state, width: 780 }
  api.detachStore(store)
  api.attachStore(store)
  assert.equal(state.panelOpen, true)
  // Re-attach has no test env: live ruler is window.innerWidth (1440) minus a
  // missing official rail (0). The mode stays gui; default split width must not win.
  assert.equal(state.width, 1440)
})

test('applyDefaultWidth skips while focus is gui', () => {
  resetWorkbenchWidthMemory()
  resetWorkbenchFocusMemory()
  const env = { viewportWidth: 1440, officialSidebarWidth: 240 }
  let state = makeState([], { width: 1200, panelOpen: true })
  const store = {
    getSnapshot: () => ({ sessionId: 'sess-gui', state }),
    reduce(fn) { state = fn(state) },
  }
  assert.equal(setWorkbenchFocus('gui', store, env), true)
  const writes = []
  const counting = {
    getSnapshot: () => ({ sessionId: 'sess-gui', state }),
    reduce(fn) { writes.push(fn(state)) },
  }
  assert.equal(applyDefaultWidth({}, 'sess-gui', counting, env), null)
  assert.equal(writes.length, 0)
})

test('createWorkbenchSidebarStore.open never claims product stage', async () => {
  const win = setupWindow()
  const api = installWorkbenchGlobal(win)
  let claimed = 0
  win.__omnimuxStage = { claim() { claimed += 1 } }
  const opened = []
  const state = makeState([])
  api.bind({
    betterSidebar: {
      openTab(seed) { opened.push(seed) },
      getTab() { return { id: 'omnimux-clip:studio' } },
      getSnapshot() { return { sessionId: 'sess-1', state } },
    },
    sessions: { list: { getSnapshot: () => ({ current: 'sess-1' }) } },
  })
  const store = createWorkbenchSidebarStore({
    tabId: 'omnimux-clip:studio',
    title: '视频剪辑',
  })
  store.open()
  const started = Date.now()
  while (opened.length === 0 && Date.now() - started < 200) {
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
  assert.equal(claimed, 0)
  assert.equal(opened.length, 1)
  assert.equal(store.readBox().width, 0)
})
