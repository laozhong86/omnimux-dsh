/**
 * Ported (narrowed) from Gxgen `apps/web/src/types/canvas.ts`.
 *
 * Keeps the workspace snapshot contract that survives extraction:
 * nodes + edges + version (optimistic locking). Timeline tracks and text
 * overlays are out of scope for the spike canvas core.
 */

import type { Node, Edge } from '@xyflow/react';

export type SerializedCanvasNode = Node<Record<string, unknown>>;
export type SerializedCanvasEdge = Edge<Record<string, unknown>>;

export interface CanvasWorkspaceSnapshot {
  id: string;
  title?: string | null;
  nodes: SerializedCanvasNode[];
  edges: SerializedCanvasEdge[];
  metadata?: Record<string, unknown> | null;
  /** 乐观锁版本号（Gxgen 语义保留） */
  version: number;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface SaveCanvasWorkspacePayload {
  title?: string | null;
  nodes?: SerializedCanvasNode[];
  edges?: SerializedCanvasEdge[];
  metadata?: Record<string, unknown> | null;
  expectedVersion?: number;
}

/** 从当前 store 状态生成快照（spike 演示用，不落盘） */
export function buildWorkspaceSnapshot(
  id: string,
  nodes: SerializedCanvasNode[],
  edges: SerializedCanvasEdge[],
): CanvasWorkspaceSnapshot {
  return {
    id,
    nodes,
    edges,
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
