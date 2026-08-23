import { createAssetsDispatcher, registerAssetsRoutes } from './http-routes.js'
import { createArtifactStore } from './artifacts.js'
import { createLibraryStore } from './library.js'
import { createMappingStore, AssetsError } from './mappings.js'
import { resolveAssetsPaths } from './paths.js'

export const name = 'omnimux-assets'
export const inject = ['tools', 'systemPrompt']

const ASSETS_PROMPT = `This workspace may use the OmniMux creative asset library (omnimux-assets).
Prefer assets_list with scope "assets" (optional type: character/scene/style/prop/knowledge/custom) and assets_search by name/description/tags.
Each asset is a reusable creative object (name + type + description + path-referenced files). Cite it as @类型/名称 (example: @角色/林晓). Missing disk paths are omitted from files — do not invent them.
assets_upload still reports produced files; it does not create a typed asset.
Never modify, move, or delete a file under an asset real_path; deleting an asset only drops the library record.`

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
  const library = createLibraryStore({ paths })
  library.migrateMappings(mappings)
  const dispatcher = createAssetsDispatcher({ mappings, artifacts, library })

  const mountHttp = (httpCtx) => {
    const webServer = httpCtx.webServer ?? httpCtx.get?.('webServer')
    if (!webServer || typeof webServer.register !== 'function') return
    const mount = () => registerAssetsRoutes(webServer, dispatcher)
    if (typeof httpCtx.effect === 'function') httpCtx.effect(mount, 'omnimux-assets: http routes')
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
      'Read the OmniMux creative asset library. Prefer scope "assets" (optional type: character/scene/style/prop/knowledge/custom). Legacy scopes "mappings" / "mapping_files" / "artifacts" remain. Missing file paths are omitted. Read-only. Data lives under $DSH_HOME/omnimux/assets.',
    parameters: objectParams({
      scope: {
        type: 'string',
        required: true,
        enum: ['assets', 'mappings', 'mapping_files', 'artifacts'],
        description: 'What to list: creative assets (preferred), legacy mappings, one mapping\'s files, or artifacts',
      },
      mapping_id: { type: 'string', description: 'Required when scope is mapping_files' },
      type: { type: 'string', description: 'Optional type filter for assets or artifacts' },
    }),
    output: jsonOut,
    async execute(args) {
      const scope = args.scope
      if (scope === 'assets') {
        const type = typeof args.type === 'string' && args.type.trim() !== '' ? args.type.trim() : ''
        return { assets: library.list(type ? { type } : {}) }
      }
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
    name: 'assets_search',
    description:
      'Search creative assets by name, description, handle, or tags. Optional type filter (character/scene/style/prop/knowledge/custom). Missing disk paths are omitted from files.',
    parameters: objectParams({
      query: { type: 'string', required: true, description: 'Case-insensitive substring' },
      type: { type: 'string', description: 'Optional asset type filter' },
    }),
    output: jsonOut,
    async execute(args) {
      const query = typeof args.query === 'string' ? args.query : ''
      const type = typeof args.type === 'string' && args.type.trim() !== '' ? args.type.trim() : ''
      return { assets: library.list({ query, ...(type ? { type } : {}) }) }
    },
  })

  ctx.tools.register({
    name: 'assets_get',
    description:
      'Get one creative asset by id or handle, including description and currently visible file refs.',
    parameters: objectParams({
      id: { type: 'string', required: true, description: 'Asset id (ast_…) or handle' },
    }),
    output: jsonOut,
    async execute(args) {
      const id = typeof args.id === 'string' ? args.id : ''
      const asset = library.getView(id)
      if (!asset) throw new AssetsError('asset-not-found', `no asset ${id}`)
      return { asset }
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
