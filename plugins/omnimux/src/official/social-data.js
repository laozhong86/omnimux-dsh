import { OmnimuxError } from '../media/errors.js'

/** First-cut catalog. Model ids match OmniMux social-data L3 pages. */
export const SOCIAL_DATA_CATALOG = Object.freeze({
  tiktok: Object.freeze({
    video: 'tiktok-video',
    user: 'tiktok-user',
  }),
  instagram: Object.freeze({
    post: 'instagram-post',
  }),
})

/**
 * @param {{ platform?: string, capability?: string, id?: string, url?: string, query?: string }} args
 */
export function resolveSocialDataModel(args) {
  const platform = String(args.platform || '').trim()
  const capability = String(args.capability || '').trim()
  const model = SOCIAL_DATA_CATALOG[platform]?.[capability]
  if (!model) {
    throw new OmnimuxError(
      'omnimux-invalid-request',
      `unsupported social data pair ${platform || '?'}/${capability || '?'}`,
    )
  }
  const content = String(args.url || args.id || args.query || '').trim()
  if (!content) {
    throw new OmnimuxError('omnimux-invalid-request', 'url, id, or query is required')
  }
  return { model, content, platform, capability }
}

/**
 * @param {{ withSk: Function }} client
 * @param {{ platform?: string, capability?: string, id?: string, url?: string, query?: string }} args
 */
export async function fetchSocialData(client, args) {
  const { model, content, platform, capability } = resolveSocialDataModel(args)
  const raw = await client.withSk('/v1/chat/completions', {
    method: 'POST',
    body: {
      model,
      messages: [{ role: 'user', content }],
    },
  })
  return {
    platform,
    capability,
    model,
    data: pickSocialPayload(raw),
  }
}

/**
 * @param {unknown} raw
 */
export function pickSocialPayload(raw) {
  const row = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {}
  const choices = Array.isArray(row.choices) ? row.choices : []
  const message = choices[0] && typeof choices[0] === 'object'
    ? /** @type {Record<string, unknown>} */ (choices[0]).message
    : undefined
  const content = message && typeof message === 'object'
    ? /** @type {Record<string, unknown>} */ (message).content
    : undefined
  if (typeof content === 'string' && content.trim()) {
    try {
      return JSON.parse(content)
    } catch {
      return { text: content }
    }
  }
  if (row.data && typeof row.data === 'object') return row.data
  return { text: null }
}
