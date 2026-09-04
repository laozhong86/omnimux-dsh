/**
 * Schemas and validators for Agent-Workbench bi-directional synergy.
 * Conforms to contract-agent-workbench-sync (L1).
 */

export const WORKBENCH_OCCUPANTS = Object.freeze([
  'omnimux-workflow:canvas',
  'omnimux-clip:studio',
  'omnimux-assets:library',
  'omnimux-products:library',
  'omnimux-accounts:library',
  'omnimux-inspiration:library',
  'omnimux-publish:library',
  'omnimux-analytics:library',
  'omnimux-workflow:library',
  'omnimux-market:plaza',
])

export const VIEWPORT_STALE_THRESHOLD_MS = 3000

export function isValidTabId(tabId) {
  return typeof tabId === 'string' && WORKBENCH_OCCUPANTS.includes(tabId)
}

export function validateEnvelope(raw) {
  if (!raw || typeof raw !== 'object') return { valid: false, error: 'envelope-must-be-object' }
  if (raw.schemaVersion !== 1) return { valid: false, error: 'invalid-schema-version' }
  if (typeof raw.ok !== 'boolean') return { valid: false, error: 'ok-must-be-boolean' }
  if (typeof raw.capturedAt !== 'number') return { valid: false, error: 'capturedAt-must-be-number' }
  return { valid: true }
}

export function isViewportStale(viewport, now = Date.now()) {
  if (!viewport || typeof viewport.capturedAt !== 'number') return true
  return now - viewport.capturedAt > VIEWPORT_STALE_THRESHOLD_MS
}

export function validateRpcAck(body) {
  if (!body || typeof body !== 'object') return { valid: false, error: 'body-must-be-object' }
  if (!body.requestId || typeof body.requestId !== 'string') return { valid: false, error: 'requestId-required' }
  if (typeof body.ok !== 'boolean') return { valid: false, error: 'ok-must-be-boolean' }
  if (typeof body.applied !== 'boolean') return { valid: false, error: 'applied-must-be-boolean' }
  return { valid: true }
}
