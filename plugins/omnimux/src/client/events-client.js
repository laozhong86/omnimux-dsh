/**
 * OmniMux Events Client:
 * - Single EventSource connection to /omnimux/events/stream
 * - Watchdog health monitoring (5s silence -> unhealthy)
 * - Broadcasts events to subscribers and BroadcastChannel
 * - Drives RPC (omnimux:workbench:rpc) to window.__omnimuxWorkbench.open()
 * - Sends periodic viewport heartbeat to /omnimux/workbench/viewport
 */

export const HUB_EVENTS_GLOBAL_KEY = '__omnimuxHubEvents'
export const WATCHDOG_TIMEOUT_MS = 5000
export const HEARTBEAT_INTERVAL_MS = 2000

export function createEventsClient(options = {}) {
  const EventSourceImpl = options.EventSource || (typeof globalThis.EventSource !== 'undefined' ? globalThis.EventSource : null)
  const fetchImpl = options.fetch || (typeof globalThis.fetch !== 'undefined' ? globalThis.fetch : null)
  const getWorkbench = options.getWorkbench || (() => globalThis.window?.__omnimuxWorkbench)
  const streamUrl = options.streamUrl || '/omnimux/events/stream'
  const viewportUrl = options.viewportUrl || '/omnimux/workbench/viewport'
  const rpcAckUrl = options.rpcAckUrl || '/omnimux/workbench/rpc/ack'

  const subscribers = new Map() // type -> Set<cb>
  let es = null
  let watchdogTimer = null
  let heartbeatTimer = null
  let lastEventAt = 0
  let isHealthy = false

  function notifySubscribers(event) {
    const type = event.type
    const list = subscribers.get(type)
    if (list) {
      for (const cb of list) {
        try { cb(event) } catch (err) { console.error('[EventsClient] subscriber error:', err) }
      }
    }
    const all = subscribers.get('*')
    if (all) {
      for (const cb of all) {
        try { cb(event) } catch (err) { console.error('[EventsClient] subscriber error:', err) }
      }
    }
  }

  function handleMessage(event) {
    lastEventAt = Date.now()
    isHealthy = true

    notifySubscribers(event)

    // Handle RPC open request
    if (event.type === 'omnimux:workbench:rpc' && event.payload) {
      handleRpc(event.payload)
    }
  }

  async function handleRpc(payload) {
    const { requestId, tabId, path } = payload
    const wb = getWorkbench()
    let applied = false
    let code = 'no-workbench'

    if (wb && typeof wb.open === 'function') {
      try {
        const opened = await wb.open({ tabId, path: path || tabId })
        applied = Boolean(opened)
        code = applied ? 'opened' : 'open-failed'
      } catch (err) {
        console.error('[EventsClient] RPC open failed:', err)
        code = 'error'
      }
    }

    if (fetchImpl && requestId) {
      try {
        await fetchImpl(rpcAckUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            requestId,
            ok: true,
            applied,
            code,
            tabId,
          }),
        })
      } catch (err) {
        console.error('[EventsClient] RPC ack failed:', err)
      }
    }
  }

  function sendViewportHeartbeat() {
    const wb = getWorkbench()
    if (!wb || typeof wb.getUiContext !== 'function' || !fetchImpl) return
    try {
      const envelope = wb.getUiContext()
      if (envelope) {
        fetchImpl(viewportUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(envelope),
        }).catch(() => {})
      }
    } catch {
      // ignore
    }
  }

  function connect() {
    if (!EventSourceImpl) return

    try {
      es = new EventSourceImpl(streamUrl)
    } catch (err) {
      console.error('[EventsClient] EventSource init failed:', err)
      return
    }

    es.onopen = () => {
      lastEventAt = Date.now()
      isHealthy = true
      notifySubscribers({ type: 'omnimux:connected', at: lastEventAt })
      sendViewportHeartbeat()
    }

    es.onerror = () => {
      isHealthy = false
      notifySubscribers({ type: 'omnimux:disconnected', at: Date.now() })
    }

    es.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data)
        handleMessage({ type: e.type || 'message', payload, id: e.lastEventId, at: Date.now() })
      } catch {
        // ignore
      }
    }

    // Specific event listeners
    const knownTypes = [
      'omnimux:heartbeat',
      'omnimux:assets:changed',
      'omnimux:workbench:rpc',
    ]

    for (const t of knownTypes) {
      es.addEventListener(t, (e) => {
        try {
          const payload = JSON.parse(e.data)
          handleMessage({ type: t, payload, id: e.lastEventId, at: Date.now() })
        } catch {
          // ignore
        }
      })
    }

    // Watchdog
    watchdogTimer = setInterval(() => {
      if (lastEventAt > 0 && Date.now() - lastEventAt > WATCHDOG_TIMEOUT_MS) {
        if (isHealthy) {
          isHealthy = false
          notifySubscribers({ type: 'omnimux:silence', at: Date.now() })
        }
      }
    }, 1000)

    // Viewport heartbeat
    heartbeatTimer = setInterval(() => {
      sendViewportHeartbeat()
    }, HEARTBEAT_INTERVAL_MS)
  }

  function subscribe(eventType, callback) {
    if (typeof callback !== 'function') return () => {}
    if (!subscribers.has(eventType)) {
      subscribers.set(eventType, new Set())
    }
    subscribers.get(eventType).add(callback)
    return () => {
      subscribers.get(eventType)?.delete(callback)
    }
  }

  function disconnect() {
    if (watchdogTimer) clearInterval(watchdogTimer)
    if (heartbeatTimer) clearInterval(heartbeatTimer)
    if (es) {
      es.close()
      es = null
    }
    isHealthy = false
  }

  return {
    connect,
    disconnect,
    subscribe,
    isHealthy: () => isHealthy,
    getLastEventAt: () => lastEventAt,
    notifyMessageForTests: handleMessage,
  }
}

export function installHubEventsGlobal(client, target = (typeof window !== 'undefined' ? window : null)) {
  if (!target) return
  target[HUB_EVENTS_GLOBAL_KEY] = {
    subscribe: (type, cb) => client.subscribe(type, cb),
    isHealthy: () => client.isHealthy(),
    getLastEventAt: () => client.getLastEventAt(),
  }
}
