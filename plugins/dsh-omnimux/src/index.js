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
 * Compile a flat field table into a JSON Schema object. Raw `register`
 * does not run defineTool, so the wire schema must already be type:object.
 * @param {Record<string, Record<string, unknown> & { required?: boolean }>} fields
 */
function objectParams(fields) {
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
  ctx.provide('videoGenerate', api)

  ctx.tools.register({
    name: 'omnimux_video_submit',
    description:
      'Submit one OmniMux video generation to dest on disk. Uses OMNIMUX_API_KEY / OMNIMUX_TOKEN. Does not write series/.',
    parameters: objectParams({
      prompt: { type: 'string', required: true },
      dest: { type: 'string', required: true, description: 'Absolute file path for the mp4' },
      duration: { type: 'number' },
    }),
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
