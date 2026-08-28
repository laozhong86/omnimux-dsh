/**
 * FloatingTopPill — 悬浮在节点上方的通用操作胶囊栏。
 *
 * 核心特性：
 * 1. 支持声明式 `actions` 数组（`{ key, label, icon, onClick, variant, disabled, title }`）；
 * 2. 支持 `children` 自定义插槽内容（完全兼容既有自定义胶囊结构）；
 * 3. 内置 `useViewport` 与 `inverseScaleForZoom`，在画布缩放时保持恒定视觉像素尺寸；
 * 4. 居中悬浮在节点上方，阻断画布原生事件捕获（`nodrag nowheel`）。
 */

import React, { memo, useMemo } from 'react';
import { useViewport } from '@xyflow/react';
import { inverseScaleForZoom } from '../utils/nodeVisualMath';

export interface FloatingPillAction {
  key: string;
  label?: React.ReactNode;
  icon?: React.ComponentType<{ size?: number; className?: string }> | React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'default' | 'primary';
  disabled?: boolean;
  title?: string;
  className?: string;
}

export interface FloatingTopPillProps {
  /** 声明式操作项列表 */
  actions?: FloatingPillAction[];
  /** 自定义子组件内容 */
  children?: React.ReactNode;
  /** 外部传入的反向缩放比例（若未传入则自动通过 useViewport 获取） */
  inverseScale?: number;
  /** 距离节点顶部的间距基准（默认 30px） */
  topOffset?: number;
  /** 附加类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export const FloatingTopPill: React.FC<FloatingTopPillProps> = ({
  actions,
  children,
  inverseScale: externalInverseScale,
  topOffset = 30,
  className = '',
  style,
}) => {
  const { zoom } = useViewport();
  const calculatedInverseScale = useMemo(() => inverseScaleForZoom(zoom), [zoom]);
  const inverseScale = externalInverseScale ?? calculatedInverseScale;

  const renderIcon = (icon: FloatingPillAction['icon']) => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      return icon;
    }
    const IconComp = icon as React.ComponentType<{ size?: number; className?: string }>;
    return <IconComp size={13} className="wf-floating-top-pill__icon" />;
  };

  return (
    <div
      className={`wf-floating-top-pill nodrag nowheel ${className}`.trim()}
      style={{
        top: -(topOffset * inverseScale),
        transform: `translate(-50%, -100%) scale(${inverseScale})`,
        transformOrigin: 'bottom center',
        ...style,
      }}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {children ? (
        children
      ) : actions && actions.length > 0 ? (
        <div className="wf-floating-top-pill__group">
          {actions.map((action, index) => {
            const isPrimary = action.variant === 'primary';
            const btnClass = [
              'wf-floating-top-pill__btn',
              isPrimary ? 'wf-floating-top-pill__btn--primary' : '',
              action.className || '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <React.Fragment key={action.key}>
                {index > 0 && <span className="wf-floating-top-pill__divider" />}
                <button
                  type="button"
                  className={btnClass}
                  onClick={action.onClick}
                  disabled={action.disabled}
                  title={action.title}
                >
                  {renderIcon(action.icon)}
                  {action.label ? <span>{action.label}</span> : null}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default memo(FloatingTopPill);
