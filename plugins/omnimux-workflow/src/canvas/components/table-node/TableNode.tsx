import React, { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { useTableStore } from '../../store/tableStore';

export const TableNode: React.FC<NodeProps> = memo(({ id, selected }) => {
  const { document, openStage, addRow } = useTableStore();
  const rows = document.rows || [];
  const firstCol = document.columns[0];

  return (
    <div className="wf-table-node">
      {/* 节点左上方外挂标题 */}
      <div className="wf-table-node__header">
        <svg className="wf-table-node__header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18" />
        </svg>
        <span>{document.title || '未命名表格'}</span>
      </div>

      {/* 节点顶部中央悬浮操作条 */}
      <div className="wf-table-node__actions">
        <button
          type="button"
          className="wf-table-node__action-btn"
          title="添加数据行"
          onClick={(e) => {
            e.stopPropagation();
            addRow();
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M9 12h6M12 9v6" />
          </svg>
        </button>
        <button
          type="button"
          className="wf-table-node__action-btn"
          title="全屏独立编辑表格"
          onClick={(e) => {
            e.stopPropagation();
            openStage();
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      </div>

      {/* 节点主卡片 */}
      <div
        className={`wf-table-node__card ${selected ? 'wf-table-node__card--selected' : ''}`}
        onDoubleClick={() => openStage()}
      >
        {/* 卡片表头预览 */}
        <div className="wf-table-node__card-head">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--wb-text-secondary)' }}>
            <path d="M4 6h16M4 12h10M4 18h16" />
          </svg>
          <span>{firstCol?.title || '文本'}</span>
        </div>

        {/* 卡片内容体 */}
        <div className="wf-table-node__card-body">
          {rows.length === 0 ? (
            <div className="wf-table-node__empty-state">
              暂无数据 — 点击下方 + 添加一行
            </div>
          ) : (
            <div className="wf-table-node__preview-list">
              {rows.slice(0, 3).map((r, idx) => {
                const cellVal = r.cells[0];
                const previewText =
                  typeof cellVal === 'string' && cellVal
                    ? cellVal
                    : typeof cellVal === 'number'
                    ? String(cellVal)
                    : Array.isArray(cellVal) && cellVal.length > 0
                    ? `📎 附件 (${cellVal.length})`
                    : '（空记录）';

                return (
                  <div key={idx} className="wf-table-node__preview-item">
                    <span style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 420 }}>
                      {previewText}
                    </span>
                    <span style={{ color: 'var(--wb-text-muted)', fontFamily: 'monospace', fontSize: 11 }}>
                      #{idx + 1}
                    </span>
                  </div>
                );
              })}

              {rows.length > 3 && (
                <div style={{ fontSize: 11, color: 'var(--wb-text-muted)', textAlign: 'center', marginTop: 4 }}>
                  ... 共 {rows.length} 条记录
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4 处微调角标 */}
      <div className="wf-table-node__corner-handle wf-table-node__corner-handle--nw" />
      <div className="wf-table-node__corner-handle wf-table-node__corner-handle--ne" />
      <div className="wf-table-node__corner-handle wf-table-node__corner-handle--sw" />
      <div className="wf-table-node__corner-handle wf-table-node__corner-handle--se" />

      {/* 右侧 DAG 批处理衍生端口 (+) */}
      <Handle
        type="source"
        position={Position.Right}
        id="table-batch-out"
        className="!w-8 !h-8 !bg-white !border-2 !border-slate-300 hover:!border-blue-600 !rounded-full !shadow-sm !flex !items-center !justify-center !text-slate-600 hover:!text-blue-600 !transition-transform hover:!scale-110 !-right-10 !top-1/2 !-translate-y-1/2"
      >
        <svg width="15" height="15" pointerEvents="none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </Handle>
    </div>
  );
});
