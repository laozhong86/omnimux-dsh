/**
 * Public barrel for Hub model capability contracts (H1 shadow).
 *
 * @typedef {object} ContractIndex
 * @property {"1.1"} schemaVersion canonical Contract v1.1 only (never root version)
 * @property {string} contentFingerprint
 * @property {string} [contentCacheKey]
 * @property {Map<string, object>} byId
 * @property {string} [specsDir]
 * @property {object[]} [issues]
 * @property {string[]} [parseErrors]
 * @property {object} [registry]
 * @property {object} [profiles]
 * @property {string[]} [listedOperations]
 * @property {() => object[]} all
 * @property {(id: string) => object|undefined} get
 * @property {(out: string) => object[]} byOutputType
 */

export {
  loadAll,
  parseFile,
  parseYamlText,
  normalizeDoc,
  normalizeModel,
  preNormalizeDocRoot,
  prepareCanonicalDoc,
  resetContractCache,
  contentFingerprint,
  canonicalStringify,
  buildContentCacheKey,
  readYamlSnapshots,
  DEFAULT_SPECS_DIR,
  listYamlFiles,
} from './load.js';

export {
  loadOperationRegistry,
  loadAdapterProfiles,
  loadJsonSchema,
  validateDoc,
  validateModel,
  validateAdapterProfiles,
  validateOperationRegistry,
  validateCrossModelAliases,
  operationIdSet,
  promptPolicyFor,
  resetSchemaCaches,
  CANONICAL_SCHEMA_VERSION,
} from './schema.js';

export {
  normalizeResearch,
  normalizeExecution,
  materializeOpStatus,
  computeListed,
  computeOperationListed,
  deriveModelListedSummary,
  adapterProfileExists,
  adapterProfileCompatible,
  getAdapterProfile,
  researchHasEvidence,
  gateAllowsModel,
} from './status.js';

export { checkAdmission, isAdmissionStrictError, ADMISSION_ERROR_CODES } from './admission.js';

export {
  collectRuntimeModelIds,
  collectListedOperations,
  diffCoverage,
  coverageIssues,
} from './coverage.js';

export { mbToBytes, isWithinSizeLimit, isWithinDurationLimit, BYTES_PER_MB } from './units.js';

export { LEGACY_OPERATION_MAP, mapLegacyOperation } from './legacy-operation-map.js';

import { loadAll, DEFAULT_SPECS_DIR, resetContractCache } from './load.js';
import {
  loadOperationRegistry,
  loadAdapterProfiles,
  validateAdapterProfiles,
  validateOperationRegistry,
  CANONICAL_SCHEMA_VERSION,
} from './schema.js';
import { checkAdmission } from './admission.js';
import { collectRuntimeModelIds, diffCoverage, coverageIssues } from './coverage.js';

/**
 * @param {string} [specsDir]
 * @param {object} [opts]
 * @returns {ContractIndex}
 */
export function getContractIndex(specsDir = DEFAULT_SPECS_DIR, opts = {}) {
  return loadAll(specsDir, opts);
}

/**
 * @param {string} id
 * @param {string} [specsDir]
 * @returns {object|undefined}
 */
export function getModelContract(id, specsDir = DEFAULT_SPECS_DIR) {
  return getContractIndex(specsDir).get(id);
}

/**
 * @param {string} [specsDir]
 * @returns {object[]}
 */
export function listContracts(specsDir = DEFAULT_SPECS_DIR) {
  return getContractIndex(specsDir).all();
}

/**
 * @returns {object}
 */
export function getOperationRegistry() {
  return loadOperationRegistry();
}

/**
 * Full shadow verification used by CLI.
 * Report exposes schemaVersion ("1.1") only — never model-capability root `version`.
 * @param {{ specsDir?: string, strict?: boolean, gateAllows?: Function, profiles?: object, registry?: object }} [opts]
 */
export function verifyContracts(opts = {}) {
  const specsDir = opts.specsDir ?? DEFAULT_SPECS_DIR;
  resetContractCache();

  const registry = opts.registry ?? loadOperationRegistry();
  const profiles = opts.profiles ?? loadAdapterProfiles();

  // Registry / profile machine-truth shape (always admission-strict).
  // validateAdapterProfiles requires ops ⊆ registry (profile_operation_unknown).
  const regIssues = validateOperationRegistry(registry);
  const profileIssues = validateAdapterProfiles(profiles, registry);
  const machineIssues = [...regIssues, ...profileIssues].map((i) => ({
    ...i,
    level: i.level ?? 'error',
  }));

  const index = loadAll(specsDir, { useCache: false, gateAllows: opts.gateAllows });
  // Prepend machine issues into index for admission
  if (machineIssues.length) {
    index.issues = [...machineIssues, ...(index.issues ?? [])];
  }

  const admission = checkAdmission(index, {
    registry: index.registry ?? registry,
    profiles: index.profiles ?? profiles,
  });
  const runtimeIds = collectRuntimeModelIds();
  const coverage = diffCoverage(runtimeIds, index);
  const covIssues = coverageIssues(coverage, { strict: opts.strict });
  const issues = [...admission.issues, ...covIssues];

  const admissionFailed = !admission.ok;
  const coverageFailed = Boolean(opts.strict) && coverage.missingInYaml.length > 0;
  const ok = !admissionFailed && !coverageFailed;

  const listedOperations = coverage.listedOperations ?? index.listedOperations ?? [];
  const schemaVersion = index.schemaVersion ?? CANONICAL_SCHEMA_VERSION;

  return {
    ok,
    mode: opts.strict ? 'strict' : 'audit',
    /** Canonical Contract v1.1; never emit model-capability root `version`. */
    schemaVersion,
    contentFingerprint: index.contentFingerprint,
    admission,
    coverage,
    listedOperations,
    /** @deprecated any-op model summary; prefer listedOperations */
    listedIds: coverage.listedIds ?? [],
    listedModelIds: coverage.listedModelIds ?? [],
    issues,
    exitCode: ok ? 0 : 1,
  };
}
