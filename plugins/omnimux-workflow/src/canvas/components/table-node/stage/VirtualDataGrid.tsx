import React, { useState, useRef, useEffect } from 'react';
import { Plus, GripVertical } from 'lucide-react';
import { useTableStore } from '../../../store/tableStore.ts';
import { renderFieldTypeIcon } from './popovers/PopoverFieldConfig.tsx';
import type { HTableCellValue } from '../../../../shared/types/htable.ts';

export const VirtualDataGrid: React.FC = () => {
  const {
    document,
    selectedRowIndices,
    toggleRowSelection,
    selectAllRows,
    clearRowSelection,
    reorderRows,
    renameColumn,
    updateCell,
    addRow,
    openColumnModal,
  } = useTableStore();

  const visibleColumns = document.columns.filter((c) => c.visible);
  const rowHeightMode = document.rowHeight || 'low';
  const rowHeightClass = `wf-grid-row--${rowHeightMode}`;

  // 表头全选/半选 Checkbox 状态管理
  const headerCheckboxRef = useRef<HTMLInputElement>(null);
  const totalRows = document.rows.length;
  const selectedCount = selectedRowIndices.length;
  const isAllSelected = totalRows > 0 && selectedCount === totalRows;
  const isIndeterminate = selectedCount > 0 && selectedCount < totalRows;

  useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  const handleHeaderCheckboxChange = () => {
    if (isAllSelected || isIndeterminate) {
      clearRowSelection();
    } else {
      selectAllRows();
    }
  };

  // 双击列名就地重命名状态管理
  const [editingColId, setEditingColId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>('');
  const renameInputRef = useRef<HTMLInputElement>(null);

  const startEditingColumn = (colId: string, currentTitle: string) => {
    setEditingColId(colId);
    setEditingTitle(currentTitle);
  };

  const commitColumnRename = (colIdx: number) => {
    const trimmed = editingTitle.trim();
    if (trimmed) {
      renameColumn(colIdx, trimmed);
    }
    setEditingColId(null);
    setEditingTitle('');
  };

  const cancelColumnRename = () => {
    setEditingColId(null);
    setEditingTitle('');
  };

  // 行原生 HTML5 拖拽重排状态管理
  const [draggedRowIdx, setDraggedRowIdx] = useState<number | null>(null);
  const [dropTargetIdx, setDropTargetIdx] = useState<number | null>(null);
  const [dropPosition, setDropPosition] = useState<'top' | 'bottom' | null>(null);

  const handleDragStart = (e: React.DragEvent, rowIdx: number) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(rowIdx));
    setDraggedRowIdx(rowIdx);
  };

  const handleDragOver = (e: React.DragEvent, rowIdx: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const tr = (e.target as HTMLElement).closest('tr');
    if (!tr) return;
    const rect = tr.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const pos = relY < rect.height / 2 ? 'top' : 'bottom';

    if (dropTargetIdx !== rowIdx || dropPosition !== pos) {
      setDropTargetIdx(rowIdx);
      setDropPosition(pos);
    }
  };

  const handleDragEnd = () => {
    setDraggedRowIdx(null);
    setDropTargetIdx(null);
    setDropPosition(null);
  };

  const handleDrop = (e: React.DragEvent, targetRowIdx: number) => {
    e.preventDefault();
    if (draggedRowIdx === null) {
      handleDragEnd();
      return;
    }

    if (draggedRowIdx !== targetRowIdx) {
      let insertIdx = dropPosition === 'bottom' ? targetRowIdx + 1 : targetRowIdx;
      if (draggedRowIdx < insertIdx) {
        insertIdx -= 1;
      }
      if (draggedRowIdx !== insertIdx) {
        reorderRows(draggedRowIdx, insertIdx);
      }
    }

    handleDragEnd();
  };

  return (
    <div className="wf-grid-container">
      <div className="wf-grid-scroll-pane">
        <table className="wf-grid-table">
          <colgroup>
            {/* 首列：行号与多选 */}
            <col style={{ width: 56, minWidth: 56, maxWidth: 56 }} />

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
                <input
                  ref={headerCheckboxRef}
                  type="checkbox"
                  className="wf-grid-checkbox"
                  checked={isAllSelected}
                  onChange={handleHeaderCheckboxChange}
                  title={isAllSelected ? '取消全选' : '全选'}
                />
              </th>

              {/* 动态字段列 */}
              {visibleColumns.map((col) => {
                const colIdx = document.columns.findIndex((c) => c.id === col.id);
                const isEditing = editingColId === col.id;

                return (
                  <th
                    key={col.id}
                    className="wf-grid-th"
                  >
                    <div className="wf-grid-th-content">
                      <span className="wf-grid-th-icon">{renderFieldTypeIcon(col.type)}</span>
                      {isEditing ? (
                        <input
                          ref={renameInputRef}
                          type="text"
                          className="wf-grid-th-rename-input"
                          value={editingTitle}
                          autoFocus
                          onFocus={(e) => e.target.select()}
                          onChange={(e) => setEditingTitle(e.target.value)}
                          onBlur={() => commitColumnRename(colIdx)}
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => {
                            e.stopPropagation();
                            if (e.key === 'Enter') {
                              commitColumnRename(colIdx);
                            } else if (e.key === 'Escape') {
                              cancelColumnRename();
                            }
                          }}
                        />
                      ) : (
                        <span
                          className="wf-grid-th-title"
                          title="双击就地重命名"
                          onDoubleClick={(e) => {
                            e.stopPropagation();
                            startEditingColumn(col.id, col.title);
                          }}
                        >
                          {col.title}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}

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
            {document.rows.map((row, rowIdx) => {
              const isSelected = selectedRowIndices.includes(rowIdx);
              const isDragging = draggedRowIdx === rowIdx;
              const isDropTarget = dropTargetIdx === rowIdx && draggedRowIdx !== rowIdx;
              const dropClass = isDropTarget && dropPosition ? `wf-grid-row--drop-${dropPosition}` : '';
              const rowClass = [
                rowHeightClass,
                isSelected ? 'wf-grid-row--selected' : '',
                isDragging ? 'wf-grid-row--dragging' : '',
                dropClass,
              ].filter(Boolean).join(' ');

              return (
                <tr
                  key={row.id || rowIdx}
                  className={rowClass}
                  onDragOver={(e) => handleDragOver(e, rowIdx)}
                  onDrop={(e) => handleDrop(e, rowIdx)}
                >
                  {/* 首列：复合单元格（等宽序号 + 拖拽手柄 + 勾选框） */}
                  <td className="wf-grid-td wf-grid-td--select">
                    <div className="wf-grid-row-head-cell">
                      <span className="wf-grid-row-index">{rowIdx + 1}</span>
                      <div className="wf-grid-row-controls">
                        <div
                          className="wf-grid-row-drag-handle"
                          draggable
                          title="拖拽重排行"
                          onDragStart={(e) => handleDragStart(e, rowIdx)}
                          onDragEnd={handleDragEnd}
                        >
                          <GripVertical size={14} />
                        </div>
                        <input
                          type="checkbox"
                          className="wf-grid-checkbox"
                          checked={isSelected}
                          onChange={() => toggleRowSelection(rowIdx)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                  </td>

                  {/* 各字段单元格：通过 col.id 从 row.cells 字典读取与更新 */}
                  {visibleColumns.map((col) => {
                    const cellVal = row.cells[col.id];

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
                          onChange={(e) => updateCell(rowIdx, col.id, e.target.value as HTableCellValue)}
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
              );
            })}
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
