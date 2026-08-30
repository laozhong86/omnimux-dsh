/**
 * Copy an external file into `<ProjectRoot>/assets/imported/`.
 * Never unlink / rename / move the user's original. Streaming only.
 */
import {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  renameSync,
  statSync,
  unlinkSync,
} from 'node:fs';
import { statfsSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { isAllowedImportedMedia } from '../../shared/localMedia.ts';
import {
  assertProjectWriteSafe,
  resolveProjectPaths,
  toProjectRelativePath,
} from '../../projects/paths.ts';
import { WorkflowStoreError } from '../workspace/WorkflowStoreError.ts';

export const DISK_HEADROOM_BYTES = 500 * 1024 * 1024;
export const DISK_SIZE_FACTOR = 1.5;

export interface StatFsLike {
  bavail: number | bigint;
  bsize: number | bigint;
}

export type StatFsFn = (path: string) => StatFsLike;

export interface CopyIntoImportedResult {
  destAbs: string;
  relativePath: string;
  size: number;
  name: string;
}

function baseAndExt(fileName: string): { base: string; ext: string } {
  const ext = extname(fileName);
  const base = ext ? fileName.slice(0, -ext.length) : fileName;
  return { base: base || fileName, ext };
}

export function uniqueImportedName(importedDir: string, originalName: string): string {
  const safe = basename(originalName).replace(/[\u0000]/g, '');
  if (!safe || safe === '.' || safe === '..') {
    throw new WorkflowStoreError('invalid-path', 'file name is required');
  }
  if (!existsSync(join(importedDir, safe))) return safe;
  const { base, ext } = baseAndExt(safe);
  let n = 1;
  while (existsSync(join(importedDir, `${base} (${n})${ext}`))) {
    n += 1;
  }
  return `${base} (${n})${ext}`;
}

export function assertDiskSpace(
  root: string,
  incomingBytes: number,
  statfs: StatFsFn = statfsSync,
): void {
  let info: StatFsLike;
  try {
    info = statfs(root);
  } catch {
    throw new WorkflowStoreError('disk-space-insufficient', 'unable to inspect free disk space');
  }
  const free = Number(info.bavail) * Number(info.bsize);
  const needed = incomingBytes * DISK_SIZE_FACTOR + DISK_HEADROOM_BYTES;
  if (!Number.isFinite(free) || free < needed) {
    throw new WorkflowStoreError(
      'disk-space-insufficient',
      `free disk ${String(free)} < required ${String(needed)}`,
    );
  }
}

export async function copyFileIntoImported(opts: {
  projectRoot: string;
  sourceAbs: string;
  statfs?: StatFsFn;
}): Promise<CopyIntoImportedResult> {
  const { projectRoot, sourceAbs, statfs } = opts;
  if (typeof sourceAbs !== 'string' || sourceAbs.trim() === '') {
    throw new WorkflowStoreError('invalid-path', 'source path is required');
  }
  if (sourceAbs.includes('\0') || sourceAbs.startsWith('blob:')) {
    throw new WorkflowStoreError(
      sourceAbs.startsWith('blob:') ? 'blob-url-forbidden' : 'invalid-path',
      'source path is invalid',
    );
  }
  let stat;
  try {
    stat = statSync(sourceAbs);
  } catch {
    throw new WorkflowStoreError('not-found', `path not found: ${sourceAbs}`);
  }
  if (stat.isDirectory() || !stat.isFile()) {
    throw new WorkflowStoreError('not-a-file', 'path is not a regular file');
  }
  if (!isAllowedImportedMedia(sourceAbs)) {
    throw new WorkflowStoreError('unsupported-media', 'file type is not an imported media');
  }

  const paths = resolveProjectPaths(projectRoot);
  mkdirSync(paths.importedDir, { recursive: true });
  assertDiskSpace(paths.projectRoot, stat.size, statfs ?? statfsSync);

  const name = uniqueImportedName(paths.importedDir, basename(sourceAbs));
  const destAbs = join(paths.importedDir, name);
  assertProjectWriteSafe(destAbs, paths.projectRoot);
  const tmp = `${destAbs}.tmp-${process.pid}-${Date.now()}`;
  try {
    await pipeline(createReadStream(sourceAbs), createWriteStream(tmp));
    assertProjectWriteSafe(tmp, paths.projectRoot);
    renameSync(tmp, destAbs);
  } catch (error) {
    try {
      if (existsSync(tmp)) unlinkSync(tmp);
    } catch {
      // ignore tmp cleanup
    }
    if (error instanceof WorkflowStoreError) throw error;
    throw new WorkflowStoreError('internal', error instanceof Error ? error.message : 'copy failed');
  }

  return {
    destAbs,
    relativePath: toProjectRelativePath(paths.projectRoot, destAbs),
    size: stat.size,
    name,
  };
}
