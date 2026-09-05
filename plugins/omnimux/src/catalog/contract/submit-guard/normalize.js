/**
 * Normalize a logical hub request into slot-oriented assets + prompt text.
 * Accepts existing API-compatible fields (image / references / audioTrack /
 * speech / audio / video) without treating media/catalog.js as authority.
 */

/**
 * @typedef {object} LogicalAsset
 * @property {string} type  image | audio | video | document | text
 * @property {string} pathOrUrl
 * @property {string} [role]
 * @property {string} [targetSlot]
 * @property {string} [mime]
 * @property {number} [sizeBytes]
 * @property {number} [durationSec]
 * @property {Record<string, unknown>} [meta]
 */

/**
 * @typedef {object} NormalizedRequest
 * @property {string} prompt
 * @property {LogicalAsset[]} assets
 * @property {string} [operation]
 * @property {string} [model]
 * @property {string} [seam]
 * @property {string} [capability]
 * @property {Record<string, unknown>} extras  non-asset logical fields (voice, style, …)
 * @property {boolean} legacyOperationMissing
 */

/**
 * @param {unknown} value
 * @returns {string}
 */
function str(value) {
  return typeof value === 'string' ? value.trim() : ''
}

/**
 * Pull optional size/duration/mime from a parallel metadata map keyed by path,
 * or from the asset row itself.
 * @param {object} row
 * @param {Record<string, object>} [byPath]
 * @returns {{ mime?: string, sizeBytes?: number, durationSec?: number }}
 */
function pickMeta(row, byPath = {}) {
  const path = str(row.pathOrUrl || row.url || row.path)
  const fromMap = path && byPath[path] && typeof byPath[path] === 'object' ? byPath[path] : {}
  const mime = str(row.mime || row.contentType || fromMap.mime || fromMap.contentType) || undefined
  const sizeRaw = row.sizeBytes ?? row.size ?? fromMap.sizeBytes ?? fromMap.size
  const durRaw = row.durationSec ?? row.duration ?? fromMap.durationSec ?? fromMap.duration
  const sizeBytes = typeof sizeRaw === 'number' && Number.isFinite(sizeRaw) ? sizeRaw : undefined
  const durationSec = typeof durRaw === 'number' && Number.isFinite(durRaw) ? durRaw : undefined
  return {
    ...(mime ? { mime } : {}),
    ...(sizeBytes !== undefined ? { sizeBytes } : {}),
    ...(durationSec !== undefined ? { durationSec } : {}),
  }
}

/**
 * @param {object} row
 * @param {string} fallbackType
 * @param {string} [fallbackRole]
 * @param {Record<string, object>} [metaByPath]
 * @returns {LogicalAsset|null}
 */
function assetFromRow(row, fallbackType, fallbackRole, metaByPath) {
  if (!row || typeof row !== 'object') return null
  const pathOrUrl = str(row.pathOrUrl || row.url || row.path || row.image || row.audio)
  if (!pathOrUrl) return null
  const type = str(row.type) || fallbackType
  const role = str(row.role) || fallbackRole
  const targetSlot = str(row.targetSlot || row.slot) || undefined
  const meta = pickMeta({ ...row, pathOrUrl }, metaByPath)
  return {
    type,
    pathOrUrl,
    ...(role ? { role } : {}),
    ...(targetSlot ? { targetSlot } : {}),
    ...meta,
  }
}

/**
 * @param {object} request
 * @returns {NormalizedRequest}
 */
export function normalizeLogicalRequest(request = {}) {
  const raw = request && typeof request === 'object' ? request : {}
  const metaByPath =
    raw.assetMeta && typeof raw.assetMeta === 'object' && !Array.isArray(raw.assetMeta)
      ? /** @type {Record<string, object>} */ (raw.assetMeta)
      : raw.metadata && typeof raw.metadata === 'object' && !Array.isArray(raw.metadata) &&
          (raw.metadata.sizeBytes != null || raw.metadata.mime != null || Object.values(raw.metadata).some((v) => v && typeof v === 'object' && ('sizeBytes' in /** @type {object} */ (v) || 'mime' in /** @type {object} */ (v))))
        ? /** @type {Record<string, object>} */ (
            Object.values(raw.metadata).some((v) => v && typeof v === 'object' && 'sizeBytes' in /** @type {object} */ (v))
              ? raw.metadata
              : {}
          )
        : {}

  /** @type {LogicalAsset[]} */
  const assets = []
  const seen = new Set()

  /**
   * @param {LogicalAsset|null} asset
   */
  function push(asset) {
    if (!asset) return
    const key = `${asset.type}|${asset.role ?? ''}|${asset.targetSlot ?? ''}|${asset.pathOrUrl}`
    if (seen.has(key)) return
    seen.add(key)
    assets.push(asset)
  }

  if (Array.isArray(raw.references)) {
    for (const row of raw.references) {
      const type = str(row?.type) || 'image'
      push(assetFromRow(row, type, str(row?.role) || 'reference', metaByPath))
    }
  }

  if (Array.isArray(raw.assets)) {
    for (const row of raw.assets) {
      push(assetFromRow(row, str(row?.type) || 'image', str(row?.role) || undefined, metaByPath))
    }
  }

  const image = str(raw.image)
  if (image) {
    // Legacy top-level image: default role first_frame for video-ish, else reference.
    const defaultRole = str(raw.capability) === 'video' || str(raw.seam) === 'videoGenerate'
      ? 'first_frame'
      : 'reference'
    push(
      assetFromRow(
        { pathOrUrl: image, type: 'image', role: defaultRole, ...(raw.imageMeta || {}) },
        'image',
        defaultRole,
        metaByPath,
      ),
    )
  }

  // #566 top-level image_tail / last frame wire
  const imageTail = str(raw.image_tail || raw.imageTail || raw.last_frame || raw.lastFrame)
  if (imageTail) {
    push(
      assetFromRow(
        { pathOrUrl: imageTail, type: 'image', role: 'last_frame', ...(raw.imageTailMeta || {}) },
        'image',
        'last_frame',
        metaByPath,
      ),
    )
  }

  if (raw.audioTrack && typeof raw.audioTrack === 'object') {
    push(assetFromRow(raw.audioTrack, 'audio', str(raw.audioTrack.role) || 'audio_track', metaByPath))
  }

  const audio = str(raw.audio)
  if (audio) {
    // STT source vs generic reference audio — capability/seam decides default role.
    const sttLike =
      str(raw.capability) === 'stt' ||
      str(raw.seam) === 'speechToText' ||
      str(raw.operation) === 'speech_to_text' ||
      str(raw.operation) === 'stt' ||
      str(raw.operation) === 'asr'
    push(
      assetFromRow(
        { pathOrUrl: audio, type: 'audio', role: sttLike ? 'source' : 'reference', ...(raw.audioMeta || {}) },
        'audio',
        sttLike ? 'source' : 'reference',
        metaByPath,
      ),
    )
  }

  const video = str(raw.video)
  if (video) {
    push(
      assetFromRow(
        { pathOrUrl: video, type: 'video', role: 'source', ...(raw.videoMeta || {}) },
        'video',
        'source',
        metaByPath,
      ),
    )
  }

  const speech = str(raw.speech)
  // speech is textual talking-head script, not a media asset — keep in extras.

  const operation = str(raw.operation) || undefined
  const model = str(raw.model) || undefined
  const seam = str(raw.seam) || undefined
  const capability = str(raw.capability) || undefined
  const prompt = typeof raw.prompt === 'string' ? raw.prompt : ''

  /** @type {Record<string, unknown>} */
  const extras = {}
  for (const key of [
    'duration',
    'voice',
    'style',
    'instrumental',
    'speed',
    'aspectRatio',
    'resolution',
    'language',
    'system',
    'maxTokens',
    'speech',
  ]) {
    if (raw[key] !== undefined && raw[key] !== null && raw[key] !== '') {
      extras[key] = raw[key]
    }
  }
  if (speech) extras.speech = speech

  // Flat metadata bag (non-asset) for audio voice etc.
  if (raw.metadata && typeof raw.metadata === 'object' && !Array.isArray(raw.metadata)) {
    const md = /** @type {Record<string, unknown>} */ (raw.metadata)
    // Only copy scalar extras; nested path maps already handled as assetMeta.
    for (const [k, v] of Object.entries(md)) {
      if (v != null && (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean')) {
        if (extras[k] === undefined) extras[k] = v
      }
    }
  }

  return {
    prompt,
    assets,
    ...(operation ? { operation } : {}),
    ...(model ? { model } : {}),
    ...(seam ? { seam } : {}),
    ...(capability ? { capability } : {}),
    extras,
    legacyOperationMissing: !operation,
  }
}
