async function listAllTables() {
  const url = 'http://127.0.0.1:54321/rest/v1/'
  const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
  const resp = await fetch(url, { headers: { apikey: key, authorization: 'Bearer ' + key } })
  const schema = await resp.json()
  console.log('Available tables in Gxgen:', Object.keys(schema.definitions || {}))
}
listAllTables()
