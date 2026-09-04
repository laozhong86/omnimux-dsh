const IMAGE = new Set(['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'])
const VIDEO = new Set(['mp4', 'webm', 'mov'])
const AUDIO = new Set(['mp3', 'wav', 'm4a', 'aac'])
const TABLE = new Set(['htable', 'csv', 'xlsx'])

/**
 * @param {string} [ext]
 */
export function inferKindFromExtension(ext) {
  const lower = String(ext || '').replace(/^\./, '').toLowerCase()
  if (IMAGE.has(lower)) return 'image'
  if (VIDEO.has(lower)) return 'video'
  if (AUDIO.has(lower)) return 'audio'
  if (TABLE.has(lower)) return 'table'
  return 'document'
}

/**
 * @param {string} title
 * @param {string} [relativePath]
 */
export function inferKindFromName(title, relativePath) {
  const target = relativePath || title || ''
  const match = target.match(/\.([a-zA-Z0-9_-]+)$/)
  return inferKindFromExtension(match?.[1] || '')
}

export const ASSET_CATEGORIES = Object.freeze([
  'character',
  'scene',
  'style',
  'prop',
  'knowledge',
  'custom',
])

export const MAX_ATTACHMENTS = 8

/**
 * @param {{ occupied: number, selectedCount: number, remaining?: number }} state
 */
export function remainingQuota(state) {
  const occupied = Number(state.occupied) || 0
  const selected = Number(state.selectedCount) || 0
  const cap = MAX_ATTACHMENTS
  const remaining = Math.max(0, cap - occupied - selected)
  return {
    remaining,
    canSelectMore: remaining > 0,
    overLimit: occupied + selected > cap,
  }
}

/**
 * @param {Set<string> | string[]} alreadyIds
 * @param {string} assetId
 */
export function isAlreadyAdded(alreadyIds, assetId) {
  if (!assetId) return false
  if (alreadyIds instanceof Set) return alreadyIds.has(assetId)
  return Array.isArray(alreadyIds) && alreadyIds.includes(assetId)
}

/**
 * Toggle one id against remaining quota. Already-added ids cannot be newly selected.
 * @param {{
 *   selected: Set<string>,
 *   id: string,
 *   occupied: number,
 *   alreadyIds?: Set<string> | string[],
 * }} opts
 */
export function toggleSelect(opts) {
  const next = new Set(opts.selected)
  const already = isAlreadyAdded(opts.alreadyIds || [], opts.id)
  if (already) return { selected: next, blocked: 'already-added' }
  if (next.has(opts.id)) {
    next.delete(opts.id)
    return { selected: next, blocked: null }
  }
  const quota = remainingQuota({ occupied: opts.occupied, selectedCount: next.size })
  if (quota.remaining <= 0) {
    return { selected: next, blocked: 'quota-exceeded' }
  }
  next.add(opts.id)
  return { selected: next, blocked: null }
}
