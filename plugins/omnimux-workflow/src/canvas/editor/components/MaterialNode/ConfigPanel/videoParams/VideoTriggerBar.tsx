/**
 * Video TriggerBar — 单行紧凑摘要胶囊触发器
 *
 * 在 MaterialNode 配置面板中渲染视频参数的紧凑摘要胶囊（TriggerBar）。
 * 消费 formatVideoSummary 产出的结构化文案，节点间以中点分隔符连接，
 * 支持打开态（--open）、禁用态（disabled + aria-disabled）与摘要超长省略。
 * 所有样式仅消费 `wf-video-trigger-bar*` CSS 类名（由 components.css 统一落地），
 * 本文件不含任何色值或裸 hex/rgba 字面量。
 */

import { ChevronDown, Clock, Volume2 } from 'lucide-react';
import type { ReactElement } from 'react';
import { AspectRatioIcon } from './aspectRatioGeometry.ts';
import { formatVideoSummary } from './summaryFormatter.ts';
import type { EffectiveVideoParams } from './types.ts';

/** VideoTriggerBar 属性 */
export interface VideoTriggerBarProps {
  /** 当前生效的视频参数（已清洗校验） */
  params: EffectiveVideoParams;
  /** 浮层是否打开（用于 open 态样式与 aria-expanded） */
  isOpen: boolean;
  /** 禁用态：置 disabled + aria-disabled，样式 opacity 0.35 */
  disabled?: boolean;
  /** 点击触发器切换浮层开合的回调 */
  onToggle: () => void;
}

/**
 * 单行紧凑摘要胶囊触发器。
 *
 * @param props VideoTriggerBarProps
 * @returns ReactElement
 */
export function VideoTriggerBar({
  params,
  isOpen,
  disabled = false,
  onToggle,
}: VideoTriggerBarProps): ReactElement {
  const summary = formatVideoSummary(params);

  const className = [
    'wf-video-trigger-bar',
    isOpen ? 'wf-video-trigger-bar--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      aria-disabled={disabled}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      title={summary.fullText}
      onClick={onToggle}
    >
      <span className="wf-video-trigger-bar__mode">{summary.modeText}</span>
      <span className="wf-video-trigger-bar__dot">·</span>
      <span className="wf-video-trigger-bar__ratio">
        <AspectRatioIcon ratio={params.aspectRatio} size={12} />
        <span className="wf-video-trigger-bar__ratio-text">{summary.ratioText}</span>
      </span>
      {summary.resolutionText ? (
        <>
          <span className="wf-video-trigger-bar__dot">·</span>
          <span className="wf-video-trigger-bar__resolution">{summary.resolutionText}</span>
        </>
      ) : null}
      <span className="wf-video-trigger-bar__dot">·</span>
      <span className="wf-video-trigger-bar__duration">
        <Clock size={11} />
        <span className="wf-video-trigger-bar__duration-text">{summary.durationText}</span>
      </span>
      {summary.soundText ? (
        <>
          <span className="wf-video-trigger-bar__dot">·</span>
          <span className="wf-video-trigger-bar__sound">
            <Volume2 size={11} />
            <span className="wf-video-trigger-bar__sound-text">{summary.soundText}</span>
          </span>
        </>
      ) : null}
      <ChevronDown size={11} className="wf-video-trigger-bar__chevron" />
    </button>
  );
}

export default VideoTriggerBar;
