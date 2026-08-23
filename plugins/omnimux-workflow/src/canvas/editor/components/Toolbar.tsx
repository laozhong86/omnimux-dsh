/**
 * Simplified port of Gxgen Toolbar: palette-driven node creation + M2
 * undo/redo buttons. Palette entries come from the node registry
 * (extension point ①).
 *
 * W1: emoji 图标替换为 lucide-react（T1.1 决策 ②）。
 *
 * 工具栏是 ReactFlow sibling（非岛内节点），xyflow 的 panOnDrag /
 * selectionOnDrag 会把落在 SPAN.wf-canvas-toolbar__icon 上的 pointer
 * 后续 mousedown 抢走，导致没有 click。根节点必须带 nodrag nopan，
 * 并在 pointer/mouse down 上 stopPropagation。
 */

import { memo } from 'react';
import { FileText, ImagePlus, Video, Music, Undo2, Redo2 } from 'lucide-react';
import type { MaterialType } from '../../types/materialNode';
import { useT } from '../../i18n';
import {
  preventToolbarAddContextMenu,
  stopToolbarNativeEvent,
} from './toolbarPointerGuard';

export interface ToolbarProps {
  onAddNode: (type: MaterialType) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

const TOOLBAR_ITEMS: Array<{
  type: MaterialType;
  Icon: React.ComponentType<{ size?: number }>;
}> = [
  { type: 'text', Icon: FileText },
  { type: 'image', Icon: ImagePlus },
  { type: 'video', Icon: Video },
  { type: 'audio', Icon: Music },
];

const Toolbar: React.FC<ToolbarProps> = ({ onAddNode, onUndo, onRedo, canUndo = false, canRedo = false }) => {
  const t = useT();
  return (
    <div
      className="wf-canvas-toolbar nodrag nopan"
      onPointerDown={stopToolbarNativeEvent}
      onMouseDown={stopToolbarNativeEvent}
    >
      {TOOLBAR_ITEMS.map((item) => (
        <button
          key={item.type}
          type="button"
          className="wf-canvas-toolbar__item"
          onClick={() => onAddNode(item.type)}
          onContextMenu={preventToolbarAddContextMenu}
          title={t(`toolbar.add.${item.type}`)}
        >
          <span className="wf-canvas-toolbar__icon">
            <item.Icon size={18} />
          </span>
          <span className="wf-canvas-toolbar__label">{t(`node.type.${item.type}`)}</span>
        </button>
      ))}
      {(onUndo || onRedo) && <div className="wf-canvas-toolbar__divider" />}
      {onUndo ? (
        <button
          type="button"
          className="wf-canvas-toolbar__item"
          onClick={() => onUndo()}
          disabled={!canUndo}
          title={t('toolbar.undoTitle')}
        >
          <span className="wf-canvas-toolbar__icon">
            <Undo2 size={18} />
          </span>
          <span className="wf-canvas-toolbar__label">{t('toolbar.undo')}</span>
        </button>
      ) : null}
      {onRedo ? (
        <button
          type="button"
          className="wf-canvas-toolbar__item"
          onClick={() => onRedo()}
          disabled={!canRedo}
          title={t('toolbar.redoTitle')}
        >
          <span className="wf-canvas-toolbar__icon">
            <Redo2 size={18} />
          </span>
          <span className="wf-canvas-toolbar__label">{t('toolbar.redo')}</span>
        </button>
      ) : null}
    </div>
  );
};

export default memo(Toolbar);
