/**
 * Video Parameter Adapter & Fallback Engine (Issue 467 / W2).
 *
 * Resolves EffectiveVideoParams from node params + model schema + the
 * contract-driven effective operation set. Writes only `params.operation`
 * (legacy `generationMode` is read-time migrated and stripped).
 */

import type {
  CapabilityCatalog,
  CapabilityModelItem,
  ModelParameterSchema,
} from '../../../../../../shared/api.ts';
import {
  buildEffectiveOpsUiState,
  buildUiUpstreamFingerprint,
  migrateParamsOperation,
  readPreferredOperationId,
  shouldRenderModeUi,
  type OperationUiOption,
  type UpstreamMediaSnapshot,
} from '../../../../../../shared/validation/operationUi.ts';
import type { EffectiveVideoParams, VideoNodeParams } from './types.ts';

/** 默认画幅比例 */
export const DEFAULT_ASPECT_RATIO = '16:9';

/** 默认时长（秒） */
export const DEFAULT_DURATION = 5;

/**
 * @deprecated Legacy default GenerationMode. New code uses catalog operation
 * ids via buildEffectiveOpsUiState; kept only for transitional callers.
 */
export const DEFAULT_GENERATION_MODE = 'reference';

export interface ResolveEffectiveVideoParamsArgs {
  params: VideoNodeParams | undefined;
  schema: ModelParameterSchema | undefined;
  modelItem: CapabilityModelItem | undefined;
  /** Catalog v1.1 DTO — required for contract-driven operation resolution. */
  catalog?: CapabilityCatalog | null;
  /** Upstream media snapshots (for effective-ops filtering). */
  upstreams?: UpstreamMediaSnapshot[];
  /** Node prompt (fingerprint). */
  prompt?: string;
}

/**
 * Resolve the effective, UI-ready video params.
 *
 * Operation resolution order:
 *   1. effective ops from the W1 kernel (catalog × fingerprint × model)
 *   2. preferred params.operation / legacy generationMode (when still effective)
 *   3. sole effective op (count === 1) or first effective (≥2)
 *   4. empty string when zero effective ops (mode UI hidden, generate blocked)
 */
export function resolveEffectiveVideoParams(
  paramsOrArgs: VideoNodeParams | undefined | ResolveEffectiveVideoParamsArgs,
  schemaArg?: ModelParameterSchema | undefined,
  modelItemArg?: CapabilityModelItem | undefined,
): EffectiveVideoParams {
  // Back-compat: previous signature was (params, schema, modelItem).
  const args: ResolveEffectiveVideoParamsArgs =
    paramsOrArgs !== null
    && typeof paramsOrArgs === 'object'
    && 'params' in (paramsOrArgs as object)
    && (schemaArg === undefined && modelItemArg === undefined
      || 'catalog' in (paramsOrArgs as object)
      || 'upstreams' in (paramsOrArgs as object)
      || 'prompt' in (paramsOrArgs as object))
      ? (paramsOrArgs as ResolveEffectiveVideoParamsArgs)
      : {
          params: paramsOrArgs as VideoNodeParams | undefined,
          schema: schemaArg,
          modelItem: modelItemArg,
        };

  const params = args.params;
  const schema = args.schema;
  const modelItem = args.modelItem;
  const catalog = args.catalog ?? null;

  const model = modelItem?.id ?? (typeof params?.model === 'string' ? params.model : '');

  const fingerprint = buildUiUpstreamFingerprint({
    prompt: args.prompt,
    upstreams: args.upstreams,
  });
  const preferred = readPreferredOperationId(
    (params ?? {}) as Record<string, unknown>,
  );
  const opsState = buildEffectiveOpsUiState({
    catalog,
    modelId: model,
    fingerprint,
    ...(preferred ? { preferredOperationId: preferred } : {}),
    outputType: 'video',
  });

  const effectiveOperations: OperationUiOption[] = opsState.effectiveOps;
  const showModeUi = shouldRenderModeUi(opsState);
  const operation = opsState.selectedOperationId
    ?? opsState.implicitOperationId
    ?? '';
  const operationLabel = operation
    ? (effectiveOperations.find((op) => op.id === operation)?.label ?? operation)
    : '';

  // 3. 画幅比例 (aspectRatio)
  let aspectRatio = DEFAULT_ASPECT_RATIO;
  const ratioOptions = schema?.aspectRatio?.options;
  if (Array.isArray(ratioOptions) && ratioOptions.length > 0) {
    if (params?.aspectRatio && ratioOptions.some((opt) => opt.value === params.aspectRatio)) {
      aspectRatio = params.aspectRatio;
    } else {
      aspectRatio = schema?.aspectRatio?.defaultValue ?? ratioOptions[0]?.value ?? DEFAULT_ASPECT_RATIO;
    }
  } else if (typeof params?.aspectRatio === 'string' && params.aspectRatio.trim().length > 0) {
    aspectRatio = params.aspectRatio;
  } else {
    aspectRatio = schema?.aspectRatio?.defaultValue ?? DEFAULT_ASPECT_RATIO;
  }

  // 4. 清晰度 (resolution)
  let resolution: string | undefined;
  const resOptions = schema?.resolution?.options;
  if (Array.isArray(resOptions) && resOptions.length > 0) {
    if (params?.resolution && resOptions.some((opt) => opt.value === params.resolution)) {
      resolution = params.resolution;
    } else {
      resolution = schema?.resolution?.defaultValue ?? resOptions[0]?.value;
    }
  }

  // 5. 时长 (duration)
  let duration: number | string = DEFAULT_DURATION;
  const durOptions = schema?.duration?.options;
  if (Array.isArray(durOptions) && durOptions.length > 0) {
    if (typeof params?.duration === 'number' && durOptions.some((opt) => opt.value === params.duration)) {
      duration = params.duration;
    } else {
      duration = schema?.duration?.defaultValue ?? durOptions[0]?.value ?? DEFAULT_DURATION;
    }
  } else if (typeof params?.duration === 'number') {
    duration = params.duration;
  } else {
    duration = schema?.duration?.defaultValue ?? DEFAULT_DURATION;
  }

  // 6. 有声音效
  const hasSoundSupport = Boolean(schema?.sound?.supported);
  const sound = hasSoundSupport
    ? (typeof params?.sound === 'boolean' ? params.sound : Boolean(schema?.sound?.defaultValue))
    : false;

  const result: EffectiveVideoParams = {
    model,
    operation,
    operationLabel,
    effectiveOperations,
    showModeUi,
    aspectRatio,
    duration,
    sound,
    hasSoundSupport,
    // Transitional mirror so older summary paths keep working.
    generationMode: operation || undefined,
  };

  if (resolution !== undefined) result.resolution = resolution;
  if (typeof params?.firstFrameUrl === 'string') result.firstFrameUrl = params.firstFrameUrl;
  if (typeof params?.lastFrameUrl === 'string') result.lastFrameUrl = params.lastFrameUrl;

  return result;
}

/**
 * Pure function: model-switch fallback + parameter scrubbing.
 *
 * 1. Inherit previous params and update `model`.
 * 2. Migrate operation (preferred / legacy generationMode) onto
 *    `params.operation` and strip `generationMode`.
 * 3. Validate aspectRatio / duration / resolution / sound against the target
 *    schema (unchanged behaviour).
 */
export function validateAndFallbackVideoParams(
  oldParams: Record<string, unknown>,
  targetModelItem: CapabilityModelItem | undefined,
  opts: {
    catalog?: CapabilityCatalog | null;
    upstreams?: UpstreamMediaSnapshot[];
    prompt?: string;
    /** Explicit next operation (user pick); otherwise keep preferred if still valid. */
    nextOperationId?: string;
  } = {},
): Record<string, unknown> {
  const schema = targetModelItem?.parameters;
  let nextParams: Record<string, unknown> = {
    ...oldParams,
    model: targetModelItem?.id ?? oldParams['model'],
  };

  // Operation: migrate legacy → canonical, optionally force nextOperationId.
  const preferred = opts.nextOperationId
    ?? readPreferredOperationId(nextParams);
  nextParams = migrateParamsOperation(nextParams, preferred);

  // When a catalog is available, clamp the operation to an effective one.
  if (opts.catalog && targetModelItem?.id) {
    const fingerprint = buildUiUpstreamFingerprint({
      prompt: opts.prompt,
      upstreams: opts.upstreams,
    });
    const opsState = buildEffectiveOpsUiState({
      catalog: opts.catalog,
      modelId: targetModelItem.id,
      fingerprint,
      ...(preferred ? { preferredOperationId: preferred } : {}),
      outputType: 'video',
    });
    if (opsState.selectedOperationId) {
      nextParams = migrateParamsOperation(nextParams, opsState.selectedOperationId);
    } else if (opsState.count === 0) {
      // Zero effective ops: keep operation empty so UI can show the error.
      delete nextParams.operation;
    }
  }

  // aspectRatio
  const ratioOptions = schema?.aspectRatio?.options;
  if (Array.isArray(ratioOptions) && ratioOptions.length > 0) {
    const isSupported = ratioOptions.some((opt) => opt.value === nextParams['aspectRatio']);
    if (!isSupported) {
      nextParams['aspectRatio'] =
        schema?.aspectRatio?.defaultValue ?? ratioOptions[0]?.value ?? DEFAULT_ASPECT_RATIO;
    }
  } else if (!nextParams['aspectRatio']) {
    nextParams['aspectRatio'] = schema?.aspectRatio?.defaultValue ?? DEFAULT_ASPECT_RATIO;
  }

  // duration
  const durOptions = schema?.duration?.options;
  if (Array.isArray(durOptions) && durOptions.length > 0) {
    const isSupported = durOptions.some((opt) => opt.value === nextParams['duration']);
    if (!isSupported) {
      nextParams['duration'] =
        schema?.duration?.defaultValue ?? durOptions[0]?.value ?? DEFAULT_DURATION;
    }
  } else if (typeof nextParams['duration'] !== 'number') {
    nextParams['duration'] = schema?.duration?.defaultValue ?? DEFAULT_DURATION;
  }

  // resolution
  const resOptions = schema?.resolution?.options;
  if (Array.isArray(resOptions) && resOptions.length > 0) {
    const isSupported = resOptions.some((opt) => opt.value === nextParams['resolution']);
    if (!isSupported) {
      nextParams['resolution'] = schema?.resolution?.defaultValue ?? resOptions[0]?.value;
    }
  } else {
    delete nextParams['resolution'];
  }

  // sound
  const hasSoundSupport = Boolean(schema?.sound?.supported);
  if (hasSoundSupport) {
    if (typeof nextParams['sound'] !== 'boolean') {
      nextParams['sound'] = Boolean(schema?.sound?.defaultValue);
    }
  } else {
    delete nextParams['sound'];
  }

  return nextParams;
}
