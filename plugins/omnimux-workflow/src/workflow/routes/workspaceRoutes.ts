/**
 * Workspace CRUD (optimistic-lock PUT, name-validated POST).
 */
import { WORKFLOW_ROUTE_PREFIX } from '../../shared/api';
import type { SaveCanvasWorkspacePayload } from '../../shared/canvasTypes';
import { jsonBodyProblem } from '../../http/helpers';
import type { WorkspaceStore } from '../workspace/WorkspaceStore';
import { notFound, type RouteTry, type WorkflowDispatchRequest } from './dispatch';

export function createWorkspaceRoutes(store: WorkspaceStore): { tryHandle: RouteTry } {
  const workspacesPath = `${WORKFLOW_ROUTE_PREFIX}/api/workspaces`;
  const workspaceRouteRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)$`);

  const tryHandle: RouteTry = (method, path, req: WorkflowDispatchRequest) => {
    if (path === workspacesPath) {
      if (method === 'GET') {
        return { status: 200, body: { workspaces: store.list() } };
      }
      if (method === 'POST') {
        const problem = jsonBodyProblem(req.body);
        if (problem) return problem;
        const body = req.body as { name?: unknown };
        const name = typeof body.name === 'string' ? body.name : undefined;
        return { status: 200, body: { workspace: store.create(name) } };
      }
      return notFound();
    }

    const workspaceMatch = workspaceRouteRe.exec(path);
    if (workspaceMatch) {
      const id = workspaceMatch[1] ?? '';
      if (method === 'GET') {
        return { status: 200, body: { workspace: store.get(id) } };
      }
      if (method === 'PUT') {
        const problem = jsonBodyProblem(req.body);
        if (problem) return problem;
        const payload = req.body as SaveCanvasWorkspacePayload;
        if (typeof payload.expectedVersion !== 'number') {
          return { status: 400, body: { error: 'version-required', message: 'expectedVersion is required for saves' } };
        }
        const result = store.save(id, payload);
        return { status: 200, body: { workspace: result.snapshot } };
      }
      if (method === 'DELETE') {
        store.remove(id);
        return { status: 200, body: { ok: true } };
      }
      return notFound();
    }

    return null;
  };

  return { tryHandle };
}
