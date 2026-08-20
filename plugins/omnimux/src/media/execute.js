import { OmnimuxError } from './errors.js'
import { downloadMediaFile } from './job.js'
import { createOpenAiMediaRuntime, pollOpenAiMediaTask } from './protocols/openai-media.js'
import { parseMediaConfig, resolveMediaRoute } from './route.js'
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
 *   provider?: string,
 *   model?: string,
 *   taskId?: string,
 *   wait?: boolean,
 *   signal?: AbortSignal,
 *   env?: Record<string, string | undefined>,
 *   media?: unknown,
 *   fetcher?: typeof fetch,
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
  if (!route.apiKey.trim()) {
    throw new OmnimuxError('omnimux-unconfigured', 'set OMNIMUX_API_KEY or OMNIMUX_TOKEN')
  }
  if (taskId) {
    return finishMediaTask(capability, route, { ...input, taskId })
  }
  const wait = input.wait !== false
  const runtime = input.runtime ?? createProtocolRuntime(route, input.fetcher)
  const result = await runtime.execute({
    providerId: route.providerId,
    modelId: `${route.providerId}-${capability}`,
    input: mapOmnimuxInput(capability, {
      prompt,
      duration: input.duration,
      image: input.image,
      speech: input.speech,
      audio: input.audio,
    }),
    timeoutMs: 10 * 60_000,
    metadata: { wait },
    ...(input.signal ? { signal: input.signal } : {}),
  })
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
    fetcher: input.fetcher,
    signal: input.signal,
  })
  return { mode: 'live', taskId: submittedId, url }
}

/**
 * @param {string} capability
 * @param {ReturnType<typeof resolveMediaRoute>} route
 * @param {{ dest: string, taskId: string, fetcher?: typeof fetch, signal?: AbortSignal }} input
 */
export async function finishMediaTask(capability, route, input) {
  const done = await pollOpenAiMediaTask({
    fetcher: input.fetcher ?? fetch,
    baseUrl: route.baseUrl,
    apiKey: route.apiKey,
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
    fetcher: input.fetcher,
    signal: input.signal,
  })
  return { mode: 'live', taskId: input.taskId, url }
}

/**
 * @param {ReturnType<typeof resolveMediaRoute>} route
 * @param {typeof fetch} [fetcher]
 */
function createProtocolRuntime(route, fetcher) {
  if (route.protocol === 'openai-media') {
    return createOpenAiMediaRuntime({
      fetcher,
      apiKey: route.apiKey,
      baseUrl: route.baseUrl,
      providerId: route.providerId,
      modelId: route.modelId,
      capability: route.capability,
    })
  }
  throw new OmnimuxError('unknown-protocol', `unsupported media protocol '${route.protocol}'`)
}
