import { stat } from 'node:fs/promises'
import { VideoError } from '../../errors.js'

export const slug = 'video_inline_analysis_prepare'
export const timeoutMs = 600_000
export const destKind = 'single'

const DEFAULT_MAX_REQUEST_BYTES = 9 * 1024 * 1024 // 9437184
const DEFAULT_MAX_SOURCE_BYTES = 209_715_200 // 200 MiB
const SCALE_TIERS = [540, 360, 270, 240]

export function validate(input) {
  if (!String(input?.videoUrl || '').trim()) {
    throw new VideoError('video-invalid-input', 'video_inline_analysis_prepare requires videoUrl')
  }
}

export function maxRequestBytesOf(input) {
  const n = Number(input?.maxRequestBytes)
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_MAX_REQUEST_BYTES
}

export function maxSourceBytesOf(input) {
  const n = Number(input?.maxSourceBytes)
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_MAX_SOURCE_BYTES
}

/** Pure argv for a crf compression at a given long-edge scale tier. */
export function buildInlineArgs(input, longEdge, out) {
  return [
    '-i', String(input.videoUrl),
    '-t', '100', // analyse the first 100s; enough to probe size behaviour
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '28',
    '-vf', `scale='min(${longEdge},iw)':-2`,
    '-an', '-movflags', '+faststart',
    String(out),
  ]
}

/**
 * Execute: compress via crf + scale tiers until the output is within
 * `maxRequestBytes`; keep lowering when over budget.
 * @param {object} input @param {{ dest: string, tmpDir: string, runFfmpeg: (args: string[]) => Promise<unknown>, statBytes?: (p: string) => Promise<number> }} ctx
 */
export async function execute(input, ctx) {
  validate(input)
  const maxReq = maxRequestBytesOf(input)
  const statBytes = ctx.statBytes || ((p) => stat(p).then((s) => s.size))
  for (let i = 0; i < SCALE_TIERS.length; i += 1) {
    const longEdge = SCALE_TIERS[i]
    ctx.addFile(ctx.dest)
    await ctx.runFfmpeg(buildInlineArgs(input, longEdge, ctx.dest))
    const bytes = await statBytes(ctx.dest)
    if (bytes <= maxReq) {
      return { files: [{ path: ctx.dest, kind: 'video', meta: { longEdge, bytes } }] }
    }
  }
  // None of the tiers fit: keep the smallest output and surface the overshoot.
  return { files: [{ path: ctx.dest, kind: 'video', meta: { overshoot: true } }] }
}