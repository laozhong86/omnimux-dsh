import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { ADD_BUTTON_SELECTOR, bindAddButton, findAddButton, replayOfficialAdd } from './add-button.js'
import { closeNativeAddMenu, nativeAddMenuIsOpen, openNativeAddMenu } from './menu-dom.js'

const here = dirname(fileURLToPath(import.meta.url))
const installSource = readFileSync(join(here, 'install.js'), 'utf8')
const buttonSource = readFileSync(join(here, 'add-button.js'), 'utf8')
const indexSource = readFileSync(join(here, '../index.js'), 'utf8')
const commandsSource = readFileSync(join(here, 'commands.js'), 'utf8')

function fakeDoc(opts = {}) {
  const button = {
    className: opts.className || 'abc_add',
    attributes: { 'aria-haspopup': 'listbox' },
    clickCount: 0,
    listeners: [],
    getAttribute(name) { return this.attributes[name] },
    addEventListener(type, fn, cap) { this.listeners.push({ type, fn, cap }) },
    removeEventListener() {},
    click() {
      this.clickCount += 1
      for (const row of this.listeners) {
        if (row.type === 'click') row.fn({ type: 'click', currentTarget: this, preventDefault() {}, stopImmediatePropagation() {} })
      }
    },
  }
  return {
    button,
    querySelector(sel) {
      if (sel === ADD_BUTTON_SELECTOR) return opts.missing ? null : button
      return null
    },
  }
}

describe('composer-add capture contract', () => {
  it('binds the official + button directly and still stops native click', () => {
    assert.match(buttonSource, /ADD_BUTTON_SELECTOR = '\[data-composer-card\] button\[class\*="add"\]\[aria-haspopup="listbox"\]'/)
    assert.match(installSource, /bindAddButton/)
    assert.match(buttonSource, /addEventListener\('click', onClick, true\)/)
    assert.match(installSource, /stopImmediatePropagation/)
    assert.match(installSource, /openNativeAddMenu/)
    assert.match(installSource, /MutationObserver/)
  })

  it('bindAddButton is idempotent and uses capture', () => {
    const clicks = []
    const button = {
      listeners: [],
      addEventListener(type, fn, cap) { this.listeners.push({ type, fn, cap }) },
    }
    assert.equal(bindAddButton(button, () => { clicks.push(1) }), true)
    assert.equal(bindAddButton(button, () => { clicks.push(2) }), false)
    assert.equal(button.listeners.length, 1)
    assert.equal(button.listeners[0].cap, true)
  })

  it('is installed from the hub client without new slots or extra injects', () => {
    assert.match(indexSource, /installComposerAddCapture/)
    assert.match(indexSource, /registerComposerAddCommands/)
    assert.match(indexSource, /export const inject = \['slots', 'locale'\]/)
    assert.doesNotMatch(indexSource, /conversation\.input\.add-menu/)
    assert.match(commandsSource, /name: 'add-file'/)
    assert.match(commandsSource, /name: 'add-from-library'/)
    assert.match(commandsSource, /ctx\.inject\(\['commandUi'\]/)
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

describe('native add menu', () => {
  it('renders 命令 / 添加文件 / 从资产库添加', () => {
    const created = []
    const doc = {
      getElementById: () => null,
      head: { appendChild() {} },
      body: { appendChild(node) { created.push(node) } },
      createElement(tag) {
        const node = {
          tag,
          className: '',
          style: {},
          disabled: false,
          innerHTML: '',
          children: [],
          listeners: {},
          setAttribute() {},
          addEventListener(type, fn) { this.listeners[type] = fn },
          appendChild(child) { this.children.push(child) },
          querySelectorAll() { return [] },
        }
        return node
      },
      querySelector() { return null },
      querySelectorAll() { return [] },
    }
    const labels = []
    const t = (key) => ({
      'composerAdd.commands': '命令…',
      'composerAdd.addFile': '添加文件',
      'composerAdd.fromLibrary': '从资产库添加',
      'composerAdd.needSession': '需要会话',
    }[key] || key)
    openNativeAddMenu(doc, {
      anchor: { bottom: 10, left: 20 },
      t,
      canAdd: true,
      onCommand: () => {},
      onAddFile: () => {},
      onAddLibrary: () => {},
    })
    const menu = created[0]
    assert.equal(menu.children.length, 3)
    assert.deepEqual(menu.children.map((c) => c.innerHTML.replace(/<[^>]+>/g, '')), ['命令…', '添加文件', '从资产库添加'])
    closeNativeAddMenu({ querySelectorAll() { return [] } })
    assert.equal(typeof nativeAddMenuIsOpen, 'function')
    assert.equal(labels.length, 0)
  })
})
