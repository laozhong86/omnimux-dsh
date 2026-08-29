/**
 * WorkspaceStore: canvas.json CRUD + optimistic lock + atomic writes.
 *
 * Layout: workspaces/<id>/canvas.json (one file per workspace, tmp+rename).
 * Version discipline: server version increments on every save; PUT with a
 * stale expectedVersion -> VersionConflictError (HTTP 409).
 */
import { createHash, randomUUID } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';
import {
  DEFAULT_CANVAS_SETTINGS,
  SNAPSHOT_SCHEMA_VERSION,
  type CanvasWorkspaceSnapshot,
  type SaveCanvasWorkspacePayload,
  type WorkspaceSummary,
} from '../../shared/canvasTypes';
import { workspaceSnapshotSchema } from './snapshotSchema';
import { WorkflowStoreError } from './WorkflowStoreError';

/** Mirrors the snapshot schema name cap (workspaceSnapshotSchema). */
const MAX_WORKSPACE_NAME_LENGTH = 200;

export { WorkflowStoreError } from './WorkflowStoreError';

export interface WorkspaceSaveResult {
  snapshot: CanvasWorkspaceSnapshot;
}

export interface WorkspaceStore {
  /** Absolute workspaces root; sibling stores (assets.json) share this. */
  readonly workspacesDir: string;
  list(): WorkspaceSummary[];
  create(name: string | undefined, id?: string): CanvasWorkspaceSnapshot;
  get(id: string): CanvasWorkspaceSnapshot;
  save(id: string, payload: SaveCanvasWorkspacePayload): WorkspaceSaveResult;
  remove(id: string): void;
}

function isWorkspaceId(id: string): boolean {
  return /^ws_[a-zA-Z0-9_-]{1,128}$/.test(id);
}

function newWorkspaceId(): string {
  return `ws_${randomUUID().replace(/-/g, '').slice(0, 12)}`;
}

function atomicWriteJson(filePath: string, value: unknown): void {
  mkdirSync(join(filePath, '..'), { recursive: true });
  const tmp = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  writeFileSync(tmp, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  renameSync(tmp, filePath);
}

function readSnapshotFile(filePath: string): CanvasWorkspaceSnapshot | null {
  if (!existsSync(filePath)) return null;
  let raw: string;
  try {
    raw = readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  const result = workspaceSnapshotSchema.safeParse(parsed);
  if (!result.success) return null;
  return result.data as CanvasWorkspaceSnapshot;
}

export function createWorkspaceStore(opts: {
  workspacesDir: string;
}): WorkspaceStore {
  const { workspacesDir } = opts;
  mkdirSync(workspacesDir, { recursive: true });

  const fileOf = (id: string) => join(workspacesDir, id, 'canvas.json');

  function requireSnapshot(id: string): CanvasWorkspaceSnapshot {
    if (!isWorkspaceId(id)) {
      throw new WorkflowStoreError('invalid-id', `invalid workspace id ${id}`);
    }
    const snapshot = readSnapshotFile(fileOf(id));
    if (!snapshot) {
      throw new WorkflowStoreError('workspace-not-found', `workspace ${id} not found`);
    }
    return snapshot;
  }

  return {
    workspacesDir,

    list(): WorkspaceSummary[] {
      if (!existsSync(workspacesDir)) return [];
      const rows: WorkspaceSummary[] = [];
      for (const entry of readdirSync(workspacesDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const snapshot = readSnapshotFile(join(workspacesDir, entry.name, 'canvas.json'));
        if (!snapshot) continue;
        rows.push({
          id: snapshot.id,
          name: snapshot.name,
          version: snapshot.version,
          nodeCount: snapshot.metadata.nodeCount,
          updatedAt: snapshot.metadata.updatedAt,
        });
      }
      rows.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
      return rows;
    },

    create(name: string | undefined, explicitId?: string): CanvasWorkspaceSnapshot {
      // M2 QA fix #1: validate BEFORE writing anything to disk. Without this
      // a >200-char name was persisted by create() but rejected by the read
      // side (workspaceSnapshotSchema), leaving an unreadable "zombie"
      // workspace behind (list invisible / GET+PUT 404, only DELETE worked).
      if (typeof name === 'string' && name.trim().length > MAX_WORKSPACE_NAME_LENGTH) {
        throw new WorkflowStoreError(
          'name-too-long',
          `workspace name exceeds ${MAX_WORKSPACE_NAME_LENGTH} characters (got ${name.trim().length})`,
        );
      }
      const id = (typeof explicitId === 'string' && explicitId.trim() !== '') ? explicitId.trim() : newWorkspaceId();
      const now = new Date().toISOString();
      const snapshot: CanvasWorkspaceSnapshot = {
        schemaVersion: SNAPSHOT_SCHEMA_VERSION,
        id,
        name: (name && name.trim()) || '未命名工作流',
        version: 0,
        nodes: [],
        edges: [],
        settings: { ...DEFAULT_CANVAS_SETTINGS },
        metadata: {
          createdAt: now,
          updatedAt: now,
          nodeCount: 0,
        },
      };
      atomicWriteJson(fileOf(id), snapshot);
      return snapshot;
    },

    get(id: string): CanvasWorkspaceSnapshot {
      return requireSnapshot(id);
    },

    save(id: string, payload: SaveCanvasWorkspacePayload): WorkspaceSaveResult {
      const current = requireSnapshot(id);
      if (
        typeof payload.expectedVersion === 'number' &&
        payload.expectedVersion !== current.version
      ) {
        throw new WorkflowStoreError(
          'version_conflict',
          `workspace ${id} moved on: expected ${String(payload.expectedVersion)}, current ${String(current.version)}`,
          { current: current.version },
        );
      }

      const now = new Date().toISOString();
      const next: CanvasWorkspaceSnapshot = {
        schemaVersion: SNAPSHOT_SCHEMA_VERSION,
        id: current.id,
        name: payload.name !== undefined && payload.name.trim() ? payload.name : current.name,
        version: current.version + 1,
        nodes: payload.nodes ?? current.nodes,
        edges: payload.edges ?? current.edges,
        settings: {
          maxParallel: payload.settings?.maxParallel ?? current.settings.maxParallel,
          failStrategy: payload.settings?.failStrategy ?? current.settings.failStrategy,
        },
        metadata: {
          createdAt: current.metadata.createdAt,
          updatedAt: now,
          nodeCount: payload.nodes ? payload.nodes.length : current.metadata.nodeCount,
        },
      };

      const strict = workspaceSnapshotSchema.safeParse(next);
      if (!strict.success) {
        throw new WorkflowStoreError(
          'invalid-snapshot',
          `snapshot failed schema validation: ${strict.error.issues
            .slice(0, 3)
            .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
            .join('; ')}`,
        );
      }

      // 必须落盘 zod 清洗结果：默认 strip 未知字段，避免客户端误带
      // measured/dragging/positionAbsolute 等瞬时键常驻 canvas.json。
      const cleaned = strict.data as CanvasWorkspaceSnapshot;
      atomicWriteJson(fileOf(id), cleaned);
      return { snapshot: cleaned };
    },

    remove(id: string): void {
      if (!isWorkspaceId(id)) {
        throw new WorkflowStoreError('invalid-id', `invalid workspace id ${id}`);
      }
      const dir = join(workspacesDir, id);
      if (!existsSync(dir)) {
        throw new WorkflowStoreError('workspace-not-found', `workspace ${id} not found`);
      }
      rmSync(dir, { recursive: true, force: true });
    },
  };
}

/** Content hash helper reused by the route layer for the build manifest. */
export function hashContent(text: string): string {
  return createHash('sha256').update(text).digest('hex').slice(0, 16);
}
