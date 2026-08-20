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

/**
 * Open one first-level product page and tell the others to close.
 * @param {string} id
 */
export function claimProductStage(id) {
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
}

export const PRODUCT_STAGE_CHROME = `
[data-slot="shell.overlay"]{pointer-events:none!important;}
html:not([data-dsh-product-stage]) [class*="toggleCluster"],
html:not([data-dsh-product-stage]) [class*="toggleCluster"] *{pointer-events:auto!important;z-index:300!important;}
html[data-dsh-product-stage] [class*="toggleCluster"]{display:none!important;}
html[data-dsh-product-stage] #dsh-window-drag{-webkit-app-region:no-drag!important;pointer-events:none!important;}
html[data-dsh-product-stage] header{-webkit-app-region:no-drag!important;}
html[data-dsh-product-stage] [data-slot="conversation.session.header"],
html[data-dsh-product-stage] [data-slot="conversation"] > header {display:none!important;}
html[data-dsh-product-stage] [role="treeitem"][aria-selected="true"]{background:transparent!important;}
`

export function ensureProductStageChrome() {
  const existing = document.getElementById('dsh-product-stage-chrome')
  if (existing instanceof HTMLStyleElement) {
    if (!existing.textContent?.includes('dsh-window-drag')) existing.textContent = PRODUCT_STAGE_CHROME
  } else {
    const style = document.createElement('style')
    style.id = 'dsh-product-stage-chrome'
    style.textContent = PRODUCT_STAGE_CHROME
    document.head.append(style)
  }
  watchSelectedSessionClick()
}

/**
 * Official workspace treats a click on the already-selected session as a no-op,
 * so currentSession never changes and the product page stays up. Close it here.
 */
function watchSelectedSessionClick() {
  if (document.documentElement.dataset.dshSessionCloser === '1') return
  document.documentElement.dataset.dshSessionCloser = '1'
  document.addEventListener('click', (event) => {
    if (!document.documentElement.dataset.dshProductStage) return
    const target = event.target
    if (!(target instanceof Element)) return
    const row = target.closest('[role="treeitem"][aria-selected="true"]')
    if (!(row instanceof HTMLElement)) return
    if (target.closest('button') !== null) return
    delete document.documentElement.dataset.dshProductStage
    window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id: '' } }))
  }, true)
}

/**
 * Cover the whole conversation column (header + body + composer).
 * First-level product pages are not session views.
 * @returns {{ top: number, left: number, width: number, height: number }}
 */
export function readConversationBox() {
  let node = document.querySelector('[data-slot="conversation"]')
  while (node) {
    const box = sizableBox(node)
    if (box) return box
    node = node.parentElement
  }
  const preferred = sizableBox(document.querySelector('[data-conversation-scroll]'))
  if (preferred) return preferred
  const left = 56
  return { top: 0, left, width: Math.max(8, window.innerWidth - left), height: Math.max(8, window.innerHeight) }
}
