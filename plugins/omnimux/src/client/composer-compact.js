/**
 * Composer compact (screens 1-2): adapt the official conversation composer to a
 * narrowed session column. Overlay only — no fork, no second composer, no
 * conversation-slot replacement. Selectors deliberately rely on data attributes
 * and `[class*=...]` substring matches because official CSS modules are hashed.
 *
 * Three density levels are driven by the live width of the composer card:
 *   full  (>= 560px) — everything shown
 *   short (>= 460px) — model label truncated, effort sub-label hidden
 *   icon  (<  460px) — only icons in the toolbar, model label minimal
 *
 * Also owns the empty-state anchor (logo+tagline mid, input pinned to the
 * bottom, Codex-style) and the conversation-column min-width guard.
 */

export const COMPOSER_COMPACT_STYLE_ID = 'omnimux-composer-compact-chrome'
export const COMPOSER_COMPACT_ATTR = 'data-omnimux-composer-density'
export const COMPOSER_COMPACT_DENSITY = Object.freeze({ full: 'full', short: 'short', icon: 'icon' })
export const COMPOSER_COMPACT_FULL_MIN_PX = 560
export const COMPOSER_COMPACT_SHORT_MIN_PX = 460
/** Keep in lockstep with WORKBENCH_CONVERSATION_MIN_PX. */
export const COMPOSER_COMPACT_CONVERSATION_MIN_PX = 360
/** Keep the workspace chip secondary to the adjacent Agent preset on narrow rows. */
export const COMPOSER_WORKSPACE_MAX_WIDTH_PX = 220

export const COMPOSER_COMPACT_CSS = `
/* (B4) conversation column keeps a minimum width — dragging the split anywhere
   below this is clamped by workbenchSplitMaxPanelPx; this guards the CSS side. */
html:not([data-omnimux-conversation-collapsed]) [class*="centerCol"]{
  min-width:${COMPOSER_COMPACT_CONVERSATION_MIN_PX}px!important;
}

/* (B2) content width follows the live column width instead of the official
   680px floor. The official value is:
   clamp(680px, calc(var(--dsh-conversation-column-width,0px) * 0.64), 920px)
   which is wider than the column below ~712px and crushes the toolbar. */
[data-phase]{
  --dsh-chat-content-width:min(
    920px,
    max(240px, calc(var(--dsh-conversation-column-width,0px) * 0.92))
  )!important;
}

/* (B6) Symmetrical card centering: eliminate scrollbar gutter bias and ensure
   strictly balanced left/right margins inside the conversation column.
   The composer card must ride the SAME content-width rail as the hero seats
   row ("测试 / 标准模式"), or the two will drift apart on wide/fullscreen
   columns (official card uses its own ~952px max-width while the seats row
   follows --dsh-chat-content-width). Lock both to the shared var. */
[data-composer-card]{
  width:100%!important;
  max-width:var(--dsh-chat-content-width)!important;
  margin-left:auto!important;
  margin-right:auto!important;
  box-sizing:border-box!important;
}
[data-composer-seat]{
  box-sizing:border-box!important;
}
[data-composer-seat] > *{
  width:100%!important;
  max-width:var(--dsh-chat-content-width)!important;
  margin-left:auto!important;
  margin-right:auto!important;
  box-sizing:border-box!important;
}

/* (B1) hero (no session yet): the whole stack is what the official scrollBody
   justify-content:center used to center. Pin the input bar to the bottom and
   let the HeroShell (logo + tagline) float centered in the leftover space
   (Codex reference). No transform centering — it would become a containing
   block for position:fixed descendants of the hero. */
[data-phase='hero'] [data-conversation-scroll]{
  justify-content:flex-start!important;
}
[data-phase='hero'] [data-composer-seat]{
  flex:1 1 auto;
  min-height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
}
[data-phase='hero'] [class*="composerHero"]{
  flex:1 1 auto;
  width:100%;
  align-self:stretch;
  justify-content:flex-end;
  padding-bottom:8px;
}
/* First child of composerHero = HeroShell (logo + tagline): eat the leftover
   space and centre within it. */
[data-phase='hero'] [class*="composerHero"] > :first-child{
  margin-top:auto;
  margin-bottom:auto;
  height:auto!important;
  min-height:0;
}

/* (B5) hero seats row ("测试 / 标准模式") shares the exact same centered content rail
   as [data-composer-card]. Sibling elements inside composerStack both use
   max-width: var(--dsh-chat-content-width) and margin: 0 auto so they are mathematically
   guaranteed to share the identical left and right alignment on every reflow frame,
   completely eliminating JS ResizeObserver lag or stale offset desynchronization. */
[data-phase='hero'] [class*="heroWorkspaceRow"]{
  width:100%!important;
  max-width:var(--dsh-chat-content-width)!important;
  min-width:0;
  margin-left:auto!important;
  margin-right:auto!important;
  padding-left:0!important;
  padding-right:0!important;
  box-sizing:border-box!important;
  flex-wrap:nowrap;
  overflow:hidden;
  position:relative!important;
  left:0!important;
}
/* The first control in this row is the official workspace trigger. Its 360px
   default is too greedy beside the Agent preset when the conversation is narrow. */
[data-phase='hero'] [class*="heroWorkspaceRow"] > button[aria-label][aria-haspopup='menu'][aria-expanded]:first-child{
  flex:0 1 ${COMPOSER_WORKSPACE_MAX_WIDTH_PX}px;
  min-width:0;
  max-width:min(100%,${COMPOSER_WORKSPACE_MAX_WIDTH_PX}px)!important;
  overflow:hidden;
}
[data-phase='hero'] [class*="heroWorkspaceRow"] > button[aria-label][aria-haspopup='menu'][aria-expanded]:first-child > span{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

/* (B3) density: short */
html[data-omnimux-composer-density='short'] [data-composer-card] [class*="triggerLabel"]{
  max-width:88px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
html[data-omnimux-composer-density='short'] [data-composer-card] [class*="triggerEffort"]{
  display:none;
}

/* (B3) density: icon */
html[data-omnimux-composer-density='icon'] [data-composer-card] [class*="triggerLabel"]{
  max-width:56px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
html[data-omnimux-composer-density='icon'] [data-composer-card] [class*="triggerEffort"]{
  display:none;
}
/* Permission / Plan chip: keep its icon, drop the text label at icon density. */
html[data-omnimux-composer-density='icon'] [data-composer-card] [class*="trigger"]:has([class*="triggerIcon"]) [class*="triggerLabel"]{
  display:none;
}
/* Text-only toolbar buttons become icon-sized. Never touch the .add (plus)
   button — it is already an icon. */
html[data-omnimux-composer-density='icon'] [data-composer-card] [class*="tools"] > button:not([class*="add"]){
  font-size:0;
  width:28px;
  height:28px;
  min-width:28px;
  padding:0;
  justify-content:center;
}
html[data-omnimux-composer-density='icon'] [data-composer-card] [class*="tools"] > button:not([class*="add"]) svg{
  width:14px;
  height:14px;
}
/* Keep the toolbar single-row: the official .row wraps, which drops the
   trailing cluster onto a second line and deforms the card. */
html[data-omnimux-composer-density='icon'] [data-composer-card] [class*="row"]{
  flex-wrap:nowrap!important;
  white-space:nowrap;
}
`

function hostWindow() {
  return typeof globalThis.window !== 'undefined' ? globalThis.window : undefined
}

function hostDocument() {
  return typeof globalThis.document !== 'undefined' ? globalThis.document : hostWindow()?.document
}

/** @type {ResizeObserver | null} */
let composerResizeObserver = null
/** @type {(() => void) | null} */
let composerResizeListener = null
/** @type {MutationObserver | null} */
let composerMountObserver = null
/** @type {Element | null} */
let observedTarget = null
/** @type {Document | null} */
let observerDoc = null

/**
 * Density from a live width (px). Pure, unit-testable.
 * @param {number} px
 * @returns {string} one of `full` | `short` | `icon`
 */
export function composerDensityForWidth(px) {
  const width = Number.isFinite(Number(px)) ? Number(px) : 0
  if (width >= COMPOSER_COMPACT_FULL_MIN_PX) return COMPOSER_COMPACT_DENSITY.full
  if (width >= COMPOSER_COMPACT_SHORT_MIN_PX) return COMPOSER_COMPACT_DENSITY.short
  return COMPOSER_COMPACT_DENSITY.icon
}

/**
 * Find the width probe for density: prefer the composer card, then the seat,
 * then the conversation column/scroll body.
 * @param {Document | undefined} doc
 * @returns {Element | null}
 */
function findComposerTarget(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  const card = doc.querySelector('[data-composer-card]')
  if (card) return card
  const seat = doc.querySelector('[data-composer-seat]')
  if (seat) return seat
  const conversation = doc.querySelector('[data-conversation-scroll], [class*="centerCol"]')
  return conversation || null
}

function measureWidth(el) {
  if (!el || typeof el.getBoundingClientRect !== 'function') return null
  const width = el.getBoundingClientRect().width
  return typeof width === 'number' && Number.isFinite(width) ? width : null
}

/**
 * Dock the hero seats row to the live composer-card box (fullscreen fix).
 * Writes CSS vars consumed by COMPOSER_COMPACT_CSS B5.
 * @param {Document | undefined} doc
 */
export function syncHeroWorkspaceRowToCard(doc = hostDocument()) {
  const root = doc?.documentElement
  if (!root?.style?.setProperty) return
  const card = doc?.querySelector?.('[data-composer-card]')
  const center = doc?.querySelector?.('[class*="centerCol"], [data-slot="conversation"]')
  if (!card || typeof card.getBoundingClientRect !== 'function') {
    try {
      root.style.removeProperty('--omnimux-composer-card-width')
      root.style.removeProperty('--omnimux-composer-card-offset')
    } catch { /* ignore */ }
    return
  }
  const cardBox = card.getBoundingClientRect()
  const centerBox = center && typeof center.getBoundingClientRect === 'function'
    ? center.getBoundingClientRect()
    : null
  const width = Math.round(cardBox.width)
  if (!(width > 0)) return
  // Offset of the card inside the conversation column (not the viewport).
  const offset = centerBox
    ? Math.max(0, Math.round(cardBox.left - centerBox.left))
    : Math.round(cardBox.left)
  root.style.setProperty('--omnimux-composer-card-width', `${width}px`)
  root.style.setProperty('--omnimux-composer-card-offset', `${offset}px`)
}

/**
 * Write the density attribute on `<html>` based on the current probe width.
 * Also keeps the hero seats row docked to the composer card.
 * @param {Document | undefined} [doc]
 */
export function applyComposerDensity(doc = hostDocument()) {
  const root = doc?.documentElement
  if (!root || typeof root.setAttribute !== 'function') return
  const target = findComposerTarget(doc)
  const width = target ? measureWidth(target) : null
  if (width == null) {
    if (typeof root.removeAttribute === 'function') root.removeAttribute(COMPOSER_COMPACT_ATTR)
  } else {
    root.setAttribute(COMPOSER_COMPACT_ATTR, composerDensityForWidth(width))
  }
  syncHeroWorkspaceRowToCard(doc)
}

/**
 * Inject (idempotently) the composer-compact CSS `<style>`.
 * @param {Document | undefined} [doc]
 */
export function ensureComposerCompactChrome(doc = hostDocument()) {
  if (!doc?.head) return null
  let style = doc.getElementById(COMPOSER_COMPACT_STYLE_ID)
  if (!style) {
    style = doc.createElement('style')
    style.id = COMPOSER_COMPACT_STYLE_ID
    doc.head.append(style)
  }
  if (style.textContent !== COMPOSER_COMPACT_CSS) style.textContent = COMPOSER_COMPACT_CSS
  return style
}

function observeComposerTarget(doc, target) {
  observedTarget = target
  const RO = globalThis.ResizeObserver
  if (typeof RO === 'function') {
    composerResizeObserver = new RO(() => { applyComposerDensity(doc) })
    composerResizeObserver.observe(target)
  } else {
    // jsdom / browsers without ResizeObserver: measure once + re-measure on resize.
    composerResizeListener = () => { applyComposerDensity(doc) }
    const win = hostWindow()
    if (win?.addEventListener) win.addEventListener('resize', composerResizeListener)
  }
}

/**
 * Start observing the composer width and keep `data-omnimux-composer-density`
 * fresh. A light MutationObserver re-binds once when the card mounts late
 * (never polls). Returns a disposer.
 * @param {Document | undefined} [doc]
 * @returns {() => void}
 */
export function installComposerCompactObserver(doc = hostDocument()) {
  if (!doc) return () => {}
  if (observerDoc === doc && (composerResizeObserver || composerResizeListener || composerMountObserver)) {
    return uninstallComposerCompactObserver
  }
  uninstallComposerCompactObserver()
  observerDoc = doc

  const target = findComposerTarget(doc)
  if (target) {
    observeComposerTarget(doc, target)
  } else if (typeof MutationObserver !== 'undefined') {
    composerMountObserver = new MutationObserver(() => {
      const next = findComposerTarget(doc)
      if (next && observedTarget !== next) {
        if (composerMountObserver) {
          try { composerMountObserver.disconnect() } catch { /* ignore */ }
          composerMountObserver = null
        }
        observeComposerTarget(doc, next)
      }
    })
    const root = doc.body || doc.documentElement
    if (root) composerMountObserver.observe(root, { childList: true, subtree: true })
  }

  applyComposerDensity(doc)
  return uninstallComposerCompactObserver
}

/** Tear down the observer (RO, fallback resize listener, mount watcher). */
export function uninstallComposerCompactObserver() {
  if (composerResizeObserver) {
    try { composerResizeObserver.disconnect() } catch { /* ignore */ }
    composerResizeObserver = null
  }
  if (composerResizeListener) {
    const win = hostWindow()
    if (win?.removeEventListener) win.removeEventListener('resize', composerResizeListener)
    composerResizeListener = null
  }
  if (composerMountObserver) {
    try { composerMountObserver.disconnect() } catch { /* ignore */ }
    composerMountObserver = null
  }
  observedTarget = null
  observerDoc = null
}

/** Test-only: drop state, the style tag, and the `<html>` density attr. */
export function resetComposerCompactForTests() {
  uninstallComposerCompactObserver()
  const doc = hostDocument()
  const root = doc?.documentElement
  if (root && typeof root.removeAttribute === 'function') {
    root.removeAttribute(COMPOSER_COMPACT_ATTR)
  }
  if (root?.style?.removeProperty) {
    try {
      root.style.removeProperty('--omnimux-composer-card-width')
      root.style.removeProperty('--omnimux-composer-card-offset')
    } catch { /* ignore */ }
  }
  const style = doc?.getElementById?.(COMPOSER_COMPACT_STYLE_ID)
  if (style && typeof style.remove === 'function') style.remove()
}
