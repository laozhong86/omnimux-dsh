/**
 * Ported (narrowed) from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/connectionValidator.ts`
 * (validated by the extraction spike). Two-stage validation:
 * Stage 1: Structural & type contract validation
 * Stage 2: Dynamic model input capacity validation
 */

import { type Node, type Edge, type Connection } from '@xyflow/react';
// 显式 .ts 扩展名：node --test 的 type-stripping 不做 TS 扩展名解析
import { validateCanvasConnectionStructure } from './canvasConnectionStructure.ts';
import { resolveNodeKind, type MaterialType } from '../../../shared/graph/materialNode.ts';
import {
  resolveModelInputCapability,
  type ModelInputCapability,
} from '../../../shared/validation/modelCompatibilityEvaluator.ts';
import type { CapabilityCatalog } from '../../../shared/api.ts';

/** 结构与能力校验拒绝码（文案由 UI 层经 i18n 字典 edge.reject.* 解析，见 rejectReasonKey）。 */
export type ConnectionRejectReasonCode =
  | 'self_connection'
  | 'duplicate_edge'
  | 'missing_node'
  | 'cycle'
  | 'type_contract'
  | 'capacity_exceeded'
  | 'model_incompatible';

export interface DetailedConnectionValidation {
  valid: boolean;
  blockedBy?: 'structure' | 'type-contract' | 'mode-contract' | 'capability' | 'model-capability';
  reasonCode?: ConnectionRejectReasonCode;
  meta?: {
    modelId?: string;
    maxAllowed?: number;
    currentCount?: number;
    [key: string]: unknown;
  };
}

/** reasonCode（含 mutation gateway 的 'invalid_connection' 等未知码）→ i18n key。 */
export function rejectReasonKey(reasonCode: string | undefined | null): string {
  switch (reasonCode) {
    case 'self_connection':
      return 'edge.reject.selfConnection';
    case 'duplicate_edge':
      return 'edge.reject.duplicateEdge';
    case 'missing_node':
      return 'edge.reject.missingNode';
    case 'cycle':
      return 'edge.reject.cycle';
    case 'type_contract':
      return 'edge.reject.typeContract';
    case 'capacity_exceeded':
      return 'edge.reject.capacityExceeded';
    case 'model_incompatible':
      return 'edge.reject.modelIncompatible';
    default:
      return 'edge.reject.invalid';
  }
}

/**
 * Stage 2 动态模型容量与多模态兼容性校验
 */
export function validateDynamicModelCapacity(
  connection: Pick<Connection, 'source' | 'target'>,
  nodes: Array<Node<Record<string, unknown>>>,
  edges: Edge[],
  catalog?: CapabilityCatalog | null,
): DetailedConnectionValidation {
  const targetNode = nodes.find((node) => node.id === connection.target);
  if (!targetNode || targetNode.type !== 'material') {
    return { valid: true };
  }

  const targetData = (targetNode.data || {}) as Record<string, unknown>;
  if (resolveNodeKind(targetData as any) !== 'generate') {
    return { valid: true };
  }

  const params = (targetData.params || {}) as Record<string, unknown>;
  const modelId = typeof params.model === 'string' ? params.model.trim() : '';
  if (!modelId) {
    return { valid: true };
  }

  const modelCap = resolveModelInputCapability(modelId, catalog);
  if (!modelCap) {
    return { valid: true };
  }

  const sourceNode = nodes.find((node) => node.id === connection.source);
  if (!sourceNode) {
    return { valid: true };
  }

  const sourceData = (sourceNode.data || {}) as Record<string, unknown>;
  const sourceMaterialType = (sourceData.materialType as MaterialType) || (sourceNode.type as MaterialType) || 'image';

  // 计算模拟连线后的全部上游节点集合
  const existingSourceIds = edges
    .filter((edge) => edge.target === connection.target && edge.source !== connection.source)
    .map((edge) => edge.source);
  const simulatedSourceIds = Array.from(new Set([...existingSourceIds, connection.source]));

  const upstreams: Array<{ type: MaterialType; mimeType?: string }> = [];
  for (const sId of simulatedSourceIds) {
    const sNode = nodes.find((node) => node.id === sId);
    if (!sNode) continue;
    const sData = (sNode.data || {}) as Record<string, unknown>;
    const sType = (sData.materialType as MaterialType) || (sNode.type as MaterialType) || 'image';
    upstreams.push({
      type: sType,
      mimeType: typeof sData.mimeType === 'string' ? sData.mimeType : undefined,
    });
  }

  const imageCount = upstreams.filter((u) => u.type === 'image').length;
  const videoCount = upstreams.filter((u) => u.type === 'video').length;
  const audioCount = upstreams.filter((u) => u.type === 'audio').length;

  // 1. 检查图片容量超限
  if (sourceMaterialType === 'image') {
    if (modelCap.referenceImages && modelCap.referenceImages.max !== undefined && imageCount > modelCap.referenceImages.max) {
      return {
        valid: false,
        blockedBy: 'model-capability',
        reasonCode: 'capacity_exceeded',
        meta: {
          modelId,
          maxAllowed: modelCap.referenceImages.max,
          currentCount: imageCount,
        },
      };
    }
    if (modelCap.referenceImages?.max === 0 || (modelCap.modalities && !modelCap.modalities.includes('image'))) {
      return {
        valid: false,
        blockedBy: 'model-capability',
        reasonCode: 'model_incompatible',
        meta: {
          modelId,
        },
      };
    }
  }

  // 2. 检查视频容量超限
  if (sourceMaterialType === 'video') {
    if (modelCap.referenceVideos && modelCap.referenceVideos.max !== undefined && videoCount > modelCap.referenceVideos.max) {
      return {
        valid: false,
        blockedBy: 'model-capability',
        reasonCode: 'capacity_exceeded',
        meta: {
          modelId,
          maxAllowed: modelCap.referenceVideos.max,
          currentCount: videoCount,
        },
      };
    }
    if (modelCap.referenceVideos?.max === 0 || (modelCap.modalities && !modelCap.modalities.includes('video'))) {
      return {
        valid: false,
        blockedBy: 'model-capability',
        reasonCode: 'model_incompatible',
        meta: {
          modelId,
        },
      };
    }
  }

  // 3. 检查音频容量超限
  if (sourceMaterialType === 'audio') {
    if (modelCap.referenceAudios && modelCap.referenceAudios.max !== undefined && audioCount > modelCap.referenceAudios.max) {
      return {
        valid: false,
        blockedBy: 'model-capability',
        reasonCode: 'capacity_exceeded',
        meta: {
          modelId,
          maxAllowed: modelCap.referenceAudios.max,
          currentCount: audioCount,
        },
      };
    }
    if (modelCap.referenceAudios?.max === 0 || (modelCap.modalities && !modelCap.modalities.includes('audio'))) {
      return {
        valid: false,
        blockedBy: 'model-capability',
        reasonCode: 'model_incompatible',
        meta: {
          modelId,
        },
      };
    }
  }

  return { valid: true };
}

/** 验证连接是否有效（原样保留入口签名） */
export function validateConnection(
  connection: Edge | Connection,
  nodes: Node[],
  edges: Edge[],
  catalog?: CapabilityCatalog | null,
): boolean {
  return validateConnectionDetailed(connection, nodes, edges, catalog).valid;
}

export function validateConnectionDetailed(
  connection: Edge | Connection,
  nodes: Node[],
  edges: Edge[],
  catalog?: CapabilityCatalog | null,
): DetailedConnectionValidation {
  // Stage 1: 结构与类型合同校验
  const structure = validateCanvasConnectionStructure(
    connection,
    nodes as Node<Record<string, unknown>>[],
    edges,
  );
  if (!structure.valid) {
    return {
      valid: false,
      blockedBy: structure.reasonCode === 'type_contract' ? 'type-contract' : 'structure',
      reasonCode: structure.reasonCode,
    };
  }

  // Stage 2: 动态模型能力与容量校验
  const stage2 = validateDynamicModelCapacity(
    connection,
    nodes as Node<Record<string, unknown>>[],
    edges,
    catalog,
  );
  if (!stage2.valid) {
    return stage2;
  }

  return { valid: true };
}
