import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import {
  createOpenAICompatibleAdapter,
  createOpenAICompatibleClient,
  createProviderRegistry,
  createProviderRuntime,
} from 'aigc-provider-runtime-kit/runtime'

export class OmnimuxError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   */
  constructor(code, message) {
    super(message)
    this.name = 'OmnimuxError'
    this.code = code
  }
}

/**
 * @param {Record<string, string | undefined>} [env]
 */
export function readOmnimuxConfig(env = process.env) {
  const baseUrl = (env.OMNIMUX_BASE_URL ?? 'https://api.omnimux.ai/v1').replace(/\/$/, '')
  const apiKey = env.OMNIMUX_API_KEY ?? env.OMNIMUX_TOKEN ?? ''
  const modelId = env.OMNIMUX_VIDEO_MODEL ?? 'seedance-2-0-fast'
  return { baseUrl, apiKey, modelId }
}

/**
 * @param {unknown} raw
 * @returns {string | undefined}
 */
export function pickTaskId(raw) {
  if (!raw || typeof raw !== 'object') return undefined
  const row = /** @type {Record<string, unknown>} */ (raw)
  const data = row.data && typeof row.data === 'object'
    ? /** @type {Record<string, unknown>} */ (row.data)
    : undefined
  const id = row.task_id ?? row.taskId ?? row.id ?? data?.task_id ?? data?.taskId ?? data?.id
  return id == null ? undefined : String(id)
}

/**
 * @param {unknown} raw
 * @returns {string | undefined}
 */
export function pickVideoUrl(raw) {
  if (!raw || typeof raw !== 'object') return undefined
  const row = /** @type {Record<string, unknown>} */ (raw)
  const data = row.data && typeof row.data === 'object'
    ? /** @type {Record<string, unknown>} */ (row.data)
    : undefined
  const direct = row.videoUrl ?? row.video_url ?? row.url ?? row.result_url
    ?? data?.videoUrl ?? data?.video_url ?? data?.url ?? data?.result_url
  if (typeof direct === 'string' && direct) return direct
  const list = row.videoUrls ?? row.video_urls ?? data?.videoUrls ?? data?.video_urls
  if (Array.isArray(list) && typeof list[0] === 'string') return list[0]
  const outputs = row.outputs
  if (Array.isArray(outputs)) {
    for (const item of outputs) {
      if (item && typeof item === 'object' && typeof item.url === 'string') return item.url
    }
  }
  return undefined
}

/**
 * @param {unknown} raw
 */
export function pickTaskStatus(raw) {
  if (!raw || typeof raw !== 'object') return ''
  const row = /** @type {Record<string, unknown>} */ (raw)
  const data = row.data && typeof row.data === 'object'
    ? /** @type {Record<string, unknown>} */ (row.data)
    : undefined
  return String(row.status ?? data?.status ?? '').toLowerCase()
}

/**
 * @param {typeof fetch} fetcher
 * @param {string} url
 * @param {string} apiKey
 * @param {AbortSignal | undefined} signal
 */
async function getJson(fetcher, url, apiKey, signal) {
  const response = await fetcher(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${apiKey}`,
      accept: 'application/json',
    },
    ...(signal ? { signal } : {}),
  })
  const json = await response.json()
  if (!response.ok) {
    throw new OmnimuxError('omnimux-request-failed', `GET ${url} failed: ${response.status}`)
  }
  return json
}

/**
 * @param {object} options
 * @param {typeof fetch} options.fetcher
 * @param {string} options.baseUrl
 * @param {string} options.apiKey
 * @param {string} options.taskId
 * @param {AbortSignal} [options.signal]
 * @param {() => Promise<void>} [options.sleep]
 */
export async function pollVideoTask(options) {
  const sleep = options.sleep ?? (() => new Promise((resolve) => setTimeout(resolve, 1500)))
  const url = `${options.baseUrl}/video/generations/${options.taskId}`
  for (;;) {
    if (options.signal?.aborted) {
      throw new OmnimuxError('omnimux-aborted', 'video poll aborted')
    }
    const json = await getJson(options.fetcher, url, options.apiKey, options.signal)
    const status = pickTaskStatus(json)
    if (status === 'completed' || status === 'success') return json
    if (status === 'failed' || status === 'error') {
      throw new OmnimuxError('omnimux-failed', `video task ${options.taskId} failed`)
    }
    await sleep()
  }
}

/**
 * @param {{
 *   fetcher?: typeof fetch,
 *   apiKey: string,
 *   baseUrl: string,
 *   modelId: string,
 *   poll?: typeof pollVideoTask,
 * }} options
 */
export function createOmnimuxVideoRuntime(options) {
  const fetcher = options.fetcher ?? fetch
  const client = createOpenAICompatibleClient({
    baseUrl: options.baseUrl,
    apiKey: options.apiKey,
    fetcher,
  })
  const registry = createProviderRegistry({
    providers: [{
      id: 'omnimux',
      name: 'OmniMux',
      baseUrl: options.baseUrl,
      protocol: 'openai',
      enabled: true,
    }],
    models: [{
      id: 'omnimux-video',
      providerId: 'omnimux',
      modelId: options.modelId,
      displayName: options.modelId,
      capability: 'video',
      enabled: true,
      parameterSchema: {
        prompt: { type: 'string', required: true },
        duration: { type: 'number' },
      },
    }],
  })
  const poll = options.poll ?? pollVideoTask
  const adapter = createOpenAICompatibleAdapter({
    client,
    providerIds: ['omnimux'],
    endpoints: { video: 'video/generations' },
    async normalize(raw, context) {
      const immediate = pickVideoUrl(raw)
      if (immediate) {
        return {
          status: 'completed',
          providerId: context.provider.id,
          modelId: context.model.id,
          capability: 'video',
          taskId: pickTaskId(raw),
          outputs: [{ type: 'video', url: immediate }],
          raw,
        }
      }
      const taskId = pickTaskId(raw)
      if (!taskId) {
        throw new OmnimuxError('omnimux-invalid-response', 'video submit returned no task_id or url')
      }
      const done = await poll({
        fetcher,
        baseUrl: options.baseUrl,
        apiKey: options.apiKey,
        taskId,
        signal: context.signal,
      })
      const url = pickVideoUrl(done)
      if (!url) {
        throw new OmnimuxError('omnimux-invalid-response', `task ${taskId} completed without a video url`)
      }
      return {
        status: 'completed',
        providerId: context.provider.id,
        modelId: context.model.id,
        capability: 'video',
        taskId,
        outputs: [{ type: 'video', url }],
        raw: done,
      }
    },
  })
  return createProviderRuntime({
    registry,
    adapters: [adapter],
  })
}

/**
 * @param {{ dest: string, url: string, fetcher?: typeof fetch, signal?: AbortSignal }} options
 */
export async function downloadVideoFile(options) {
  const fetcher = options.fetcher ?? fetch
  const response = await fetcher(options.url, options.signal ? { signal: options.signal } : {})
  if (!response.ok) {
    throw new OmnimuxError('omnimux-download-failed', `download failed: ${response.status}`)
  }
  const buffer = Buffer.from(await response.arrayBuffer())
  mkdirSync(dirname(options.dest), { recursive: true })
  writeFileSync(options.dest, buffer)
}

/**
 * @param {{
 *   prompt: string,
 *   dest: string,
 *   duration?: number,
 *   signal?: AbortSignal,
 *   env?: Record<string, string | undefined>,
 *   fetcher?: typeof fetch,
 *   runtime?: { execute: (req: object) => Promise<{ taskId?: string, outputs: Array<{ type: string, url?: string }> }> },
 * }} input
 */
export async function executeOmnimuxVideo(input) {
  const config = readOmnimuxConfig(input.env)
  if (!config.apiKey.trim()) {
    throw new OmnimuxError('omnimux-unconfigured', 'set OMNIMUX_API_KEY or OMNIMUX_TOKEN')
  }
  const runtime = input.runtime ?? createOmnimuxVideoRuntime({
    fetcher: input.fetcher,
    apiKey: config.apiKey,
    baseUrl: config.baseUrl,
    modelId: config.modelId,
  })
  const result = await runtime.execute({
    providerId: 'omnimux',
    modelId: 'omnimux-video',
    input: {
      prompt: input.prompt,
      ...(input.duration ? { duration: input.duration } : {}),
    },
    timeoutMs: 10 * 60_000,
    ...(input.signal ? { signal: input.signal } : {}),
  })
  const url = result.outputs.find((item) => item.type === 'video')?.url
  if (!url) {
    throw new OmnimuxError('omnimux-invalid-response', 'runtime completed without a video url')
  }
  await downloadVideoFile({
    dest: input.dest,
    url,
    fetcher: input.fetcher,
    signal: input.signal,
  })
  return { mode: 'live', taskId: result.taskId ?? null, url }
}
