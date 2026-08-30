import React, { type FC, type ReactNode } from 'react';

export interface OrganicShimmerOverlayProps {
  children?: ReactNode;
  borderRadius?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const OrganicShimmerOverlay: FC<OrganicShimmerOverlayProps> = ({
  children,
  borderRadius = 'inherit',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`wf-organic-shimmer-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius,
        ...style,
      }}
    >
      <div className="wf-organic-shimmer-track" />
      <div className="wf-organic-shimmer-glow" />
      {children ? (
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%' }}>
          {children}
        </div>
      ) : null}
    </div>
  );
};
