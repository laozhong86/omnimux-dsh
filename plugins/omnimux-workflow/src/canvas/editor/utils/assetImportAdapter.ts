/**
 * 资产侧栏 → 导入节点：只读路径，按文件 MIME 建 LocalFileDraft。
 * 无 React / store 依赖。没有绝对路径就不建节点。
 */

import { draftFromRealPath } from './localFileDraft.ts';
import type { LocalFileDraft } from './resourcePickerPolicy.ts';

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function asPath(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function firstFileRecord(asset: Record<string, unknown>): Record<string, unknown> | null {
  if (!Array.isArray(asset.files) || asset.files.length === 0) return null;
  const first = asset.files[0];
  return isRecord(first) ? first : null;
}

/** 依次读 real_path / realPath / files[0].real_path|realPath|path。 */
export function readAssetRealPath(asset: unknown): string {
  if (!isRecord(asset)) return '';
  const direct = asPath(asset.real_path) || asPath(asset.realPath);
  if (direct) return direct;
  const file = firstFileRecord(asset);
  if (!file) return '';
  return asPath(file.real_path) || asPath(file.realPath) || asPath(file.path);
}

function assetDisplayName(asset: Record<string, unknown>): string | undefined {
  const name = asPath(asset.name) || asPath(asset.originalName) || asPath(asset.title);
  if (name) return name;
  const file = firstFileRecord(asset);
  if (!file) return undefined;
  const fileName = asPath(file.original_name) || asPath(file.name);
  return fileName || undefined;
}

export type AssetImportDraftResult =
  | { ok: true; draft: LocalFileDraft }
  | { ok: false; reason: 'needPath' | 'unsupported' };

export function classifyAssetImport(asset: unknown): AssetImportDraftResult {
  const realPath = readAssetRealPath(asset);
  if (!realPath) return { ok: false, reason: 'needPath' };
  const extras = isRecord(asset)
    ? { name: assetDisplayName(asset) }
    : {};
  const draft = draftFromRealPath(realPath, extras);
  if (!draft) return { ok: false, reason: 'unsupported' };
  return { ok: true, draft };
}

export function draftFromAsset(asset: unknown): LocalFileDraft | null {
  const result = classifyAssetImport(asset);
  return result.ok ? result.draft : null;
}
