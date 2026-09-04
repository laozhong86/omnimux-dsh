/**
 * Video Param Segment Controls
 *
 * 三个横向分段控制器：生成方式、分辨率、有声/无声。
 * 通用风格：横向分段，高度 32px，容器内边距 2px，单项 flex:1 均分，选中项高亮。
 * 仅消费 `wf-video-seg*` CSS 类名（具体样式由 T04 统一落地，本文件不含任何色值）。
 * 全部使用 <button> 语义，禁用态设置 disabled + aria-disabled。
 */

import { Volume2, VolumeX } from 'lucide-react';
import { type ReactElement, type ReactNode } from 'react';
import type { GenerationMode } from './types.ts';

/** 通用分段选项结构 */
interface SegmentOption<T extends string | number | boolean> {
  value: T;
  label: string;
  /** 可选前置图标（矢量 SVG 组件） */
  icon?: ReactNode;
  /** 禁用态（禁用时点击不触发 onChange） */
  disabled?: boolean;
  /** 禁用态提示文案（title） */
  title?: string;
}

/** 通用横向分段容器：wf-video-seg 包裹，单项 wf-video-seg__item，选中追加 --active */
function Segment<T extends string | number | boolean>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: Array<SegmentOption<T>>;
  value: T | undefined;
  onChange: (v: T) => void;
  ariaLabel?: string;
}): ReactElement {
  return (
    <div className="wf-video-seg" role="radiogroup" aria-label={ariaLabel}>
      {options.map((opt) => {
        const isActive = opt.value === value;
        const cls = isActive ? 'wf-video-seg__item wf-video-seg__item--active' : 'wf-video-seg__item';
        const isDisabled = opt.disabled ?? false;
        return (
          <button
            key={String(opt.value)}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            title={opt.title}
            className={cls}
            onClick={() => {
              if (!isDisabled) {
                onChange(opt.value);
              }
            }}
          >
            {opt.icon}
            <span className="wf-video-seg__label">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/** GenerationModeSegment 属性 */
export interface GenerationModeSegmentProps {
  value: GenerationMode;
  /** 模型 inputCapability.referenceImages.supportedRoles，可选 */
  supportedRoles?: string[];
  onChange: (mode: GenerationMode) => void;
}

/**
 * 生成方式分段：依据模型支持模式动态渲染
 * 铁律：
 * 1. 不支持的模式 100% 隐藏，严禁展示灰色不可用项。
 * 2. 当有效可选模式 <= 1 时，直接返回 null（不渲染本栏，紧凑界面）。
 * 3. 严格区分首尾帧：只有同时包含 first_frame 和 last_frame 时才允许渲染「首尾帧」。
 */
export function GenerationModeSegment({
  value,
  supportedRoles,
  onChange,
}: GenerationModeSegmentProps): ReactElement | null {
  const hasRoles = Array.isArray(supportedRoles) && supportedRoles.length > 0;
  
  // 校验模型真实支持性
  const supportsReference = hasRoles ? supportedRoles.includes('reference') : true;
  const supportsFirstLast = hasRoles
    ? supportedRoles.includes('first_frame') && supportedRoles.includes('last_frame')
    : false;

  const options: Array<SegmentOption<GenerationMode>> = [];

  if (supportsReference) {
    options.push({
      value: 'reference',
      label: '全能参考',
    });
  }

  if (supportsFirstLast) {
    options.push({
      value: 'first_last_frame',
      label: '首尾帧',
    });
  }

  // 铁律：若可选模式不足 2 个（例如仅全能参考、仅数字人、或单模式），整栏隐藏不占地
  if (options.length <= 1) {
    return null;
  }

  return <Segment options={options} value={value} onChange={onChange} ariaLabel="生成方式" />;
}

/** ResolutionSegment 属性 */
export interface ResolutionSegmentProps {
  value: string | undefined;
  options: Array<{ value: string; label: string }>;
  onChange: (v: string) => void;
}

/**
 * 分辨率分段：options 渲染为横向分段
 * - options.length <= 1 时单项仍渲染为只读高亮（disabled + title 提示）
 */
export function ResolutionSegment({
  value,
  options,
  onChange,
}: ResolutionSegmentProps): ReactElement {
  const singleReadOnly = options.length <= 1;
  const segOptions: Array<SegmentOption<string>> = options.map((opt) => ({
    value: opt.value,
    label: opt.label,
    disabled: singleReadOnly,
    title: singleReadOnly ? '当前模型仅支持此分辨率' : undefined,
  }));

  return <Segment options={segOptions} value={value} onChange={onChange} ariaLabel="分辨率" />;
}

/** SoundSwitchSegment 属性 */
export interface SoundSwitchSegmentProps {
  value: boolean;
  onChange: (v: boolean) => void;
}

/** 有声/无声分段：有声带 Volume2，无声带 VolumeX */
export function SoundSwitchSegment({ value, onChange }: SoundSwitchSegmentProps): ReactElement {
  const options: Array<SegmentOption<boolean>> = [
    { value: true, label: '有声', icon: <Volume2 size={13} /> },
    { value: false, label: '无声', icon: <VolumeX size={13} /> },
  ];

  return <Segment options={options} value={value} onChange={onChange} ariaLabel="音效" />;
}
