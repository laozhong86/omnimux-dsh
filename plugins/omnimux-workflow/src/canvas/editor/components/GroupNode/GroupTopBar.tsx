import React, { memo, useState, useRef, useEffect } from 'react';
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
      className="wf-group-topbar nodrag nopan"
      onPointerDown={stopToolbarNativeEvent}
      onMouseDown={stopToolbarNativeEvent}
      style={{ ['--wf-group-accent' as string]: groupColor }}
    >
      <div style={{ position: 'relative' }} ref={colorRef}>
        <button
          type="button"
          className="wf-group-topbar__btn"
          onClick={() => setIsColorOpen((prev) => !prev)}
          title={t('group.colorTitle')}
        >
          <div className="wf-group-topbar__swatch" />
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

      <div style={{ position: 'relative' }} ref={layoutRef}>
        <button
          type="button"
          className="wf-group-topbar__btn"
          onClick={() => setIsLayoutOpen((prev) => !prev)}
          title={t('group.layoutTitle')}
        >
          <LayoutGrid size={13} />
          <span>{t('group.layout')}</span>
          <ChevronDown size={12} />
        </button>
        {isLayoutOpen && (
          <div className="wf-group-topbar__menu" style={{ left: 0, right: 'auto' }}>
            <button type="button" className="wf-group-topbar__menu-item" onClick={() => { onLayout('horizontal'); setIsLayoutOpen(false); }}>
              <AlignHorizontalDistributeCenter size={13} />
              <span>{t('group.layoutHorizontal')}</span>
            </button>
            <button type="button" className="wf-group-topbar__menu-item" onClick={() => { onLayout('vertical'); setIsLayoutOpen(false); }}>
              <AlignVerticalDistributeCenter size={13} />
              <span>{t('group.layoutVertical')}</span>
            </button>
            <button type="button" className="wf-group-topbar__menu-item" onClick={() => { onLayout('grid'); setIsLayoutOpen(false); }}>
              <Grid size={13} />
              <span>{t('group.layoutGrid')}</span>
            </button>
          </div>
        )}
      </div>

      <div className="wf-group-topbar__divider" />

      <button type="button" className="wf-group-topbar__btn wf-group-topbar__btn--success" onClick={onExecuteGroup} title={t('group.executeTitle')}>
        <Play size={12} />
        <span>{t('group.execute')}</span>
      </button>

      <div className="wf-group-topbar__divider" />

      <button type="button" className="wf-group-topbar__btn" onClick={onCreateWorkflow} title={t('group.createWorkflowTitle')}>
        <FileCode size={13} />
        <span>{t('group.createWorkflow')}</span>
      </button>

      <div className="wf-group-topbar__divider" />

      <button type="button" className="wf-group-topbar__btn" onClick={onUngroup} title={t('group.ungroupTitle')}>
        <Ungroup size={13} />
        <span>{t('group.ungroup')}</span>
      </button>
    </div>
  );
});

GroupTopBar.displayName = 'GroupTopBar';
