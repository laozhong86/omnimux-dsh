/**
 * Shared OmniMux brand defaults for the host Config schema and the client overlay.
 * Keep these values identical to `assets/logo.svg`.
 */

/** Window key the host index tap writes and the client overlay reads. */
export const BOOT_WINDOW_KEY = '__OMNIMUX_BRAND__'

/** Official product title the overlay rewrites in `document.title`. */
export const OFFICIAL_PRODUCT_TITLE = 'DeepSeek Harness'

/** DeepSeek fish mark `viewBox` (sidebar rail + empty-session hero). */
export const FISH_VIEWBOX = '0 0 23.16 17.04'

/** DeepSeek wordmark `viewBox` (expanded sidebar brand). */
export const WORDMARK_VIEWBOX = '0 0 182 24'

/** Hero fish width in px (`FishLogo size={34}`). Smaller marks are the rail. */
export const HERO_FISH_MIN_WIDTH = 34

/** Exact hero badge copy in the two shipped GUI locales. */
export const PREVIEW_BADGE_TEXTS = ['预览版', 'Preview']

/** Bundled OmniMux mark; same document as `assets/logo.svg`. */
export const DEFAULT_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="7" fill="#0A0A0B"/>
  <g transform="translate(4 4) scale(1.5)">
    <path d="M0 2.5h4.5l2.5 4" stroke="#A1A1AA"/>
    <path d="M0 8h6.5" stroke="#A1A1AA"/>
    <path d="M0 13.5h4.5l2.5-4" stroke="#A1A1AA"/>
    <rect x="7" y="7" width="2" height="2" fill="#FAFAFA"/>
    <path d="M9.5 8H14" stroke="#C8F135"/>
    <rect x="14" y="7" width="2" height="2" fill="#C8F135"/>
  </g>
</svg>`

/**
 * Overlay configuration after schema defaults.
 * @typedef {object} BrandConfig
 * @property {string} productName Tab-title suffix and welcome-copy replacement.
 * @property {string} logoSvg SVG document used for favicon, rail, hero, and wordmark mark.
 * @property {string} wordmarkText Label that replaces the deepseek + HARNESS wordmark.
 * @property {boolean} replaceHeroMark When true, also replace the empty-session fish.
 * @property {boolean} hidePreviewBadge When true, hide the hero 预览版 / Preview pill.
 * @property {boolean} rewriteWelcome When true, rewrite DeepSeek Harness / DSH phrases in welcome copy.
 */

/** Schema defaults used when the index tap is absent. */
export const DEFAULT_CONFIG = Object.freeze({
  productName: 'OmniMux',
  logoSvg: DEFAULT_LOGO_SVG,
  wordmarkText: 'OmniMux',
  replaceHeroMark: true,
  hidePreviewBadge: true,
  rewriteWelcome: true,
})
