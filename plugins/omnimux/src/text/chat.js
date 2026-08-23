import { OmnimuxError } from '../media/errors.js'

const DEFAULT_CHAT_BASE = 'https://api.omnimux.ai/v1'
const DEFAULT_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

/**
 * One-shot chat-completions call used when `textComplete` carries a `video`
 * input. Bypasses `ctx.llm.stream` / attachments because harness ImageMediaType
 * cannot store video MIME. Still not a parallel chat tool: no tools, no parent
 * history, same whitelist + return shape as the stream path.
 * @param {{
 *   model: string,
 *   prompt: string,
 *   system?: string,
 *   maxTokens: number,
 *   videoPart: { type: 'image_url', image_url: { url: string } },
 *   env?: Record<string, string | undefined>,
 *   fetcher?: typeof fetch,
 *   signal?: AbortSignal,
 *   apiKey?: string,
 *   baseUrl?: string,
 * }} input
 */
export async function completeTextViaChat(input) {
  const env = input.env ?? process.env
  const apiKey = (typeof input.apiKey === 'string' && input.apiKey.trim())
    || String(env.OMNIMUX_API_KEY || env.OMNIMUX_TOKEN || '').trim()
  if (!apiKey) {
    throw new OmnimuxError('omnimux-unconfigured', 'set OMNIMUX_API_KEY or OMNIMUX_TOKEN')
  }
  const baseUrl = normalizeBaseUrl(
    (typeof input.baseUrl === 'string' && input.baseUrl.trim())
      || String(env.OMNIMUX_BASE_URL || DEFAULT_CHAT_BASE),
  )
  const prompt = typeof input.prompt === 'string' ? input.prompt.trim() : ''
  if (!prompt) {
    throw new OmnimuxError('omnimux-invalid-request', 'prompt is required')
  }
  if (!input.videoPart || input.videoPart.type !== 'image_url') {
    throw new OmnimuxError('omnimux-invalid-request', 'video part must be image_url')
  }
  const url = input.videoPart.image_url?.url
  if (typeof url !== 'string' || !url.startsWith('data:video/')) {
    throw new OmnimuxError('omnimux-invalid-request', 'video part url must be data:video/…')
  }
  const system = typeof input.system === 'string' ? input.system.trim() : ''
  /** @type {Array<{ role: string, content: unknown }>} */
  const messages = []
  if (system) messages.push({ role: 'system', content: system })
  messages.push({
    role: 'user',
    content: [
      { type: 'text', text: prompt },
      input.videoPart,
    ],
  })
  const body = {
    model: input.model,
    max_tokens: input.maxTokens,
    messages,
  }
  const fetcher = input.fetcher ?? fetch
  let response
  try {
    response = await fetcher(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
        accept: 'application/json',
        'user-agent': DEFAULT_UA,
      },
      body: JSON.stringify(body),
      ...(input.signal ? { signal: input.signal } : {}),
    })
  } catch (error) {
    if (error && typeof error === 'object' && 'name' in error && error.name === 'AbortError') {
      throw new OmnimuxError('omnimux-aborted', 'text complete aborted')
    }
    throw new OmnimuxError(
      'omnimux-failed',
      `text complete transport failed: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
  let payload
  try {
    payload = await response.json()
  } catch {
    payload = {}
  }
  if (!response.ok) {
    const message = pickErrorMessage(payload) || `text complete HTTP ${response.status}`
    if (response.status === 401 || response.status === 403) {
      throw new OmnimuxError('omnimux-unconfigured', message)
    }
    throw new OmnimuxError('omnimux-failed', message)
  }
  const text = extractAssistantText(payload)
  if (!text.trim()) {
    throw new OmnimuxError('omnimux-invalid-response', 'text complete produced no text')
  }
  return { mode: 'live', model: input.model, text }
}

/**
 * @param {string} value
 */
function normalizeBaseUrl(value) {
  const trimmed = String(value || '').trim().replace(/\/+$/, '')
  if (!trimmed) return DEFAULT_CHAT_BASE
  return /\/v1$/i.test(trimmed) ? trimmed : `${trimmed}/v1`
}

/**
 * @param {unknown} payload
 */
export function extractAssistantText(payload) {
  const row = payload && typeof payload === 'object' ? /** @type {Record<string, unknown>} */ (payload) : {}
  const choices = Array.isArray(row.choices) ? row.choices : []
  const first = choices[0] && typeof choices[0] === 'object'
    ? /** @type {Record<string, unknown>} */ (choices[0])
    : undefined
  const message = first?.message && typeof first.message === 'object'
    ? /** @type {Record<string, unknown>} */ (first.message)
    : undefined
  const content = message?.content ?? first?.text
  if (typeof content === 'string') return content
  if (Array.isArray(content)) {
    return content
      .filter((part) => part && typeof part === 'object' && /** @type {any} */ (part).type === 'text')
      .map((part) => String(/** @type {any} */ (part).text || ''))
      .join('\n')
  }
  return ''
}

/**
 * @param {unknown} json
 */
function pickErrorMessage(json) {
  if (!json || typeof json !== 'object') return ''
  const row = /** @type {Record<string, unknown>} */ (json)
  const err = row.error
  if (typeof err === 'string') return err
  if (err && typeof err === 'object' && typeof /** @type {any} */ (err).message === 'string') {
    return /** @type {any} */ (err).message
  }
  return String(row.message || '')
}
