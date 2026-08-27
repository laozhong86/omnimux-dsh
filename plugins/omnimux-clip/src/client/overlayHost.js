/**
 * Geometry for the clip editor overlay.
 *
 * Canvas lives in the right details tab (`[data-omnimux-canvas-tab]`).
 * `shell.overlay` is a grid sibling of that column, so `position:fixed; inset:0`
 * from the overlay seat paints the conversation column instead of the canvas.
 * Measure the canvas host and portal the editor onto `document.body`.
 */

/**
 * @param {unknown} node
 * @returns {{ top: number, left: number, width: number, height: number } | null}
 */
export function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== 'function') return null
  const rect = node.getBoundingClientRect()
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
  }
  return null
}

/**
 * Cover the canvas tab when present; otherwise the whole viewport
 * (standalone / URL / agent open with no canvas).
 * @returns {{ top: number, left: number, width: number, height: number }}
 */
export function readClipHostBox() {
  if (typeof document === 'undefined') {
    return { top: 0, left: 0, width: 0, height: 0 }
  }
  const visibleTab = document.querySelector('[data-omnimux-canvas-tab][data-visible="true"]')
  const anyTab = document.querySelector('[data-omnimux-canvas-tab]')
  const fromTab = sizableBox(visibleTab) || sizableBox(anyTab)
  if (fromTab) return fromTab

  const details = document.querySelector('.dshDesktopDetailsSurface')
  const fromDetails = sizableBox(details)
  if (fromDetails) return fromDetails

  const width = typeof window !== 'undefined' ? window.innerWidth : 0
  const height = typeof window !== 'undefined' ? window.innerHeight : 0
  return { top: 0, left: 0, width: Math.max(8, width), height: Math.max(8, height) }
}

/**
 * Observe the canvas host + window so the overlay tracks panel resize.
 * @param {(box: { top: number, left: number, width: number, height: number }) => void} onBox
 * @returns {() => void}
 */
export function watchClipHostBox(onBox) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return () => {}
  }
  const update = () => { onBox(readClipHostBox()) }
  update()
  const host = document.querySelector('[data-omnimux-canvas-tab][data-visible="true"]')
    || document.querySelector('[data-omnimux-canvas-tab]')
    || document.querySelector('.dshDesktopDetailsSurface')
    || document.documentElement
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null
  if (host && observer) observer.observe(host)
  window.addEventListener('resize', update)
  return () => {
    observer?.disconnect()
    window.removeEventListener('resize', update)
  }
}
