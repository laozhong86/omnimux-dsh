import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import { CLIP_SENTINEL_PATH, CLIP_TAB_ID, createClipWorkbenchStore } from './workbench-store.js'

const previousWindow = globalThis.window

afterEach(() => {
  if (previousWindow === undefined) delete globalThis.window
  else globalThis.window = previousWindow
})

test('clip sidebar store.open talks to workbench and never claims product stage', async () => {
  let claimed = 0
  const opened = []
  const html = { dataset: {} }
  globalThis.window = {
    __omnimuxStage: { claim() { claimed += 1 } },
    __omnimuxWorkbench: {
      isOpen: (id) => opened.some((row) => row.tabId === id),
      subscribe: () => () => {},
      open: async (opts) => { opened.push(opts); return true },
      closePanel: () => {},
    },
    document: { documentElement: html },
  }

  const store = createClipWorkbenchStore((key) => (key === 'tab.title' ? '视频剪辑' : key))
  assert.equal(store.getSnapshot(), false)
  store.open()
  await Promise.resolve()
  assert.equal(claimed, 0)
  assert.equal(html.dataset.dshProductStage, undefined)
  assert.equal(opened.length, 1)
  assert.equal(opened[0].tabId, CLIP_TAB_ID)
  assert.equal(opened[0].path, CLIP_SENTINEL_PATH)
  assert.equal(opened[0].title, '视频剪辑')
  assert.equal(store.getSnapshot(), true)
  assert.equal(store.readBox().width, 0)
})

test('clip sidebar store.open is a no-op when workbench global is missing', () => {
  let claimed = 0
  globalThis.window = {
    __omnimuxStage: { claim() { claimed += 1 } },
  }
  const store = createClipWorkbenchStore(() => '视频剪辑')
  assert.doesNotThrow(() => { store.open() })
  assert.equal(claimed, 0)
  assert.equal(store.getSnapshot(), false)
})
