import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { clickOfficialNewSession, findNewSessionButton } from './new-session-click.js'

const here = dirname(fileURLToPath(import.meta.url))
const source = readFileSync(join(here, 'new-session-click.js'), 'utf8')

describe('new-session-click.js isolation', () => {
  it('never calls sessions.create and does not import workflow/market', () => {
    assert.doesNotMatch(source, /sessions\.create/)
    assert.doesNotMatch(source, /omnimux-workflow/)
    assert.doesNotMatch(source, /omnimux-market/)
    assert.doesNotMatch(source, /startReplicationProject/)
    assert.doesNotMatch(source, /runNewProject/)
  })
})

function makeButton(opts) {
  const {
    className = '',
    aria = '',
    menu = false,
    treeitem = false,
    topbar = false,
    visible = true,
  } = opts
  const clicks = []
  const button = {
    className,
    clicks,
    getAttribute(name) {
      if (name === 'aria-label') return aria
      if (name === 'data-omnimux-topbar-new-session') return topbar ? '1' : null
      return null
    },
    hasAttribute(name) {
      return name === 'data-omnimux-topbar-new-session' ? topbar : false
    },
    closest(selector) {
      if (selector === '#omnimux-sidebar-new-menu') return menu ? {} : null
      if (selector === '[role="treeitem"]') return treeitem ? {} : null
      if (selector === '[data-omnimux-topbar-new-session="1"]') return topbar ? {} : null
      if (selector === '[data-omnimux-topbar-new-session]') return topbar ? {} : null
      return null
    },
    getClientRects() {
      return visible ? [{ width: 32, height: 32 }] : []
    },
    click() {
      clicks.push(1)
    },
  }
  return button
}

function makeMenuItem(opts) {
  const { text = '', aria = '' } = opts
  const clicks = []
  return {
    textContent: text,
    clicks,
    getAttribute(name) {
      return name === 'aria-label' ? aria : null
    },
    click() {
      clicks.push(1)
    },
  }
}

function makeDoc(buttons, opts = {}) {
  const getMenuItems = typeof opts.getMenuItems === 'function'
    ? opts.getMenuItems
    : () => opts.menuItems || []
  return {
    querySelector(selector) {
      if (selector !== '#omnimux-sidebar-new-menu') return null
      const items = getMenuItems()
      if (!items.length) return null
      return {
        querySelectorAll(inner) {
          if (inner === '[role="menuitem"]') return items
          return []
        },
      }
    },
    querySelectorAll(selector) {
      if (selector === 'button') return buttons
      if (selector === '#omnimux-sidebar-new-menu [role="menuitem"]') return getMenuItems()
      return []
    },
  }
}

function tickingNow(step = 40) {
  let t = 0
  return () => {
    t += step
    return t
  }
}

describe('findNewSessionButton', () => {
  it('hits className newSession and skips menu / treeitem / topbar attr', () => {
    const official = makeButton({ className: 'newSession foo' })
    const menu = makeButton({ className: 'newSession', menu: true })
    const tree = makeButton({ aria: '新建会话', treeitem: true })
    const topbar = makeButton({ aria: '新建会话', topbar: true })
    const found = findNewSessionButton(makeDoc([menu, tree, topbar, official]))
    assert.equal(found, official)
  })

  it('does not treat data-omnimux-topbar-new-session as the official control', () => {
    const topbar = makeButton({ className: 'newSession', aria: '新建会话', topbar: true })
    assert.equal(findNewSessionButton(makeDoc([topbar])), null)
    const official = makeButton({ className: 'newSession extra' })
    assert.equal(findNewSessionButton(makeDoc([topbar, official])), official)
  })

  it('hits aria-label 新会话 / New session', () => {
    const zh = makeButton({ aria: '新会话' })
    assert.equal(findNewSessionButton(makeDoc([zh])), zh)
    const en = makeButton({ aria: 'New session' })
    assert.equal(findNewSessionButton(makeDoc([en])), en)
  })

  it('prefers the first visible class* newSession hit', () => {
    const hidden = makeButton({ className: 'newSession', visible: false })
    const shown = makeButton({ className: 'newSession extra', visible: true })
    assert.equal(findNewSessionButton(makeDoc([hidden, shown])), shown)
  })

  it('returns null when nothing matches', () => {
    assert.equal(findNewSessionButton(makeDoc([makeButton({ aria: '设置' })])), null)
    assert.equal(findNewSessionButton(null), null)
  })
})

describe('clickOfficialNewSession', () => {
  it('fails without a button and never creates a session', () => {
    return clickOfficialNewSession({
      document: makeDoc([]),
      timeoutMs: 10,
      pollMs: 1,
      now: tickingNow(20),
      sleep: async () => {},
    }).then((result) => {
      assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
    })
  })

  it('clicks the official button once and returns the new session id', async () => {
    const button = makeButton({ className: 'newSession' })
    let id = 'old-session'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => id } }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([button]), defaultView: win },
      window: win,
      timeoutMs: 200,
      pollMs: 1,
      now: tickingNow(40),
      sleep: async () => { id = 'new-session' },
    })
    assert.equal(button.clicks.length, 1)
    assert.deepEqual(result, { ok: true, sessionId: 'new-session' })
  })

  it('succeeds when getActiveSessionId changes after the click', async () => {
    const button = makeButton({ className: 'newSession' })
    let id = 'old'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => id } }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([button]), defaultView: win },
      window: win,
      isBlank: () => false,
      timeoutMs: 200,
      pollMs: 1,
      now: tickingNow(40),
      sleep: async () => { id = 'new-sess' },
    })
    assert.equal(result.ok, true)
    assert.equal(result.sessionId, 'new-sess')
  })

  it('times out as newSessionFailed when still not blank and id is unchanged', async () => {
    const button = makeButton({ className: 'newSession' })
    const result = await clickOfficialNewSession({
      document: makeDoc([button]),
      isBlank: () => false,
      timeoutMs: 80,
      pollMs: 10,
      now: tickingNow(50),
      sleep: async () => {},
    })
    assert.equal(button.clicks.length, 1)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
  })

  it('clicks only the session menuitem when the collapsed menu is already open', async () => {
    const official = makeButton({ className: 'newSession' })
    const sessionItem = makeMenuItem({ text: '新建会话' })
    const projectItem = makeMenuItem({ text: '新建项目' })
    let id = 'old-session'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => id } }
    sessionItem.click = function click() {
      this.clicks.push(1)
      id = 'new-session'
    }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([official], { menuItems: [sessionItem, projectItem] }), defaultView: win },
      window: win,
      timeoutMs: 200,
      pollMs: 1,
      now: tickingNow(40),
      sleep: async () => {},
    })
    assert.equal(official.clicks.length, 0)
    assert.equal(sessionItem.clicks.length, 1)
    assert.equal(projectItem.clicks.length, 0)
    assert.deepEqual(result, { ok: true, sessionId: 'new-session' })
  })

  it('does not click Create project / 新建项目 menuitems', async () => {
    const sessionEn = makeMenuItem({ text: 'New session' })
    const projectEn = makeMenuItem({ text: 'Create project' })
    let id = 'old-session'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => id } }
    sessionEn.click = function click() {
      this.clicks.push(1)
      id = 'new-session'
    }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([], { menuItems: [projectEn, sessionEn] }), defaultView: win },
      window: win,
      timeoutMs: 200,
      pollMs: 1,
      now: tickingNow(40),
      sleep: async () => {},
    })
    assert.equal(sessionEn.clicks.length, 1)
    assert.equal(projectEn.clicks.length, 0)
    assert.deepEqual(result, { ok: true, sessionId: 'new-session' })
  })

  it('clicks the session menuitem after the official button opens the menu', async () => {
    const official = makeButton({ className: 'newSession' })
    const sessionItem = makeMenuItem({ text: '新会话' })
    const projectItem = makeMenuItem({ text: '新建项目' })
    let id = 'old-session'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => id } }
    let menuOpen = false
    official.click = function click() {
      this.clicks.push(1)
      menuOpen = true
    }
    sessionItem.click = function click() {
      this.clicks.push(1)
      id = 'new-session'
    }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([official], {
        getMenuItems: () => (menuOpen ? [sessionItem, projectItem] : []),
      }), defaultView: win },
      window: win,
      timeoutMs: 200,
      pollMs: 1,
      now: tickingNow(40),
      sleep: async () => {},
    })
    assert.equal(official.clicks.length, 1)
    assert.equal(sessionItem.clicks.length, 1)
    assert.equal(projectItem.clicks.length, 0)
    assert.deepEqual(result, { ok: true, sessionId: 'new-session' })
  })

  it('picks the session menuitem on the next poll if the menu appears after click', async () => {
    const official = makeButton({ className: 'newSession' })
    const sessionItem = makeMenuItem({ text: '新建会话' })
    const projectItem = makeMenuItem({ text: 'Create project' })
    let id = 'old-session'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => id } }
    let menuOpen = false
    sessionItem.click = function click() {
      this.clicks.push(1)
      id = 'new-session'
    }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([official], {
        getMenuItems: () => (menuOpen ? [sessionItem, projectItem] : []),
      }), defaultView: win },
      window: win,
      timeoutMs: 200,
      pollMs: 1,
      now: tickingNow(40),
      sleep: async () => { menuOpen = true },
    })
    assert.equal(official.clicks.length, 1)
    assert.equal(sessionItem.clicks.length, 1)
    assert.equal(projectItem.clicks.length, 0)
    assert.deepEqual(result, { ok: true, sessionId: 'new-session' })
  })

  it('returns newSessionFailed when the menu is clicked but the session never blanks', async () => {
    const sessionItem = makeMenuItem({ text: '新建会话' })
    const projectItem = makeMenuItem({ text: '新建项目' })
    const result = await clickOfficialNewSession({
      document: makeDoc([], { menuItems: [sessionItem, projectItem] }),
      isBlank: () => false,
      timeoutMs: 80,
      pollMs: 10,
      now: tickingNow(50),
      sleep: async () => {},
    })
    assert.equal(sessionItem.clicks.length, 1)
    assert.equal(projectItem.clicks.length, 0)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
  })

  it('accepts official blank reuse when the confirmed target keeps its id', async () => {
    const sessionItem = makeMenuItem({ text: 'New Session' })
    const snapshots = [
      { current: 'session-blank', byId: { 'session-blank': { blank: true } } },
      { current: 'session-blank', byId: { 'session-blank': { blank: true } } },
    ]
    let index = 0
    const sessions = {
      list: {
        getSnapshot() {
          return snapshots[Math.min(index++, snapshots.length - 1)]
        },
      },
    }
    const result = await clickOfficialNewSession({
      document: makeDoc([], { menuItems: [sessionItem] }),
      sessions,
      timeoutMs: 80,
      pollMs: 10,
      now: tickingNow(50),
      sleep: async () => {},
    })
    assert.equal(sessionItem.clicks.length, 1)
    assert.deepEqual(result, { ok: true, sessionId: 'session-blank', reusedBlank: true })
  })

  it('rejects a non-blank official current target even if attachments change', async () => {
    const sessionItem = makeMenuItem({ text: 'New Session' })
    let attachmentId = 'old-attachment-id'
    const win = { __omnimuxAttachments: { getActiveSessionId: () => attachmentId } }
    const sessions = {
      list: {
        getSnapshot() {
          return { current: 'session-old', byId: { 'session-old': { blank: false } } }
        },
      },
    }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([], { menuItems: [sessionItem] }), defaultView: win },
      window: win,
      sessions,
      timeoutMs: 80,
      pollMs: 10,
      now: tickingNow(50),
      sleep: async () => { attachmentId = 'unrelated-attachment-projection' },
    })
    assert.equal(sessionItem.clicks.length, 1)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
  })

  it('fails when an official click leaves the active session id unchanged', async () => {
    const sessionItem = makeMenuItem({ text: 'New Session' })
    const projectItem = makeMenuItem({ text: 'Create Project' })
    const win = { __omnimuxAttachments: { getActiveSessionId: () => 'session-294ee3ed' } }
    const result = await clickOfficialNewSession({
      document: { ...makeDoc([], { menuItems: [sessionItem, projectItem] }), defaultView: win },
      window: win,
      timeoutMs: 80,
      pollMs: 10,
      now: tickingNow(50),
      sleep: async () => {},
    })
    assert.equal(sessionItem.clicks.length, 1)
    assert.equal(projectItem.clicks.length, 0)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
  })

  it('does not treat a clicked menu as success when a real user message remains and id is unchanged', async () => {
    const sessionItem = makeMenuItem({ text: 'New Session' })
    const user = { textContent: 'hello from user', tagName: 'DIV' }
    const scroll = {
      textContent: 'hello from user'.padEnd(80, 'x'),
      querySelector(selector) {
        return selector === '[data-role="user"]' ? user : null
      },
    }
    const win = { __omnimuxAttachments: { getActiveSessionId: () => 'session-same' } }
    const base = makeDoc([], { menuItems: [sessionItem] })
    const doc = {
      ...base,
      defaultView: win,
      querySelector(selector) {
        if (selector === '[data-slot="conversation.session.header"]') return { textContent: '夏日护肤' }
        if (selector === '[data-conversation-scroll]') return scroll
        return base.querySelector(selector)
      },
    }
    const result = await clickOfficialNewSession({
      document: doc,
      window: win,
      timeoutMs: 80,
      pollMs: 10,
      now: tickingNow(50),
      sleep: async () => {},
    })
    assert.equal(sessionItem.clicks.length, 1)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
  })
})
