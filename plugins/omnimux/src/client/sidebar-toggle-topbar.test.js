import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'
import { JSDOM } from 'jsdom'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  LEFT_COLLAPSED_HTML_ATTR,
  SIDEBAR_TOGGLE_TOPBAR_ATTR,
  SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR,
  TOPBAR_TOGGLE_GAP_PX,
  TOPBAR_TOGGLE_LEFT_PX,
  TOPBAR_TOGGLE_RIGHT_MARGIN_PX,
  TOPBAR_TOGGLE_SIZE_PX,
  TOPBAR_TOGGLE_Z_INDEX,
  applyTopbarToggleCssVars,
  computeChromeLayout,
  computeTabBarPadLeft,
  computeToggleLeftPx,
  ensureSidebarToggleTopbar,
  findOfficialSidebarToggle,
  installSidebarToggleTopbar,
  isLeftSidebarCollapsed,
  syncLeftCollapsedHtmlAttr,
} from './sidebar-toggle-topbar.js'
import { PRODUCT_STAGE_CHROME } from './conversation-box.js'

const here = dirname(fileURLToPath(import.meta.url))
const moduleSource = readFileSync(join(here, 'sidebar-toggle-topbar.js'), 'utf8')
const chromeSource = readFileSync(join(here, 'chrome.js'), 'utf8')
const workbenchSource = readFileSync(join(here, 'workbench.js'), 'utf8')

/** @type {JSDOM | undefined} */
let dom
const previous = {
  window: globalThis.window,
  document: globalThis.document,
  HTMLElement: globalThis.HTMLElement,
  MutationObserver: globalThis.MutationObserver,
}

afterEach(() => {
  dom?.window.close()
  dom = undefined
  globalThis.window = previous.window
  globalThis.document = previous.document
  globalThis.HTMLElement = previous.HTMLElement
  if (previous.MutationObserver === undefined) delete globalThis.MutationObserver
  else globalThis.MutationObserver = previous.MutationObserver
})

/**
 * @param {string} [html]
 */
function setup(html) {
  dom = new JSDOM(html || `<!doctype html><html><body>
    <div class="frame_abc" data-sidebar-collapsed>
      <div class="sidebarCol_x">
        <div class="logoRow_y">
          <button type="button" class="iconButton_z toggle_w" aria-label="打开侧边栏">T</button>
        </div>
      </div>
    </div>
    <div class="tabBar_n" data-dsh-better-sidebar>
      <div class="tabList_m"></div>
    </div>
  </body></html>`, { url: 'http://127.0.0.1/' })
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.MutationObserver = dom.window.MutationObserver
  return dom.window.document
}

describe('sidebar-toggle-topbar selectors', () => {
  it('finds toggle by zh aria-label', () => {
    const doc = setup()
    const btn = findOfficialSidebarToggle(doc)
    assert.ok(btn)
    assert.equal(btn.getAttribute('aria-label'), '打开侧边栏')
  })

  it('finds toggle by en Collapse sidebar aria-label', () => {
    const doc = setup(`<!doctype html><html><body>
      <button type="button" aria-label="Collapse sidebar">C</button>
    </body></html>`)
    const btn = findOfficialSidebarToggle(doc)
    assert.ok(btn)
    assert.equal(btn.getAttribute('aria-label'), 'Collapse sidebar')
  })

  it('falls back to logoRow toggle class fragment (no hash)', () => {
    const doc = setup(`<!doctype html><html><body>
      <div class="sidebarCol_hash">
        <div class="logoRow_hash">
          <button type="button" class="iconButton_hash toggle_hash">x</button>
        </div>
      </div>
    </body></html>`)
    const btn = findOfficialSidebarToggle(doc)
    assert.ok(btn)
    assert.match(String(btn.className), /toggle/)
  })

  it('source never hardcodes CSS-module hashes', () => {
    assert.doesNotMatch(moduleSource, /_9I8crW/)
    assert.doesNotMatch(moduleSource, /nArs4W/)
    assert.doesNotMatch(moduleSource, /_6PxbcG/)
  })
})

describe('ensureSidebarToggleTopbar', () => {
  it('marks html + button and writes CSS vars', () => {
    const doc = setup()
    const btn = ensureSidebarToggleTopbar(doc)
    assert.ok(btn)
    assert.equal(btn.getAttribute(SIDEBAR_TOGGLE_TOPBAR_ATTR), '1')
    assert.equal(doc.documentElement.hasAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR), true)
    assert.equal(
      doc.documentElement.style.getPropertyValue('--omnimux-topbar-toggle-left'),
      `${TOPBAR_TOGGLE_LEFT_PX}px`,
    )
    const expectedEnd = TOPBAR_TOGGLE_LEFT_PX + TOPBAR_TOGGLE_SIZE_PX + TOPBAR_TOGGLE_GAP_PX
    assert.equal(
      doc.documentElement.style.getPropertyValue('--omnimux-topbar-toggle-end'),
      `${expectedEnd}px`,
    )
  })

  it('injects the toggle into the tabBar anchor and returns it', () => {
    const doc = setup()
    const btn = ensureSidebarToggleTopbar(doc)
    assert.ok(btn)
    const tabBar = doc.querySelector('[class*="tabBar"]')
    assert.ok(tabBar, 'fixture has a tabBar anchor')
    assert.ok(tabBar.contains(btn), 'injected button should live inside the tabBar anchor')
  })

  it('sets no-drag and z-index >= 50 on the toggle', () => {
    const doc = setup()
    const btn = ensureSidebarToggleTopbar(doc)
    assert.ok(btn)
    const region = btn.style.getPropertyValue('-webkit-app-region')
      || btn.style.webkitAppRegion
      || btn.getAttribute('style')
      || ''
    assert.match(String(region), /no-drag/)
    const zRaw = btn.style.getPropertyValue('z-index') || btn.style.zIndex || ''
    const zMatch = String(btn.getAttribute('style') || '').match(/z-index:\s*(\d+)/)
    const z = Number(zRaw) || Number(zMatch?.[1] || 0)
    assert.ok(z >= TOPBAR_TOGGLE_Z_INDEX, `expected z-index >= ${TOPBAR_TOGGLE_Z_INDEX}, got ${z}`)
  })

  it('hides the official trigger and mirrors collapse onto html', () => {
    const doc = setup()
    ensureSidebarToggleTopbar(doc)
    const official = doc.querySelector('button[aria-label="打开侧边栏"]')
    assert.ok(official, 'official toggle present')
    assert.equal(official.getAttribute('data-omnimux-original-sidebar-toggle'), '1')
    assert.equal(doc.documentElement.hasAttribute(LEFT_COLLAPSED_HTML_ATTR), true)
    // aria on the injected button follows collapse state
    const btn = doc.querySelector('[data-omnimux-sidebar-toggle-topbar="1"]')
    assert.equal(btn?.getAttribute('aria-label'), '打开侧边栏')
  })

  it('official finder never returns our injected button (no click recursion)', () => {
    const doc = setup()
    const injected = ensureSidebarToggleTopbar(doc)
    assert.ok(injected)
    const found = findOfficialSidebarToggle(doc)
    assert.ok(found)
    assert.notEqual(found, injected)
  })

  it('mirrors frame data-sidebar-collapsed onto html', () => {
    const doc = setup()
    ensureSidebarToggleTopbar(doc)
    assert.equal(doc.documentElement.hasAttribute(LEFT_COLLAPSED_HTML_ATTR), true)
    assert.equal(isLeftSidebarCollapsed(doc), true)

    doc.querySelector('[data-sidebar-collapsed]')?.removeAttribute('data-sidebar-collapsed')
    syncLeftCollapsedHtmlAttr(doc)
    assert.equal(doc.documentElement.hasAttribute(LEFT_COLLAPSED_HTML_ATTR), false)
  })

  it('applyTopbarToggleCssVars accepts custom geometry', () => {
    const doc = setup()
    applyTopbarToggleCssVars(doc, { left: 80, size: 36, gap: 8 })
    assert.equal(doc.documentElement.style.getPropertyValue('--omnimux-topbar-toggle-end'), '124px')
  })

  it('computeToggleLeftPx: collapsed -> top-left, expanded -> sidebar top-right', () => {
    const doc = setup()
    // collapsed fixture (data-sidebar-collapsed on frame)
    assert.equal(computeToggleLeftPx(doc), TOPBAR_TOGGLE_LEFT_PX)
    // expand: remove collapse attr and give the sidebar a real width
    doc.querySelector('[data-sidebar-collapsed]')?.removeAttribute('data-sidebar-collapsed')
    const col = doc.querySelector('[class*="sidebarCol"]')
    assert.ok(col)
    col.style.width = '280px'
    Object.defineProperty(col, 'offsetWidth', { value: 280, configurable: true })
    const expected = 280 - TOPBAR_TOGGLE_SIZE_PX - TOPBAR_TOGGLE_RIGHT_MARGIN_PX
    assert.equal(computeToggleLeftPx(doc), expected)
  })
})

describe('computeChromeLayout tab pad (overlap, not collapsed boolean)', () => {
  const toggleEndCollapsed = TOPBAR_TOGGLE_LEFT_PX + TOPBAR_TOGGLE_SIZE_PX + TOPBAR_TOGGLE_GAP_PX

  function mockRect(el, { left, width, height = 900 }) {
    el.getBoundingClientRect = () => ({
      x: left, y: 0, left, top: 0, width, height, right: left + width, bottom: height,
    })
  }

  it('A expanded+gui: panel at 280, pad 0 (toggle lives on the rail)', () => {
    const doc = setup(`<!doctype html><html><body>
      <div class="frame_abc">
        <div class="sidebarCol_x"></div>
      </div>
      <div data-dsh-better-sidebar>
        <div class="nArs4W_panel">
          <div class="nArs4W_tabBar"></div>
        </div>
      </div>
    </body></html>`)
    const col = doc.querySelector('[class*="sidebarCol"]')
    Object.defineProperty(col, 'offsetWidth', { value: 280, configurable: true })
    mockRect(col, { left: 0, width: 280 })
    mockRect(doc.querySelector('[class*="panel"]'), { left: 280, width: 1448 })
    const layout = computeChromeLayout(doc)
    assert.equal(layout.collapsed, false)
    assert.equal(layout.toggleLeft, 280 - TOPBAR_TOGGLE_SIZE_PX - TOPBAR_TOGGLE_RIGHT_MARGIN_PX)
    assert.equal(layout.tabPadLeft, 0)
    assert.equal(computeTabBarPadLeft(doc), 0)
  })

  it('B collapsed+gui fill: panel at 0, pad = toggleEnd (labels clear the button)', () => {
    const doc = setup(`<!doctype html><html><body>
      <div class="frame_abc" data-sidebar-collapsed>
        <div class="sidebarCol_x"></div>
      </div>
      <div data-dsh-better-sidebar>
        <div class="nArs4W_panel">
          <div class="nArs4W_tabBar"></div>
        </div>
      </div>
    </body></html>`)
    mockRect(doc.querySelector('[class*="panel"]'), { left: 0, width: 1728 })
    const layout = computeChromeLayout(doc)
    assert.equal(layout.collapsed, true)
    assert.equal(layout.toggleLeft, TOPBAR_TOGGLE_LEFT_PX)
    assert.equal(layout.tabPadLeft, toggleEndCollapsed)
  })

  it('D collapsed+split: panel starts right of toggle, pad 0 (must not shove tabs)', () => {
    const doc = setup(`<!doctype html><html><body>
      <div class="frame_abc" data-sidebar-collapsed>
        <div class="sidebarCol_x"></div>
      </div>
      <div data-dsh-better-sidebar>
        <div class="nArs4W_panel">
          <div class="nArs4W_tabBar"></div>
        </div>
      </div>
    </body></html>`)
    mockRect(doc.querySelector('[class*="panel"]'), { left: 640, width: 1088 })
    const layout = computeChromeLayout(doc)
    assert.equal(layout.collapsed, true)
    assert.equal(layout.tabPadLeft, 0)
  })

  it('stale gui (collapsed but panel still at 280) keeps pad 0 so tabs do not jump further right', () => {
    const doc = setup(`<!doctype html><html><body>
      <div class="frame_abc" data-sidebar-collapsed>
        <div class="sidebarCol_x"></div>
      </div>
      <div data-dsh-better-sidebar>
        <div class="nArs4W_panel">
          <div class="nArs4W_tabBar"></div>
        </div>
      </div>
    </body></html>`)
    mockRect(doc.querySelector('[class*="panel"]'), { left: 280, width: 1448 })
    assert.equal(computeTabBarPadLeft(doc), 0)
  })

  it('writes --omnimux-tabbar-pad-left from layout', () => {
    const doc = setup(`<!doctype html><html><body>
      <div class="frame_abc" data-sidebar-collapsed>
        <div class="sidebarCol_x"></div>
      </div>
      <div data-dsh-better-sidebar>
        <div class="nArs4W_panel">
          <div class="nArs4W_tabBar"></div>
        </div>
      </div>
    </body></html>`)
    mockRect(doc.querySelector('[class*="panel"]'), { left: 0, width: 1728 })
    applyTopbarToggleCssVars(doc)
    assert.equal(
      doc.documentElement.style.getPropertyValue('--omnimux-tabbar-pad-left'),
      `${toggleEndCollapsed}px`,
    )
  })
})

describe('installSidebarToggleTopbar', () => {
  it('cleanup removes markers and vars', () => {
    const doc = setup()
    const cleanup = installSidebarToggleTopbar(doc)
    assert.equal(doc.documentElement.hasAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR), true)
    cleanup()
    assert.equal(doc.documentElement.hasAttribute(SIDEBAR_TOGGLE_TOPBAR_HTML_ATTR), false)
    assert.equal(doc.documentElement.hasAttribute(LEFT_COLLAPSED_HTML_ATTR), false)
    assert.equal(doc.querySelector(`[${SIDEBAR_TOGGLE_TOPBAR_ATTR}="1"]`), null)
  })
})

describe('chrome CSS contracts (conversation-box PRODUCT_STAGE_CHROME)', () => {
  it('includes topbar toggle fixed geometry, visual-0 rail, tabBar padding, blue dot', () => {
    assert.match(PRODUCT_STAGE_CHROME, /data-omnimux-sidebar-toggle-topbar/)
    assert.match(PRODUCT_STAGE_CHROME, /--omnimux-topbar-toggle-end/)
    assert.match(PRODUCT_STAGE_CHROME, /position:\s*fixed/)
    assert.match(PRODUCT_STAGE_CHROME, /-webkit-app-region:\s*no-drag/)
    assert.match(PRODUCT_STAGE_CHROME, /z-index:\s*9999/)
    assert.match(PRODUCT_STAGE_CHROME, /data-sidebar-collapsed\][^{]*\[class\*="sidebarCol"\]/)
    assert.match(PRODUCT_STAGE_CHROME, /width:\s*0\s*!important/)
    // Collapsed rail zeroes the first frame grid track so centerCol has balanced margins
    assert.match(PRODUCT_STAGE_CHROME, /grid-template-columns:\s*0px\s+minmax\(0px,\s*1fr\)\s+0px\s*!important/)
    assert.match(PRODUCT_STAGE_CHROME, /\[class\*="tabBar"\]/)
    assert.match(PRODUCT_STAGE_CHROME, /padding-left:\s*var\(--omnimux-tabbar-pad-left/)
    assert.match(PRODUCT_STAGE_CHROME, /data-omnimux-left-collapsed/)
    // Must not pad every tabBar (would shove tabBarPlus / bottom strip).
    assert.doesNotMatch(
      PRODUCT_STAGE_CHROME,
      /data-omnimux-left-collapsed\] \[class\*="tabBar"\]/,
    )
    assert.match(PRODUCT_STAGE_CHROME, /::after/)
    assert.match(PRODUCT_STAGE_CHROME, /--dsw-alias-/)
    assert.doesNotMatch(PRODUCT_STAGE_CHROME, /#[0-9a-fA-F]{3,8}\b/)
  })
})

describe('hard constraints', () => {
  it('never imports or calls setConversationCollapsed', () => {
    assert.doesNotMatch(moduleSource, /setConversationCollapsed/)
    assert.doesNotMatch(moduleSource, /from ['"]\.\/conversation-collapse/)
    assert.doesNotMatch(moduleSource, /from ['"]\.\/chat-toggle/)
    assert.doesNotMatch(moduleSource, /import\s+.*conversation-collapse/)
    assert.doesNotMatch(moduleSource, /import\s+.*chat-toggle/)
  })

  it('chrome.js mounts installSidebarToggleTopbar with cleanup', () => {
    assert.match(chromeSource, /installSidebarToggleTopbar/)
    assert.match(chromeSource, /sidebar-toggle-topbar\.js/)
  })

  it('workbench collapsed fallback respects topbar feature (0)', () => {
    assert.match(workbenchSource, /collapsedLeftRailFallbackPx|data-omnimux-sidebar-toggle-topbar/)
  })
})
