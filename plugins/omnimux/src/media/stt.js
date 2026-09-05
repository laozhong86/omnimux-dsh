import { readFileSync } from 'node:fs'
import { basename } from 'node:path'
import { OmnimuxError } from './errors.js'
import { classifyQuotaFailure } from '../errors/quota-classifier.js'
import { parseMediaConfig, resolveMediaAuth, resolveMediaRoute } from './route.js'
import { pickTranscriptionText, TRANSCRIPTION_PATH } from './vendors/omnimux.js'

/** Route capability key for speech-to-text (audio bytes in, text out). */
export const STT_CAPABILITY = 'stt'

/** Extension → wire Content-Type for the multipart upload. */
const AUDIO_MIME_BY_EXT = Object.freeze({
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/m4a',
  '.webm': 'audio/webm',
  '.ogg': 'audio/ogg',
  '.flac': 'audio/flac',
  '.mp4': 'audio/mp4',
})

const AUDIO_EXT_BY_MIME = Object.freeze({
  'audio/mpeg': '.mp3',
  'audio/mp3': '.mp3',
  'audio/wav': '.wav',
  'audio/x-wav': '.wav',
  'audio/m4a': '.m4a',
  'audio/x-m4a': '.m4a',
  'audio/webm': '.webm',
  'audio/ogg': '.ogg',
  'audio/flac': '.flac',
  'audio/mp4': '.mp4',
})

/**
 * @param {string} filename
 * @returns {string}
 */
function mimeForFilename(filename) {
  const lower = filename.toLowerCase()
  for (const [ext, mime] of Object.entries(AUDIO_MIME_BY_EXT)) {
    if (lower.endsWith(ext)) return mime
  }
  return 'audio/mpeg'
}

/**
 * Resolve the request audio into uploadable bytes.
 * Accepts an absolute file path, an http(s) URL, or a data:audio/... URI.
 * @param {string} audio
 * @param {{ fetcher?: typeof fetch, apiKey?: string, signal?: AbortSignal }} [deps]
 * @returns {Promise<{ bytes: Buffer, filename: string, contentType: string }>}
 */
export async function loadAudioBytes(audio, deps = {}) {
  const value = typeof audio === 'string' ? audio.trim() : ''
  if (!value) {
    throw new OmnimuxError('omnimux-invalid-request', 'audio is required (absolute path, http(s) URL, or data URI)')
  }

  if (value.startsWith('data:')) {
    const comma = value.indexOf(',')
    const header = comma >= 0 ? value.slice(5, comma) : ''
    const payload = comma >= 0 ? value.slice(comma + 1) : ''
    if (!payload) {
      throw new OmnimuxError('omnimux-invalid-request', 'audio data URI has no payload')
    }
    const mime = header.split(';')[0] || 'audio/mpeg'
    const ext = AUDIO_EXT_BY_MIME[mime] ?? '.mp3'
    return { bytes: Buffer.from(payload, 'base64'), filename: `audio${ext}`, contentType: mime }
  }

  if (/^https?:\/\//i.test(value)) {
    const fetcher = deps.fetcher ?? fetch
    /** @type {Record<string, string>} */
    const headers = {}
    if (deps.apiKey?.trim() && value.includes('omnimux.ai')) {
      headers.authorization = `Bearer ${deps.apiKey.trim()}`
    }
    const response = await fetcher(value, {
      headers,
      ...(deps.signal ? { signal: deps.signal } : {}),
    })
    if (!response.ok) {
      throw new OmnimuxError('omnimux-download-failed', `audio download failed: ${response.status}`, { status: response.status })
    }
    const bytes = Buffer.from(await response.arrayBuffer())
    let filename = 'audio.mp3'
    try {
      const name = basename(new URL(value).pathname)
      if (name && name !== '/') filename = name
    } catch {
      // keep default filename
    }
    const headerType = typeof response.headers?.get === 'function'
      ? String(response.headers.get('content-type') ?? '').split(';')[0].trim()
      : ''
    const contentType = headerType.startsWith('audio/') ? headerType : mimeForFilename(filename)
    return { bytes, filename, contentType }
  }

  let bytes
  try {
    bytes = readFileSync(value)
  } catch (error) {
    throw new OmnimuxError('omnimux-invalid-request', `audio file is not readable: ${value}`, {
      cause: error instanceof Error ? error : undefined,
    })
  }
  const filename = basename(value) || 'audio.mp3'
  return { bytes, filename, contentType: mimeForFilename(filename) }
}

/**
 * Speech-to-text execution: one synchronous multipart POST, no task poll.
 * Route/auth reuse the media layers; the wire body is OpenAI-compat
 * `POST {baseUrl}/audio/transcriptions` (file + model) → `{ text }`.
 *
 * @param {{
 *   audio: string,
 *   model?: string,
 *   provider?: string,
 *   language?: string,
 *   signal?: AbortSignal,
 *   env?: Record<string, string | undefined>,
 *   media?: unknown,
 *   fetcher?: typeof fetch,
 *   store?: { resolve: () => Promise<string | undefined> },
 *   credentials?: { resolve: (ref: string) => Promise<{ value?: string } | undefined> },
 * }} input
 * @returns {Promise<{ mode: 'live', model: string, text: string }>}
 */
export async function executeOmnimuxSpeechToText(input) {
  if (!input || typeof input.audio !== 'string' || !input.audio.trim()) {
    throw new OmnimuxError('omnimux-invalid-request', 'audio is required (absolute path, http(s) URL, or data URI)')
  }
  const media = parseMediaConfig(input.media)
  const route = resolveMediaRoute(STT_CAPABILITY, input, media, input.env)
  const auth = await resolveMediaAuth(route, {
    env: input.env,
    store: input.store,
    credentials: input.credentials,
  })

  const audio = await loadAudioBytes(input.audio, {
    fetcher: input.fetcher,
    apiKey: auth.apiKey,
    signal: input.signal,
  })

  const form = new FormData()
  form.append('file', new Blob([audio.bytes], { type: audio.contentType }), audio.filename)
  form.append('model', route.modelId)
  if (typeof input.language === 'string' && input.language.trim()) {
    form.append('language', input.language.trim())
  }
  form.append('response_format', 'json')

  const fetcher = input.fetcher ?? fetch
  /** @type {Record<string, string>} */
  const headers = {
    accept: 'application/json',
    ...(auth.apiKey && auth.apiKey.trim() ? { authorization: `Bearer ${auth.apiKey.trim()}` } : {}),
  }
  const url = `${route.baseUrl}/${TRANSCRIPTION_PATH}`
  let response
  try {
    response = await fetcher(url, {
      method: 'POST',
      headers,
      body: form,
      ...(input.signal ? { signal: input.signal } : {}),
    })
  } catch (error) {
    if (input.signal?.aborted) {
      throw new OmnimuxError('omnimux-aborted', 'speech-to-text request aborted')
    }
    throw error
  }

  let body = null
  try {
    body = await response.json()
  } catch {
    try { body = await response.text() } catch { body = null }
  }
  if (!response.ok) {
    const classified = classifyQuotaFailure({ status: response.status, body })
    if (classified.kind === 'quota-exceeded') {
      throw new OmnimuxError('quota-exceeded', classified.message, { status: response.status, details: classified })
    }
    if (classified.kind === 'needs-omnimux') {
      throw new OmnimuxError('needs-omnimux', classified.message, { status: response.status })
    }
    throw new OmnimuxError('omnimux-request-failed', `speech-to-text request failed (HTTP ${response.status})`, { status: response.status })
  }

  const text = pickTranscriptionText(body)
  if (!text) {
    throw new OmnimuxError('omnimux-invalid-response', 'speech-to-text response carried no text')
  }
  return { mode: 'live', model: route.modelId, text }
}
