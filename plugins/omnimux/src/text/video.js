import { readFile } from 'node:fs/promises'
import { basename, isAbsolute } from 'node:path'
import { OmnimuxError } from '../media/errors.js'

const EXT_MEDIA = Object.freeze({
  '.mp4': 'video/mp4',
  '.m4v': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
})

const MIME_MEDIA = Object.freeze({
  'video/mp4': 'video/mp4',
  'video/webm': 'video/webm',
  'video/quicktime': 'video/quicktime',
})

/** Soft cap aligned with OPC warning threshold before prepare/split. */
const DEFAULT_BYTE_CAP = 20 * 1024 * 1024

/**
 * Load one short video from an absolute path or data URI and return a
 * `data:video/…;base64,…` URI for the chat-completions `image_url` pack.
 * Does not touch `ctx.attachments` — harness ImageMediaType only allows
 * PNG/JPEG/WebP/GIF, so video must bypass the durable image store.
 * @param {string} source
 * @param {{
 *   maxVideoBytes?: number,
 *   signal?: AbortSignal,
 * }} [opts]
 */
export async function loadTextVideo(source, opts = {}) {
  const raw = String(source || '').trim()
  if (!raw) {
    throw new OmnimuxError('omnimux-invalid-request', 'video is empty')
  }
  const loaded = raw.startsWith('data:')
    ? decodeVideoDataUri(raw)
    : /^https?:\/\//i.test(raw)
      ? (() => {
          throw new OmnimuxError(
            'omnimux-invalid-request',
            'video URL input is not supported yet; pass an absolute path or data URI',
          )
        })()
      : await readLocalVideo(raw, opts.signal)
  const mediaType = loaded.mediaType
  if (!mediaType || !MIME_MEDIA[mediaType]) {
    throw new OmnimuxError('omnimux-invalid-request', 'video must be MP4, WebM, or QuickTime')
  }
  const cap = typeof opts.maxVideoBytes === 'number' && opts.maxVideoBytes > 0
    ? opts.maxVideoBytes
    : DEFAULT_BYTE_CAP
  if (loaded.data.byteLength > cap) {
    throw new OmnimuxError('omnimux-invalid-request', `video exceeds ${cap} bytes`)
  }
  const dataUri = `data:${mediaType};base64,${Buffer.from(loaded.data).toString('base64')}`
  return {
    dataUri,
    mediaType,
    bytes: loaded.data.byteLength,
    name: loaded.name,
  }
}

/**
 * Pack for OmniMux chat completions. Spike + OPC lock: put the video data
 * URI inside `image_url`, never OpenAI-style `video_url`.
 * @param {{ dataUri: string }} packed
 */
export function toVideoImageUrlPart(packed) {
  const url = typeof packed?.dataUri === 'string' ? packed.dataUri.trim() : ''
  if (!url.startsWith('data:video/')) {
    throw new OmnimuxError('omnimux-invalid-request', 'video pack must be a data:video URI')
  }
  return {
    type: 'image_url',
    image_url: { url },
  }
}

/**
 * @param {string} uri
 */
export function decodeVideoDataUri(uri) {
  const match = uri.match(/^data:([^;,]+)?(;base64)?,(.*)$/s)
  if (!match) {
    throw new OmnimuxError('omnimux-invalid-request', 'video data URI is malformed')
  }
  const declared = MIME_MEDIA[(match[1] || '').trim().toLowerCase()]
  if (!declared) {
    throw new OmnimuxError('omnimux-invalid-request', 'video data URI must declare video/mp4, video/webm, or video/quicktime')
  }
  const isBase64 = Boolean(match[2])
  const payload = match[3] || ''
  let data
  try {
    data = Uint8Array.from(Buffer.from(payload, isBase64 ? 'base64' : 'utf8'))
  } catch {
    throw new OmnimuxError('omnimux-invalid-request', 'video data URI is malformed')
  }
  return { data, mediaType: declared, name: 'video' }
}

/**
 * @param {string} filePath
 * @param {AbortSignal} [signal]
 */
async function readLocalVideo(filePath, signal) {
  if (!isAbsolute(filePath)) {
    throw new OmnimuxError('omnimux-invalid-request', 'video path must be absolute')
  }
  const ext = extnameOf(filePath)
  let data
  try {
    data = new Uint8Array(await readFile(filePath, signal ? { signal } : undefined))
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      throw new OmnimuxError('omnimux-invalid-request', `video file not found: ${filePath}`)
    }
    throw error
  }
  const mediaType = EXT_MEDIA[ext]
  if (!mediaType) {
    throw new OmnimuxError('omnimux-invalid-request', 'video path must end in .mp4, .m4v, .webm, or .mov')
  }
  return {
    data,
    mediaType,
    name: basename(filePath),
  }
}

/**
 * @param {string} filePath
 */
function extnameOf(filePath) {
  const base = basename(filePath).toLowerCase()
  const dot = base.lastIndexOf('.')
  return dot === -1 ? '' : base.slice(dot)
}
