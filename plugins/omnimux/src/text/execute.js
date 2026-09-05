import { OmnimuxError } from '../media/errors.js'
import {
  assertGuardOutput,
  assertGuardSubmit,
} from '../catalog/contract/submit-guard/index.js'
import { parseTextConfig, resolveTextRoute } from './catalog.js'
import { completeTextViaChat } from './chat.js'
import { loadTextImage } from './image.js'
import { loadTextVideo, toVideoImageUrlPart } from './video.js'

/**
 * One-shot expert completion. Default path: `ctx.llm.stream` (text / image).
 * Video path: bypass stream + attachments and POST chat completions with
 * `image_url` + `data:video/…` (spike-locked protocol). Not a chat turn: no
 * tools, no parent messages, no dest, no poll.
 *
 * SubmitGuard (#468) admits model/operation against the contract index before
 * the llm/chat path runs. Neutral adapter: does not change the public text API
 * shape; optional `operation` may be passed explicitly.
 *
 * @param {{
 *   prompt?: string,
 *   model?: string,
 *   operation?: string,
 *   image?: string,
 *   video?: string,
 *   system?: string,
 *   maxTokens?: number,
 *   signal?: AbortSignal,
 *   sessionId?: unknown,
 *   env?: Record<string, string | undefined>,
 *   text?: unknown,
 *   gate?: object,
 *   hub?: { gate?: object, text?: unknown },
 *   llm?: { stream: (options: object) => AsyncIterable<object> },
 *   attachments?: { saveImage: Function, imageLimits?: object },
 *   fetcher?: typeof fetch,
 *   apiKey?: string,
 *   baseUrl?: string,
 *   assetMeta?: object,
 *   bypassSubmitGuard?: boolean,
 * }} input
 */
export async function executeOmnimuxText(input) {
  const prompt = typeof input.prompt === 'string' ? input.prompt.trim() : ''
  if (!prompt) {
    throw new OmnimuxError('omnimux-invalid-request', 'prompt is required')
  }
  const text = parseTextConfig(input.text)
  const image = typeof input.image === 'string' ? input.image.trim() : ''
  const video = typeof input.video === 'string' ? input.video.trim() : ''
  if (image && video) {
    throw new OmnimuxError('omnimux-invalid-request', 'pass image or video, not both')
  }
  const gate = input.gate ?? input.hub?.gate
  const route = resolveTextRoute({ model: input.model, image, video }, text, input.env, gate)
  const maxTokens = typeof input.maxTokens === 'number' && Number.isFinite(input.maxTokens) && input.maxTokens > 0
    ? input.maxTokens
    : route.maxTokens
  const system = typeof input.system === 'string' ? input.system.trim() : ''

  let guardPlan = null
  if (!input.bypassSubmitGuard) {
    // Vision path needs MIME metadata when contract declares allowedMimes.
    // For path/URL without caller metadata, supply a conservative default so
    // listed vision_chat can proceed (callers may override via assetMeta).
    /** @type {Record<string, object>} */
    const assetMeta = { ...(input.assetMeta && typeof input.assetMeta === 'object' ? input.assetMeta : {}) }
    if (image && !assetMeta[image]) {
      assetMeta[image] = { mime: 'image/png', sizeBytes: 1024 }
    }
    // Native video-on-text is a hub protocol special (image_url + data:video), not a
    // listed contract media slot today. Keep it off the slot matcher so chat/vision
    // admission still works; video remains on the execute path below.
    guardPlan = assertGuardSubmit(
      {
        prompt,
        model: route.modelId,
        operation: input.operation,
        image: image || undefined,
        // intentionally omit video from guard assets
        system,
        maxTokens,
        assetMeta,
        seam: 'textComplete',
        capability: 'text',
      },
      {
        seam: 'textComplete',
        capability: 'text',
        outputType: 'text',
        gateAllows: gate
          ? (modelId) => {
              // Prefer gate.models when present; unknown gate shape → allow.
              const models = gate.models
              if (models && typeof models === 'object' && modelId in models) {
                return models[modelId] !== false
              }
              return true
            }
          : undefined,
      },
    )
  }

  if (video) {
    const packed = await loadTextVideo(video, { signal: input.signal })
    const result = await completeTextViaChat({
      model: route.modelId,
      prompt,
      system,
      maxTokens,
      videoPart: toVideoImageUrlPart(packed),
      env: input.env,
      fetcher: input.fetcher,
      signal: input.signal,
      apiKey: input.apiKey,
      baseUrl: input.baseUrl,
    })
    if (guardPlan) assertGuardOutput(guardPlan, result, { capability: 'text' })
    return result
  }

  if (!input.llm || typeof input.llm.stream !== 'function') {
    throw new OmnimuxError('needs-provider', 'textComplete requires ctx.llm')
  }
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
  const result = { mode: 'live', model: route.modelId, text: assembled }
  if (guardPlan) assertGuardOutput(guardPlan, result, { capability: 'text' })
  return result
}
