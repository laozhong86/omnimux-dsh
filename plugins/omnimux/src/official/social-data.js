import { OmnimuxError } from '../media/errors.js'

/** Complete catalog. Model ids match OmniMux social-data L3 pages. */
export const SOCIAL_DATA_CATALOG = Object.freeze({
  tiktok: Object.freeze({
    video: 'tiktok-video',
    user: 'tiktok-user',
    posts: 'tiktok-posts',
    search: 'tiktok-search',
  }),
  instagram: Object.freeze({
    post: 'instagram-post',
    user: 'instagram-user',
    posts: 'instagram-posts',
    search: 'instagram-search',
  }),
  youtube: Object.freeze({
    video: 'youtube-video',
    user: 'youtube-user',
    posts: 'youtube-posts',
    search: 'youtube-search',
  }),
  x: Object.freeze({
    tweet: 'x-tweet',
    user: 'x-user',
    posts: 'x-posts',
    search: 'x-search',
  }),
})

/**
 * Official docs put business params as top-level Chat Completions body fields
 * (not inside `messages`). Values come from tool `url` / `id` / `query`.
 */
export const SOCIAL_DATA_BUSINESS_FIELDS = Object.freeze({
  'tiktok/video': 'aweme_id',
  'tiktok/user': 'uniqueId',
  'tiktok/posts': 'unique_id',
  'tiktok/search': 'keyword',
  'instagram/post': 'url',
  'instagram/user': 'username',
  'instagram/posts': 'username',
  'instagram/search': 'query',
  'youtube/video': 'video_id',
  'youtube/user': 'channel_id',
  'youtube/posts': 'channel_id',
  'youtube/search': 'search_query',
  'x/tweet': 'tweet_id',
  'x/user': 'screen_name',
  'x/posts': 'screen_name',
  'x/search': 'keyword',
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
  const field = SOCIAL_DATA_BUSINESS_FIELDS[`${platform}/${capability}`]
  if (!field) {
    throw new OmnimuxError(
      'omnimux-invalid-request',
      `missing business field mapping for ${platform}/${capability}`,
    )
  }
  const value = resolveBusinessValue({ platform, capability, field, args })
  if (!value) {
    throw new OmnimuxError(
      'omnimux-invalid-request',
      `url, id, or query is required for ${platform}/${capability} (maps to ${field})`,
    )
  }
  return { model, platform, capability, field, value }
}

/**
 * @param {{
 *   platform: string,
 *   capability: string,
 *   field: string,
 *   args: { id?: string, url?: string, query?: string },
 * }} input
 */
export function resolveBusinessValue(input) {
  const id = String(input.args.id || '').trim()
  const url = String(input.args.url || '').trim()
  const query = String(input.args.query || '').trim()
  const { platform, capability, field } = input

  if (field === 'url') return url || id || ''
  if (field === 'query' || field === 'keyword' || field === 'search_query') {
    return query || id || url || ''
  }

  if (platform === 'x' && capability === 'tweet') {
    return extractTweetId(id) || extractTweetId(url) || id || ''
  }
  if (platform === 'tiktok' && capability === 'video') {
    return extractDigitsId(id) || extractTikTokAwemeId(url) || id || ''
  }
  if (platform === 'youtube' && capability === 'video') {
    return extractYouTubeVideoId(id) || extractYouTubeVideoId(url) || id || ''
  }

  // profile / channel style fields prefer bare id, then url/query fallback
  return id || query || url || ''
}

/**
 * @param {string} value
 */
export function extractTweetId(value) {
  const raw = String(value || '').trim()
  if (!raw) return ''
  if (/^\d{5,}$/.test(raw)) return raw
  const match = raw.match(/(?:x\.com|twitter\.com)\/[^/]+\/status\/(\d+)/i)
  return match?.[1] || ''
}

/**
 * @param {string} value
 */
export function extractTikTokAwemeId(value) {
  const raw = String(value || '').trim()
  if (!raw) return ''
  if (/^\d{5,}$/.test(raw)) return raw
  const match = raw.match(/\/video\/(\d+)/i)
  return match?.[1] || ''
}

/**
 * @param {string} value
 */
export function extractYouTubeVideoId(value) {
  const raw = String(value || '').trim()
  if (!raw) return ''
  if (/^[\w-]{6,}$/.test(raw) && !raw.includes('://')) return raw
  try {
    const u = new URL(raw)
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.replace(/^\//, '').split('/')[0] || ''
    }
    const v = u.searchParams.get('v')
    if (v) return v
    const parts = u.pathname.split('/').filter(Boolean)
    const embedIdx = parts.findIndex((p) => p === 'embed' || p === 'shorts' || p === 'live')
    if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1]
  } catch {
    return ''
  }
  return ''
}

/**
 * @param {string} value
 */
function extractDigitsId(value) {
  const raw = String(value || '').trim()
  return /^\d{5,}$/.test(raw) ? raw : ''
}

/**
 * @param {{ withSk: Function }} client
 * @param {{ platform?: string, capability?: string, id?: string, url?: string, query?: string }} args
 */
export async function fetchSocialData(client, args) {
  const { model, platform, capability, field, value } = resolveSocialDataModel(args)
  const raw = await client.withSk('/v1/chat/completions', {
    method: 'POST',
    body: {
      model,
      messages: [{ role: 'user', content: '.' }],
      [field]: value,
    },
  })
  return {
    platform,
    capability,
    model,
    field,
    value,
    data: pickSocialPayload(raw),
  }
}

/**
 * Live OmniMux social-data often returns a TikHub-style envelope `{ code, data }`
 * rather than OpenAI `choices[].message.content`. Prefer `data`, then chat JSON.
 * @param {unknown} raw
 */
export function pickSocialPayload(raw) {
  const row = raw && typeof raw === 'object' ? /** @type {Record<string, unknown>} */ (raw) : {}
  if (row.data && typeof row.data === 'object') return row.data

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
  return { text: null }
}
