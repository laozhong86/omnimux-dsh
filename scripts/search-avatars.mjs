async function searchAvatarAcrossDb() {
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const tables = ['profiles', 'publications', 'ai_influencer_reference_images', 'users', 'social_publications']

  for (const table of tables) {
    try {
      const url = `http://127.0.0.1:54321/rest/v1/${table}?select=*&limit=5`
      const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
      if (resp.ok) {
        const rows = await resp.json()
        if (rows && rows.length > 0) {
          console.log(`\nTable [${table}] sample keys:`, Object.keys(rows[0]))
          console.log(`Sample row:`, JSON.stringify(rows[0]).slice(0, 300))
        }
      }
    } catch (e) {
      // ignore
    }
  }
}
searchAvatarAcrossDb()
