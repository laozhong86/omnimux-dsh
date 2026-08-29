import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Calendar, HardDrive, Maximize2, Tag } from 'lucide-react';
import type { AssetItem, CanvasNodeItem } from '../types';

interface HoverInspectorProps {
  isOpen: boolean;
  x: number;
  y: number;
  item: AssetItem | CanvasNodeItem | null;
}

export const HoverInspector: React.FC<HoverInspectorProps> = ({
  isOpen,
  x,
  y,
  item,
}) => {
  const inspectorRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !item) return null;

  const cardWidth = 260;
  const cardHeight = 290;

  // Place inspector to the right of cursor by default, flip left if overflowing
  let left = x + 15;
  if (left + cardWidth > window.innerWidth - 10) {
    left = x - cardWidth - 15;
  }
  let top = y - 20;
  if (top + cardHeight > window.innerHeight - 10) {
    top = window.innerHeight - cardHeight - 10;
  }
  if (top < 10) top = 10;

  const node = 'nodeKind' in item ? (item as CanvasNodeItem) : null;
  const asset = node ? null : (item as AssetItem);

  const formattedDate = item.updatedAt
    ? new Date(item.updatedAt).toLocaleDateString('zh-CN', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '2026-08-28 14:30';

  return createPortal(
    <div
      ref={inspectorRef}
      className="wf-hover-inspector-portal nodrag nopan"
      style={{
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        width: `${cardWidth}px`,
        zIndex: 10001,
        pointerEvents: 'none',
      }}
    >
      {/* 缩略图大图展示 */}
      <div className="wf-hover-inspector-preview">
        {item.previewUrl ? (
          <img src={item.previewUrl} alt={item.name} className="wf-hover-inspector-img" />
        ) : (
          <div className="wf-hover-inspector-placeholder">
            <Sparkles size={28} className="wf-hover-inspector-placeholder-icon" />
          </div>
        )}
        {asset?.duration && (
          <span className="wf-hover-inspector-duration">{asset.duration}</span>
        )}
      </div>

      {/* 详细属性信息 */}
      <div className="wf-hover-inspector-content">
        <div className="wf-hover-inspector-title" title={item.name}>
          {item.name}
          {node?.nodeKind ? (
            <span className={`wf-node-kind-badge wf-node-kind-badge--${node.nodeKind}`}>
              {node.nodeKind === 'import' ? '导入' : '生成'}
            </span>
          ) : null}
        </div>

        <div className="wf-hover-inspector-grid">
          <div className="wf-hover-inspector-row">
            <span className="wf-hover-inspector-label">
              <Calendar size={12} /> 更新时间
            </span>
            <span className="wf-hover-inspector-value">{formattedDate}</span>
          </div>

          {asset?.resolution && (
            <div className="wf-hover-inspector-row">
              <span className="wf-hover-inspector-label">
                <Maximize2 size={12} /> 分辨率
              </span>
              <span className="wf-hover-inspector-value">{asset.resolution}</span>
            </div>
          )}

          {asset?.size && (
            <div className="wf-hover-inspector-row">
              <span className="wf-hover-inspector-label">
                <HardDrive size={12} /> 文件大小
              </span>
              <span className="wf-hover-inspector-value">{asset.size}</span>
            </div>
          )}

          {node?.nodeKind === 'import' && node.real_path ? (
            <div className="wf-hover-inspector-row wf-hover-inspector-row--full">
              <span className="wf-hover-inspector-label">本地路径</span>
              <span className="wf-hover-inspector-value wf-hover-inspector-value--prompt" title={node.real_path}>
                {node.real_path}
              </span>
            </div>
          ) : null}
          {node?.nodeKind !== 'import' && node?.prompt ? (
            <div className="wf-hover-inspector-row wf-hover-inspector-row--full">
              <span className="wf-hover-inspector-label">Prompt</span>
              <span className="wf-hover-inspector-value wf-hover-inspector-value--prompt">
                {node.prompt}
              </span>
            </div>
          ) : null}
        </div>

        {asset?.tags && asset.tags.length > 0 && (
          <div className="wf-hover-inspector-tags">
            {asset.tags.map((t, idx) => (
              <span key={idx} className="wf-hover-inspector-tag">
                <Tag size={10} /> {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
