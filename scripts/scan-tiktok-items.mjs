async function scanTikTokItems() {
  const url = 'http://127.0.0.1:54321/rest/v1/published_tasks?select=*&limit=100'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  const rows = await resp.json()

  console.log('Total rows in Gxgen:', rows.length)

  const items = []
  for (const r of rows) {
    const assets = r.assets || {}
    const rawSource = assets.raw_source || {}
    const meta = assets.meta || {}
    const an = assets.analysis || {}

    // Extract TikTok video ID and URL
    let tiktokId = assets.tiktok_video_id || rawSource.tiktok_video_id
    let account = assets.creator?.handle || rawSource.account || meta.nickname || 'tiktok'

    if (!tiktokId && typeof rawSource.id === 'string') {
      const match = rawSource.id.match(/video-(\d+)/) || rawSource.id.match(/(\d{15,22})/)
      if (match) tiktokId = match[1]
    }

    if (!tiktokId && typeof rawSource.videoUrl === 'string' && rawSource.videoUrl.includes('tiktok')) {
      const match = rawSource.videoUrl.match(/video\/(\d+)/)
      if (match) tiktokId = match[1]
    }

    const hasAnalysis = Boolean(an.attraction_analysis || an.global_goal || an.narrative_structure || an.visual_analysis || an.replication_strategy)

    if (tiktokId && hasAnalysis) {
      const tiktokUrl = `https://www.tiktok.com/@${account}/video/${tiktokId}`
      const poster = rawSource.posterUrl || assets.cover_url || assets.cover_r2_key || (assets.outputs?.[0]?.r2_key ? `https://assets-stg.geminix.cc/${assets.outputs[0].r2_key}` : null)
      items.push({
        id: r.id,
        title: r.title || an.video_name || rawSource.title,
        tiktokId,
        tiktokUrl,
        account,
        poster,
        r2_key: assets.outputs?.[0]?.r2_key || assets.outputs?.[0],
        analysis: an,
      })
    }
  }

  console.log(`\nFiltered TikTok items with analysis: ${items.length}`)
  for (let i = 0; i < items.length; i++) {
    const it = items[i]
    console.log(`[${i + 1}] ID: ${it.id}`)
    console.log(`    Title: ${it.title}`)
    console.log(`    TikTok: ${it.tiktokUrl}`)
    console.log(`    Poster: ${it.poster}`)
    console.log(`    R2 Key: ${it.r2_key}`)
  }
}
scanTikTokItems()
