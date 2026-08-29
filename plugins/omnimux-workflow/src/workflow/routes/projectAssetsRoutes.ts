/**
 * Project-private assets.json REST (GET/PUT + mkdir/index).
 * Mounted after workspace CRUD and before execution routes so
 * `/workspaces/:id/assets` is not swallowed by `/workspaces/:id`.
 */
import { WORKFLOW_ROUTE_PREFIX } from '../../shared/api.ts';
import { jsonBodyProblem } from '../../http/helpers.ts';
import type {
  IndexProjectAssetsPayload,
  MkdirProjectAssetsPayload,
  SaveProjectAssetsPayload,
} from '../../shared/projectAssets.ts';
import type { ProjectAssetsStore } from '../workspace/ProjectAssetsStore.ts';
import { notFound, type RouteTry, type WorkflowDispatchRequest } from './dispatch.ts';

export function createProjectAssetsRoutes(store: ProjectAssetsStore): { tryHandle: RouteTry } {
  const assetsRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/assets$`);
  const mkdirRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/assets/mkdir$`);
  const indexRe = new RegExp(`^${WORKFLOW_ROUTE_PREFIX}/api/workspaces/([^/]+)/assets/index$`);

  const tryHandle: RouteTry = (method, path, req: WorkflowDispatchRequest) => {
    const mkdirMatch = mkdirRe.exec(path);
    if (mkdirMatch) {
      if (method !== 'POST') return notFound();
      const problem = jsonBodyProblem(req.body);
      if (problem) return problem;
      const body = req.body as MkdirProjectAssetsPayload;
      const assets = store.mkdir(mkdirMatch[1] ?? '', body);
      return { status: 200, body: { assets } };
    }

    const indexMatch = indexRe.exec(path);
    if (indexMatch) {
      if (method !== 'POST') return notFound();
      const problem = jsonBodyProblem(req.body);
      if (problem) return problem;
      const body = req.body as IndexProjectAssetsPayload;
      const assets = store.index(indexMatch[1] ?? '', body);
      return { status: 200, body: { assets } };
    }

    const assetsMatch = assetsRe.exec(path);
    if (assetsMatch) {
      const id = assetsMatch[1] ?? '';
      if (method === 'GET') {
        return { status: 200, body: { assets: store.get(id) } };
      }
      if (method === 'PUT') {
        const problem = jsonBodyProblem(req.body);
        if (problem) return problem;
        const payload = req.body as SaveProjectAssetsPayload;
        if (typeof payload.expectedRev !== 'number') {
          return {
            status: 400,
            body: { error: 'version-required', message: 'expectedRev is required for saves' },
          };
        }
        const assets = store.save(id, payload);
        return { status: 200, body: { assets } };
      }
      return notFound();
    }

    return null;
  };

  return { tryHandle };
}
