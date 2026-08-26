async function resolveAllCovers() {
  const url = 'http://127.0.0.1:54321/rest/v1/published_tasks?select=*&limit=100'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  const rows = await resp.json()

  const validItems = []

  for (const r of rows) {
    const assets = r.assets || {}
    const rawSource = assets.raw_source || {}
    const meta = assets.meta || {}
    const an = assets.analysis || {}

    // Extract TikTok video ID and URL
    let tiktokId = assets.tiktok_video_id || rawSource.tiktok_video_id
    let account = assets.creator?.handle || rawSource.account || meta.nickname

    if (!tiktokId && typeof rawSource.id === 'string') {
      const match = rawSource.id.match(/video-(\d+)/) || rawSource.id.match(/(\d{15,22})/)
      if (match) tiktokId = match[1]
    }

    if (!tiktokId && typeof rawSource.videoUrl === 'string' && rawSource.videoUrl.includes('tiktok')) {
      const match = rawSource.videoUrl.match(/video\/(\d+)/)
      if (match) tiktokId = match[1]
    }

    const hasAnalysis = Boolean(
      an.attraction_analysis &&
      an.global_goal &&
      an.narrative_structure &&
      an.visual_analysis &&
      an.replication_strategy
    )

    if (tiktokId && hasAnalysis) {
      if (!account || account === 'creator') account = 'tiktok'
      const tiktokUrl = `https://www.tiktok.com/@${account}/video/${tiktokId}`

      validItems.push({
        gxgenId: r.id,
        title: r.title || an.video_name || rawSource.title,
        tiktokId,
        tiktokUrl,
        account,
        analysis: an,
        assets,
      })
    }
  }

  console.log(`Found ${validItems.length} valid TikTok items with full 5D analysis in Gxgen`)

  for (let i = 0; i < Math.min(10, validItems.length); i++) {
    const item = validItems[i]
    try {
      const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(item.tiktokUrl)}`
      const oResp = await fetch(oembedUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } })
      if (oResp.ok) {
        const oJson = await oResp.json()
        item.thumbnail_url = oJson.thumbnail_url
        item.author_name = oJson.author_name
        console.log(`[${i + 1}] Resolved: ${item.title} -> Thumbnail: ${item.thumbnail_url?.slice(0, 80)}...`)
      } else {
        console.log(`[${i + 1}] Oembed status ${oResp.status} for ${item.tiktokUrl}`)
      }
    } catch (e) {
      console.log(`[${i + 1}] Oembed fetch error: ${e.message}`)
    }
  }
}
resolveAllCovers()
