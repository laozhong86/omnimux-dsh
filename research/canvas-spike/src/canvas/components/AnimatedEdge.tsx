/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/components/AnimatedEdge.tsx`.
 *
 * 保留 Gxgen 的注册形态（edgeTypes.animated）与选中态视觉；
 * 颜色改走 --wb-* CSS 变量（Gxgen 硬编码紫色系的地方全部变量化）。
 */

import { memo } from 'react';
import {
  BaseEdge,
  getBezierPath,
  type EdgeProps,
} from '@xyflow/react';

const AnimatedEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
}: EdgeProps) => {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <BaseEdge
      id={id}
      path={path}
      style={{
        stroke: selected ? 'var(--wb-accent)' : 'var(--wb-edge)',
        strokeWidth: selected ? 2.5 : 2,
      }}
    />
  );
};

export default memo(AnimatedEdge);
