import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { ADD_BUTTON_SELECTOR, closestAddButton, findAddButton, replayOfficialAdd } from './add-button.js'

const here = dirname(fileURLToPath(import.meta.url))
const installSource = readFileSync(join(here, 'install.js'), 'utf8')
const buttonSource = readFileSync(join(here, 'add-button.js'), 'utf8')
const indexSource = readFileSync(join(here, '../index.js'), 'utf8')

function fakeDoc(opts = {}) {
  const listeners = []
  const button = {
    className: opts.className || 'abc_add',
    attributes: { 'aria-haspopup': 'listbox' },
    clickCount: 0,
    getAttribute(name) { return this.attributes[name] },
    closest(sel) { return sel === ADD_BUTTON_SELECTOR || sel.includes('add') ? this : null },
    click() {
      this.clickCount += 1
      for (const fn of listeners) fn({ type: 'click', target: this })
    },
  }
  const card = { querySelector() { return opts.missing ? null : button } }
  return {
    button,
    querySelector(sel) {
      if (sel === ADD_BUTTON_SELECTOR) return opts.missing ? null : button
      if (sel === '[data-composer-card]') return card
      return null
    },
  }
}

describe('composer-add capture contract', () => {
  it('targets the official hashed add button and stops the native click', () => {
    assert.match(buttonSource, /ADD_BUTTON_SELECTOR = '\[data-composer-card\] button\[class\*="add"\]\[aria-haspopup="listbox"\]'/)
    assert.match(installSource, /stopImmediatePropagation/)
    assert.match(installSource, /state\.bypass/)
    assert.match(installSource, /MutationObserver/)
    assert.match(installSource, /closestAddButton\(event\.target\)/)
    assert.match(buttonSource, /ADD_BUTTON_INNER_SELECTOR = 'button\[class\*="add"\]\[aria-haspopup="listbox"\]'/)
  })

  it('closestAddButton does not use a descendant combinator', () => {
    const card = { closest(sel) { return sel === '[data-composer-card]' ? this : null } }
    const button = {
      nodeType: 1,
      closest(sel) {
        if (sel === 'button[class*="add"][aria-haspopup="listbox"]') return this
        if (sel === '[data-composer-card]') return card
        return null
      },
    }
    const svg = {
      nodeType: 1,
      closest(sel) {
        if (sel === 'button[class*="add"][aria-haspopup="listbox"]') return button
        return null
      },
    }
    assert.equal(closestAddButton(svg), button)
    const send = {
      nodeType: 1,
      closest() { return null },
    }
    assert.equal(closestAddButton(send), null)
  })

  it('is installed from the hub client without new slots or extra injects', () => {
    assert.match(indexSource, /installComposerAddCapture/)
    assert.match(indexSource, /export const inject = \['slots', 'locale'\]/)
    assert.doesNotMatch(indexSource, /conversation\.input\.add-menu/)
  })

  it('finds the add button and replays official click without recursion', () => {
    const doc = fakeDoc()
    const button = findAddButton(doc)
    assert.equal(button, doc.button)
    const state = { bypass: false }
    const ok = replayOfficialAdd(doc, state)
    assert.equal(ok, true)
    assert.equal(doc.button.clickCount, 1)
    assert.equal(state.bypass, false)
    assert.match(ADD_BUTTON_SELECTOR, /aria-haspopup="listbox"/)
  })

  it('does not match unrelated buttons', () => {
    const doc = fakeDoc({ missing: true })
    assert.equal(findAddButton(doc), null)
  })
})
