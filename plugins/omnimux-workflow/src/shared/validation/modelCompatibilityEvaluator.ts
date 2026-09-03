/**
 * Model Compatibility Evaluator — Phase 2 Multimodal Model Capability Engine.
 *
 * Assesses model compatibility with upstream inputs (image, video, audio)
 * against the model's declared InputCapability (from capability catalog or known specs).
 */

import type { MaterialType } from '../canvasTypes.ts';

export type ModelCompatibilityLevel = 'available' | 'degraded' | 'disabled' | 'hidden';

export interface ModelInputCapability {
  modalities: MaterialType[];
  referenceImages?: { min: number; max: number; allowedMimeTypes?: string[]; supportedRoles?: string[] };
  referenceVideos?: { min: number; max: number; allowedMimeTypes?: string[]; supportedRoles?: string[] };
  referenceAudios?: { min: number; max: number; allowedMimeTypes?: string[]; supportedRoles?: string[] };
}

export interface ModelCompatibilityResult {
  level: ModelCompatibilityLevel;
  reasons: string[];
  adaptationAdvice?: string;
}

/**
 * Built-in fallback capabilities for known models when dynamic catalog is unavailable.
 */
export const BUILTIN_MODEL_CAPABILITIES: Record<string, ModelInputCapability> = {
  // Image generation models
  'gpt-image-2': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'gpt-image-2-hd': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'grok-imagine-2': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'grok-imagine-2-hd': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'midjourney-8.1': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 5, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'midjourney-8': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 5, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'midjourney-7': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 5, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'midjourney-niji-7': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 5, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'nanobanana-2': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'nano_banana_2': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'nanobanana-pro': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'nano_banana_pro': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'seedream-5.0-pro': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 8, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'seedream-4.5': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 8, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },

  // Video generation models
  'seedance-2.0-fast': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference', 'first_frame'] },
  },
  'seedance-2.0-max': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference', 'first_frame'] },
  },
  'seedance-2.0': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference', 'first_frame'] },
  },
  'seedance-1.5-pro': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference', 'first_frame'] },
  },
  'kling-v3': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 2, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['first_frame', 'last_frame'] },
  },
  'kling-v2.6': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 2, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['first_frame', 'last_frame'] },
  },
  'kling-motion-control': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 2, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['first_frame', 'last_frame'] },
  },
  'kling-avatar': {
    modalities: ['text', 'image', 'audio'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
    referenceAudios: { min: 0, max: 1, allowedMimeTypes: ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/webm'], supportedRoles: ['audio_track'] },
  },
  'kling-o1': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 2, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['first_frame', 'last_frame'] },
  },
  'kling-o3': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 2, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['first_frame', 'last_frame'] },
  },
  'veo-3.1': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'veo-3.1-fast': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'grok-imagine-video': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'grok-imagine-video-1-5': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'omni-flash-video': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },
  'wan-3.0': {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1, allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'], supportedRoles: ['reference'] },
  },

  // Audio generation models
  'suno-v4': {
    modalities: ['text'],
  },
  'openai-tts': {
    modalities: ['text'],
  },
  'whisper-asr': {
    modalities: ['audio'],
    referenceAudios: { min: 1, max: 1, allowedMimeTypes: ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/webm'], supportedRoles: ['reference'] },
  },

  // Text models
  'claude-opus-5': { modalities: ['text'] },
  'claude-opus-4-6': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'gpt-5.6-sol': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'gpt-5.5': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'grok-4.6': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'kimi-k3': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'deepseek-v4-pro': { modalities: ['text'] },
  'deepseek-v4-flash-vision-exp': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'gemini-3.7-flash': { modalities: ['text', 'image', 'video'], referenceImages: { min: 0, max: 10 }, referenceVideos: { min: 0, max: 1 } },
  'gemini-3.1-pro-preview': { modalities: ['text', 'image'], referenceImages: { min: 0, max: 10 } },
  'glm-5.3': { modalities: ['text'] },
};

/**
 * Resolve input capability for a model ID from catalog or builtin table.
 */
export function resolveModelInputCapability(
  modelId: string,
  catalog?: {
    text?: Array<{ id: string; inputCapability?: ModelInputCapability }>;
    image?: Array<{ id: string; inputCapability?: ModelInputCapability }>;
    video?: Array<{ id: string; inputCapability?: ModelInputCapability }>;
    audio?: Array<{ id: string; inputCapability?: ModelInputCapability }>;
  } | null,
): ModelInputCapability | undefined {
  if (!modelId) return undefined;
  const trimmed = modelId.trim();

  // 1. Check catalog if provided
  if (catalog) {
    const all = [
      ...(catalog.text || []),
      ...(catalog.image || []),
      ...(catalog.video || []),
      ...(catalog.audio || []),
    ];
    const found = all.find((item) => item.id === trimmed);
    if (found?.inputCapability) {
      return found.inputCapability;
    }
  }

  // 2. Check builtin capabilities
  return BUILTIN_MODEL_CAPABILITIES[trimmed];
}

/**
 * Evaluate model compatibility based on input capability and upstream items.
 *
 * Rules:
 * 1. modelCap 为空 / 未知模型 -> { level: 'available', reasons: [] } (宽松回退，绝不误杀)。
 * 2. 统计 upstreams 中 image/video/audio 数量。
 * 3. 数量 > max -> level: 'disabled'，给出超限 reason 与 adaptationAdvice。
 * 4. max === 0 且存在非 text 上游 -> disabled（该模型不支持参考素材）。
 * 5. 数量在 (min, max] 且 min > 0 -> level: 'degraded'，提示超出推荐配额。
 */
export function evaluateModelCompatibility(
  modelId: string,
  modelCap: ModelInputCapability | undefined,
  upstreams: { type: MaterialType; mimeType?: string }[],
): ModelCompatibilityResult {
  // Unknown model or no capability spec -> safe fallback to available
  if (!modelCap) {
    return {
      level: 'available',
      reasons: [],
    };
  }

  const reasons: string[] = [];
  let level: ModelCompatibilityLevel = 'available';
  let adaptationAdvice: string | undefined;

  const images = upstreams.filter((u) => u.type === 'image');
  const videos = upstreams.filter((u) => u.type === 'video');
  const audios = upstreams.filter((u) => u.type === 'audio');
  const nonTextUpstreams = [...images, ...videos, ...audios];

  // 1. Check reference images
  if (images.length > 0) {
    const cap = modelCap.referenceImages;
    const isImageSupported = modelCap.modalities?.includes('image');
    if (!isImageSupported || cap?.max === 0) {
      level = 'disabled';
      reasons.push('该模型不支持参考素材');
      if (!adaptationAdvice) adaptationAdvice = '建议移除参考素材或更换支持图片输入的模型';
    } else if (cap && cap.max !== undefined && images.length > cap.max) {
      level = 'disabled';
      reasons.push(`超出模型最大参考图数量（最多 ${cap.max} 张）`);
      if (!adaptationAdvice) adaptationAdvice = `建议截取前 ${cap.max} 张或更换模型`;
    } else if (cap && cap.min !== undefined && cap.min > 0 && images.length > cap.min && images.length <= cap.max) {
      level = 'degraded';
      reasons.push(`输入已超出推荐配额（推荐 ${cap.min} 张，最多 ${cap.max} 张）`);
      if (!adaptationAdvice) adaptationAdvice = `输入超出模型推荐配额，执行时按前 ${cap.max} 张处理`;
    }

    if (cap?.allowedMimeTypes && cap.allowedMimeTypes.length > 0) {
      for (const img of images) {
        if (img.mimeType && !cap.allowedMimeTypes.includes(img.mimeType)) {
          level = 'disabled';
          reasons.push(`不支持的图片格式：${img.mimeType}`);
        }
      }
    }
  }

  // 2. Check reference videos
  if (videos.length > 0) {
    const cap = modelCap.referenceVideos;
    const isVideoSupported = modelCap.modalities?.includes('video');
    if (!isVideoSupported || cap?.max === 0) {
      level = 'disabled';
      reasons.push('该模型不支持视频参考素材');
      if (!adaptationAdvice) adaptationAdvice = '建议移除视频参考素材或更换支持视频输入的模型';
    } else if (cap && cap.max !== undefined && videos.length > cap.max) {
      level = 'disabled';
      reasons.push(`超出模型最大参考视频数量（最多 ${cap.max} 个）`);
      if (!adaptationAdvice) adaptationAdvice = `建议截取前 ${cap.max} 个或更换模型`;
    } else if (cap && cap.min !== undefined && cap.min > 0 && videos.length > cap.min && videos.length <= cap.max) {
      if (level !== 'disabled') level = 'degraded';
      reasons.push(`输入已超出推荐配额（推荐 ${cap.min} 个，最多 ${cap.max} 个）`);
      if (!adaptationAdvice) adaptationAdvice = `输入超出模型推荐配额，执行时按前 ${cap.max} 个处理`;
    }

    if (cap?.allowedMimeTypes && cap.allowedMimeTypes.length > 0) {
      for (const vid of videos) {
        if (vid.mimeType && !cap.allowedMimeTypes.includes(vid.mimeType)) {
          level = 'disabled';
          reasons.push(`不支持的视频格式：${vid.mimeType}`);
        }
      }
    }
  }

  // 3. Check reference audios
  if (audios.length > 0) {
    const cap = modelCap.referenceAudios;
    const isAudioSupported = modelCap.modalities?.includes('audio');
    if (!isAudioSupported || cap?.max === 0) {
      level = 'disabled';
      reasons.push('该模型不支持音频参考素材');
      if (!adaptationAdvice) adaptationAdvice = '建议移除音频参考素材或更换支持音频输入的模型';
    } else if (cap && cap.max !== undefined && audios.length > cap.max) {
      level = 'disabled';
      reasons.push(`超出模型最大参考音频数量（最多 ${cap.max} 个）`);
      if (!adaptationAdvice) adaptationAdvice = `建议截取前 ${cap.max} 个或更换模型`;
    } else if (cap && cap.min !== undefined && cap.min > 0 && audios.length > cap.min && audios.length <= cap.max) {
      if (level !== 'disabled') level = 'degraded';
      reasons.push(`输入已超出推荐配额（推荐 ${cap.min} 个，最多 ${cap.max} 个）`);
      if (!adaptationAdvice) adaptationAdvice = `输入超出模型推荐配额，执行时按前 ${cap.max} 个处理`;
    }

    if (cap?.allowedMimeTypes && cap.allowedMimeTypes.length > 0) {
      for (const aud of audios) {
        if (aud.mimeType && !cap.allowedMimeTypes.includes(aud.mimeType)) {
          level = 'disabled';
          reasons.push(`不支持的音频格式：${aud.mimeType}`);
        }
      }
    }
  }

  // 4. Modality check if model has 0 support for non-text reference inputs
  if (nonTextUpstreams.length > 0) {
    const hasAnyNonTextModality = modelCap.modalities?.some((m) => m !== 'text');
    if (!hasAnyNonTextModality && reasons.length === 0) {
      level = 'disabled';
      reasons.push('该模型不支持参考素材');
      if (!adaptationAdvice) adaptationAdvice = '建议移除参考素材或更换支持多模态输入的模型';
    }
  }

  if (level === 'available') {
    return {
      level: 'available',
      reasons: [],
    };
  }

  return {
    level,
    reasons,
    ...(adaptationAdvice ? { adaptationAdvice } : {}),
  };
}
