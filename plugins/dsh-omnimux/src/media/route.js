import { OmnimuxError } from './errors.js'

export const PROTOCOLS = Object.freeze(['openai-media'])

export const DEFAULT_MEDIA = Object.freeze({
  defaultProvider: 'omnimux',
  providers: Object.freeze({
    omnimux: Object.freeze({
      protocol: 'openai-media',
      baseUrl: 'https://api.omnimux.ai/v1',
      apiKeyEnv: 'OMNIMUX_API_KEY',
      models: Object.freeze({
        video: 'seedance-2-0-fast',
        image: 'gpt-image-2',
      }),
    }),
  }),
})

/**
 * @param {unknown} value
 * @returns {typeof DEFAULT_MEDIA}
 */
export function parseMediaConfig(value) {
  if (value == null) return structuredClone(DEFAULT_MEDIA)
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('dsh-omnimux: media config must be an object')
  }
  const input = /** @type {Record<string, unknown>} */ (value)
  const defaultProvider = typeof input.defaultProvider === 'string' && input.defaultProvider.trim()
    ? input.defaultProvider.trim()
    : DEFAULT_MEDIA.defaultProvider
  const rawProviders = input.providers == null
    ? DEFAULT_MEDIA.providers
    : input.providers
  if (typeof rawProviders !== 'object' || rawProviders == null || Array.isArray(rawProviders)) {
    throw new Error('dsh-omnimux: media.providers must be an object')
  }
  /** @type {Record<string, { protocol: string, baseUrl: string, apiKeyEnv: string, models: Record<string, string> }>} */
  const providers = {}
  for (const [id, row] of Object.entries(rawProviders)) {
    if (!id.trim()) throw new Error('dsh-omnimux: media provider id must be non-empty')
    if (typeof row !== 'object' || row == null || Array.isArray(row)) {
      throw new Error(`dsh-omnimux: media.providers.${id} must be an object`)
    }
    const spec = /** @type {Record<string, unknown>} */ (row)
    const fallback = DEFAULT_MEDIA.providers[id]
    const protocol = String(spec.protocol ?? fallback?.protocol ?? '')
    if (!PROTOCOLS.includes(protocol)) {
      throw new Error(`dsh-omnimux: media.providers.${id}.protocol must be one of ${PROTOCOLS.join(', ')}`)
    }
    const baseUrl = String(spec.baseUrl ?? fallback?.baseUrl ?? '').replace(/\/+$/, '')
    if (!baseUrl) throw new Error(`dsh-omnimux: media.providers.${id}.baseUrl is required`)
    const apiKeyEnv = String(spec.apiKeyEnv ?? fallback?.apiKeyEnv ?? '')
    if (!apiKeyEnv) throw new Error(`dsh-omnimux: media.providers.${id}.apiKeyEnv is required`)
    const modelsIn = spec.models && typeof spec.models === 'object' && !Array.isArray(spec.models)
      ? /** @type {Record<string, unknown>} */ (spec.models)
      : {}
    /** @type {Record<string, string>} */
    const models = { ...(fallback?.models ?? {}) }
    for (const [cap, model] of Object.entries(modelsIn)) {
      if (typeof model === 'string' && model.trim()) models[cap] = model.trim()
    }
    providers[id] = { protocol, baseUrl, apiKeyEnv, models }
  }
  if (!providers[defaultProvider]) {
    throw new Error(`dsh-omnimux: media.defaultProvider '${defaultProvider}' is not in media.providers`)
  }
  return { defaultProvider, providers }
}

/**
 * @param {string} capability
 * @param {{ provider?: string, model?: string }} request
 * @param {ReturnType<typeof parseMediaConfig>} media
 * @param {Record<string, string | undefined>} [env]
 */
export function resolveMediaRoute(capability, request, media, env = process.env) {
  const providerId = typeof request.provider === 'string' && request.provider.trim()
    ? request.provider.trim()
    : media.defaultProvider
  const row = media.providers[providerId]
  if (!row) {
    throw new OmnimuxError('unknown-provider', `unknown media provider '${providerId}'`)
  }
  if (!PROTOCOLS.includes(row.protocol)) {
    throw new OmnimuxError('unknown-protocol', `unsupported media protocol '${row.protocol}'`)
  }
  const envBase = providerId === 'omnimux' ? env.OMNIMUX_BASE_URL : undefined
  const baseUrl = (envBase || row.baseUrl).replace(/\/+$/, '')
  const envModel = providerId === 'omnimux'
    ? (capability === 'video' ? env.OMNIMUX_VIDEO_MODEL : capability === 'image' ? env.OMNIMUX_IMAGE_MODEL : undefined)
    : undefined
  const modelId = (typeof request.model === 'string' && request.model.trim()
    ? request.model.trim()
    : (envModel || row.models[capability] || ''))
  if (!modelId) {
    throw new OmnimuxError('unknown-model', `no model configured for ${providerId}/${capability}`)
  }
  const apiKey = readProviderKey(providerId, row.apiKeyEnv, env)
  return {
    providerId,
    protocol: row.protocol,
    baseUrl,
    apiKey,
    modelId,
    capability,
  }
}

/**
 * @param {string} providerId
 * @param {string} apiKeyEnv
 * @param {Record<string, string | undefined>} env
 */
function readProviderKey(providerId, apiKeyEnv, env) {
  const primary = env[apiKeyEnv] ?? ''
  if (primary) return primary
  if (providerId === 'omnimux') return env.OMNIMUX_TOKEN ?? ''
  return ''
}
