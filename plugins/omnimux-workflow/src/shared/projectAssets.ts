/**
 * Project-private asset tree (assets.json) — shared types + pure helpers.
 *
 * Disk: $DSH_HOME/omnimux/workflow/workspaces/<id>/assets.json
 * Independent `rev` (do not bump canvas.json version). Never copy/unlink
 * user source files; records are path indexes only. blob: is forbidden.
 */
import { looksAbsolutePath } from './localMedia.ts';

export const PROJECT_ASSETS_SCHEMA_VERSION = 1 as const;

export const PROJECT_ASSET_FILE_TYPES = ['image', 'video', 'audio', 'doc'] as const;
export type ProjectAssetFileType = (typeof PROJECT_ASSET_FILE_TYPES)[number];

export interface ProjectAssetsFolder {
  id: string;
  name: string;
  parentId: string | null;
  real_path?: string;
  updatedAt: number;
}

export interface ProjectAssetsItem {
  id: string;
  name: string;
  type: ProjectAssetFileType;
  parentId: string | null;
  real_path: string;
  updatedAt: number;
}

export interface ProjectAssetsDocument {
  schemaVersion: typeof PROJECT_ASSETS_SCHEMA_VERSION;
  rev: number;
  folders: ProjectAssetsFolder[];
  items: ProjectAssetsItem[];
}

export interface SaveProjectAssetsPayload {
  expectedRev: number;
  folders: ProjectAssetsFolder[];
  items: ProjectAssetsItem[];
}

export interface MkdirProjectAssetsPayload {
  name: string;
  parentId?: string | null;
  expectedRev?: number;
}

export interface IndexProjectAssetsPayload {
  paths: string[];
  parentId?: string | null;
  expectedRev?: number;
}

export const MAX_FOLDER_NAME_LENGTH = 200;

export function emptyProjectAssetsDocument(): ProjectAssetsDocument {
  return {
    schemaVersion: PROJECT_ASSETS_SCHEMA_VERSION,
    rev: 0,
    folders: [],
    items: [],
  };
}

export function normalizeParentId(value: unknown): string | null {
  if (value == null) return null;
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
}

export function validateFolderName(
  value: unknown,
): { ok: true; name: string } | { ok: false; code: 'name-invalid'; message: string } {
  if (typeof value !== 'string') {
    return { ok: false, code: 'name-invalid', message: 'folder name is required' };
  }
  const name = value.trim();
  if (name.length === 0) {
    return { ok: false, code: 'name-invalid', message: 'folder name is required' };
  }
  if (name.length > MAX_FOLDER_NAME_LENGTH) {
    return {
      ok: false,
      code: 'name-invalid',
      message: `folder name exceeds ${String(MAX_FOLDER_NAME_LENGTH)} characters`,
    };
  }
  if (name.includes('/') || name.includes('\\') || /[\u0000-\u001f]/.test(name)) {
    return { ok: false, code: 'name-invalid', message: 'folder name contains invalid characters' };
  }
  return { ok: true, name };
}

export function forbiddenPathCode(
  raw: unknown,
): 'blob-url-forbidden' | 'invalid-path' | null {
  if (typeof raw !== 'string' || raw.trim() === '') return 'invalid-path';
  if (raw.includes('\0')) return 'invalid-path';
  if (raw.startsWith('blob:')) return 'blob-url-forbidden';
  if (!looksAbsolutePath(raw)) return 'invalid-path';
  return null;
}

export function isProjectAssetFileType(value: unknown): value is ProjectAssetFileType {
  return typeof value === 'string' && (PROJECT_ASSET_FILE_TYPES as readonly string[]).includes(value);
}

export function collectSubtreeIds(
  folders: Array<{ id: string; parentId: string | null }>,
  items: Array<{ id: string; parentId: string | null }>,
  rootId: string,
): string[] {
  const ids = new Set<string>([rootId]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const folder of folders) {
      const parent = folder.parentId;
      if (parent && ids.has(parent) && !ids.has(folder.id)) {
        ids.add(folder.id);
        grew = true;
      }
    }
    for (const item of items) {
      const parent = item.parentId;
      if (parent && ids.has(parent) && !ids.has(item.id)) {
        ids.add(item.id);
        grew = true;
      }
    }
  }
  return [...ids];
}
