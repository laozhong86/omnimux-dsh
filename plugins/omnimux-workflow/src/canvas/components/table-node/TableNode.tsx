import React, { memo, useState, useCallback, useMemo } from 'react';
import type { NodeProps } from '@xyflow/react';
import {
  Table,
  Plus,
  Maximize2,
  FileSpreadsheet,
  MessageSquarePlus,
} from 'lucide-react';
import { useTableStore } from '../../store/tableStore.ts';
import { useIsMultiSelected } from '../../store/canvasStore.ts';
import NodeHeader from '../../editor/components/MaterialNode/NodeHeader.tsx';
import CanvasNodeHandle from '../../editor/components/CanvasNodeHandle.tsx';
import FloatingTopPill, { type FloatingPillAction } from '../../editor/components/FloatingTopPill.tsx';
import { useAddToConversation } from '../../hooks/useAddToConversation';
import { useT } from '../../i18n';
import {
  buildConversationPayloadFromNode,
  hasNodeMaterial,
  pillMaxWidthForNode,
  shouldShowNodeToolbar,
} from '../../editor/utils/nodeToolbarLogic.ts';

const DEFAULT_TABLE_NODE_WIDTH = 380;
const DEFAULT_TABLE_NODE_HEIGHT = 280;

export const TableNode: React.FC<NodeProps> = memo(({ id, data, selected }) => {
  const { document, openStage, addRow } = useTableStore();
  const [isHovered, setIsHovered] = useState(false);

  const rows = document.rows || [];
  const firstCol = document.columns[0];
  const nodeTitle = (data as any)?.label || document.title || '表格';
  const tableRelPath = (data as any)?.tablePath || (data as any)?.path || `.hilo/tables/${id}.htable`;

  const isMultiSelected = useIsMultiSelected();
  const t = useT();
  const hasMaterial = hasNodeMaterial({ nodeType: 'table', tableRowCount: rows.length });
  const showFloatingPill = shouldShowNodeToolbar({
    hasMaterial,
    hovered: isHovered,
    selected,
    isMultiSelected,
  });

  const { addToConversation } = useAddToConversation();

  const handleAddToConversation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const payload = buildConversationPayloadFromNode({
      nodeType: 'table',
      nodeId: id,
      label: nodeTitle,
      tablePath: tableRelPath,
    });
    if (payload) addToConversation(payload);
  }, [addToConversation, id, nodeTitle, tableRelPath]);

  const pillActions: FloatingPillAction[] = useMemo(() => [
    {
      key: 'add-to-conversation',
      icon: MessageSquarePlus,
      section: 'secondary',
      title: t('pill.addToConversation'),
      onClick: handleAddToConversation,
    },
    {
      key: 'fullscreen-edit',
      label: t('pill.fullscreen'),
      icon: Maximize2,
      section: 'primary',
      title: t('pill.fullscreen'),
      onClick: (e) => {
        e.stopPropagation();
        openStage();
      },
    },
  ], [handleAddToConversation, openStage, t]);

  return (
    <div
      className={`wf-material-node ${selected ? 'wf-material-node--selected' : ''}`}
      style={{ width: DEFAULT_TABLE_NODE_WIDTH }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 顶部悬浮胶囊栏 (100% 复用全仓通用 FloatingTopPill 标准组件) */}
      {showFloatingPill && (
        <FloatingTopPill actions={pillActions} maxWidth={pillMaxWidthForNode(DEFAULT_TABLE_NODE_WIDTH)} />
      )}

      {/* 左侧输入 Handle */}
      <CanvasNodeHandle side="left" nodeHovered={isHovered} />

      {/* 统一节点标题栏 */}
      <NodeHeader
        label={nodeTitle}
        materialType="table"
      />

      {/* 统一材质主卡片 */}
      <div
        className="wf-material-node__card"
        style={{
          width: DEFAULT_TABLE_NODE_WIDTH,
          height: DEFAULT_TABLE_NODE_HEIGHT,
        }}
        onDoubleClick={() => openStage()}
      >
        {/* 四角缩放定位点 (统一风格) */}
        {selected && (
          <>
            <span className="wf-node-corner wf-node-corner--tl" />
            <span className="wf-node-corner wf-node-corner--tr" />
            <span className="wf-node-corner wf-node-corner--bl" />
            <span className="wf-node-corner wf-node-corner--br" />
          </>
        )}

        {/* 空态或内容展示 */}
        {rows.length === 0 ? (
          <div className="wf-node-empty wf-node-empty--text" style={{ padding: '24px 16px', height: '100%', boxSizing: 'border-box' }}>
            <div className="wf-node-empty__icon-box">
              <Table size={32} strokeWidth={1.75} className="wf-node-empty__icon" />
            </div>
            <div className="wf-node-empty__try-label">试试:</div>
            <div
              className="wf-node-empty__actions nodrag"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="wf-node-empty__pill-btn"
                onClick={() => addRow()}
              >
                <Plus size={14} className="wf-node-empty__pill-icon" />
                <span>添加首行数据</span>
              </button>
              <button
                type="button"
                className="wf-node-empty__pill-btn"
                onClick={() => openStage()}
              >
                <Maximize2 size={13} className="wf-node-empty__pill-icon" />
                <span>双击全屏编辑表格</span>
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* 卡片表头 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderBottom: '1px solid var(--wb-border)',
                background: 'color-mix(in srgb, var(--wb-surface) 60%, transparent)',
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--wb-text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <FileSpreadsheet size={14} />
                <span>{firstCol?.title || '文本'}</span>
              </div>
              <span style={{ fontSize: 11, color: 'var(--wb-text-muted)', fontFamily: 'monospace' }}>
                共 {rows.length} 行
              </span>
            </div>

            {/* 记录预览列表：通过 firstCol.id 从字典提取预览值 */}
            <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 6, overflowY: 'auto' }}>
              {rows.slice(0, 3).map((r, idx) => {
                const cellVal = firstCol ? r.cells[firstCol.id] : undefined;
                const previewText =
                  typeof cellVal === 'string' && cellVal
                    ? cellVal
                    : typeof cellVal === 'number'
                    ? String(cellVal)
                    : Array.isArray(cellVal) && cellVal.length > 0
                    ? `📎 附件 (${cellVal.length})`
                    : '（空记录）';

                return (
                  <div
                    key={r.id || idx}
                    style={{
                      padding: '8px 12px',
                      background: 'color-mix(in srgb, var(--wb-surface) 40%, transparent)',
                      border: '1px solid var(--wb-border)',
                      borderRadius: 8,
                      fontSize: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: 'var(--wb-text-primary)',
                    }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 280 }}>
                      {previewText}
                    </span>
                    <span style={{ color: 'var(--wb-text-muted)', fontFamily: 'monospace', fontSize: 11 }}>
                      #{idx + 1}
                    </span>
                  </div>
                );
              })}

              {rows.length > 3 && (
                <div style={{ fontSize: 11, color: 'var(--wb-text-muted)', textAlign: 'center', marginTop: 2 }}>
                  ... 更多记录双击卡片查看
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 右侧输出 Handle (统一端口，支持 DAG 批处理衍生) */}
      <CanvasNodeHandle side="right" nodeHovered={isHovered} />
    </div>
  );
});
