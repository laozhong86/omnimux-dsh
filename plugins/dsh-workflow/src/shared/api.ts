/**
 * dsh-workflow HTTP API contract (route paths + DTO shapes).
 *
 * Contract-first: host routes (src/workflow/routes/canvasRoutes.ts) and the
 * island api client (src/canvas/bridge/apiClient.ts) both reference these
 * constants/types. Full human-readable contract:
 * docs/contracts/canvas-http-api.md.
 */

export const WORKFLOW_ROUTE_PREFIX = '/dsh-workflow';

export const WORKFLOW_API_ROUTES = {
  /** GET: build manifest (canvas.js content hash for cache busting). */
  manifest: `${WORKFLOW_ROUTE_PREFIX}/api/manifest`,
  /** GET: island bundle (lazy-loaded by CanvasBridge). */
  canvasJs: `${WORKFLOW_ROUTE_PREFIX}/canvas.js`,
  /** GET: workspace summaries. POST: create workspace. */
  workspaces: `${WORKFLOW_ROUTE_PREFIX}/api/workspaces`,
  /** GET/PUT/DELETE one workspace snapshot (PUT uses optimistic lock). */
  workspace: (id: string) => `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${id}`,
  /** GET: generation capability catalog (M3/M4 fills real data). */
  capabilities: `${WORKFLOW_ROUTE_PREFIX}/api/capabilities`,
  /** GET: media files under the plugin-owned media dir (traversal-guarded). */
  media: `${WORKFLOW_ROUTE_PREFIX}/media`,
} as const;

/** GET /api/manifest response. */
export interface BuildManifest {
  /** sha256 (hex, first 16 chars) of lib/canvas.js. */
  canvasHash: string;
}

/** GET /api/capabilities response (stub shape until M3/M4). */
export interface CapabilityCatalog {
  source: 'static-stub' | 'omnimux';
  text: Array<{ id: string; label: string }>;
  image: Array<{ id: string; label: string }>;
  video: Array<{ id: string; label: string }>;
  audio: Array<{ id: string; label: string }>;
}
