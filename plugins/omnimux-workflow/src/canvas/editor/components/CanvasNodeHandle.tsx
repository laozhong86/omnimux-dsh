/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/components/CanvasNodeHandle.tsx`
 * (validated by the extraction spike).
 *
 * Key behavior aligned with Gxgen: the Handle itself stays
 * pointer-interactive at all times (React Flow connection start point);
 * hover only drives visual affordance. Gating pointerEvents on hover breaks
 * drag-start (mouseleave fires as the pointer exits the node toward the
 * anchor) — see SPIKE-REPORT.md pit #3.
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
