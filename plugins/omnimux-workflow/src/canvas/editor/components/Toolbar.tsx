/**
 * Simplified port of Gxgen Toolbar: palette-driven node creation.
 * Palette entries come from the node registry (extension point ①).
 */

import { memo } from 'react';
import type { MaterialType } from '../../types/materialNode';

export interface ToolbarProps {
  onAddNode: (type: MaterialType) => void;
}

const TOOLBAR_ITEMS: Array<{ type: MaterialType; label: string; icon: string }> = [
  { type: 'text', label: '文本', icon: '📝' },
  { type: 'image', label: '图片', icon: '🖼️' },
  { type: 'video', label: '视频', icon: '🎬' },
  { type: 'audio', label: '音频', icon: '🎵' },
];

const Toolbar: React.FC<ToolbarProps> = ({ onAddNode }) => {
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
    </div>
  );
};

export default memo(Toolbar);
