/**
 * Analytics dashboard fetch. Phase 3 consumes the local mock fixture by
 * default (`USE_MOCK=true`). Field names match the future Host aggregation
 * (`GET /omnimux/analytics/overview` + insights + followers + posts) so
 * flipping the switch does not rename anything.
 */
import { USE_MOCK } from './defaults.js'
import { applyDashboardQuery, materializeFixture } from './query.js'
import fixture from './mock/dashboard-fixture.json' with { type: 'json' }
import emptyStates from './mock/empty-states.json' with { type: 'json' }

export const HOST_PATHS = Object.freeze({
  overview: '/omnimux/analytics/overview',
  insights: '/omnimux/analytics/insights',
  followers: '/omnimux/analytics/followers',
  posts: '/omnimux/analytics/posts',
  sync: '/omnimux/analytics/sync',
})

const MOCK_LATENCY_MS = 40
const SYNC_LATENCY_MS = 800

/**
 * @param {string} path
 * @param {{ method?: string, body?: unknown, query?: Record<string, string> }} [opts]
 */
export async function analyticsRequest(path, opts = {}) {
  const url = opts.query
    ? `${path}?${new URLSearchParams(opts.query).toString()}`
    : path
  const response = await fetch(url, {
    method: opts.method ?? 'GET',
    headers: opts.body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
  })
  let json = {}
  try {
    json = await response.json()
  } catch {
    json = { error: `HTTP ${String(response.status)}` }
  }
  return { ok: response.ok, status: response.status, body: json }
}

/**
 * Wrap a Host write so a 401 pops the hub login gate, then replays once.
 * Mirrors omnimux-accounts `authGuard`.
 * @param {(...args: any[]) => Promise<{ ok: boolean, status: number, body: any }>} fn
 */
export function authGuard(fn) {
  return (...args) => {
    const run = async () => {
      const result = await fn(...args)
      if (result.status !== 401) return result
      const gate = typeof window !== 'undefined' ? /** @type {any} */ (window).__omnimuxAuth : undefined
      if (!gate || typeof gate.ensureLogin !== 'function') return result
      return new Promise((resolve, reject) => {
        gate.ensureLogin({
          onSuccess: () => { fn(...args).then(resolve, reject) },
          onCancel: () => resolve(result),
        })
      })
    }
    return run()
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * @param {Partial<{ tab: string, platform: string, profileId: string, source: string, timeRange: string, searchQuery: string }>} query
 * @param {{ now?: number, variant?: string }} [opts]
 */
export async function fetchDashboardMock(query = {}, opts = {}) {
  await wait(MOCK_LATENCY_MS)
  const variant = opts.variant
  let raw = fixture
  if (variant && emptyStates.variants?.[variant]) {
    const pack = emptyStates.variants[variant]
    raw = pack.meta ? pack : { ...fixture, ...pack, emptyState: pack.emptyState ?? fixture.emptyState }
    if (pack.kpiOverrides) raw = { ...raw, kpi: { ...raw.kpi, ...pack.kpiOverrides } }
    if (pack.syncStatusPatch) raw = { ...raw, syncStatus: { ...raw.syncStatus, ...pack.syncStatusPatch } }
  }
  const materialized = materializeFixture(raw, opts.now ?? Date.now())
  return applyDashboardQuery(materialized, query)
}

/**
 * Live Host fetch. Kept behind USE_MOCK; same field names as the mock.
 * @param {Record<string, string>} query
 */
export async function fetchDashboardLive(query) {
  const params = {
    platform: query.platform ?? 'all',
    profileId: query.profileId ?? 'all',
    source: query.source ?? 'all',
    timeRange: query.timeRange ?? '30d',
  }
  const guarded = authGuard(analyticsRequest)
  const [overview, insights, followers, posts] = await Promise.all([
    guarded(HOST_PATHS.overview, { query: params }),
    guarded(HOST_PATHS.insights, { query: params }),
    guarded(HOST_PATHS.followers, { query: params }),
    guarded(HOST_PATHS.posts, { query: params }),
  ])
  const firstFail = [overview, insights, followers, posts].find((r) => !r.ok)
  if (firstFail) {
    const error = new Error(String(firstFail.body?.error || `HTTP ${firstFail.status}`))
    error.status = firstFail.status
    throw error
  }
  const payload = {
    ...overview.body,
    heatmap: insights.body?.heatmap ?? overview.body?.heatmap,
    strategy: insights.body?.strategy ?? overview.body?.strategy,
    followerEvolution: followers.body?.followerEvolution ?? overview.body?.followerEvolution,
    topPosts: posts.body?.topPosts ?? overview.body?.topPosts,
  }
  return applyDashboardQuery(payload, query)
}

/**
 * @param {Partial<{ tab: string, platform: string, profileId: string, source: string, timeRange: string, searchQuery: string }>} query
 * @param {{ now?: number, variant?: string, useMock?: boolean }} [opts]
 */
export async function fetchDashboard(query = {}, opts = {}) {
  const useMock = opts.useMock ?? USE_MOCK
  if (useMock) return fetchDashboardMock(query, opts)
  return fetchDashboardLive(query)
}

/**
 * Incremental sync. Mock path waits 800ms then returns a fresh payload
 * (contract: "立即同步成功后 800ms 内刷新大盘").
 * @param {Partial<{ tab: string, platform: string, profileId: string, source: string, timeRange: string, searchQuery: string }>} query
 * @param {{ now?: number, useMock?: boolean }} [opts]
 */
export async function syncNow(query = {}, opts = {}) {
  const useMock = opts.useMock ?? USE_MOCK
  if (useMock) {
    await wait(SYNC_LATENCY_MS)
    const payload = await fetchDashboardMock(query, { now: opts.now ?? Date.now() })
    const now = opts.now ?? Date.now()
    payload.syncStatus = {
      ...payload.syncStatus,
      lastSyncedAt: now,
      nextSyncAt: now + (payload.syncStatus?.syncIntervalMs ?? 3_600_000),
      syncing: false,
      lastError: null,
    }
    return payload
  }
  const result = await authGuard(analyticsRequest)(HOST_PATHS.sync, { method: 'POST', body: query })
  if (!result.ok) {
    const error = new Error(String(result.body?.error || `HTTP ${result.status}`))
    error.status = result.status
    throw error
  }
  return fetchDashboardLive(query)
}

export { fixture as DASHBOARD_FIXTURE, emptyStates as EMPTY_STATE_FIXTURES }
