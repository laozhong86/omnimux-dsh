/**
 * Execution collection, item, control, and SSE event stream.
 */
import { WORKFLOW_ROUTE_PREFIX } from '../../shared/api';
import { localFileMediaUrl, projectFileMediaUrl } from '../../shared/localMedia';
import { jsonBodyProblem, messageOf } from '../../http/helpers';
import { WorkflowStoreError } from '../workspace/WorkspaceStore';
import type { WorkspaceStore } from '../workspace/WorkspaceStore';
import type { ExecutionManager } from '../execution/ExecutionManager';
import {
  resolveExecutionSubgraph,
  toExecutionMode,
  normalizeNodeIds,
  subgraphContainsMediaGenerate,
  type ExecutionMode,
} from '../execution/subgraph';
import { notFound, type RouteTry, type WorkflowDispatchRequest } from './dispatch';

const STATUS_BY_CODE: Record<string, number> = {
  'invalid-json': 400,
  'invalid-id': 400,
  'invalid-snapshot': 400,
  'name-required': 400,
  'name-too-long': 400,
  'body-too-large': 413,
  'version_conflict': 409,
  'workspace-not-found': 404,
  'not-found': 404,
  'not-local': 403,
  'path-denied': 400,
  'project-required': 400,
  'internal': 500,
};

/**
 * Extract existing output data from a saved node snapshot so downstream nodes
 * executing in single-node mode can consume upstream text/media without re-running.
 */
function extractNodeOutputFromSnapshot(
  node: { data?: Record<string, unknown>; [key: string]: unknown },
  workspaceId: string,
): unknown {
  const data = node.data ?? {};
  const text = (data.generatedContent as string | undefined)
    ?? (data.content as string | undefined)
    ?? (data.prompt as string | undefined);
  const materialType = data.materialType as string | undefined;
  const type = materialType === 'video' ? 'video' : materialType === 'audio' ? 'audio' : 'image';
  const relativePath = typeof data.relativePath === 'string' ? data.relativePath.trim() : '';
  const assetId = typeof data.assetId === 'string' ? data.assetId : undefined;
  if (relativePath) {
    const url = workspaceId
      ? projectFileMediaUrl(workspaceId, relativePath)
      : (typeof data.mediaUrl === 'string' ? data.mediaUrl : '');
    return {
      relativePath,
      assetId,
      mediaAssets: [{ type, url, relativePath, assetId }],
      text,
    };
  }
  const realPath = typeof data.realPath === 'string' ? data.realPath : '';
  if (realPath) {
    return {
      mediaAssets: [{ type, url: localFileMediaUrl(realPath) }],
      text,
    };
  }
  const mediaAssets = data.mediaAssets;
  const mediaUrl = data.mediaUrl as string | undefined;
  if (Array.isArray(mediaAssets) && mediaAssets.length > 0) {
    return { mediaAssets, text };
  }
  if (mediaUrl && !mediaUrl.startsWith('blob:')) {
    return { mediaAssets: [{ type, url: mediaUrl }], text };
  }
  return { text: text ?? '' };
}

export function createExecutionRoutes(opts: {
  store: WorkspaceStore;
  executionManager: ExecutionManager;
}): { tryHandle: RouteTry } {
  const { store, executionManager } = opts;
  const executionsRouteRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/executions$`);
  const executionItemRouteRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/executions/([^/]+)$`);
  const executionActionRouteRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/executions/([^/]+)/(pause|resume|cancel)$`);
  const executionEventsRouteRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/executions/([^/]+)/events$`);

  const tryHandle: RouteTry = async (method, path, req: WorkflowDispatchRequest) => {
    const eventsMatch = executionEventsRouteRe.exec(path);
    if (eventsMatch && method === 'GET') {
      const executionId = eventsMatch[2] ?? '';
      const stream = await executionManager.openEventStream(executionId);
      if (!stream) {
        return { status: 404, body: { error: 'execution-not-found', message: `execution ${executionId} not found` } };
      }
      return { status: 200, sse: stream };
    }

    const actionMatch = executionActionRouteRe.exec(path);
    if (actionMatch) {
      if (method !== 'POST') return notFound();
      const executionId = actionMatch[2] ?? '';
      const action = actionMatch[3] ?? 'pause';
      const result =
        action === 'pause'
          ? await executionManager.pauseExecution(executionId)
          : action === 'resume'
            ? await executionManager.resumeExecution(executionId)
            : await executionManager.cancelExecution(executionId);
      if (!result.ok) {
        return { status: 409, body: { error: 'invalid-execution-state', message: result.message ?? '无法执行该操作' } };
      }
      return { status: 200, body: { ok: true } };
    }

    const executionMatch = executionItemRouteRe.exec(path);
    if (executionMatch) {
      const executionId = executionMatch[2] ?? '';
      if (method === 'GET') {
        const snapshot = executionManager.getSnapshot(executionId);
        if (!snapshot) {
          return { status: 404, body: { error: 'execution-not-found', message: `execution ${executionId} not found` } };
        }
        return { status: 200, body: { execution: snapshot } };
      }
      return notFound();
    }

    const executionsMatch = executionsRouteRe.exec(path);
    if (executionsMatch) {
      const workspaceId = executionsMatch[1] ?? '';
      if (method === 'GET') {
        return { status: 200, body: { executions: executionManager.listExecutions(workspaceId) } };
      }
      if (method === 'POST') {
        const problem = jsonBodyProblem(req.body);
        if (problem) return problem;
        const body = req.body as { mode?: unknown; nodeIds?: unknown };
        let mode: ExecutionMode;
        try {
          mode = toExecutionMode(body.mode);
        } catch (error) {
          return { status: 400, body: { error: 'invalid-mode', message: messageOf(error) } };
        }
        let snapshot;
        try {
          snapshot = store.get(workspaceId);
        } catch (error) {
          if (error instanceof WorkflowStoreError) {
            return {
              status: STATUS_BY_CODE[error.code] ?? 400,
              body: { error: error.code, message: error.message },
            };
          }
          throw error;
        }
        try {
          const subgraph = resolveExecutionSubgraph({
            nodes: snapshot.nodes as Array<{ id: string; [key: string]: unknown }>,
            edges: snapshot.edges as Array<{ source: string; target: string; [key: string]: unknown }>,
            executionMode: mode,
            nodeIds: normalizeNodeIds(body.nodeIds),
          });

          if (
            subgraphContainsMediaGenerate(subgraph.nodes as Array<{ type?: string; data?: Record<string, unknown> }>)
            && !store.resolveProjectRoot(workspaceId)
          ) {
            throw new WorkflowStoreError(
              'project-required',
              `workspace ${workspaceId} is not bound to a local project`,
            );
          }

          // Seed initial outputs for upstream nodes not included in this execution batch
          const initialOutputs: Record<string, unknown> = {};
          const executedNodeIds = subgraph.nodeIdSet;
          for (const edge of snapshot.edges as Array<{ source: string; target: string }>) {
            if (executedNodeIds.has(edge.target) && !executedNodeIds.has(edge.source)) {
              const sourceNode = (snapshot.nodes as Array<{ id: string; [key: string]: unknown }>).find(
                (n) => n.id === edge.source,
              );
              if (sourceNode) {
                initialOutputs[edge.source] = extractNodeOutputFromSnapshot(sourceNode, snapshot.id);
              }
            }
          }

          const entry = executionManager.createExecution({
            workspaceId: snapshot.id,
            nodes: subgraph.nodes as unknown as Array<{ id: string; type: string; data?: Record<string, unknown> }>,
            edges: subgraph.edges as unknown as Array<{ source: string; target: string }>,
            maxParallel: snapshot.settings.maxParallel,
            initialOutputs,
          });
          return {
            status: 200,
            body: {
              execution: {
                id: entry.context.id,
                workspaceId: entry.context.workflowId,
                status: entry.context.status,
                totalNodes: subgraph.nodes.length,
                createdAt: entry.createdAt,
              },
            },
          };
        } catch (error) {
          if (error instanceof WorkflowStoreError) {
            return {
              status: STATUS_BY_CODE[error.code] ?? 400,
              body: { error: error.code, message: error.message },
            };
          }
          return { status: 400, body: { error: 'invalid-subgraph', message: messageOf(error) } };
        }
      }
      return notFound();
    }

    return null;
  };

  return { tryHandle };
}
