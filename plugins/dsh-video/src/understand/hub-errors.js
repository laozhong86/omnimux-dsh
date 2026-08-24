import { VideoError } from '../errors.js'

/**
 * Map hub / OmnimuxError-like failures onto VideoError codes.
 * @param {unknown} error
 * @param {string} [fallbackCode]
 */
export function mapHubError(error, fallbackCode = 'video-analyze-failed') {
  if (error instanceof VideoError) return error
  const code = error && typeof error === 'object' && 'code' in error
    ? String(/** @type {{ code?: unknown }} */ (error).code || '')
    : ''
  const message = error instanceof Error ? error.message : String(error)
  if (code === 'needs-provider' || code === 'needs-omnimux' || code === 'omnimux-unconfigured') {
    return new VideoError(code === 'omnimux-unconfigured' ? 'needs-omnimux' : code, message)
  }
  if (code === 'omnimux-invalid-request' && /does not accept video input/i.test(message)) {
    return new VideoError('video-understand-unsupported', message)
  }
  if (code === 'unknown-model' || code === 'omnimux-invalid-request') {
    return new VideoError('video-invalid-input', message)
  }
  return new VideoError(fallbackCode, message)
}
