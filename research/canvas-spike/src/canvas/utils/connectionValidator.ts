/**
 * Ported (narrowed) from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/connectionValidator.ts`.
 *
 * 改动：裁掉 validateVideoGenerationConnection 的模型资格预检
 * （依赖 canvasEffectiveInputs / canvasModelEligibility / canvasPresetService
 * 的 modelOptions，spike 无预设服务）。结构校验（自连/重复/环/类型合同）
 * 原样保留 —— 这正是 React Flow isValidConnection 的入口。
 */

import { type Node, type Edge, type Connection } from '@xyflow/react';
import { validateCanvasConnectionStructure } from './canvasConnectionStructure';

export interface DetailedConnectionValidation {
  valid: boolean;
  blockedBy?: 'structure' | 'type-contract' | 'mode-contract' | 'capability';
  reason?: string;
}

/** 验证连接是否有效（原样保留入口签名） */
export function validateConnection(
  connection: Edge | Connection,
  nodes: Node[],
  edges: Edge[],
): boolean {
  return validateConnectionDetailed(connection, nodes, edges).valid;
}

export function validateConnectionDetailed(
  connection: Edge | Connection,
  nodes: Node[],
  edges: Edge[],
): DetailedConnectionValidation {
  const structure = validateCanvasConnectionStructure(
    connection,
    nodes as Node<Record<string, unknown>>[],
    edges,
  );
  if (!structure.valid) {
    const reasonByCode = {
      self_connection: '不能连接到自己',
      duplicate_edge: '这两个节点已经连接过了',
      missing_node: '连接目标不存在',
      cycle: '这条连线会形成循环依赖',
      type_contract: '目标节点当前不接受这种素材类型',
    } as const;
    return {
      valid: false,
      blockedBy: structure.reasonCode === 'type_contract' ? 'type-contract' : 'structure',
      reason: structure.reasonCode ? reasonByCode[structure.reasonCode] : '连接无效',
    };
  }

  // 窄化说明：Gxgen 在此之后还有 video-generation 节点的
  // resolveCanvasModelEligibility 预检（连接时预览模型能力），
  // 属于预设服务耦合，M2 移植 nodeExecutors 时一并处理。
  return { valid: true };
}
