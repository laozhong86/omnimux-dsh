async function checkOtherTables() {
  const url = 'http://127.0.0.1:54321/rest/v1/publications?select=id,title,assets&limit=10'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  if (resp.ok) {
    const rows = await resp.json()
    console.log('Publications rows:', rows.length)
  }
}
checkOtherTables()
