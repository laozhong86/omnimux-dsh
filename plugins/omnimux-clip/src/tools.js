import { writeFileSync } from 'node:fs'
import { ClipDomainError } from './errors.js'
import { exportJobPath, exportMp4Path, snapshotPngPath } from './paths.js'
import { applyOperations } from './timeline/ops.js'
import { diagnoseTimeline } from './timeline/diagnostics.js'
import { projectView } from './timeline/views.js'
import { optionalSecToMs, secToMs } from './timeline/time.js'

const jsonOut = {
  schema: { type: 'object', additionalProperties: true },
  render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
}

/**
 * Compile a flat field table into a JSON Schema object. Raw `register`
 * does not run defineTool, so the wire schema must already be type:object.
 * @param {Record<string, Record<string, unknown> & { required?: boolean }>} fields
 */
export function objectParams(fields) {
  /** @type {Record<string, unknown>} */
  const properties = {}
  const required = []
  for (const [key, spec] of Object.entries(fields)) {
    const { required: isRequired, ...rest } = spec
    properties[key] = rest
    if (isRequired) required.push(key)
  }
  return {
    type: 'object',
    properties,
    ...(required.length > 0 ? { required } : {}),
    additionalProperties: false,
  }
}

function requireProjectId(args) {
  const id = typeof args?.projectId === 'string' ? args.projectId.trim() : ''
  if (!id) throw ClipDomainError.invalidId('projectId is required')
  return id
}

function overlayReady() {
  return typeof globalThis !== 'undefined' && Boolean(globalThis.__omnimuxClipReady)
}

/**
 * Build the six `clip_*` tool specs. Host-side: persist via projectStore,
 * never return `{ ok: false }` as a successful value.
 *
 * @param {{
 *   store: ReturnType<typeof import('./store/projectStore.js').createProjectStore>,
 *   fs?: { writeFileSync: Function, existsSync?: Function },
 *   overlayReady?: () => boolean,
 * }} deps
 */
export function createClipTools(deps) {
  const store = deps.store
  const fs = deps.fs ?? { writeFileSync }
  const isOverlayReady = deps.overlayReady ?? overlayReady

  return [
    {
      name: 'clip_get',
      description:
        'Read an OmniMux clip project timeline. view=summary|tracks|clips|full. Optional trackId/clipId/fromSec/toSec filter. Times in the response are seconds.',
      timeoutMs: 15_000,
      parameters: objectParams({
        projectId: { type: 'string', required: true, description: 'Clip project id' },
        view: {
          type: 'string',
          enum: ['summary', 'tracks', 'clips', 'full'],
          description: 'Projection. Default summary.',
        },
        trackId: { type: 'string', description: 'Restrict to one track' },
        clipId: { type: 'string', description: 'Restrict to one clip' },
        fromSec: { type: 'number', description: 'Range start in seconds' },
        toSec: { type: 'number', description: 'Range end in seconds' },
      }),
      output: jsonOut,
      async execute(args) {
        const id = requireProjectId(args)
        const envelope = store.load(id)
        return projectView(envelope, {
          view: args.view,
          trackId: args.trackId,
          clipId: args.clipId,
          fromSec: args.fromSec,
          toSec: args.toSec,
        })
      },
    },
    {
      name: 'clip_edit',
      description:
        'Apply a batch of atomic timeline operations as one undo step. Types: split_clip, trim_clip, remove_clip, remove_range, move_clip, add_clip, import_media, set_text, set_volume, set_speed, cut_silences (plus add_text / set_subtitle_style / add_transition). Input times are seconds. validateOnly=true checks without writing.',
      timeoutMs: 180_000,
      parameters: objectParams({
        projectId: { type: 'string', required: true, description: 'Clip project id' },
        description: {
          type: 'string',
          required: true,
          description: 'Human-readable undo label for this batch',
        },
        operations: {
          type: 'array',
          required: true,
          items: { type: 'object', additionalProperties: true },
          description: 'Atomic ops. Each object needs a type field.',
        },
        validateOnly: {
          type: 'boolean',
          description: 'If true, apply in-memory only and do not persist',
        },
      }),
      output: jsonOut,
      async execute(args) {
        const id = requireProjectId(args)
        const description = typeof args.description === 'string' ? args.description.trim() : ''
        if (!description) throw ClipDomainError.invalidJson('description is required')
        const envelope = store.load(id)
        const applied = applyOperations(envelope.schema, args.operations)
        if (args.validateOnly) {
          return {
            projectId: id,
            description,
            validateOnly: true,
            persisted: false,
            results: applied.results,
            durationSec: (applied.schema.canvasConfig?.durationMs || 0) / 1000,
          }
        }
        store.save(id, applied.schema, { recordUndo: true })
        return {
          projectId: id,
          description,
          validateOnly: false,
          persisted: true,
          undoStep: true,
          results: applied.results,
          durationSec: (applied.schema.canvasConfig?.durationMs || 0) / 1000,
        }
      },
    },
    {
      name: 'clip_view',
      description:
        'Control playback and the playhead. action=seek|play|pause. Does not create an undo step. Overlay must be mounted.',
      timeoutMs: 5_000,
      parameters: objectParams({
        projectId: { type: 'string', required: true, description: 'Clip project id' },
        action: {
          type: 'string',
          required: true,
          enum: ['seek', 'play', 'pause'],
          description: 'Playback command',
        },
        toSec: { type: 'number', description: 'Seek target in seconds (seek)' },
        fromSec: { type: 'number', description: 'Optional range start in seconds' },
      }),
      output: jsonOut,
      async execute(args) {
        const id = requireProjectId(args)
        if (!isOverlayReady()) {
          throw ClipDomainError.previewNotReady('clip overlay is not mounted; open the editor first')
        }
        const action = args.action
        if (action !== 'seek' && action !== 'play' && action !== 'pause') {
          throw ClipDomainError.invalidJson('action must be seek|play|pause')
        }
        const envelope = store.load(id)
        const durationMs = envelope.schema.canvasConfig?.durationMs || 0
        let playheadMs = envelope.playheadMs || 0
        let isPlaying = envelope.isPlaying
        if (action === 'seek') {
          const toMs = optionalSecToMs(args.toSec, 'toSec')
          const fromMs = optionalSecToMs(args.fromSec, 'fromSec')
          const target = toMs ?? fromMs
          if (target == null) throw ClipDomainError.invalidJson('seek requires toSec')
          playheadMs = Math.max(0, Math.min(durationMs, target))
          isPlaying = false
        } else if (action === 'play') {
          const fromMs = optionalSecToMs(args.fromSec, 'fromSec')
          if (fromMs != null) playheadMs = Math.max(0, Math.min(durationMs, fromMs))
          isPlaying = true
        } else {
          isPlaying = false
        }
        store.patchPlayback(id, { playheadMs, isPlaying })
        return {
          projectId: id,
          action,
          playheadSec: playheadMs / 1000,
          isPlaying,
        }
      },
    },
    {
      name: 'clip_snapshot',
      description:
        'Capture composed preview frames at given times (seconds) into $DSH_HOME/omnimux/clip/snapshots for visual self-check. Overlay must be mounted. Host records snapshot paths; the overlay fills pixels.',
      timeoutMs: 60_000,
      parameters: objectParams({
        projectId: { type: 'string', required: true, description: 'Clip project id' },
        times: {
          type: 'array',
          items: { type: 'number' },
          description: 'Absolute times in seconds',
        },
        fromSec: { type: 'number', description: 'Range start (with toSec) sampled at midpoints' },
        toSec: { type: 'number', description: 'Range end in seconds' },
      }),
      output: jsonOut,
      async execute(args) {
        const id = requireProjectId(args)
        if (!isOverlayReady()) {
          throw ClipDomainError.previewNotReady('clip overlay is not mounted; open the editor first')
        }
        const envelope = store.load(id)
        const durationMs = envelope.schema.canvasConfig?.durationMs || 0
        const timesMs = resolveSnapshotTimes(args, durationMs)
        const frames = []
        for (const timeMs of timesMs) {
          const path = snapshotPngPath(store.paths, id, timeMs)
          const placeholder = Buffer.from(
            '89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000a49444154789c63000100000500010d0a2db40000000049454e44ae426082',
            'hex',
          )
          fs.writeFileSync(path, placeholder, { mode: 0o600 })
          frames.push({ timeSec: timeMs / 1000, path })
        }
        return { projectId: id, frames }
      },
    },
    {
      name: 'clip_diagnostics',
      description:
        'Inspect a clip project for timeline_gap (black-frame holes on video tracks), clip_overlap, and media_missing. Returns the issue list; does not throw on findings.',
      timeoutMs: 10_000,
      parameters: objectParams({
        projectId: { type: 'string', required: true, description: 'Clip project id' },
      }),
      output: jsonOut,
      async execute(args) {
        const id = requireProjectId(args)
        const envelope = store.load(id)
        const report = diagnoseTimeline(envelope.schema)
        return { projectId: id, ...report }
      },
    },
    {
      name: 'clip_export',
      description:
        'Request a composed MP4 export of the clip project. Resolution 720p|1080p|4k. Host records the export job; the overlay WebCodecs pipeline writes the file under $DSH_HOME/omnimux/clip/exports.',
      timeoutMs: 300_000,
      parameters: objectParams({
        projectId: { type: 'string', required: true, description: 'Clip project id' },
        resolution: {
          type: 'string',
          enum: ['720p', '1080p', '4k'],
          description: 'Output raster. Default 1080p.',
        },
        fps: { type: 'number', description: 'Output frame rate. Default project fps.' },
      }),
      output: jsonOut,
      async execute(args) {
        const id = requireProjectId(args)
        const envelope = store.load(id)
        const resolution = args.resolution || '1080p'
        if (!['720p', '1080p', '4k'].includes(resolution)) {
          throw ClipDomainError.invalidJson('resolution must be 720p|1080p|4k')
        }
        const fps = typeof args.fps === 'number' && Number.isFinite(args.fps)
          ? args.fps
          : envelope.schema.canvasConfig?.fps || 30
        if (fps <= 0) throw ClipDomainError.invalidJson('fps must be a positive number')
        const dest = exportMp4Path(store.paths, id)
        const job = {
          projectId: id,
          status: 'queued',
          resolution,
          fps,
          dest,
          requestedAt: Date.now(),
        }
        fs.writeFileSync(exportJobPath(store.paths, id), `${JSON.stringify(job, null, 2)}\n`, { mode: 0o600 })
        return {
          projectId: id,
          status: 'queued',
          resolution,
          fps,
          dest,
          mode: 'live',
        }
      },
    },
  ]
}

/**
 * @param {{ times?: unknown, fromSec?: unknown, toSec?: unknown }} args
 * @param {number} durationMs
 */
function resolveSnapshotTimes(args, durationMs) {
  const times = []
  if (Array.isArray(args.times) && args.times.length > 0) {
    for (const value of args.times) times.push(secToMs(value, 'times[]'))
  } else {
    const fromMs = optionalSecToMs(args.fromSec, 'fromSec') ?? 0
    const toMs = optionalSecToMs(args.toSec, 'toSec') ?? durationMs
    if (toMs < fromMs) throw ClipDomainError.invalidJson('toSec must be >= fromSec')
    const span = toMs - fromMs
    if (span === 0) times.push(fromMs)
    else {
      times.push(fromMs, Math.round(fromMs + span / 2), toMs)
    }
  }
  const duration = Math.max(0, durationMs)
  const unique = [...new Set(times.map((ms) => Math.max(0, Math.min(duration, ms))))]
  unique.sort((a, b) => a - b)
  return unique
}

/**
 * Register clip_* tools + the clip:ops prompt. Uses ctx.effect so unload reverses.
 *
 * @param {{
 *   tools?: { register: Function },
 *   systemPrompt?: { section: Function },
 *   effect?: Function,
 * }} ctx
 * @param {ReturnType<typeof createClipTools>} tools
 */
export function registerClipTools(ctx, tools) {
  if (!ctx.tools || typeof ctx.tools.register !== 'function') return
  const register = () => {
    for (const tool of tools) ctx.tools.register(tool)
  }
  if (typeof ctx.effect === 'function') ctx.effect(register, 'omnimux-clip: tools')
  else register()
}

export const CLIP_PROMPT = `This workspace may use OmniMux Clip (omnimux-clip) for local multi-track editing.
Call clip_get before stating timeline facts. Mutate the timeline only through clip_edit (one call = one undo step; times in seconds).
After a batch of edits call clip_diagnostics, then clip_snapshot if the overlay is open. clip_view / clip_snapshot throw PREVIEW_NOT_READY when the editor overlay is not mounted — tell the user to open 剪辑工坊 first.
Do not return { ok: false } as a successful tool value; failures throw ClipDomainError.
Follow skills/clip-craft/SKILL.md for pacing, caption size, and black-frame checks.`
