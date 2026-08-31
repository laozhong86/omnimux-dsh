import { assertCapabilityEnabled, isMediaEnabled, isToolEnabled } from '../gate/guard.js'
import { OmnimuxError } from './errors.js'
import { objectParams, rethrow } from '../tools/schema.js'

/**
 * @param {{
 *   tools: { register: (tool: object) => unknown },
 *   provide?: (name: string, value: unknown) => void,
 *   get?: (name: string) => unknown,
 * }} ctx
 * @param {{
 *   kind: 'video' | 'image' | 'audio',
 *   execute: (req: object) => Promise<unknown>,
 *   media: unknown,
 *   gate?: object,
 *   hub?: { gate?: object },
 *   store?: { resolve: () => Promise<string | undefined> },
 *   jsonOut: object,
 * }} opts
 */
export function mountMedia(ctx, opts) {
  const { kind, execute, media, jsonOut, store } = opts
  const gate = opts.gate ?? opts.hub?.gate ?? ctx.get?.('gate')

  const api = {
    /**
     * @param {{ prompt?: string, dest: string, duration?: number, image?: string, taskId?: string, wait?: boolean, signal?: AbortSignal }} req
     */
    execute(req) {
      assertCapabilityEnabled(gate, kind, 'media')
      return execute({
        ...req,
        media,
        store: opts.store,
        credentials: ctx.get?.('credentials'),
      })
    },
  }

  if (isMediaEnabled(gate, kind) && typeof ctx.provide === 'function') {
    ctx.provide(`${kind}Generate`, api)
  }

  const toolName = `omnimux_${kind}_submit`
  if (!isToolEnabled(gate, toolName)) {
    return
  }

  const destHint = kind === 'video'
    ? 'Absolute file path for the mp4'
    : kind === 'audio'
      ? 'Absolute file path for the audio'
      : 'Absolute file path for the image'

  ctx.tools.register({
    name: toolName,
    description:
      `Generate one ${kind} to dest. Default waits until the file is on disk (mode live). wait false returns mode submitted plus taskId. Pass task_id with dest to poll and download an existing task. Uses OMNIMUX_API_KEY / OMNIMUX_TOKEN.`,
    parameters: objectParams({
      prompt: { type: 'string', description: 'Required unless task_id is set' },
      dest: { type: 'string', required: true, description: destHint },
      model: { type: 'string', description: 'Model ID (e.g. suno, gpt-4o-mini-tts, nanobanana-2, seedream-5.0-pro, midjourney-8.1, gpt-image-2)' },
      duration: { type: 'number' },
      image: { type: 'string', description: 'Reference image URL or data URI' },
      speech: { type: 'string', description: 'Talking-head / spoken text. Optional.' },
      audio: { type: 'string', description: 'Reference audio URL. Optional.' },
      voice: { type: 'string', description: 'TTS voice selection (alloy, echo, fable, onyx, nova, shimmer). Optional.' },
      style: { type: 'string', description: 'Music/audio style prompt. Optional.' },
      instrumental: { type: 'boolean', description: 'Instrumental only music generation. Optional.' },
      speed: { type: 'number', description: 'Speech speed multiplier. Optional.' },
      wait: { type: 'boolean', description: 'If false, return after submit. Default true.' },
      task_id: { type: 'string', description: 'Resume poll and download; skips submit' },
    }),
    output: jsonOut,
    async execute(args, exec) {
      try {
        assertCapabilityEnabled(gate, toolName, 'tool')
        return await api.execute({
          prompt: args.prompt,
          dest: args.dest,
          model: args.model,
          duration: args.duration,
          image: args.image,
          speech: args.speech,
          audio: args.audio,
          wait: args.wait,
          taskId: args.task_id,
          signal: exec?.signal,
        })
      } catch (error) {
        if (error instanceof OmnimuxError) throw error
        return rethrow(error)
      }
    },
  })
}
