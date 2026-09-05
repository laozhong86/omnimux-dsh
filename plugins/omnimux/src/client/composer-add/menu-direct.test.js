import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  DIRECT_COMMANDS,
  findDirectRow,
  installMenuDirect,
} from './menu-direct.js'

class FakeRow {
  constructor(id, spans) {
    this.id = id
    this.spans = spans.map((text) => ({ textContent: text }))
    this.listeners = new Map()
  }

  querySelectorAll(selector) {
    return selector === 'span' ? this.spans : []
  }

  addEventListener(type, handler) {
    this.listeners.set(type, handler)
  }

  removeEventListener(type, handler) {
    if (this.listeners.get(type) === handler) this.listeners.delete(type)
  }

  dispatch(type, options = {}) {
    const event = {
      type,
      button: options.button ?? 0,
      ctrlKey: Boolean(options.ctrlKey),
      metaKey: Boolean(options.metaKey),
      altKey: Boolean(options.altKey),
      shiftKey: Boolean(options.shiftKey),
      currentTarget: this,
      prevented: false,
      stopped: false,
      immediateStopped: false,
      preventDefault() { this.prevented = true },
      stopPropagation() { this.stopped = true },
      stopImmediatePropagation() { this.immediateStopped = true },
    }
    this.listeners.get(type)?.(event)
    return event
  }
}

class FakeObserver {
  static instance = null

  constructor(callback) {
    this.callback = callback
    FakeObserver.instance = this
  }

  observe() {}

  disconnect() { this.disconnected = true }

  trigger() { this.callback() }
}

function createDoc(rows) {
  return {
    rows,
    documentElement: {},
    body: { dispatchEvent() {} },
    activeElement: { dispatchEvent() {} },
    defaultView: {},
    addEventListener() {},
    querySelectorAll(selector) {
      return selector.includes('[role="listbox"]') ? this.rows : []
    },
  }
}

function row(id, name, description = '') {
  return new FakeRow(id, ['host-icon', name, description])
}

describe('menu-direct matching', () => {
  it('matches only the exact command id, not icon span or matching descriptions', () => {
    const doc = createDoc([
      row('dsh-slash-option-command-0', 'other-command', '从资产库添加'),
      row('dsh-slash-option-command-1', DIRECT_COMMANDS.addLibrary, '其它描述'),
    ])
    const found = findDirectRow(doc, DIRECT_COMMANDS.addLibrary)
    assert.equal(found?.level, 1)
    assert.equal(found?.row.id, 'dsh-slash-option-command-1')
    assert.equal(findDirectRow(doc, DIRECT_COMMANDS.addFile), null)
  })

  it('allows the listbox shape fallback only with an exact controlled id', () => {
    const doc = createDoc([row('host-row-9', DIRECT_COMMANDS.addFile)])
    const found = findDirectRow(doc, DIRECT_COMMANDS.addFile)
    assert.equal(found?.level, 2)
    assert.equal(found?.row.id, 'host-row-9')
  })
})

describe('installMenuDirect', () => {
  it('intercepts one primary mouse gesture and swallows its paired click', () => {
    const target = row('dsh-slash-option-command-0', DIRECT_COMMANDS.addFile)
    const doc = createDoc([target])
    const calls = []
    const dispose = installMenuDirect(doc, {
      onAddFileFolder: () => calls.push('file'),
      onAddLibrary: () => calls.push('library'),
      observerFactory: FakeObserver,
    })

    const down = target.dispatch('mousedown')
    const click = target.dispatch('click')
    assert.deepEqual(calls, ['file'])
    assert.equal(down.immediateStopped, true)
    assert.equal(click.immediateStopped, true)
    dispose()
  })

  it('leaves right-click, modifier click, and click-only activation to the host fallback', () => {
    const target = row('dsh-slash-option-command-0', DIRECT_COMMANDS.addFile)
    const doc = createDoc([target])
    const calls = []
    const dispose = installMenuDirect(doc, {
      onAddFileFolder: () => calls.push('file'),
      onAddLibrary: () => calls.push('library'),
      observerFactory: FakeObserver,
    })

    assert.equal(target.dispatch('mousedown', { button: 2 }).prevented, false)
    assert.equal(target.dispatch('mousedown', { metaKey: true }).prevented, false)
    assert.equal(target.dispatch('click').prevented, false)
    assert.deepEqual(calls, [])
    dispose()
  })

  it('unbinds a reused row when its command text changes, then binds its new command', () => {
    const target = row('dsh-slash-option-command-0', DIRECT_COMMANDS.addFile)
    const doc = createDoc([target])
    const calls = []
    const dispose = installMenuDirect(doc, {
      onAddFileFolder: () => calls.push('file'),
      onAddLibrary: () => calls.push('library'),
      observerFactory: FakeObserver,
    })
    target.spans[1].textContent = DIRECT_COMMANDS.addLibrary
    FakeObserver.instance.trigger()
    target.dispatch('mousedown')
    target.dispatch('click')
    assert.deepEqual(calls, ['library'])
    dispose()
  })

  it('disposes observers and all direct row bindings', () => {
    const target = row('dsh-slash-option-command-0', DIRECT_COMMANDS.addLibrary)
    const doc = createDoc([target])
    let calls = 0
    const dispose = installMenuDirect(doc, {
      onAddFileFolder: () => {},
      onAddLibrary: () => { calls += 1 },
      observerFactory: FakeObserver,
    })
    dispose()
    target.dispatch('mousedown')
    assert.equal(calls, 0)
    assert.equal(FakeObserver.instance.disconnected, true)
  })
})
