/**
 * Self-contained composition export:
 *   TimelineSchema → Canvas 2D compositor → WebCodecs VideoEncoder
 *   → ISO-BMFF mux → POST /omnimux-clip/api/projects/:id/save-export
 *
 * Falls back to a Motion-JPEG-in-MP4 style raw mux is not used: if
 * VideoEncoder is missing we still emit a valid AVC-less JPEG sequence
 * wrapped as an MP4-compatible mdat is rejected. Instead we throw
 * export-encode-failed so Host/UI can surface the typed error.
 */

import { clipsAt, drawFrame, captureThumbnail } from './previewRenderer.js'
import { bytesToBase64, muxMp4 } from './mp4Muxer.js'
import { stripRuntimeUrls } from '../store/timelineTypes.js'

export const CLIP_API_PREFIX = '/omnimux-clip/api'

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function pickVideoCodec() {
  if (typeof VideoEncoder === 'undefined') return null
  return 'avc1.42001f'
}

async function encodeWithWebCodecs(schema, { onProgress, signal } = {}) {
  const width = even(schema.canvasConfig.width || 1920)
  const height = even(schema.canvasConfig.height || 1080)
  const fps = schema.canvasConfig.fps || 30
  const durationMs = Math.max(200, schema.canvasConfig.durationMs || 1000)
  const frameCount = Math.max(1, Math.round((durationMs / 1000) * fps))
  const codec = pickVideoCodec()
  if (!codec) {
    throw new Error('export-encode-failed: VideoEncoder is not available')
  }

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true })
  if (!ctx) throw new Error('export-encode-failed: 2d context unavailable')

  const chunks = []
  let encoderError = null
  const encoder = new VideoEncoder({
    output(chunk, meta) {
      const data = new Uint8Array(chunk.byteLength)
      chunk.copyTo(data)
      chunks.push({
        data,
        timestamp: chunk.timestamp,
        duration: chunk.duration || Math.round(1_000_000 / fps),
        type: chunk.type,
        description: meta?.decoderConfig?.description
          ? new Uint8Array(meta.decoderConfig.description)
          : undefined,
      })
    },
    error(error) {
      encoderError = error
    },
  })

  const config = {
    codec,
    width,
    height,
    bitrate: Math.max(1_500_000, Math.round(width * height * fps * 0.08)),
    framerate: fps,
    avc: { format: 'avc' },
    hardwareAcceleration: 'prefer-hardware',
  }
  try {
    if (typeof VideoEncoder.isConfigSupported === 'function') {
      const support = await VideoEncoder.isConfigSupported(config)
      if (!support?.supported) {
        delete config.avc
        config.codec = 'avc1.4d001f'
      }
    }
    encoder.configure(config)
  } catch (error) {
    encoder.close()
    throw new Error(`export-encode-failed: ${error instanceof Error ? error.message : String(error)}`)
  }

  let thumbnail = ''
  for (let i = 0; i < frameCount; i += 1) {
    if (signal?.aborted) {
      try { encoder.close() } catch { /* ignore */ }
      throw new Error('canceled')
    }
    const timeMs = Math.min(durationMs - 1, Math.round((i / fps) * 1000))
    await drawFrame(ctx, schema, timeMs, { width, height })
    if (i === Math.min(3, frameCount - 1)) thumbnail = captureThumbnail(canvas)
    const frame = new VideoFrame(canvas, {
      timestamp: Math.round((i / fps) * 1_000_000),
      duration: Math.round(1_000_000 / fps),
    })
    encoder.encode(frame, { keyFrame: i % Math.max(1, fps) === 0 })
    frame.close()
    if (i % 4 === 0) {
      onProgress?.({
        ratio: (i + 1) / frameCount,
        frame: i + 1,
        frameCount,
        status: 'encoding',
      })
      await wait(0)
    }
    if (encoderError) break
  }

  await encoder.flush()
  encoder.close()
  if (encoderError) {
    throw new Error(`export-encode-failed: ${encoderError.message || encoderError}`)
  }

  const audioChunks = await encodeAudioTrack(schema, { durationMs, signal }).catch(() => [])
  const bytes = muxMp4({
    width,
    height,
    fps,
    videoChunks: chunks,
    audioChunks,
    audioSampleRate: 48000,
    audioChannels: 2,
  })
  return {
    bytes,
    thumbnail,
    durationMs,
    width,
    height,
  }
}

async function encodeAudioTrack(schema, { durationMs, signal }) {
  if (typeof AudioEncoder === 'undefined') return []
  const clips = []
  for (let t = 0; t < durationMs; t += 1000) {
    if (signal?.aborted) break
    clips.push(...(clipsAt(schema, t, 'audio')))
  }
  if (clips.length === 0) return []
  // Silent AAC-ish raw frames are skipped: without a decoded PCM source we
  // omit the audio track rather than muxing invalid samples.
  return []
}

function even(value) {
  const n = Math.max(16, Math.round(Number(value) || 16))
  return n % 2 === 0 ? n : n + 1
}

export async function exportTimeline(schema, opts = {}) {
  const result = await encodeWithWebCodecs(schema, opts)
  const blob = new Blob([result.bytes], { type: 'video/mp4' })
  return { ...result, blob }
}

export async function persistExport(projectId, result, { schema } = {}) {
  const id = projectId || schema?.projectId
  if (!id) throw new Error('invalid-id: missing projectId')
  const payload = {
    base64: bytesToBase64(result.bytes),
    mime: 'video/mp4',
    durationMs: result.durationMs,
    width: result.width,
    height: result.height,
  }
  const response = await fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(id)}/save-export`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(body.message || body.error || 'export persist failed')
  }
  if (schema) {
    await fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schema: stripRuntimeUrls(schema) }),
    }).catch(() => {})
  }
  return {
    path: body.path,
    bytes: body.bytes,
    thumbnailPath: result.thumbnail,
  }
}
