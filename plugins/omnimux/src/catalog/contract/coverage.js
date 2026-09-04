/**
 * Coverage auditor: runtime catalog IDs vs YAML contract IDs.
 * Reports operation-level listedOperations. Collects IDs read-only
 * from CHAT_MODELS + media SPECS (does not mutate them).
 */

import {
  IMAGE_MODEL_SPECS,
  VIDEO_MODEL_SPECS,
  AUDIO_MODEL_SPECS,
} from '../../media/catalog.js';
import { CHAT_MODELS } from '../../text/catalog.js';

/**
 * @returns {string[]} sorted unique runtime model ids
 */
export function collectRuntimeModelIds() {
  const ids = new Set();
  for (const row of CHAT_MODELS) {
    if (row?.id) ids.add(String(row.id));
  }
  for (const list of [IMAGE_MODEL_SPECS, VIDEO_MODEL_SPECS, AUDIO_MODEL_SPECS]) {
    for (const row of list) {
      if (row?.id) ids.add(String(row.id));
    }
  }
  return [...ids].sort((a, b) => a.localeCompare(b));
}

/**
 * Collect listedOperations from index (authoritative).
 * @param {import('./index.js').ContractIndex} index
 * @returns {string[]}
 */
export function collectListedOperations(index) {
  if (Array.isArray(index.listedOperations)) {
    return [...index.listedOperations].sort((a, b) => a.localeCompare(b));
  }
  const keys = [];
  for (const model of index.all()) {
    for (const op of model.operations ?? []) {
      if (op.listed) keys.push(`${model.id}#${op.id}`);
    }
  }
  return keys.sort((a, b) => a.localeCompare(b));
}

/**
 * @param {string[]} runtimeIds
 * @param {import('./index.js').ContractIndex} index
 * @returns {object}
 */
export function diffCoverage(runtimeIds, index) {
  const runtime = [...new Set(runtimeIds.map(String))].sort((a, b) => a.localeCompare(b));
  const contractIds = index.all().map((m) => m.id).sort((a, b) => a.localeCompare(b));
  const contractSet = new Set(contractIds);
  const runtimeSet = new Set(runtime);

  const missingInYaml = runtime.filter((id) => !contractSet.has(id));
  const extraInYaml = contractIds.filter((id) => !runtimeSet.has(id));

  const listedOperations = collectListedOperations(index);
  // listedIds / listedModelIds: any-op summary only (may be empty when listedOperations=[])
  const listedModelIds = index
    .all()
    .filter((m) => m.listed || (m.listedOperations && m.listedOperations.length > 0))
    .map((m) => m.id)
    .sort((a, b) => a.localeCompare(b));
  /** @deprecated use listedOperations; listedIds is any-op model summary */
  const listedIds = listedModelIds;

  const rows = runtime.map((id) => {
    const model = index.get(id);
    const opRows = (model?.operations ?? []).map((op) => ({
      operationId: op.id,
      listed: Boolean(op.listed),
      researchStatus: op.research?.status ?? null,
      executionStatus: op.execution?.status ?? null,
      profileId: op.execution?.profileId ?? null,
    }));
    return {
      id,
      inYaml: Boolean(model),
      listed: Boolean(model?.listed),
      listedOperations: model?.listedOperations ?? [],
      researchStatus: model?.research?.status ?? null,
      executionStatus: model?.execution?.status ?? null,
      profileId: model?.execution?.profileId ?? null,
      operations: opRows,
    };
  });

  for (const id of extraInYaml) {
    const model = index.get(id);
    rows.push({
      id,
      inYaml: true,
      listed: Boolean(model?.listed),
      listedOperations: model?.listedOperations ?? [],
      researchStatus: model?.research?.status ?? null,
      executionStatus: model?.execution?.status ?? null,
      profileId: model?.execution?.profileId ?? null,
      operations: (model?.operations ?? []).map((op) => ({
        operationId: op.id,
        listed: Boolean(op.listed),
        researchStatus: op.research?.status ?? null,
        executionStatus: op.execution?.status ?? null,
        profileId: op.execution?.profileId ?? null,
      })),
      extra: true,
    });
  }

  return {
    runtimeIds: runtime,
    contractIds,
    missingInYaml,
    extraInYaml,
    listedOperations,
    listedModelIds,
    /** @deprecated any-op summary only; prefer listedOperations */
    listedIds,
    rows,
    runtimeCount: runtime.length,
    contractCount: contractIds.length,
    missingCount: missingInYaml.length,
    extraCount: extraInYaml.length,
    listedOperationCount: listedOperations.length,
  };
}

/**
 * Build coverage issues for report (not admission-strict by default).
 * @param {object} coverage
 * @param {{ strict?: boolean }} [opts]
 * @returns {object[]}
 */
export function coverageIssues(coverage, opts = {}) {
  const strict = Boolean(opts.strict);
  /** @type {object[]} */
  const issues = [];
  for (const id of coverage.missingInYaml ?? []) {
    issues.push({
      level: strict ? 'error' : 'warning',
      code: 'coverage_missing',
      modelId: id,
      message: `runtime model "${id}" has no YAML contract`,
    });
  }
  for (const id of coverage.extraInYaml ?? []) {
    issues.push({
      level: 'warning',
      code: 'coverage_extra',
      modelId: id,
      message: `YAML contract "${id}" is not in runtime catalog`,
    });
  }
  return issues;
}
