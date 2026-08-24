/**
 * Shared dispatch DTOs for the workflow HTTP dispatcher.
 * Handlers return null when they do not own the request.
 */
import type { ExecutionManager, ExecutionEventLogEntry } from '../execution/ExecutionManager';
import type { ExecutionContext } from '../execution/ExecutionContext';
import type { GenerationGateway } from '../seam/gateway';
import type { WorkspaceStore } from '../workspace/WorkspaceStore';

export interface WorkflowDispatcherDeps {
  store: WorkspaceStore;
  gateway: GenerationGateway;
  mediaDir: string;
  executionManager: ExecutionManager;
}

export interface WorkflowDispatchRequest {
  method: string;
  url: string;
  origin?: string;
  referer?: string;
  secFetchSite?: string;
  body?: unknown;
}

export type DispatchResult =
  | { status: number; body?: unknown }
  | { status: number; file: string }
  | { status: number; sse: { context: ExecutionContext; eventLog: ExecutionEventLogEntry[] } };

export type RouteTry = (
  method: string,
  path: string,
  req: WorkflowDispatchRequest,
) => DispatchResult | null | Promise<DispatchResult | null>;

export const notFound = (): DispatchResult => ({
  status: 404,
  body: { error: 'not-found', message: 'unknown route' },
});
