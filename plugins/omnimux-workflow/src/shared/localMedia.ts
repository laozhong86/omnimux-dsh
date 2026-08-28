/**
 * Local imported media: path index (realPath) → preview URL.
 * Import never copies the source file; blob: URLs must not persist.
 */
import { WORKFLOW_ROUTE_PREFIX } from './api.ts';
import type { MaterialType } from './canvasTypes.ts';

const IMAGE_EXT = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg', 'avif', 'heic']);
const VIDEO_EXT = new Set(['mp4', 'webm', 'mov', 'mkv', 'avi', 'm4v']);
const AUDIO_EXT = new Set(['mp3', 'wav', 'm4a', 'aac', 'flac', 'ogg', 'opus']);

const MIME_BY_EXT: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
  bmp: 'image/bmp',
  svg: 'image/svg+xml',
  avif: 'image/avif',
  heic: 'image/heic',
  mp4: 'video/mp4',
  webm: 'video/webm',
  mov: 'video/quicktime',
  mkv: 'video/x-matroska',
  avi: 'video/x-msvideo',
  m4v: 'video/mp4',
  mp3: 'audio/mpeg',
  wav: 'audio/wav',
  m4a: 'audio/mp4',
  aac: 'audio/aac',
  flac: 'audio/flac',
  ogg: 'audio/ogg',
  opus: 'audio/opus',
};

export function extensionOf(filename: string): string {
  const base = filename.split(/[/\\]/).pop() ?? filename;
  const dot = base.lastIndexOf('.');
  if (dot <= 0 || dot === base.length - 1) return '';
  return base.slice(dot + 1).toLowerCase();
}

export function mimeFromFilename(filename: string): string | undefined {
  return MIME_BY_EXT[extensionOf(filename)];
}

export function materialTypeFromFilename(filename: string, mime = ''): MaterialType | null {
  const normalized = (mime || '').toLowerCase().trim();
  if (normalized.startsWith('image/')) return 'image';
  if (normalized.startsWith('video/')) return 'video';
  if (normalized.startsWith('audio/')) return 'audio';
  const ext = extensionOf(filename);
  if (IMAGE_EXT.has(ext)) return 'image';
  if (VIDEO_EXT.has(ext)) return 'video';
  if (AUDIO_EXT.has(ext)) return 'audio';
  return null;
}

export function isAllowedImportedMedia(filename: string, mime = ''): boolean {
  return materialTypeFromFilename(filename, mime) !== null;
}

export function isBlobUrl(url: unknown): boolean {
  return typeof url === 'string' && url.startsWith('blob:');
}

export function isLocalFileUrl(url: unknown): boolean {
  if (typeof url !== 'string' || url.length === 0) return false;
  return url.includes('/api/local-file');
}

export function localFileMediaUrl(realPath: string): string {
  return `${WORKFLOW_ROUTE_PREFIX}/api/local-file?path=${encodeURIComponent(realPath)}`;
}

export function localFilePathFromUrl(url: unknown): string | null {
  if (typeof url !== 'string' || url.length === 0) return null;
  try {
    const parsed = new URL(url, 'http://127.0.0.1');
    if (!parsed.pathname.endsWith('/api/local-file')) return null;
    const path = parsed.searchParams.get('path');
    return path && path.length > 0 ? path : null;
  } catch {
    return null;
  }
}

export function looksAbsolutePath(path: string): boolean {
  if (!path || path.includes('\0')) return false;
  if (path.startsWith('/')) return true;
  return /^[a-zA-Z]:[\\/]/.test(path);
}

export function displayNameOf(realPath: string, originalName?: string): string {
  const named = typeof originalName === 'string' ? originalName.trim() : '';
  if (named) return named;
  const trimmed = realPath.replace(/[/\\]+$/, '');
  const parts = trimmed.split(/[/\\]/);
  return parts[parts.length - 1] || realPath;
}

export interface ImportedMediaFields {
  [key: string]: unknown;
  mediaUrl: string;
  status: 'ready';
  content: string;
  originalName: string;
  realPath: string;
  fileSize?: number;
  mimeType?: string;
  isMissing: false;
  mediaAssets: Array<{ type: MaterialType; url: string; path: string }>;
}

export function buildImportedMediaData(input: {
  realPath: string;
  name: string;
  materialType: MaterialType;
  mime?: string;
  size?: number;
}): ImportedMediaFields {
  const url = localFileMediaUrl(input.realPath);
  return {
    mediaUrl: url,
    status: 'ready',
    content: input.name,
    originalName: input.name,
    realPath: input.realPath,
    fileSize: input.size,
    mimeType: input.mime || mimeFromFilename(input.name) || mimeFromFilename(input.realPath),
    isMissing: false,
    mediaAssets: [{ type: input.materialType, url, path: input.realPath }],
  };
}

export interface LocalMediaProbeItem {
  path: string;
  exists: boolean;
  size?: number;
  mime?: string;
  name?: string;
}

export function applyLocalMediaProbe<T extends { data?: Record<string, unknown> }>(
  nodes: T[],
  items: LocalMediaProbeItem[],
): T[] {
  const byPath = new Map(items.map((item) => [item.path, item]));
  return nodes.map((node) => {
    const data = node.data && typeof node.data === 'object' ? { ...node.data } : {};
    const realPath = typeof data.realPath === 'string' ? data.realPath : '';
    if (!realPath) return node;
    const hit = byPath.get(realPath);
    if (!hit) return node;
    if (hit.exists) {
      if (data.status === 'offline' || data.isMissing === true) {
        data.status = 'ready';
        data.isMissing = false;
        data.mediaUrl = localFileMediaUrl(realPath);
        return { ...node, data };
      }
      return node;
    }
    data.status = 'offline';
    data.isMissing = true;
    return { ...node, data };
  });
}

export function collectRealPaths(nodes: Array<{ data?: Record<string, unknown> }>): string[] {
  const paths: string[] = [];
  const seen = new Set<string>();
  for (const node of nodes) {
    const realPath = typeof node.data?.realPath === 'string' ? node.data.realPath : '';
    if (!realPath || seen.has(realPath)) continue;
    seen.add(realPath);
    paths.push(realPath);
  }
  return paths;
}
