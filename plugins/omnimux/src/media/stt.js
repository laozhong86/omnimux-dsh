import { readFileSync } from 'node:fs'
import { basename } from 'node:path'
import { OmnimuxError } from './errors.js'
import { classifyQuotaFailure } from '../errors/quota-classifier.js'
import {
  assertGuardOutput,
  assertGuardSubmit,
} from '../catalog/contract/submit-guard/index.js'
import { parseMediaConfig, resolveMediaAuth, resolveMediaRoute } from './route.js'
import { pickTranscriptionText, TRANSCRIPTION_PATH } from './vendors/omnimux.js'

/** Route capability key for speech-to-text (audio bytes in, text out). */
export const STT_CAPABILITY = 'stt'

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
    const bytes = Buffer.from(payload, 'base64')
    return audioFromBytes(bytes, header.split(';')[0], 'audio')
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
    let filename = 'audio'
    try {
      const name = basename(new URL(value).pathname)
      if (name && name !== '/') filename = name
    } catch {
      // keep default filename
    }
    const headerType = typeof response.headers?.get === 'function'
      ? String(response.headers.get('content-type') ?? '').split(';')[0].trim()
      : ''
    return audioFromBytes(bytes, headerType, filename)
  }

  let bytes
  try {
    bytes = readFileSync(value)
  } catch (error) {
    throw new OmnimuxError('omnimux-invalid-request', `audio file is not readable: ${value}`, {
      cause: error instanceof Error ? error : undefined,
    })
  }
  return audioFromBytes(bytes, '', basename(value) || 'audio')
}

/**
 * @param {Buffer} bytes
 * @param {string} declaredType
 * @param {string} filename
 */
function audioFromBytes(bytes, declaredType, filename) {
  const contentType = mediaFromAudioMagic(bytes)
  if (!contentType) {
    throw new OmnimuxError('omnimux-invalid-request', 'audio type cannot be identified from bytes')
  }
  const declared = normalizeAudioMime(declaredType)
  if (declared && declared !== contentType) {
    throw new OmnimuxError('omnimux-invalid-request', `audio MIME ${declaredType} does not match its bytes`)
  }
  const ext = AUDIO_EXT_BY_MIME[contentType] ?? '.mp3'
  const name = filename.includes('.') ? filename : `${filename}${ext}`
  return { bytes, filename: name, contentType }
}

/**
 * @param {string} mime
 */
function normalizeAudioMime(mime) {
  const value = String(mime || '').trim().toLowerCase()
  if (value === 'audio/mp3') return 'audio/mpeg'
  if (value === 'audio/x-wav') return 'audio/wav'
  if (value === 'audio/x-m4a') return 'audio/m4a'
  return value
}

/**
 * @param {Uint8Array} bytes
 * @returns {'audio/mpeg' | 'audio/wav' | 'audio/m4a' | 'audio/webm' | 'audio/ogg' | 'audio/flac' | 'audio/mp4' | undefined}
 */
export function mediaFromAudioMagic(bytes) {
  if (bytes.length >= 4 && bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) return 'audio/mpeg'
  if (bytes.length >= 2 && bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0) return 'audio/mpeg'
  if (bytes.length >= 12 && bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x41 && bytes[10] === 0x56 && bytes[11] === 0x45) return 'audio/wav'
  if (bytes.length >= 4 && bytes[0] === 0x4f && bytes[1] === 0x67 && bytes[2] === 0x67 && bytes[3] === 0x53) return 'audio/ogg'
  if (bytes.length >= 4 && bytes[0] === 0x66 && bytes[1] === 0x4c && bytes[2] === 0x61 && bytes[3] === 0x43) return 'audio/flac'
  if (bytes.length >= 4 && bytes[0] === 0x1a && bytes[1] === 0x45 && bytes[2] === 0xdf && bytes[3] === 0xa3) return 'audio/webm'
  const ftyp = bytes.length >= 12 && bytes[4] === 0x66 && bytes[5] === 0x74 && bytes[6] === 0x79 && bytes[7] === 0x70
  if (!ftyp) return undefined
  if (bytes[8] === 0x4d && bytes[9] === 0x34 && bytes[10] === 0x41) return 'audio/m4a'
  return 'audio/mp4'
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

  // SubmitGuard (#468): whisper/STT must be listed+verified+live. Seam presence alone
  // does not admit draft models (whisper-1 remains draft → reject before HTTP).
  const guardPlan = assertGuardSubmit(
    {
      model: route.modelId,
      operation: input.operation ?? 'speech_to_text',
      audio: input.audio.trim(),
      language: input.language,
      seam: 'speechToText',
      capability: 'stt',
    },
    { seam: 'speechToText', capability: 'stt', outputType: 'text' },
  )

  const auth = await resolveMediaAuth(route, {
    env: input.env,
    store: input.store,
    credentials: input.credentials,
  })

  const result = await transcribeSpeechToTextRequest({
    route,
    apiKey: auth.apiKey,
    audio: input.audio,
    language: input.language,
    fetcher: input.fetcher,
    signal: input.signal,
  })
  assertGuardOutput(guardPlan, result, { capability: 'stt' })
  return result
}

/**
 * Internal wire primitive: the Hub calls this only after SubmitGuard has
 * admitted a first-time transcription request. Tests exercise the protocol
 * here with an explicit route instead of a caller-controlled input bypass.
 * @param {{
 *   route: Pick<ReturnType<typeof resolveMediaRoute>, 'baseUrl' | 'modelId'>,
 *   apiKey?: string,
 *   audio: string,
 *   language?: string,
 *   fetcher?: typeof fetch,
 *   signal?: AbortSignal,
 * }} input
 * @returns {Promise<{ mode: 'live', model: string, text: string }>}
 */
export async function transcribeSpeechToTextRequest(input) {
  const audio = await loadAudioBytes(input.audio, {
    fetcher: input.fetcher,
    apiKey: input.apiKey,
    signal: input.signal,
  })

  const form = new FormData()
  form.append('file', new Blob([audio.bytes], { type: audio.contentType }), audio.filename)
  form.append('model', input.route.modelId)
  if (typeof input.language === 'string' && input.language.trim()) {
    form.append('language', input.language.trim())
  }
  form.append('response_format', 'json')

  const fetcher = input.fetcher ?? fetch
  /** @type {Record<string, string>} */
  const headers = {
    accept: 'application/json',
    ...(input.apiKey && input.apiKey.trim() ? { authorization: `Bearer ${input.apiKey.trim()}` } : {}),
  }
  const url = `${input.route.baseUrl}/${TRANSCRIPTION_PATH}`
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
  const result = { mode: 'live', model: input.route.modelId, text }
  return result
}
