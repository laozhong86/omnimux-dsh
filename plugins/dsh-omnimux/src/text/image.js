import { readFile } from 'node:fs/promises'
import { basename, isAbsolute } from 'node:path'
import { OmnimuxError } from '../media/errors.js'

const EXT_MEDIA = Object.freeze({
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
})

const MIME_MEDIA = Object.freeze({
  'image/png': 'image/png',
  'image/jpeg': 'image/jpeg',
  'image/jpg': 'image/jpeg',
  'image/webp': 'image/webp',
  'image/gif': 'image/gif',
})

const DEFAULT_BYTE_CAP = 10 * 1024 * 1024

/**
 * Load one image from an absolute path, http(s) URL, or data URI and commit
 * it through the durable attachment store. The ref lives only on this
 * one-shot request; the hub does not append it to the parent session.
 * @param {string} source
 * @param {{
 *   attachments: { saveImage: Function, imageLimits?: { maxImageBytes?: number, mediaTypes?: string[] } },
 *   fetcher?: typeof fetch,
 *   signal?: AbortSignal,
 * }} deps
 */
export async function loadTextImage(source, deps) {
  const raw = String(source || '').trim()
  if (!raw) {
    throw new OmnimuxError('omnimux-invalid-request', 'image is empty')
  }
  const loaded = raw.startsWith('data:')
    ? decodeDataUri(raw)
    : /^https?:\/\//i.test(raw)
      ? await fetchRemoteImage(raw, deps)
      : await readLocalImage(raw, deps.signal)
  const mediaType = loaded.mediaType ?? mediaFromMagic(loaded.data)
  if (!mediaType) {
    throw new OmnimuxError('omnimux-invalid-request', 'image must be PNG, JPEG, WebP, or GIF')
  }
  const allowed = deps.attachments.imageLimits?.mediaTypes
  if (Array.isArray(allowed) && allowed.length > 0 && !allowed.includes(mediaType)) {
    throw new OmnimuxError('omnimux-invalid-request', `image type ${mediaType} is not accepted`)
  }
  const cap = deps.attachments.imageLimits?.maxImageBytes ?? DEFAULT_BYTE_CAP
  if (loaded.data.byteLength > cap) {
    throw new OmnimuxError('omnimux-invalid-request', `image exceeds ${cap} bytes`)
  }
  return deps.attachments.saveImage({
    data: loaded.data,
    mediaType,
    name: loaded.name,
  })
}

/**
 * @param {string} uri
 */
export function decodeDataUri(uri) {
  const match = uri.match(/^data:([^;,]+)?(;base64)?,(.*)$/s)
  if (!match) {
    throw new OmnimuxError('omnimux-invalid-request', 'image data URI is malformed')
  }
  const declared = MIME_MEDIA[(match[1] || '').trim().toLowerCase()]
  const isBase64 = Boolean(match[2])
  const payload = match[3] || ''
  let data
  try {
    data = Uint8Array.from(Buffer.from(payload, isBase64 ? 'base64' : 'utf8'))
  } catch {
    throw new OmnimuxError('omnimux-invalid-request', 'image data URI is malformed')
  }
  return { data, mediaType: declared ?? mediaFromMagic(data), name: 'image' }
}

/**
 * @param {string} filePath
 * @param {AbortSignal} [signal]
 */
async function readLocalImage(filePath, signal) {
  if (!isAbsolute(filePath)) {
    throw new OmnimuxError('omnimux-invalid-request', 'image path must be absolute')
  }
  const ext = extnameOf(filePath)
  let data
  try {
    data = new Uint8Array(await readFile(filePath, signal ? { signal } : undefined))
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      throw new OmnimuxError('omnimux-invalid-request', `image file not found: ${filePath}`)
    }
    throw error
  }
  return {
    data,
    mediaType: EXT_MEDIA[ext] ?? mediaFromMagic(data),
    name: basename(filePath),
  }
}

/**
 * @param {string} url
 * @param {{ fetcher?: typeof fetch, signal?: AbortSignal, attachments: { imageLimits?: { maxImageBytes?: number } } }} deps
 */
async function fetchRemoteImage(url, deps) {
  const fetcher = deps.fetcher ?? fetch
  const cap = deps.attachments.imageLimits?.maxImageBytes ?? DEFAULT_BYTE_CAP
  let response
  try {
    response = await fetcher(url, deps.signal ? { signal: deps.signal } : undefined)
  } catch (error) {
    throw new OmnimuxError('omnimux-invalid-request', `failed to fetch image: ${error instanceof Error ? error.message : String(error)}`)
  }
  if (!response.ok) {
    throw new OmnimuxError('omnimux-invalid-request', `image URL returned HTTP ${response.status}`)
  }
  const headerType = MIME_MEDIA[(response.headers?.get?.('content-type') || '').split(';')[0].trim().toLowerCase()]
  const buffer = new Uint8Array(await response.arrayBuffer())
  if (buffer.byteLength > cap) {
    throw new OmnimuxError('omnimux-invalid-request', `image exceeds ${cap} bytes`)
  }
  return {
    data: buffer,
    mediaType: headerType ?? mediaFromMagic(buffer),
    name: basename(new URL(url).pathname) || 'image',
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

/**
 * @param {Uint8Array} bytes
 * @returns {'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif' | undefined}
 */
export function mediaFromMagic(bytes) {
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return 'image/png'
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return 'image/jpeg'
  }
  if (
    bytes.length >= 12
    && bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46
    && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
  ) {
    return 'image/webp'
  }
  if (bytes.length >= 6 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    return 'image/gif'
  }
  return undefined
}
