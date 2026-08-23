/**
 * Ported (narrowed) from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/connectionValidator.ts`
 * (validated by the extraction spike). The model-eligibility preview check
 * is cut (preset-service coupling); structural checks survive verbatim.
 */

import { type Node, type Edge, type Connection } from '@xyflow/react';
// 显式 .ts 扩展名：node --test 的 type-stripping 不做 TS 扩展名解析
import { validateCanvasConnectionStructure } from './canvasConnectionStructure.ts';

/** 结构校验拒绝码（文案由 UI 层经 i18n 字典 edge.reject.* 解析，见 rejectReasonKey）。 */
export type ConnectionRejectReasonCode =
  | 'self_connection'
  | 'duplicate_edge'
  | 'missing_node'
  | 'cycle'
  | 'type_contract';

export interface DetailedConnectionValidation {
  valid: boolean;
  blockedBy?: 'structure' | 'type-contract' | 'mode-contract' | 'capability';
  reasonCode?: ConnectionRejectReasonCode;
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
    default:
      return 'edge.reject.invalid';
  }
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
    return {
      valid: false,
      blockedBy: structure.reasonCode === 'type_contract' ? 'type-contract' : 'structure',
      reasonCode: structure.reasonCode,
    };
  }

  // 窄化说明：Gxgen 在此之后还有 video-generation 节点的
  // resolveCanvasModelEligibility 预检（连接时预览模型能力），
  // 属于预设服务耦合，M3 移植执行器时一并处理。
  return { valid: true };
}
