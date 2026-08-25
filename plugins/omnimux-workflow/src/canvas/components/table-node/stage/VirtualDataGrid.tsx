import React from 'react';
import { useTableStore } from '../../../store/tableStore';
import { renderFieldTypeIcon } from './popovers/PopoverFieldConfig';
import type { HTableCellValue } from '../../../../shared/types/htable';

export const VirtualDataGrid: React.FC = () => {
  const {
    document,
    updateCell,
    addRow,
    openColumnModal,
  } = useTableStore();

  const visibleColumns = document.columns.filter((c) => c.visible);
  const rowHeightMode = document.rowHeight || 'low';

  const rowHeightClass = `wf-grid-row--${rowHeightMode}`;

  return (
    <div className="wf-grid-container">
      <table className="wf-grid-table">
        <thead>
          <tr>
            {/* 首列：多选框 */}
            <th className="wf-grid-th wf-grid-th--select">
              <input type="checkbox" style={{ cursor: 'pointer' }} />
            </th>

            {/* 动态字段列 */}
            {visibleColumns.map((col) => (
              <th
                key={col.id}
                style={{ width: `${col.width || 240}px` }}
                className="wf-grid-th"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                  {renderFieldTypeIcon(col.type)}
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{col.title}</span>
                </div>
              </th>
            ))}

            {/* 快捷加列列 */}
            <th
              className="wf-grid-th wf-grid-th--plus"
              title="添加列"
              onClick={() => openColumnModal('add')}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </th>

            {/* 右侧空占位缓冲 */}
            <th className="wf-grid-th" style={{ borderRight: 'none' }} />
          </tr>
        </thead>

        <tbody>
          {document.rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowHeightClass}>
              {/* 序号列 */}
              <td className="wf-grid-td wf-grid-td--select">
                {rowIdx + 1}
              </td>

              {/* 各字段单元格 */}
              {visibleColumns.map((col) => {
                const colIdx = document.columns.findIndex((c) => c.id === col.id);
                const cellVal = row.cells[colIdx];

                const renderCellContent = () => {
                  if (col.type === 'attachment') {
                    const attachments = Array.isArray(cellVal) ? cellVal : [];
                    return (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, overflowX: 'auto' }}>
                        {attachments.map((att, attIdx) => (
                          <span
                            key={attIdx}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 4,
                              padding: '2px 8px',
                              borderRadius: 4,
                              background: 'var(--wb-pill-bg)',
                              fontSize: 12,
                            }}
                          >
                            📎 {att.name}
                          </span>
                        ))}
                        {attachments.length === 0 && (
                          <span style={{ color: 'var(--wb-text-muted)', fontStyle: 'italic', fontSize: 11 }}>+ 拖拽或上传附件</span>
                        )}
                      </div>
                    );
                  }

                  const strVal = typeof cellVal === 'string' || typeof cellVal === 'number' ? String(cellVal) : '';
                  return (
                    <input
                      type="text"
                      className="wf-grid-cell-input"
                      value={strVal}
                      onChange={(e) => updateCell(rowIdx, colIdx, e.target.value as HTableCellValue)}
                    />
                  );
                };

                return (
                  <td key={col.id} className="wf-grid-td">
                    {renderCellContent()}
                  </td>
                );
              })}

              {/* 快捷列与右侧占位 */}
              <td className="wf-grid-td" style={{ background: 'var(--wb-bg)' }} />
              <td className="wf-grid-td" style={{ borderRight: 'none' }} />
            </tr>
          ))}
        </tbody>
      </table>

      {/* 底部添加行操作条 */}
      <div style={{ padding: '10px 16px', borderBottom: '1px solid var(--wb-border)', background: 'var(--wb-surface)' }}>
        <button
          type="button"
          className="wf-stage-pill-btn"
          onClick={() => addRow()}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>添加行</span>
        </button>
      </div>
    </div>
  );
};
