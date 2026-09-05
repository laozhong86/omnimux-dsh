/**
 * Profile-driven vendor payload mapper.
 * Fail closed: unknown / forbidden fields → typed rejection (no silent pollution).
 */

import { GUARD_CODES } from './codes.js'

/**
 * Default payload contracts per profile id. Profiles JSON may override via
 * `logicalFields` / `vendorFields` / `vendorFieldMap`.
 *
 * vendorFieldMap: logical binding role|slot → vendor body key strategy.
 */
export const DEFAULT_PROFILE_PAYLOADS = Object.freeze({
  textComplete: Object.freeze({
    logicalFields: Object.freeze(['prompt', 'system', 'maxTokens', 'image', 'video', 'references']),
    vendorFields: Object.freeze(['prompt', 'system', 'maxTokens', 'image', 'video', 'content']),
    unknownFieldPolicy: 'reject',
  }),
  imageGenerate: Object.freeze({
    logicalFields: Object.freeze([
      'prompt',
      'image',
      'references',
      'duration',
      'aspectRatio',
      'resolution',
    ]),
    vendorFields: Object.freeze([
      'prompt',
      'image',
      'images',
      'references',
      'duration',
      'metadata',
    ]),
    unknownFieldPolicy: 'reject',
  }),
  videoGenerate: Object.freeze({
    logicalFields: Object.freeze([
      'prompt',
      'references',
      'duration',
      'aspectRatio',
      'resolution',
      'sound',
      'seed',
      'watermark',
      'outputFormat',
      'referenceTaskType',
      'generationType',
      'returnLastFrame',
      'webSearch',
      'nsfwCheck',
      'fileUrl',
      'linkUrl',
    ]),
    vendorFields: Object.freeze([
      'operation',
      'prompt',
      'image_with_roles',
      'image_urls',
      'video_urls',
      'audio_urls',
      'file_url',
      'link_url',
      'duration',
      'size',
      'aspect_ratio',
      'resolution',
      'generate_audio',
      'audio',
      'seed',
      'watermark',
      'output_format',
      'omni_reference_task_type',
      'generation_type',
      'return_last_frame',
      'tools',
      'nsfw_check',
    ]),
    forbiddenVendorFields: Object.freeze([
      'images',
      'references',
      'audioTrack',
      'metadata',
      'speech',
      'voice',
      'style',
      'image',
      'image_tail',
      'reference_images',
    ]),
    unknownFieldPolicy: 'reject',
  }),
  audioGenerate: Object.freeze({
    logicalFields: Object.freeze([
      'prompt',
      'voice',
      'style',
      'instrumental',
      'speed',
      'speech',
      'audio',
      'references',
      'audioTrack',
      'duration',
    ]),
    vendorFields: Object.freeze(['prompt', 'duration', 'image', 'images', 'references', 'audioTrack', 'metadata']),
    unknownFieldPolicy: 'reject',
  }),
  speechToText: Object.freeze({
    logicalFields: Object.freeze(['audio', 'language', 'model']),
    vendorFields: Object.freeze(['file', 'model', 'language', 'response_format']),
    unknownFieldPolicy: 'reject',
  }),
  videoDigitalHuman: Object.freeze({
    logicalFields: Object.freeze(['prompt', 'image', 'audioTrack', 'references', 'duration', 'aspectRatio', 'resolution']),
    vendorFields: Object.freeze(['prompt', 'image', 'audioTrack', 'duration', 'aspect_ratio', 'resolution']),
    forbiddenVendorFields: Object.freeze(['images', 'references', 'metadata', 'reference_images', 'image_tail']),
    unknownFieldPolicy: 'reject',
    operationVendorShapes: Object.freeze({
      digital_human: Object.freeze({
        allow: Object.freeze(['prompt', 'image', 'audioTrack', 'duration', 'aspect_ratio', 'resolution']),
        require: Object.freeze(['image', 'audioTrack']),
      }),
    }),
  }),
})

/**
 * @param {object} profile
 * @returns {object}
 */
export function resolveProfilePayloadContract(profile) {
  const defaults = DEFAULT_PROFILE_PAYLOADS[profile?.id] ?? {
    logicalFields: [],
    vendorFields: [],
    unknownFieldPolicy: 'reject',
  }
  return {
    logicalFields: Array.isArray(profile?.logicalFields) ? profile.logicalFields : defaults.logicalFields ?? [],
    vendorFields: Array.isArray(profile?.vendorFields) ? profile.vendorFields : defaults.vendorFields ?? [],
    forbiddenVendorFields: Array.isArray(profile?.forbiddenVendorFields)
      ? profile.forbiddenVendorFields
      : defaults.forbiddenVendorFields ?? [],
    unknownFieldPolicy: profile?.unknownFieldPolicy ?? defaults.unknownFieldPolicy ?? 'reject',
    operationVendorShapes: profile?.operationVendorShapes ?? defaults.operationVendorShapes ?? {},
  }
}

/**
 * Build vendor body from validated slot bindings + extras, constrained by profile.
 *
 * @param {{
 *   operation: object,
 *   profile: object,
 *   modelId: string,
 *   prompt: string,
 *   bindings: Array<{ slot: string, role?: string, type: string, pathOrUrl: string, asset: object }>,
 *   bySlot: Map<string, object[]>,
 *   extras?: Record<string, unknown>,
 * }} args
 * @returns {{ ok: true, vendorPayload: Record<string, unknown>, logicalPayload: Record<string, unknown> } | { ok: false, code: string, message: string, [k: string]: unknown }}
 */
export function mapValidatedPlanToVendor(args) {
  const op = args.operation
  const profile = args.profile
  const contract = resolveProfilePayloadContract(profile)
  const opId = op.id
  const shape = contract.operationVendorShapes?.[opId] ?? null

  /** @type {Record<string, unknown>} */
  const vendor = {}
  /** @type {Record<string, unknown>} */
  const logical = {}

  const prompt = typeof args.prompt === 'string' ? args.prompt : ''
  if (prompt) {
    vendor.prompt = prompt
    logical.prompt = prompt
  }

  const extras = args.extras && typeof args.extras === 'object' ? args.extras : {}

  // Collect role-indexed urls from bindings
  /** @type {string[]} */
  const firstFrames = []
  /** @type {string[]} */
  const lastFrames = []
  /** @type {string[]} */
  const references = []
  /** @type {string[]} */
  const audioTracks = []
  /** @type {string[]} */
  const sources = []
  /** @type {string[]} */
  const genericImages = []
  /** @type {string[]} */
  const genericAudio = []
  /** @type {string[]} */
  const genericVideo = []
  /** @type {string[]} */
  const sourceVideos = []
  /** @type {string[]} */
  const referenceVideos = []
  /** @type {string[]} */
  const referenceAudios = []
  /** @type {string[]} */
  const documentUrls = []
  /** @type {string[]} */
  const webpageUrls = []

  for (const b of args.bindings ?? []) {
    const role = b.role || b.asset?.role || ''
    const url = b.pathOrUrl
    if (!url) continue
    if (role === 'first_frame') firstFrames.push(url)
    else if (role === 'last_frame') lastFrames.push(url)
    else if (role === 'audio_track') audioTracks.push(url)
    else if (role === 'source' && b.type === 'audio') sources.push(url)
    else if (role === 'source' && b.type === 'video') {
      sourceVideos.push(url)
      genericVideo.push(url)
    }
    else if (role === 'document' || b.slot === 'file_url') documentUrls.push(url)
    else if (role === 'webpage' || b.slot === 'link_url') webpageUrls.push(url)
    else if (role === 'reference' || role === 'style' || !role) {
      if (b.type === 'image') {
        references.push(url)
        genericImages.push(url)
      } else if (b.type === 'audio') {
        genericAudio.push(url)
        referenceAudios.push(url)
      } else if (b.type === 'video') {
        genericVideo.push(url)
        referenceVideos.push(url)
      }
    } else if (b.type === 'image') {
      genericImages.push(url)
    } else if (b.type === 'audio') {
      genericAudio.push(url)
    }
  }

  // Also scan bySlot for avatar_image / audio_track named slots
  if (args.bySlot instanceof Map) {
    for (const [slotName, list] of args.bySlot.entries()) {
      for (const asset of list ?? []) {
        const url = asset.pathOrUrl
        if (!url) continue
        if (slotName.includes('audio') && asset.type === 'audio' && !audioTracks.includes(url) && !sources.includes(url)) {
          if (slotName.includes('track') || asset.role === 'audio_track') audioTracks.push(url)
          else if (asset.role === 'source') sources.push(url)
        }
        if ((slotName.includes('avatar') || slotName.includes('frame') || slotName.includes('image')) && asset.type === 'image') {
          if (asset.role === 'first_frame' && !firstFrames.includes(url)) firstFrames.push(url)
          else if (asset.role === 'last_frame' && !lastFrames.includes(url)) lastFrames.push(url)
          else if (!firstFrames.includes(url) && !lastFrames.includes(url) && !references.includes(url) && !genericImages.includes(url)) {
            genericImages.push(url)
          }
        }
      }
    }
  }

  const profileId = profile.id

  if (profileId === 'videoGenerate' || profile.seam === 'videoGenerate' && profileId !== 'videoDigitalHuman') {
    // The Hub sends the canonical operation to the cloud adapter. It is
    // stripped before APIMart and is never forwarded as an upstream field.
    vendor.operation = opId
    logical.operation = opId

    if (opId === 'first_frame' || opId === 'first_last_frame' || opId === 'end_frame') {
      const rows = []
      if (opId !== 'end_frame' && firstFrames[0]) rows.push({ url: firstFrames[0], role: 'first_frame' })
      if ((opId === 'end_frame' || opId === 'first_last_frame') && lastFrames[0]) {
        rows.push({ url: lastFrames[0], role: 'last_frame' })
      }
      if (rows.length) vendor.image_with_roles = rows
    } else if (opId === 'video_multi_ref' || opId === 'video_edit') {
      const images = references.length ? references : genericImages
      const videos = opId === 'video_edit'
        ? [...sourceVideos, ...referenceVideos]
        : referenceVideos
      if (images.length) vendor.image_urls = [...images]
      if (videos.length) vendor.video_urls = [...videos]
      if (referenceAudios.length) vendor.audio_urls = [...referenceAudios]
    } else if (opId === 'video_extend') {
      const images = references.length ? references : genericImages
      if (images.length) vendor.image_urls = [...images]
      if (sourceVideos.length) vendor.video_urls = [...sourceVideos]
      if (referenceAudios.length) vendor.audio_urls = [...referenceAudios]
    } else if (opId === 'document_to_video') {
      if (documentUrls[0]) vendor.file_url = documentUrls[0]
    } else if (opId === 'webpage_to_video') {
      if (webpageUrls[0]) vendor.link_url = webpageUrls[0]
    }

    if ((args.bindings ?? []).length > 0) {
      logical.references = (args.bindings ?? []).map((binding) => ({
        type: binding.type,
        role: binding.role || binding.asset?.role,
        slot: binding.slot,
        pathOrUrl: binding.pathOrUrl,
      }))
    }
  } else if (profileId === 'videoDigitalHuman') {
    const img = firstFrames[0] || genericImages[0] || references[0]
    if (img) {
      vendor.image = img
      logical.image = img
    }
    const audioUrl = audioTracks[0] || genericAudio[0]
    if (audioUrl) {
      vendor.audioTrack = { role: 'audio_track', type: 'audio', pathOrUrl: audioUrl }
      logical.audioTrack = vendor.audioTrack
    }
  } else if (profileId === 'imageGenerate') {
    if (genericImages.length || references.length || firstFrames.length) {
      const urls = [...firstFrames, ...references, ...genericImages].filter((u, i, a) => a.indexOf(u) === i)
      if (urls.length) {
        vendor.image = urls[0]
        logical.image = urls[0]
        if (urls.length > 1) {
          vendor.images = urls
          vendor.references = urls.map((pathOrUrl) => ({ type: 'image', role: 'reference', pathOrUrl }))
          logical.references = vendor.references
        }
      }
    }
  } else if (profileId === 'audioGenerate') {
    // metadata bag for voice/style/…
  } else if (profileId === 'speechToText') {
    const audioUrl = sources[0] || audioTracks[0] || genericAudio[0]
    if (audioUrl) {
      logical.audio = audioUrl
      vendor.file = audioUrl // STT runtime loads bytes separately; logical keeps path
    }
  } else if (profileId === 'textComplete') {
    if (genericImages.length || references.length || firstFrames.length) {
      logical.image = (firstFrames[0] || references[0] || genericImages[0])
    }
    if (genericVideo.length) logical.video = genericVideo[0]
  }

  // Extras → vendor (filtered). Values have already passed the effective
  // model+operation parameter contract in guard.js.
  if (typeof extras.duration === 'number' && (extras.duration > 0 || extras.duration === -1)) {
    vendor.duration = extras.duration
    logical.duration = extras.duration
  }
  if (typeof extras.aspectRatio === 'string' && extras.aspectRatio) {
    if (profileId === 'videoGenerate' || profileId === 'videoDigitalHuman') {
      const useAspectRatio = args.modelId === 'minimax-h3' || args.modelId === 'grok-imagine-video-1-5'
      vendor[useAspectRatio ? 'aspect_ratio' : 'size'] = extras.aspectRatio
    }
    logical.aspectRatio = extras.aspectRatio
  }
  if (typeof extras.resolution === 'string' && extras.resolution) {
    if (profileId === 'videoGenerate' || profileId === 'videoDigitalHuman') {
      vendor.resolution = extras.resolution
    }
    logical.resolution = extras.resolution
  }

  if (profileId === 'videoGenerate') {
    if (typeof extras.sound === 'boolean') {
      vendor[args.modelId === 'wan-3.0' ? 'audio' : 'generate_audio'] = extras.sound
      logical.sound = extras.sound
    }
    if (typeof extras.seed === 'number' && Number.isInteger(extras.seed)) {
      vendor.seed = extras.seed
      logical.seed = extras.seed
    }
    if (typeof extras.watermark === 'boolean') {
      vendor.watermark = extras.watermark
      logical.watermark = extras.watermark
    }
    if (typeof extras.outputFormat === 'string' && extras.outputFormat) {
      vendor.output_format = extras.outputFormat
      logical.outputFormat = extras.outputFormat
    }
    if (typeof extras.referenceTaskType === 'string' && extras.referenceTaskType) {
      vendor.omni_reference_task_type = extras.referenceTaskType
      logical.referenceTaskType = extras.referenceTaskType
    }
    if (typeof extras.generationType === 'string' && extras.generationType) {
      vendor.generation_type = extras.generationType
      logical.generationType = extras.generationType
    }
    if (typeof extras.returnLastFrame === 'boolean') {
      vendor.return_last_frame = extras.returnLastFrame
      logical.returnLastFrame = extras.returnLastFrame
    }
    if (extras.webSearch === true) {
      vendor.tools = [{ type: 'web_search' }]
      logical.webSearch = true
    }
    if (typeof extras.nsfwCheck === 'boolean') {
      vendor.nsfw_check = extras.nsfwCheck
      logical.nsfwCheck = extras.nsfwCheck
    }
  }

  if (profileId === 'audioGenerate' || profileId === 'imageGenerate') {
    /** @type {Record<string, unknown>} */
    const metadata = {}
    for (const key of ['speech', 'audio', 'voice', 'style', 'instrumental', 'speed']) {
      if (extras[key] !== undefined && extras[key] !== null && extras[key] !== '') {
        metadata[key] = extras[key]
        logical[key] = extras[key]
      }
    }
    // reference audio string
    if (genericAudio[0] && metadata.audio === undefined) metadata.audio = genericAudio[0]
    if (Object.keys(metadata).length) vendor.metadata = metadata
  }

  if (profileId === 'textComplete') {
    if (typeof extras.system === 'string' && extras.system) {
      vendor.system = extras.system
      logical.system = extras.system
    }
    if (typeof extras.maxTokens === 'number') {
      vendor.maxTokens = extras.maxTokens
      logical.maxTokens = extras.maxTokens
    }
  }

  if (profileId === 'speechToText' && typeof extras.language === 'string' && extras.language) {
    vendor.language = extras.language
    logical.language = extras.language
  }

  // Enforce operation shape allow-list
  if (shape && Array.isArray(shape.allow)) {
    const allow = new Set(shape.allow)
    for (const key of Object.keys(vendor)) {
      if (!allow.has(key)) {
        if (contract.unknownFieldPolicy === 'drop') {
          delete vendor[key]
        } else {
          return {
            ok: false,
            code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
            message: `vendor field "${key}" not allowed for operation ${opId} on profile ${profileId}`,
            field: key,
            operationId: opId,
            profileId,
          }
        }
      }
    }
    for (const req of shape.require ?? []) {
      if (vendor[req] === undefined || vendor[req] === null || vendor[req] === '') {
        return {
          ok: false,
          code: GUARD_CODES.MAPPER_INCOMPLETE,
          message: `vendor payload missing required field "${req}" for ${opId}`,
          field: req,
          operationId: opId,
          profileId,
        }
      }
    }
  }

  // Forbidden fields hard check
  for (const bad of contract.forbiddenVendorFields ?? []) {
    if (bad in vendor) {
      return {
        ok: false,
        code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
        message: `vendor field "${bad}" is forbidden on profile ${profileId}`,
        field: bad,
        profileId,
      }
    }
  }

  // Global vendor allow list when present
  if (Array.isArray(contract.vendorFields) && contract.vendorFields.length > 0) {
    const allow = new Set(contract.vendorFields)
    for (const key of Object.keys(vendor)) {
      if (!allow.has(key)) {
        if (contract.unknownFieldPolicy === 'drop') {
          delete vendor[key]
        } else {
          return {
            ok: false,
            code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
            message: `vendor field "${key}" not in profile ${profileId} vendorFields`,
            field: key,
            profileId,
          }
        }
      }
    }
  }

  const hasFrameFamily = Array.isArray(vendor.image_with_roles)
    && vendor.image_with_roles.some((row) => row?.role === 'first_frame' || row?.role === 'last_frame')
  const hasReferenceFamily = ['image_urls', 'video_urls', 'audio_urls', 'file_url', 'link_url']
    .some((field) => vendor[field] !== undefined)
  if (hasFrameFamily && hasReferenceFamily) {
    return {
      ok: false,
      code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
      message: 'frame inputs and reference inputs must not coexist',
      profileId,
    }
  }
  if (vendor.file_url !== undefined && vendor.link_url !== undefined) {
    return {
      ok: false,
      code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
      message: 'file_url and link_url must not coexist',
      profileId,
    }
  }

  return { ok: true, vendorPayload: vendor, logicalPayload: logical }
}

/**
 * Strip a raw vendor-ish object down to profile-allowed keys (fail closed).
 * @param {Record<string, unknown>} body
 * @param {object} profile
 * @param {string} [operationId]
 */
export function assertVendorBodyAllowed(body, profile, operationId) {
  const contract = resolveProfilePayloadContract(profile)
  const shape = operationId ? contract.operationVendorShapes?.[operationId] : null
  const allow = new Set([
    ...(contract.vendorFields ?? []),
    ...(shape?.allow ?? []),
  ])
  if (allow.size === 0) return { ok: true, body }
  /** @type {Record<string, unknown>} */
  const out = {}
  for (const [k, v] of Object.entries(body ?? {})) {
    if ((contract.forbiddenVendorFields ?? []).includes(k)) {
      return {
        ok: false,
        code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
        message: `forbidden vendor field "${k}"`,
        field: k,
      }
    }
    if (!allow.has(k)) {
      if (contract.unknownFieldPolicy === 'drop') continue
      return {
        ok: false,
        code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
        message: `unknown vendor field "${k}"`,
        field: k,
      }
    }
    out[k] = v
  }
  return { ok: true, body: out }
}
