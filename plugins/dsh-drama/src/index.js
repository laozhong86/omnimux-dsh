import {
  confirmBible,
  generateShot,
  initProject,
  requireProjectRoot,
  runGenerateShot,
  statusFromCwd,
  upsertEpisode,
  upsertSeries,
  upsertShot,
} from './domain.js'

export const name = 'dsh-drama'
export const inject = ['tools', 'systemPrompt']

const DRAMA_PROMPT = `This workspace may be a short-drama project. Truth lives in series/ on disk.

Call drama_project_status before stating episode or shot counts.
If there is no project, call drama_init_project.
Mutate series files only through drama_* tools.
drama_generate_shot is live when the videoGenerate seam is mounted (mode "live"). Without the seam, an explicit stub.mp4 or DRAMA_STUB_MP4 copies (mode "stub"); otherwise it throws needs-provider.
A shot whose character_ids are unconfirmed in bible.yaml cannot be generated.`

/**
 * @param {{ agent?: { session?: { header?: { cwd?: string } } } }} exec
 */
function cwdOf(exec) {
  return exec.agent?.session?.header?.cwd ?? process.cwd()
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
 *   systemPrompt: { section: (spec: object) => unknown },
 *   get: (name: string) => unknown,
 *   effect?: (fn: () => unknown, label?: string) => unknown,
 * }} ctx
 */
export function apply(ctx) {
  const registerPrompt = () => ctx.systemPrompt.section({
    name: 'drama:ops',
    order: 40,
    text: DRAMA_PROMPT,
  })
  if (typeof ctx.effect === 'function') ctx.effect(registerPrompt, 'drama.ops')
  else registerPrompt()

  const jsonOut = {
    schema: { type: 'object', additionalProperties: true },
    render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
  }

  ctx.tools.register({
    name: 'drama_project_status',
    description:
      'Read the short-drama project under the session working directory. Returns episode count, shot status counts, and unconfirmed bible characters. Call this before inventing series facts.',
    parameters: objectParams({}),
    output: jsonOut,
    async execute(_args, exec) {
      return statusFromCwd(cwdOf(exec))
    },
  })

  ctx.tools.register({
    name: 'drama_init_project',
    description:
      'Create an empty series/ project in the session working directory. Fails if series/series.yaml already exists. Does not copy demo story or a stub mp4.',
    parameters: objectParams({
      id: { type: 'string', required: true, description: 'kebab-case series id' },
      title: { type: 'string' },
      logline: { type: 'string' },
    }),
    output: jsonOut,
    async execute(args, exec) {
      return { ok: true, status: initProject(cwdOf(exec), args) }
    },
  })

  ctx.tools.register({
    name: 'drama_upsert_series',
    description: 'Update series.yaml fields or one episode yaml. Does not confirm bible characters or generate shots.',
    parameters: objectParams({
      title: { type: 'string' },
      logline: { type: 'string' },
      locale: { type: 'string' },
      aspect: { type: 'string' },
      genre: { type: 'array', items: { type: 'string' } },
      episode: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          synopsis: { type: 'string' },
          hook: { type: 'string' },
          status: { type: 'string' },
        },
      },
    }),
    output: jsonOut,
    async execute(args, exec) {
      const root = requireProjectRoot(cwdOf(exec))
      let status = upsertSeries(root, args)
      if (args.episode) status = upsertEpisode(root, args.episode)
      return { ok: true, status }
    },
  })

  ctx.tools.register({
    name: 'drama_confirm_bible',
    description: 'Mark bible.yaml characters as confirmed. Required before drama_generate_shot for any shot that lists those character_ids.',
    parameters: objectParams({
      character_ids: {
        type: 'array',
        required: true,
        items: { type: 'string' },
        description: 'Bible character ids to mark confirmed',
      },
    }),
    output: jsonOut,
    async execute(args, exec) {
      return { ok: true, status: confirmBible(requireProjectRoot(cwdOf(exec)), args.character_ids) }
    },
  })

  ctx.tools.register({
    name: 'drama_upsert_shot',
    description: 'Create or update one shot in shots.json. Cannot set status to generating or ready; use drama_generate_shot for that.',
    parameters: objectParams({
      shot_id: { type: 'string', required: true },
      episode_id: { type: 'string' },
      scene_purpose: { type: 'string' },
      visual_description: { type: 'string' },
      framing: { type: 'string' },
      subject: { type: 'string' },
      status: { type: 'string', description: 'draft, confirmed, or failed' },
      character_ids: { type: 'array', items: { type: 'string' } },
      start_time: { type: 'number' },
      end_time: { type: 'number' },
      duration: { type: 'number' },
    }),
    output: jsonOut,
    async execute(args, exec) {
      return { ok: true, ...upsertShot(requireProjectRoot(cwdOf(exec)), args) }
    },
  })

  ctx.tools.register({
    name: 'drama_generate_shot',
    description:
      'Generate one shot to series/assets/<shot_id>.mp4. Uses the videoGenerate seam when mounted (mode live). Without the seam, copies an explicit stub or throws needs-provider. Fails if any character_id is unconfirmed.',
    parameters: objectParams({
      shot_id: { type: 'string', required: true },
    }),
    output: jsonOut,
    async execute(args, exec) {
      const root = requireProjectRoot(cwdOf(exec))
      const video = ctx.get('videoGenerate')
      if (!video) {
        return generateShot(root, args.shot_id)
      }
      const jobs = ctx.get('jobs')
      const startJob = jobs && typeof jobs.start === 'function'
        ? jobs.start.bind(jobs)
        : null
      if (!startJob) {
        return runGenerateShot(root, args.shot_id, ({ dest, shot }) => video.execute({
          prompt: shot.visual_description,
          dest,
          duration: shot.duration ?? undefined,
          signal: exec.signal,
        }))
      }
      const ac = new AbortController()
      const jobId = startJob({
        kind: 'omnimux-video',
        label: `omnimux-video ${args.shot_id}`,
        owner: exec.agent,
        run() {
          const done = runGenerateShot(root, args.shot_id, ({ dest, shot }) => video.execute({
            prompt: shot.visual_description,
            dest,
            duration: shot.duration ?? undefined,
            signal: ac.signal,
          })).then(
            () => ({ status: 'completed' }),
            (error) => ({
              status: 'failed',
              detail: error instanceof Error ? error.message : String(error),
            }),
          )
          return {
            cancel() { ac.abort() },
            done,
          }
        },
      })
      return { mode: 'live', jobId: String(jobId), shot_id: args.shot_id }
    },
  })
}
