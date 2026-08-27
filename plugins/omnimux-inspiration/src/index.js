import { resolveInspirationPaths } from './paths.js'
import { createLocalStore } from './local-store.js'
import { createLocalInspirationDispatcher, readJsonBody, sendJson } from './http-routes.js'
import { fallbackResolveSocial } from './scraper-fallback.js'

export const name = 'omnimux-inspiration'
export const inject = ['tools']

export const INSPIRATION_TOOL_NAMES = [
  'inspiration_search',
  'inspiration_get',
  'inspiration_create',
]

function objectParams(fields) {
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
 *   tools: { register: (tool: object) => unknown, get?: (name: string) => any },
 *   get?: (name: string) => unknown,
 *   effect?: (factory: () => () => void, label?: string) => void,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 */
export function apply(ctx) {
  const paths = resolveInspirationPaths()
  const store = createLocalStore({ paths })

  const getTool = (toolName) => {
    const toolsService = ctx.tools ?? (typeof ctx.get === 'function' ? /** @type {any} */ (ctx.get('tools')) : undefined)
    if (toolsService && typeof toolsService.get === 'function') {
      return toolsService.get(toolName)
    }
    return undefined
  }

  // Social fetcher: consumes OmniMux tool omnimux_social_data with intelligent resilient fallback
  const socialFetcher = async ({ platform, capability, url }) => {
    const socialDataTool = getTool('omnimux_social_data')
    if (socialDataTool && typeof socialDataTool.execute === 'function') {
      try {
        const res = await socialDataTool.execute({ platform, capability, url })
        if (res && res.data && (res.data.video_url || res.data.play_url || res.data.video || res.data.cover_url || res.data.title)) {
          return res
        }
      } catch (err) {
        // Fall through to fallback resolver
      }
    }

    // Resilient fallback extraction
    const fallbackRes = await fallbackResolveSocial({ platform, capability, url })
    if (fallbackRes && fallbackRes.data) {
      return fallbackRes
    }

    throw new Error('社媒解析未提取到有效视频元数据，请检查链接或网络')
  }

  // Video analyze tool: exclusively consumes omnimux-video tool video_analyze
  const videoAnalyzeTool = {
    async execute(args) {
      const tool = getTool('video_analyze')
      if (tool && typeof tool.execute === 'function') {
        return tool.execute(args)
      }
      throw new Error('多模态视频分析工具 (video_analyze) 未就绪，请检查 omnimux-video 插件是否加载')
    },
  }

  const dispatcher = createLocalInspirationDispatcher({
    localStore: store,
    socialFetcher,
    videoAnalyzeTool,
  })

  // Mount HTTP server routes for /omnimux/inspiration/local
  const mountHttp = (httpCtx) => {
    const webServer = httpCtx.webServer ?? httpCtx.get?.('webServer')
    if (!webServer || typeof webServer.register !== 'function') return
    const dispose = webServer.register({
      kind: 'prefix',
      path: '/omnimux/inspiration/local',
      async handler(req, res) {
        try {
          const url = new URL(req.url || '/omnimux/inspiration/local', 'http://127.0.0.1')
          if (url.pathname.startsWith('/omnimux/inspiration/local/media/')) {
            await dispatcher.streamLocalMedia(req, res)
            return
          }
          const wantsBody = req.method === 'POST' || req.method === 'PATCH'
          const body = wantsBody ? await readJsonBody(req) : undefined
          if (wantsBody && body === null) {
            sendJson(res, 400, { error: 'invalid json' })
            return
          }
          const result = await dispatcher.dispatch({
            method: req.method || 'GET',
            url: req.url || '/omnimux/inspiration/local',
            body,
          })
          sendJson(res, result.status, result.body)
        } catch {
          sendJson(res, 500, { error: 'internal error' })
        }
      },
    })
    if (typeof httpCtx.effect === 'function') {
      httpCtx.effect(() => dispose, 'omnimux-inspiration-http-routes')
    }
  }

  if (typeof ctx.inject === 'function') {
    ctx.inject(['webServer'], mountHttp)
  } else {
    mountHttp(ctx)
  }

  // Register Agent-facing Tools
  ctx.tools.register({
    name: 'inspiration_search',
    description: 'Search local and cloud inspiration items by keyword, platform, tag, or favorites.',
    parameters: objectParams({
      query: { type: 'string', description: 'Search term for title, content, hook or tags' },
      platform: { type: 'string', description: 'tiktok | instagram | youtube | x' },
      type: { type: 'string', description: 'video | image | link' },
      tag: { type: 'string', description: 'Filter by specific tag' },
      is_favorite: { type: 'boolean', description: 'Only return favorite items' },
      limit: { type: 'number', description: 'Max items to return (default 20)' },
    }),
    output: jsonOut,
    async execute(args) {
      const listRes = store.list({
        q: args.query,
        platform: args.platform,
        type: args.type,
        tag: args.tag,
        is_favorite: args.is_favorite ? '1' : undefined,
        limit: args.limit || 20,
      })
      const items = Array.isArray(listRes?.items) ? listRes.items : []
      const mapped = items.map((item) => ({
        id: item.id,
        title: item.title,
        platform: item.source_platform,
        type: item.type,
        url: item.source_url,
        tags: item.tags,
        is_favorite: item.is_favorite,
        hook_summary: typeof item.deconstruction === 'object' ? item.deconstruction?.hook : undefined,
      }))
      return {
        count: mapped.length,
        items: mapped,
        inspirations: mapped,
      }
    },
  })

  ctx.tools.register({
    name: 'inspiration_get',
    description: 'Get single inspiration details including five-dimension AI deconstruction report.',
    parameters: objectParams({
      id: { type: 'string', required: true, description: 'Inspiration item ID' },
    }),
    output: jsonOut,
    async execute(args) {
      const item = store.get(args.id)
      if (!item) throw new Error(`Inspiration not found: ${args.id}`)
      return { item }
    },
  })

  ctx.tools.register({
    name: 'inspiration_create',
    description: 'Crawl and save a social media inspiration URL to local store with automatic media download and AI deconstruction.',
    parameters: objectParams({
      url: { type: 'string', required: true, description: 'Social URL (TikTok, Instagram, YouTube, X)' },
      tags: { type: 'array', items: { type: 'string' }, description: 'Custom tags' },
      auto_analyze: { type: 'boolean', description: 'Run AI five-dimension deconstruction (default true)' },
    }),
    output: jsonOut,
    async execute(args) {
      const result = await dispatcher.dispatch({
        method: 'POST',
        url: '/omnimux/inspiration/local/import-url',
        body: {
          url: args.url,
          tags: args.tags || [],
          auto_analyze: args.auto_analyze !== false,
        },
      })
      if (result.status >= 400) throw new Error(result.body?.error || `HTTP ${result.status}`)
      return result.body?.data
    },
  })
}
