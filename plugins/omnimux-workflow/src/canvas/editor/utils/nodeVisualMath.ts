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
 * 配置面板可见性语义（W2）：选中 且 本次选中周期未收起 且 非执行中 且 非多选态。
 * 导入节点永不展开：替换走卡片右上角按钮 / 空态胶囊，不占用配置底栏。
 * 多选态（>=2 节点）强制收起：避免多节点同时展开配置坞挤占视口。
 * 抽成纯函数供 node:test 断言（计划 §8 W2 测试点 panelVisible 语义）。
 */
export function isConfigPanelVisible(
  selected: boolean | undefined,
  panelDismissed: boolean,
  executionStatus: NodeExecutionApiStatus | undefined,
  nodeKind?: 'generate' | 'import',
  isMultiSelected?: boolean,
): boolean {
  if (isMultiSelected) return false;
  if (nodeKind === 'import') return false;
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

export interface RectBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface NodeSpatialInfo {
  id?: string;
  position: { x: number; y: number };
  width?: number;
  height?: number;
  measured?: { width?: number; height?: number };
  data?: Record<string, unknown>;
  type?: string;
  style?: Record<string, unknown>;
}

export const DEFAULT_GROUP_PADDING = 32;
export const DEFAULT_NODE_FALLBACK_WIDTH = 350;
export const DEFAULT_NODE_FALLBACK_HEIGHT = 280;

/**
 * 解析节点的真实可视尺寸与外挂标题栏偏移高度
 */
export function resolveNodeDimensions(node: NodeSpatialInfo): {
  width: number;
  height: number;
  headerOffset: number;
} {
  const data = (node.data || {}) as Record<string, unknown>;
  const materialType = (data.materialType as string) || (node.type === 'material' ? 'text' : undefined);

  // 默认规格对齐 nodeSizeConfig.ts
  let defaultWidth = DEFAULT_NODE_FALLBACK_WIDTH;
  let defaultHeight = DEFAULT_NODE_FALLBACK_HEIGHT;
  let headerOffset = 0;

  if (node.type === 'material' || materialType) {
    headerOffset = 28; // NodeHeader 约 24px + 4px gap
    if (materialType === 'text') {
      defaultWidth = 350;
      defaultHeight = 500;
    } else if (materialType === 'image') {
      defaultWidth = 350;
      defaultHeight = 350;
    } else if (materialType === 'video') {
      defaultWidth = 350;
      defaultHeight = 280;
    } else if (materialType === 'audio') {
      defaultWidth = 350;
      defaultHeight = 150;
    }
  } else if (node.type === 'table') {
    headerOffset = 28;
    defaultWidth = 380;
    defaultHeight = 280;
  } else if (node.type === 'video_composition') {
    headerOffset = 28;
    defaultWidth = 350;
    defaultHeight = 440;
  } else if (node.type === 'group') {
    defaultWidth = 400;
    defaultHeight = 300;
    headerOffset = 0;
  }

  // 优先级：node.measured (真实 DOM 测量) > node.width/height > data.nodeWidth/nodeHeight > 默认几何规格
  const width =
    (typeof node.measured?.width === 'number' && node.measured.width > 0)
      ? node.measured.width
      : (typeof node.width === 'number' && node.width > 0)
        ? node.width
        : (typeof data.nodeWidth === 'number' && (data.nodeWidth as number) > 0)
          ? (data.nodeWidth as number)
          : defaultWidth;

  const height =
    (typeof node.measured?.height === 'number' && node.measured.height > 0)
      ? node.measured.height
      : (typeof node.height === 'number' && node.height > 0)
        ? node.height
        : (typeof data.nodeHeight === 'number' && (data.nodeHeight as number) > 0)
          ? (data.nodeHeight as number)
          : defaultHeight;

  return { width, height, headerOffset };
}

/**
 * 计算多个节点在画布中的最小包围盒（含 Padding 留白与外挂标题栏）。
 */
export function calculateGroupBounds(
  nodes: NodeSpatialInfo[],
  padding = DEFAULT_GROUP_PADDING,
  options?: { includeHeaderOffset?: boolean },
): RectBounds & { minWidth: number; minHeight: number } {
  if (!nodes || nodes.length === 0) {
    return {
      x: 0,
      y: 0,
      width: 400,
      height: 300,
      minWidth: 200,
      minHeight: 150,
    };
  }

  const includeHeader = options?.includeHeaderOffset ?? true;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const node of nodes) {
    const nx = node.position.x;
    const ny = node.position.y;
    const { width: nw, height: nh, headerOffset } = resolveNodeDimensions(node);
    const topY = includeHeader ? ny - headerOffset : ny;

    if (nx < minX) minX = nx;
    if (topY < minY) minY = topY;
    if (nx + nw > maxX) maxX = nx + nw;
    if (ny + nh > maxY) maxY = ny + nh;
  }

  const x = minX - padding;
  const y = minY - padding;
  const width = Math.max(120, maxX - minX + padding * 2);
  const height = Math.max(80, maxY - minY + padding * 2);

  return {
    x,
    y,
    width,
    height,
    minWidth: width,
    minHeight: height,
  };
}

/**
 * 将绝对画布坐标转换为组内局部相对坐标。
 */
export function toRelativeCoordinates(
  nodePosition: { x: number; y: number },
  groupPosition: { x: number; y: number },
): { x: number; y: number } {
  return {
    x: nodePosition.x - groupPosition.x,
    y: nodePosition.y - groupPosition.y,
  };
}

/**
 * 将组内局部相对坐标还原为绝对画布坐标。
 */
export function toAbsoluteCoordinates(
  relativePosition: { x: number; y: number },
  groupPosition: { x: number; y: number },
): { x: number; y: number } {
  return {
    x: relativePosition.x + groupPosition.x,
    y: relativePosition.y + groupPosition.y,
  };
}

export type ResizeHandleDirection = 'nw' | 'ne' | 'se' | 'sw' | 'n' | 'e' | 's' | 'w';

/**
 * 8轴手柄尺寸计算器：
 * 根据拖拽方向与位移量计算新边界，强制阻止边界穿透子节点最小包围范围。
 */
export function clampGroupResize(
  handle: ResizeHandleDirection,
  current: RectBounds,
  delta: { dx: number; dy: number },
  minAllowed: { minWidth: number; minHeight: number },
): RectBounds {
  let { x, y, width, height } = current;
  const { dx, dy } = delta;

  switch (handle) {
    case 'se': {
      width = Math.max(minAllowed.minWidth, width + dx);
      height = Math.max(minAllowed.minHeight, height + dy);
      break;
    }
    case 'e': {
      width = Math.max(minAllowed.minWidth, width + dx);
      break;
    }
    case 's': {
      height = Math.max(minAllowed.minHeight, height + dy);
      break;
    }
    case 'nw': {
      const newWidth = width - dx;
      if (newWidth >= minAllowed.minWidth) {
        x += dx;
        width = newWidth;
      } else {
        x += width - minAllowed.minWidth;
        width = minAllowed.minWidth;
      }
      const newHeight = height - dy;
      if (newHeight >= minAllowed.minHeight) {
        y += dy;
        height = newHeight;
      } else {
        y += height - minAllowed.minHeight;
        height = minAllowed.minHeight;
      }
      break;
    }
    case 'w': {
      const newWidth = width - dx;
      if (newWidth >= minAllowed.minWidth) {
        x += dx;
        width = newWidth;
      } else {
        x += width - minAllowed.minWidth;
        width = minAllowed.minWidth;
      }
      break;
    }
    case 'n': {
      const newHeight = height - dy;
      if (newHeight >= minAllowed.minHeight) {
        y += dy;
        height = newHeight;
      } else {
        y += height - minAllowed.minHeight;
        height = minAllowed.minHeight;
      }
      break;
    }
    case 'ne': {
      width = Math.max(minAllowed.minWidth, width + dx);
      const newHeight = height - dy;
      if (newHeight >= minAllowed.minHeight) {
        y += dy;
        height = newHeight;
      } else {
        y += height - minAllowed.minHeight;
        height = minAllowed.minHeight;
      }
      break;
    }
    case 'sw': {
      height = Math.max(minAllowed.minHeight, height + dy);
      const newWidth = width - dx;
      if (newWidth >= minAllowed.minWidth) {
        x += dx;
        width = newWidth;
      } else {
        x += width - minAllowed.minWidth;
        width = minAllowed.minWidth;
      }
      break;
    }
  }

  return { x, y, width, height };
}

/** Convert a screen-space pointer delta into flow units for the current zoom. */
export function screenDeltaToFlowDelta(
  dx: number,
  dy: number,
  zoom: number,
): { dx: number; dy: number } {
  const scale = zoom > 0 ? zoom : 1;
  return { dx: dx / scale, dy: dy / scale };
}

export function childIdsOfGroup(nodes: Array<{ id: string; type?: string; parentId?: string }>, groupId: string): string[] {
  return nodes
    .filter((node) => node.parentId === groupId && node.type !== 'group')
    .map((node) => node.id);
}

/**
 * 纯逻辑：将指定节点打组为 GroupNode 并将子节点转为相对坐标。
 */
export function planGroupNodes(
  currentNodes: any[],
  nodeIds: string[],
  title = '新建组',
  color = '#3b82f6',
): { groupId: string; nodes: any[] } | null {
  const targetNodes = currentNodes.filter((n) => (
    nodeIds.includes(n.id)
    && n.type !== 'group'
    && !n.parentId
  ));
  if (targetNodes.length < 2) return null;

  const bounds = calculateGroupBounds(targetNodes, 32);
  const groupId = `group_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  const groupNode = {
    id: groupId,
    type: 'group',
    position: { x: bounds.x, y: bounds.y },
    width: bounds.width,
    height: bounds.height,
    selected: true,
    style: {
      width: bounds.width,
      height: bounds.height,
      zIndex: 0,
    },
    data: {
      title,
      color,
      minWidth: bounds.minWidth,
      minHeight: bounds.minHeight,
      padding: 32,
      nodeIds: targetNodes.map((n) => n.id),
    },
  };

  const groupedIds = new Set(targetNodes.map((n) => n.id));

  const updatedChildren = currentNodes.map((node) => {
    if (!groupedIds.has(node.id) || node.type === 'group') return node;
    const relPos = toRelativeCoordinates(node.position, { x: bounds.x, y: bounds.y });
    return {
      ...node,
      parentId: groupId,
      position: relPos,
      selected: false,
      extent: 'parent',
    };
  });

  return {
    groupId,
    nodes: [groupNode, ...updatedChildren],
  };
}

/**
 * 纯逻辑：解除组，将组内节点还原为绝对坐标。
 */
export function planUngroupNode(currentNodes: any[], groupId: string): any[] | null {
  const groupNode = currentNodes.find((n) => n.id === groupId && n.type === 'group');
  if (!groupNode) return null;

  const groupPos = groupNode.position;
  return currentNodes
    .filter((n) => n.id !== groupId)
    .map((node) => {
      if (node.parentId !== groupId) return node;
      const absPos = toAbsoluteCoordinates(node.position, groupPos);
      const { parentId, extent, ...rest } = node;
      return {
        ...rest,
        position: absPos,
        selected: true,
      };
    });
}
