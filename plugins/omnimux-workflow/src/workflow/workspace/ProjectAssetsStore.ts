/**
 * ProjectAssetsStore: assets.json CRUD + independent optimistic lock.
 *
 * Layout: workspaces/<id>/assets.json (sibling of canvas.json).
 * GET of a missing / corrupt file returns an empty document (rev:0), not 404.
 * Workspace existence is canvas.json; missing canvas.json → workspace-not-found.
 * Writes are atomic (tmp-pid-ts + rename). Never copy / unlink user sources.
 */
import { randomUUID } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, isAbsolute, join } from 'node:path';
import { looksAbsolutePath, materialTypeFromFilename } from '../../shared/localMedia.ts';
import {
  emptyProjectAssetsDocument,
  forbiddenPathCode,
  isProjectAssetFileType,
  normalizeParentId,
  PROJECT_ASSETS_SCHEMA_VERSION,
  validateFolderName,
  type IndexProjectAssetsPayload,
  type MkdirProjectAssetsPayload,
  type ProjectAssetFileType,
  type ProjectAssetsDocument,
  type ProjectAssetsFolder,
  type ProjectAssetsItem,
  type SaveProjectAssetsPayload,
} from '../../shared/projectAssets.ts';
import { WorkflowStoreError } from './WorkflowStoreError.ts';

export interface ProjectAssetsStore {
  get(workspaceId: string): ProjectAssetsDocument;
  save(workspaceId: string, payload: SaveProjectAssetsPayload): ProjectAssetsDocument;
  mkdir(workspaceId: string, payload: MkdirProjectAssetsPayload): ProjectAssetsDocument;
  index(workspaceId: string, payload: IndexProjectAssetsPayload): ProjectAssetsDocument;
}

function isWorkspaceId(id: string): boolean {
  return /^ws_[a-zA-Z0-9_-]{1,128}$/.test(id);
}

function newFolderId(): string {
  return `fld_${randomUUID().replace(/-/g, '').slice(0, 12)}`;
}

function newItemId(): string {
  return `ast_${randomUUID().replace(/-/g, '').slice(0, 12)}`;
}

function atomicWriteJson(filePath: string, value: unknown): void {
  mkdirSync(join(filePath, '..'), { recursive: true });
  const tmp = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  writeFileSync(tmp, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  renameSync(tmp, filePath);
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function fileTypeOf(name: string): ProjectAssetFileType {
  const material = materialTypeFromFilename(name);
  if (material === 'image' || material === 'video' || material === 'audio') return material;
  return 'doc';
}

function hydrateFolder(row: unknown): ProjectAssetsFolder | null {
  if (!row || typeof row !== 'object' || Array.isArray(row)) return null;
  const rec = row as Record<string, unknown>;
  if (typeof rec.id !== 'string' || rec.id.trim() === '') return null;
  const named = validateFolderName(rec.name);
  if (!named.ok) return null;
  const folder: ProjectAssetsFolder = {
    id: rec.id,
    name: named.name,
    parentId: normalizeParentId(rec.parentId),
    updatedAt: asNumber(rec.updatedAt, 0),
  };
  if (typeof rec.real_path === 'string' && rec.real_path.trim() !== '') {
    folder.real_path = rec.real_path;
  }
  return folder;
}

function hydrateItem(row: unknown): ProjectAssetsItem | null {
  if (!row || typeof row !== 'object' || Array.isArray(row)) return null;
  const rec = row as Record<string, unknown>;
  if (typeof rec.id !== 'string' || rec.id.trim() === '') return null;
  if (typeof rec.name !== 'string' || rec.name.trim() === '') return null;
  if (typeof rec.real_path !== 'string' || rec.real_path.trim() === '') return null;
  const type = isProjectAssetFileType(rec.type) ? rec.type : fileTypeOf(rec.name);
  return {
    id: rec.id,
    name: rec.name.trim(),
    type,
    parentId: normalizeParentId(rec.parentId),
    real_path: rec.real_path,
    updatedAt: asNumber(rec.updatedAt, 0),
  };
}

function readAssetsFile(filePath: string): ProjectAssetsDocument {
  if (!existsSync(filePath)) return emptyProjectAssetsDocument();
  let raw: string;
  try {
    raw = readFileSync(filePath, 'utf8');
  } catch {
    return emptyProjectAssetsDocument();
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return emptyProjectAssetsDocument();
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return emptyProjectAssetsDocument();
  }
  const rec = parsed as Record<string, unknown>;
  const folders = Array.isArray(rec.folders)
    ? rec.folders.map(hydrateFolder).filter((row): row is ProjectAssetsFolder => row !== null)
    : [];
  const items = Array.isArray(rec.items)
    ? rec.items.map(hydrateItem).filter((row): row is ProjectAssetsItem => row !== null)
    : [];
  return {
    schemaVersion: PROJECT_ASSETS_SCHEMA_VERSION,
    rev: asNumber(rec.rev, 0),
    folders,
    items,
  };
}

function assertWorkspaceExists(workspacesDir: string, id: string): void {
  if (!isWorkspaceId(id)) {
    throw new WorkflowStoreError('invalid-id', `invalid workspace id ${id}`);
  }
  const canvas = join(workspacesDir, id, 'canvas.json');
  if (!existsSync(canvas)) {
    throw new WorkflowStoreError('workspace-not-found', `workspace ${id} not found`);
  }
}

function assertNoBlobOrRelative(path: string, field: string): void {
  const code = forbiddenPathCode(path);
  if (code === 'blob-url-forbidden') {
    throw new WorkflowStoreError('blob-url-forbidden', `${field} must not be a blob: URL`);
  }
  if (code === 'invalid-path') {
    throw new WorkflowStoreError('invalid-path', `${field} must be an absolute path without NUL`);
  }
  if (!isAbsolute(path) || !looksAbsolutePath(path)) {
    throw new WorkflowStoreError('invalid-path', `${field} must be an absolute path`);
  }
}

function parentExists(doc: ProjectAssetsDocument, parentId: string | null): boolean {
  if (parentId === null) return true;
  return doc.folders.some((folder) => folder.id === parentId);
}

function siblingFolderConflict(
  folders: ProjectAssetsFolder[],
  parentId: string | null,
  name: string,
  exceptId?: string,
): boolean {
  return folders.some(
    (folder) =>
      folder.parentId === parentId
      && folder.name === name
      && folder.id !== exceptId,
  );
}

function assertWritableDocument(next: ProjectAssetsDocument): void {
  const folderIds = new Set<string>();
  for (const folder of next.folders) {
    const named = validateFolderName(folder.name);
    if (!named.ok) {
      throw new WorkflowStoreError(named.code, named.message);
    }
    if (folderIds.has(folder.id)) {
      throw new WorkflowStoreError('invalid-id', `duplicate folder id ${folder.id}`);
    }
    folderIds.add(folder.id);
    if (folder.real_path) {
      assertNoBlobOrRelative(folder.real_path, 'folder.real_path');
    }
  }
  for (const folder of next.folders) {
    if (folder.parentId && !folderIds.has(folder.parentId)) {
      throw new WorkflowStoreError('invalid-id', `folder parent ${folder.parentId} does not exist`);
    }
  }
  const seenNames = new Map<string, Set<string>>();
  for (const folder of next.folders) {
    const key = folder.parentId ?? '';
    const bucket = seenNames.get(key) ?? new Set<string>();
    if (bucket.has(folder.name)) {
      throw new WorkflowStoreError('name-conflict', `folder name already exists at this level: ${folder.name}`);
    }
    bucket.add(folder.name);
    seenNames.set(key, bucket);
  }

  const itemIds = new Set<string>();
  for (const item of next.items) {
    if (itemIds.has(item.id)) {
      throw new WorkflowStoreError('invalid-id', `duplicate item id ${item.id}`);
    }
    itemIds.add(item.id);
    if (typeof item.name !== 'string' || item.name.trim() === '') {
      throw new WorkflowStoreError('name-invalid', 'item name is required');
    }
    if (!isProjectAssetFileType(item.type)) {
      throw new WorkflowStoreError('invalid-path', `unknown item type ${String(item.type)}`);
    }
    assertNoBlobOrRelative(item.real_path, 'item.real_path');
    if (item.parentId && !folderIds.has(item.parentId)) {
      throw new WorkflowStoreError('invalid-id', `item parent ${item.parentId} does not exist`);
    }
    // Missing sources stay as records (offline). Existing directories must not
    // land in items — they belong in folders.
    if (existsSync(item.real_path)) {
      let st;
      try {
        st = statSync(item.real_path);
      } catch {
        st = null;
      }
      if (st?.isDirectory()) {
        throw new WorkflowStoreError('not-a-file', 'path is not a regular file');
      }
    }
  }
}

function persist(filePath: string, current: ProjectAssetsDocument, next: Omit<ProjectAssetsDocument, 'rev' | 'schemaVersion'>): ProjectAssetsDocument {
  const document: ProjectAssetsDocument = {
    schemaVersion: PROJECT_ASSETS_SCHEMA_VERSION,
    rev: current.rev + 1,
    folders: next.folders,
    items: next.items,
  };
  assertWritableDocument(document);
  atomicWriteJson(filePath, document);
  return document;
}

function assertExpectedRev(current: ProjectAssetsDocument, expectedRev: unknown): void {
  if (typeof expectedRev !== 'number') return;
  if (expectedRev !== current.rev) {
    throw new WorkflowStoreError(
      'version_conflict',
      `assets moved on: expected ${String(expectedRev)}, current ${String(current.rev)}`,
      { current: current.rev },
    );
  }
}

function indexOnePath(
  rawPath: string,
  parentId: string | null,
  now: number,
): { kind: 'file'; item: ProjectAssetsItem } | { kind: 'directory'; folder: ProjectAssetsFolder } {
  assertNoBlobOrRelative(rawPath, 'path');
  let stat;
  try {
    stat = statSync(rawPath);
  } catch {
    throw new WorkflowStoreError('not-found', `path not found: ${rawPath}`);
  }
  if (stat.isDirectory()) {
    return {
      kind: 'directory',
      folder: {
        id: newFolderId(),
        name: basename(rawPath.replace(/[/\\]+$/, '')) || rawPath,
        parentId,
        real_path: rawPath,
        updatedAt: now,
      },
    };
  }
  if (!stat.isFile()) {
    throw new WorkflowStoreError('not-a-file', 'path is not a regular file');
  }
  const name = basename(rawPath);
  return {
    kind: 'file',
    item: {
      id: newItemId(),
      name,
      type: fileTypeOf(name),
      parentId,
      real_path: rawPath,
      updatedAt: now,
    },
  };
}

export function createProjectAssetsStore(opts: {
  workspacesDir: string;
}): ProjectAssetsStore {
  const { workspacesDir } = opts;

  const fileOf = (id: string) => join(workspacesDir, id, 'assets.json');

  function load(id: string): { current: ProjectAssetsDocument; filePath: string } {
    assertWorkspaceExists(workspacesDir, id);
    return { current: readAssetsFile(fileOf(id)), filePath: fileOf(id) };
  }

  return {
    get(workspaceId: string): ProjectAssetsDocument {
      return load(workspaceId).current;
    },

    save(workspaceId: string, payload: SaveProjectAssetsPayload): ProjectAssetsDocument {
      const { current, filePath } = load(workspaceId);
      if (typeof payload.expectedRev !== 'number') {
        throw new WorkflowStoreError('version-required', 'expectedRev is required for saves');
      }
      assertExpectedRev(current, payload.expectedRev);
      if (!Array.isArray(payload.folders) || !Array.isArray(payload.items)) {
        throw new WorkflowStoreError('invalid-json', 'folders and items must be arrays');
      }
      return persist(filePath, current, {
        folders: payload.folders,
        items: payload.items,
      });
    },

    mkdir(workspaceId: string, payload: MkdirProjectAssetsPayload): ProjectAssetsDocument {
      const { current, filePath } = load(workspaceId);
      assertExpectedRev(current, payload.expectedRev);
      const named = validateFolderName(payload.name);
      if (!named.ok) {
        throw new WorkflowStoreError(named.code, named.message);
      }
      const parentId = normalizeParentId(payload.parentId);
      if (!parentExists(current, parentId)) {
        throw new WorkflowStoreError('invalid-id', 'parent folder does not exist');
      }
      if (siblingFolderConflict(current.folders, parentId, named.name)) {
        throw new WorkflowStoreError('name-conflict', `folder name already exists at this level: ${named.name}`);
      }
      const folder: ProjectAssetsFolder = {
        id: newFolderId(),
        name: named.name,
        parentId,
        updatedAt: Date.now(),
      };
      return persist(filePath, current, {
        folders: [...current.folders, folder],
        items: current.items,
      });
    },

    index(workspaceId: string, payload: IndexProjectAssetsPayload): ProjectAssetsDocument {
      const { current, filePath } = load(workspaceId);
      assertExpectedRev(current, payload.expectedRev);
      if (!Array.isArray(payload.paths)) {
        throw new WorkflowStoreError('invalid-json', 'paths must be an array');
      }
      const parentId = normalizeParentId(payload.parentId);
      if (!parentExists(current, parentId)) {
        throw new WorkflowStoreError('invalid-id', 'parent folder does not exist');
      }
      const now = Date.now();
      const folders = [...current.folders];
      const items = [...current.items];
      const existingPaths = new Set(items.map((item) => item.real_path));
      for (const raw of payload.paths) {
        if (typeof raw !== 'string') {
          throw new WorkflowStoreError('invalid-path', 'path must be a string');
        }
        const indexed = indexOnePath(raw, parentId, now);
        if (indexed.kind === 'directory') {
          if (siblingFolderConflict(folders, parentId, indexed.folder.name)) {
            throw new WorkflowStoreError(
              'name-conflict',
              `folder name already exists at this level: ${indexed.folder.name}`,
            );
          }
          folders.push(indexed.folder);
          continue;
        }
        if (existingPaths.has(indexed.item.real_path)) continue;
        existingPaths.add(indexed.item.real_path);
        items.push(indexed.item);
      }
      return persist(filePath, current, { folders, items });
    },
  };
}
