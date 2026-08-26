/**
 * Canvas 2D compositor used by CenterStage preview and the export engine.
 * WebGPU is probed and kept as a future offscreen path; Canvas 2D is the
 * always-available compositor so unmount can fully release resources.
 */

const mediaCache = new Map()

export function aspectCss(aspectRatio) {
  if (aspectRatio === '9:16') return '9 / 16'
  if (aspectRatio === '1:1') return '1 / 1'
  return '16 / 9'
}

export function clipsAt(schema, timeMs, type) {
  const hits = []
  for (const track of schema.tracks || []) {
    if (type && track.type !== type) continue
    if (track.isVisible === false) continue
    for (const clip of track.clips || []) {
      const start = clip.startTimeMs || 0
      const end = start + (clip.durationMs || 0)
      if (timeMs >= start && timeMs < end) hits.push({ track, clip, localMs: timeMs - start })
    }
  }
  return hits.sort((a, b) => a.track.order - b.track.order)
}

export function loadImage(url) {
  if (!url) return Promise.resolve(null)
  const cached = mediaCache.get(url)
  if (cached) return cached
  const promise = new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.onload = () => resolve(image)
    image.onerror = () => resolve(null)
    image.src = url
  })
  mediaCache.set(url, promise)
  return promise
}

export async function drawFrame(ctx, schema, timeMs, { width, height } = {}) {
  const w = width || schema.canvasConfig.width || 1920
  const h = height || schema.canvasConfig.height || 1080
  ctx.save()
  ctx.fillStyle = schema.canvasConfig.backgroundColor || '#000'
  ctx.fillRect(0, 0, w, h)

  const visuals = clipsAt(schema, timeMs, 'video')
  for (const { clip, localMs } of visuals) {
    const opacity = transitionOpacity(clip, localMs)
    ctx.globalAlpha = opacity
    if (clip.mediaType === 'image' || looksLikeImage(clip.sourceUrl)) {
      const image = await loadImage(clip.sourceUrl)
      if (image) drawCover(ctx, image, w, h)
      else drawPlaceholder(ctx, w, h, clip.name || '图片')
    } else if (clip.sourceUrl) {
      const image = await loadImage(clip.sourceUrl)
      if (image) drawCover(ctx, image, w, h)
      else drawPlaceholder(ctx, w, h, clip.name || '视频')
    } else {
      drawPlaceholder(ctx, w, h, clip.name || '视频')
    }
    ctx.globalAlpha = 1
  }

  const texts = clipsAt(schema, timeMs, 'text')
  for (const { clip } of texts) {
    drawText(ctx, clip.textStyle || {}, w, h)
  }
  ctx.restore()
}

function looksLikeImage(url) {
  return typeof url === 'string' && /\.(png|jpe?g|gif|webp|avif)(\?|$)/i.test(url)
}

function transitionOpacity(clip, localMs) {
  const transition = clip.transition
  if (!transition || transition.type === 'none' || transition.type === 'cut') return 1
  const fade = Math.max(0, transition.durationMs || 0)
  if (!fade) return 1
  if (transition.type === 'crossfade' || transition.type === 'fadeblack') {
    if (localMs < fade) return localMs / fade
    if (localMs > (clip.durationMs || 0) - fade) {
      return Math.max(0, ((clip.durationMs || 0) - localMs) / fade)
    }
  }
  return 1
}

function drawCover(ctx, source, width, height) {
  const sw = source.videoWidth || source.naturalWidth || source.width || width
  const sh = source.videoHeight || source.naturalHeight || source.height || height
  if (!sw || !sh) {
    ctx.drawImage(source, 0, 0, width, height)
    return
  }
  const scale = Math.max(width / sw, height / sh)
  const dw = sw * scale
  const dh = sh * scale
  ctx.drawImage(source, (width - dw) / 2, (height - dh) / 2, dw, dh)
}

function drawPlaceholder(ctx, width, height, label) {
  ctx.fillStyle = 'rgba(255,255,255,0.06)'
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.font = `${Math.round(height * 0.045)}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(label || 'Clip', width / 2, height / 2)
}

function drawText(ctx, style, width, height) {
  const content = style.content || ''
  if (!content) return
  const fontSize = style.fontSize || 42
  const fontWeight = style.fontWeight || 'normal'
  const fontFamily = style.fontFamily || 'sans-serif'
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
  ctx.textAlign = style.textAlign || 'center'
  ctx.textBaseline = 'middle'
  const x = style.textAlign === 'left' ? width * 0.08 : style.textAlign === 'right' ? width * 0.92 : width / 2
  const y = height * 0.82
  if (style.backgroundColor) {
    const metrics = ctx.measureText(content)
    const padX = 18
    const padY = 10
    ctx.fillStyle = style.backgroundColor
    const textW = metrics.width
    const left = style.textAlign === 'left' ? x - padX : style.textAlign === 'right' ? x - textW - padX : x - textW / 2 - padX
    ctx.fillRect(left, y - fontSize / 2 - padY, textW + padX * 2, fontSize + padY * 2)
  }
  if (style.strokeColor && style.strokeWidth) {
    ctx.lineWidth = style.strokeWidth
    ctx.strokeStyle = style.strokeColor
    ctx.strokeText(content, x, y)
  }
  ctx.fillStyle = style.color || '#ffffff'
  ctx.fillText(content, x, y)
}

export function captureThumbnail(canvas) {
  try {
    return canvas.toDataURL('image/jpeg', 0.72)
  } catch {
    return ''
  }
}

export function disposePreviewResources() {
  mediaCache.clear()
}
