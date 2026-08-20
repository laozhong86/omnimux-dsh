/**
 * DOM overlay that covers DeepSeek product chrome with the configured brand.
 * Official React nodes stay in the tree — swapping them unmounts the sidebar.
 * Selectors bind official SVG viewBoxes and the HTML title, not hashed CSS classes.
 */

import {
  BOOT_WINDOW_KEY,
  DEFAULT_CONFIG,
  FALLBACK_BRAND_TEXTS,
  FISH_VIEWBOX,
  HERO_FISH_MIN_WIDTH,
  OFFICIAL_PRODUCT_TITLE,
  PREVIEW_BADGE_TEXTS,
  WORDMARK_VIEWBOX,
} from './defaults.js'

/**
 * @typedef {import('./defaults.js').BrandConfig} BrandConfig
 */

const BRAND_ATTR = 'data-omnimux-brand'
const COVER_ATTR = 'data-omnimux-covered'
const HIDE_ATTR = 'data-omnimux-hide'
const STYLE_ID = 'omnimux-brand-overlay'
const TITLE_SUFFIX = ` — ${OFFICIAL_PRODUCT_TITLE}`

/**
 * Merge a partial boot payload onto schema defaults.
 * @param {Partial<BrandConfig> | null | undefined} raw Boot payload or missing tap.
 * @returns {BrandConfig} complete overlay config.
 */
export function resolveConfig(raw) {
  return {
    productName: raw?.productName ?? DEFAULT_CONFIG.productName,
    logoSvg: raw?.logoSvg ?? DEFAULT_CONFIG.logoSvg,
    wordmarkText: raw?.wordmarkText ?? DEFAULT_CONFIG.wordmarkText,
    replaceHeroMark: raw?.replaceHeroMark ?? DEFAULT_CONFIG.replaceHeroMark,
    hidePreviewBadge: raw?.hidePreviewBadge ?? DEFAULT_CONFIG.hidePreviewBadge,
    rewriteWelcome: raw?.rewriteWelcome ?? DEFAULT_CONFIG.rewriteWelcome,
  }
}

/**
 * Read the host-injected boot payload from `window`.
 * @param {Window} win Browser window.
 * @returns {BrandConfig} complete overlay config.
 */
export function configFromWindow(win) {
  const raw = win[BOOT_WINDOW_KEY]
  return resolveConfig(raw && typeof raw === 'object' ? raw : undefined)
}

/**
 * Start the overlay and return a disposer that restores official chrome.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Resolved overlay config.
 * @returns {() => void} restore official marks, title, favicon, and copy.
 */
export function startOverlay(document, config) {
  const restores = []
  let applying = false
  const paint = () => {
    if (applying) return
    applying = true
    try {
      applyOverlay(document, config, restores)
    } finally {
      applying = false
    }
  }
  paint()
  const view = document.defaultView
  const observer = new view.MutationObserver(paint)
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
  })
  return () => {
    observer.disconnect()
    while (restores.length > 0) restores.pop()()
  }
}

/**
 * Apply one overlay pass. Idempotent: already-covered official nodes are skipped.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Resolved overlay config.
 * @param {Array<() => void>} restores Disposer stack owned by {@link startOverlay}.
 */
export function applyOverlay(document, config, restores) {
  ensureStyle(document, restores)
  rewriteTitle(document, config.productName, restores)
  replaceFavicon(document, config.logoSvg, restores)
  sweepOrphanCovers(document)
  coverBrandText(document, config, restores)
  coverWordmarks(document, config, restores)
  coverRailFish(document, config, restores)
  coverHeroFish(document, config, restores)
  if (config.hidePreviewBadge) hidePreviewBadges(document, restores)
  if (config.rewriteWelcome) rewriteWelcomeCopy(document, config.productName, restores)
}

/**
 * Inject the cover/hide rules once.
 * @param {Document} document Browser document.
 * @param {Array<() => void>} restores Disposer stack.
 */
function ensureStyle(document, restores) {
  if (document.getElementById(STYLE_ID) !== null) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = [
    `svg[${COVER_ATTR}]{opacity:0 !important}`,
    `[${HIDE_ATTR}]{visibility:hidden !important}`,
    `button:hover>[${BRAND_ATTR}="fish"]{visibility:hidden !important;opacity:0 !important}`,
  ].join('')
  document.head.append(style)
  restores.push(() => { style.remove() })
}

/**
 * Rewrite the official product title in `document.title`.
 * @param {Document} document Browser document.
 * @param {string} productName Replacement product name.
 * @param {Array<() => void>} restores Disposer stack.
 */
function rewriteTitle(document, productName, restores) {
  const current = document.title
  const next = brandedTitle(current, productName)
  if (next === current) return
  if (!restores.some(entry => entry._title)) {
    const original = current.includes(OFFICIAL_PRODUCT_TITLE) ? current : brandedTitleInverse(current, productName)
    const restore = () => { document.title = original }
    restore._title = true
    restores.push(restore)
  }
  document.title = next
}

/**
 * Map an official or mixed title onto the configured product name.
 * @param {string} title Current document title.
 * @param {string} productName Replacement product name.
 * @returns {string} rewritten title.
 */
export function brandedTitle(title, productName) {
  if (title === OFFICIAL_PRODUCT_TITLE) return productName
  if (title.endsWith(TITLE_SUFFIX)) return `${title.slice(0, -TITLE_SUFFIX.length)} — ${productName}`
  return title
}

/**
 * Invert {@link brandedTitle} when the overlay captured a title it already rewrote.
 * @param {string} title Current branded title.
 * @param {string} productName Configured product name.
 * @returns {string} official title to restore.
 */
function brandedTitleInverse(title, productName) {
  if (title === productName) return OFFICIAL_PRODUCT_TITLE
  const suffix = ` — ${productName}`
  if (title.endsWith(suffix)) return `${title.slice(0, -suffix.length)}${TITLE_SUFFIX}`
  return title
}

/**
 * Point the page favicon at the configured SVG.
 * @param {Document} document Browser document.
 * @param {string} logoSvg SVG document.
 * @param {Array<() => void>} restores Disposer stack.
 */
function replaceFavicon(document, logoSvg, restores) {
  const link = document.querySelector('link[rel="icon"]')
  if (!(link instanceof document.defaultView.HTMLLinkElement)) return
  const next = svgDataUri(logoSvg)
  if (link.href === next || link.getAttribute('href') === next) return
  if (!restores.some(entry => entry._favicon)) {
    const href = link.getAttribute('href')
    const type = link.getAttribute('type')
    const restore = () => {
      if (href === null) link.removeAttribute('href')
      else link.setAttribute('href', href)
      if (type === null) link.removeAttribute('type')
      else link.setAttribute('type', type)
    }
    restore._favicon = true
    restores.push(restore)
  }
  link.setAttribute('type', 'image/svg+xml')
  link.setAttribute('href', next)
}

/**
 * Cover expanded-sidebar wordmark SVGs without detaching them.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Overlay config.
 * @param {Array<() => void>} restores Disposer stack.
 */
function coverWordmarks(document, config, restores) {
  for (const svg of officialSvgs(document, WORDMARK_VIEWBOX)) {
    coverOfficial(svg, createWordmark(document, config), restores)
  }
}

/**
 * Replace the official sidebar fallback brand name text with the configured
 * name. Newer spawns render the brand as a text node instead of a wordmark
 * SVG, so {@link coverWordmarks} alone leaves the fallback name visible.
 * Restores the original text on teardown.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Overlay config.
 * @param {Array<() => void>} restores Disposer stack.
 */
function coverBrandText(document, config, restores) {
  for (const text of FALLBACK_BRAND_TEXTS) {
    for (const el of document.querySelectorAll('div,span')) {
      if (el.childElementCount !== 0 || el.textContent?.trim() !== text) continue
      const original = el.textContent
      if (original === config.productName) continue
      el.textContent = config.productName
      restores.push(() => { el.textContent = original })
    }
  }
}

/**
 * Cover the collapsed-rail whale (24px FishLogo in the toggle). Expanded, that
 * node is gone and only the official panel icon remains.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Overlay config.
 * @param {Array<() => void>} restores Disposer stack.
 */
function coverRailFish(document, config, restores) {
  for (const svg of officialSvgs(document, FISH_VIEWBOX)) {
    const width = Number.parseFloat(svg.getAttribute('width') ?? '0')
    if (width >= HERO_FISH_MIN_WIDTH) continue
    coverOfficial(svg, createMark(document, config.logoSvg, svg), restores)
  }
}

/**
 * Cover the empty-session hero fish when configured.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Overlay config.
 * @param {Array<() => void>} restores Disposer stack.
 */
function coverHeroFish(document, config, restores) {
  if (!config.replaceHeroMark) return
  for (const svg of officialSvgs(document, FISH_VIEWBOX)) {
    const width = Number.parseFloat(svg.getAttribute('width') ?? '0')
    if (width < HERO_FISH_MIN_WIDTH) continue
    coverOfficial(svg, createMark(document, config.logoSvg, svg), restores)
  }
}

/**
 * Drop branded siblings whose official SVG was unmounted (expand/collapse).
 * @param {Document} document Browser document.
 */
function sweepOrphanCovers(document) {
  for (const branded of [...document.querySelectorAll(`[${BRAND_ATTR}]`)]) {
    const official = branded.previousElementSibling
    const stillCovering = official instanceof document.defaultView.SVGElement
      && official.hasAttribute(COVER_ATTR)
    if (stillCovering) continue
    branded.remove()
  }
}

/**
 * Hide hero preview-badge pills. Leaves the React node in the tree.
 * @param {Document} document Browser document.
 * @param {Array<() => void>} restores Disposer stack.
 */
function hidePreviewBadges(document, restores) {
  const badges = new Set()
  for (const text of PREVIEW_BADGE_TEXTS) {
    for (const el of document.querySelectorAll('span,div')) {
      if (el.childElementCount === 0 && el.textContent?.trim() === text) badges.add(el)
    }
  }
  for (const badge of badges) {
    if (badge.hasAttribute(HIDE_ATTR)) continue
    badge.setAttribute(HIDE_ATTR, '')
    restores.push(() => { badge.removeAttribute(HIDE_ATTR) })
  }
}

/**
 * Rewrite welcome-notice product phrases. Leaves standalone "DeepSeek" (provider) alone.
 * @param {Document} document Browser document.
 * @param {string} productName Replacement product name.
 * @param {Array<() => void>} restores Disposer stack.
 */
function rewriteWelcomeCopy(document, productName, restores) {
  const replacements = welcomeReplacements(productName)
  const walker = document.createTreeWalker(document.body ?? document.documentElement, document.defaultView.NodeFilter.SHOW_TEXT)
  const nodes = []
  for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
    if (node.parentElement?.closest(`[${BRAND_ATTR}]`) !== null) continue
    if (typeof node.nodeValue === 'string' && replacements.some(([from]) => node.nodeValue.includes(from))) {
      nodes.push(node)
    }
  }
  for (const node of nodes) {
    const original = node.nodeValue
    let next = original
    for (const [from, to] of replacements) next = next.split(from).join(to)
    if (next === original) continue
    node.nodeValue = next
    restores.push(() => { node.nodeValue = original })
  }
}

/**
 * Welcome-copy substitutions. Longer phrases first so "DeepSeek Harness" wins over nothing.
 * @param {string} productName Replacement product name.
 * @returns {Array<[string, string]>} from/to pairs.
 */
export function welcomeReplacements(productName) {
  return [
    ['DeepSeek Harness', productName],
    ['DSH 插件生态', `${productName} 插件生态`],
    ['DSH plugin ecosystem', `${productName} plugin ecosystem`],
  ]
}

/**
 * Official brand SVGs that this overlay has not already covered.
 * @param {Document} document Browser document.
 * @param {string} viewBox Exact official viewBox.
 * @returns {SVGElement[]} matching nodes.
 */
function officialSvgs(document, viewBox) {
  return [...document.querySelectorAll('svg')].filter(svg => (
    svg.getAttribute('viewBox') === viewBox
    && !svg.hasAttribute(BRAND_ATTR)
    && !svg.hasAttribute(COVER_ATTR)
    && svg.closest(`[${BRAND_ATTR}]`) === null
  ))
}

/**
 * Hide an official SVG in place and stack a branded sibling on top.
 * The official node stays mounted so React can keep reconciling the sidebar.
 * @param {Element} official Official SVG.
 * @param {HTMLElement | SVGElement} branded Overlay node we own.
 * @param {Array<() => void>} restores Disposer stack.
 */
function coverOfficial(official, branded, restores) {
  if (official.hasAttribute(COVER_ATTR)) return
  const sibling = official.nextElementSibling
  if (sibling?.hasAttribute(BRAND_ATTR)) {
    official.setAttribute(COVER_ATTR, '')
    return
  }
  const parent = official.parentElement
  if (parent === null) return
  const previousPosition = parent.style.position
  if (previousPosition === '' || previousPosition === 'static') {
    parent.style.position = 'relative'
  }
  official.setAttribute(COVER_ATTR, '')
  branded.style.position = 'absolute'
  branded.style.left = '0'
  branded.style.top = '50%'
  branded.style.transform = 'translateY(-50%)'
  branded.style.pointerEvents = 'none'
  branded.style.zIndex = '1'
  official.after(branded)
  restores.push(() => {
    branded.remove()
    official.removeAttribute(COVER_ATTR)
    parent.style.position = previousPosition
  })
}

/**
 * Build the expanded-sidebar wordmark: configured mark + label.
 * @param {Document} document Browser document.
 * @param {BrandConfig} config Overlay config.
 * @returns {HTMLElement} wordmark node.
 */
function createWordmark(document, config) {
  const wrap = document.createElement('span')
  wrap.setAttribute(BRAND_ATTR, 'wordmark')
  wrap.setAttribute('aria-hidden', 'true')
  wrap.style.cssText = 'display:inline-flex;align-items:center;gap:8px;height:24px;color:inherit;min-width:0'
  const mark = parseSvg(document, config.logoSvg)
  mark.setAttribute('width', '24')
  mark.setAttribute('height', '24')
  mark.style.flex = 'none'
  const label = document.createElement('span')
  label.textContent = config.wordmarkText
  label.style.cssText = 'font-size:15px;font-weight:600;letter-spacing:-0.02em;line-height:24px;white-space:nowrap'
  wrap.append(mark, label)
  return wrap
}

/**
 * Build a sized mark that keeps the official fish's layout attributes.
 * @param {Document} document Browser document.
 * @param {string} logoSvg SVG document.
 * @param {Element} official Official fish SVG.
 * @returns {SVGElement} branded mark.
 */
function createMark(document, logoSvg, official) {
  const mark = parseSvg(document, logoSvg)
  mark.setAttribute(BRAND_ATTR, 'fish')
  const width = official.getAttribute('width')
  const height = official.getAttribute('height')
  const className = official.getAttribute('class')
  if (width !== null) mark.setAttribute('width', width)
  if (height !== null) mark.setAttribute('height', height)
  if (className !== null) mark.setAttribute('class', className)
  mark.setAttribute('aria-hidden', 'true')
  return mark
}

/**
 * Parse an SVG document into an element owned by `document`.
 * @param {Document} document Browser document.
 * @param {string} markup SVG markup.
 * @returns {SVGElement} imported root.
 */
function parseSvg(document, markup) {
  const parsed = new document.defaultView.DOMParser().parseFromString(markup, 'image/svg+xml')
  const svg = parsed.documentElement
  if (svg.localName !== 'svg') {
    throw new Error('dsh-omnimux: logoSvg did not parse as an SVG document')
  }
  return document.importNode(svg, true)
}

/**
 * Encode an SVG document as a favicon data URI.
 * @param {string} logoSvg SVG document.
 * @returns {string} data URI.
 */
export function svgDataUri(logoSvg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`
}
