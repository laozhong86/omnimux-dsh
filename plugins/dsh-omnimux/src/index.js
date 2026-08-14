import { executeOmnimuxVideo, OmnimuxError } from './video.js'

export const name = 'dsh-omnimux'
export const inject = ['tools']

/**
 * @param {unknown} error
 */
function rethrow(error) {
  throw error
}

/**
 * @param {{
 *   tools: { register: (tool: object) => unknown },
 *   jobs?: { start: (spec: object) => string },
 * }} ctx
 */
export function apply(ctx) {
  const api = {
    /**
     * @param {{ prompt: string, dest: string, duration?: number, signal?: AbortSignal }} req
     */
    execute(req) {
      return executeOmnimuxVideo(req)
    },
  }
  ctx.provide('omnimuxVideo', api)

  ctx.tools.register({
    name: 'omnimux_video_submit',
    description:
      'Submit one OmniMux video generation to dest on disk. Uses OMNIMUX_API_KEY / OMNIMUX_TOKEN. Does not write series/.',
    parameters: {
      prompt: { type: 'string', required: true },
      dest: { type: 'string', required: true, description: 'Absolute file path for the mp4' },
      duration: { type: 'number' },
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
    },
    async execute(args, exec) {
      try {
        return await api.execute({
          prompt: args.prompt,
          dest: args.dest,
          duration: args.duration,
          signal: exec.signal,
        })
      } catch (error) {
        if (error instanceof OmnimuxError) throw error
        return rethrow(error)
      }
    },
  })
}
