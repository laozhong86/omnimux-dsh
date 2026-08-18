import { OmnimuxError } from '../media/errors.js'

/**
 * Chat-directory rows the expert whitelist may name. Ids must stay a subset
 * of `cordis.patch.yml` `llm-pi-ai` / `omnimux.models`; an id missing there
 * fails at the adapter as UNKNOWN_MODEL.
 *
 * `input` follows the measured gateway matrix (docs/evidence/
 * omnimux-modality-2026-08-18.md): a 64px red image plus a content prompt
 * was sent to every row; rows that answered with the image color declare
 * image. deepseek-v4-pro/flash and glm-5.3 rejected `image_url` upstream and
 * stay text-only. claude-opus-5 supports images on the Anthropic `/v1/messages`
 * protocol but the chat-completions group is currently 403 for this key; it
 * is wired in after that group is upgraded, so it stays text-only here.
 */
export const CHAT_MODELS = Object.freeze([
  Object.freeze({ id: 'claude-opus-5', brand: 'anthropic', role: 'flagship', input: Object.freeze(['text']) }),
  Object.freeze({ id: 'gpt-5.6-sol', brand: 'openai', role: 'flagship', input: Object.freeze(['text', 'image']) }),
  Object.freeze({ id: 'grok-4.6', brand: 'xai', role: 'flagship', input: Object.freeze(['text', 'image']) }),
  Object.freeze({ id: 'kimi-k3', brand: 'moonshot', role: 'flagship', input: Object.freeze(['text', 'image']) }),
  Object.freeze({ id: 'deepseek-v4-pro', brand: 'deepseek', role: 'flagship', input: Object.freeze(['text']) }),
  Object.freeze({ id: 'deepseek-v4-flash', brand: 'deepseek', role: 'classic', input: Object.freeze(['text']) }),
  Object.freeze({ id: 'gemini-3.7-flash', brand: 'google', role: 'flagship', input: Object.freeze(['text', 'image']) }),
  Object.freeze({ id: 'glm-5.3', brand: 'zhipu', role: 'flagship', input: Object.freeze(['text']) }),
])

/**
 * The whitelist a request resolves against. Charts map to the table above
 * with an `enabled` flag; `defaultModel` is what an omitted `model` uses on
 * both text-only and image requests.
 */
export const CHAT_MODEL_IDS = Object.freeze(CHAT_MODELS.map((row) => row.id))

const CHAT_BY_ID = new Map(CHAT_MODELS.map((row) => [row.id, row]))

export const TEXT_ROLES = Object.freeze(['flagship', 'classic'])

export const DEFAULT_TEXT = Object.freeze({
  defaultProvider: 'omnimux',
  defaultModel: 'gemini-3.7-flash',
  maxTokens: 4096,
  models: Object.freeze(CHAT_MODELS.map((row) => Object.freeze({
    id: row.id,
    brand: row.brand,
    role: row.role,
    enabled: true,
  }))),
})

/**
 * @param {unknown} value
 * @returns {typeof DEFAULT_TEXT}
 */
export function parseTextConfig(value) {
  if (value == null) return structuredClone(DEFAULT_TEXT)
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('dsh-omnimux: text config must be an object')
  }
  const input = /** @type {Record<string, unknown>} */ (value)
  const defaultProvider = typeof input.defaultProvider === 'string' && input.defaultProvider.trim()
    ? input.defaultProvider.trim()
    : DEFAULT_TEXT.defaultProvider
  const defaultModel = typeof input.defaultModel === 'string' && input.defaultModel.trim()
    ? input.defaultModel.trim()
    : DEFAULT_TEXT.defaultModel
  const maxTokens = parseMaxTokens(input.maxTokens)
  const models = input.models == null
    ? structuredClone(DEFAULT_TEXT.models)
    : parseModelRows(input.models)
  return { defaultProvider, defaultModel, maxTokens, models }
}

/**
 * @param {ReturnType<typeof parseTextConfig>} text
 */
export function enabledTextModels(text) {
  return text.models.filter((row) => row.enabled !== false)
}

/**
 * Resolve which model a one-shot request runs on. An omitted `model` uses
 * `text.defaultModel` on both text-only and image requests; `OMNIMUX_TEXT_
 * DEFAULT_MODEL` overlays it. The chosen row must be enabled, and an image
 * request must land on a row whose measured matrix includes image.
 * @param {{ model?: string, image?: string }} request
 * @param {ReturnType<typeof parseTextConfig>} text
 * @param {Record<string, string | undefined>} [env]
 */
export function resolveTextRoute(request, text, env = process.env) {
  const enabled = enabledTextModels(text)
  const hasImage = typeof request.image === 'string' && request.image.trim().length > 0
  const requested = typeof request.model === 'string' ? request.model.trim() : ''
  const modelId = requested || resolveDefaultModel(enabled, text.defaultModel, env)
  const row = enabled.find((item) => item.id === modelId)
  if (!row) {
    throw new OmnimuxError('unknown-model', `model '${modelId}' is not on the enabled text whitelist`)
  }
  const chat = CHAT_BY_ID.get(row.id)
  const input = chat?.input ?? ['text']
  if (hasImage && !input.includes('image')) {
    throw new OmnimuxError('omnimux-invalid-request', `model '${row.id}' does not accept image input`)
  }
  return {
    providerId: text.defaultProvider,
    modelId: row.id,
    input,
    maxTokens: text.maxTokens,
  }
}

/**
 * @param {unknown} value
 */
function parseMaxTokens(value) {
  if (value == null) return DEFAULT_TEXT.maxTokens
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
    throw new Error('dsh-omnimux: text.maxTokens must be a positive number')
  }
  return value
}

/**
 * @param {unknown} value
 */
function parseModelRows(value) {
  if (!Array.isArray(value)) {
    throw new Error('dsh-omnimux: text.models must be an array')
  }
  const seen = new Set()
  return value.map((row, index) => {
    if (typeof row !== 'object' || row == null || Array.isArray(row)) {
      throw new Error(`dsh-omnimux: text.models[${index}] must be an object`)
    }
    const spec = /** @type {Record<string, unknown>} */ (row)
    const id = typeof spec.id === 'string' ? spec.id.trim() : ''
    if (!id) throw new Error(`dsh-omnimux: text.models[${index}].id is required`)
    const chat = CHAT_BY_ID.get(id)
    if (!chat) {
      throw new Error(`dsh-omnimux: text.models[${index}].id '${id}' is not in the chat directory`)
    }
    if (seen.has(id)) {
      throw new Error(`dsh-omnimux: text.models repeats id '${id}'`)
    }
    seen.add(id)
    const brand = typeof spec.brand === 'string' && spec.brand.trim()
      ? spec.brand.trim()
      : chat.brand
    const role = typeof spec.role === 'string' && spec.role.trim()
      ? spec.role.trim()
      : chat.role
    if (!TEXT_ROLES.includes(role)) {
      throw new Error(`dsh-omnimux: text.models[${index}].role must be one of ${TEXT_ROLES.join(', ')}`)
    }
    return {
      id,
      brand,
      role,
      enabled: spec.enabled !== false,
    }
  })
}

/**
 * @param {Array<{ id: string }>} enabled
 * @param {string} configDefault
 * @param {Record<string, string | undefined>} env
 */
function resolveDefaultModel(enabled, configDefault, env) {
  const overlay = typeof env.OMNIMUX_TEXT_DEFAULT_MODEL === 'string' ? env.OMNIMUX_TEXT_DEFAULT_MODEL.trim() : ''
  const id = overlay || configDefault
  if (!enabled.some((item) => item.id === id)) {
    throw new OmnimuxError(
      'unknown-model',
      `default text model '${id}' is not on the enabled text whitelist`,
    )
  }
  return id
}
