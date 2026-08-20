/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/nodeFactory.ts`.
 *
 * 改动：只保留基础素材节点的创建（text/image/video/audio 均创建
 * type: 'material' 的 MaterialNode），裁掉模板（首尾帧/音频生成器等）、
 * MediaNode 导入分支与云存储 URL 解析。
 */

import { v4 as uuidv4 } from 'uuid';
import { createDefaultMaterialNodeData, type MaterialType } from '@/types/materialNode';
import { getDefaultNodeWidth } from './nodeSizeConfig';
import type { CanvasNode } from './canvasInputMutationGateway';

export type { CanvasNode };

export interface WorkflowCreationResult {
  nodes: CanvasNode[];
  edges: [];
}

function createMaterialOnly(
  materialType: MaterialType,
  position: { x: number; y: number },
): WorkflowCreationResult {
  const id = uuidv4();
  const nodeData = createDefaultMaterialNodeData(materialType, {
    status: 'empty',
    nodeWidth: getDefaultNodeWidth(materialType),
  });
  return {
    nodes: [{
      id,
      type: 'material',
      position,
      data: nodeData as unknown as Record<string, unknown>,
    }],
    edges: [],
  };
}

export function createWorkflowNodes(
  type: string,
  position: { x: number; y: number },
): WorkflowCreationResult | null {
  switch (type) {
    case 'text':
    case 'image':
    case 'video':
    case 'audio':
      return createMaterialOnly(type, position);
    default:
      return null;
  }
}

/** 将新节点追加到现有节点列表，同时取消现有节点的选中状态（原样保留） */
export function appendWithSelectionReset(currentNodes: CanvasNode[], newNodes: CanvasNode[]): CanvasNode[] {
  const cleared = currentNodes.map((node) => ({ ...node, selected: false } as CanvasNode));
  return [...cleared, ...newNodes];
}
