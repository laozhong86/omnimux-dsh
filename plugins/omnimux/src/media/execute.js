import { OmnimuxError, unwrapAdapterError } from './errors.js'
import { classifyQuotaFailure } from '../errors/quota-classifier.js'
import { downloadMediaFile } from './job.js'
import { createOpenAiMediaRuntime, pollOpenAiMediaTask } from './protocols/openai-media.js'
import { parseMediaConfig, resolveMediaAuth, resolveMediaRoute } from './route.js'
import { mapOmnimuxInput, pickMediaUrl } from './vendors/omnimux.js'

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
 *   provider?: string,
 *   model?: string,
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
  const prompt = typeof input.prompt === 'string' ? input.prompt : ''
  if (!taskId && !prompt.trim()) {
    throw new OmnimuxError('omnimux-invalid-request', 'prompt is required unless taskId is set')
  }
  const media = parseMediaConfig(input.media)
  const route = resolveMediaRoute(capability, input, media, input.env)
  const auth = await resolveMediaAuth(route, {
    env: input.env,
    store: input.store,
    credentials: input.credentials,
  })

  if (taskId) {
    return finishMediaTask(capability, route, { ...input, taskId, authKey: auth.apiKey })
  }
  const wait = input.wait !== false
  const runtime = input.runtime ?? createProtocolRuntime(route, input.fetcher, auth.apiKey)
  let result
  try {
    result = await runtime.execute({
      providerId: route.providerId,
      modelId: `${route.providerId}-${capability}`,
      input: mapOmnimuxInput(capability, {
        prompt,
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
      }),
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
    apiKey: auth.apiKey,
    fetcher: input.fetcher,
    signal: input.signal,
  })
  return { mode: 'live', taskId: submittedId, url }
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
  await downloadMediaFile({
    dest: input.dest,
    url,
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
