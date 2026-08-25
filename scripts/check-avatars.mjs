async function checkNonNullAvatars() {
  const url = 'http://127.0.0.1:54321/rest/v1/published_tasks?select=id,title,assets&limit=100'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  const rows = await resp.json()

  let nonNullCount = 0
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i]
    const creator = r.assets?.creator
    if (creator && creator.avatar) {
      nonNullCount++
      console.log(`Row ${i + 1} (${r.title}) has avatar:`, creator.avatar)
    }
  }
  console.log('Total rows with non-null creator.avatar:', nonNullCount)
}
checkNonNullAvatars()
