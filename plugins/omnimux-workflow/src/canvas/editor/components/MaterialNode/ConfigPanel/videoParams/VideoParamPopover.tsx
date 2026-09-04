/**
 * Video Param Popover — 基于 React Portal 的上方自适应浮层外壳
 *
 * 打开时通过 createPortal 挂载到 document.body，依据触发器矩形与视口调用
 * calculatePopoverPosition 计算固定定位（placement/top/bottom/left/maxHeight/width），
 * 监听 resize 与捕获阶段 scroll（passive）动态重算；全局捕获阶段 mousedown 与
 * Escape 用于关闭；卸载/关闭时注销全部监听器。根容器含 `nowheel nodrag` 事件隔离。
 * 参考同仓库 CustomSelect.tsx 的 Portal / 监听 / 关闭实现风格保持一致。
 * 所有样式仅消费 `wf-video-param-popover*` CSS 类名，不含任何色值。
 */

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactElement, RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { CapabilityModelItem, ModelParameterSchema } from '../../../../../../shared/api.ts';
import { AspectCardGrid } from './AspectCardGrid.tsx';
import { DurationGrid } from './DurationGrid.tsx';
import { GenerationModeSegment, ResolutionSegment, SoundSwitchSegment } from './SegmentControls.tsx';
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
  /** 当前选定模型详情（可选，含 inputCapability） */
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
 *
 * @param props VideoParamPopoverProps
 * @returns ReactElement | null（未打开或非浏览器环境时不渲染）
 */
export function VideoParamPopover({
  triggerRef,
  params,
  schema,
  modelItem,
  isOpen,
  onClose,
  onParamChange,
}: VideoParamPopoverProps): ReactElement | null {
  const panelRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<PopoverPosition | null>(null);

  // 打开时读取触发器矩形与视口尺寸，计算固定定位
  const recompute = (): void => {
    if (!triggerRef.current) {
      return;
    }
    const rect = triggerRef.current.getBoundingClientRect();
    const viewport = { width: window.innerWidth, height: window.innerHeight };
    setPosition(calculatePopoverPosition(rect, viewport));
  };

  // 定位监听：打开时注册 resize 与捕获阶段 scroll（passive），关闭/卸载时注销
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

  // 关闭监听：全局捕获阶段 mousedown（目标不在面板与触发器内则关闭）+ Escape
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
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
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

  // 关闭态或非浏览器环境不渲染
  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  const resolutionOptions = schema.resolution?.options ?? [];
  const durationOptions = schema.duration?.options ?? [];

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
      onWheel={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="wf-video-param-popover__scrollable">
        {/* 当且仅当支持模式数量 >= 2 时才渲染生成方式标题与分段，模式单一或无需切换时彻底不占地 */}
        {(() => {
          const roles = modelItem?.inputCapability?.referenceImages?.supportedRoles;
          const hasRoles = Array.isArray(roles) && roles.length > 0;
          const supportsRef = hasRoles ? roles.includes('reference') : true;
          const supportsFirstLast = hasRoles ? (roles.includes('first_frame') && roles.includes('last_frame')) : false;
          const modeCount = (supportsRef ? 1 : 0) + (supportsFirstLast ? 1 : 0);
          if (modeCount <= 1) return null;

          return (
            <section className="wf-video-param-popover__section">
              <h4 className="wf-video-param-popover__section-title">生成方式</h4>
              <GenerationModeSegment
                value={params.generationMode}
                supportedRoles={modelItem?.inputCapability?.referenceImages?.supportedRoles}
                onChange={(v) => onParamChange('generationMode', v)}
              />
            </section>
          );
        })()}

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
