/**
 * Workflow host assembly: mounts the WorkspaceStore, the (mock) generation
 * gateway, and the /omnimux-workflow HTTP routes (with the legacy
 * /dsh-workflow alias) onto the webServer seat.
 *
 * M1 scope: workspace CRUD + bundle/media serving. The ExecutionScheduler,
 * SSE, and the real OmniMux seam client land in M3/M4 — the extension
 * points (executor registry, GenerationGateway) are already in place.
 */
import { mkdirSync } from 'node:fs';
import type { ServerResponse, IncomingMessage } from 'node:http';
import type { WorkflowPaths } from './paths';
import { resolveWorkflowPaths } from './paths';
import { createWorkspaceStore } from './workspace/WorkspaceStore';
import type { GenerationGateway } from './seam/gateway';
import { createMockGateway } from './seam/mockGateway';
import { createWorkflowDispatcher, registerWorkflowRoutes } from './routes/canvasRoutes';

type WebServer = {
  register: (route: {
    kind: string;
    path: string;
    handler: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
  }) => () => void;
};

type HostContext = {
  webServer?: WebServer;
  effect?: (fn: () => unknown, label?: string) => unknown;
  inject?: (deps: string[], callback: (inner: { webServer?: WebServer }) => void) => void;
};

export interface MountWorkflowHostOptions {
  paths?: WorkflowPaths;
  /** Override the gateway (tests / future OmniMux client). */
  gateway?: GenerationGateway;
}

export function mountWorkflowHost(ctx: HostContext, opts: MountWorkflowHostOptions = {}): () => void {
  const paths = opts.paths ?? resolveWorkflowPaths();
  mkdirSync(paths.workspacesDir, { recursive: true });
  mkdirSync(paths.mediaDir, { recursive: true });

  const store = createWorkspaceStore({ workspacesDir: paths.workspacesDir });
  const gateway = opts.gateway ?? createMockGateway();
  const dispatcher = createWorkflowDispatcher({ store, gateway, mediaDir: paths.mediaDir });

  const disposers: Array<() => void> = [];

  const mountHttp = (httpCtx: { webServer?: WebServer }) => {
    const webServer = httpCtx.webServer;
    if (!webServer || typeof webServer.register !== 'function') return;
    const mount = () => {
      disposers.push(registerWorkflowRoutes(webServer, dispatcher));
    };
    if (typeof ctx.effect === 'function') {
      ctx.effect(mount, 'omnimux-workflow: http routes');
    } else {
      mount();
    }
  };

  if (typeof ctx.inject === 'function') {
    ctx.inject(['webServer'], (inner) => mountHttp(inner));
  } else {
    mountHttp(ctx);
  }

  return () => {
    for (const dispose of disposers) dispose();
    disposers.length = 0;
  };
}

export { resolveWorkflowPaths };
