/**
 * Ported (narrowed) from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/canvasInputMutationGateway.ts`
 * (validated by the extraction spike): every structural nodes/edges change
 * (connect, disconnect, node patches) funnels through
 * planCanvasInputMutation for unified validation. The model-eligibility
 * rewrite loop is cut (preset-service coupling).
 */

import type { Edge, Node } from '@xyflow/react';
// 显式 .ts 扩展名：node --test 的 type-stripping 不做 TS 扩展名解析
import { normalizeCanvasEdge, type CanvasConnectionLike } from './canvasConnectionUtils.ts';
import { validateCanvasConnectionStructure } from './canvasConnectionStructure.ts';

export type CanvasNode = Node<Record<string, unknown>>;

export interface CanvasInputMutationState {
  nodes: CanvasNode[];
  edges: Edge[];
}

export interface CanvasInputNodePatch {
  nodeId: string;
  data: Record<string, unknown>;
  node?: Partial<CanvasNode>;
}

export interface CanvasInputMutation {
  addNodes?: CanvasNode[];
  addEdges?: CanvasConnectionLike[];
  removeNodeIds?: string[];
  removeEdgeIds?: string[];
  nodePatches?: CanvasInputNodePatch[];
}

export interface CanvasInputMutationPlan extends CanvasInputMutationState {
  status: 'allowed' | 'rejected' | 'configuration_error';
  reasonCode?: string;
}

function rejectMutation(
  current: CanvasInputMutationState,
  status: CanvasInputMutationPlan['status'],
  reasonCode: string,
): CanvasInputMutationPlan {
  return {
    nodes: current.nodes,
    edges: current.edges,
    status,
    reasonCode,
  };
}

function applyNodePatches(nodes: CanvasNode[], patches: CanvasInputNodePatch[]): CanvasNode[] | null {
  const patchById = new Map<string, CanvasInputNodePatch>();
  for (const patch of patches) {
    if (patchById.has(patch.nodeId)) return null;
    patchById.set(patch.nodeId, patch);
  }
  return nodes.map((node) => {
    const patch = patchById.get(node.id);
    if (!patch) return node;
    return {
      ...node,
      ...(patch.node ?? {}),
      data: { ...(node.data as Record<string, unknown>), ...patch.data },
    } as CanvasNode;
  });
}

export function planCanvasInputMutation(
  current: CanvasInputMutationState,
  mutation: CanvasInputMutation,
): CanvasInputMutationPlan {
  const addedNodeIds = new Set<string>();
  for (const node of mutation.addNodes ?? []) {
    if (addedNodeIds.has(node.id) || current.nodes.some((existing) => existing.id === node.id)) {
      return rejectMutation(current, 'rejected', 'duplicate_node');
    }
    addedNodeIds.add(node.id);
  }

  const patchedNodes = applyNodePatches(
    [...current.nodes, ...(mutation.addNodes ?? [])],
    mutation.nodePatches ?? [],
  );
  if (!patchedNodes) return rejectMutation(current, 'rejected', 'duplicate_node_patch');
  const nodeById = new Set(patchedNodes.map((node) => node.id));
  if ((mutation.nodePatches ?? []).some((patch) => !nodeById.has(patch.nodeId))) {
    return rejectMutation(current, 'rejected', 'missing_node');
  }

  const removeEdgeIds = new Set(mutation.removeEdgeIds ?? []);
  const removeNodeIds = new Set(mutation.removeNodeIds ?? []);
  const retainedNodes = patchedNodes.filter((node) => !removeNodeIds.has(node.id));
  const retainedEdges = current.edges.filter((edge) => (
    !removeEdgeIds.has(edge.id)
    && !removeNodeIds.has(edge.source)
    && !removeNodeIds.has(edge.target)
  ));
  const workingEdges = [...retainedEdges];
  for (const edge of mutation.addEdges ?? []) {
    const normalizedEdge = normalizeCanvasEdge(edge);
    const structure = validateCanvasConnectionStructure(normalizedEdge, retainedNodes, workingEdges);
    if (!structure.valid) return rejectMutation(current, 'rejected', structure.reasonCode ?? 'invalid_connection');
    workingEdges.push(normalizedEdge);
  }

  return {
    nodes: retainedNodes,
    edges: workingEdges,
    status: 'allowed',
  };
}

export function dispatchSuccessfulConnectionEvents(edges: Edge[]): void {
  if (typeof window === 'undefined') return;
  for (const edge of edges) {
    queueMicrotask(() => {
      window.dispatchEvent(new CustomEvent('canvas:connection', {
        detail: {
          source: edge.source,
          target: edge.target,
          sourceHandle: edge.sourceHandle,
          targetHandle: edge.targetHandle,
        },
      }));
    });
  }
}
