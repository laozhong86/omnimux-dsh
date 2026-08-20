import { createAssetsDispatcher, registerAssetsRoutes } from './http-routes.js'
import { createArtifactStore } from './artifacts.js'
import { createMappingStore, AssetsError } from './mappings.js'
import { resolveAssetsPaths } from './paths.js'

export const name = 'dsh-omnimux-assets'
export const inject = ['tools', 'systemPrompt']

const ASSETS_PROMPT = `This workspace may mount the OmniMux dual-core assets (dsh-omnimux-assets).
assets_list reads mapped folder files (scope "mappings", or "mapping_files" with mapping_id) and reported artifacts (scope "artifacts", optional type filter).
assets_upload copies one produced file into the assets store under $DSH_HOME/omnimux/assets/artifacts; pass agent (and run_id when known) so the artifact stays traceable.
Mapped folders are read-only for you: never modify, move, or delete anything under a mapped real_path; deleting a mapping only removes the registry record.`

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

const jsonOut = {
  schema: { type: 'object', additionalProperties: true },
  render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
}

/**
 * @param {{
 *   tools: { register: (tool: object) => unknown },
 *   systemPrompt?: { section: (spec: object) => unknown },
 *   effect?: (fn: () => unknown, label?: string) => unknown,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 */
export function apply(ctx) {
  const paths = resolveAssetsPaths()
  const mappings = createMappingStore({ paths })
  const artifacts = createArtifactStore({ paths })
  const dispatcher = createAssetsDispatcher({ mappings, artifacts })

  const mountHttp = (httpCtx) => {
    const webServer = httpCtx.webServer ?? httpCtx.get?.('webServer')
    if (!webServer || typeof webServer.register !== 'function') return
    const mount = () => registerAssetsRoutes(webServer, dispatcher)
    if (typeof httpCtx.effect === 'function') httpCtx.effect(mount, 'dsh-omnimux-assets: http routes')
    else mount()
  }
  if (typeof ctx.inject === 'function') ctx.inject(['webServer'], mountHttp)
  else mountHttp(ctx)

  if (ctx.systemPrompt && typeof ctx.systemPrompt.section === 'function') {
    const registerPrompt = () => ctx.systemPrompt.section({
      name: 'assets:ops',
      order: 50,
      text: ASSETS_PROMPT,
    })
    if (typeof ctx.effect === 'function') ctx.effect(registerPrompt, 'assets.ops')
    else registerPrompt()
  }

  ctx.tools.register({
    name: 'assets_list',
    description:
      'Read the OmniMux assets registry. scope "mappings" lists mapped folders (id, display name, real path, status, file count); scope "mapping_files" needs mapping_id and lists the files of that mapped folder (one layer, read-only scan); scope "artifacts" lists reported AI artifacts, optionally filtered by type (image/video/audio/document/html/json/other). Read-only: never mutates mapped folders or artifacts. Data lives under $DSH_HOME/omnimux/assets.',
    parameters: objectParams({
      scope: {
        type: 'string',
        required: true,
        enum: ['mappings', 'mapping_files', 'artifacts'],
        description: 'What to list: mappings, one mapping\'s files, or artifacts',
      },
      mapping_id: { type: 'string', description: 'Required when scope is mapping_files' },
      type: { type: 'string', description: 'Optional type filter when scope is artifacts' },
    }),
    output: jsonOut,
    async execute(args) {
      const scope = args.scope
      if (scope === 'mappings') {
        return { mappings: mappings.list() }
      }
      if (scope === 'mapping_files') {
        const id = typeof args.mapping_id === 'string' ? args.mapping_id : ''
        if (!id) throw new AssetsError('mapping-not-found', 'mapping_id is required when scope is mapping_files')
        const mapping = mappings.get(id)
        if (!mapping) throw new AssetsError('mapping-not-found', `no mapping ${id}`)
        const files = mappings.readScan(id) ?? []
        return { mapping: mappings.getView(id), files }
      }
      if (scope === 'artifacts') {
        const type = typeof args.type === 'string' && args.type.trim() !== '' ? args.type.trim() : ''
        return { artifacts: artifacts.list(type ? { type } : {}) }
      }
      throw new AssetsError('invalid-scope', `unknown scope ${String(scope)}`)
    },
  })

  ctx.tools.register({
    name: 'assets_upload',
    description:
      'Report one produced file as an OmniMux assets artifact: copies it into the plugin-owned store under $DSH_HOME/omnimux/assets/artifacts (sha256 content-addressed, deduplicated). The source file is never modified or moved. agent is required; run_id decides whether the artifact is marked traced. Refuses content that looks like a secret token.',
    parameters: objectParams({
      path: { type: 'string', required: true, description: 'Absolute path of the produced file on this machine' },
      title: { type: 'string', description: 'Display title; defaults to the file name' },
      agent: { type: 'string', required: true, description: 'Name of the agent that produced the file' },
      run_id: { type: 'string', description: 'Run id when known; presence marks the artifact traced' },
      model: { type: 'string', description: 'Model that produced the file' },
      prompt_hash: { type: 'string', description: 'sha256-prefixed prompt digest' },
    }),
    output: jsonOut,
    async execute(args) {
      const artifact = artifacts.report(args.path, {
        agent: args.agent,
        run_id: args.run_id,
        model: args.model,
        prompt_hash: args.prompt_hash,
      }, args.title)
      return { artifact }
    },
  })
}
