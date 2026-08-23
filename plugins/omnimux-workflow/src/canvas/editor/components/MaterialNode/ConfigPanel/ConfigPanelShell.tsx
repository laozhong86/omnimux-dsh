/**
 * ConfigPanelShell — W2 T2.1，移植自 Gxgen
 * apps/web/src/pages/CanvasEditor/components/MaterialNode/components/ConfigPanel/ConfigPanelShell.tsx(87)。
 *
 * 内联浮层外壳：absolute 于卡片下方 12px、left 50% 居中、反向缩放
 * scale(1/zoom)（xyflow useViewport 倍率 —— 禁止抄 Gxgen 的 scale(100/zoom)，
 * 计划 §9 坑#5）、transformOrigin top center、nodrag nowheel。
 *
 * 与 Gxgen 差异：背景/阴影全走 --wb-* token（暗色 token 翻转，
 * 不用 JS isDark 分支）；宽 480（窄化 Gxgen 640）。
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

  // 反向缩放：抵消画布缩放，面板屏幕尺寸恒定（同 NodeHeader）
  const counterScale = useMemo(() => inverseScaleForZoom(zoom), [zoom]);

  useClickOutside({ refs: panelRef, onClose });

  return (
    <div
      ref={panelRef}
      className="wf-panel-shell nodrag nowheel"
      style={{
        width,
        top: 'calc(100% + 12px)',
        // 居中：left 50% 后用 margin 偏移自身宽度的一半（不受 scale 影响）
        left: '50%',
        marginLeft: -width / 2,
        transform: `scale(${counterScale})`,
        transformOrigin: 'top center',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="wf-panel-shell__outer">
        <div className="wf-panel-shell__inner">
          <div className="wf-panel-shell__body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(ConfigPanelShell);
