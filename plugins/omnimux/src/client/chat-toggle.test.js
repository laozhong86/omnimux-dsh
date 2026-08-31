import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import {
  CHAT_TOGGLE_ATTR,
  CHAT_TOGGLE_SELECTOR,
  createChatToggleButton,
  ensureChatToggle,
  syncChatToggleState,
} from './chat-toggle.js'
import { WORKBENCH_FOCUS, installWorkbenchGlobal, resetWorkbenchForTests } from './workbench.js'

const previousWindow = globalThis.window
const previousDocument = globalThis.document

afterEach(() => {
  resetWorkbenchForTests(globalThis.window)
  if (previousWindow === undefined) delete globalThis.window
  else globalThis.window = previousWindow
  if (previousDocument === undefined) delete globalThis.document
  else globalThis.document = previousDocument
})

function setupFakeDOM() {
  const listeners = new Map()
  function createElem(tagName) {
    const attrs = new Map()
    const children = []
    const elem = {
      tagName: tagName.toUpperCase(),
      type: tagName === 'button' ? 'button' : undefined,
      className: '',
      style: {},
      innerHTML: '',
      children,
      get firstChild() { return children[0] || null },
      setAttribute(k, v) { attrs.set(k, String(v)) },
      getAttribute(k) { return attrs.get(k) },
      removeAttribute(k) { attrs.delete(k) },
      hasAttribute(k) { return attrs.has(k) },
      addEventListener(type, fn) {
        if (!listeners.has(elem)) listeners.set(elem, new Map())
        const m = listeners.get(elem)
        if (!m.has(type)) m.set(type, [])
        m.get(type).push(fn)
      },
      dispatchEvent(event) {
        const fns = listeners.get(elem)?.get(event.type) || []
        for (const fn of fns) fn(event)
      },
      insertBefore(newChild, refChild) {
        const idx = refChild ? children.indexOf(refChild) : -1
        if (idx >= 0) children.splice(idx, 0, newChild)
        else children.unshift(newChild)
        return newChild
      },
      querySelector(selector) {
        if (selector === CHAT_TOGGLE_SELECTOR || selector === `[${CHAT_TOGGLE_ATTR}="1"]`) {
          return children.find((c) => c.getAttribute?.(CHAT_TOGGLE_ATTR) === '1') || null
        }
        return null
      },
    }
    return elem
  }

  const cluster = createElem('div')
  cluster.setAttribute('data-dsh-toggle-cluster', '')
  const b1 = createElem('button')
  const b2 = createElem('button')
  cluster.children.push(b1, b2)

  const doc = {
    createElement: createElem,
    querySelector(sel) {
      if (sel.includes('data-dsh-toggle-cluster') || sel.includes('toggleCluster')) return cluster
      return null
    },
    documentElement: createElem('html'),
  }
  const win = {
    document: doc,
    addEventListener() {},
    removeEventListener() {},
  }
  globalThis.window = win
  globalThis.document = doc
  return { win, doc, cluster, b1, b2 }
}

test('createChatToggleButton creates a button with attributes and SVG', () => {
  const { doc } = setupFakeDOM()
  const btn = createChatToggleButton(doc)
  assert.equal(btn.getAttribute(CHAT_TOGGLE_ATTR), '1')
  assert.equal(btn.type, 'button')
  assert.match(btn.innerHTML, /<svg/)
})

test('ensureChatToggle inserts button at the first position of toggleCluster', () => {
  const { doc, cluster, b1 } = setupFakeDOM()
  assert.equal(cluster.children.length, 2)
  assert.equal(cluster.firstChild, b1)

  const toggle = ensureChatToggle(doc)
  assert.ok(toggle)
  assert.equal(cluster.children.length, 3)
  assert.equal(cluster.firstChild, toggle)
  assert.equal(toggle.getAttribute(CHAT_TOGGLE_ATTR), '1')

  // Calling again is idempotent
  const second = ensureChatToggle(doc)
  assert.equal(second, toggle)
  assert.equal(cluster.children.length, 3)
  assert.equal(cluster.firstChild, toggle)
})

test('clicking chat toggle toggles focus between gui and split', () => {
  const { win, doc } = setupFakeDOM()
  let currentFocus = WORKBENCH_FOCUS.split
  const focusChanges = []
  win.__omnimuxWorkbench = {
    getFocus: () => currentFocus,
    setFocus: (mode) => {
      currentFocus = mode
      focusChanges.push(mode)
      return true
    },
    getActiveTab: () => 'omnimux-assets:library',
    getSnapshot: () => ({ state: { panelOpen: true } }),
    subscribe: () => () => {},
  }

  const btn = createChatToggleButton(doc)
  // Initially in split -> click sets to gui
  btn.dispatchEvent({ type: 'click', preventDefault() {}, stopPropagation() {} })
  assert.deepEqual(focusChanges, [WORKBENCH_FOCUS.gui])

  // In gui -> click sets to split
  btn.dispatchEvent({ type: 'click', preventDefault() {}, stopPropagation() {} })
  assert.deepEqual(focusChanges, [WORKBENCH_FOCUS.gui, WORKBENCH_FOCUS.split])
})

test('syncChatToggleState hides button when panel is closed or tab is not workbench occupant', () => {
  const { win, doc } = setupFakeDOM()
  let panelOpen = true
  let activeTab = 'omnimux-assets:library'
  win.__omnimuxWorkbench = {
    getFocus: () => WORKBENCH_FOCUS.gui,
    getActiveTab: () => activeTab,
    getSnapshot: () => ({ state: { panelOpen } }),
    t: (k) => (k === 'workbench.chatShow' ? '展开中间会话栏' : '收起中间会话栏'),
  }

  const btn = createChatToggleButton(doc)
  assert.equal(btn.style.display, '')
  assert.equal(btn.getAttribute('aria-label'), '展开中间会话栏')

  // Panel closed -> hidden
  panelOpen = false
  syncChatToggleState(btn)
  assert.equal(btn.style.display, 'none')

  // Panel open but non-workbench tab -> hidden
  panelOpen = true
  activeTab = 'other-plugin:files'
  syncChatToggleState(btn)
  assert.equal(btn.style.display, 'none')

  // Workbench occupant -> shown
  activeTab = 'omnimux-workflow:canvas'
  syncChatToggleState(btn)
  assert.equal(btn.style.display, '')
})
