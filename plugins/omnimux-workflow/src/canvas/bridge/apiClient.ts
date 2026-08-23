/**
 * Island-side fetch wrapper over the host /omnimux-workflow/api/* routes.
 *
 * Plain fetch (same origin — the island is served by the same webServer);
 * no axios, no custom HTTP client (plugin red line). Route paths come from
 * src/shared/api.ts — the single source of truth shared with the host.
 */

import { WORKFLOW_API_ROUTES } from '../../shared/api';
import type {
  BuildManifest,
  CapabilityCatalog,
  CreateExecutionResponse,
  ExecutionSnapshotDto,
  ExecutionSummaryDto,
  StartExecutionPayload,
} from '../../shared/api';
import type {
  CanvasWorkspaceSnapshot,
  SaveCanvasWorkspacePayload,
  WorkspaceSummary,
} from '../../shared/canvasTypes';

export interface ApiResult<T> {
  ok: boolean;
  status: number;
  /** Success payload intersected with the error envelope fields. */
  body: T & { error?: string; message?: string };
}

async function request<T>(
  path: string,
  opts: { method?: string; body?: unknown } = {},
): Promise<ApiResult<T>> {
  const response = await fetch(path, {
    method: opts.method ?? 'GET',
    headers: opts.body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
  });
  let json = {} as T & { error?: string; message?: string };
  try {
    json = (await response.json()) as T & { error?: string; message?: string };
  } catch {
    json = { error: `HTTP ${String(response.status)}` } as T & { error?: string; message?: string };
  }
  return { ok: response.ok, status: response.status, body: json };
}

export function fetchManifest(): Promise<ApiResult<BuildManifest>> {
  return request<BuildManifest>(WORKFLOW_API_ROUTES.manifest);
}

export function fetchCapabilities(): Promise<ApiResult<CapabilityCatalog>> {
  return request<CapabilityCatalog>(WORKFLOW_API_ROUTES.capabilities);
}

export function listWorkspaces(): Promise<ApiResult<{ workspaces: WorkspaceSummary[] }>> {
  return request<{ workspaces: WorkspaceSummary[] }>(WORKFLOW_API_ROUTES.workspaces);
}

export function createWorkspace(name?: string): Promise<ApiResult<{ workspace: CanvasWorkspaceSnapshot }>> {
  return request<{ workspace: CanvasWorkspaceSnapshot }>(WORKFLOW_API_ROUTES.workspaces, {
    method: 'POST',
    body: { name },
  });
}

export function getWorkspace(id: string): Promise<ApiResult<{ workspace: CanvasWorkspaceSnapshot }>> {
  return request<{ workspace: CanvasWorkspaceSnapshot }>(WORKFLOW_API_ROUTES.workspace(encodeURIComponent(id)));
}

export interface SaveResponse {
  workspace?: CanvasWorkspaceSnapshot;
  error?: string;
  message?: string;
  current?: number;
}

export function saveWorkspace(id: string, payload: SaveCanvasWorkspacePayload): Promise<ApiResult<SaveResponse>> {
  return request<SaveResponse>(WORKFLOW_API_ROUTES.workspace(encodeURIComponent(id)), {
    method: 'PUT',
    body: payload,
  });
}

// ============================================================================
// Execution API (M3)
// ============================================================================

export function createExecution(
  workspaceId: string,
  payload: StartExecutionPayload = {},
): Promise<ApiResult<CreateExecutionResponse>> {
  return request<CreateExecutionResponse>(WORKFLOW_API_ROUTES.executions(encodeURIComponent(workspaceId)), {
    method: 'POST',
    body: payload,
  });
}

export function listExecutions(
  workspaceId: string,
): Promise<ApiResult<{ executions: ExecutionSummaryDto[] }>> {
  return request<{ executions: ExecutionSummaryDto[] }>(WORKFLOW_API_ROUTES.executions(encodeURIComponent(workspaceId)));
}

export function getExecution(
  workspaceId: string,
  executionId: string,
): Promise<ApiResult<{ execution: ExecutionSnapshotDto }>> {
  return request<{ execution: ExecutionSnapshotDto }>(
    WORKFLOW_API_ROUTES.execution(encodeURIComponent(workspaceId), encodeURIComponent(executionId)),
  );
}

export type ExecutionAction = 'pause' | 'resume' | 'cancel';

export function executionAction(
  workspaceId: string,
  executionId: string,
  action: ExecutionAction,
): Promise<ApiResult<{ ok: boolean }>> {
  return request<{ ok: boolean }>(
    WORKFLOW_API_ROUTES.executionAction(
      encodeURIComponent(workspaceId),
      encodeURIComponent(executionId),
      action,
    ),
    { method: 'POST', body: {} },
  );
}
