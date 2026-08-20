/**
 * Registry-driven node factory — replacement for the Gxgen nodeFactory
 * switch (validated in simplified form by the extraction spike).
 *
 * M1 palette: the single 'material' node type instantiated with four
 * materialType variants. Future node types flow through the registry
 * without touching this module (docs/contracts/adding-a-node.md).
 */

import { v4 as uuidv4 } from 'uuid';
import { createNode } from '../../nodes/registry';
import {
  createDefaultMaterialNodeData,
  getMaterialTypeLabel,
  type MaterialType,
} from '../../types/materialNode';
import { getDefaultNodeWidth } from './nodeSizeConfig';
import type { CanvasNode } from './canvasInputMutationGateway';

export interface WorkflowCreationResult {
  nodes: CanvasNode[];
  edges: [];
}

/** Create a material node of the given materialType via the registry. */
export function createMaterialNode(
  materialType: MaterialType,
  position: { x: number; y: number },
): WorkflowCreationResult {
  const id = uuidv4();
  const base = createNode('material', position, id);
  if (!base) return { nodes: [], edges: [] };
  const data = createDefaultMaterialNodeData(materialType, {
    label: getMaterialTypeLabel(materialType),
    status: 'empty',
    nodeWidth: getDefaultNodeWidth(materialType),
  });
  return {
    nodes: [{ ...base, data: data as unknown as Record<string, unknown> }],
    edges: [],
  };
}

/** 将新节点追加到现有节点列表，同时取消现有节点的选中状态（原样保留） */
export function appendWithSelectionReset(currentNodes: CanvasNode[], newNodes: CanvasNode[]): CanvasNode[] {
  const cleared = currentNodes.map((node) => ({ ...node, selected: false } as CanvasNode));
  return [...cleared, ...newNodes];
}
