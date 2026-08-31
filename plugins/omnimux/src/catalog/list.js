import { createHash } from 'node:crypto'
import { isMediaEnabled } from '../gate/guard.js'
import { AUDIO_MODEL_SPECS, IMAGE_MODEL_SPECS, VIDEO_MODEL_SPECS } from '../media/catalog.js'
import { DEFAULT_MEDIA } from '../media/route.js'
import { DEFAULT_TEXT, CHAT_MODELS, enabledTextModels } from '../text/catalog.js'
import { textModelLabel } from './labels.js'
import { sortCatalogRows } from './sort.js'

export const CATALOG_KINDS = Object.freeze(['text', 'image', 'video', 'audio'])

export const ENV_DEFAULT_KEYS = Object.freeze({
  text: 'OMNIMUX_TEXT_DEFAULT_MODEL',
  image: 'OMNIMUX_IMAGE_MODEL',
  video: 'OMNIMUX_VIDEO_MODEL',
  audio: 'OMNIMUX_AUDIO_MODEL',
})

export const SETTINGS_DEFAULT_KEYS = Object.freeze({
  text: 'defaultTextModel',
  image: 'defaultImageModel',
  video: 'defaultVideoModel',
  audio: 'defaultAudioModel',
})

/**
 * @param {object} [opts]
 * @param {ReturnType<typeof import('../text/catalog.js').parseTextConfig>} [opts.text]
 * @param {ReturnType<typeof import('../media/route.js').parseMediaConfig>} [opts.media]
 * @param {object} [opts.gate]
 * @param {Record<string, string | undefined>} [opts.env]
 * @param {Record<string, unknown>} [opts.settingsDefaults]
 */
export function buildModelCatalog(opts = {}) {
  const text = opts.text ?? DEFAULT_TEXT
  const media = opts.media ?? DEFAULT_MEDIA
  const gate = opts.gate
  const env = opts.env ?? process.env
  const settingsDefaults = opts.settingsDefaults && typeof opts.settingsDefaults === 'object'
    ? opts.settingsDefaults
    : {}

  const chatMap = new Map(CHAT_MODELS.map((row) => [row.id, row]))
  const textRows = enabledTextModels(text, gate).map((row) => {
    const chat = chatMap.get(row.id)
    return {
      id: row.id,
      label: textModelLabel(row.id),
      family: row.brand,
      inputCapability: chat?.inputCapability,
    }
  })

  const lists = {
    text: sortCatalogRows(textRows),
    image: isMediaEnabled(gate, 'image') ? sortCatalogRows(IMAGE_MODEL_SPECS.map(cloneRow)) : [],
    video: isMediaEnabled(gate, 'video') ? sortCatalogRows(VIDEO_MODEL_SPECS.map(cloneRow)) : [],
    audio: isMediaEnabled(gate, 'audio') ? sortCatalogRows(AUDIO_MODEL_SPECS.map(cloneRow)) : [],
  }

  const configDefaults = {
    text: text.defaultModel || DEFAULT_TEXT.defaultModel,
    image: media.providers?.omnimux?.models?.image || DEFAULT_MEDIA.providers.omnimux.models.image,
    video: media.providers?.omnimux?.models?.video || DEFAULT_MEDIA.providers.omnimux.models.video,
    audio: media.providers?.omnimux?.models?.audio || DEFAULT_MEDIA.providers.omnimux.models.audio,
  }

  /** @type {{ text: string, image: string, video: string, audio: string }} */
  const defaults = {
    text: '',
    image: '',
    video: '',
    audio: '',
  }
  for (const kind of CATALOG_KINDS) {
    const ids = new Set(lists[kind].map((row) => row.id))
    defaults[kind] = resolveDefault({
      kind,
      ids,
      env,
      settingsDefaults,
      configDefault: configDefaults[kind],
      fallback: lists[kind][0]?.id ?? '',
    })
  }

  return {
    source: 'omnimux',
    fingerprint: fingerprintOf(lists, defaults),
    defaults,
    text: lists.text,
    image: lists.image,
    video: lists.video,
    audio: lists.audio,
  }
}

/**
 * @param {{
 *   kind: 'text' | 'image' | 'video' | 'audio',
 *   ids: Set<string>,
 *   env: Record<string, string | undefined>,
 *   settingsDefaults: Record<string, unknown>,
 *   configDefault: string,
 *   fallback: string,
 * }} input
 */
export function resolveDefault(input) {
  const envId = trimId(input.env[ENV_DEFAULT_KEYS[input.kind]])
  if (envId && input.ids.has(envId)) return envId
  const settingsId = trimId(input.settingsDefaults[SETTINGS_DEFAULT_KEYS[input.kind]])
  if (settingsId && input.ids.has(settingsId)) return settingsId
  if (input.configDefault && input.ids.has(input.configDefault)) return input.configDefault
  return input.fallback
}

/** @param {unknown} value */
function trimId(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : ''
}

/** @param {object} row */
function cloneRow(row) {
  return structuredClone(row)
}

/**
 * @param {{ text: Array<{ id: string }>, image: Array<{ id: string }>, video: Array<{ id: string }>, audio: Array<{ id: string }> }} lists
 * @param {{ text: string, image: string, video: string, audio: string }} defaults
 */
export function fingerprintOf(lists, defaults) {
  const payload = JSON.stringify({
    text: lists.text.map((row) => row.id),
    image: lists.image.map((row) => row.id),
    video: lists.video.map((row) => row.id),
    audio: lists.audio.map((row) => row.id),
    defaults,
  })
  return createHash('sha256').update(payload).digest('hex').slice(0, 16)
}
