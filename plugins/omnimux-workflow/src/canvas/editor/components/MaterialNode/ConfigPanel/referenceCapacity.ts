/**
 * Reference Capacity Calculator — 多模态参考素材容量与降级判定逻辑。
 */

import type { CapabilityCatalog } from '../../../../../shared/api';
import {
  type ModelInputCapability,
  resolveModelInputCapability,
} from '../../../../../shared/validation/modelCompatibilityEvaluator.ts';

export interface ReferenceCapacityCalculation {
  imageCount: number;
  max: number | undefined;
  isOver: boolean;
  capacityLabel: string;
  warningText: string | undefined;
}

export function calculateReferenceCapacity(params: {
  upstreams: Array<{ materialType?: string }>;
  max?: number;
  modelCap?: ModelInputCapability;
  modelId?: string;
  catalog?: CapabilityCatalog | null;
  warningTemplate?: string;
}): ReferenceCapacityCalculation {
  const { upstreams, max, modelCap, modelId, catalog, warningTemplate } = params;
  const imageCount = upstreams.filter(
    (u) => u.materialType === 'image' || !u.materialType,
  ).length;

  let resolvedMax: number | undefined = max;
  if (resolvedMax === undefined) {
    const cap = modelCap ?? (modelId ? resolveModelInputCapability(modelId, catalog) : undefined);
    resolvedMax = cap?.referenceImages?.max;
  }

  const isOver = resolvedMax !== undefined && imageCount > resolvedMax;
  const maxLabel = resolvedMax !== undefined ? String(resolvedMax) : '--';
  const capacityLabel = `参考图 ${imageCount}/${maxLabel}`;
  const warningText = isOver
    ? (warningTemplate || '输入超出模型推荐配额，执行时按前 {max} 张处理').replace(
        '{max}',
        String(resolvedMax ?? ''),
      )
    : undefined;

  return {
    imageCount,
    max: resolvedMax,
    isOver,
    capacityLabel,
    warningText,
  };
}
