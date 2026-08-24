import { homedir } from 'node:os'
import { join } from 'node:path'
import { executeOmnimuxImage } from './media/image.js'
import { executeOmnimuxVideo, OmnimuxError } from './media/video.js'
import { CLIENT_NAME, DEFAULT_SITE, resolveSiteBaseUrl } from './auth/omnimux-auth.js'
import { createAuthDispatcher, registerAuthRoutes } from './auth/http-routes.js'
import { createPluginDispatcher, registerPluginRoutes } from './plugins/http-routes.js'
import { createAppsDispatcher, registerAppsRoutes } from './apps/http-routes.js'
import { createAppsStore } from './apps/store.js'
import { createTabsStore } from './apps/tabs.js'
import { createPendingStore } from './auth/pending.js'
import { createIdentity } from './auth/identity.js'
import { createTokenStore } from './auth/store.js'
import { parseHubConfig, Config } from './config.js'
import { createOfficialDispatcher, registerOfficialRoutes } from './official/http-routes.js'
import { createAccountMetaStore } from './official/account-meta.js'
import { mountOfficial } from './official/mount.js'
import { createAvatarStore } from './avatar/store.js'
import { createAvatarDispatcher, registerAvatarRoutes } from './avatar/routes.js'
import { injectBrandBoot } from './brand/inject-index.js'
import { enabledTextModels } from './text/catalog.js'
import { executeOmnimuxText } from './text/execute.js'

export const name = 'omnimux'
export const inject = ['tools']
export { Config }

/**
 * @param {unknown} error
 */
function rethrow(error) {
  throw error
}

/**
 * @param {{
 *   tools: { register: (tool: object) => unknown },
 *   provide?: (name: string, value: unknown) => void,
 *   get?: (name: string) => unknown,
 * }} ctx
 * @param {{ text: ReturnType<typeof parseHubConfig>['text'] }} hub
 * @param {object} jsonOut
 * @param {(error: unknown) => never} onError
 */
function mountTextComplete(ctx, hub, jsonOut, onError) {
  const enabled = enabledTextModels(hub.text)
  const modelIds = enabled.map((row) => row.id)
  const api = {
    /**
     * @param {{ prompt: string, model?: string, image?: string, video?: string, system?: string, maxTokens?: number, signal?: AbortSignal }} req
     */
    execute(req) {
      return executeOmnimuxText({
        ...req,
        text: hub.text,
        llm: ctx.get?.('llm'),
        attachments: ctx.get?.('attachments'),
        env: process.env,
      })
    },
  }
  ctx.provide('textComplete', api)
  ctx.tools.register({
    name: 'omnimux_text_complete',
    description:
      'Run one one-shot completion on an enabled OmniMux whitelist model. Not a second chat: the expert does not see this conversation and receives no tools. Call only when the current model cannot do the work, or the user / contract names that model. Omit model to use the configured default (gemini-3.7-flash). Pass image (absolute path, URL, or data URI) for vision on models that accept image input; pass video (absolute path or data URI) for native video on models that accept video (today gemini-3.7-flash) — image and video are mutually exclusive. Video bypasses the harness image store and packs as image_url(data:video). claude-opus-5 is listed but its chat-completions group is temporarily 403. Do not use this to continue the conversation.',
    parameters: objectParams({
      model: {
        type: 'string',
        ...(modelIds.length > 0 ? { enum: modelIds } : {}),
        description: 'Whitelist model id. Omit to use the configured default (gemini-3.7-flash).',
      },
      prompt: { type: 'string', required: true, description: 'Self-contained prompt. The expert cannot see the parent chat.' },
      image: { type: 'string', description: 'Absolute path, http(s) URL, or data URI. Model must accept image input. Mutually exclusive with video.' },
      video: { type: 'string', description: 'Absolute path (.mp4/.webm/.mov) or data:video URI. Model must accept video input. Mutually exclusive with image.' },
      reason: { type: 'string', required: true, description: 'Which missing capability, or which user / contract line authorizes this call.' },
      system: { type: 'string', description: 'Optional system text for this one request only.' },
      max_tokens: { type: 'number', description: 'Optional output cap. Defaults to Config.text.maxTokens.' },
    }),
    output: jsonOut,
    async execute(args, exec) {
      const reason = typeof args.reason === 'string' ? args.reason.trim() : ''
      if (!reason) {
        throw new OmnimuxError('omnimux-invalid-request', 'reason is required')
      }
      try {
        return await executeOmnimuxText({
          prompt: args.prompt,
          model: args.model,
          image: args.image,
          video: args.video,
          system: args.system,
          maxTokens: args.max_tokens,
          signal: exec?.signal,
          sessionId: exec?.agent?.session?.id,
          text: hub.text,
          llm: ctx.get?.('llm'),
          attachments: ctx.get?.('attachments'),
          env: process.env,
        })
      } catch (error) {
        if (error instanceof OmnimuxError) throw error
        return onError(error)
      }
    },
  })
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
 *   provide?: (name: string, value: unknown) => void,
 *   get?: (name: string) => unknown,
 *   effect?: (factory: () => () => void, label?: string) => void,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 * @param {{ siteBaseUrl?: string, clientName?: string, productName?: string, logoSvg?: string, wordmarkText?: string, replaceHeroMark?: boolean, hidePreviewBadge?: boolean, rewriteWelcome?: boolean, media?: unknown }} [config]
 */
export function apply(ctx, config = {}) {
  const hub = parseHubConfig(config)
  const siteBaseUrl = resolveSiteBaseUrl(config.siteBaseUrl || process.env.OMNIMUX_SITE_URL || DEFAULT_SITE)
  const clientName = config.clientName || CLIENT_NAME
  const brand = hub
  const store = createTokenStore({
    credentials: ctx.get?.('credentials'),
    homeDir: process.env.DSH_HOME || join(homedir(), '.dsh'),
  })
  const identity = createIdentity({ store, siteBaseUrl })
  void store.describe()
  ctx.provide('identity', { status: identity.status, require: identity.require })
  const homeDir = process.env.DSH_HOME || join(homedir(), '.dsh')
  const profile = process.env.OMNIMUX_PLUGIN_PROFILE && process.env.OMNIMUX_PLUGIN_PROFILE.trim() !== ''
    ? process.env.OMNIMUX_PLUGIN_PROFILE
    : 'omnimux'
  const appsStore = createAppsStore({
    home: homeDir,
    profile,
    apps: hub.apps,
    siteBaseUrl,
  })
  if (typeof ctx.effect === 'function') {
    ctx.effect(() => () => appsStore.dispose(), 'omnimux: apps catalog')
  }
  appsStore.maybeRefresh()
  const avatarStore = createAvatarStore({ home: homeDir })
  const accountMetaStore = createAccountMetaStore({ home: homeDir })
  const tabsStore = createTabsStore({ home: homeDir })

  /**
   * Sidebar tab records for opened Apps live next to the catalog cache.
   * @returns {Array<{ id?: unknown, spec?: { name?: unknown } }>}
   */
  const shelfApps = () => {
    const body = appsStore.view()
    return Array.isArray(body.apps) ? body.apps : []
  }

  /**
   * @param {{ webServer?: { register: Function, tapIndex?: Function }, get?: Function, effect?: Function }} httpCtx
   */
  const mountHttp = (httpCtx) => {
    const webServer = httpCtx.webServer ?? httpCtx.get?.('webServer')
    if (!webServer || typeof webServer.register !== 'function') return
    const dispatcher = createAuthDispatcher({
      store,
      pending: createPendingStore(),
      siteBaseUrl,
      clientName,
      identity,
      capabilities: {
        identity: true,
        videoGenerate: true,
        imageGenerate: true,
        textComplete: true,
        official: hub.official.mount,
      },
    })
    const mount = () => {
      const stopAuth = registerAuthRoutes(webServer, dispatcher)
      const stopPlugins = registerPluginRoutes(webServer, createPluginDispatcher({
        appsView: shelfApps,
        tabsRemove: (id) => { tabsStore.remove(id) },
        bundledDir: hub.apps.bundledDir || process.env.OMNIMUX_APPS_BUNDLED_DIR || '',
      }))
      const stopApps = registerAppsRoutes(webServer, createAppsDispatcher({
        homeDir,
        profile,
        apps: hub.apps,
        siteBaseUrl,
        store: appsStore,
        tabsStore,
      }))
      const stopOfficial = registerOfficialRoutes(webServer, createOfficialDispatcher({
        official: hub.official,
        identity,
        store,
        siteBaseUrl,
        metaStore: accountMetaStore,
      }))
      const stopAvatar = registerAvatarRoutes(webServer, createAvatarDispatcher({
        store: avatarStore,
        identity,
      }))
      return () => {
        stopAuth()
        stopPlugins()
        stopApps()
        stopOfficial()
        stopAvatar()
      }
    }
    if (typeof httpCtx.effect === 'function') httpCtx.effect(mount, 'omnimux: http routes')
    else mount()
    if (typeof webServer.tapIndex !== 'function') return
    const tap = () => webServer.tapIndex(html => injectBrandBoot(html, brand))
    if (typeof httpCtx.effect === 'function') httpCtx.effect(tap, 'omnimux: brand boot')
    else tap()
  }
  if (typeof ctx.inject === 'function') ctx.inject(['webServer'], mountHttp)
  else mountHttp(ctx)

  const jsonOut = {
    schema: { type: 'object', additionalProperties: true },
    render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
  }
  /**
   * @param {'video' | 'image'} kind
   * @param {(req: object) => Promise<unknown>} execute
   */
  function mountMedia(kind, execute) {
    const api = {
      /**
       * @param {{ prompt?: string, dest: string, duration?: number, image?: string, taskId?: string, wait?: boolean, signal?: AbortSignal }} req
       */
      execute(req) {
        return execute({ ...req, media: hub.media })
      },
    }
    ctx.provide(`${kind}Generate`, api)
    const destHint = kind === 'video' ? 'Absolute file path for the mp4' : 'Absolute file path for the image'
    ctx.tools.register({
      name: `omnimux_${kind}_submit`,
      description:
        `Generate one ${kind} to dest. Default waits until the file is on disk (mode live). wait false returns mode submitted plus taskId. Pass task_id with dest to poll and download an existing task. Uses OMNIMUX_API_KEY / OMNIMUX_TOKEN. Does not write series/.`,
      parameters: objectParams({
        prompt: { type: 'string', description: 'Required unless task_id is set' },
        dest: { type: 'string', required: true, description: destHint },
        duration: { type: 'number' },
        image: { type: 'string', description: 'Reference image URL or data URI' },
        speech: { type: 'string', description: 'Talking-head / spoken text. Optional.' },
        audio: { type: 'string', description: 'Reference audio URL. Optional.' },
        wait: { type: 'boolean', description: 'If false, return after submit. Default true.' },
        task_id: { type: 'string', description: 'Resume poll and download; skips submit' },
      }),
      output: jsonOut,
      async execute(args, exec) {
        try {
          return await api.execute({
            prompt: args.prompt,
            dest: args.dest,
            duration: args.duration,
            image: args.image,
            speech: args.speech,
            audio: args.audio,
            wait: args.wait,
            taskId: args.task_id,
            signal: exec.signal,
          })
        } catch (error) {
          if (error instanceof OmnimuxError) throw error
          return rethrow(error)
        }
      },
    })
  }

  mountMedia('video', executeOmnimuxVideo)
  mountMedia('image', executeOmnimuxImage)
  mountTextComplete(ctx, hub, jsonOut, rethrow)
  mountOfficial(ctx, {
    hub,
    identity,
    store,
    siteBaseUrl,
    objectParams,
    jsonOut,
    rethrow,
  })
}
