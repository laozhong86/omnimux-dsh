/**
 * 持久化消毒：只保留 canvas.json 契约字段。
 *
 * xyflow 运行时会往 Node 上挂 measured / dragging / positionAbsolute /
 * resizing 等瞬时字段。旧 sanitize 用展开运算符原样带回这些键，导致：
 * 1) 首次布局一量尺寸就脏 → 1s 自动 PUT；
 * 2) 点选 / 重排版若触发再 measure，version 狂涨，顶栏「保存中」像刷新；
 * 3) Host zod 读时剥掉 measured，写时却落原始 next → 磁盘脏字段常驻。
 *
 * 白名单与 src/workflow/workspace/snapshotSchema.ts 的 canvasNodeSchema /
 * canvasEdgeSchema 对齐；selected 强制 false（仅选中不得脏文档）。
 */

import type {
  SerializedCanvasEdge,
  SerializedCanvasNode,
} from '../../shared/canvasTypes';
import { isBlobUrl, localFileMediaUrl } from '../../shared/localMedia.ts';

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? { ...(value as Record<string, unknown>) }
    : {};
}

function sanitizeImportedMedia(data: Record<string, unknown>): void {
  const realPath = typeof data.realPath === 'string' ? data.realPath : '';
  if (realPath) {
    const url = localFileMediaUrl(realPath);
    data.mediaUrl = url;
    if (Array.isArray(data.mediaAssets)) {
      data.mediaAssets = data.mediaAssets.map((asset) => {
        if (!asset || typeof asset !== 'object') return asset;
        const row = { ...(asset as Record<string, unknown>) };
        if (isBlobUrl(row.url) || !row.url) row.url = url;
        if (!row.path) row.path = realPath;
        return row;
      });
    }
  } else if (isBlobUrl(data.mediaUrl)) {
    delete data.mediaUrl;
  }

  if (Array.isArray(data.mediaAssets)) {
    const cleaned = data.mediaAssets
      .map((asset) => {
        if (!asset || typeof asset !== 'object') return null;
        const row = { ...(asset as Record<string, unknown>) };
        if (isBlobUrl(row.url)) {
          if (typeof row.path === 'string' && row.path) {
            row.url = localFileMediaUrl(row.path);
          } else {
            delete row.url;
          }
        }
        return row.url || row.path ? row : null;
      })
      .filter(Boolean);
    if (cleaned.length === 0) delete data.mediaAssets;
    else data.mediaAssets = cleaned;
  }
}

/** Strip island + xyflow transient fields before signature / PUT. */
export function sanitizeNodes(nodes: SerializedCanvasNode[]): SerializedCanvasNode[] {
  return nodes.map((node) => {
    const raw = node as SerializedCanvasNode & Record<string, unknown>;
    const data = asRecord(raw.data);
    delete data.__catalog;
    sanitizeImportedMedia(data);

    const clean: Record<string, unknown> = {
      id: raw.id,
      type: raw.type,
      position: raw.position,
      data,
      selected: false,
    };

    if (typeof raw.draggable === 'boolean') clean.draggable = raw.draggable;
    if (typeof raw.selectable === 'boolean') clean.selectable = raw.selectable;
    if (typeof raw.deletable === 'boolean') clean.deletable = raw.deletable;
    if (typeof raw.width === 'number') clean.width = raw.width;
    if (typeof raw.height === 'number') clean.height = raw.height;
    if (typeof raw.parentId === 'string') clean.parentId = raw.parentId;
    if (typeof raw.zIndex === 'number') clean.zIndex = raw.zIndex;
    if (raw.style && typeof raw.style === 'object') clean.style = asRecord(raw.style);

    return clean as SerializedCanvasNode;
  });
}

export function sanitizeEdges(edges: SerializedCanvasEdge[]): SerializedCanvasEdge[] {
  return edges.map((edge) => {
    const raw = edge as SerializedCanvasEdge & Record<string, unknown>;
    const clean: Record<string, unknown> = {
      id: raw.id,
      source: raw.source,
      target: raw.target,
    };

    if (raw.sourceHandle !== undefined) clean.sourceHandle = raw.sourceHandle;
    if (raw.targetHandle !== undefined) clean.targetHandle = raw.targetHandle;
    if (typeof raw.type === 'string') clean.type = raw.type;
    if (typeof raw.animated === 'boolean') clean.animated = raw.animated;
    if (raw.data && typeof raw.data === 'object') clean.data = asRecord(raw.data);
    if (raw.style && typeof raw.style === 'object') clean.style = asRecord(raw.style);

    return clean as SerializedCanvasEdge;
  });
}

/** Stable content signature (drives dirty detection). */
export function signatureOf(
  nodes: SerializedCanvasNode[],
  edges: SerializedCanvasEdge[],
): string {
  return JSON.stringify({ nodes: sanitizeNodes(nodes), edges: sanitizeEdges(edges) });
}
