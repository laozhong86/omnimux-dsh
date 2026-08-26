/**
 * Fallback direct resolver for social media video links (TikTok, etc.)
 * Provides resilient extraction when cloud gateway upstream scraper encounters 422/rate-limits.
 * @param {{ platform: string, capability?: string, url: string }} params
 */
export async function fallbackResolveSocial({ platform, capability = 'video', url }) {
  if (!url || typeof url !== 'string') return null

  // 1. TikTok video resolution
  if (platform === 'tiktok' || /tiktok\.com/i.test(url)) {
    try {
      const resp = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      })
      if (resp.ok) {
        const json = await resp.json()
        if (json && json.data) {
          const d = json.data
          const videoUrl = d.play || d.wmplay || d.hdplay || (Array.isArray(d.videos) ? d.videos[0] : '')
          if (videoUrl) {
            return {
              platform: 'tiktok',
              capability: 'video',
              data: {
                title: d.title || url,
                text: d.title || '',
                cover_url: d.cover || d.origin_cover || '',
                video_url: videoUrl,
                author: d.author ? {
                  id: String(d.author.id || ''),
                  handle: String(d.author.unique_id || ''),
                  name: String(d.author.nickname || ''),
                  avatar: String(d.author.avatar || ''),
                } : {},
                stats: {
                  likes: Number(d.digg_count) || 0,
                  comments: Number(d.comment_count) || 0,
                  shares: Number(d.share_count) || 0,
                  views: Number(d.play_count) || 0,
                },
              },
            }
          }
        }
      }
    } catch {}

    // Fallback to TikTok oEmbed for title & cover
    try {
      const oembed = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`)
      if (oembed.ok) {
        const json = await oembed.json()
        if (json && json.title) {
          return {
            platform: 'tiktok',
            capability: 'video',
            data: {
              title: json.title,
              text: json.title,
              cover_url: json.thumbnail_url || '',
              video_url: '',
              author: {
                name: json.author_name || '',
                handle: json.author_unique_id || '',
              },
            },
          }
        }
      }
    } catch {}
  }

  return null
}
