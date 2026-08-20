import { OmnimuxError } from '../media/errors.js'
import { parseTextConfig, resolveTextRoute } from './catalog.js'
import { loadTextImage } from './image.js'

/**
 * One-shot expert completion over `ctx.llm.stream`. Not a chat turn: no
 * tools, no parent messages, no dest, no poll.
 * @param {{
 *   prompt?: string,
 *   model?: string,
 *   image?: string,
 *   system?: string,
 *   maxTokens?: number,
 *   signal?: AbortSignal,
 *   sessionId?: unknown,
 *   env?: Record<string, string | undefined>,
 *   text?: unknown,
 *   llm?: { stream: (options: object) => AsyncIterable<object> },
 *   attachments?: { saveImage: Function, imageLimits?: object },
 *   fetcher?: typeof fetch,
 * }} input
 */
export async function executeOmnimuxText(input) {
  const prompt = typeof input.prompt === 'string' ? input.prompt.trim() : ''
  if (!prompt) {
    throw new OmnimuxError('omnimux-invalid-request', 'prompt is required')
  }
  if (!input.llm || typeof input.llm.stream !== 'function') {
    throw new OmnimuxError('needs-provider', 'textComplete requires ctx.llm')
  }
  const text = parseTextConfig(input.text)
  const image = typeof input.image === 'string' ? input.image.trim() : ''
  const route = resolveTextRoute({ model: input.model, image }, text, input.env)
  const content = [{ type: 'text', text: prompt }]
  if (image) {
    if (!input.attachments || typeof input.attachments.saveImage !== 'function') {
      throw new OmnimuxError('needs-provider', 'image input requires ctx.attachments')
    }
    const attachment = await loadTextImage(image, {
      attachments: input.attachments,
      fetcher: input.fetcher,
      signal: input.signal,
    })
    content.push({ type: 'image', attachment })
  }
  const maxTokens = typeof input.maxTokens === 'number' && Number.isFinite(input.maxTokens) && input.maxTokens > 0
    ? input.maxTokens
    : route.maxTokens
  const system = typeof input.system === 'string' ? input.system.trim() : ''
  const options = {
    provider: route.providerId,
    model: route.modelId,
    messages: [{ role: 'user', content }],
    maxTokens,
    ...(system ? { system } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
    ...(input.sessionId === undefined ? {} : { sessionId: input.sessionId }),
  }
  let assembled = ''
  let finish
  for await (const chunk of input.llm.stream(options)) {
    if (!chunk || typeof chunk !== 'object') continue
    const row = /** @type {Record<string, unknown>} */ (chunk)
    if (row.type === 'text-delta' && typeof row.text === 'string') assembled += row.text
    if (row.type === 'block-end' && row.block && typeof row.block === 'object') {
      const block = /** @type {Record<string, unknown>} */ (row.block)
      if (block.type === 'text' && typeof block.text === 'string' && !assembled) assembled += block.text
    }
    if (row.type === 'finish') finish = row
  }
  const reason = finish && typeof finish.reason === 'object' && finish.reason
    ? /** @type {Record<string, unknown>} */ (finish.reason)
    : undefined
  if (reason?.kind === 'error' || reason?.kind === 'aborted') {
    const failure = reason.failure && typeof reason.failure === 'object'
      ? /** @type {Record<string, unknown>} */ (reason.failure)
      : undefined
    const message = typeof failure?.message === 'string' && failure.message.trim()
      ? failure.message
      : `text complete ${reason.kind}`
    throw new OmnimuxError('omnimux-failed', message)
  }
  if (!assembled.trim()) {
    throw new OmnimuxError('omnimux-invalid-response', 'text complete produced no text')
  }
  return { mode: 'live', model: route.modelId, text: assembled }
}
