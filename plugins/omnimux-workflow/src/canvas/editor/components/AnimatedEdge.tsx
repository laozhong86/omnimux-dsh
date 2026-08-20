/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/components/AnimatedEdge.tsx`
 * (validated by the extraction spike): keeps the edgeTypes.animated
 * registration shape; colors flow through the --wb-* theme variables.
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
