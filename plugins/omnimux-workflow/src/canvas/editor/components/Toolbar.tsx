/**
 * Simplified port of Gxgen Toolbar: palette-driven node creation + M2
 * undo/redo buttons. Palette entries come from the node registry
 * (extension point ①).
 */

import { memo } from 'react';
import type { MaterialType } from '../../types/materialNode';

export interface ToolbarProps {
  onAddNode: (type: MaterialType) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

const TOOLBAR_ITEMS: Array<{ type: MaterialType; label: string; icon: string }> = [
  { type: 'text', label: '文本', icon: '📝' },
  { type: 'image', label: '图片', icon: '🖼️' },
  { type: 'video', label: '视频', icon: '🎬' },
  { type: 'audio', label: '音频', icon: '🎵' },
];

const Toolbar: React.FC<ToolbarProps> = ({ onAddNode, onUndo, onRedo, canUndo = false, canRedo = false }) => {
  return (
    <div className="wf-canvas-toolbar">
      {TOOLBAR_ITEMS.map((item) => (
        <button
          key={item.type}
          className="wf-canvas-toolbar__item"
          onClick={() => onAddNode(item.type)}
          title={`添加${item.label}节点`}
        >
          <span className="wf-canvas-toolbar__icon">{item.icon}</span>
          <span className="wf-canvas-toolbar__label">{item.label}</span>
        </button>
      ))}
      {(onUndo || onRedo) && <div className="wf-canvas-toolbar__divider" />}
      {onUndo ? (
        <button
          className="wf-canvas-toolbar__item"
          onClick={() => onUndo()}
          disabled={!canUndo}
          title="撤销（⌘Z）"
        >
          <span className="wf-canvas-toolbar__icon">↶</span>
          <span className="wf-canvas-toolbar__label">撤销</span>
        </button>
      ) : null}
      {onRedo ? (
        <button
          className="wf-canvas-toolbar__item"
          onClick={() => onRedo()}
          disabled={!canRedo}
          title="重做（⇧⌘Z）"
        >
          <span className="wf-canvas-toolbar__icon">↷</span>
          <span className="wf-canvas-toolbar__label">重做</span>
        </button>
      ) : null}
    </div>
  );
};

export default memo(Toolbar);
