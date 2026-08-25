import React from 'react';
import { useTableStore } from '../../../store/tableStore';
import { PopoverFieldConfig } from './popovers/PopoverFieldConfig';
import { PopoverFilterBuilder } from './popovers/PopoverFilterBuilder';
import { PopoverRowHeight } from './popovers/PopoverRowHeight';

export const StageTopbar: React.FC = () => {
  const {
    document,
    setTitle,
    activePopover,
    setActivePopover,
    undo,
    redo,
    canUndo,
    canRedo,
    closeStage,
  } = useTableStore();

  const isFieldConfigOpen = activePopover === 'field-config';
  const isFilterOpen = activePopover === 'filter';
  const isRowHeightOpen = activePopover === 'row-height';

  const hasActiveFilter = Boolean(
    document.filter?.conditions &&
      document.filter.conditions.length > 0 &&
      document.filter.conditions.some((c) => c.value !== undefined && c.value !== '')
  );

  return (
    <header
      className="wf-stage-topbar"
      onClick={(e) => {
        e.stopPropagation();
        setActivePopover(null);
      }}
    >
      {/* 左侧：单一内联可编辑表名 */}
      <div className="wf-stage-topbar__left">
        <input
          type="text"
          className="wf-stage-title-input"
          value={document.title || '未命名表格'}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 右侧：三大配置按钮与操作群 */}
      <div className="wf-stage-topbar__right">
        {/* 1. 【字段配置】按钮 + 锚定面板 */}
        <div className="wf-stage-btn-wrapper">
          <button
            type="button"
            className={`wf-stage-pill-btn ${isFieldConfigOpen ? 'wf-stage-pill-btn--active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setActivePopover(isFieldConfigOpen ? null : 'field-config');
            }}
          >
            {/* 齿轮图标 */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>字段配置</span>
          </button>

          {isFieldConfigOpen && <PopoverFieldConfig />}
        </div>

        {/* 2. 【筛选】按钮 + 锚定面板 */}
        <div className="wf-stage-btn-wrapper">
          <button
            type="button"
            className={`wf-stage-pill-btn ${isFilterOpen ? 'wf-stage-pill-btn--active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setActivePopover(isFilterOpen ? null : 'filter');
            }}
          >
            {/* 漏斗图标 */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span>筛选</span>

            {/* 蓝色小圆点徽标 */}
            {hasActiveFilter && <span className="wf-stage-dot-badge" />}
          </button>

          {isFilterOpen && <PopoverFilterBuilder />}
        </div>

        {/* 3. 【行高】按钮 + 锚定面板 */}
        <div className="wf-stage-btn-wrapper">
          <button
            type="button"
            className={`wf-stage-pill-btn ${isRowHeightOpen ? 'wf-stage-pill-btn--active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setActivePopover(isRowHeightOpen ? null : 'row-height');
            }}
          >
            {/* 三↕ 行高图标 */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="14" y2="6" />
              <line x1="4" y1="12" x2="10" y2="12" />
              <line x1="4" y1="18" x2="14" y2="18" />
              <polyline points="18 4 21 7 18 10" />
              <line x1="21" y1="7" x2="21" y2="17" />
              <polyline points="18 14 21 17 18 20" />
            </svg>
            <span>行高</span>
          </button>

          {isRowHeightOpen && <PopoverRowHeight />}
        </div>

        <div className="wf-stage-divider" />

        {/* 4. 撤销 (Cmd+Z) */}
        <button
          type="button"
          disabled={!canUndo()}
          className="wf-stage-icon-btn"
          title="撤销 (Cmd+Z)"
          onClick={undo}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7v6h6" />
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
          </svg>
        </button>

        {/* 5. 重做 (Cmd+Shift+Z) */}
        <button
          type="button"
          disabled={!canRedo()}
          className="wf-stage-icon-btn"
          title="重做 (Cmd+Shift+Z)"
          onClick={redo}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
          </svg>
        </button>

        <div className="wf-stage-divider" />

        {/* 6. 关闭 (Esc) */}
        <button
          type="button"
          className="wf-stage-icon-btn"
          title="关闭 (Esc)"
          onClick={closeStage}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};
