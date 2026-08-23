/**
 * omnimux-analytics — OmniMux plugin usage analytics.
 *
 * One host-side hook plugin that reports the usage of ALL product plugins to
 * the shared Umami instance (same backend as OmniMux's own website analytics).
 *
 * It observes the global tool pipeline:
 * - `tools/execute` marks the start time of every dispatch;
 * - `tools/result` watches the immutable final outcome (observe-only) and
 *   reports name/outcome/duration — NEVER arguments, prompts, or content;
 * - `agent/session-start` reports sessions.
 *
 * Attribution uses a configurable tool-name prefix map (see src/mapper.js);
 * unlisted tools land in `other` instead of being lost.
 *
 * Events are buffered and flushed to `${umamiUrl}/api/send` with bounded
 * concurrency; failures never propagate into the tool pipeline.
 */

import { createRequire } from 'node:module'
import { parseAnalyticsConfig, Config } from './config.js'
import { resolvePlugin } from './mapper.js'
import { createEventQueue } from './queue.js'

const require = createRequire(import.meta.url)
/** @type {{ version: string }} */
const PACKAGE = require('../package.json')

export const name = 'omnimux-analytics'

export { Config }

/**
 * Marker map for dispatch duration. Guarded against unbounded growth when a
 * call never reaches `tools/result`.
 * @type {Map<symbol | object, number>}
 */
const START_MARKER_CAP = 10000

/**
 * @param {{
 *   on: (event: string, listener: (...args: any[]) => unknown) => unknown,
 *   effect?: (fn: () => unknown, label?: string) => unknown,
 * }} ctx
 * @param {unknown} config
 */
export function apply(ctx, config) {
  const cfg = parseAnalyticsConfig(config ?? {})
  if (!cfg.enabled) {
    if (!cfg.websiteId) {
      // Default (unconfigured) state: warn, do not crash the profile.
      console.warn(`[omnimux-analytics] disabled: set config.websiteId (see README.md) to enable usage analytics`)
    }
    return
  }

  const queue = createEventQueue({
    umamiUrl: cfg.umamiUrl,
    websiteId: cfg.websiteId,
    hostname: cfg.hostname,
    flushIntervalMs: cfg.flushIntervalMs,
    maxQueue: cfg.maxQueue,
    sampleRate: cfg.sampleRate,
  })

  // Once per process: the plugin set is loaded.
  queue.push({ name: cfg.loadEventName, data: { plugin: name, version: PACKAGE.version } })

  /** @type {Map<symbol | object, number>} */
  const startedAt = new Map()

  ctx.on('tools/execute', async (exec, next) => {
    if (startedAt.size >= START_MARKER_CAP) startedAt.clear()
    startedAt.set(exec.token, Date.now())
    return next()
  })

  ctx.on('tools/result', (exec, result) => {
    if (!cfg.trackSubCalls && exec.parent) return
    const started = startedAt.get(exec.token)
    startedAt.delete(exec.token)

    const data = {
      plugin: resolvePlugin(exec.name, cfg.pluginMap),
      tool: exec.name,
      isError: Boolean(result.isError),
    }
    if (started !== undefined) data.durationMs = Date.now() - started
    const agent = exec.agent?.name ?? exec.agent?.id
    if (agent) data.agent = agent
    if (result.isError) {
      const info = result.error?.info
      // Error names/codes only — never the message (may echo call input).
      if (info?.name) data.errorName = info.name
      if (info?.code) data.errorCode = info.code
    }
    queue.push({ name: cfg.toolEventName, data })
  })

  if (cfg.trackSessions) {
    ctx.on('agent/session-start', ({ agent, source }) => {
      const data = { agent: agent?.name ?? agent?.id ?? 'unknown' }
      const sourceKind = source && (source.kind ?? source.type)
      if (sourceKind) data.source = String(sourceKind)
      queue.push({ name: cfg.sessionEventName, data })
    })
  }

  ctx.effect?.(() => queue.dispose(), 'omnimux-analytics: dispose event queue')
}
