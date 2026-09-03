/**
 * Video Summary Capsule Formatter Engine
 *
 * 负责将生效的 EffectiveVideoParams 格式化为用于触发条胶囊展示的结构化文案对象，
 * 并生成以中点分隔的紧凑型完整摘要文本。
 */

import type { EffectiveVideoParams } from './types.ts';

/**
 * 视频参数摘要结构化格式化结果
 */
export interface VideoSummaryFormatResult {
  /** 生成模式文案，如 '全能参考' 或 '首尾帧' */
  modeText: string;
  /** 画幅比例文案，如 '16:9'、'9:16' */
  ratioText: string;
  /** 清晰度文案，如 '2K'、'1080P'，若模型无分辨率选项则为 null */
  resolutionText: string | null;
  /** 时长文案，如 '8s'、'5s' */
  durationText: string;
  /** 音效状态文案，若支持且开启则为 '有声'，否则为 null */
  soundText: string | null;
  /** 由中点分隔的紧凑完整文本，如 '全能参考 · 16:9 · 2K · 8s · 有声' */
  fullText: string;
}

/**
 * 格式化分辨率标签（如将 1080p 转为 1080P，4k 转为 4K）
 */
function normalizeResolution(resolution: string | undefined): string | null {
  if (!resolution) {
    return null;
  }
  const trimmed = resolution.trim();
  if (!trimmed) {
    return null;
  }
  // 若包含字母（如 720p, 1080p, 2k, 4k），将其标准化为大写格式
  return trimmed.toUpperCase();
}

/**
 * 格式化时长标签（如 5 -> '5s'，'8s' -> '8s'）
 */
function normalizeDuration(duration: number | string | undefined): string {
  if (duration === undefined || duration === null) {
    return '5s';
  }
  const str = String(duration).trim();
  if (!str) {
    return '5s';
  }
  if (str.endsWith('s') || str.endsWith('S')) {
    return `${str.slice(0, -1)}s`;
  }
  return `${str}s`;
}

/**
 * 将生效的 EffectiveVideoParams 转换为胶囊展示用的结构化摘要及拼接文本
 *
 * @param params 清洗校验后的有效参数对象
 * @returns 包含结构化字段与完整摘要文本的 VideoSummaryFormatResult 对象
 */
export function formatVideoSummary(params: EffectiveVideoParams): VideoSummaryFormatResult {
  // 1. 生成模式文案
  const modeText = params.generationMode === 'first_last_frame' ? '首尾帧' : '全能参考';

  // 2. 画幅比例文案
  const ratioText = (params.aspectRatio && params.aspectRatio.trim()) || '16:9';

  // 3. 清晰度文案
  const resolutionText = normalizeResolution(params.resolution);

  // 4. 时长文案
  const durationText = normalizeDuration(params.duration);

  // 5. 音效状态文案
  const soundText = params.hasSoundSupport && params.sound ? '有声' : null;

  // 6. 紧凑完整文本拼接 (以中点 ' · ' 分隔)
  const segments: string[] = [];

  if (modeText) {
    segments.push(modeText);
  }
  if (ratioText) {
    segments.push(ratioText);
  }
  if (resolutionText) {
    segments.push(resolutionText);
  }
  if (durationText) {
    segments.push(durationText);
  }
  if (soundText) {
    segments.push(soundText);
  }

  const fullText = segments.join(' · ');

  return {
    modeText,
    ratioText,
    resolutionText,
    durationText,
    soundText,
    fullText,
  };
}
