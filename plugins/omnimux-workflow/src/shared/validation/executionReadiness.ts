/**
 * Execution-start guard for contract-required node fields.
 *
 * The UI and host both use the compatibility kernel to decide readiness. This
 * narrow host guard prevents a selected operation with a missing required
 * node-field value from creating an execution that will fail only after the
 * gateway has received it.
 */

import type { CapabilityCatalog } from '../api.ts';
import { resolveNodeKind } from '../graph/materialNode.ts';
import {
  buildContractView,
  buildUpstreamFingerprint,
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
  reasonCode: 'metadata_required';
  message: string;
}

function readString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

/**
 * Return the first missing contract-required node field for selected material
 * operations. It intentionally leaves existing edge/input validation to the
 * scheduler: this guard only closes the node-field URL/value gap before a
 * gateway request can start.
 */
export function findExecutionReadinessFailure(
  nodes: ExecutionReadinessNode[],
  catalog: CapabilityCatalog | null | undefined,
): ExecutionReadinessFailure | null {
  const view = buildContractView(catalog);
  if (!view.available) return null;

  for (const node of nodes) {
    if (node.type !== 'material' || resolveNodeKind(node.data ?? {}) !== 'generate') continue;
    const data = node.data ?? {};
    const params = data.params && typeof data.params === 'object'
      ? data.params as Record<string, unknown>
      : {};
    const model = resolveModelView(view, readString(params.model));
    const operationId = readString(params.operation);
    if (!model || !operationId) continue;

    const operation = model.operations.find((candidate) => candidate.id === operationId && candidate.listed);
    if (!operation) continue;
    const fingerprint = buildUpstreamFingerprint({
      prompt: typeof data.prompt === 'string' ? data.prompt : '',
      nodeFields: params,
    });
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
