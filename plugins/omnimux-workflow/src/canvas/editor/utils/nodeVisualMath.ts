/**
 * 节点视觉纯逻辑（W1）：反缩放公式 + 节点执行态 → GSC 状态映射。
 *
 * 抽成无 React 依赖的纯函数，供 node:test 直接断言（计划 §8）。
 */

import type { MaterialStatus } from '../../types/materialNode';
import type { NodeExecutionApiStatus } from '../../../shared/api';

/** GenerationStateContainer 状态机（对齐 Gxgen GenerationStatus）。 */
export type GenerationStatus = 'pending' | 'generating' | 'completed' | 'failed';

/**
 * 反缩放公式（Gxgen NodeHeader）：zoom=1 → 1，zoom=0.5 → 2。
 * xyflow useViewport 返回倍率，一律 1/zoom —— 禁止抄 Gxgen 个别组件的
 * scale(100/zoom)（那是其 useZoom 百分比坐标系，计划 §9 坑#5）。
 */
export function inverseScaleForZoom(zoom: number): number {
  return zoom > 0 ? 1 / zoom : 1;
}

/**
 * 配置面板可见性语义（W2）：选中 且 本次选中周期未收起 且 非执行中。
 * 抽成纯函数供 node:test 断言（计划 §8 W2 测试点 panelVisible 语义）。
 */
export function isConfigPanelVisible(
  selected: boolean | undefined,
  panelDismissed: boolean,
  executionStatus: NodeExecutionApiStatus | undefined,
): boolean {
  return Boolean(selected) && !panelDismissed && executionStatus !== 'running';
}

/**
 * 节点数据 → GSC 状态映射：
 * - executionStatus（SSE 写入）优先：running→generating、error→failed、
 *   completed→completed；
 * - 回退 M2 本地 status：generating→generating、failed→failed、
 *   completed→completed；
 * - 无执行态但有媒体结果 → completed（reload 恢复快照场景）；
 * - 返回 null 表示空态：不渲染 GSC，走空素材占位。
 */
export function mapNodeToGenerationStatus(
  executionStatus: NodeExecutionApiStatus | undefined,
  localStatus: MaterialStatus | undefined,
  hasMedia: boolean,
): GenerationStatus | null {
  switch (executionStatus) {
    case 'running':
      return 'generating';
    case 'error':
      return 'failed';
    case 'completed':
      return 'completed';
    default:
      break;
  }
  switch (localStatus) {
    case 'generating':
      return 'generating';
    case 'failed':
      return 'failed';
    case 'completed':
      return 'completed';
    default:
      break;
  }
  return hasMedia ? 'completed' : null;
}
