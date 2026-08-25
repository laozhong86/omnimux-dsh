import React from 'react';
import { useTableStore } from '../../../../store/tableStore';
import type { HTableFieldType } from '../../../../../shared/types/htable';

export const renderFieldTypeIcon = (type: HTableFieldType) => {
  if (type === 'text') {
    return (
      <svg className="wf-node-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18l4-12h2l4 12M5.5 14h7" />
        <line x1="16" y1="9" x2="22" y2="9" />
        <line x1="16" y1="13" x2="20" y2="13" />
        <line x1="16" y1="17" x2="22" y2="17" />
      </svg>
    );
  } else if (type === 'number') {
    return (
      <svg className="wf-node-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
      </svg>
    );
  } else if (type === 'attachment') {
    return (
      <svg className="wf-node-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>
    );
  }
  return <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--wb-text-muted)' }} />;
};

export const PopoverFieldConfig: React.FC = () => {
  const {
    document,
    toggleColumnVisibility,
    openColumnModal,
    activeContextMenuColIdx,
    setContextMenuColIdx,
    deleteColumn,
  } = useTableStore();

  return (
    <div
      className="wf-popover-card wf-popover-field-config"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="wf-popover-title">字段配置</div>

      <div className="wf-field-config-list">
        {document.columns.map((col, idx) => (
          <div key={col.id} className="wf-field-config-item relative">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
              {/* 6 触点拖拽把手 */}
              <div style={{ cursor: 'grab', color: 'var(--wb-text-muted)', display: 'flex', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="8" cy="6" r="1.5" />
                  <circle cx="8" cy="12" r="1.5" />
                  <circle cx="8" cy="18" r="1.5" />
                  <circle cx="16" cy="6" r="1.5" />
                  <circle cx="16" cy="12" r="1.5" />
                  <circle cx="16" cy="18" r="1.5" />
                </svg>
              </div>

              {renderFieldTypeIcon(col.type)}

              <span style={{ fontSize: 'var(--wb-fs-body)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {col.title}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
              {/* 眼睛显隐 */}
              <button
                type="button"
                className="wf-field-config-subtle-btn"
                title={col.visible ? '隐藏字段' : '显示字段'}
                onClick={() => toggleColumnVisibility(idx)}
              >
                {col.visible ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--wb-text-muted)' }}>
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>

              {/* ··· 更多操作 */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="wf-field-config-subtle-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setContextMenuColIdx(activeContextMenuColIdx === idx ? null : idx);
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="19" cy="12" r="1.5" />
                    <circle cx="5" cy="12" r="1.5" />
                  </svg>
                </button>

                {activeContextMenuColIdx === idx && (
                  <div className="wf-popover-context-bubble" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className="wf-context-menu-item"
                      onClick={() => {
                        setContextMenuColIdx(null);
                        openColumnModal('edit', idx);
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                      <span>编辑</span>
                    </button>
                    <button
                      type="button"
                      className="wf-context-menu-item wf-context-menu-item--danger"
                      onClick={() => {
                        setContextMenuColIdx(null);
                        if (confirm(`确定删除字段 "${col.title}" 吗？`)) {
                          deleteColumn(idx);
                        }
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                      <span>删除</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 14px', borderTop: '1px solid var(--wb-border)' }}>
        <button
          type="button"
          className="wf-context-menu-item"
          style={{ width: '100%', color: 'var(--wb-accent)' }}
          onClick={() => openColumnModal('add')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>新增字段</span>
        </button>
      </div>
    </div>
  );
};
