/**
 * Viewport and RPC mailbox on Host side.
 * Stores last-known viewport from client and coordinates workbench_open_tab RPC waiter.
 */

import { isViewportStale, validateEnvelope, validateRpcAck } from './schema.js'

export const RPC_TIMEOUT_MS = 2000

export function createWorkbenchMailbox(options = {}) {
  const hubEvents = options.hubEvents
  const rpcTimeoutMs = options.rpcTimeoutMs || RPC_TIMEOUT_MS

  let lastViewport = null
  const pendingRpcs = new Map() // requestId -> { resolve, timer }

  function updateViewport(envelope) {
    const val = validateEnvelope(envelope)
    if (!val.valid) return { ok: false, error: val.error }
    lastViewport = Object.freeze({
      ...envelope,
      receivedAt: Date.now(),
    })
    return { ok: true }
  }

  function getActiveView() {
    if (!lastViewport) {
      return {
        ok: true,
        stale: true,
        uiContext: null,
      }
    }
    const stale = isViewportStale(lastViewport)
    return {
      ok: true,
      stale,
      uiContext: lastViewport,
    }
  }

  function handleRpcAck(ackBody) {
    const val = validateRpcAck(ackBody)
    if (!val.valid) return { ok: false, error: val.error }
    const pending = pendingRpcs.get(ackBody.requestId)
    if (!pending) {
      return { ok: false, error: 'unknown-request-id' }
    }
    clearTimeout(pending.timer)
    pendingRpcs.delete(ackBody.requestId)
    pending.resolve(ackBody)
    return { ok: true }
  }

  function sendRpc(rpcPayload) {
    if (!hubEvents) {
      return Promise.resolve({ ok: true, applied: false, code: 'no-client' })
    }
    const requestId = rpcPayload.requestId
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        pendingRpcs.delete(requestId)
        resolve({
          ok: true,
          applied: false,
          code: 'rpc-timeout',
        })
      }, rpcTimeoutMs)

      pendingRpcs.set(requestId, { resolve, timer })

      hubEvents.emit({
        type: 'omnimux:workbench:rpc',
        payload: rpcPayload,
      })
    })
  }

  function clearPending() {
    for (const [id, item] of pendingRpcs.entries()) {
      clearTimeout(item.timer)
    }
    pendingRpcs.clear()
  }

  return {
    updateViewport,
    getActiveView,
    handleRpcAck,
    sendRpc,
    clearPending,
  }
}
