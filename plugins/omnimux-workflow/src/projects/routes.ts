/**
 * 项目 HTTP 路由（host 侧）。
 *
 *   GET    /omnimux-workflow/api/projects/library         默认库路径（host 解析 videos）
 *   GET    /omnimux-workflow/api/projects                 list（扫描默认库）
 *   POST   /omnimux-workflow/api/projects                 seed { title, projectRoot, sessionId? }
 *   GET    /omnimux-workflow/api/projects/:id             get
 *   PATCH  /omnimux-workflow/api/projects/:id             rename/bindSession { title?, sessionId? }
 *   DELETE /omnimux-workflow/api/projects/:id             摘元数据，不 rm 用户文件夹
 *
 * 项目库作用域 = 默认库，不再接收 cwd。写操作先过 assertLocalWrite。
 */
import {
  MAX_JSON_BODY_BYTES,
  sendJson,
  JsonBodyLimitError,
  readJsonBody,
  assertLocalWrite,
  messageOf,
  jsonBodyProblem,
} from '../http/helpers';
import { displayHomePath, ensureLibraryRoot, resolveVideosDir } from './library';
import { ProjectPathError } from './paths';
import { createProjectStore, ProjectStoreError } from './ProjectStore';

export const PROJECT_ROUTE_PREFIX = '/omnimux-workflow/api/projects';
export const PROJECT_LIBRARY_PATH = `${PROJECT_ROUTE_PREFIX}/library`;

const STATUS_BY_CODE: Record<string, number> = {
  'invalid-json': 400,
  'invalid-cwd': 400,
  'invalid-library-root': 400,
  'invalid-project-root': 400,
  'invalid-id': 400,
  'title-required': 400,
  'title-too-long': 400,
  'title-invalid': 400,
  'directory-create-failed': 500,
  'session-required': 400,
  'body-too-large': 413,
  'project-not-found': 404,
  'project-exists': 409,
  'not-found': 404,
  'not-local': 403,
  'path-denied': 403,
  'internal': 500,
};

/** Request-body cap for JSON routes（与 canvasRoutes 一致）。 */
export const MAX_PROJECT_JSON_BODY_BYTES = MAX_JSON_BODY_BYTES;

export { sendJson, JsonBodyLimitError, readJsonBody, assertLocalWrite };

function scopedStore() {
  const libraryRoot = ensureLibraryRoot();
  return { libraryRoot, store: createProjectStore({ libraryRoot }) };
}

export interface ProjectDispatchRequest {
  method: string;
  url: string;
  origin?: string;
  referer?: string;
  secFetchSite?: string;
  body?: unknown;
}

export type ProjectDispatchResult = { status: number; body?: unknown };

export interface ProjectDispatcher {
  /** 判断某 path 是否属于项目路由（供 workflow dispatcher 委托前判断）。 */
  owns(path: string): boolean;
  dispatch(req: ProjectDispatchRequest): Promise<ProjectDispatchResult>;
}

/** 项目路由无状态：库根由 host 解析，不跟当前会话 cwd。 */
export function createProjectDispatcher(): ProjectDispatcher {
  const collectionRe = new RegExp(`^${PROJECT_ROUTE_PREFIX}$`);
  const libraryRe = new RegExp(`^${PROJECT_LIBRARY_PATH}$`);
  const itemRe = new RegExp(`^${PROJECT_ROUTE_PREFIX}/([^/]+)$`);

  function owns(path: string): boolean {
    return path === PROJECT_ROUTE_PREFIX || path.startsWith(`${PROJECT_ROUTE_PREFIX}/`);
  }

  async function dispatch(req: ProjectDispatchRequest): Promise<ProjectDispatchResult> {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      const method = (req.method || 'GET').toUpperCase();
      const path = decodeURIComponent(url.pathname);

      if (method === 'POST' || method === 'PATCH' || method === 'DELETE') {
        try {
          assertLocalWrite(req);
        } catch {
          return { status: 403, body: { error: 'not-local', message: 'cross-origin write refused' } };
        }
      }

      if (libraryRe.exec(path)) {
        if (method !== 'GET') {
          return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
        }
        const libraryRoot = ensureLibraryRoot();
        return {
          status: 200,
          body: {
            libraryRoot,
            videosDir: resolveVideosDir(),
            displayPath: displayHomePath(libraryRoot),
          },
        };
      }

      if (collectionRe.exec(path)) {
        if (method === 'GET') {
          const { store } = scopedStore();
          return { status: 200, body: { projects: store.list() } };
        }
        if (method === 'POST') {
          const problem = jsonBodyProblem(req.body);
          if (problem) return problem;
          const body = req.body as { title?: unknown; projectRoot?: unknown; sessionId?: unknown; cwd?: unknown };
          if (body.cwd !== undefined) {
            return { status: 400, body: { error: 'invalid-json', message: 'cwd is no longer a project library scope' } };
          }
          const { store } = scopedStore();
          const title = typeof body.title === 'string' ? body.title : undefined;
          const sessionId = typeof body.sessionId === 'string' ? body.sessionId : null;
          const projectRoot = typeof body.projectRoot === 'string' && body.projectRoot.trim() !== ''
            ? body.projectRoot
            : undefined;
          return {
            status: 200,
            body: { project: store.create(title ?? '', { projectRoot, sessionId }) },
          };
        }
        return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
      }

      const itemMatch = itemRe.exec(path);
      if (itemMatch) {
        const id = itemMatch[1] ?? '';
        if (id === 'library') {
          return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
        }
        const { store } = scopedStore();
        if (method === 'GET') {
          return { status: 200, body: { project: store.get(id) } };
        }
        if (method === 'PATCH') {
          const problem = jsonBodyProblem(req.body);
          if (problem) return problem;
          const body = req.body as { title?: unknown; sessionId?: unknown };
          if (typeof body.title === 'string') {
            return { status: 200, body: { project: store.rename(id, body.title) } };
          }
          if (typeof body.sessionId === 'string') {
            return { status: 200, body: { project: store.bindSession(id, body.sessionId) } };
          }
          return { status: 400, body: { error: 'invalid-json', message: 'title or sessionId is required' } };
        }
        if (method === 'DELETE') {
          store.remove(id);
          return { status: 200, body: { ok: true } };
        }
        return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
      }

      return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
    } catch (error) {
      if (error instanceof ProjectPathError) {
        return { status: STATUS_BY_CODE[error.code] ?? 400, body: { error: error.code, message: error.message } };
      }
      if (error instanceof ProjectStoreError) {
        return { status: STATUS_BY_CODE[error.code] ?? 400, body: { error: error.code, message: error.message } };
      }
      return { status: 500, body: { error: 'internal', message: messageOf(error) } };
    }
  }

  return { owns, dispatch };
}
