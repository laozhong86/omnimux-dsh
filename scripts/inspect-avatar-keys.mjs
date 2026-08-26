async function inspectAllKeys() {
  const url = 'http://127.0.0.1:54321/rest/v1/published_tasks?select=id,title,assets&limit=100'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  const rows = await resp.json()

  const creatorKeys = new Set()
  const rawSourceKeys = new Set()
  const metaKeys = new Set()
  const assetKeys = new Set()

  for (const r of rows) {
    const assets = r.assets || {}
    Object.keys(assets).forEach((k) => assetKeys.add(k))
    if (assets.creator) Object.keys(assets.creator).forEach((k) => creatorKeys.add(k))
    if (assets.raw_source) Object.keys(assets.raw_source).forEach((k) => rawSourceKeys.add(k))
    if (assets.meta) Object.keys(assets.meta).forEach((k) => metaKeys.add(k))
  }

  console.log('assetKeys:', [...assetKeys])
  console.log('creatorKeys:', [...creatorKeys])
  console.log('rawSourceKeys:', [...rawSourceKeys])
  console.log('metaKeys:', [...metaKeys])

  // Sample creators
  for (let i = 0; i < 5; i++) {
    console.log(`Sample ${i + 1} creator:`, rows[i].assets?.creator)
    console.log(`Sample ${i + 1} raw_source:`, rows[i].assets?.raw_source)
  }
}
inspectAllKeys()
