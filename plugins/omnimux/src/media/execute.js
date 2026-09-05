import { OmnimuxError, unwrapAdapterError } from './errors.js'
import { classifyQuotaFailure } from '../errors/quota-classifier.js'
import { downloadMediaFile } from './job.js'
import { createOpenAiMediaRuntime, pollOpenAiMediaTask } from './protocols/openai-media.js'
import { parseMediaConfig, resolveMediaAuth, resolveMediaRoute } from './route.js'
import { mapOmnimuxInput, pickMediaUrl } from './vendors/omnimux.js'
import {
  assertGuardOutput,
  assertGuardSubmit,
  normalizeLogicalRequest,
} from '../catalog/contract/submit-guard/index.js'
import { probeTextImage } from '../text/image.js'
import { probeTextVideo } from '../text/video.js'
import { probeRemoteDocument } from '../text/document.js'
import { durationFromAudioBytes, loadAudioBytes } from './stt.js'

const CAPABILITY_SEAM = Object.freeze({
  video: 'videoGenerate',
  image: 'imageGenerate',
  audio: 'audioGenerate',
})
const MAX_PROBED_IMAGE_BYTES = 50 * 1024 * 1024
const MAX_PROBED_VIDEO_BYTES = 200 * 1024 * 1024
const MAX_PROBED_DOCUMENT_BYTES = 100 * 1024 * 1024

/**
 * @param {string} capability
 * @param {{
 *   prompt?: string,
 *   dest: string,
 *   duration?: number,
 *   image?: string,
 *   speech?: string,
 *   audio?: string,
 *   references?: Array<{ role?: string, type: string, pathOrUrl: string, [key: string]: unknown }>,
 *   audioTrack?: { role?: string, type: string, pathOrUrl: string, [key: string]: unknown },
 *   voice?: string,
 *   style?: string,
 *   instrumental?: boolean,
 *   speed?: number,
 *   aspectRatio?: string,
 *   resolution?: string,
 *   sound?: boolean,
 *   seed?: number,
 *   watermark?: boolean,
 *   outputFormat?: string,
 *   referenceTaskType?: string,
 *   generationType?: string,
 *   returnLastFrame?: boolean,
 *   webSearch?: boolean,
 *   nsfwCheck?: boolean,
 *   fileUrl?: string,
 *   linkUrl?: string,
 *   provider?: string,
 *   model?: string,
 *   operation?: string,
 *   image_tail?: string,
 *   imageTail?: string,
 *   taskId?: string,
 *   wait?: boolean,
 *   signal?: AbortSignal,
 *   env?: Record<string, string | undefined>,
 *   media?: unknown,
 *   fetcher?: typeof fetch,
 *   store?: { resolve: () => Promise<string | undefined> },
 *   credentials?: { resolve: (ref: string) => Promise<{ value?: string } | undefined> },
 *   runtime?: { execute: (req: object) => Promise<{ taskId?: string, outputs: Array<{ type: string, url?: string }> }> },
 * }} input
 */
export async function executeOmnimuxMedia(capability, input) {
  if (!input.dest) {
    throw new OmnimuxError('omnimux-invalid-request', 'dest is required')
  }
  const taskId = typeof input.taskId === 'string' ? input.taskId.trim() : ''
  const media = parseMediaConfig(input.media)
  const route = resolveMediaRoute(capability, input, media, input.env)

  // taskId poll/finish: skip initial asset SubmitGuard and do not resubmit.
  if (taskId) {
    const auth = await resolveMediaAuth(route, {
      env: input.env,
      store: input.store,
      credentials: input.credentials,
    })
    return finishMediaTask(capability, route, { ...input, taskId, authKey: auth.apiKey })
  }

  const prompt = typeof input.prompt === 'string' ? input.prompt : ''
  const seam = CAPABILITY_SEAM[capability] ?? capability
  const assets = await probeMediaAssets(input, { capability, seam })
  const guardPlan = assertGuardSubmit(
    {
      prompt,
      model: route.modelId,
      operation: input.operation,
      speech: input.speech,
      duration: input.duration,
      voice: input.voice,
      style: input.style,
      instrumental: input.instrumental,
      speed: input.speed,
      aspectRatio: input.aspectRatio,
      resolution: input.resolution,
      sound: input.sound,
      seed: input.seed,
      watermark: input.watermark,
      outputFormat: input.outputFormat,
      referenceTaskType: input.referenceTaskType,
      generationType: input.generationType,
      returnLastFrame: input.returnLastFrame,
      webSearch: input.webSearch,
      nsfwCheck: input.nsfwCheck,
      fileUrl: input.fileUrl,
      linkUrl: input.linkUrl,
      assets,
      capability,
      seam,
    },
    {
      seam,
      capability,
      outputType: capability === 'video' || capability === 'image' || capability === 'audio' ? capability : undefined,
    },
  )

  const auth = await resolveMediaAuth(route, {
    env: input.env,
    store: input.store,
    credentials: input.credentials,
  })

  const wait = input.wait !== false
  const runtime = input.runtime ?? createProtocolRuntime(route, input.fetcher, auth.apiKey)

  const mappedInput = mapOmnimuxInput(capability, {
    prompt: guardPlan.prompt,
    model: guardPlan.modelId,
    duration: input.duration,
    image: input.image,
    speech: input.speech,
    audio: input.audio,
    references: input.references,
    audioTrack: input.audioTrack,
    voice: input.voice,
    style: input.style,
    instrumental: input.instrumental,
    speed: input.speed,
    aspectRatio: input.aspectRatio,
    resolution: input.resolution,
    operation: guardPlan.operationId,
    guardPlan,
  })

  let result
  try {
    result = await runtime.execute({
      providerId: route.providerId,
      modelId: `${route.providerId}-${capability}`,
      input: mappedInput,
      timeoutMs: 10 * 60_000,
      metadata: { wait },
      ...(input.signal ? { signal: input.signal } : {}),
    })
  } catch (error) {
    const unwrapped = unwrapAdapterError(error)
    const classified = classifyQuotaFailure({ error: unwrapped, cause: unwrapped, message: unwrapped?.message })
    if (classified.kind === 'quota-exceeded') {
      throw new OmnimuxError('quota-exceeded', classified.message, { cause: unwrapped instanceof Error ? unwrapped : undefined })
    }
    throw unwrapped
  }

  assertGuardOutput(guardPlan, result, { capability })

  const url = result.outputs.find((item) => item.type === capability)?.url
  const submittedId = result.taskId ?? null
  if (!wait && !url) {
    if (!submittedId) {
      throw new OmnimuxError('omnimux-invalid-response', 'submit returned no task_id')
    }
    return { mode: 'submitted', taskId: submittedId, url: null }
  }
  if (!url) {
    throw new OmnimuxError('omnimux-invalid-response', `runtime completed without a ${capability} url`)
  }
  await downloadMediaFile({
    dest: input.dest,
    url,
    capability,
    apiKey: auth.apiKey,
    fetcher: input.fetcher,
    signal: input.signal,
  })
  return { mode: 'live', taskId: submittedId, url }
}

/**
 * Ignore caller-provided media metadata and derive every guard asset from its
 * bytes. A reference with an unknown type deliberately reaches the guard
 * without MIME/size metadata, where any restricted slot rejects it.
 * @param {Record<string, unknown>} input
 * @param {{ capability?: string, seam?: string }} [context]
 */
export async function probeMediaAssets(input, context = {}) {
  const capability = typeof context.capability === 'string' ? context.capability : undefined
  const seam = typeof context.seam === 'string' ? context.seam : undefined
  const topImage = typeof input.image === 'string' ? input.image.trim() : ''
  const topImageIsExplicitReference = topImage && (
    Array.isArray(input.references)
      ? input.references.some((reference) => {
        if (!reference || typeof reference !== 'object') return false
        const row = /** @type {Record<string, unknown>} */ (reference)
        return typeof row.pathOrUrl === 'string' && row.pathOrUrl.trim() === topImage
      })
      : false
  )
  const normalized = normalizeLogicalRequest({
    ...input,
    // A workflow often repeats its leading explicit reference in `image`.
    // Omit only that shorthand before normalization so a first_frame supplied
    // by `references` remains an explicit asset rather than being filtered.
    image: topImageIsExplicitReference ? undefined : input.image,
    assetMeta: {},
    metadata: undefined,
    imageMeta: undefined,
    imageTailMeta: undefined,
    audioMeta: undefined,
    // This boundary owns capability semantics. Mounted callers must not be
    // able to turn video shorthand into a generic reference.
    capability,
    seam,
  })
  return Promise.all(normalized.assets.map(async (asset) => {
    const identity = {
      type: asset.type,
      pathOrUrl: asset.pathOrUrl,
      ...(asset.role ? { role: asset.role } : {}),
      ...(asset.targetSlot ? { targetSlot: asset.targetSlot } : {}),
    }
    if (asset.type === 'image') {
      const image = await probeTextImage(asset.pathOrUrl, {
        attachments: { imageLimits: { maxImageBytes: MAX_PROBED_IMAGE_BYTES } },
        fetcher: input.fetcher,
        signal: input.signal,
      })
      return { ...identity, mime: image.mediaType, sizeBytes: image.sizeBytes }
    }
    if (asset.type === 'video') {
      const video = await probeTextVideo(asset.pathOrUrl, {
        maxVideoBytes: MAX_PROBED_VIDEO_BYTES,
        fetcher: input.fetcher,
        signal: input.signal,
      })
      return {
        ...identity,
        mime: video.mediaType,
        sizeBytes: video.sizeBytes,
        ...(video.durationSec !== undefined ? { durationSec: video.durationSec } : {}),
      }
    }
    if (asset.type === 'audio') {
      const audio = await loadAudioBytes(asset.pathOrUrl, {
        fetcher: input.fetcher,
        signal: input.signal,
      })
      const durationSec = durationFromAudioBytes(audio.bytes, audio.contentType)
      return {
        ...identity,
        mime: audio.contentType === 'audio/mpeg' ? 'audio/mp3' : audio.contentType,
        sizeBytes: audio.bytes.byteLength,
        ...(durationSec !== undefined ? { durationSec } : {}),
      }
    }
    if (asset.type === 'document' && (asset.role === 'document' || asset.targetSlot === 'file_url')) {
      const document = await probeRemoteDocument(asset.pathOrUrl, {
        maxDocumentBytes: MAX_PROBED_DOCUMENT_BYTES,
        fetcher: input.fetcher,
        signal: input.signal,
      })
      return { ...identity, mime: document.mime, sizeBytes: document.sizeBytes }
    }
    return identity
  }))
}

/**
 * @param {string} capability
 * @param {ReturnType<typeof resolveMediaRoute>} route
 * @param {{
 *   dest: string,
 *   taskId: string,
 *   fetcher?: typeof fetch,
 *   signal?: AbortSignal,
 *   authKey?: string,
 *   env?: Record<string, string | undefined>,
 *   store?: { resolve: () => Promise<string | undefined> },
 *   credentials?: { resolve: (ref: string) => Promise<{ value?: string } | undefined> },
 * }} input
 */
export async function finishMediaTask(capability, route, input) {
  let apiKey = input.authKey
  if (apiKey === undefined) {
    const auth = await resolveMediaAuth(route, {
      env: input.env,
      store: input.store,
      credentials: input.credentials,
    })
    apiKey = auth.apiKey
  }
  const done = await pollOpenAiMediaTask({
    fetcher: input.fetcher ?? fetch,
    baseUrl: route.baseUrl,
    apiKey,
    taskId: input.taskId,
    capability,
    signal: input.signal,
  })
  const url = pickMediaUrl(done)
  if (!url) {
    throw new OmnimuxError('omnimux-invalid-response', `task ${input.taskId} completed without a ${capability} url`)
  }
  // A poll has no original submit operation to recover, but it still crosses
  // the output boundary. Validate the completed result shape here; the
  // download layer below validates the response MIME before it writes bytes.
  assertGuardOutput(
    { operation: { output: { type: capability } } },
    { mode: 'live', outputs: [{ type: capability, url }] },
    { capability },
  )
  await downloadMediaFile({
    dest: input.dest,
    url,
    capability,
    apiKey,
    fetcher: input.fetcher,
    signal: input.signal,
  })
  return { mode: 'live', taskId: input.taskId, url }
}

/**
 * @param {ReturnType<typeof resolveMediaRoute>} route
 * @param {typeof fetch} [fetcher]
 * @param {string} [apiKey]
 */
function createProtocolRuntime(route, fetcher, apiKey = route.apiKey) {
  if (route.protocol === 'openai-media') {
    return createOpenAiMediaRuntime({
      fetcher,
      apiKey: apiKey || '',
      baseUrl: route.baseUrl,
      providerId: route.providerId,
      modelId: route.modelId,
      capability: route.capability,
    })
  }
  throw new OmnimuxError('unknown-protocol', `unsupported media protocol '${route.protocol}'`)
}
