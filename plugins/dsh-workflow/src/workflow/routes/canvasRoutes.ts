/**
 * Workflow HTTP routes mounted on the official webServer seat.
 *
 * Prefix: /dsh-workflow/*
 *   GET  /dsh-workflow/canvas.js            island bundle (cache-busted)
 *   GET  /dsh-workflow/api/manifest         build manifest (canvas.js hash)
 *   GET  /dsh-workflow/api/workspaces       list summaries
 *   POST /dsh-workflow/api/workspaces       create
 *   GET  /dsh-workflow/api/workspaces/:id   snapshot
 *   PUT  /dsh-workflow/api/workspaces/:id   save (optimistic lock -> 409)
 *   DELETE /dsh-workflow/api/workspaces/:id
 *   GET  /dsh-workflow/api/capabilities     capability catalog (stub in M1)
 *   GET  /dsh-workflow/media/*              media files (traversal-guarded)
 *
 * Self-implemented helpers equivalent to hub logic (no hub imports):
 * sendJson secret guard + assertLocalWrite loopback check, matching the
 * omnimux-assets plugin conventions.
 */
import { createHash } from 'node:crypto';
import {
  createReadStream,
  existsSync,
  readFileSync,
  statSync,
} from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { SaveCanvasWorkspacePayload } from '../../shared/canvasTypes';
import { WorkflowStoreError } from '../workspace/WorkspaceStore';
import type { WorkspaceStore } from '../workspace/WorkspaceStore';
import type { GenerationGateway } from '../seam/gateway';

const LOCAL_HOSTS = new Set(['127.0.0.1', 'localhost', '[::1]', '::1']);

const STATUS_BY_CODE: Record<string, number> = {
  'invalid-json': 400,
  'invalid-id': 400,
  'invalid-snapshot': 400,
  'name-required': 400,
  'version_conflict': 409,
  'workspace-not-found': 404,
  'not-found': 404,
  'not-local': 403,
  'path-denied': 403,
  'internal': 500,
};

const MIME_BY_EXT: Record<string, string> = {
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * Plugin root: works both from the built bundle (dist/index.js → root is
 * one level up) and from source (src/workflow/routes/ → three levels up).
 * Detected by locating package.json.
 */
function resolvePluginRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const candidates = [join(here, '..'), join(here, '..', '..', '..')];
  for (const candidate of candidates) {
    if (existsSync(join(candidate, 'package.json'))) return candidate;
  }
  return candidates[0] ?? process.cwd();
}

const PLUGIN_ROOT = resolvePluginRoot();

export function sendJson(res: ServerResponse, status: number, body: unknown): void {
  const text = JSON.stringify(body);
  if (/access_token|sk-[A-Za-z0-9]/.test(text)) {
    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'refused to emit a secret' }));
    return;
  }
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(text);
}

export async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(chunk as Buffer);
  }
  if (chunks.length === 0) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
  } catch {
    return null;
  }
}

export function assertLocalWrite(headers: {
  origin?: string;
  referer?: string;
  secFetchSite?: string;
}): void {
  const site = String(headers.secFetchSite || '').toLowerCase();
  if (site === 'cross-site') throw new Error('cross-origin write refused');
  const origin = headers.origin || originFromReferer(headers.referer);
  if (!origin) return;
  let host: string;
  try {
    host = new URL(origin).hostname;
  } catch {
    throw new Error('cross-origin write refused');
  }
  if (!LOCAL_HOSTS.has(host)) throw new Error('cross-origin write refused');
}

function originFromReferer(referer: string | undefined): string {
  if (!referer) return '';
  try {
    return new URL(referer).origin;
  } catch {
    return '';
  }
}

function header(req: { headers?: Record<string, string | string[] | undefined> }, name: string): string | undefined {
  const value = req.headers?.[name] ?? req.headers?.[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
}

function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function jsonBodyProblem(body: unknown): { status: number; body: unknown } | null {
  if (body === null) {
    return { status: 400, body: { error: 'invalid-json', message: 'request body is not valid JSON' } };
  }
  if (typeof body !== 'object' || Array.isArray(body)) {
    return { status: 400, body: { error: 'invalid-json', message: 'request body must be a JSON object' } };
  }
  return null;
}

/** Serve a file body with mime + stream (never throws synchronously). */
function serveFile(res: ServerResponse, filePath: string, fallbackMime: string): void {
  const mime = MIME_BY_EXT[extname(filePath)] ?? fallbackMime;
  const stat = statSync(filePath);
  res.writeHead(200, {
    'Content-Type': mime,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache',
  });
  const stream = createReadStream(filePath);
  stream.on('error', () => {
    res.destroy();
  });
  stream.pipe(res);
}

export interface WorkflowDispatcherDeps {
  store: WorkspaceStore;
  gateway: GenerationGateway;
  mediaDir: string;
}

export interface WorkflowDispatchRequest {
  method: string;
  url: string;
  origin?: string;
  referer?: string;
  secFetchSite?: string;
  body?: unknown;
}

export type DispatchResult = { status: number; body?: unknown } | { status: number; file: string };

export function createWorkflowDispatcher(deps: WorkflowDispatcherDeps) {
  const { store, gateway, mediaDir } = deps;
  const mediaRoot = resolve(mediaDir);

  let cachedCanvasHash: { hash: string; at: number } | null = null;
  function canvasJsHash(): string {
    const now = Date.now();
    if (cachedCanvasHash && now - cachedCanvasHash.at < 5_000) return cachedCanvasHash.hash;
    const file = join(PLUGIN_ROOT, 'lib', 'canvas.js');
    let hash = 'missing';
    if (existsSync(file)) {
      hash = createHash('sha256').update(readFileSync(file, 'utf8')).digest('hex').slice(0, 16);
    }
    cachedCanvasHash = { hash, at: now };
    return hash;
  }

  async function dispatch(req: WorkflowDispatchRequest): Promise<DispatchResult> {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      const method = (req.method || 'GET').toUpperCase();
      const path = decodeURIComponent(url.pathname);

      if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
        try {
          assertLocalWrite(req);
        } catch {
          return { status: 403, body: { error: 'not-local', message: 'cross-origin write refused' } };
        }
      }

      // ---- island bundle ----
      if (method === 'GET' && path === '/dsh-workflow/canvas.js') {
        const file = join(PLUGIN_ROOT, 'lib', 'canvas.js');
        if (!existsSync(file)) {
          return { status: 404, body: { error: 'not-found', message: 'canvas bundle not built (run npm run build)' } };
        }
        return { status: 200, file };
      }

      // ---- manifest ----
      if (method === 'GET' && path === '/dsh-workflow/api/manifest') {
        return { status: 200, body: { canvasHash: canvasJsHash() } };
      }

      // ---- workspaces collection ----
      if (path === '/dsh-workflow/api/workspaces') {
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
        return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
      }

      // ---- one workspace ----
      const workspaceMatch = /^\/dsh-workflow\/api\/workspaces\/([^/]+)$/.exec(path);
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
        return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
      }

      // ---- capabilities (stub until M4 wires the OmniMux catalog) ----
      if (method === 'GET' && path === '/dsh-workflow/api/capabilities') {
        return { status: 200, body: await gateway.capabilities() };
      }

      // ---- media static route (traversal-guarded) ----
      if (method === 'GET' && path.startsWith('/dsh-workflow/media/')) {
        const rel = path.slice('/dsh-workflow/media/'.length);
        // Explicit '..' segment check: attempts to escape -> 403 (the
        // normalize() clamp below additionally prevents silent escapes).
        if (rel.split('/').some((segment) => segment === '..')) {
          return { status: 403, body: { error: 'path-denied', message: 'path escapes media root' } };
        }
        const target = resolve(join(mediaRoot, normalize(`/${rel}`)));
        if (!target.startsWith(mediaRoot)) {
          return { status: 403, body: { error: 'path-denied', message: 'path escapes media root' } };
        }
        if (!existsSync(target) || !statSync(target).isFile()) {
          return { status: 404, body: { error: 'not-found', message: 'media file not found' } };
        }
        return { status: 200, file: target };
      }

      return { status: 404, body: { error: 'not-found', message: 'unknown route' } };
    } catch (error) {
      if (error instanceof WorkflowStoreError) {
        const conflict = error.code === 'version_conflict';
        const current = conflict ? currentVersionOf(error.message) : undefined;
        return {
          status: STATUS_BY_CODE[error.code] ?? 400,
          body: {
            error: error.code,
            message: error.message,
            ...(conflict && current !== undefined ? { current } : {}),
          },
        };
      }
      return { status: 500, body: { error: 'internal', message: messageOf(error) } };
    }
  }

  /** Extract the trailing "current <n>" from conflict messages (see save()). */
  function currentVersionOf(message: string): number | undefined {
    const match = /current (\d+)$/.exec(message);
    return match ? Number(match[1]) : undefined;
  }

  return { dispatch };
}

/**
 * Mount the /dsh-workflow prefix on the official webServer seat.
 * JSON results go through sendJson; file results stream from disk.
 */
export function registerWorkflowRoutes(
  webServer: { register: (route: { kind: string; path: string; handler: (req: IncomingMessage, res: ServerResponse) => Promise<void> }) => () => void },
  dispatcher: ReturnType<typeof createWorkflowDispatcher>,
): () => void {
  const dispose = webServer.register({
    kind: 'prefix',
    path: '/dsh-workflow',
    async handler(req, res) {
      try {
        const method = (req.method || 'GET').toUpperCase();
        let body: unknown;
        if (method === 'POST' || method === 'PUT') {
          body = await readJsonBody(req);
        }
        const result = await dispatcher.dispatch({
          method,
          url: req.url || '/dsh-workflow/api/manifest',
          origin: header(req, 'origin'),
          referer: header(req, 'referer'),
          secFetchSite: header(req, 'sec-fetch-site'),
          body,
        });
        if ('file' in result) {
          serveFile(res, result.file, 'application/octet-stream');
          return;
        }
        sendJson(res, result.status, result.body ?? {});
      } catch {
        sendJson(res, 500, { error: 'internal', message: 'internal error' });
      }
    },
  });
  return () => {
    dispose();
  };
}
