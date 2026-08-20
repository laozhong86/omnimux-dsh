/**
 * Ported verbatim from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/canvasConnectionStructure.ts`.
 *
 * 无改动：结构校验（自连/重复/缺节点/类型合同/环路）完全保留，
 * 是连线逻辑的核心。
 */

import { getOutgoers, type Edge, type Node, type Connection } from '@xyflow/react';
import { isNodeConnectionValid } from './connectionConfig';

export interface CanvasConnectionStructureValidation {
  valid: boolean;
  reasonCode?: 'self_connection' | 'duplicate_edge' | 'missing_node' | 'cycle' | 'type_contract';
}

type ConnectionLike = Pick<Connection, 'source' | 'target'> & Partial<Pick<Edge, 'sourceHandle' | 'targetHandle'>>;

export function validateCanvasConnectionStructure(
  connection: ConnectionLike,
  nodes: Array<Node<Record<string, unknown>>>,
  edges: Edge[],
): CanvasConnectionStructureValidation {
  if (connection.source === connection.target) {
    return { valid: false, reasonCode: 'self_connection' };
  }
  if (edges.some((edge) => edge.source === connection.source && edge.target === connection.target)) {
    return { valid: false, reasonCode: 'duplicate_edge' };
  }

  const sourceNode = nodes.find((node) => node.id === connection.source);
  const targetNode = nodes.find((node) => node.id === connection.target);
  if (!sourceNode || !targetNode) {
    return { valid: false, reasonCode: 'missing_node' };
  }
  if (!isNodeConnectionValid(sourceNode, targetNode)) {
    return { valid: false, reasonCode: 'type_contract' };
  }

  const visited = new Set<string>();
  const queue = [targetNode];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || visited.has(current.id)) continue;
    visited.add(current.id);
    for (const outgoer of getOutgoers(current, nodes, edges)) {
      if (outgoer.id === connection.source) {
        return { valid: false, reasonCode: 'cycle' };
      }
      queue.push(outgoer);
    }
  }

  return { valid: true };
}
