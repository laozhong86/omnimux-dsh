/**
 * FloatingTopPill — 悬浮在材质卡片上方的胶囊操作栏。
 *
 * 视觉对齐设计参考：
 * - 图片/视频/音频：[ ⇪ 导入图片/视频/音频 ] 胶囊，点击打开选择资源弹窗（默认本地上传 Tab）。
 * - 文本：[ ✎ 文本编辑 ] [ ❐ 复制 ] [ ≡+ 结构化拆分 ] 三联操作胶囊。
 *
 * 交互：反向缩放保持恒定像素，防止画布缩放时过小或失真。
 */

import React, { memo, useCallback, useMemo } from 'react';
import { useViewport } from '@xyflow/react';
import {
  Upload,
  FileEdit,
  Copy,
  Layers,
  Check,
} from 'lucide-react';
import type { MaterialType } from '../../../types/materialNode';
import { useT } from '../../../i18n';
import { inverseScaleForZoom } from '../../utils/nodeVisualMath';

export interface FloatingTopPillProps {
  materialType: MaterialType;
  selected?: boolean;
  onOpenResourcePicker?: () => void;
  onStartTextEdit?: () => void;
  onCopyText?: () => void;
  onSplitText?: () => void;
}

const FloatingTopPill: React.FC<FloatingTopPillProps> = ({
  materialType,
  selected,
  onOpenResourcePicker,
  onStartTextEdit,
  onCopyText,
  onSplitText,
}) => {
  const t = useT();
  const { zoom } = useViewport();
  const [copied, setCopied] = React.useState(false);

  const inverseScale = useMemo(() => inverseScaleForZoom(zoom), [zoom]);

  const handleCopy = useCallback(() => {
    if (onCopyText) {
      onCopyText();
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }, [onCopyText]);

  const importLabel = useMemo(() => {
    switch (materialType) {
      case 'image':
        return t('pill.importImage');
      case 'video':
        return t('pill.importVideo');
      case 'audio':
        return t('pill.importAudio');
      default:
        return t('pill.import');
    }
  }, [materialType, t]);

  // 节点标题高度（20px）+ 标题与卡片间隙（4px）+ 工具栏与标题间隙（6px）
  const headerTotalOffset = 30;

  return (
    <div
      className="wf-floating-top-pill nodrag nowheel"
      style={{
        top: -(headerTotalOffset * inverseScale),
        transform: `translate(-50%, -100%) scale(${inverseScale})`,
        transformOrigin: 'bottom center',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {materialType === 'text' ? (
        <div className="wf-floating-top-pill__group">
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={onStartTextEdit}
            title={t('pill.textEdit')}
          >
            <FileEdit size={13} className="wf-floating-top-pill__icon" />
            <span>{t('pill.textEdit')}</span>
          </button>
          <span className="wf-floating-top-pill__divider" />
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={handleCopy}
            title={t('pill.copy')}
          >
            {copied ? (
              <Check size={13} className="wf-floating-top-pill__icon wf-floating-top-pill__icon--success" />
            ) : (
              <Copy size={13} className="wf-floating-top-pill__icon" />
            )}
          </button>
          <span className="wf-floating-top-pill__divider" />
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={onSplitText}
            title={t('pill.structureSplit')}
          >
            <Layers size={13} className="wf-floating-top-pill__icon" />
          </button>
        </div>
      ) : (
        <div className="wf-floating-top-pill__single">
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={onOpenResourcePicker}
          >
            <Upload size={13} className="wf-floating-top-pill__icon" />
            <span>{importLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(FloatingTopPill);
