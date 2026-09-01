/**
 * @param {unknown} node
 * @returns {{ top: number, left: number, width: number, height: number } | null}
 */
function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== 'function') return null
  const rect = node.getBoundingClientRect()
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
  }
  return null
}

export const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
export const ACTIVE_STAGE_STORAGE_KEY = 'omnimux_active_product_stage'

/**
 * Known product-stage ID to root CSS class mapping for host-level defense in depth.
 */
export const STAGE_CSS_CLASS_MAP = {
  'omnimux-accounts': 'omnimux-accounts-stage',
  'omnimux-assets': 'omnimux-assets-stage',
  'omnimux-analytics': 'omnimux-analytics-stage',
  'omnimux-products': 'omnimux-products-stage',
  'omnimux-inspiration': 'omnimux-inspiration-stage',
  'omnimux-workflow': 'omnimux-workflow-stage',
  'omnimux-publish': 'omnimux-publish-stage',
  'omnimux-clip': 'omnimux-clip-stage',
  'omnimux-apps': 'omnimux-apps-stage',
}

const STAGE_MUTUAL_EXCLUSION_RULES = Object.entries(STAGE_CSS_CLASS_MAP).map(([stageId, className]) => {
  // First-level stage roots are direct children of the overlay seat. Scoping
  // this rule to those siblings avoids matching the active stage's own
  // header/body classes, which also contain the `-stage` fragment.
  return `html[data-dsh-product-stage="${stageId}"] [data-slot="shell.overlay"] > [class*="-stage"]:not(.${className}) { display: none !important; pointer-events: none !important; }`
}).join('\n')

/**
 * Open one first-level product page and tell the others to close.
 * @param {string} id
 */
export function claimProductStage(id) {
  try {
    if (id) window.localStorage.setItem(ACTIVE_STAGE_STORAGE_KEY, id)
  } catch {}
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id } }))
  document.documentElement.dataset.dshProductStage = id
  ensureProductStageChrome()
}

/**
 * Clear the product-stage mark when this page closes.
 * @param {string} id
 */
export function releaseProductStage(id) {
  if (document.documentElement.dataset.dshProductStage === id) {
    delete document.documentElement.dataset.dshProductStage
  }
  try {
    const current = window.localStorage.getItem(ACTIVE_STAGE_STORAGE_KEY)
    if (current === id) window.localStorage.removeItem(ACTIVE_STAGE_STORAGE_KEY)
  } catch {}
}

// First-level stage roots end in `-stage`. A `*=`-fragment match would also
// hide BEM internals and the vendored OpenReel studio classes (e.g.
// `bg-stage-bg`) whenever no product stage is active — the clip editor opened
// from the workflow canvas tab (#84).
export const PRODUCT_STAGE_CHROME = `
[data-slot="shell.overlay"]{pointer-events:none!important;}
[data-slot="shell.overlay"] > *{pointer-events:auto!important;}
html:not([data-dsh-product-stage]) [class$="-stage"]{display:none!important;pointer-events:none!important;}
${STAGE_MUTUAL_EXCLUSION_RULES}
html:not([data-dsh-product-stage]) [class*="toggleCluster"],
html:not([data-dsh-product-stage]) [class*="toggleCluster"] *{pointer-events:auto!important;z-index:300!important;}
html[data-dsh-product-stage] [data-dsh-better-sidebar],
html[data-dsh-product-stage] [data-dsh-better-sidebar] [class*="_panel"],
html[data-dsh-product-stage] [data-dsh-better-sidebar] [class*="_bottomPanel"],
html[data-dsh-product-stage] [data-dsh-panel-host],
html[data-dsh-product-stage] [class*="toggleCluster"],
html[data-dsh-product-stage] [data-slot="shell.sidebar.auxiliary"]{display:none!important;visibility:hidden!important;pointer-events:none!important;}
html[data-dsh-product-stage]{--dsh-sidebar-width:0px!important;--dsh-sidebar-height:0px!important;}
html[data-dsh-product-stage] #root{margin-right:0px!important;}
html[data-dsh-product-stage] #dsh-window-drag{-webkit-app-region:no-drag!important;pointer-events:none!important;}
html[data-dsh-product-stage] header{-webkit-app-region:drag!important;}
html[data-dsh-product-stage] header button,
html[data-dsh-product-stage] header input,
html[data-dsh-product-stage] header a,
html[data-dsh-product-stage] header select,
html[data-dsh-product-stage] header [role="button"],
html[data-dsh-product-stage] header [role="tab"],
html[data-dsh-product-stage] header [class*="controls"],
html[data-dsh-product-stage] header [class*="tabsContainer"]{-webkit-app-region:no-drag!important;}
html[data-dsh-product-stage] [data-slot="conversation.session.header"],
html[data-dsh-product-stage] [data-slot="conversation"] > header {display:none!important;}
html[data-dsh-product-stage] [role="treeitem"][aria-selected="true"]{background:transparent!important;}
html[data-dsh-product-stage] .dshDesktopConversationSurface > *:not([data-slot="shell.overlay"]),
html[data-dsh-product-stage] [data-slot="conversation.content"],
html[data-dsh-product-stage] [data-slot="input.trigger"] {visibility:hidden!important;}
`

export function ensureProductStageChrome() {
  const existing = document.getElementById('dsh-product-stage-chrome')
  if (existing instanceof HTMLStyleElement) {
    // 失效键：需包含 scoped better-sidebar panel 规则，否则重写以修复设置弹窗被误杀。
    if (!existing.textContent?.includes('data-dsh-better-sidebar] [class*="_panel"]')) existing.textContent = PRODUCT_STAGE_CHROME
  } else {
    const style = document.createElement('style')
    style.id = 'dsh-product-stage-chrome'
    style.textContent = PRODUCT_STAGE_CHROME
    document.head.append(style)
  }
  watchSelectedSessionClick()
}

function leaveProductStage() {
  if (!document.documentElement.dataset.dshProductStage) return
  delete document.documentElement.dataset.dshProductStage
  try {
    window.localStorage.removeItem(ACTIVE_STAGE_STORAGE_KEY)
  } catch {}
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id: '' } }))
}

function sessionRowPlainClick(target) {
  const row = target.closest('[role="treeitem"]')
  if (!(row instanceof HTMLElement)) return false
  if (target.closest('button') !== null) return false
  return true
}

/** 工作区行加号：`在“x”中新建会话` / New session in x。行内 pin/删是别的按钮。 */
function workspaceNewSessionButton(target) {
  const button = target.closest('button')
  if (!(button instanceof HTMLElement)) return false
  if (!button.closest('[role="treeitem"]')) return false
  return /新建会话|New session/i.test(button.getAttribute('aria-label') || '')
}

function newSessionMenuPick(target) {
  const item = target.closest('#omnimux-sidebar-new-menu [role="menuitem"]')
  if (!(item instanceof HTMLElement)) return false
  return /新会话|新建会话|new session/i.test(item.textContent || '')
}

/**
 * 官方侧栏「新会话」和品牌快捷键。收起轨的加号由协调器拦截出菜单，
 * 必须等真正的 click 冒泡（用户点了菜单「新建会话」或展开态直点）才关页。
 */
function shellNewSessionControl(target) {
  const button = target.closest('button')
  if (!(button instanceof HTMLElement)) return false
  if (button.closest('#omnimux-sidebar-new-menu')) return false
  if (button.closest('[role="treeitem"]')) return false
  if (String(button.className).includes('newSession')) return true
  const aria = (button.getAttribute('aria-label') || '').trim()
  return /^(新建会话|新会话|New session)$/i.test(aria)
}

/**
 * 任意工作区会话行离开产品页；已选中行官方 no-op 也要关。
 * 「新会话」官方会复用空白会话（看起来像没点），一级页必须自己关 overlay。
 */
function watchSelectedSessionClick() {
  if (document.documentElement.dataset.dshSessionCloser === '1') return
  document.documentElement.dataset.dshSessionCloser = '1'
  document.addEventListener('click', (event) => {
    if (!document.documentElement.dataset.dshProductStage) return
    const target = event.target
    if (!(target instanceof Element)) return
    if (sessionRowPlainClick(target) || workspaceNewSessionButton(target) || newSessionMenuPick(target)) {
      leaveProductStage()
    }
  }, true)
  document.addEventListener('click', (event) => {
    if (!document.documentElement.dataset.dshProductStage) return
    const target = event.target
    if (!(target instanceof Element)) return
    if (shellNewSessionControl(target)) leaveProductStage()
  })
}

/**
 * Cover the whole conversation column (header + body + composer) and expand
 * to the full viewport width so right-side auxiliary sidebars cannot squeeze it.
 * First-level product pages are not session views.
 * @returns {{ top: number, left: number, width: number, height: number }}
 */
export function readConversationBox() {
  let node = document.querySelector('[data-slot="conversation"]')
  let found = null
  while (node) {
    const box = sizableBox(node)
    if (box) {
      found = box
      break
    }
    node = node.parentElement
  }
  if (!found) {
    found = sizableBox(document.querySelector('[data-conversation-scroll]'))
  }
  if (found) {
    const winWidth = typeof window !== 'undefined' && typeof window.innerWidth === 'number' ? window.innerWidth : 0
    const winHeight = typeof window !== 'undefined' && typeof window.innerHeight === 'number' ? window.innerHeight : 0
    const width = winWidth > found.left ? Math.max(found.width, winWidth - found.left) : found.width
    const height = winHeight > found.top ? Math.max(found.height, winHeight - found.top) : found.height
    return { top: found.top, left: found.left, width, height }
  }
  const left = 56
  const winWidth = typeof window !== 'undefined' && typeof window.innerWidth === 'number' ? window.innerWidth : 1024
  const winHeight = typeof window !== 'undefined' && typeof window.innerHeight === 'number' ? window.innerHeight : 768
  return { top: 0, left, width: Math.max(8, winWidth - left), height: Math.max(8, winHeight) }
}
