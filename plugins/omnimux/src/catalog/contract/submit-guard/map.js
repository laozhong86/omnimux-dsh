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
      'image',
      'references',
      'image_tail',
      'duration',
      'aspectRatio',
      'resolution',
    ]),
    vendorFields: Object.freeze([
      'prompt',
      'image',
      'image_tail',
      'reference_images',
      'duration',
      'aspect_ratio',
      'resolution',
    ]),
    // Hard deny — #429 / #432
    forbiddenVendorFields: Object.freeze([
      'images',
      'references',
      'audioTrack',
      'metadata',
      'speech',
      'audio',
      'voice',
      'style',
    ]),
    unknownFieldPolicy: 'reject',
    /**
     * Operation-specific exclusivity.
     * first_frame → only image
     * video_multi_ref → only reference_images
     * first_last_frame → image + image_tail
     * end_frame → image_tail only
     * text_to_video → prompt (+ optional duration/aspect)
     */
    operationVendorShapes: Object.freeze({
      text_to_video: Object.freeze({ allow: Object.freeze(['prompt', 'duration', 'aspect_ratio', 'resolution']) }),
      first_frame: Object.freeze({ allow: Object.freeze(['prompt', 'image', 'duration', 'aspect_ratio', 'resolution']), require: Object.freeze(['image']) }),
      first_last_frame: Object.freeze({
        allow: Object.freeze(['prompt', 'image', 'image_tail', 'duration', 'aspect_ratio', 'resolution']),
        require: Object.freeze(['image', 'image_tail']),
      }),
      end_frame: Object.freeze({
        allow: Object.freeze(['prompt', 'image_tail', 'duration', 'aspect_ratio', 'resolution']),
        require: Object.freeze(['image_tail']),
      }),
      video_multi_ref: Object.freeze({
        allow: Object.freeze(['prompt', 'reference_images', 'duration', 'aspect_ratio', 'resolution']),
        require: Object.freeze([]),
      }),
      video_edit: Object.freeze({
        allow: Object.freeze(['prompt', 'image', 'reference_images', 'duration', 'aspect_ratio', 'resolution']),
      }),
    }),
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

  for (const b of args.bindings ?? []) {
    const role = b.role || b.asset?.role || ''
    const url = b.pathOrUrl
    if (!url) continue
    if (role === 'first_frame') firstFrames.push(url)
    else if (role === 'last_frame') lastFrames.push(url)
    else if (role === 'audio_track') audioTracks.push(url)
    else if (role === 'source' && b.type === 'audio') sources.push(url)
    else if (role === 'source' && b.type === 'video') genericVideo.push(url)
    else if (role === 'reference' || role === 'style' || !role) {
      if (b.type === 'image') {
        references.push(url)
        genericImages.push(url)
      } else if (b.type === 'audio') genericAudio.push(url)
      else if (b.type === 'video') genericVideo.push(url)
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
    // Mutual exclusion by operation
    if (opId === 'end_frame') {
      const tail = lastFrames[0]
      if (tail) {
        vendor.image_tail = tail
        logical.image_tail = tail
      }
    } else if (opId === 'first_frame' || (firstFrames.length && !lastFrames.length && opId !== 'video_multi_ref' && opId !== 'first_last_frame')) {
      const img = firstFrames[0] || genericImages[0]
      if (img) {
        vendor.image = img
        logical.image = img
      }
    } else if (opId === 'first_last_frame' || (firstFrames.length && lastFrames.length)) {
      const img = firstFrames[0] || genericImages[0]
      const tail = lastFrames[0]
      if (img) {
        vendor.image = img
        logical.image = img
      }
      if (tail) {
        vendor.image_tail = tail
        logical.image_tail = tail
      }
    } else if (opId === 'video_multi_ref' || (references.length > 0 && !firstFrames.length && !lastFrames.length)) {
      const urls = references.length ? references : genericImages
      if (urls.length) {
        vendor.reference_images = urls.map((url) => ({ url }))
        logical.references = urls.map((pathOrUrl) => ({ type: 'image', role: 'reference', pathOrUrl }))
      }
    } else if (genericImages.length === 1 && opId !== 'text_to_video') {
      vendor.image = genericImages[0]
      logical.image = genericImages[0]
    }
    // Never attach audioTrack on plain videoGenerate
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

  // Extras → vendor (filtered)
  if (typeof extras.duration === 'number' && extras.duration > 0) {
    vendor.duration = extras.duration
    logical.duration = extras.duration
  }
  if (typeof extras.aspectRatio === 'string' && extras.aspectRatio) {
    if (profileId === 'videoGenerate' || profileId === 'videoDigitalHuman') {
      vendor.aspect_ratio = extras.aspectRatio
    }
    logical.aspectRatio = extras.aspectRatio
  }
  if (typeof extras.resolution === 'string' && extras.resolution) {
    if (profileId === 'videoGenerate' || profileId === 'videoDigitalHuman') {
      vendor.resolution = extras.resolution
    }
    logical.resolution = extras.resolution
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

  // Video exclusivity: image vs reference_images must not coexist
  if ('image' in vendor && 'reference_images' in vendor) {
    return {
      ok: false,
      code: GUARD_CODES.VENDOR_FIELD_FORBIDDEN,
      message: 'image and reference_images must not coexist',
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
