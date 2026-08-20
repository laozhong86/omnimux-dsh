import { JSDOM } from 'jsdom'
import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'
import { DEFAULT_CONFIG, DEFAULT_LOGO_SVG, FISH_VIEWBOX, WORDMARK_VIEWBOX } from './defaults.js'
import {
  applyOverlay,
  brandedTitle,
  resolveConfig,
  startOverlay,
  svgDataUri,
  welcomeReplacements,
} from './overlay.js'

const officialTitle = 'DeepSeek Harness'

/** @type {JSDOM | undefined} */
let dom

afterEach(() => {
  dom?.window.close()
  dom = undefined
})

/**
 * Build a fixture document with official chrome.
 * @param {string} html Body inner HTML.
 * @param {string} [title]
 * @returns {Document}
 */
function load(html, title = officialTitle) {
  dom = new JSDOM(`<!doctype html><html><head>
    <title>${title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head><body>${html}</body></html>`, { url: 'http://127.0.0.1/' })
  return dom.window.document
}

/**
 * @param {string} viewBox
 * @param {string} width
 * @returns {string}
 */
function officialSvg(viewBox, width) {
  return `<svg viewBox="${viewBox}" width="${width}" height="18" class="mark" aria-hidden="true"><path d="M0 0" /></svg>`
}

/**
 * jsdom's CSS matcher does not see the camelCase `viewBox` attribute.
 * @param {Document} document
 * @param {string} viewBox
 * @returns {SVGElement[]}
 */
function svgsWithViewBox(document, viewBox) {
  return [...document.querySelectorAll('svg')].filter(svg => svg.getAttribute('viewBox') === viewBox)
}

test('brandedTitle rewrites the official suffix and leaves other titles', () => {
  assert.equal(brandedTitle(officialTitle, 'OmniMux'), 'OmniMux')
  assert.equal(brandedTitle('First — DeepSeek Harness', 'OmniMux'), 'First — OmniMux')
  assert.equal(brandedTitle('Settings', 'OmniMux'), 'Settings')
})

test('welcomeReplacements do not rewrite a standalone DeepSeek provider name', () => {
  const pairs = welcomeReplacements('OmniMux')
  let text = 'Configure the official DeepSeek provider. DeepSeek Harness 0.1. DSH plugin ecosystem.'
  for (const [from, to] of pairs) text = text.split(from).join(to)
  assert.match(text, /official DeepSeek provider/)
  assert.doesNotMatch(text, /DeepSeek Harness/)
  assert.match(text, /OmniMux 0\.1/)
  assert.match(text, /OmniMux plugin ecosystem/)
})

test('applyOverlay covers the collapsed rail whale and leaves the panel icon in the tree', () => {
  const document = load(`
    <button>${officialSvg(WORDMARK_VIEWBOX, '182')}</button>
    <button>${officialSvg(FISH_VIEWBOX, '24')}<svg viewBox="0 0 16 16" width="16" class="panel"></svg></button>
  `)
  const restores = []
  applyOverlay(document, DEFAULT_CONFIG, restores)
  applyOverlay(document, DEFAULT_CONFIG, restores)
  assert.equal(document.title, 'OmniMux')
  assert.equal(document.querySelector('link[rel="icon"]')?.getAttribute('href'), svgDataUri(DEFAULT_LOGO_SVG))
  const rail = svgsWithViewBox(document, FISH_VIEWBOX)[0]
  assert.ok(rail?.hasAttribute('data-omnimux-covered'))
  assert.ok(document.querySelector('[data-omnimux-brand="fish"]'))
  assert.ok(document.querySelector('svg.panel'))
  assert.equal(document.querySelector('svg.panel')?.hasAttribute('data-omnimux-covered'), false)
})

test('collapsed rail and hero fish are both covered', () => {
  const document = load(officialSvg(FISH_VIEWBOX, '34') + officialSvg(FISH_VIEWBOX, '24'))
  applyOverlay(document, DEFAULT_CONFIG, [])
  const fishes = svgsWithViewBox(document, FISH_VIEWBOX)
  assert.equal(fishes.length, 2)
  assert.ok(fishes.every(svg => svg.hasAttribute('data-omnimux-covered')))
})

test('replaceHeroMark false still covers the collapsed rail whale', () => {
  const document = load(officialSvg(FISH_VIEWBOX, '34') + officialSvg(FISH_VIEWBOX, '24'))
  applyOverlay(document, resolveConfig({ replaceHeroMark: false }), [])
  const fishes = svgsWithViewBox(document, FISH_VIEWBOX)
  const hero = fishes.find(svg => svg.getAttribute('width') === '34')
  const rail = fishes.find(svg => svg.getAttribute('width') === '24')
  assert.equal(hero?.hasAttribute('data-omnimux-covered'), false)
  assert.ok(rail?.hasAttribute('data-omnimux-covered'))
})

test('orphan covers are removed after the official svg unmounts', () => {
  const document = load(`<button>${officialSvg(FISH_VIEWBOX, '34')}</button>`)
  applyOverlay(document, DEFAULT_CONFIG, [])
  assert.ok(document.querySelector('[data-omnimux-brand="fish"]'))
  svgsWithViewBox(document, FISH_VIEWBOX)[0]?.remove()
  applyOverlay(document, DEFAULT_CONFIG, [])
  assert.equal(document.querySelector('[data-omnimux-brand="fish"]'), null)
})

test('hidePreviewBadge hides locale pills without display:none', () => {
  const document = load(`
    <div>
      ${officialSvg(FISH_VIEWBOX, '34')}
      <span>探索未至之境</span>
      <span>预览版</span>
    </div>
  `)
  applyOverlay(document, DEFAULT_CONFIG, [])
  const badge = [...document.querySelectorAll('span')].find(el => el.textContent === '预览版')
  assert.ok(badge?.hasAttribute('data-omnimux-hide'))
})

test('rewriteWelcome rewrites product phrases and dispose restores them', () => {
  const document = load('<p>DeepSeek Harness remains in testing. Join the DSH plugin ecosystem.</p>')
  const stop = startOverlay(document, DEFAULT_CONFIG)
  assert.match(document.body.textContent ?? '', /OmniMux remains in testing/)
  assert.match(document.body.textContent ?? '', /OmniMux plugin ecosystem/)
  stop()
  assert.match(document.body.textContent ?? '', /DeepSeek Harness remains in testing/)
  assert.match(document.body.textContent ?? '', /DSH plugin ecosystem/)
})

test('replaces the official sidebar fallback brand text and restores it', () => {
  const document = load('<div><span class="fallbackBrandName">DSH Local Build</span></div>')
  const stop = startOverlay(document, DEFAULT_CONFIG)
  assert.equal(document.querySelector('.fallbackBrandName')?.textContent, 'OmniMux')
  stop()
  assert.equal(document.querySelector('.fallbackBrandName')?.textContent, 'DSH Local Build')
})

test('dispose restores official chrome', () => {
  const document = load(`
    <button>${officialSvg(WORDMARK_VIEWBOX, '182')}</button>
    ${officialSvg(FISH_VIEWBOX, '24')}
  `)
  const stop = startOverlay(document, DEFAULT_CONFIG)
  assert.ok(document.querySelector('[data-omnimux-brand="wordmark"]'))
  stop()
  assert.equal(document.title, officialTitle)
  assert.equal(document.querySelector('link[rel="icon"]')?.getAttribute('href'), '/favicon.svg')
  assert.equal(svgsWithViewBox(document, WORDMARK_VIEWBOX).length, 1)
  assert.equal(svgsWithViewBox(document, FISH_VIEWBOX).length, 1)
  assert.equal(document.querySelector('[data-omnimux-brand]'), null)
})
