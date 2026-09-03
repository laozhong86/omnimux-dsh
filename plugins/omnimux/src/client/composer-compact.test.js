import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import {
  COMPOSER_COMPACT_ATTR,
  COMPOSER_COMPACT_CSS,
  COMPOSER_COMPACT_DENSITY,
  COMPOSER_COMPACT_STYLE_ID,
  applyComposerDensity,
  composerDensityForWidth,
  ensureComposerCompactChrome,
  installComposerCompactObserver,
  resetComposerCompactForTests,
} from './composer-compact.js'

const previousWindow = globalThis.window
const previousDocument = globalThis.document
const previousResizeObserver = globalThis.ResizeObserver

afterEach(() => {
  resetComposerCompactForTests()
  if (previousResizeObserver === undefined) delete globalThis.ResizeObserver
  else globalThis.ResizeObserver = previousResizeObserver
  if (previousWindow === undefined) delete globalThis.window
  else globalThis.window = previousWindow
  if (previousDocument === undefined) delete globalThis.document
  else globalThis.document = previousDocument
})

class FakeResizeObserver {
  static instances = []
  constructor(cb) {
    this.cb = cb
    this.observed = []
    this.disconnected = false
    FakeResizeObserver.instances.push(this)
  }
  observe(el) { this.observed.push(el) }
  disconnect() { this.disconnected = true }
  trigger() { this.cb() }
}

/**
 * Minimal document/window with a live `cardWidth` that findComposerTarget reads.
 * @returns {{ doc, win, resizeListeners, attrs, setCardWidth }}
 */
function setupDoc() {
  const attrs = new Map()
  const headChildren = []
  let cardWidth = null
  const html = {
    setAttribute(k, v) { attrs.set(k, String(v)) },
    removeAttribute(k) { attrs.delete(k) },
    hasAttribute(k) { return attrs.has(k) },
    getAttribute(k) { return attrs.has(k) ? attrs.get(k) : null },
  }
  const head = {
    append(node) { headChildren.push(node) },
  }
  const resizeListeners = []
  const win = {
    innerWidth: 1200,
    document: null,
    localStorage: { getItem() { return null }, setItem() {} },
    addEventListener(type, fn) { if (type === 'resize') resizeListeners.push(fn) },
    removeEventListener(type, fn) {
      const i = resizeListeners.indexOf(fn)
      if (i >= 0) resizeListeners.splice(i, 1)
    },
  }
  const doc = {
    head,
    documentElement: html,
    body: {},
    defaultView: globalThis,
    getElementById(id) { return headChildren.find((n) => n.id === id) || null },
    createElement(tag) {
      const node = { tagName: tag.toUpperCase(), id: '', textContent: '' }
      node.remove = () => {
        const i = headChildren.indexOf(node)
        if (i >= 0) headChildren.splice(i, 1)
      }
      return node
    },
    querySelector(sel) {
      if (sel === '[data-composer-card]') {
        return cardWidth == null ? null : { getBoundingClientRect: () => ({ width: cardWidth }) }
      }
      return null
    },
  }
  win.document = doc
  globalThis.document = doc
  globalThis.window = win
  return { doc, win, resizeListeners, attrs, setCardWidth: (w) => { cardWidth = w } }
}

test('composerDensityForWidth maps widths to full/short/icon', () => {
  assert.equal(composerDensityForWidth(700), COMPOSER_COMPACT_DENSITY.full)
  assert.equal(composerDensityForWidth(560), COMPOSER_COMPACT_DENSITY.full)
  assert.equal(composerDensityForWidth(559), COMPOSER_COMPACT_DENSITY.short)
  assert.equal(composerDensityForWidth(460), COMPOSER_COMPACT_DENSITY.short)
  assert.equal(composerDensityForWidth(459), COMPOSER_COMPACT_DENSITY.icon)
  assert.equal(composerDensityForWidth(0), COMPOSER_COMPACT_DENSITY.icon)
  assert.equal(composerDensityForWidth(NaN), COMPOSER_COMPACT_DENSITY.icon)
  assert.equal(composerDensityForWidth('700'), COMPOSER_COMPACT_DENSITY.full)
})

test('ensureComposerCompactChrome injects the style id and the CSS fragments', () => {
  const { doc } = setupDoc()
  const style = ensureComposerCompactChrome(doc)
  assert.equal(doc.getElementById(COMPOSER_COMPACT_STYLE_ID), style)
  assert.equal(style.id, COMPOSER_COMPACT_STYLE_ID)
  assert.match(style.textContent, /justify-content:flex-end/)
  assert.match(style.textContent, /--dsh-chat-content-width/)
  assert.match(style.textContent, /min-width:360px/)
  assert.match(style.textContent, /data-omnimux-composer-density='short'/)
  assert.match(style.textContent, /data-omnimux-composer-density='icon'/)
  assert.match(style.textContent, /conversation-scroll/)
  // Idempotent: a second call must not create a second <style>.
  const again = ensureComposerCompactChrome(doc)
  assert.equal(again, style)
})

test('ensureComposerCompactChrome is idempotent and copies CSS once', () => {
  const { doc } = setupDoc()
  const first = ensureComposerCompactChrome(doc)
  first.textContent = 'stale'
  const second = ensureComposerCompactChrome(doc)
  assert.equal(second, first)
  assert.notEqual(first.textContent, 'stale')
  assert.equal(first.textContent, COMPOSER_COMPACT_CSS)
})

test('installComposerCompactObserver writes density from the card width via ResizeObserver', () => {
  const { doc, setCardWidth } = setupDoc()
  setCardWidth(400)
  globalThis.ResizeObserver = FakeResizeObserver
  FakeResizeObserver.instances = []
  const dispose = installComposerCompactObserver(doc)
  assert.equal(doc.documentElement.getAttribute(COMPOSER_COMPACT_ATTR), COMPOSER_COMPACT_DENSITY.icon)
  assert.equal(FakeResizeObserver.instances.length, 1)
  assert.equal(FakeResizeObserver.instances[0].observed.length, 1)

  setCardWidth(700)
  FakeResizeObserver.instances[0].trigger()
  assert.equal(doc.documentElement.getAttribute(COMPOSER_COMPACT_ATTR), COMPOSER_COMPACT_DENSITY.full)

  setCardWidth(500)
  FakeResizeObserver.instances[0].trigger()
  assert.equal(doc.documentElement.getAttribute(COMPOSER_COMPACT_ATTR), COMPOSER_COMPACT_DENSITY.short)

  dispose()
  assert.equal(FakeResizeObserver.instances[0].disconnected, true)
})

test('installComposerCompactObserver falls back to resize listener when ResizeObserver is absent', () => {
  const { doc, resizeListeners, setCardWidth } = setupDoc()
  setCardWidth(400)
  delete globalThis.ResizeObserver
  const dispose = installComposerCompactObserver(doc)
  assert.equal(doc.documentElement.getAttribute(COMPOSER_COMPACT_ATTR), COMPOSER_COMPACT_DENSITY.icon)
  assert.equal(resizeListeners.length, 1)

  setCardWidth(700)
  resizeListeners[0]()
  assert.equal(doc.documentElement.getAttribute(COMPOSER_COMPACT_ATTR), COMPOSER_COMPACT_DENSITY.full)

  dispose()
  assert.equal(resizeListeners.length, 0)
})

test('applyComposerDensity removes the attr when no target is present', () => {
  const { doc, setCardWidth } = setupDoc()
  doc.documentElement.setAttribute(COMPOSER_COMPACT_ATTR, COMPOSER_COMPACT_DENSITY.full)
  setCardWidth(null)
  applyComposerDensity(doc)
  assert.equal(doc.documentElement.hasAttribute(COMPOSER_COMPACT_ATTR), false)
})

test('resetComposerCompactForTests removes the style tag and the attr', () => {
  const { doc, setCardWidth } = setupDoc()
  setCardWidth(400)
  globalThis.ResizeObserver = FakeResizeObserver
  FakeResizeObserver.instances = []
  ensureComposerCompactChrome(doc)
  const dispose = installComposerCompactObserver(doc)
  assert.ok(doc.getElementById(COMPOSER_COMPACT_STYLE_ID))
  assert.equal(doc.documentElement.getAttribute(COMPOSER_COMPACT_ATTR), COMPOSER_COMPACT_DENSITY.icon)
  dispose()
  resetComposerCompactForTests()
  assert.equal(doc.getElementById(COMPOSER_COMPACT_STYLE_ID), null)
  assert.equal(doc.documentElement.hasAttribute(COMPOSER_COMPACT_ATTR), false)
})
