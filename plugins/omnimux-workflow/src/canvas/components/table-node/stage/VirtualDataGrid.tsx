import React from 'react';
import { Plus } from 'lucide-react';
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
      <div className="wf-grid-scroll-pane">
        <table className="wf-grid-table">
          <colgroup>
            {/* 首列：行号与多选 */}
            <col style={{ width: 48, minWidth: 48, maxWidth: 48 }} />

            {/* 动态字段列 */}
            {visibleColumns.map((col) => (
              <col
                key={col.id}
                style={{ width: col.width || 220, minWidth: 120 }}
              />
            ))}

            {/* 快捷加列列 */}
            <col style={{ width: 44, minWidth: 44, maxWidth: 44 }} />

            {/* 右侧空占位缓冲 */}
            <col style={{ width: 'auto' }} />
          </colgroup>

          <thead>
            <tr>
              {/* 首列：多选框 */}
              <th className="wf-grid-th wf-grid-th--select">
                <input type="checkbox" className="wf-grid-checkbox" />
              </th>

              {/* 动态字段列 */}
              {visibleColumns.map((col) => (
                <th
                  key={col.id}
                  className="wf-grid-th"
                >
                  <div className="wf-grid-th-content">
                    <span className="wf-grid-th-icon">{renderFieldTypeIcon(col.type)}</span>
                    <span className="wf-grid-th-title">{col.title}</span>
                  </div>
                </th>
              ))}

              {/* 快捷加列列 */}
              <th
                className="wf-grid-th wf-grid-th--plus"
                title="添加列"
                onClick={() => openColumnModal('add')}
              >
                <div className="wf-grid-th-plus-btn">
                  <Plus size={15} />
                </div>
              </th>

              {/* 右侧空占位缓冲 */}
              <th className="wf-grid-th wf-grid-th--filler" />
            </tr>
          </thead>

          <tbody>
            {document.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className={rowHeightClass}>
                {/* 序号列 */}
                <td className="wf-grid-td wf-grid-td--select">
                  <span>{rowIdx + 1}</span>
                </td>

                {/* 各字段单元格 */}
                {visibleColumns.map((col) => {
                  const colIdx = document.columns.findIndex((c) => c.id === col.id);
                  const cellVal = row.cells[colIdx];

                  const renderCellContent = () => {
                    if (col.type === 'attachment') {
                      const attachments = Array.isArray(cellVal) ? cellVal : [];
                      return (
                        <div className="wf-grid-cell-attachment">
                          {attachments.map((att, attIdx) => (
                            <span key={attIdx} className="wf-grid-attachment-tag">
                              📎 {att.name}
                            </span>
                          ))}
                          {attachments.length === 0 && (
                            <span className="wf-grid-attachment-empty">+ 上传附件</span>
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
                        placeholder="点击输入..."
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
                <td className="wf-grid-td wf-grid-td--plus-col" />
                <td className="wf-grid-td wf-grid-td--filler" />
              </tr>
            ))}
          </tbody>
        </table>

        {/* 底部添加行操作条 */}
        <div className="wf-grid-add-row-bar">
          <button
            type="button"
            className="wf-grid-add-row-btn"
            onClick={() => addRow()}
          >
            <Plus size={14} />
            <span>添加行</span>
          </button>
        </div>
      </div>
    </div>
  );
};
