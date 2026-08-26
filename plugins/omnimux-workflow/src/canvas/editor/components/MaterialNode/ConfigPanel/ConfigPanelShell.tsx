/**
 * ConfigPanelShell — 单层一体化浮层外壳。
 *
 * 精简掉原本多余的双层嵌套（outer + inner），改为纯粹的单层卡片。
 * 定位与反缩放：absolute 于卡片下方 12px、left 50% 居中、scale(1/zoom)。
 */

import React, { memo, useMemo, useRef } from 'react';
import { useViewport } from '@xyflow/react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { inverseScaleForZoom } from '../../../utils/nodeVisualMath';

export interface ConfigPanelShellProps {
  children: React.ReactNode;
  /** 点击面板外部（含 Esc）时触发 */
  onClose: () => void;
  /** 面板宽度（屏幕像素，反缩放后恒定） */
  width?: number;
}

const DEFAULT_WIDTH = 480;

const ConfigPanelShell: React.FC<ConfigPanelShellProps> = ({
  children,
  onClose,
  width = DEFAULT_WIDTH,
}) => {
  const { zoom } = useViewport();
  const panelRef = useRef<HTMLDivElement>(null);

  // 反向缩放：抵消画布缩放，面板屏幕尺寸恒定
  const counterScale = useMemo(() => inverseScaleForZoom(zoom), [zoom]);

  useClickOutside({ refs: panelRef, onClose });

  return (
    <div
      ref={panelRef}
      className="wf-panel-shell nodrag nowheel"
      style={{
        width,
        top: 'calc(100% + 12px)',
        left: '50%',
        marginLeft: -width / 2,
        transform: `scale(${counterScale})`,
        transformOrigin: 'top center',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="wf-panel-shell__card">{children}</div>
    </div>
  );
};

export default memo(ConfigPanelShell);
