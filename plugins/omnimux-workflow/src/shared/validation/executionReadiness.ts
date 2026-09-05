/**
 * Execution-start guard for contract-required node fields.
 *
 * The UI and host both use the compatibility kernel to decide readiness. This
 * narrow host guard prevents a selected operation with a missing required
 * node-field value from creating an execution that will fail only after the
 * gateway has received it.
 */

import type { CapabilityCatalog, CatalogModelDto } from '../api.ts';
import { findDeclaredParameterFailure } from './declaredParameterValidation.ts';
import { buildEffectiveOpsUiState, buildUiUpstreamFingerprint } from './operationUi.ts';
import { resolveNodeKind } from '../graph/materialNode.ts';
import {
  buildContractView,
  matchOperationInputs,
  resolveModelView,
} from './compatKernel.ts';

export interface ExecutionReadinessNode {
  id: string;
  type: string;
  data?: Record<string, unknown>;
}

export interface ExecutionReadinessFailure {
  nodeId: string;
  reasonCode: 'metadata_required' | 'parameter_adjustment_required' | 'parameter_unsupported' | 'operation_incompatible';
  message: string;
}

function readString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

/**
 * Return the first selected-material configuration failure before execution.
 * It checks the same declared model/operation parameters as the hub submit
 * guard, then checks contract-required node fields. Edge/input scheduling
 * remains the scheduler's responsibility.
 */
export function findExecutionReadinessFailure(
  nodes: ExecutionReadinessNode[],
  catalog: CapabilityCatalog | null | undefined,
): ExecutionReadinessFailure | null {
  for (const node of nodes) {
    if (node.type !== 'material' || resolveNodeKind(node.data ?? {}) !== 'generate') continue;
    const params = node.data?.params && typeof node.data.params === 'object'
      ? node.data.params as Record<string, unknown>
      : {};
    if (params.pendingVideoParamAdjustment && typeof params.pendingVideoParamAdjustment === 'object') {
      return {
        nodeId: node.id,
        reasonCode: 'parameter_adjustment_required',
        message: '视频参数调整等待确认；请确认建议调整或保留原值后重新提交',
      };
    }
  }

  const view = buildContractView(catalog);
  if (!view.available) return null;

  for (const node of nodes) {
    if (node.type !== 'material' || resolveNodeKind(node.data ?? {}) !== 'generate') continue;
    const data = node.data ?? {};
    const params = data.params && typeof data.params === 'object'
      ? data.params as Record<string, unknown>
      : {};
    const model = resolveModelView(view, readString(params.model));
    if (!model) continue;
    const fingerprint = buildUiUpstreamFingerprint({
      prompt: typeof data.prompt === 'string' ? data.prompt : '',
      nodeFields: params,
    });
    const outputType = typeof data.materialType === 'string' ? data.materialType : undefined;
    const opsState = buildEffectiveOpsUiState({
      catalog,
      modelId: model.id,
      fingerprint,
      ...(outputType ? { outputType } : {}),
      ...(readString(params.operation) ? { preferredOperationId: readString(params.operation) } : {}),
    });
    const rawOperation = readString(params.operation);
    const selectedOperationId = rawOperation ?? opsState.selectedOperationId ?? opsState.implicitOperationId;
    const operation = selectedOperationId
      ? model.operations.find((candidate) => candidate.id === selectedOperationId && candidate.listed)
      : undefined;
    const selectedIsEffective = Boolean(
      selectedOperationId && opsState.effectiveOps.some((candidate) => candidate.id === selectedOperationId),
    );
    // Raw persisted operation ids are never a soft preference: if no longer
    // listed/effective for this model and node shape, block before mock or hub
    // submission. For an omitted id, the kernel's implicit/chosen operation is
    // used so its parameters and node fields receive the same checks as UI.
    if (!operation || !selectedIsEffective) {
      return {
        nodeId: node.id,
        reasonCode: 'operation_incompatible',
        message: rawOperation
          ? `当前模型不支持已保存的生成方式 ${rawOperation}`
          : (opsState.reasonMessage ?? '当前模型没有可用的生成方式'),
      };
    }
    const catalogModel = (catalog?.models ?? []).find((candidate: CatalogModelDto) =>
      candidate.id === model.id || candidate.aliases?.includes(model.id),
    );
    const parameterFailure = findDeclaredParameterFailure(
      params,
      operation.parameters,
      catalogModel?.parameters as Record<string, unknown> | undefined,
    );
    if (parameterFailure) {
      return {
        nodeId: node.id,
        reasonCode: 'parameter_unsupported',
        message: parameterFailure.message,
      };
    }
    const missing = matchOperationInputs(operation, fingerprint).pending.find(
      (rejection) => rejection.code === 'metadata_required',
    );
    if (missing) {
      return {
        nodeId: node.id,
        reasonCode: 'metadata_required',
        message: missing.message,
      };
    }
  }
  return null;
}
