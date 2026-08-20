/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/components/CanvasNodeHandle.tsx` (384 行).
 *
 * 原组件是带拖拽阈值、下拉菜单（点击 + 号弹出建节点菜单）的复合锚点。
 * spike 保留：左右侧锚点、hover 显隐；裁掉：拖拽阈值常量、菜单系统。
 *
 * 关键行为对齐 Gxgen：Handle 本体始终可交互（React Flow 连线起点），
 * hover 只控制视觉显隐 —— 若把 pointerEvents 也 gate 在 hover 上，
 * 鼠标离开节点移向锚点的瞬间 mouseleave 会禁用锚点，拖线无法起手。
 */

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export interface CanvasNodeHandleProps {
  side: 'left' | 'right';
  nodeHovered: boolean;
}

const CanvasNodeHandle: React.FC<CanvasNodeHandleProps> = ({ side, nodeHovered }) => {
  const isLeft = side === 'left';
  return (
    <div
      className="canvas-node-handle"
      style={{
        position: 'absolute',
        top: '50%',
        [isLeft ? 'left' : 'right']: -14,
        transform: 'translateY(-50%)',
        opacity: nodeHovered ? 1 : 0,
        transition: 'opacity 150ms ease',
      }}
    >
      <Handle
        type={isLeft ? 'target' : 'source'}
        position={isLeft ? Position.Left : Position.Right}
        id={isLeft ? 'in' : 'out'}
        isConnectable
      />
    </div>
  );
};

export default memo(CanvasNodeHandle);
