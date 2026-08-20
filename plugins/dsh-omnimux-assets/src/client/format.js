/**
 * Pure client-side formatting helpers.
 */

/**
 * @param {number} bytes
 * @returns {string}
 */
export function formatBytes(bytes) {
  const size = Number(bytes)
  if (!Number.isFinite(size) || size < 0) return '—'
  if (size < 1024) return `${size} B`
  const units = ['KB', 'MB', 'GB', 'TB']
  let value = size / 1024
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit += 1
  }
  return `${value >= 10 ? value.toFixed(0) : value.toFixed(1)} ${units[unit]}`
}

/**
 * Locale-aware relative time; falls back to a local date-time string.
 * @param {string} iso
 * @param {number} [now]
 */
export function formatRelative(iso, now = Date.now()) {
  const time = Date.parse(iso)
  if (!Number.isFinite(time)) return ''
  const deltaSec = Math.round((time - now) / 1000)
  const abs = Math.abs(deltaSec)
  if (abs >= 86400 * 30) return new Date(time).toLocaleString()
  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })
  if (abs < 60) return rtf.format(Math.trunc(deltaSec), 'second')
  if (abs < 3600) return rtf.format(Math.trunc(deltaSec / 60), 'minute')
  if (abs < 86400) return rtf.format(Math.trunc(deltaSec / 3600), 'hour')
  return rtf.format(Math.trunc(deltaSec / 86400), 'day')
}

/**
 * Locale-aware absolute date-time.
 * @param {string} iso
 */
export function formatDateTime(iso) {
  const time = Date.parse(iso)
  if (!Number.isFinite(time)) return ''
  return new Date(time).toLocaleString()
}

const TYPE_BY_EXT = {
  image: new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.ico', '.avif', '.heic', '.tiff']),
  video: new Set(['.mp4', '.mov', '.avi', '.mkv', '.webm', '.m4v', '.flv']),
  audio: new Set(['.mp3', '.wav', '.aac', '.flac', '.ogg', '.m4a', '.aiff']),
  document: new Set(['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.md', '.csv', '.rtf']),
  html: new Set(['.html', '.htm']),
  json: new Set(['.json', '.jsonl', '.ndjson']),
}

/**
 * Client-side copy of the extension → type-bucket mapping (the host scanner
 * already tags rows; this covers client-only cases such as chips).
 * @param {string} ext lowercase extension including the dot
 * @returns {'image' | 'video' | 'audio' | 'document' | 'html' | 'json' | 'other'}
 */
export function extToBucket(ext) {
  for (const [bucket, exts] of Object.entries(TYPE_BY_EXT)) {
    if (exts.has(ext)) return /** @type {any} */ (bucket)
  }
  return 'other'
}

/**
 * @param {string} type
 */
export function bucketLabelKey(type) {
  return `type.${type}`
}
