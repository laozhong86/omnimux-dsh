/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/components/Toolbar.tsx`.
 *
 * 左侧添加节点工具栏：保留入口形态，裁掉素材库/上传入口。
 */

import { memo } from 'react';
import type { MaterialType } from '@/types/materialNode';

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
    <div className="canvas-toolbar">
      {TOOLBAR_ITEMS.map((item) => (
        <button
          key={item.type}
          className="canvas-toolbar__item"
          onClick={() => onAddNode(item.type)}
          title={`添加${item.label}节点`}
        >
          <span className="canvas-toolbar__icon">{item.icon}</span>
          <span className="canvas-toolbar__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default memo(Toolbar);
