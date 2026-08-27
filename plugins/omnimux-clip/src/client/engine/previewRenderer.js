/**
 * Stage preview renderer — OpenReel engine integration.
 * Delegates frame rendering, video decoding, typography, and transitions to OpenReel engine.
 */

import {
  renderCompositionFrame,
  getActiveClipsAt,
  disposeMediaPool,
} from './openreel/index.js'

export function aspectCss(aspectRatio) {
  if (aspectRatio === '9:16') return '9 / 16'
  if (aspectRatio === '1:1') return '1 / 1'
  return '16 / 9'
}

export function clipsAt(schema, timeMs, type) {
  return getActiveClipsAt(schema, timeMs, type)
}

/**
 * Draw a single complete composition frame via OpenReel Engine.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} schema
 * @param {number} timeMs
 * @param {{ width?: number, height?: number }} [options]
 */
export async function drawFrame(ctx, schema, timeMs, { width, height } = {}) {
  return renderCompositionFrame(ctx, schema, timeMs, { width, height })
}

export function captureThumbnail(canvas) {
  try {
    return canvas.toDataURL('image/jpeg', 0.82)
  } catch {
    return ''
  }
}

export function disposePreviewResources() {
  disposeMediaPool()
}
