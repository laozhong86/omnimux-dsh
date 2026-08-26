/**
 * NodeHeader — 移植自 Gxgen
 * apps/web/src/pages/CanvasEditor/components/MaterialNode/components/NodeHeader.tsx(176)。
 *
 * 节点标题显示在卡片外部顶端，双击编辑；useViewport 反向缩放使标题在
 * 画布缩放时保持固定视觉尺寸（scale(1/zoom)，计划 §9 坑#5）。
 * 差异：AppIcon → lucide-react 直接引用；fallback label 走 i18n 字典。
 */

import React, { memo, useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { useViewport } from '@xyflow/react';
import { FileText, ImagePlus, Video, Music, Table } from 'lucide-react';
import type { MaterialType } from '../../../types/materialNode';
import { useT } from '../../../i18n';
import { inverseScaleForZoom } from '../../utils/nodeVisualMath';

/** 标题行高度（用于计算反向缩放后的位置） */
const HEADER_HEIGHT = 24;

/** 节点名称最大长度（字符数） */
const MAX_LABEL_LENGTH = 30;

/** 素材类型 → lucide 图标（替换 M1-M5 的 emoji 表） */
const MATERIAL_TYPE_ICON_COMPONENTS: Record<MaterialType | 'table', React.ComponentType<{ size?: number }>> = {
  text: FileText,
  image: ImagePlus,
  video: Video,
  audio: Music,
  table: Table,
};

export interface NodeHeaderProps {
  /** 节点标签（用户可编辑） */
  label?: string;
  /** 素材类型 */
  materialType: MaterialType | 'table';
  /** 标签变化回调（接 updateNodeData） */
  onLabelChange?: (newLabel: string) => void;
  /** 头部右侧附加内容（执行状态徽标） */
  trailing?: React.ReactNode;
}

const NodeHeader: React.FC<NodeHeaderProps> = ({ label, materialType, onLabelChange, trailing }) => {
  const t = useT();
  const fallbackLabel = t(`node.type.${materialType}`);
  const displayLabel = label || fallbackLabel;
  const IconComponent = MATERIAL_TYPE_ICON_COMPONENTS[materialType];
  const { zoom } = useViewport();

  // 编辑状态
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(displayLabel);
  const inputRef = useRef<HTMLInputElement>(null);

  // 反向缩放：zoom=1 → scale=1, zoom=0.5 → scale=2
  const inverseScale = useMemo(() => inverseScaleForZoom(zoom), [zoom]);

  // 进入编辑模式时自动聚焦并选中文本
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // 同步外部 label 变化
  useEffect(() => {
    if (!isEditing) {
      setEditValue(displayLabel);
    }
  }, [displayLabel, isEditing]);

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsEditing(true);
      setEditValue(displayLabel);
    },
    [displayLabel],
  );

  const handleSubmit = useCallback(() => {
    const trimmedValue = editValue.trim();
    const finalValue = trimmedValue || fallbackLabel;
    setIsEditing(false);
    if (finalValue !== label && onLabelChange) {
      onLabelChange(finalValue);
    }
  }, [editValue, fallbackLabel, label, onLabelChange]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setEditValue(displayLabel);
  }, [displayLabel]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleCancel();
      }
    },
    [handleSubmit, handleCancel],
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_LABEL_LENGTH) {
      setEditValue(value);
    }
  }, []);

  // 视觉间距（屏幕像素），标题底部与卡片顶部的距离
  const visualGap = 4;

  return (
    <div
      className="wf-node-header"
      style={{
        // 标题高度是布局值（不随缩放变化），间距需转换到画布坐标系
        top: -(HEADER_HEIGHT + visualGap * inverseScale),
        height: HEADER_HEIGHT,
        transform: `scale(${inverseScale})`,
        transformOrigin: 'bottom left',
        // transform 缩放后仍能正确接收点击事件
        pointerEvents: 'auto',
      }}
    >
      <span className="wf-node-header__icon">
        <IconComponent size={14} />
      </span>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={handleInputChange}
          onBlur={handleSubmit}
          onKeyDown={handleKeyDown}
          className="wf-node-header__input nodrag"
          style={{ width: `${Math.max(60, editValue.length * 8 + 10)}px` }}
          maxLength={MAX_LABEL_LENGTH}
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className="wf-node-header__label"
          title={displayLabel.length > 20 ? displayLabel : t('node.renameHint')}
        >
          {displayLabel}
        </span>
      )}
      {trailing}
    </div>
  );
};

export default memo(NodeHeader);
