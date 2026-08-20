/**
 * dsh-workflow host entry (Cordis host face).
 *
 * M1: HTTP routes only (workspace CRUD + island bundle + media).
 * No agent tools, no systemPrompt — those are M5 candidates.
 */
import { mountWorkflowHost } from './workflow/index';

export const name = 'omnimux-workflow';
export const inject = ['webServer'];

/**
 * @param {{
 *   webServer?: { register: (route: { kind: string, path: string, handler: (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => Promise<void> }) => () => void },
 *   effect?: (fn: () => unknown, label?: string) => unknown,
 *   inject?: (deps: string[], callback: (inner: object) => void) => void,
 * }} ctx
 */
export function apply(ctx: {
  webServer?: Parameters<typeof mountWorkflowHost>[0]['webServer'];
  effect?: Parameters<typeof mountWorkflowHost>[0]['effect'];
  inject?: Parameters<typeof mountWorkflowHost>[0]['inject'];
}): void {
  mountWorkflowHost(ctx);
}

// Re-exported for the route smoke test (dist consumers get the same API).
export { mountWorkflowHost } from './workflow/index';
