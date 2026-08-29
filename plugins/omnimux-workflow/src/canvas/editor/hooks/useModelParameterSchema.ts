/**
 * useModelParameterSchema — 动态模型参数 Schema 与多级缓存钩子。
 *
 * 1. 从 CapabilityCatalog 中提取指定模型的 parameterSchema；
 * 2. 具备 SWR / 本地持久化缓存与安全回退缺省值，无网络延迟；
 * 3. 驱动 ConfigPanel 自适应画幅、时长、分辨率等动态参数胶囊。
 */

import { useMemo } from 'react';
import type { CapabilityCatalog, CapabilityModelItem, ModelParameterSchema } from '../../../shared/api';
import type { MaterialType } from '../../../types/materialNode';

const CATALOG_CACHE_KEY = 'wf_capabilities_catalog_v1';

/** 针对未包含在 Catalog 中的未知模型提供的安全通用兜底 Schema */
const DEFAULT_FALLBACK_SCHEMA: Record<MaterialType, ModelParameterSchema> = {
  image: {
    aspectRatio: {
      options: [
        { value: 'auto', label: '自适应' },
        { value: '1:1', label: '1:1' },
        { value: '4:3', label: '4:3' },
        { value: '3:4', label: '3:4' },
        { value: '16:9', label: '16:9' },
        { value: '9:16', label: '9:16' },
        { value: '21:9', label: '21:9' },
      ],
      defaultValue: '16:9',
    },
    resolution: {
      options: [{ value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
      defaultValue: '2K',
    },
  },
  video: {
    aspectRatio: {
      options: [
        { value: '16:9', label: '16:9' },
        { value: '9:16', label: '9:16' },
        { value: '1:1', label: '1:1' },
      ],
      defaultValue: '16:9',
    },
    duration: {
      options: [
        { value: 5, label: '5s' },
        { value: 10, label: '10s' },
      ],
      defaultValue: 5,
      unit: 's',
    },
    resolution: {
      options: [{ value: '1080P', label: '1080P' }],
      defaultValue: '1080P',
    },
  },
  audio: {
    duration: {
      options: [
        { value: 30, label: '30s' },
        { value: 60, label: '60s' },
        { value: 120, label: '120s' },
      ],
      defaultValue: 60,
      unit: 's',
    },
    voice: {
      options: [
        { value: 'alloy', label: 'Alloy' },
        { value: 'echo', label: 'Echo' },
        { value: 'fable', label: 'Fable' },
        { value: 'onyx', label: 'Onyx' },
        { value: 'nova', label: 'Nova' },
        { value: 'shimmer', label: 'Shimmer' },
      ],
      defaultValue: 'alloy',
    },
  },
  text: {},
};

export interface UseModelParameterSchemaResult {
  schema: ModelParameterSchema;
  modelItem: CapabilityModelItem | undefined;
  aspectRatioOptions: Array<{ value: string; label: string }>;
  defaultAspectRatio: string;
  isAspectRatioValid: (ratio: string | undefined) => boolean;
  durationOptions: Array<{ value: number; label: string }>;
  defaultDuration: number;
  isDurationValid: (duration: number | undefined) => boolean;
  resolutionOptions: Array<{ value: string; label: string }>;
  defaultResolution: string;
  qualityOptions: Array<{ value: string; label: string }>;
  defaultQuality: string;
  hasSoundSupport: boolean;
  defaultSound: boolean;
  voiceOptions: Array<{ value: string; label: string }>;
  defaultVoice: string;
  hasInstrumentalSupport: boolean;
  defaultInstrumental: boolean;
}

/** 获取本地缓存的 Catalog（带异常保护） */
export function getCachedCatalog(): CapabilityCatalog | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const raw = window.localStorage.getItem(CATALOG_CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CapabilityCatalog;
  } catch {
    return null;
  }
}

/** 写入本地持久化缓存 */
export function setCachedCatalog(catalog: CapabilityCatalog): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(catalog));
    }
  } catch {
    // 忽略 QuotaExceededError
  }
}

export function useModelParameterSchema(
  materialType: MaterialType,
  modelId: string | undefined,
  catalog: CapabilityCatalog | null,
): UseModelParameterSchemaResult {
  return useMemo(() => {
    const activeCatalog = catalog ?? getCachedCatalog();
    const modelList = activeCatalog?.[materialType] ?? [];
    const modelItem = modelList.find((m) => m.id === modelId) ?? modelList[0];

    const fallback = DEFAULT_FALLBACK_SCHEMA[materialType] ?? {};
    const schema: ModelParameterSchema = modelItem?.parameters ?? fallback;

    // 画幅
    const aspectRatioOptions =
      schema.aspectRatio?.options && schema.aspectRatio.options.length > 0
        ? schema.aspectRatio.options
        : (fallback.aspectRatio?.options ?? [{ value: '16:9', label: '16:9' }]);
    const defaultAspectRatio = schema.aspectRatio?.defaultValue ?? aspectRatioOptions[0]?.value ?? '16:9';

    const isAspectRatioValid = (ratio: string | undefined) => {
      if (!ratio) return false;
      return aspectRatioOptions.some((opt) => opt.value === ratio);
    };

    // 时长
    const durationOptions =
      schema.duration?.options && schema.duration.options.length > 0
        ? schema.duration.options
        : (fallback.duration?.options ?? [{ value: 5, label: '5s' }]);
    const defaultDuration = schema.duration?.defaultValue ?? durationOptions[0]?.value ?? 5;

    const isDurationValid = (duration: number | undefined) => {
      if (typeof duration !== 'number') return false;
      return durationOptions.some((opt) => opt.value === duration);
    };

    // 分辨率
    const resolutionOptions = schema.resolution?.options ?? [];
    const defaultResolution = schema.resolution?.defaultValue ?? resolutionOptions[0]?.value ?? '';

    // 质量
    const qualityOptions = schema.quality?.options ?? [];
    const defaultQuality = schema.quality?.defaultValue ?? qualityOptions[0]?.value ?? '';

    // 音效
    const hasSoundSupport = Boolean(schema.sound?.supported);
    const defaultSound = Boolean(schema.sound?.defaultValue);

    // 音色 (TTS)
    const voiceOptions = schema.voice?.options ?? [];
    const defaultVoice = schema.voice?.defaultValue ?? voiceOptions[0]?.value ?? '';

    // 纯音乐 (Suno)
    const hasInstrumentalSupport = Boolean(schema.instrumental?.supported);
    const defaultInstrumental = Boolean(schema.instrumental?.defaultValue);

    return {
      schema,
      modelItem,
      aspectRatioOptions,
      defaultAspectRatio,
      isAspectRatioValid,
      durationOptions,
      defaultDuration,
      isDurationValid,
      resolutionOptions,
      defaultResolution,
      qualityOptions,
      defaultQuality,
      hasSoundSupport,
      defaultSound,
      voiceOptions,
      defaultVoice,
      hasInstrumentalSupport,
      defaultInstrumental,
    };
  }, [materialType, modelId, catalog]);
}
