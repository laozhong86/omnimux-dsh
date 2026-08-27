/**
 * OpenReel Adapter for OmniMux DSH.
 * Bridges Canvas / Host payloads (OpenClipEditorPayload) into OpenReel schema and back.
 */

import { DEFAULT_CANVAS_CONFIG, DEFAULT_TEXT_STYLE, structuredCloneSafe } from '../engine/openreel/core/types.js'

/**
 * Convert an OpenClipEditorPayload or partial schema into a normalized TimelineSchema.
 * @param {object} payload
 * @returns {object} normalized TimelineSchema
 */
export function adaptPayloadToOpenReelSchema(payload) {
  if (payload?.draftSchema && Array.isArray(payload.draftSchema.tracks)) {
    return structuredCloneSafe(payload.draftSchema)
  }

  const projectId = payload?.projectId || `clip_${Date.now()}`
  const canvasConfig = {
    ...DEFAULT_CANVAS_CONFIG,
    ...(payload?.canvasConfig || {}),
  }

  const tracks = [
    {
      id: 'track_video_main',
      name: '主视频轨',
      type: 'video',
      order: 0,
      isMuted: false,
      isLocked: false,
      isVisible: true,
      clips: [],
    },
    {
      id: 'track_text_main',
      name: '字幕轨',
      type: 'text',
      order: 1,
      isMuted: false,
      isLocked: false,
      isVisible: true,
      clips: [],
    },
    {
      id: 'track_audio_main',
      name: '音频轨',
      type: 'audio',
      order: 2,
      isMuted: false,
      isLocked: false,
      isVisible: true,
      clips: [],
    },
  ]

  const mediaList = []
  const inputs = payload?.upstreamInputs || {}
  let videoCursorMs = 0
  let clipCounter = 1

  // 1. Process upstream videos
  for (const item of inputs.videos || []) {
    const mediaId = `media_v_${clipCounter}`
    const durationMs = Math.max(500, item.durationMs || 4000)
    const clipPath = item.path || item.url || ''
    mediaList.push({ id: mediaId, name: item.name || `视频 ${clipCounter}`, type: 'video', durationMs, path: clipPath })

    tracks[0].clips.push({
      id: `clip_v_${clipCounter}`,
      trackId: 'track_video_main',
      name: item.name || `片段 ${clipCounter}`,
      mediaType: 'video',
      startTimeMs: videoCursorMs,
      durationMs,
      sourceUrl: clipPath,
      sourceInMs: 0,
      sourceOutMs: durationMs,
      speed: 1,
      volume: 1,
      transition: { type: 'none', durationMs: 0 },
    })
    videoCursorMs += durationMs
    clipCounter += 1
  }

  // 2. Process upstream images (as video-track clips)
  for (const item of inputs.images || []) {
    const mediaId = `media_img_${clipCounter}`
    const durationMs = Math.max(500, item.displayDurationMs || 3000)
    const clipPath = item.path || item.url || ''
    mediaList.push({ id: mediaId, name: item.name || `图片 ${clipCounter}`, type: 'image', durationMs, path: clipPath })

    tracks[0].clips.push({
      id: `clip_img_${clipCounter}`,
      trackId: 'track_video_main',
      name: item.name || `图片 ${clipCounter}`,
      mediaType: 'image',
      startTimeMs: videoCursorMs,
      durationMs,
      sourceUrl: clipPath,
      sourceInMs: 0,
      sourceOutMs: durationMs,
      speed: 1,
      volume: 1,
      transition: { type: 'none', durationMs: 0 },
    })
    videoCursorMs += durationMs
    clipCounter += 1
  }

  // 3. Process upstream audios
  let audioCursorMs = 0
  for (const item of inputs.audios || []) {
    const mediaId = `media_a_${clipCounter}`
    const durationMs = Math.max(500, item.durationMs || 5000)
    const clipPath = item.path || item.url || ''
    mediaList.push({ id: mediaId, name: item.name || `音频 ${clipCounter}`, type: 'audio', durationMs, path: clipPath })

    tracks[2].clips.push({
      id: `clip_a_${clipCounter}`,
      trackId: 'track_audio_main',
      name: item.name || `音频 ${clipCounter}`,
      mediaType: 'audio',
      startTimeMs: audioCursorMs,
      durationMs,
      sourceUrl: clipPath,
      sourceInMs: 0,
      sourceOutMs: durationMs,
      speed: 1,
      volume: 1,
    })
    audioCursorMs += durationMs
    clipCounter += 1
  }

  // 4. Process upstream captions
  for (const item of inputs.captions || []) {
    const durationMs = Math.max(200, item.durationMs || 3000)
    tracks[1].clips.push({
      id: `clip_txt_${clipCounter}`,
      trackId: 'track_text_main',
      name: '字幕',
      mediaType: 'text',
      startTimeMs: item.startTimeMs || 0,
      durationMs,
      sourceUrl: '',
      sourceInMs: 0,
      sourceOutMs: durationMs,
      speed: 1,
      volume: 1,
      textStyle: {
        ...DEFAULT_TEXT_STYLE,
        content: item.text || '字幕',
      },
    })
    clipCounter += 1
  }

  canvasConfig.durationMs = Math.max(videoCursorMs, audioCursorMs, 3000)

  return {
    version: '1.0',
    projectId,
    canvasConfig,
    tracks,
    media: mediaList,
  }
}
