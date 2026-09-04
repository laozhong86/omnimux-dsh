/**
 * Pure-function validator with parity against model-capability.schema.json
 * and operation-registry.json / adapter-profiles.json. No Ajv/Zod.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  RESEARCH_STATUS_SET,
  EXECUTION_STATUS_SET,
  researchHasEvidence,
  adapterProfileCompatible,
  getAdapterProfile,
} from './status.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const OUTPUT_TYPES = new Set(['text', 'image', 'video', 'audio']);
const MEDIA_TYPES = new Set(['text', 'image', 'video', 'audio', 'document']);
const LIMIT_KINDS = new Set(['official_docs', 'measured', 'policy_conservative']);
const SLOT_SOURCES = new Set(['user', 'upstream_edge', 'node_field']);
const PROMPT_POLICIES = new Set(['required', 'optional', 'none']);
const PROFILE_STATUSES = new Set(['live', 'stub', 'unavailable']);

/** @type {object|null} */
let cachedRegistry = null;
/** @type {object|null} */
let cachedProfiles = null;
/** @type {object|null} */
let cachedSchema = null;

/**
 * @returns {object}
 */
export function loadOperationRegistry() {
  if (cachedRegistry) return cachedRegistry;
  const raw = readFileSync(join(__dirname, 'operation-registry.json'), 'utf8');
  cachedRegistry = JSON.parse(raw);
  return cachedRegistry;
}

/**
 * @returns {object}
 */
export function loadAdapterProfiles() {
  if (cachedProfiles) return cachedProfiles;
  const raw = readFileSync(join(__dirname, 'adapter-profiles.json'), 'utf8');
  cachedProfiles = JSON.parse(raw);
  return cachedProfiles;
}

/**
 * @returns {object}
 */
export function loadJsonSchema() {
  if (cachedSchema) return cachedSchema;
  const raw = readFileSync(join(__dirname, 'model-capability.schema.json'), 'utf8');
  cachedSchema = JSON.parse(raw);
  return cachedSchema;
}

/**
 * @returns {void}
 */
export function resetSchemaCaches() {
  cachedRegistry = null;
  cachedProfiles = null;
  cachedSchema = null;
}

/**
 * @param {object} [registry]
 * @returns {Set<string>}
 */
export function operationIdSet(registry = loadOperationRegistry()) {
  const ops = Array.isArray(registry?.operations) ? registry.operations : [];
  return new Set(ops.map((o) => o?.id).filter(Boolean));
}

/**
 * @param {string} opId
 * @param {object} [registry]
 * @returns {'required'|'optional'|'none'|undefined}
 */
export function promptPolicyFor(opId, registry = loadOperationRegistry()) {
  const ops = Array.isArray(registry?.operations) ? registry.operations : [];
  const hit = ops.find((o) => o && o.id === opId);
  if (!hit) return undefined;
  const p = hit.promptPolicy;
  return PROMPT_POLICIES.has(p) ? p : undefined;
}

/**
 * @param {string} code
 * @param {string} message
 * @param {{ modelId?: string, path?: string, file?: string, level?: 'error'|'warning'|'info', operationId?: string }} [extra]
 */
function issue(code, message, extra = {}) {
  return {
    level: extra.level ?? 'error',
    code,
    message,
    ...(extra.modelId ? { modelId: extra.modelId } : {}),
    ...(extra.operationId ? { operationId: extra.operationId } : {}),
    ...(extra.path ? { path: extra.path } : {}),
    ...(extra.file ? { file: extra.file } : {}),
  };
}

/**
 * Validate allowedMimes array of nonempty unique strings.
 * @param {unknown} value
 * @param {string} path
 * @param {string} [modelId]
 * @param {string} [file]
 * @returns {object[]}
 */
function validateAllowedMimes(value, path, modelId, file) {
  /** @type {object[]} */
  const out = [];
  if (!Array.isArray(value)) {
    out.push(
      issue('allowed_mimes_invalid', `allowedMimes must be a nonempty string array at ${path}`, {
        modelId,
        path,
        file,
      }),
    );
    return out;
  }
  if (value.length < 1) {
    out.push(
      issue('allowed_mimes_invalid', `allowedMimes must be nonempty at ${path}`, {
        modelId,
        path,
        file,
      }),
    );
    return out;
  }
  const seen = new Set();
  for (let i = 0; i < value.length; i++) {
    const item = value[i];
    if (typeof item !== 'string' || item.trim().length === 0) {
      out.push(
        issue('allowed_mimes_invalid', `allowedMimes[${i}] must be nonempty string at ${path}`, {
          modelId,
          path: `${path}[${i}]`,
          file,
        }),
      );
      continue;
    }
    if (seen.has(item)) {
      out.push(
        issue('allowed_mimes_invalid', `allowedMimes duplicate "${item}" at ${path}`, {
          modelId,
          path: `${path}[${i}]`,
          file,
        }),
      );
    }
    seen.add(item);
  }
  return out;
}

/**
 * @param {unknown} min
 * @param {unknown} max
 * @param {string} path
 * @param {string} [modelId]
 * @param {string} [file]
 * @param {string} [code]
 * @returns {object[]}
 */
function validateMinMaxPair(min, max, path, modelId, file, code = 'slot_minmax_invalid') {
  /** @type {object[]} */
  const out = [];
  const hasMin = min !== undefined && min !== null;
  const hasMax = max !== undefined && max !== null;
  if (hasMin) {
    if (typeof min !== 'number' || !Number.isFinite(min) || min < 0 || !Number.isInteger(min)) {
      // allow non-integer numbers for output min/max (numeric); for slots prefer integer
      if (typeof min !== 'number' || !Number.isFinite(min) || min < 0) {
        out.push(
          issue(code, `min must be a finite nonnegative number at ${path}`, {
            modelId,
            path: `${path}.min`,
            file,
          }),
        );
      }
    }
  }
  if (hasMax) {
    if (typeof max !== 'number' || !Number.isFinite(max) || max < 0) {
      out.push(
        issue(code, `max must be a finite nonnegative number at ${path}`, {
          modelId,
          path: `${path}.max`,
          file,
        }),
      );
    }
  }
  if (hasMin && hasMax && typeof min === 'number' && typeof max === 'number' && Number.isFinite(min) && Number.isFinite(max)) {
    if (min > max) {
      out.push(
        issue(code, `min (${min}) > max (${max}) at ${path}`, {
          modelId,
          path,
          file,
        }),
      );
    }
  }
  return out;
}

/**
 * Slot min/max must be nonnegative integers (cardinality).
 * @param {unknown} min
 * @param {unknown} max
 * @param {string} path
 * @param {string} [modelId]
 * @param {string} [file]
 * @returns {object[]}
 */
function validateSlotMinMax(min, max, path, modelId, file) {
  /** @type {object[]} */
  const out = [];
  if (typeof min !== 'number' || !Number.isFinite(min) || min < 0 || !Number.isInteger(min)) {
    out.push(
      issue('slot_minmax_invalid', `slot.min must be a nonnegative integer at ${path}`, {
        modelId,
        path: `${path}.min`,
        file,
      }),
    );
  }
  if (typeof max !== 'number' || !Number.isFinite(max) || max < 0 || !Number.isInteger(max)) {
    out.push(
      issue('slot_minmax_invalid', `slot.max must be a nonnegative integer at ${path}`, {
        modelId,
        path: `${path}.max`,
        file,
      }),
    );
  }
  if (
    typeof min === 'number' &&
    typeof max === 'number' &&
    Number.isFinite(min) &&
    Number.isFinite(max) &&
    min > max
  ) {
    out.push(
      issue('slot_minmax_invalid', `slot min (${min}) > max (${max}) at ${path}`, {
        modelId,
        path,
        file,
      }),
    );
  }
  return out;
}

/**
 * @param {unknown} value
 * @param {string} path
 * @param {string} modelId
 * @param {string} [file]
 * @returns {object[]}
 */
function validateLimitSource(value, path, modelId, file) {
  /** @type {object[]} */
  const out = [];
  if (value == null) {
    out.push(issue('limit_source_missing', `missing limitSource at ${path}`, { modelId, path, file }));
    return out;
  }
  if (typeof value !== 'object' || Array.isArray(value)) {
    out.push(issue('schema_invalid', `limitSource must be object at ${path}`, { modelId, path, file }));
    return out;
  }
  const kind = /** @type {Record<string, unknown>} */ (value).kind;
  if (typeof kind !== 'string' || !LIMIT_KINDS.has(kind)) {
    out.push(
      issue('schema_invalid', `limitSource.kind invalid at ${path}`, {
        modelId,
        path: `${path}.kind`,
        file,
      }),
    );
  }
  return out;
}

/**
 * @param {unknown} aliases
 * @param {string} path
 * @param {string} [modelId]
 * @param {string} [file]
 * @returns {object[]}
 */
function validateAliasesArray(aliases, path, modelId, file) {
  /** @type {object[]} */
  const out = [];
  if (aliases == null) return out;
  if (!Array.isArray(aliases)) {
    out.push(
      issue('duplicate_alias', `aliases must be a nonempty unique string array at ${path}`, {
        modelId,
        path,
        file,
      }),
    );
    return out;
  }
  if (aliases.length < 1) {
    out.push(
      issue('duplicate_alias', `aliases must be nonempty at ${path}`, {
        modelId,
        path,
        file,
      }),
    );
    return out;
  }
  const seen = new Set();
  for (let i = 0; i < aliases.length; i++) {
    const a = aliases[i];
    if (typeof a !== 'string' || a.trim().length === 0) {
      out.push(
        issue('duplicate_alias', `aliases[${i}] must be nonempty string at ${path}`, {
          modelId,
          path: `${path}[${i}]`,
          file,
        }),
      );
      continue;
    }
    if (seen.has(a)) {
      out.push(
        issue('duplicate_alias', `duplicate alias "${a}" at ${path}`, {
          modelId,
          path: `${path}[${i}]`,
          file,
        }),
      );
    }
    seen.add(a);
  }
  return out;
}

/**
 * @param {unknown} slot
 * @param {string} basePath
 * @param {string} modelId
 * @param {string} [file]
 * @returns {object[]}
 */
function validateSlot(slot, basePath, modelId, file) {
  /** @type {object[]} */
  const out = [];
  if (!slot || typeof slot !== 'object' || Array.isArray(slot)) {
    out.push(issue('schema_invalid', `input slot must be object at ${basePath}`, { modelId, path: basePath, file }));
    return out;
  }
  const s = /** @type {Record<string, unknown>} */ (slot);
  for (const key of ['slot', 'type', 'role', 'min', 'max']) {
    if (s[key] === undefined || s[key] === null || s[key] === '') {
      out.push(
        issue('slot_field_missing', `input slot missing ${key} at ${basePath}`, {
          modelId,
          path: `${basePath}.${key}`,
          file,
        }),
      );
    }
  }
  if (typeof s.type === 'string' && !MEDIA_TYPES.has(s.type)) {
    out.push(issue('schema_invalid', `invalid slot type ${s.type}`, { modelId, path: `${basePath}.type`, file }));
  }
  if (s.source != null && (typeof s.source !== 'string' || !SLOT_SOURCES.has(s.source))) {
    out.push(issue('schema_invalid', `invalid slot source ${s.source}`, { modelId, path: `${basePath}.source`, file }));
  }
  if (s.min !== undefined && s.min !== null && s.max !== undefined && s.max !== null) {
    out.push(...validateSlotMinMax(s.min, s.max, basePath, modelId, file));
  }
  if (s.allowedMimes != null) {
    out.push(...validateAllowedMimes(s.allowedMimes, `${basePath}.allowedMimes`, modelId, file));
  }
  const hasSize = s.maxSizeMb != null;
  const hasDur = s.maxDurationSec != null;
  if (hasSize) {
    if (typeof s.maxSizeMb !== 'number' || !Number.isFinite(s.maxSizeMb) || s.maxSizeMb < 0) {
      out.push(issue('schema_invalid', `invalid maxSizeMb at ${basePath}`, { modelId, path: `${basePath}.maxSizeMb`, file }));
    }
  }
  if (hasDur) {
    if (typeof s.maxDurationSec !== 'number' || !Number.isFinite(s.maxDurationSec) || s.maxDurationSec < 0) {
      out.push(
        issue('schema_invalid', `invalid maxDurationSec at ${basePath}`, {
          modelId,
          path: `${basePath}.maxDurationSec`,
          file,
        }),
      );
    }
  }
  if (hasSize || hasDur) {
    out.push(...validateLimitSource(s.limitSource, `${basePath}.limitSource`, modelId, file));
  }
  return out;
}

/**
 * Validate research object (model default or operation-level).
 * @param {unknown} research
 * @param {string} path
 * @param {string} [modelId]
 * @param {string} [file]
 * @param {string} [operationId]
 * @returns {object[]}
 */
function validateResearch(research, path, modelId, file, operationId) {
  /** @type {object[]} */
  const out = [];
  if (research == null) return out;
  if (typeof research !== 'object' || Array.isArray(research)) {
    out.push(issue('research_invalid', `research must be object at ${path}`, { modelId, path, file, operationId }));
    return out;
  }
  const r = /** @type {Record<string, unknown>} */ (research);
  if (typeof r.status !== 'string' || !RESEARCH_STATUS_SET.has(r.status)) {
    out.push(
      issue('research_invalid', `invalid research.status "${r.status}" at ${path}`, {
        modelId,
        path: `${path}.status`,
        file,
        operationId,
      }),
    );
  } else if (r.status === 'verified' && !researchHasEvidence(/** @type {any} */ (r))) {
    out.push(
      issue('research_verified_without_evidence', 'research.status verified requires docUrl evidence', {
        modelId,
        path: `${path}.docUrl`,
        file,
        operationId,
      }),
    );
  }
  return out;
}

/**
 * Validate execution + profile compatibility for live claims.
 * @param {unknown} execution
 * @param {object} op
 * @param {string} path
 * @param {string} [modelId]
 * @param {string} [file]
 * @param {object} profiles
 * @param {boolean} [isNormalizedOp] when true, op has id/output for compatibility
 * @returns {object[]}
 */
function validateExecution(execution, op, path, modelId, file, profiles, isNormalizedOp = false) {
  /** @type {object[]} */
  const out = [];
  if (execution == null) return out;
  if (typeof execution !== 'object' || Array.isArray(execution)) {
    out.push(issue('schema_invalid', `execution must be object at ${path}`, { modelId, path, file }));
    return out;
  }
  const e = /** @type {Record<string, unknown>} */ (execution);
  if (typeof e.status !== 'string' || !EXECUTION_STATUS_SET.has(e.status)) {
    out.push(
      issue('schema_invalid', `invalid execution.status "${e.status}" at ${path}`, {
        modelId,
        path: `${path}.status`,
        file,
      }),
    );
    return out;
  }

  const profileId = typeof e.profileId === 'string' ? e.profileId : undefined;
  if (e.status === 'live') {
    if (!profileId) {
      out.push(
        issue('profile_unknown', 'execution.live requires profileId', {
          modelId,
          path: `${path}.profileId`,
          file,
          operationId: op?.id,
        }),
      );
      return out;
    }
    const hit = getAdapterProfile(profiles, profileId);
    if (!hit) {
      out.push(
        issue('profile_unknown', `unknown execution.profileId "${profileId}"`, {
          modelId,
          path: `${path}.profileId`,
          file,
          operationId: op?.id,
        }),
      );
      return out;
    }
    // Full compatibility only when we have op id + output (normalized or complete raw op)
    if (isNormalizedOp || (op && op.id && op.output?.type)) {
      const synthetic = {
        id: op.id,
        output: op.output,
        inputs: op.inputs ?? [],
        execution: e,
      };
      const compat = adapterProfileCompatible(synthetic, profiles);
      if (!compat.ok) {
        out.push(
          issue('profile_incompatible', compat.reason ?? 'profile incompatible', {
            modelId,
            path: `${path}.profileId`,
            file,
            operationId: op?.id,
          }),
        );
      }
    } else if (hit.status !== 'live') {
      out.push(
        issue('profile_unknown', `execution.profileId "${profileId}" is not live`, {
          modelId,
          path: `${path}.profileId`,
          file,
          operationId: op?.id,
        }),
      );
    }
  } else if (profileId) {
    const hit = getAdapterProfile(profiles, profileId);
    if (!hit) {
      out.push(
        issue('profile_unknown', `unknown execution.profileId "${profileId}"`, {
          modelId,
          path: `${path}.profileId`,
          file,
          operationId: op?.id,
        }),
      );
    }
  }
  return out;
}

/**
 * @param {unknown} op
 * @param {number} opIndex
 * @param {string} modelId
 * @param {Set<string>} opIds
 * @param {object} registry
 * @param {object} profiles
 * @param {string} [file]
 * @param {{ requirePromptExplicit?: boolean }} [opts]
 * @returns {object[]}
 */
function validateOperation(op, opIndex, modelId, opIds, registry, profiles, file, opts = {}) {
  /** @type {object[]} */
  const out = [];
  const base = `operations[${opIndex}]`;
  if (!op || typeof op !== 'object' || Array.isArray(op)) {
    out.push(issue('schema_invalid', `operation must be object at ${base}`, { modelId, path: base, file }));
    return out;
  }
  const o = /** @type {Record<string, unknown>} */ (op);
  const opId = typeof o.id === 'string' ? o.id : typeof o.mode === 'string' ? o.mode : '';
  if (!opId) {
    out.push(issue('slot_field_missing', `operation missing id at ${base}`, { modelId, path: `${base}.id`, file }));
  } else if (!opIds.has(opId)) {
    out.push(
      issue('operation_unknown', `unknown operation id "${opId}"`, {
        modelId,
        path: `${base}.id`,
        file,
        operationId: opId,
      }),
    );
  }

  if (o.output == null) {
    out.push(issue('output_type_missing', `missing output at ${base}`, { modelId, path: `${base}.output`, file, operationId: opId }));
  } else if (typeof o.output !== 'object' || Array.isArray(o.output)) {
    out.push(issue('schema_invalid', `output must be object at ${base}`, { modelId, path: `${base}.output`, file, operationId: opId }));
  } else {
    const output = /** @type {Record<string, unknown>} */ (o.output);
    if (output.type == null || output.type === '') {
      out.push(
        issue('output_type_missing', `missing output.type at ${base}`, {
          modelId,
          path: `${base}.output.type`,
          file,
          operationId: opId,
        }),
      );
    } else if (typeof output.type !== 'string' || !OUTPUT_TYPES.has(output.type)) {
      out.push(
        issue('output_type_invalid', `invalid output.type "${output.type}"`, {
          modelId,
          path: `${base}.output.type`,
          file,
          operationId: opId,
        }),
      );
    }
    if (output.allowedMimes != null) {
      out.push(...validateAllowedMimes(output.allowedMimes, `${base}.output.allowedMimes`, modelId, file));
    }
    if (output.min != null || output.max != null) {
      out.push(
        ...validateMinMaxPair(
          output.min,
          output.max,
          `${base}.output`,
          modelId,
          file,
          'schema_invalid',
        ),
      );
    }
  }

  if (!Array.isArray(o.inputs)) {
    out.push(issue('schema_invalid', `inputs must be array at ${base}`, { modelId, path: `${base}.inputs`, file, operationId: opId }));
  } else {
    o.inputs.forEach((slot, i) => {
      out.push(...validateSlot(slot, `${base}.inputs[${i}]`, modelId, file));
    });

    // promptPolicy: required ops must have explicit prompt slot (no magic inject as required)
    if (opId && opIds.has(opId)) {
      const policy = promptPolicyFor(opId, registry);
      const hasPrompt = o.inputs.some(
        (s) => s && typeof s === 'object' && (/** @type {any} */ (s).role === 'prompt' || /** @type {any} */ (s).slot === 'prompt'),
      );
      if (policy === 'required' && !hasPrompt) {
        out.push(
          issue('prompt_required_missing', `operation "${opId}" promptPolicy=required but inputs lack prompt slot`, {
            modelId,
            path: `${base}.inputs`,
            file,
            operationId: opId,
          }),
        );
      }
      if (policy === 'none' && hasPrompt) {
        out.push(
          issue('prompt_forbidden', `operation "${opId}" promptPolicy=none but inputs include prompt`, {
            modelId,
            path: `${base}.inputs`,
            file,
            operationId: opId,
            level: 'warning',
          }),
        );
      }
    }
  }

  out.push(...validateAliasesArray(o.aliases, `${base}.aliases`, modelId, file));
  out.push(...validateResearch(o.research, `${base}.research`, modelId, file, opId));

  // execution on op: full profile compatibility when live
  if (o.execution != null) {
    out.push(
      ...validateExecution(
        o.execution,
        { id: opId, output: o.output, inputs: o.inputs },
        `${base}.execution`,
        modelId,
        file,
        profiles,
        true,
      ),
    );
  }

  return out;
}

/**
 * Validate adapter-profiles.json shape.
 * Document root `version` is the profile-registry document version (not model
 * capability `schemaVersion`). Every profile.operations[] item MUST ∈ registry.
 *
 * @param {object} [profiles]
 * @param {object} [registry] operation-registry document (defaults to on-disk)
 * @returns {object[]}
 */
export function validateAdapterProfiles(
  profiles = loadAdapterProfiles(),
  registry = loadOperationRegistry(),
) {
  /** @type {object[]} */
  const out = [];
  if (!profiles || typeof profiles !== 'object') {
    out.push(issue('schema_invalid', 'adapter-profiles root must be object'));
    return out;
  }
  // Profile registry document version (NOT model capability schemaVersion).
  if (typeof profiles.version !== 'string' || !profiles.version) {
    out.push(issue('schema_invalid', 'adapter-profiles.version required'));
  }
  if (!Array.isArray(profiles.profiles)) {
    out.push(issue('schema_invalid', 'adapter-profiles.profiles must be array'));
    return out;
  }
  const knownOps = operationIdSet(registry);
  const seen = new Set();
  for (let pi = 0; pi < profiles.profiles.length; pi++) {
    const p = profiles.profiles[pi];
    if (!p || typeof p !== 'object') {
      out.push(issue('schema_invalid', 'profile entry must be object', { path: `profiles[${pi}]` }));
      continue;
    }
    if (typeof p.id !== 'string' || !p.id) {
      out.push(issue('schema_invalid', 'profile.id required', { path: `profiles[${pi}].id` }));
      continue;
    }
    if (seen.has(p.id)) {
      out.push(issue('schema_invalid', `duplicate profile id "${p.id}"`, { path: `profiles[${pi}].id` }));
    }
    seen.add(p.id);
    if (typeof p.status !== 'string' || !PROFILE_STATUSES.has(p.status)) {
      out.push(
        issue('schema_invalid', `profile "${p.id}" invalid status`, {
          path: `profiles[${pi}].status`,
        }),
      );
    }
    if (p.seam != null && typeof p.seam !== 'string') {
      out.push(
        issue('schema_invalid', `profile "${p.id}" seam must be string or null`, {
          path: `profiles[${pi}].seam`,
        }),
      );
    }
    if (!Array.isArray(p.operations) || p.operations.length < 1) {
      out.push(
        issue('schema_invalid', `profile "${p.id}" operations[] required nonempty`, {
          path: `profiles[${pi}].operations`,
        }),
      );
    } else {
      for (let j = 0; j < p.operations.length; j++) {
        const op = p.operations[j];
        if (typeof op !== 'string' || !op) {
          out.push(
            issue('schema_invalid', `profile "${p.id}" operations must be nonempty strings`, {
              path: `profiles[${pi}].operations[${j}]`,
            }),
          );
          continue;
        }
        if (!knownOps.has(op)) {
          out.push(
            issue(
              'profile_operation_unknown',
              `profile "${p.id}" operations[${j}] unknown operation "${op}" (not in operation registry)`,
              {
                path: `profiles[${pi}].operations[${j}]`,
                operationId: op,
              },
            ),
          );
        }
      }
    }
    if (!Array.isArray(p.outputTypes) || p.outputTypes.length < 1) {
      out.push(
        issue('schema_invalid', `profile "${p.id}" outputTypes[] required nonempty`, {
          path: `profiles[${pi}].outputTypes`,
        }),
      );
    } else {
      for (const t of p.outputTypes) {
        if (!OUTPUT_TYPES.has(t)) {
          out.push(
            issue('schema_invalid', `profile "${p.id}" invalid outputType "${t}"`, {
              path: `profiles[${pi}].outputTypes`,
            }),
          );
        }
      }
    }
  }
  return out;
}

/**
 * Validate operation-registry.json shape including promptPolicy.
 * @param {object} [registry]
 * @returns {object[]}
 */
export function validateOperationRegistry(registry = loadOperationRegistry()) {
  /** @type {object[]} */
  const out = [];
  if (!registry || typeof registry !== 'object') {
    out.push(issue('schema_invalid', 'operation-registry root must be object'));
    return out;
  }
  if (typeof registry.version !== 'string' || !registry.version) {
    out.push(issue('schema_invalid', 'operation-registry.version required'));
  }
  if (!Array.isArray(registry.operations)) {
    out.push(issue('schema_invalid', 'operation-registry.operations must be array'));
    return out;
  }
  const seen = new Set();
  for (const op of registry.operations) {
    if (!op || typeof op !== 'object') {
      out.push(issue('schema_invalid', 'registry operation must be object'));
      continue;
    }
    if (typeof op.id !== 'string' || !op.id) {
      out.push(issue('schema_invalid', 'registry operation.id required'));
      continue;
    }
    if (seen.has(op.id)) {
      out.push(issue('schema_invalid', `duplicate registry operation id "${op.id}"`));
    }
    seen.add(op.id);
    if (!PROMPT_POLICIES.has(op.promptPolicy)) {
      out.push(
        issue('schema_invalid', `registry operation "${op.id}" promptPolicy must be required|optional|none`),
      );
    }
    if (typeof op.defaultOutputType === 'string' && !OUTPUT_TYPES.has(op.defaultOutputType)) {
      out.push(issue('schema_invalid', `registry operation "${op.id}" invalid defaultOutputType`));
    }
  }
  if (seen.size !== 17) {
    out.push(issue('schema_invalid', `operation registry must have exactly 17 ops, got ${seen.size}`));
  }
  return out;
}

/**
 * Validate one model object (raw or normalized).
 * @param {unknown} model
 * @param {{ file?: string, registry?: object, profiles?: object, skipPromptPolicy?: boolean }} [opts]
 * @returns {object[]}
 */
export function validateModel(model, opts = {}) {
  /** @type {object[]} */
  const out = [];
  const file = opts.file;
  const registry = opts.registry ?? loadOperationRegistry();
  const opIds = operationIdSet(registry);
  const profiles = opts.profiles ?? loadAdapterProfiles();

  if (!model || typeof model !== 'object' || Array.isArray(model)) {
    out.push(issue('schema_invalid', 'model must be object', { file }));
    return out;
  }
  const m = /** @type {Record<string, unknown>} */ (model);
  const modelId = typeof m.id === 'string' ? m.id : undefined;

  if (!modelId) {
    out.push(issue('schema_invalid', 'model.id required', { path: 'id', file }));
  }
  if (typeof m.label !== 'string' || !m.label) {
    out.push(issue('schema_invalid', 'model.label required', { modelId, path: 'label', file }));
  }

  const ops = Array.isArray(m.operations)
    ? m.operations
    : Array.isArray(m.modes)
      ? m.modes
      : null;
  if (!ops || ops.length < 1) {
    out.push(
      issue('schema_invalid', 'model.operations (or legacy modes) required non-empty', {
        modelId,
        path: 'operations',
        file,
      }),
    );
  } else {
    if (!Array.isArray(m.operations) && Array.isArray(m.modes)) {
      out.push(
        issue('legacy_key_used', 'model uses legacy key "modes"; prefer "operations"', {
          modelId,
          path: 'modes',
          file,
          level: 'warning',
        }),
      );
    }
    ops.forEach((op, i) => {
      out.push(...validateOperation(op, i, modelId ?? 'unknown', opIds, registry, profiles, file));
    });
  }

  // model-level research/execution are defaults only
  out.push(...validateResearch(m.research, 'research', modelId, file));
  if (m.execution != null) {
    // model-level: only shape + profile exists; full op compatibility is per-op
    out.push(...validateExecution(m.execution, {}, 'execution', modelId, file, profiles, false));
  }

  out.push(...validateAliasesArray(m.aliases, 'aliases', modelId, file));

  return out;
}

/** Canonical model-capability Contract v1.1 schemaVersion literal. */
export const CANONICAL_SCHEMA_VERSION = '1.1';

/**
 * Validate a canonical document root { schemaVersion, models }.
 * Input must already be pre-normalized (legacy root `version` stripped/mapped).
 * Does NOT accept root `version` as a substitute for schemaVersion.
 *
 * Typed schemaVersion failures (stable codes):
 * - missing / empty → `schema_invalid` (path schemaVersion)
 * - wrong type → `schema_invalid` (path schemaVersion)
 * - present but ≠ "1.1" → `schema_version_unsupported`
 * - residual root `version` after pre-normalize → `schema_version_conflict`
 *
 * @param {unknown} doc
 * @param {{ file?: string, registry?: object, profiles?: object }} [opts]
 * @returns {object[]}
 */
export function validateDoc(doc, opts = {}) {
  /** @type {object[]} */
  const out = [];
  const file = opts.file;
  if (!doc || typeof doc !== 'object' || Array.isArray(doc)) {
    out.push(issue('schema_invalid', 'document root must be object', { file }));
    return out;
  }
  const d = /** @type {Record<string, unknown>} */ (doc);

  // Residual legacy root version must never pass canonical validateDoc.
  if (Object.prototype.hasOwnProperty.call(d, 'version')) {
    out.push(
      issue(
        'schema_version_conflict',
        'document root must not carry legacy "version" after pre-normalize; use schemaVersion only',
        { path: 'version', file },
      ),
    );
  }

  if (!Object.prototype.hasOwnProperty.call(d, 'schemaVersion') || d.schemaVersion == null || d.schemaVersion === '') {
    out.push(
      issue('schema_invalid', 'document.schemaVersion required (exact "1.1")', {
        path: 'schemaVersion',
        file,
      }),
    );
  } else if (typeof d.schemaVersion !== 'string') {
    out.push(
      issue('schema_invalid', `document.schemaVersion must be string, got ${typeof d.schemaVersion}`, {
        path: 'schemaVersion',
        file,
      }),
    );
  } else if (d.schemaVersion !== CANONICAL_SCHEMA_VERSION) {
    out.push(
      issue(
        'schema_version_unsupported',
        `unsupported schemaVersion "${d.schemaVersion}"; required exact "${CANONICAL_SCHEMA_VERSION}"`,
        { path: 'schemaVersion', file },
      ),
    );
  }

  if (!Array.isArray(d.models)) {
    out.push(issue('schema_invalid', 'document.models required array', { path: 'models', file }));
    return out;
  }
  d.models.forEach((model, i) => {
    const issues = validateModel(model, opts);
    for (const iss of issues) {
      if (!iss.path?.startsWith('operations') && iss.path && !iss.path.startsWith('models')) {
        iss.path = `models[${i}].${iss.path}`;
      } else if (
        iss.path?.startsWith('operations') ||
        iss.path?.startsWith('research') ||
        iss.path?.startsWith('execution') ||
        iss.path?.startsWith('label') ||
        iss.path?.startsWith('modes') ||
        iss.path?.startsWith('aliases')
      ) {
        iss.path = `models[${i}].${iss.path}`;
      }
      out.push(iss);
    }
  });
  return out;
}

/**
 * Cross-model alias uniqueness across an index of models.
 * Model.aliases are runtime/wire ID aliases (must be unique and must not collide
 * with any model.id). Operation.aliases are legacy operation-name attachments;
 * when scanned they share the same uniqueness pool so they cannot masquerade as
 * another model's wire id, but they are NOT used as model-id lookup keys.
 *
 * @param {Iterable<object>} models
 * @returns {object[]}
 */
export function validateCrossModelAliases(models) {
  /** @type {object[]} */
  const out = [];
  /** @type {Map<string, string>} token -> modelId owner */
  const owner = new Map();
  /** @type {Set<string>} */
  const modelIds = new Set();

  const list = [...models];
  for (const model of list) {
    if (typeof model?.id === 'string' && model.id) modelIds.add(model.id);
  }

  for (const model of list) {
    // Reserve model.id first so another model's alias cannot steal it.
    if (typeof model.id === 'string' && model.id) {
      if (owner.has(model.id) && owner.get(model.id) !== model.id) {
        out.push(
          issue(
            'duplicate_alias',
            `model id "${model.id}" conflicts with alias owned by "${owner.get(model.id)}"`,
            { modelId: model.id },
          ),
        );
      } else {
        owner.set(model.id, model.id);
      }
    }

    // Model-level aliases: wire/runtime ID normalization.
    const modelAliases = Array.isArray(model.aliases) ? model.aliases : [];
    for (const a of modelAliases) {
      if (typeof a !== 'string' || !a) continue;
      if (modelIds.has(a) && a !== model.id) {
        out.push(
          issue('duplicate_alias', `model alias "${a}" collides with model id "${a}"`, {
            modelId: model.id,
          }),
        );
        continue;
      }
      if (owner.has(a) && owner.get(a) !== model.id) {
        out.push(
          issue('duplicate_alias', `alias "${a}" claimed by both "${owner.get(a)}" and "${model.id}"`, {
            modelId: model.id,
          }),
        );
      } else {
        owner.set(a, model.id);
      }
    }

    // Operation-level aliases: legacy op-name only; still uniqueness-checked in
    // the shared pool so they cannot be mistaken for free model wire ids.
    for (const op of model.operations ?? []) {
      if (!Array.isArray(op.aliases)) continue;
      for (const a of op.aliases) {
        if (typeof a !== 'string' || !a) continue;
        if (modelIds.has(a) && a !== model.id) {
          out.push(
            issue(
              'duplicate_alias',
              `operation alias "${a}" collides with model id "${a}" (op aliases are not model wire ids)`,
              { modelId: model.id, operationId: op.id },
            ),
          );
          continue;
        }
        if (owner.has(a) && owner.get(a) !== model.id) {
          out.push(
            issue('duplicate_alias', `alias "${a}" claimed by both "${owner.get(a)}" and "${model.id}"`, {
              modelId: model.id,
              operationId: op.id,
            }),
          );
        } else {
          owner.set(a, model.id);
        }
      }
    }
  }
  return out;
}

export { PROMPT_POLICIES, OUTPUT_TYPES, MEDIA_TYPES };
