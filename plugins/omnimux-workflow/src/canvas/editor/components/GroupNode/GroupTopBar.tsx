import React, { memo, useState, useRef, useEffect, useMemo } from 'react';
import { useViewport } from '@xyflow/react';
import {
  Play,
  FileCode,
  Ungroup,
  LayoutGrid,
  ChevronDown,
  AlignHorizontalDistributeCenter,
  AlignVerticalDistributeCenter,
  Grid,
} from 'lucide-react';
import { useT } from '../../../i18n';
import { stopToolbarNativeEvent } from '../toolbarPointerGuard';
import { inverseScaleForZoom } from '../../utils/nodeVisualMath';

export interface GroupTopBarProps {
  groupId: string;
  groupTitle: string;
  groupColor: string;
  onExecuteGroup: () => void;
  onCreateWorkflow: () => void;
  onUngroup: () => void;
  onLayout: (type: 'horizontal' | 'vertical' | 'grid') => void;
  onColorChange: (color: string) => void;
}

const PALETTE_COLORS = [
  '#3b82f6',
  '#10b981',
  '#8b5cf6',
  '#f59e0b',
  '#ef4444',
  '#ec4899',
  '#06b6d4',
  '#64748b',
];

export const GroupTopBar: React.FC<GroupTopBarProps> = memo(({
  groupColor,
  onExecuteGroup,
  onCreateWorkflow,
  onUngroup,
  onLayout,
  onColorChange,
}) => {
  const t = useT();
  const { zoom } = useViewport();
  const inverseScale = useMemo(() => inverseScaleForZoom(zoom), [zoom]);

  const [isLayoutOpen, setIsLayoutOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const colorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (layoutRef.current && !layoutRef.current.contains(e.target as Node)) {
        setIsLayoutOpen(false);
      }
      if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
        setIsColorOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="wf-floating-top-pill wf-group-topbar nodrag nopan nowheel"
      onPointerDown={stopToolbarNativeEvent}
      onMouseDown={stopToolbarNativeEvent}
      style={{
        top: -(14 * inverseScale),
        transform: `translate(-50%, -100%) scale(${inverseScale})`,
        transformOrigin: 'bottom center',
        left: '50%',
        ['--wf-group-accent' as string]: groupColor,
      }}
    >
      <div className="wf-floating-top-pill__group">
        <div style={{ position: 'relative' }} ref={colorRef}>
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={() => setIsColorOpen((prev) => !prev)}
            title={t('group.colorTitle')}
          >
            <div className="wf-group-topbar__swatch" style={{ backgroundColor: groupColor }} />
          </button>
          {isColorOpen && (
            <div className="wf-group-topbar__palette">
              {PALETTE_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`wf-group-topbar__palette-dot ${groupColor === c ? 'is-active' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => {
                    onColorChange(c);
                    setIsColorOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <span className="wf-floating-top-pill__divider" />

        <div style={{ position: 'relative' }} ref={layoutRef}>
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={() => setIsLayoutOpen((prev) => !prev)}
            title={t('group.layoutTitle')}
          >
            <LayoutGrid size={13} className="wf-floating-top-pill__icon" />
            <span>{t('group.layout')}</span>
            <ChevronDown size={12} className="wf-floating-top-pill__icon" />
          </button>
          {isLayoutOpen && (
            <div className="wf-group-topbar__menu" style={{ left: 0, right: 'auto' }}>
              <button
                type="button"
                className="wf-group-topbar__menu-item"
                onClick={() => {
                  onLayout('horizontal');
                  setIsLayoutOpen(false);
                }}
              >
                <AlignHorizontalDistributeCenter size={13} />
                <span>{t('group.layoutHorizontal')}</span>
              </button>
              <button
                type="button"
                className="wf-group-topbar__menu-item"
                onClick={() => {
                  onLayout('vertical');
                  setIsLayoutOpen(false);
                }}
              >
                <AlignVerticalDistributeCenter size={13} />
                <span>{t('group.layoutVertical')}</span>
              </button>
              <button
                type="button"
                className="wf-group-topbar__menu-item"
                onClick={() => {
                  onLayout('grid');
                  setIsLayoutOpen(false);
                }}
              >
                <Grid size={13} />
                <span>{t('group.layoutGrid')}</span>
              </button>
            </div>
          )}
        </div>

        <span className="wf-floating-top-pill__divider" />

        <button
          type="button"
          className="wf-floating-top-pill__btn wf-floating-top-pill__btn--success"
          onClick={onExecuteGroup}
          title={t('group.executeTitle')}
        >
          <Play size={12} className="wf-floating-top-pill__icon wf-floating-top-pill__icon--success" />
          <span>{t('group.execute')}</span>
        </button>

        <span className="wf-floating-top-pill__divider" />

        <button
          type="button"
          className="wf-floating-top-pill__btn"
          onClick={onCreateWorkflow}
          title={t('group.createWorkflowTitle')}
        >
          <FileCode size={13} className="wf-floating-top-pill__icon" />
          <span>{t('group.createWorkflow')}</span>
        </button>

        <span className="wf-floating-top-pill__divider" />

        <button
          type="button"
          className="wf-floating-top-pill__btn"
          onClick={onUngroup}
          title={t('group.ungroupTitle')}
        >
          <Ungroup size={13} className="wf-floating-top-pill__icon" />
          <span>{t('group.ungroup')}</span>
        </button>
      </div>
    </div>
  );
});

GroupTopBar.displayName = 'GroupTopBar';
