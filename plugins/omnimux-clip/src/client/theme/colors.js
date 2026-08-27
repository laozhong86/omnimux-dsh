/**
 * Resolve a CSS color that may be a `var(--token, fallback)` chain into a
 * concrete color string.
 *
 * Why: DOM style consumers (`style="color: var(...)"`) resolve var() natively,
 * but Canvas2D fillStyle/strokeStyle and <input type="color"> need concrete
 * values. Text-overlay preset colors are theme-chained (see store/timelineTypes.js)
 * and flow through both surfaces, so this helper is the single unwrap point.
 *
 * Node/test-safe: without a document it just unwraps the fallback tail.
 */

const VAR_RE = /^var\(\s*(--[\w-]+)\s*(?:,\s*([\s\S]+))?\)\s*$/

function resolveVar(value, rootEl) {
  const m = VAR_RE.exec(String(value).trim())
  if (!m) return String(value).trim()
  const name = m[1]
  const rest = (m[2] ?? '').trim()
  try {
    if (rootEl) {
      const v = getComputedStyle(rootEl).getPropertyValue(name).trim()
      if (v && !v.startsWith('var(')) return v
    }
  } catch {
    /* fall through to the chained fallback */
  }
  return rest ? resolveVar(rest, rootEl) : ''
}

export function resolveCssColor(value) {
  if (typeof value !== 'string' || !value.trim().startsWith('var(')) return value
  const rootEl = typeof document !== 'undefined' ? document.documentElement : null
  const resolved = resolveVar(value, rootEl)
  return resolved || value
}
