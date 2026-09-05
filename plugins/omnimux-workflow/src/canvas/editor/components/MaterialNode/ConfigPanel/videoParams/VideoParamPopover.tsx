/**
 * Video Param Popover — Portal 浮层 (Issue 467 / W2).
 *
 * Mode section renders only when effectiveOps ≥ 2 (params.showModeUi).
 * Operation ids come from Catalog DTO options (open strings). Writes
 *
 * Styles: only `wf-video-param-popover*` classes / `--dsw-*` tokens via CSS.
 * No raw hex, no `banned token island`, no JS theme branch. light/dark follows host cascade.
 */

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactElement, RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { CapabilityModelItem, ModelParameterSchema } from '../../../../../../shared/api.ts';
import { AspectCardGrid } from './AspectCardGrid.tsx';
import { DurationGrid } from './DurationGrid.tsx';
import { OperationSegment, ResolutionSegment, SoundSwitchSegment } from './SegmentControls.tsx';
import type { EffectiveVideoParams, PopoverPosition, VideoNodeParams } from './types.ts';
import { calculatePopoverPosition } from './viewportPositioner.ts';

/** VideoParamPopover 属性 */
export interface VideoParamPopoverProps {
  /** 触发条按钮的 ref（用于定位与外部点击判定） */
  triggerRef: RefObject<HTMLElement>;
  /** 当前生效的视频参数（已清洗校验） */
  params: EffectiveVideoParams;
  /** 当前选定模型的参数 Schema */
  schema: ModelParameterSchema;
  /** 当前选定模型详情（可选） */
  modelItem?: CapabilityModelItem;
  /** 浮层是否打开 */
  isOpen: boolean;
  /** 关闭浮层回调（外部点击 / Escape / 卸载触发） */
  onClose: () => void;
  /** 参数变更回调：key 与 value 强类型关联 */
  onParamChange: <K extends keyof VideoNodeParams>(key: K, value: VideoNodeParams[K]) => void;
}

/**
 * 基于 React Portal 的上方自适应浮层外壳组件。
 */
export function VideoParamPopover({
  triggerRef,
  params,
  schema,
  modelItem: _modelItem,
  isOpen,
  onClose,
  onParamChange,
}: VideoParamPopoverProps): ReactElement | null {
  const panelRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<PopoverPosition | null>(null);

  const recompute = (): void => {
    if (!triggerRef.current) {
      return;
    }
    const rect = triggerRef.current.getBoundingClientRect();
    const viewport = { width: window.innerWidth, height: window.innerHeight };
    setPosition(calculatePopoverPosition(rect, viewport));
  };

  useEffect(() => {
    if (!isOpen) {
      setPosition(null);
      return;
    }
    recompute();

    const handleResize = (): void => recompute();
    const handleScroll = (): void => recompute();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { capture: true, passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, { capture: true } as EventListenerOptions);
    };
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handlePointerDown = (e: MouseEvent): void => {
      const target = e.target as Node | null;
      if (!target) {
        return;
      }
      if (
        panelRef.current?.contains(target)
        || triggerRef.current?.contains(target)
      ) {
        return;
      }
      onClose();
    };
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('mousedown', handlePointerDown, true);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  const resolutionOptions = schema.resolution?.options ?? [];
  const durationOptions = schema.duration?.options ?? [];
  const showModeUi = Boolean(params.showModeUi) && (params.effectiveOperations?.length ?? 0) >= 2;

  const panelClass = position?.placement === 'bottom'
    ? 'wf-video-param-popover wf-video-param-popover--bottom'
    : 'wf-video-param-popover wf-video-param-popover--top';

  const style: CSSProperties = {
    position: 'fixed',
    left: position?.left,
    maxHeight: position?.maxHeight,
    width: position?.width,
    ...(position?.placement === 'bottom'
      ? { top: position?.top }
      : { bottom: position?.bottom }),
  };

  return createPortal(
    <div
      ref={panelRef}
      className={`${panelClass} nowheel nodrag`}
      style={style}
      role="dialog"
      aria-label="视频参数配置"
      data-show-mode={showModeUi ? 'true' : 'false'}
      onWheel={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="wf-video-param-popover__scrollable">
        {/* effectiveOps ≥ 2 only — 0/1 不渲染 mode DOM */}
        {showModeUi ? (
          <section
            className="wf-video-param-popover__section"
            data-testid="wf-operation-mode-section"
          >
            <h4 className="wf-video-param-popover__section-title">生成方式</h4>
            <OperationSegment
              value={params.operation}
              operations={params.effectiveOperations}
              onChange={(operationId) => onParamChange('operation', operationId)}
            />
          </section>
        ) : null}

        <section className="wf-video-param-popover__section">
          <h4 className="wf-video-param-popover__section-title">比例</h4>
          <AspectCardGrid
            value={params.aspectRatio}
            options={schema.aspectRatio?.options ?? []}
            onChange={(v) => onParamChange('aspectRatio', v)}
          />
        </section>

        {resolutionOptions.length > 0 && (
          <section className="wf-video-param-popover__section">
            <h4 className="wf-video-param-popover__section-title">清晰度</h4>
            <ResolutionSegment
              value={params.resolution}
              options={resolutionOptions}
              onChange={(v) => onParamChange('resolution', v)}
            />
          </section>
        )}

        {durationOptions.length > 0 && (
          <section className="wf-video-param-popover__section">
            <h4 className="wf-video-param-popover__section-title">时长</h4>
            <DurationGrid
              value={typeof params.duration === 'number' ? params.duration : Number(params.duration) || 5}
              options={durationOptions}
              onChange={(v) => onParamChange('duration', v)}
            />
          </section>
        )}

        {params.hasSoundSupport && (
          <section className="wf-video-param-popover__section">
            <h4 className="wf-video-param-popover__section-title">有声视频</h4>
            <SoundSwitchSegment
              value={params.sound}
              onChange={(v) => onParamChange('sound', v)}
            />
          </section>
        )}
      </div>
    </div>,
    document.body,
  );
}

export default VideoParamPopover;
