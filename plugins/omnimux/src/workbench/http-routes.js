/**
 * HTTP Routes for Agent-Workbench sync:
 * - GET /omnimux/events/stream (SSE)
 * - POST /omnimux/workbench/viewport (client heartbeat)
 * - POST /omnimux/workbench/rpc/ack (RPC acknowledgement)
 */

import { assertLocalWrite } from '../apps/origin.js'

export function isLocalRequest(req) {
  const origin = req.headers?.origin || ''
  const referer = req.headers?.referer || ''
  const secFetchSite = req.headers?.['sec-fetch-site'] || ''

  if (secFetchSite === 'cross-site') return false

  const hostCandidate = origin || referer
  if (!hostCandidate) return true // local non-browser tool/curl

  try {
    const parsed = new URL(hostCandidate)
    const hostname = parsed.hostname.toLowerCase()
    return (
      hostname === '127.0.0.1' ||
      hostname === 'localhost' ||
      hostname === '::1' ||
      hostname === '[::1]'
    )
  } catch {
    return false
  }
}

export function registerWorkbenchHttpRoutes(webServer, deps) {
  const hubEvents = deps.hubEvents
  const mailbox = deps.mailbox

  // 1. SSE Stream: GET /omnimux/events/stream
  webServer.get('/omnimux/events/stream', (req, res) => {
    if (!isLocalRequest(req)) {
      res.writeHead(403, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ ok: false, error: 'not-local' }))
      return
    }

    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    })

    const lastEventId = req.headers['last-event-id']
    if (lastEventId && hubEvents) {
      const replay = hubEvents.getEventsSince(lastEventId)
      for (const ev of replay) {
        res.write(`id: ${ev.id}
event: ${ev.type}
data: ${JSON.stringify(ev.payload)}

`)
      }
    }

    // Heartbeat every 2s
    const pingTimer = setInterval(() => {
      res.write(`event: omnimux:heartbeat
data: ${JSON.stringify({ at: Date.now() })}

`)
    }, 2000)

    const unsubscribe = hubEvents?.subscribe((ev) => {
      res.write(`id: ${ev.id}
event: ${ev.type}
data: ${JSON.stringify(ev.payload)}

`)
    })

    req.on('close', () => {
      clearInterval(pingTimer)
      if (typeof unsubscribe === 'function') unsubscribe()
    })
  })

  // 2. Viewport Post: POST /omnimux/workbench/viewport
  webServer.post('/omnimux/workbench/viewport', async (req, res) => {
    try {
      assertLocalWrite(req)
    } catch {
      res.writeHead(403, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ ok: false, error: 'not-local' }))
      return
    }

    let body = req.body
    if (typeof body === 'string') {
      try { body = JSON.parse(body) } catch { body = null }
    }
    const result = mailbox.updateViewport(body)
    res.writeHead(result.ok ? 200 : 400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  })

  // 3. RPC Ack: POST /omnimux/workbench/rpc/ack
  webServer.post('/omnimux/workbench/rpc/ack', async (req, res) => {
    try {
      assertLocalWrite(req)
    } catch {
      res.writeHead(403, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ ok: false, error: 'not-local' }))
      return
    }

    let body = req.body
    if (typeof body === 'string') {
      try { body = JSON.parse(body) } catch { body = null }
    }
    const result = mailbox.handleRpcAck(body)
    res.writeHead(result.ok ? 200 : 400, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  })
}
