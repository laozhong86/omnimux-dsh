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
    visible = true,
  } = opts
  const clicks = []
  const button = {
    className,
    clicks,
    getAttribute(name) {
      return name === 'aria-label' ? aria : null
    },
    closest(selector) {
      if (selector === '#omnimux-sidebar-new-menu') return menu ? {} : null
      if (selector === '[role="treeitem"]') return treeitem ? {} : null
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

function makeDoc(buttons) {
  return {
    querySelectorAll(selector) {
      if (selector === 'button') return buttons
      return []
    },
  }
}

describe('findNewSessionButton', () => {
  it('hits className newSession and skips menu / treeitem buttons', () => {
    const official = makeButton({ className: 'newSession foo' })
    const menu = makeButton({ className: 'newSession', menu: true })
    const tree = makeButton({ aria: '新建会话', treeitem: true })
    const found = findNewSessionButton(makeDoc([menu, tree, official]))
    assert.equal(found, official)
  })

  it('hits aria-label 新会话 / New session', () => {
    const zh = makeButton({ aria: '新会话' })
    assert.equal(findNewSessionButton(makeDoc([zh])), zh)
    const en = makeButton({ aria: 'New session' })
    assert.equal(findNewSessionButton(makeDoc([en])), en)
  })

  it('prefers the first visible hit', () => {
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
      now: (() => { let t = 0; return () => { t += 20; return t } })(),
      sleep: async () => {},
    }).then((result) => {
      assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
    })
  })

  it('clicks the official button once and succeeds when the session becomes blank', async () => {
    const button = makeButton({ className: 'newSession' })
    let blank = false
    const result = await clickOfficialNewSession({
      document: makeDoc([button]),
      isBlank: () => blank,
      timeoutMs: 200,
      pollMs: 1,
      now: (() => { let t = 0; return () => (t += 40) })(),
      sleep: async () => { blank = true },
    })
    assert.equal(button.clicks.length, 1)
    assert.equal(result.ok, true)
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
      now: (() => { let t = 0; return () => (t += 40) })(),
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
      now: (() => { let t = 0; return () => (t += 50) })(),
      sleep: async () => {},
    })
    assert.equal(button.clicks.length, 1)
    assert.deepEqual(result, { ok: false, error: 'newSessionFailed' })
  })
})
