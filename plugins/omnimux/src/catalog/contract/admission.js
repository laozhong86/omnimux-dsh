/**
 * Admission report builder over a ContractIndex (operation-level aware).
 */

const ADMISSION_ERROR_CODES = new Set([
  'yaml_parse_error',
  'schema_invalid',
  'schema_version_conflict',
  'schema_version_unsupported',
  'operation_unknown',
  'output_type_missing',
  'output_type_invalid',
  'slot_field_missing',
  'slot_minmax_invalid',
  'allowed_mimes_invalid',
  'limit_source_missing',
  'profile_unknown',
  'profile_incompatible',
  'profile_operation_unknown',
  'research_invalid',
  'research_verified_without_evidence',
  'duplicate_model_id',
  'duplicate_alias',
  'prompt_required_missing',
  'prompt_forbidden_injected',
]);

/**
 * Codes that fail admission-strict (default --audit).
 * coverage_* are handled by coverage auditor / --strict, not admission.
 * @param {object} issue
 * @returns {boolean}
 */
export function isAdmissionStrictError(issue) {
  if (!issue || issue.level !== 'error') return false;
  if (issue.code === 'coverage_missing' || issue.code === 'coverage_extra') return false;
  if (ADMISSION_ERROR_CODES.has(issue.code)) return true;
  // unknown error-level issues still fail admission
  return true;
}

/**
 * @param {import('./index.js').ContractIndex} index
 * @param {{ registry?: object, profiles?: object }} [_opts]
 * @returns {{ ok: boolean, issues: object[], errorCount: number, warningCount: number }}
 */
export function checkAdmission(index, _opts = {}) {
  const issues = Array.isArray(index?.issues) ? [...index.issues] : [];

  if (index?.byId) {
    for (const model of index.byId.values()) {
      const extra = model._admissionIssues;
      if (Array.isArray(extra)) {
        for (const iss of extra) {
          issues.push({
            ...iss,
            modelId: iss.modelId ?? model.id,
            file: iss.file ?? model.sourceFile,
          });
        }
      }

      // Operation-level not_listed / execution_unavailable
      for (const op of model.operations ?? []) {
        if (op.listed !== true) {
          issues.push({
            level: 'info',
            code: 'not_listed',
            modelId: model.id,
            operationId: op.id,
            file: model.sourceFile,
            message: `operation "${model.id}#${op.id}" is not listed`,
          });
        }
        if (op.execution?.status === 'none' || op.execution?.status === 'stub') {
          issues.push({
            level: 'info',
            code: 'execution_unavailable',
            modelId: model.id,
            operationId: op.id,
            file: model.sourceFile,
            message: `operation "${model.id}#${op.id}" execution.status=${op.execution.status}`,
          });
        }
      }

      // Model summary info
      if (model.listed === false) {
        issues.push({
          level: 'info',
          code: 'not_listed',
          modelId: model.id,
          file: model.sourceFile,
          message: `model "${model.id}" has no listed operations (summary)`,
        });
      }
    }
  }

  // de-dupe by code+modelId+operationId+path+message
  const seen = new Set();
  const deduped = [];
  for (const iss of issues) {
    const key = `${iss.code}|${iss.modelId ?? ''}|${iss.operationId ?? ''}|${iss.path ?? ''}|${iss.file ?? ''}|${iss.message}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(iss);
  }

  const errorCount = deduped.filter((i) => isAdmissionStrictError(i)).length;
  const warningCount = deduped.filter((i) => i.level === 'warning').length;

  return {
    ok: errorCount === 0,
    issues: deduped,
    errorCount,
    warningCount,
  };
}

export { ADMISSION_ERROR_CODES };
