/**
 * Normalizes URLs and extracts platform-specific canonical keys
 * to prevent duplicate social media inspirations.
 */

const TRACKING_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  'igsh',
  'is_from_webapp',
  'sender_device',
  'sender_web_id',
  'feature',
  'si',
  't',
  's',
  'ref',
  'source',
  'share_app_id',
  'share_item_id',
  'share_link_id',
])

/**
 * Clean tracking query parameters and lowercase domain.
 * @param {string} rawUrl
 * @returns {string}
 */
export function normalizeUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return ''
  const trimmed = rawUrl.trim()
  try {
    const parsed = new URL(trimmed)
    parsed.hash = ''
    parsed.protocol = parsed.protocol.toLowerCase()
    parsed.hostname = parsed.hostname.toLowerCase()

    // Canonicalize common host aliases
    if (parsed.hostname === 'twitter.com' || parsed.hostname === 'www.twitter.com' || parsed.hostname === 'mobile.twitter.com') {
      parsed.hostname = 'x.com'
    }
    if (parsed.hostname === 'www.x.com' || parsed.hostname === 'mobile.x.com') {
      parsed.hostname = 'x.com'
    }
    if (parsed.hostname === 'm.tiktok.com' || parsed.hostname === 'vt.tiktok.com' || parsed.hostname === 'vm.tiktok.com') {
      // keep subdomain if shortlink, but clean query
    }

    const paramsToRemove = []
    for (const key of parsed.searchParams.keys()) {
      if (TRACKING_PARAMS.has(key.toLowerCase()) || key.toLowerCase().startsWith('utm_')) {
        paramsToRemove.push(key)
      }
    }
    for (const key of paramsToRemove) {
      parsed.searchParams.delete(key)
    }

    // Remove trailing slash from pathname if not root
    if (parsed.pathname.length > 1 && parsed.pathname.endsWith('/')) {
      parsed.pathname = parsed.pathname.slice(0, -1)
    }

    return parsed.toString()
  } catch {
    return trimmed.replace(/[?#].*$/, '').replace(/\/+$/, '')
  }
}

/**
 * Extract platform and unique canonical key from social URL.
 * @param {string} rawUrl
 * @returns {{ platform: string, key: string, canonicalUrl: string }}
 */
export function getCanonicalItemKey(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return { platform: 'unknown', key: '', canonicalUrl: '' }
  const clean = normalizeUrl(rawUrl)

  // 1. TikTok video: /@user/video/(\d+) or /v/(\d+)
  const tiktokMatch = clean.match(/tiktok\.com\/(?:@[^/]+\/video|v)\/(\d{15,25})/i)
  if (tiktokMatch && tiktokMatch[1]) {
    return {
      platform: 'tiktok',
      key: `tiktok:video:${tiktokMatch[1]}`,
      canonicalUrl: `https://www.tiktok.com/@creator/video/${tiktokMatch[1]}`,
    }
  }

  // 2. Instagram: /reel/([a-zA-Z0-9_-]+) or /p/([a-zA-Z0-9_-]+) or /reels/([a-zA-Z0-9_-]+)
  const igMatch = clean.match(/instagram\.com\/(?:reel|reels|p)\/([a-zA-Z0-9_-]+)/i)
  if (igMatch && igMatch[1]) {
    return {
      platform: 'instagram',
      key: `instagram:media:${igMatch[1]}`,
      canonicalUrl: `https://www.instagram.com/p/${igMatch[1]}`,
    }
  }

  // 3. YouTube: /watch?v=(ID) or youtu.be/(ID) or /shorts/(ID)
  const ytMatch = clean.match(/(?:youtube\.com\/(?:watch\?.*v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i)
  if (ytMatch && ytMatch[1]) {
    return {
      platform: 'youtube',
      key: `youtube:video:${ytMatch[1]}`,
      canonicalUrl: `https://www.youtube.com/watch?v=${ytMatch[1]}`,
    }
  }

  // 4. X / Twitter: /user/status/(\d+)
  const xMatch = clean.match(/(?:x\.com|twitter\.com)\/[^/]+\/status\/(\d+)/i)
  if (xMatch && xMatch[1]) {
    return {
      platform: 'x',
      key: `x:tweet:${xMatch[1]}`,
      canonicalUrl: `https://x.com/i/status/${xMatch[1]}`,
    }
  }

  // Generic fallback
  return {
    platform: 'unknown',
    key: `url:${clean}`,
    canonicalUrl: clean,
  }
}

/**
 * Check if two URLs represent the exact same social media content.
 * @param {string} urlA
 * @param {string} urlB
 * @returns {boolean}
 */
export function isSameSocialContent(urlA, urlB) {
  if (!urlA || !urlB) return false
  if (urlA.trim() === urlB.trim()) return true

  const keyA = getCanonicalItemKey(urlA)
  const keyB = getCanonicalItemKey(urlB)

  if (keyA.key && keyB.key && keyA.key === keyB.key) {
    return true
  }

  return normalizeUrl(urlA) === normalizeUrl(urlB)
}
