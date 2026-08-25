/**
 * Client-side dashboard defaults. Host Config stays Umami-only in Phase 2 —
 * these values are the Phase-1 contract defaults the Stage store will consume.
 * Phase 3 replaces USE_MOCK with Host `/omnimux/analytics/*` without renaming fields.
 */
export const STAGE_ID = 'omnimux-analytics'
export const SLOT_ID = 'omnimux-analytics-stage'
export const SIDEBAR_RANK = 4.5 // Directly below 创作 (omnimux-workflow rank 4)
export const OVERLAY_ORDER = 22

export const USE_MOCK = true
export const CACHE_TTL_MS = 5000
export const FILTER_DEBOUNCE_MS = 300

/** @type {Readonly<{ tab: 'posting' | 'inbox', platform: 'all' | string, profileId: 'all' | string, source: 'all' | 'manual' | 'omnimux', timeRange: '7d' | '30d' | '90d', searchQuery: string }>} */
export const DEFAULT_QUERY = Object.freeze({
  tab: 'posting',
  platform: 'all',
  profileId: 'all',
  source: 'all',
  timeRange: '30d',
  searchQuery: '',
})
