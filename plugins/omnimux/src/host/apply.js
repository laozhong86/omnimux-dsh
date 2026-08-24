import { executeOmnimuxImage } from '../media/image.js'
import { executeOmnimuxVideo } from '../media/video.js'
import { CLIENT_NAME, DEFAULT_SITE, resolveSiteBaseUrl } from '../auth/omnimux-auth.js'
import { createAppsStore } from '../apps/store.js'
import { createTabsStore } from '../apps/tabs.js'
import { createIdentity } from '../auth/identity.js'
import { createTokenStore } from '../auth/store.js'
import { parseHubConfig } from '../config.js'
import { createAccountMetaStore } from '../official/account-meta.js'
import { mountOfficial } from '../official/mount.js'
import { mountReader } from '../reader/mount.js'
import { createAvatarStore } from '../avatar/store.js'
import { JSON_TOOL_OUTPUT, objectParams, rethrow } from '../tools/schema.js'
import { mountMedia } from '../media/mount.js'
import { mountTextComplete } from '../text/mount.js'
import { mountHubHttp } from './http.js'
import { hubHomeDir, hubProfileName } from './paths.js'

/**
 * @param {{
 *   tools: { register: (tool: object) => unknown },
 *   jobs?: { start: (spec: object) => string },
 *   provide?: (name: string, value: unknown) => void,
 *   get?: (name: string) => unknown,
 *   effect?: (factory: () => () => void, label?: string) => void,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 * @param {{ siteBaseUrl?: string, clientName?: string, productName?: string, logoSvg?: string, wordmarkText?: string, replaceHeroMark?: boolean, hidePreviewBadge?: boolean, rewriteWelcome?: boolean, heroHeadline?: string, media?: unknown }} [config]
 */
export function apply(ctx, config = {}) {
  const hub = parseHubConfig(config)
  const siteBaseUrl = resolveSiteBaseUrl(config.siteBaseUrl || process.env.OMNIMUX_SITE_URL || DEFAULT_SITE)
  const clientName = config.clientName || CLIENT_NAME
  const brand = hub
  const homeDir = hubHomeDir()
  const store = createTokenStore({
    credentials: ctx.get?.('credentials'),
    homeDir,
  })
  const identity = createIdentity({ store, siteBaseUrl })
  void store.describe()
  ctx.provide('identity', { status: identity.status, require: identity.require })
  const profile = hubProfileName()
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

  const mountHttp = (httpCtx) => mountHubHttp(httpCtx, {
    store,
    identity,
    siteBaseUrl,
    clientName,
    hub,
    brand,
    homeDir,
    profile,
    appsStore,
    tabsStore,
    accountMetaStore,
    avatarStore,
  })
  if (typeof ctx.inject === 'function') ctx.inject(['webServer'], mountHttp)
  else mountHttp(ctx)

  const jsonOut = JSON_TOOL_OUTPUT
  mountMedia(ctx, { kind: 'video', execute: executeOmnimuxVideo, media: hub.media, jsonOut })
  mountMedia(ctx, { kind: 'image', execute: executeOmnimuxImage, media: hub.media, jsonOut })
  mountTextComplete(ctx, hub, jsonOut, rethrow)
  mountOfficial(ctx, {
    hub,
    identity,
    store,
    siteBaseUrl,
    objectParams,
    jsonOut,
    rethrow,
    resolveApiKey: resolveOfficialApiKey,
  })
  mountReader(ctx, {
    hub,
    objectParams,
    jsonOut,
    rethrow,
    resolveApiKey: resolveOfficialApiKey,
  })

  /**
   * Chat (`llm-pi-ai`) resolves `OMNIMUX_API_KEY` from `$DSH_HOME/.credentials.yaml`.
   * Official tools historically only read `process.env`. Prefer env, then the
   * credentials store, so L2 / App sessions with a yaml key can fetch pages.
   */
  async function resolveOfficialApiKey() {
    const fromEnv = String(process.env.OMNIMUX_API_KEY || process.env.OMNIMUX_TOKEN || '').trim()
    if (fromEnv) return fromEnv
    const credentials = ctx.get?.('credentials')
    if (!credentials || typeof credentials.resolve !== 'function') return undefined
    for (const ref of ['OMNIMUX_API_KEY', 'OMNIMUX_TOKEN']) {
      try {
        const hit = await credentials.resolve(ref)
        const value = hit && typeof hit.value === 'string' ? hit.value.trim() : ''
        if (value) return value
      } catch {
        // next ref
      }
    }
    return undefined
  }
}
