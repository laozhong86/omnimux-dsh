/**
 * omnimux-workflow HTTP API contract (route paths + DTO shapes).
 *
 * Contract-first: host routes (src/workflow/routes/canvasRoutes.ts) and the
 * island api client (src/canvas/bridge/apiClient.ts) both reference these
 * constants/types. Full human-readable contract:
 * docs/contracts/canvas-http-api.md.
 *
 * M2 prefix migration: the canonical prefix is /omnimux-workflow. The M1
 * prefix /dsh-workflow stays mounted as a legacy alias (dual registration,
 * no redirect) so existing sessions/bookmarks keep working.
 */

export const WORKFLOW_ROUTE_PREFIX = '/omnimux-workflow';

/** M1 legacy prefix — still matched by the host dispatcher (read + write). */
export const LEGACY_WORKFLOW_ROUTE_PREFIX = '/dsh-workflow';

/** All prefixes the host answers on (canonical first). */
export const WORKFLOW_ROUTE_PREFIXES = [
  WORKFLOW_ROUTE_PREFIX,
  LEGACY_WORKFLOW_ROUTE_PREFIX,
] as const;

export const WORKFLOW_API_ROUTES = {
  /** GET: build manifest (canvas.js hash for cache busting). */
  manifest: `${WORKFLOW_ROUTE_PREFIX}/api/manifest`,
  /** GET: island bundle (lazy-loaded by CanvasBridge). */
  canvasJs: `${WORKFLOW_ROUTE_PREFIX}/canvas.js`,
  /** GET: workspace summaries. POST: create workspace. */
  workspaces: `${WORKFLOW_ROUTE_PREFIX}/api/workspaces`,
  /** GET/PUT/DELETE one workspace snapshot (PUT uses optimistic lock). */
  workspace: (id: string) => `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${id}`,
  /** GET: lightweight { id, version } — external-edit polling (PR3). */
  workspaceVersion: (id: string) => `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${id}/version`,
  /** GET: generation capability catalog (M3/M4 fills real data). */
  capabilities: `${WORKFLOW_ROUTE_PREFIX}/api/capabilities`,
  /** GET: media files under the plugin-owned media dir (traversal-guarded). */
  media: `${WORKFLOW_ROUTE_PREFIX}/media`,
  /** POST: native file/folder picker → absolute paths (no copy). */
  pick: `${WORKFLOW_ROUTE_PREFIX}/api/pick`,
  /** GET: stream an imported local file by realPath (Range 206). */
  localFile: `${WORKFLOW_ROUTE_PREFIX}/api/local-file`,
  /** POST: batch exists/size probe for imported realPath values. */
  localFileProbe: `${WORKFLOW_ROUTE_PREFIX}/api/local-file/probe`,
  /** GET: execution summaries. POST: create execution {mode, nodeIds?}. */
  executions: (workspaceId: string) => `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${workspaceId}/executions`,
  /** GET: one execution status snapshot. */
  execution: (workspaceId: string, executionId: string) =>
    `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${workspaceId}/executions/${executionId}`,
  /** POST: pause | resume | cancel. */
  executionAction: (workspaceId: string, executionId: string, action: 'pause' | 'resume' | 'cancel') =>
    `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${workspaceId}/executions/${executionId}/${action}`,
  /** GET: execution SSE event stream (text/event-stream). */
  executionEvents: (workspaceId: string, executionId: string) =>
    `${WORKFLOW_ROUTE_PREFIX}/api/workspaces/${workspaceId}/executions/${executionId}/events`,
} as const;

/** GET /api/manifest response. */
export interface BuildManifest {
  /** sha256 (hex, first 16 chars) of lib/canvas.js. */
  canvasHash: string;
}

export interface ModelParameterOption<T = string | number> {
  value: T;
  label: string;
}

export interface ModelParameterSchema {
  /** 画幅选项与默认值 */
  aspectRatio?: {
    options: Array<ModelParameterOption<string>>;
    defaultValue: string;
  };
  /** 时长选项或范围与默认值 */
  duration?: {
    options?: Array<ModelParameterOption<number>>;
    range?: { min: number; max: number; step?: number };
    defaultValue: number;
    unit?: string;
  };
  /** 分辨率选项与默认值 */
  resolution?: {
    options: Array<ModelParameterOption<string>>;
    defaultValue: string;
  };
  /** 生成质量/模式选项 */
  quality?: {
    options: Array<ModelParameterOption<string>>;
    defaultValue: string;
  };
  /** 音效支持 */
  sound?: {
    supported: boolean;
    defaultValue: boolean;
  };
  /** 音色选项 (TTS) */
  voice?: {
    options: Array<ModelParameterOption<string>>;
    defaultValue: string;
  };
  /** 纯音乐选项 (Suno) */
  instrumental?: {
    supported: boolean;
    defaultValue: boolean;
  };
}

export interface CapabilityModelItem {
  id: string;
  label: string;
  badge?: string;
  subtitle?: string;
  family?: string;
  parameters?: ModelParameterSchema;
}

/** GET /api/capabilities response. */
export interface CapabilityCatalog {
  source: 'static-stub' | 'omnimux';
  text: Array<CapabilityModelItem>;
  image: Array<CapabilityModelItem>;
  video: Array<CapabilityModelItem>;
  audio: Array<CapabilityModelItem>;
}

// ============================================================================
// Execution API DTOs (M3)
// ============================================================================

/** Execution lifecycle status (host ExecutionContext.ExecutionStatus). */
export type ExecutionApiStatus =
  | 'pending'
  | 'running'
  | 'paused'
  | 'completed'
  | 'error'
  | 'cancelled';

/** Node execution status (host ExecutionContext.NodeStatus). */
export type NodeExecutionApiStatus = 'pending' | 'running' | 'completed' | 'error' | 'skipped';

/** POST /executions request body. */
export interface StartExecutionPayload {
  /** full = whole graph; subset = nodeIds + transitive upstream closure; single = target nodeIds only (inheriting existing upstream outputs). */
  mode?: 'full' | 'subset' | 'single';
  /** Required for subset and single modes. */
  nodeIds?: string[];
}

/** POST /executions response. */
export interface CreateExecutionResponse {
  execution: {
    id: string;
    workspaceId: string;
    status: ExecutionApiStatus;
    totalNodes: number;
    createdAt: string;
  };
}

/** GET /executions (list) entry. */
export interface ExecutionSummaryDto {
  id: string;
  workspaceId: string;
  status: ExecutionApiStatus;
  createdAt: string;
  progress: { total: number; completed: number; percentage: number };
}

/** GET /executions/:id response (status snapshot; SSE missed-event backfill). */
export interface ExecutionSnapshotDto {
  id: string;
  workspaceId: string;
  status: ExecutionApiStatus;
  createdAt: string;
  startedAt: number | null;
  completedAt: number | null;
  error: string | null;
  totalNodes: number;
  completedNodes: number;
  progress: {
    total: number;
    completed: number;
    running: number;
    pending: number;
    percentage: number;
  };
  nodeStates: Record<
    string,
    { status: NodeExecutionApiStatus; startedAt: number | null; completedAt: number | null; error: string | null }
  >;
  nodeOutputs: Record<string, unknown>;
  mediaAssets: Record<string, Array<Record<string, unknown>>>;
  breakpoints: string[];
}
