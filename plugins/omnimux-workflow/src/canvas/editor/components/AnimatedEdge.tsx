/**
 * W3 rework, ported from Gxgen
 * `apps/web/src/pages/CanvasEditor/components/AnimatedEdge.tsx` (107 lines).
 *
 * Activation semantics aligned with Gxgen: the beam is driven by the
 * DOWNSTREAM (target) node — the component subscribes to
 * useExecutionStore(s => s.nodeStatuses[target] === 'running') internally.
 * (The old upstream-driven edge.animated mapping in CanvasEditor was
 * removed in T3.2.)
 *
 * - inactive: static BaseEdge (selected → accent stroke, as before)
 * - active: BaseEdge at opacity 0 + AnimatedBeam (blue gradient + glow)
 * - active + prefers-reduced-motion: .wf-edge--flowing CSS dash fallback
 *   (its animation is disabled by the reduced-motion media query)
 *
 * Both branches wrap in .wf-edge-with-disconnect and mount
 * EdgeDisconnectControl at the bezier label point (T3.3).
 */

import { memo } from 'react';
import {
  BaseEdge,
  getBezierPath,
  type EdgeProps,
} from '@xyflow/react';
import { useExecutionStore } from '../../store/executionStore';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import AnimatedBeam from './AnimatedBeam';
import EdgeDisconnectControl from './EdgeDisconnectControl';

const AnimatedEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
  target,
}: EdgeProps) => {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  // 下游节点 running → 光束激活（对齐 Gxgen 下游语义，store 字段不变）
  const isTargetRunning = useExecutionStore((state) => state.nodeStatuses[target] === 'running');
  const reducedMotion = usePrefersReducedMotion();

  const stroke = selected ? 'var(--wb-accent)' : 'var(--wb-edge)';
  const strokeWidth = selected ? 2.5 : 2;

  // reduced-motion 降级：CSS dash（媒体查询下动画静止）
  if (isTargetRunning && reducedMotion) {
    return (
      <g className="wf-edge-with-disconnect">
        <BaseEdge
          id={id}
          path={path}
          className="wf-edge--flowing"
          style={{ stroke, strokeWidth }}
        />
        <EdgeDisconnectControl edgeId={id} x={labelX} y={labelY} />
      </g>
    );
  }

  // 下游 running：BaseEdge 隐去（保留交互/选中热区）+ 蓝系光束
  if (isTargetRunning) {
    return (
      <g className="wf-edge-with-disconnect">
        <BaseEdge
          id={id}
          path={path}
          style={{ stroke, strokeWidth, opacity: 0 }}
        />
        <AnimatedBeam
          pathD={path}
          startPoint={{ x: sourceX, y: sourceY }}
          endPoint={{ x: targetX, y: targetY }}
          pathColor={stroke}
          pathWidth={strokeWidth}
        />
        <EdgeDisconnectControl edgeId={id} x={labelX} y={labelY} />
      </g>
    );
  }

  return (
    <g className="wf-edge-with-disconnect">
      <BaseEdge
        id={id}
        path={path}
        style={{ stroke, strokeWidth }}
      />
      <EdgeDisconnectControl edgeId={id} x={labelX} y={labelY} />
    </g>
  );
};

export default memo(AnimatedEdge);
