/**
 * sidebar-coordinator 回归测试（P0）：
 *   注册 below（rank 5）+ inline（kind:'inline'）后，连续 place()（模拟 2s retry
 *   与 MutationObserver 触发）不得抛 NotFoundError。
 *
 * 根因：placeInline 把「新建会话」按钮移进 inline wrapper 后，placeBelow 仍以
 * 按钮为锚点，其 nextElementSibling 不再是 root 直接子节点 → insertBefore 抛
 * NotFoundError。修复后 placeBelow 感知 wrapper 并锚在其后。
 */
import { JSDOM } from 'jsdom'
import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'

// install() 会 setInterval(2s) 轮询；测试里替换为 no-op，避免挂住测试进程。
// 注意：不在此恢复 —— node --test 每个文件独立进程，且模块跨测试缓存，第二
// 个测试的 install() 若在恢复后调用会重新排真实 interval，反而挂住进程。
globalThis.setInterval = () => 1
globalThis.clearInterval = () => {}

/** @type {JSDOM | undefined} */
let dom

afterEach(() => {
  dom?.window.close()
  dom = undefined
})

function setup() {
  // 对齐官方 AppFrame：data-sidebar-collapsed 写在 frame 根，不是 <html>。
  dom = new JSDOM(`<!doctype html><html><body>
    <div data-slot="root">
      <div class="frame" data-omnimux-frame>
        <div data-pane="sidebar">
          <div class="logoRow"><span>logo</span></div>
          <button class="newSession">新建会话</button>
        </div>
      </div>
    </div>
  </body></html>`, { url: 'http://127.0.0.1/' })
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  globalThis.MutationObserver = dom.window.MutationObserver
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.HTMLButtonElement = dom.window.HTMLButtonElement
}

test('below + inline 并存时 place() 幂等不抛，且 below 行落在 wrapper 之后', async () => {
  setup()
  const { installSidebarGlobal, SIDEBAR_GLOBAL } = await import('./sidebar-coordinator.js')
  installSidebarGlobal()
  const api = SIDEBAR_GLOBAL()
  assert.ok(api, 'window.__omnimuxSidebar installed')

  const belowBtn = document.createElement('button')
  belowBtn.id = 'below-entry'
  const inlineBtn = document.createElement('button')
  inlineBtn.id = 'inline-entry'

  const disposeBelow = api.register({ id: 'below-entry', rank: 5, create: () => belowBtn })
  const disposeInline = api.register({ id: 'inline-entry', kind: 'inline', create: () => inlineBtn })

  try {
    // 首次放置 + 连续 place()（模拟 2s retry / MutationObserver 反复触发）不抛。
    for (let i = 0; i < 6; i++) {
      assert.doesNotThrow(() => { api.place() })
    }

    // 结构断言：wrapper 包裹「新建会话」+ inline 按钮；below 行是 root 直接子且在其后。
    const root = document.querySelector('[data-pane="sidebar"]')
    const wrapper = root.querySelector('[data-omnimux-inline-row]')
    assert.ok(wrapper, 'inline wrapper 存在')
    assert.equal(wrapper.querySelector('.newSession').parentElement, wrapper, '新建会话按钮被移进 wrapper')
    assert.equal(wrapper.querySelector('#inline-entry'), inlineBtn, 'inline 按钮在 wrapper 内')
    assert.equal(belowBtn.parentElement, root, 'below 行仍是 root 直接子节点')
    const children = [...root.children]
    assert.ok(children.indexOf(wrapper) < children.indexOf(belowBtn), 'below 行排在 wrapper 之后')
  } finally {
    disposeBelow()
    disposeInline()
  }
})

test('仅 below 行（无 inline）时保持原有锚点行为', async () => {
  setup()
  const { installSidebarGlobal, SIDEBAR_GLOBAL } = await import('./sidebar-coordinator.js')
  installSidebarGlobal()
  const api = SIDEBAR_GLOBAL()

  const belowBtn = document.createElement('button')
  belowBtn.id = 'below-only'
  const disposeBelow = api.register({ id: 'below-only', rank: 5, create: () => belowBtn })

  try {
    for (let i = 0; i < 3; i++) {
      assert.doesNotThrow(() => { api.place() })
    }

    const root = document.querySelector('[data-pane="sidebar"]')
    const sessionBtn = root.querySelector('.newSession')
    assert.equal(belowBtn.parentElement, root, 'below 行是 root 直接子节点')
    assert.equal(belowBtn.previousElementSibling, sessionBtn, 'below 行紧接新建会话按钮')
    assert.equal(root.querySelector('[data-omnimux-inline-row]'), null, '无 inline wrapper')
  } finally {
    disposeBelow()
  }
})

test('收起时隐藏 inline 项目按钮，点加号弹出「新建会话 / 新建项目」菜单', async () => {
  setup()
  const { installSidebarGlobal, SIDEBAR_GLOBAL } = await import('./sidebar-coordinator.js')
  installSidebarGlobal()
  const api = SIDEBAR_GLOBAL()

  const inlineBtn = document.createElement('button')
  inlineBtn.id = 'inline-entry'
  inlineBtn.setAttribute('aria-label', '新建项目')
  let projectClicks = 0
  inlineBtn.addEventListener('click', () => { projectClicks += 1 })
  const sessionBtn = document.querySelector('.newSession')
  let sessionClicks = 0
  sessionBtn.addEventListener('click', () => { sessionClicks += 1 })

  const disposeInline = api.register({ id: 'inline-collapsed', kind: 'inline', create: () => inlineBtn })
  try {
    const frame = document.querySelector('[data-omnimux-frame]')
    frame.setAttribute('data-sidebar-collapsed', '')
    api.place()

    sessionBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }))
    let menu = document.getElementById('omnimux-sidebar-new-menu')
    assert.ok(menu, '收起点加号应弹出菜单')
    const items = [...menu.querySelectorAll('[role="menuitem"]')].map((el) => el.textContent)
    assert.deepEqual(items, ['新建会话', '新建项目'])
    assert.equal(sessionClicks, 0, '加号本身不立刻新建会话')

    menu.querySelectorAll('[role="menuitem"]')[0].click()
    assert.equal(sessionClicks, 1, '菜单第一项走官方新建会话')
    assert.equal(document.getElementById('omnimux-sidebar-new-menu'), null)

    sessionBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }))
    menu = document.getElementById('omnimux-sidebar-new-menu')
    assert.ok(menu, '再点加号重新弹出菜单')

    menu.querySelectorAll('[role="menuitem"]')[1].click()
    assert.equal(projectClicks, 1)
    assert.equal(document.getElementById('omnimux-sidebar-new-menu'), null, '选完关掉菜单')

    frame.removeAttribute('data-sidebar-collapsed')
    api.place()
    assert.equal(document.getElementById('omnimux-sidebar-new-menu'), null)

    sessionBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }))
    assert.equal(document.getElementById('omnimux-sidebar-new-menu'), null, '展开时加号不再拦截成菜单')
    assert.equal(sessionClicks, 2)
  } finally {
    disposeInline()
  }
})

test('收起 CSS 把官方加号从 flex:1 收回 36px，避免竖条', async () => {
  setup()
  const { installSidebarGlobal, SIDEBAR_GLOBAL } = await import('./sidebar-coordinator.js')
  installSidebarGlobal()
  const api = SIDEBAR_GLOBAL()

  const inlineBtn = document.createElement('button')
  inlineBtn.id = 'inline-flex-leak'
  inlineBtn.setAttribute('aria-label', '新建项目')
  const disposeInline = api.register({ id: 'inline-flex-leak', kind: 'inline', create: () => inlineBtn })
  try {
    const css = document.getElementById('omnimux-sidebar-inline-styles')?.textContent ?? ''
    assert.match(
      css,
      /\[data-sidebar-collapsed\][\s\S]*omnimux-sidebar-inline-new-session[\s\S]*flex:\s*none/,
      '收起必须覆盖展开时写在加号上的 flex:1，否则 display:contents 会把加号撑成竖列',
    )
    assert.match(css, /width:\s*36px/)
    assert.match(css, /height:\s*36px/)

    const frame = document.querySelector('[data-omnimux-frame]')
    frame.setAttribute('data-sidebar-collapsed', '')
    const sessionBtn = document.querySelector('.newSession')
    const sessionStyle = window.getComputedStyle(sessionBtn)
    assert.equal(sessionStyle.flexGrow, '0')
    assert.equal(sessionStyle.flexShrink, '0')
    assert.equal(sessionStyle.width, '36px')
    assert.equal(sessionStyle.height, '36px')
    assert.equal(window.getComputedStyle(inlineBtn).display, 'none')
  } finally {
    disposeInline()
  }
})

test('AppFrame 去掉 data-sidebar-collapsed 后 observer 关掉菜单', async () => {
  setup()
  const { installSidebarGlobal, SIDEBAR_GLOBAL } = await import('./sidebar-coordinator.js')
  installSidebarGlobal()
  const api = SIDEBAR_GLOBAL()

  const inlineBtn = document.createElement('button')
  inlineBtn.id = 'inline-observer'
  inlineBtn.setAttribute('aria-label', '新建项目')
  const disposeInline = api.register({ id: 'inline-observer', kind: 'inline', create: () => inlineBtn })
  try {
    const frame = document.querySelector('[data-omnimux-frame]')
    frame.setAttribute('data-sidebar-collapsed', '')
    api.place()

    const sessionBtn = document.querySelector('.newSession')
    sessionBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }))
    assert.ok(document.getElementById('omnimux-sidebar-new-menu'), '收起点加号应弹出菜单')

    frame.removeAttribute('data-sidebar-collapsed')
    await new Promise((resolve) => { setTimeout(resolve, 0) })
    assert.equal(document.getElementById('omnimux-sidebar-new-menu'), null, '展开后 observer 关掉菜单')

    sessionBtn.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }))
    assert.equal(document.getElementById('omnimux-sidebar-new-menu'), null, '展开时加号不再拦截成菜单')
  } finally {
    disposeInline()
  }
})
