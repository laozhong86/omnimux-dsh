/**
 * OmniMux workflow workspace ID derivation and session-binding utilities.
 * Shared between host-side agent tools, project store, and client CanvasTab.
 */

/**
 * Valid workspace ID pattern: 12-char hex string prefixed with ws_ (ws_[a-f0-9]{12})
 */
export const WORKSPACE_ID_REGEX = /^ws_[a-f0-9]{12}$/;

export function isValidWorkspaceId(id: unknown): boolean {
  return typeof id === 'string' && WORKSPACE_ID_REGEX.test(id);
}

/**
 * Sanitize session ID to alphanumeric and safe separator characters.
 * Rejects path traversal and control characters.
 */
export function sanitizeSessionId(raw: unknown): string {
  const id = String(raw || '').trim();
  if (!id || id.length > 180) return '';
  if (!/^[A-Za-z0-9._-]+$/.test(id)) return '';
  return id;
}

/**
 * Deterministically derive a 12-char hex workspace ID from a session ID (ws_[a-f0-9]{12}).
 * Matches the client-side CanvasTab hashing algorithm byte-for-byte.
 */
export function sessionToWorkspaceId(sessionId: unknown): string | undefined {
  const cleanId = sanitizeSessionId(sessionId);
  if (!cleanId) return undefined;
  let h1 = 0x811c9dc5;
  let h2 = 0x40164e6b;
  for (let i = 0; i < cleanId.length; i++) {
    const code = cleanId.charCodeAt(i);
    h1 = Math.imul(h1 ^ code, 0x01000193);
    h2 = Math.imul(h2 ^ code, 0x050c79cd);
  }
  const hex1 = (h1 >>> 0).toString(16).padStart(8, '0');
  const hex2 = (h2 >>> 0).toString(16).padStart(8, '0');
  return `ws_${(hex1 + hex2).slice(0, 12)}`;
}

/**
 * Extract session ID from DSH execution / prompt assemble context (exec.agent).
 * Follows the omnimux-market sessionIdFromExec contract.
 */
export function sessionIdFromExec(exec?: unknown): string {
  if (!exec || typeof exec !== 'object') return '';
  const agent = (exec as { agent?: { id?: unknown; session?: { id?: unknown; header?: { id?: unknown } } } }).agent;
  const raw = agent?.session?.header?.id ?? agent?.session?.id ?? agent?.id;
  return sanitizeSessionId(raw);
}
