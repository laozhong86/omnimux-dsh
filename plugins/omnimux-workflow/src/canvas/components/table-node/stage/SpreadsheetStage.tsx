import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTableStore } from '../../../store/tableStore';
import { StageTopbar } from './StageTopbar';
import { VirtualDataGrid } from './VirtualDataGrid';
import { ModalColumnEditor } from './modals/ModalColumnEditor';

export const SpreadsheetStage: React.FC = () => {
  const { isStageOpen, closeStage, setActivePopover } = useTableStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeStage();
      }
    };
    if (isStageOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStageOpen, closeStage]);

  if (!isStageOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="wf-stage-overlay wf-canvas-root"
      onClick={() => setActivePopover(null)}
    >
      {/* 顶部工具条 */}
      <StageTopbar />

      {/* 数据表格区 */}
      <VirtualDataGrid />

      {/* 【添加列 / 编辑列】模态弹窗 */}
      <ModalColumnEditor />
    </div>,
    document.body,
  );
};
