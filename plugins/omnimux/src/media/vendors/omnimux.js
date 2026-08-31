/** OmniMux catalog defaults and response envelopes. Not a second HTTP client. */

export const TASK_PATH = Object.freeze({
  video: 'video/generations',
  image: 'images/generations',
  audio: 'audio/generations',
})

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
 * First usable media URL from an OmniMux / OpenAI-compat envelope.
 * @param {unknown} raw
 * @returns {string | undefined}
 */
export function pickMediaUrl(raw) {
  if (!raw || typeof raw !== 'object') return undefined
  const row = /** @type {Record<string, unknown>} */ (raw)
  const data = row.data && typeof row.data === 'object' && !Array.isArray(row.data)
    ? /** @type {Record<string, unknown>} */ (row.data)
    : undefined
  const dataRows = Array.isArray(row.data) ? row.data : undefined
  const firstData = dataRows && dataRows[0] && typeof dataRows[0] === 'object'
    ? /** @type {Record<string, unknown>} */ (dataRows[0])
    : undefined
  const direct = row.videoUrl ?? row.video_url ?? row.imageUrl ?? row.image_url
    ?? row.audioUrl ?? row.audio_url
    ?? row.url ?? row.result_url
    ?? data?.videoUrl ?? data?.video_url ?? data?.imageUrl ?? data?.image_url
    ?? data?.audioUrl ?? data?.audio_url
    ?? data?.url ?? data?.result_url
    ?? firstData?.url
  if (typeof direct === 'string' && direct) return direct
  const b64 = firstData?.b64_json ?? row.b64_json ?? data?.b64_json
  if (typeof b64 === 'string' && b64.trim()) return `data:image/png;base64,${b64.trim()}`
  const list = row.videoUrls ?? row.video_urls ?? row.imageUrls ?? row.image_urls
    ?? row.audioUrls ?? row.audio_urls
    ?? row.images ?? data?.videoUrls ?? data?.video_urls ?? data?.imageUrls ?? data?.images
    ?? data?.audioUrls ?? data?.audio_urls
  if (Array.isArray(list) && typeof list[0] === 'string') return list[0]
  const outputs = row.outputs
  if (Array.isArray(outputs)) {
    for (const item of outputs) {
      if (item && typeof item === 'object' && typeof item.url === 'string') return item.url
    }
  }
  return undefined
}

/** @deprecated use pickMediaUrl */
export const pickVideoUrl = pickMediaUrl

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
 * Map a capability request onto the OmniMux OpenAI-compat body.
 * @param {string} capability
 * @param {{
 *   prompt: string,
 *   duration?: number,
 *   image?: string,
 *   speech?: string,
 *   audio?: string,
 *   references?: Array<{ role?: string, type: string, pathOrUrl: string, [key: string]: unknown }>,
 *   audioTrack?: { role?: string, type: string, pathOrUrl: string, [key: string]: unknown },
 *   voice?: string,
 *   style?: string,
 *   instrumental?: boolean,
 *   speed?: number
 * }} request
 */
export function mapOmnimuxInput(_capability, request) {
  const input = { prompt: request.prompt }
  if (request.duration) input.duration = request.duration
  if (request.image) input.image = request.image
  if (Array.isArray(request.references) && request.references.length > 0) {
    input.references = request.references
    const imageRefs = request.references
      .filter((r) => r && r.type === 'image' && r.pathOrUrl)
      .map((r) => r.pathOrUrl)
    if (imageRefs.length > 0) {
      input.images = imageRefs
      if (!input.image) {
        input.image = imageRefs[0]
      }
    }
  }
  if (request.audioTrack) {
    input.audioTrack = request.audioTrack
  }
  /** @type {Record<string, unknown>} */
  const metadata = {}
  if (typeof request.speech === 'string' && request.speech.trim()) metadata.speech = request.speech.trim()
  if (typeof request.audio === 'string' && request.audio.trim()) metadata.audio = request.audio.trim()
  if (typeof request.voice === 'string' && request.voice.trim()) metadata.voice = request.voice.trim()
  if (typeof request.style === 'string' && request.style.trim()) metadata.style = request.style.trim()
  if (request.instrumental !== undefined) metadata.instrumental = Boolean(request.instrumental)
  if (request.speed !== undefined) metadata.speed = request.speed
  if (Object.keys(metadata).length > 0) input.metadata = metadata
  return input
}
