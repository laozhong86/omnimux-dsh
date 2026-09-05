/**
 * Contract-driven video parameter resolution and transition validation.
 *
 * Model declarations provide the base schema. The selected operation may
 * replace individual fields (for example Seedance edit requires adaptive / -1).
 * Model or operation switches report every adjustment or dormant value.
 */

import type {
  CapabilityCatalog,
  CapabilityModelItem,
  ModelParameterSchema,
} from '../../../../../../shared/api.ts';
import {
  buildEffectiveOpsUiState,
  buildUiUpstreamFingerprint,
  setParamsOperation,
  readPreferredOperationId,
  shouldRenderModeUi,
  type EffectiveOpsUiState,
  type OperationUiOption,
  type UpstreamMediaSnapshot,
} from '../../../../../../shared/validation/operationUi.ts';
import type { EffectiveVideoParams, VideoNodeParams } from './types.ts';

export const DEFAULT_ASPECT_RATIO = '16:9';
export const DEFAULT_DURATION = 5;

const BOOLEAN_FIELDS = [
  ['sound', '声音'],
  ['watermark', '水印'],
  ['returnLastFrame', '返回尾帧'],
  ['webSearch', '联网搜索'],
  ['nsfwCheck', '内容审核'],
] as const;

const ENUM_FIELDS = [
  ['outputFormat', '输出格式'],
  ['referenceTaskType', '参考任务类型'],
  ['generationType', '生成类型'],
] as const;

export interface ResolveEffectiveVideoParamsArgs {
  params: VideoNodeParams | undefined;
  schema: ModelParameterSchema | undefined;
  modelItem: CapabilityModelItem | undefined;
  catalog?: CapabilityCatalog | null;
  upstreams?: UpstreamMediaSnapshot[];
  prompt?: string;
}

export interface VideoParamTransition {
  params: Record<string, unknown>;
  notices: string[];
}

/** Operation fields replace the corresponding model-level declaration. */
export function mergeVideoParameterSchema(
  base: ModelParameterSchema | undefined,
  override: Record<string, unknown> | undefined,
): ModelParameterSchema {
  return {
    ...(base ?? {}),
    ...((override ?? {}) as ModelParameterSchema),
  };
}

function selectedOperation(state: EffectiveOpsUiState): OperationUiOption | undefined {
  const id = state.selectedOperationId ?? state.implicitOperationId;
  return id ? state.effectiveOps.find((operation) => operation.id === id) : undefined;
}

function optionValue<T extends string | number>(
  value: unknown,
  options: Array<{ value: T }>,
  fallback: T,
  caseInsensitive = false,
): T {
  const exact = options.find((option) => Object.is(option.value, value));
  if (exact) return exact.value;
  if (caseInsensitive && typeof value === 'string') {
    const folded = value.toLowerCase();
    const match = options.find(
      (option) => typeof option.value === 'string' && option.value.toLowerCase() === folded,
    );
    if (match) return match.value;
  }
  return fallback;
}

function durationIsValid(value: unknown, schema: ModelParameterSchema['duration']): value is number {
  if (typeof value !== 'number' || !Number.isFinite(value) || !schema) return false;
  if (schema.allowAuto && value === -1) return true;
  if (schema.options?.some((option) => Object.is(option.value, value))) return true;
  const range = schema.range;
  if (!range || value < range.min || value > range.max) return false;
  const step = range.step ?? 1;
  return Math.abs((value - range.min) / step - Math.round((value - range.min) / step)) <= Number.EPSILON;
}

function integerIsValid(value: unknown, schema: ModelParameterSchema['seed']): value is number {
  if (!schema || !Number.isInteger(value)) return false;
  if (!schema.range) return true;
  const numeric = value as number;
  if (numeric < schema.range.min || numeric > schema.range.max) return false;
  const step = schema.range.step ?? 1;
  return Math.abs((numeric - schema.range.min) / step - Math.round((numeric - schema.range.min) / step)) <= Number.EPSILON;
}

function buildOpsState(args: ResolveEffectiveVideoParamsArgs): EffectiveOpsUiState {
  const model = args.modelItem?.id
    ?? (typeof args.params?.model === 'string' ? args.params.model : '');
  const preferred = readPreferredOperationId((args.params ?? {}) as Record<string, unknown>);
  return buildEffectiveOpsUiState({
    catalog: args.catalog ?? null,
    modelId: model,
    fingerprint: buildUiUpstreamFingerprint({
      prompt: args.prompt,
      upstreams: args.upstreams,
    }),
    ...(preferred ? { preferredOperationId: preferred } : {}),
    outputType: 'video',
  });
}

export function resolveEffectiveVideoParams(
  args: ResolveEffectiveVideoParamsArgs,
): EffectiveVideoParams {
  const params = args.params;
  const model = args.modelItem?.id
    ?? (typeof params?.model === 'string' ? params.model : '');
  const opsState = buildOpsState(args);
  const operationOption = selectedOperation(opsState);
  const schema = mergeVideoParameterSchema(args.schema, operationOption?.parameters);
  const operation = operationOption?.id ?? '';

  const ratioOptions = schema.aspectRatio?.options ?? [];
  const aspectRatio = ratioOptions.length > 0
    ? optionValue(
        params?.aspectRatio,
        ratioOptions,
        schema.aspectRatio?.defaultValue ?? ratioOptions[0]?.value ?? DEFAULT_ASPECT_RATIO,
      )
    : (typeof params?.aspectRatio === 'string' && params.aspectRatio.trim()
      ? params.aspectRatio
      : schema.aspectRatio?.defaultValue ?? DEFAULT_ASPECT_RATIO);

  const resolutionOptions = schema.resolution?.options ?? [];
  const resolution = resolutionOptions.length > 0
    ? optionValue(
        params?.resolution,
        resolutionOptions,
        schema.resolution?.defaultValue ?? resolutionOptions[0]!.value,
        schema.resolution?.caseInsensitive === true,
      )
    : undefined;

  const duration = durationIsValid(params?.duration, schema.duration)
    ? params.duration
    : schema.duration?.defaultValue ?? DEFAULT_DURATION;

  const sound = schema.sound?.supported
    ? (typeof params?.sound === 'boolean' ? params.sound : schema.sound.defaultValue)
    : false;

  const result: EffectiveVideoParams = {
    model,
    operation,
    operationLabel: operationOption?.label ?? operation,
    effectiveOperations: opsState.effectiveOps,
    showModeUi: shouldRenderModeUi(opsState),
    schema,
    aspectRatio,
    duration,
    sound,
    hasSoundSupport: Boolean(schema.sound?.supported),
  };

  if (resolution !== undefined) result.resolution = resolution;
  if (integerIsValid(params?.seed, schema.seed)) result.seed = params.seed;
  for (const [field] of BOOLEAN_FIELDS) {
    if (field === 'sound') continue;
    const definition = schema[field];
    if (definition?.supported) {
      result[field] = typeof params?.[field] === 'boolean'
        ? params[field] as boolean
        : definition.defaultValue;
    }
  }
  for (const [field] of ENUM_FIELDS) {
    const definition = schema[field];
    if (definition?.options?.length) {
      result[field] = optionValue(
        params?.[field],
        definition.options,
        definition.defaultValue ?? definition.options[0]!.value,
      );
    }
  }
  if (typeof params?.fileUrl === 'string') result.fileUrl = params.fileUrl;
  if (typeof params?.linkUrl === 'string') result.linkUrl = params.linkUrl;
  if (typeof params?.firstFrameUrl === 'string') result.firstFrameUrl = params.firstFrameUrl;
  if (typeof params?.lastFrameUrl === 'string') result.lastFrameUrl = params.lastFrameUrl;
  return result;
}

function pushUnique(items: string[], value: string): void {
  if (!items.includes(value)) items.push(value);
}

/**
 * Apply model/operation constraints and report every automatic adjustment.
 * Unsupported fields remain dormant so switching back restores the value.
 */
export function buildVideoParamTransition(
  oldParams: Record<string, unknown>,
  targetModelItem: CapabilityModelItem | undefined,
  opts: {
    catalog?: CapabilityCatalog | null;
    upstreams?: UpstreamMediaSnapshot[];
    prompt?: string;
    nextOperationId?: string;
  } = {},
): VideoParamTransition {
  let nextParams: Record<string, unknown> = {
    ...oldParams,
    model: targetModelItem?.id ?? oldParams.model,
  };
  const notices: string[] = [];
  const requestedOperation = opts.nextOperationId ?? readPreferredOperationId(nextParams);
  nextParams = setParamsOperation(nextParams, requestedOperation);

  let operationOption: OperationUiOption | undefined;
  if (opts.catalog && targetModelItem?.id) {
    const opsState = buildEffectiveOpsUiState({
      catalog: opts.catalog,
      modelId: targetModelItem.id,
      fingerprint: buildUiUpstreamFingerprint({ prompt: opts.prompt, upstreams: opts.upstreams }),
      ...(requestedOperation ? { preferredOperationId: requestedOperation } : {}),
      outputType: 'video',
    });
    operationOption = selectedOperation(opsState);
    if (operationOption) {
      if (requestedOperation && requestedOperation !== operationOption.id) {
        pushUnique(notices, `当前输入不支持原生成方式，已切换为“${operationOption.label}”`);
      }
      nextParams = setParamsOperation(nextParams, operationOption.id);
    } else if (opsState.count === 0) {
      delete nextParams.operation;
    }
  }

  const schema = mergeVideoParameterSchema(targetModelItem?.parameters, operationOption?.parameters);
  const setAdjusted = (field: string, value: unknown, label: string): void => {
    const oldValue = nextParams[field];
    nextParams[field] = value;
    if (oldValue !== undefined && !Object.is(oldValue, value)) {
      pushUnique(notices, `${label}不兼容，已改为 ${String(value)}`);
    }
  };

  const ratioOptions = schema.aspectRatio?.options ?? [];
  if (ratioOptions.length > 0 && !ratioOptions.some((option) => Object.is(option.value, nextParams.aspectRatio))) {
    setAdjusted(
      'aspectRatio',
      schema.aspectRatio?.defaultValue ?? ratioOptions[0]?.value ?? DEFAULT_ASPECT_RATIO,
      '比例',
    );
  }
  if (schema.duration && !durationIsValid(nextParams.duration, schema.duration)) {
    setAdjusted('duration', schema.duration.defaultValue ?? DEFAULT_DURATION, '时长');
  }
  const resolutionOptions = schema.resolution?.options ?? [];
  if (resolutionOptions.length > 0) {
    const canonicalResolution = optionValue(
      nextParams.resolution,
      resolutionOptions,
      schema.resolution?.defaultValue ?? resolutionOptions[0]!.value,
      schema.resolution?.caseInsensitive === true,
    );
    if (!Object.is(canonicalResolution, nextParams.resolution)) {
      setAdjusted('resolution', canonicalResolution, '清晰度');
    }
  }

  for (const [field, label] of BOOLEAN_FIELDS) {
    const definition = schema[field];
    if (definition?.supported && typeof nextParams[field] !== 'boolean') {
      setAdjusted(field, definition.defaultValue, label);
    } else if (!definition?.supported && nextParams[field] !== undefined) {
      pushUnique(notices, `当前模型或生成方式不使用${label}，原值已保留`);
    }
  }
  for (const [field, label] of ENUM_FIELDS) {
    const definition = schema[field];
    if (definition?.options?.length) {
      if (!definition.options.some((option) => Object.is(option.value, nextParams[field]))) {
        setAdjusted(field, definition.defaultValue ?? definition.options[0]?.value, label);
      }
    } else if (nextParams[field] !== undefined) {
      pushUnique(notices, `当前模型或生成方式不使用${label}，原值已保留`);
    }
  }

  if (schema.seed && nextParams.seed !== undefined && !integerIsValid(nextParams.seed, schema.seed)) {
    delete nextParams.seed;
    pushUnique(notices, '随机种子不符合当前范围，已清空');
  } else if (!schema.seed && nextParams.seed !== undefined) {
    pushUnique(notices, '当前模型或生成方式不使用随机种子，原值已保留');
  }
  return { params: nextParams, notices };
}

/** Existing callers that only need the resulting params keep this shape. */
export function validateAndFallbackVideoParams(
  oldParams: Record<string, unknown>,
  targetModelItem: CapabilityModelItem | undefined,
  opts: Parameters<typeof buildVideoParamTransition>[2] = {},
): Record<string, unknown> {
  return buildVideoParamTransition(oldParams, targetModelItem, opts).params;
}

function urlIsHttp(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

const DOCUMENT_MIME_BY_EXTENSION: Record<string, string> = {
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  doc: 'application/msword',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xls: 'application/vnd.ms-excel',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ppt: 'application/vnd.ms-powerpoint',
  pdf: 'application/pdf',
  txt: 'text/plain',
  key: 'application/vnd.apple.keynote',
  pages: 'application/vnd.apple.pages',
  numbers: 'application/vnd.apple.numbers',
  md: 'text/markdown',
};

function documentUrlMatchesSlot(value: string, allowedMimes: string[] | undefined): boolean {
  if (!allowedMimes?.length) return true;
  try {
    const extension = new URL(value).pathname.split('.').pop()?.toLowerCase() ?? '';
    const mime = DOCUMENT_MIME_BY_EXTENSION[extension];
    return Boolean(mime && allowedMimes.includes(mime));
  } catch {
    return false;
  }
}

/** Immediate client-side validation; the hub repeats authoritative checks. */
export function validateVideoParamsForUi(input: {
  prompt?: string;
  params: EffectiveVideoParams;
  upstreams?: UpstreamMediaSnapshot[];
}): string[] {
  const { params } = input;
  const errors: string[] = [];
  const prompt = input.prompt ?? '';
  const operation = params.effectiveOperations.find((entry) => entry.id === params.operation);
  const promptSlot = operation?.slots.find((slot) => slot.type === 'text' || slot.role === 'prompt');
  const promptLength = Array.from(prompt).length;
  if ((promptSlot?.min ?? 0) > 0 && prompt.trim().length === 0) {
    errors.push('当前生成方式需要提示词');
  }
  if (
    promptLength > 0
    && typeof params.schema.prompt?.minLength === 'number'
    && promptLength < params.schema.prompt.minLength
  ) {
    errors.push(`提示词至少 ${params.schema.prompt.minLength} 个字符`);
  }
  if (typeof params.schema.prompt?.maxLength === 'number' && promptLength > params.schema.prompt.maxLength) {
    errors.push(`提示词最多 ${params.schema.prompt.maxLength} 个字符`);
  }

  const requiredUpstreamSlots = operation?.slots.filter(
    (slot) => slot.source === 'upstream_edge' && slot.min > 0,
  ) ?? [];
  if (operation && !operation.ready && requiredUpstreamSlots.length > 0) {
    errors.push(`请补齐当前方式的必填素材：${requiredUpstreamSlots.map((slot) => slot.role || slot.slot).join('、')}`);
  }
  const fileSlot = operation?.slots.find((slot) => slot.slot === 'file_url');
  if (fileSlot?.min) {
    const fileUrl = params.fileUrl?.trim() ?? '';
    if (!fileUrl || !urlIsHttp(fileUrl)) {
      errors.push('请输入有效的文档 URL');
    } else if (!documentUrlMatchesSlot(fileUrl, fileSlot.allowedMimes)) {
      errors.push('文档格式不在当前模型支持列表');
    }
  }
  const linkSlot = operation?.slots.find((slot) => slot.slot === 'link_url');
  if (linkSlot?.min && (!params.linkUrl?.trim() || !urlIsHttp(params.linkUrl.trim()))) {
    errors.push('请输入有效的网页 URL');
  }

  if (operation && typeof params.duration === 'number' && params.duration >= 0) {
    for (const slot of operation.slots) {
      if (!Number.isFinite(slot.combinedOutputMaxDurationSec)) continue;
      const bindings = operation.bindings.filter((binding) => binding.slot === slot.slot);
      const durations = bindings.map((binding) => {
        const upstream = (input.upstreams ?? []).find((candidate) =>
          binding.edgeId
            ? candidate.edgeId === binding.edgeId
            : candidate.nodeId === binding.sourceNodeId,
        );
        const duration = upstream?.durationSec ?? upstream?.duration;
        return typeof duration === 'number' && Number.isFinite(duration) ? duration : undefined;
      });
      if (durations.some((duration) => duration === undefined)) continue;
      const totalInputDuration = durations.reduce<number>((sum, duration) => sum + (duration ?? 0), 0);
      const max = slot.combinedOutputMaxDurationSec as number;
      if (totalInputDuration + params.duration > max) {
        errors.push(`参考视频与输出时长合计不能超过 ${max} 秒`);
      }
    }
  }
  return [...new Set(errors)];
}
