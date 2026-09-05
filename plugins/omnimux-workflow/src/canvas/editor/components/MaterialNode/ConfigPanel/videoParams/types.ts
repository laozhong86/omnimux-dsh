/**
 * VideoParams Types & Contracts (Issue 467 / W2).
 *
 * Generation mode is an open-string Catalog operation id (`params.operation`).
 * The historical `GenerationMode = 'reference' | 'first_last_frame'` union is
 * retired from the write path; legacy values are read-time migrated only.
 */

import type { ReactNode, Ref } from 'react';
import type { OperationUiOption } from '../../../../../../shared/validation/operationUi.ts';

/**
 * @deprecated Read-time legacy wire only. New writes use `params.operation`.
 * Kept so old fixtures / snapshots typecheck during migration.
 */
export type GenerationMode = 'reference' | 'first_last_frame' | string;

/**
 * 存放于 nodeData.params 中的视频参数原始/持久化结构
 */
export interface VideoNodeParams {
  model?: string;
  /** Canonical operation id (Catalog DTO). Preferred over generationMode. */
  operation?: string;
  /**
   * @deprecated Legacy wire. Read-time mapped via LEGACY_OPERATION_MAP; stripped
   * on the next write.
   */
  generationMode?: GenerationMode;
  aspectRatio?: string;
  resolution?: string;
  duration?: number | string;
  sound?: boolean;
  firstFrameUrl?: string;
  lastFrameUrl?: string;
  [key: string]: unknown;
}

/**
 * 经清洗、校验后，当前实际生效的完整视频参数字段
 */
export interface EffectiveVideoParams {
  model: string;
  /** Canonical operation id (may be '' when zero effective ops). */
  operation: string;
  /** Resolved label for the current operation ('' when mode UI hidden). */
  operationLabel: string;
  /** Effective operations (≥2 → mode selector visible). */
  effectiveOperations: OperationUiOption[];
  /** True when the mode segment / TriggerBar mode text must render. */
  showModeUi: boolean;
  aspectRatio: string;
  resolution?: string;
  duration: number | string;
  sound: boolean;
  hasSoundSupport: boolean;
  firstFrameUrl?: string;
  lastFrameUrl?: string;
  /**
   * @deprecated Mirror of `operation` after legacy mapping. Present so older
   * summary/tests that still read generationMode keep compiling during the
   * cutover; new code must use `operation`.
   */
  generationMode?: string;
}

/**
 * Popover 浮层弹出方位：
 * - top: 优先向上贴合弹出（自适应限高 200px ~ 480px）
 * - bottom: 顶部空间极端狭窄时向下翻转
 */
export type PopoverPlacement = 'top' | 'bottom';

/**
 * Popover 浮层绝对定位计算结果
 */
export interface PopoverPosition {
  placement: PopoverPlacement;
  top?: number;
  bottom?: number;
  left: number;
  maxHeight: number;
  width: number;
}

/**
 * 通用矩形边界对象定义（兼容 DOMRect）
 */
export interface RectLike {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

/**
 * 视口尺寸定义
 */
export interface ViewportSize {
  width: number;
  height: number;
}

/**
 * 画幅比例矢量几何信息定义
 */
export interface AspectRatioGeometry {
  ratio: string;
  label: string;
  width: number;
  height: number;
  rectWidth: number;
  rectHeight: number;
  x: number;
  y: number;
  rx: number;
  ry: number;
  strokeWidth: number;
  strokeDasharray?: string;
  isDashed?: boolean;
  viewBox: string;
}

/**
 * 视频参数触发条（TriggerBar）组件属性
 */
export interface VideoTriggerBarProps {
  params: EffectiveVideoParams;
  isOpen: boolean;
  onToggle: () => void;
  disabled?: boolean;
  triggerRef?: Ref<HTMLElement>;
  className?: string;
}

/**
 * 视频参数设置弹层（VideoParamPopover）组件属性
 */
export interface VideoParamPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRect: RectLike | null;
  params: EffectiveVideoParams;
  onUpdateParams: (updates: Partial<VideoNodeParams>) => void;
  catalog?: unknown;
  schema?: unknown;
  modelItem?: unknown;
  className?: string;
  children?: ReactNode;
}

export type { VideoSummaryFormatResult } from './summaryFormatter.ts';
