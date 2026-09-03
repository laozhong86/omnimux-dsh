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
 *   speed?: number,
 *   aspectRatio?: string,
 *   resolution?: string
 * }} request
 */
export function mapOmnimuxInput(capability, request) {
  const input = { prompt: request.prompt }
  if (request.duration) input.duration = request.duration

  if (capability === 'video') {
    // 视频请求：画幅/分辨率透传；上游网关对 video 结构体启用了 DisallowUnknownFields，
    // 只允许 image / reference_images 等已知字段，绝不能注入 images/references/audioTrack（#429）。
    if (request.aspectRatio) input.aspect_ratio = request.aspectRatio
    if (request.resolution) input.resolution = request.resolution

    const references = Array.isArray(request.references) ? request.references : []
    const firstFrameRef = references.find((r) => r && r.role === 'first_frame' && r.pathOrUrl)
    const otherImageRefs = references
      .filter((r) => r && r.type === 'image' && r.role !== 'first_frame' && r.pathOrUrl)
      .map((r) => r.pathOrUrl)

    if (firstFrameRef) {
      // 首帧模式：单张图，用 image 字段
      input.image = firstFrameRef.pathOrUrl
    } else if (otherImageRefs.length > 0) {
      // 参考图模式：用 reference_images 数组（每项 { url }）
      input.reference_images = otherImageRefs.map((url) => ({ url }))
    } else if (request.image) {
      input.image = request.image
    }
    // 严禁向 video 注入 input.images、input.references、input.audioTrack！
  } else {
    // 非 video（image/audio）保持现存的向后兼容逻辑不变
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
