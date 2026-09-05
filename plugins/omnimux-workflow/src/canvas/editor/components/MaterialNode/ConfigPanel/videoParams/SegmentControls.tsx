/**
 * Video Param Segment Controls (Issue 467 / W2).
 *
 * GenerationModeSegment is now an OperationSegment driven by Catalog DTO
 * effective operations (open string ids + labels). Unsupported ops are not
 * rendered (Hide, Don't Grey). effectiveOps ≤ 1 → return null (no DOM).
 */

import { Volume2, VolumeX } from 'lucide-react';
import { type ReactElement, type ReactNode } from 'react';
import type { OperationUiOption } from '../../../../../../shared/validation/operationUi.ts';

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
            data-operation-id={typeof opt.value === 'string' ? opt.value : undefined}
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

/** OperationSegment / GenerationModeSegment 属性 */
export interface OperationSegmentProps {
  /** Currently selected canonical operation id. */
  value: string;
  /**
   * Effective operations only (already filtered by the kernel). Unsupported
   * ops must NOT be passed here — they must not enter the DOM.
   */
  operations: OperationUiOption[];
  onChange: (operationId: string) => void;
}

/**
 * Operation mode segment (Catalog-driven).
 *
 * 铁律：
 * 1. 只渲染传入的 effective operations；不支持项不在 DOM。
 * 2. operations.length <= 1 → return null（0/1 无 mode UI）。
 * 3. 未知未来合法 id 以 string 消费，不穷举 17-union。
 */
export function OperationSegment({
  value,
  operations,
  onChange,
}: OperationSegmentProps): ReactElement | null {
  const effective = (operations ?? []).filter((op) => op && typeof op.id === 'string' && op.id);
  if (effective.length <= 1) {
    return null;
  }

  const options: Array<SegmentOption<string>> = effective.map((op) => ({
    value: op.id,
    label: op.label || op.id,
  }));

  return (
    <Segment
      options={options}
      value={value}
      onChange={onChange}
      ariaLabel="生成方式"
    />
  );
}

/**
 * @deprecated Alias kept so transitional imports compile. Prefer OperationSegment.
 * The old supportedRoles / reference|first_last_frame dual-button path is gone.
 */
export interface GenerationModeSegmentProps {
  value: string;
  /** @deprecated Ignored — operations prop is the sole source. */
  supportedRoles?: string[];
  /** Effective operations (required for W2). */
  operations?: OperationUiOption[];
  onChange: (mode: string) => void;
}

export function GenerationModeSegment({
  value,
  operations,
  onChange,
}: GenerationModeSegmentProps): ReactElement | null {
  return (
    <OperationSegment
      value={value}
      operations={operations ?? []}
      onChange={onChange}
    />
  );
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
