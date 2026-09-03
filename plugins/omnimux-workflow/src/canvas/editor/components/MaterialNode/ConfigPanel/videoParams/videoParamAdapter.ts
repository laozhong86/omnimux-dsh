/**
 * Video Parameter Adapter & Fallback Engine
 *
 * 负责结合节点的 params、模型 schema 以及 modelItem (包含 inputCapability)，
 * 清洗、验证并解析出当前合法且用于 UI 渲染的 EffectiveVideoParams；
 * 并提供模型切换时的纯函数降级与字段自动清洗机制。
 */

import type { CapabilityModelItem, ModelParameterSchema } from '../../../../../../shared/api.ts';
import type { EffectiveVideoParams, GenerationMode, VideoNodeParams } from './types.ts';

/**
 * 默认画幅比例
 */
export const DEFAULT_ASPECT_RATIO = '16:9';

/**
 * 默认时长（秒）
 */
export const DEFAULT_DURATION = 5;

/**
 * 默认生成模式
 */
export const DEFAULT_GENERATION_MODE: GenerationMode = 'reference';

/**
 * 解析出当前生效、合法且可直接用于 UI 渲染的完整视频参数
 *
 * @param params 节点上持久化的参数对象 (可能缺失或包含脏数据)
 * @param schema 当前选定模型的参数配置规范 (包含宽高比、分辨率、时长、音效等可选范围及默认值)
 * @param modelItem 当前选定模型的详情条目 (包含 inputCapability referenceImages 支持的角色)
 * @returns 清洗校验后的有效参数对象 EffectiveVideoParams
 */
export function resolveEffectiveVideoParams(
  params: VideoNodeParams | undefined,
  schema: ModelParameterSchema | undefined,
  modelItem: CapabilityModelItem | undefined,
): EffectiveVideoParams {
  // 1. 模型 ID
  const model = modelItem?.id ?? (typeof params?.model === 'string' ? params.model : '');

  // 2. 生成方式 (generationMode)
  // 读取 roles = modelItem?.inputCapability?.referenceImages?.supportedRoles
  const roles = modelItem?.inputCapability?.referenceImages?.supportedRoles;
  let generationMode: GenerationMode = DEFAULT_GENERATION_MODE;

  if (Array.isArray(roles) && roles.length > 0) {
    const hasReference = roles.includes('reference');
    const hasFrameRoles = roles.includes('first_frame') || roles.includes('last_frame');

    if (!hasReference && hasFrameRoles) {
      // 若 roles 存在且不包含 reference（例如可灵系列仅支持 first_frame, last_frame），强制回退或默认采用 'first_last_frame'
      generationMode = 'first_last_frame';
    } else if (hasReference && !hasFrameRoles) {
      // 若 roles 存在且不包含 first_frame 与 last_frame（例如谷歌 Veo 仅支持 reference），强制回退或默认采用 'reference'
      generationMode = 'reference';
    } else {
      // 若两者都支持或无限定，优先使用 params?.generationMode，无则默认 'reference'
      if (params?.generationMode === 'first_last_frame' || params?.generationMode === 'reference') {
        generationMode = params.generationMode;
      } else {
        generationMode = DEFAULT_GENERATION_MODE;
      }
    }
  } else {
    // roles 未定义或无限定，优先使用 params?.generationMode，无则默认 'reference'
    if (params?.generationMode === 'first_last_frame' || params?.generationMode === 'reference') {
      generationMode = params.generationMode;
    } else {
      generationMode = DEFAULT_GENERATION_MODE;
    }
  }

  // 3. 画幅比例 (aspectRatio)
  let aspectRatio = DEFAULT_ASPECT_RATIO;
  const ratioOptions = schema?.aspectRatio?.options;
  if (Array.isArray(ratioOptions) && ratioOptions.length > 0) {
    if (params?.aspectRatio && ratioOptions.some((opt) => opt.value === params.aspectRatio)) {
      aspectRatio = params.aspectRatio;
    } else {
      aspectRatio = schema?.aspectRatio?.defaultValue ?? ratioOptions[0]?.value ?? DEFAULT_ASPECT_RATIO;
    }
  } else {
    if (typeof params?.aspectRatio === 'string' && params.aspectRatio.trim().length > 0) {
      aspectRatio = params.aspectRatio;
    } else {
      aspectRatio = schema?.aspectRatio?.defaultValue ?? DEFAULT_ASPECT_RATIO;
    }
  }

  // 4. 清晰度 (resolution)
  let resolution: string | undefined = undefined;
  const resOptions = schema?.resolution?.options;
  if (Array.isArray(resOptions) && resOptions.length > 0) {
    if (params?.resolution && resOptions.some((opt) => opt.value === params.resolution)) {
      resolution = params.resolution;
    } else {
      resolution = schema?.resolution?.defaultValue ?? resOptions[0]?.value;
    }
  } else {
    resolution = undefined;
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
  } else {
    if (typeof params?.duration === 'number') {
      duration = params.duration;
    } else {
      duration = schema?.duration?.defaultValue ?? DEFAULT_DURATION;
    }
  }

  // 6. 有声音效 (sound 与 hasSoundSupport)
  const hasSoundSupport = Boolean(schema?.sound?.supported);
  let sound = false;
  if (hasSoundSupport) {
    sound = typeof params?.sound === 'boolean' ? params.sound : Boolean(schema?.sound?.defaultValue);
  } else {
    sound = false;
  }

  // 组装最终对象
  const result: EffectiveVideoParams = {
    model,
    generationMode,
    aspectRatio,
    duration,
    sound,
    hasSoundSupport,
  };

  if (resolution !== undefined) {
    result.resolution = resolution;
  }

  if (typeof params?.firstFrameUrl === 'string') {
    result.firstFrameUrl = params.firstFrameUrl;
  }
  if (typeof params?.lastFrameUrl === 'string') {
    result.lastFrameUrl = params.lastFrameUrl;
  }

  return result;
}

/**
 * 纯函数：模拟模型切换时的回退与参数清洗逻辑
 *
 * 1. 继承原有参数并更新 model 字段；
 * 2. 依据目标模型的 supportedRoles 校验 generationMode；
 * 3. 依据目标模型的 schema 校验 aspectRatio 与 duration；
 * 4. 校验 resolution，若目标模型不支持或选项为空则彻底 delete；
 * 5. 校验 sound，若目标模型不支持 sound 则彻底 delete；若支持但当前非布尔值则填充默认值。
 *
 * @param oldParams 切换前节点保存的参数字典
 * @param targetModelItem 目标模型的详情条目 (包含 schema 及 inputCapability)
 * @returns 经过清洗与降级后的全新参数字典
 */
export function validateAndFallbackVideoParams(
  oldParams: Record<string, unknown>,
  targetModelItem: CapabilityModelItem | undefined,
): Record<string, unknown> {
  const nextParams: Record<string, unknown> = {
    ...oldParams,
    model: targetModelItem?.id ?? oldParams['model'],
  };

  const schema = targetModelItem?.parameters;
  const roles = targetModelItem?.inputCapability?.referenceImages?.supportedRoles;

  // 1. 校验并修正 generationMode
  if (Array.isArray(roles) && roles.length > 0) {
    const hasReference = roles.includes('reference');
    const hasFrameRoles = roles.includes('first_frame') || roles.includes('last_frame');

    if (!hasReference && hasFrameRoles) {
      nextParams['generationMode'] = 'first_last_frame';
    } else if (hasReference && !hasFrameRoles) {
      nextParams['generationMode'] = 'reference';
    } else {
      const currentMode = nextParams['generationMode'];
      if (currentMode !== 'first_last_frame' && currentMode !== 'reference') {
        nextParams['generationMode'] = DEFAULT_GENERATION_MODE;
      }
    }
  } else {
    const currentMode = nextParams['generationMode'];
    if (currentMode !== 'first_last_frame' && currentMode !== 'reference') {
      nextParams['generationMode'] = DEFAULT_GENERATION_MODE;
    }
  }

  // 2. 校验并修正 aspectRatio
  const ratioOptions = schema?.aspectRatio?.options;
  if (Array.isArray(ratioOptions) && ratioOptions.length > 0) {
    const isSupported = ratioOptions.some((opt) => opt.value === nextParams['aspectRatio']);
    if (!isSupported) {
      nextParams['aspectRatio'] = schema?.aspectRatio?.defaultValue ?? ratioOptions[0]?.value ?? DEFAULT_ASPECT_RATIO;
    }
  } else {
    if (!nextParams['aspectRatio']) {
      nextParams['aspectRatio'] = schema?.aspectRatio?.defaultValue ?? DEFAULT_ASPECT_RATIO;
    }
  }

  // 3. 校验并修正 duration
  const durOptions = schema?.duration?.options;
  if (Array.isArray(durOptions) && durOptions.length > 0) {
    const isSupported = durOptions.some((opt) => opt.value === nextParams['duration']);
    if (!isSupported) {
      nextParams['duration'] = schema?.duration?.defaultValue ?? durOptions[0]?.value ?? DEFAULT_DURATION;
    }
  } else {
    if (typeof nextParams['duration'] !== 'number') {
      nextParams['duration'] = schema?.duration?.defaultValue ?? DEFAULT_DURATION;
    }
  }

  // 4. 校验并修正 resolution
  const resOptions = schema?.resolution?.options;
  if (Array.isArray(resOptions) && resOptions.length > 0) {
    const isSupported = resOptions.some((opt) => opt.value === nextParams['resolution']);
    if (!isSupported) {
      nextParams['resolution'] = schema?.resolution?.defaultValue ?? resOptions[0]?.value;
    }
  } else {
    // 目标模型无 resolution 选项，直接删除 resolution 字段
    delete nextParams['resolution'];
  }

  // 5. 校验并修正 sound
  const hasSoundSupport = Boolean(schema?.sound?.supported);
  if (hasSoundSupport) {
    if (typeof nextParams['sound'] !== 'boolean') {
      nextParams['sound'] = Boolean(schema?.sound?.defaultValue);
    }
  } else {
    // 目标模型不支持音效，彻底清除 sound 字段
    delete nextParams['sound'];
  }

  return nextParams;
}
