async function inspectAllFields() {
  const url = 'http://127.0.0.1:54321/rest/v1/published_tasks?select=*&limit=100'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  const rows = await resp.json()

  console.log('Total rows:', rows.length)
  for (let i = 0; i < Math.min(15, rows.length); i++) {
    const r = rows[i]
    console.log(`\nRow ${i + 1}:`)
    console.log('  id:', r.id)
    console.log('  task_id:', r.task_id)
    console.log('  title:', r.title)
    console.log('  source_url:', r.source_url)
    console.log('  source_type:', r.source_type)
    console.log('  platform:', r.platform || r.assets?.platform)
    console.log('  assets keys:', Object.keys(r.assets || {}))
    console.log('  raw_source:', JSON.stringify(r.assets?.raw_source))
    console.log('  meta:', JSON.stringify(r.assets?.meta))
    console.log('  outputs:', JSON.stringify(r.assets?.outputs))
    console.log('  cover_url:', r.assets?.cover_url)
    console.log('  cover_r2_key:', r.assets?.cover_r2_key)
  }
}
inspectAllFields()
