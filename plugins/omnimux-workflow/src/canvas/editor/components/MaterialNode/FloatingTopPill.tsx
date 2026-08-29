/**
 * FloatingTopPill — 悬浮在材质卡片上方的胶囊操作栏。
 *
 * - 文本生成节点：[ ✎ 文本编辑 ] [ ❐ 复制 ] [ ≡+ 结构化拆分 ]
 * - 导入素材节点（空态）：[ ⇪ 导入素材 ]
 * - 生成类图片/视频/音频节点：不展示导入入口（避免与导入素材冲突）
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
import type { MaterialType, NodeKind } from '../../../types/materialNode';
import { useT } from '../../../i18n';
import { inverseScaleForZoom } from '../../utils/nodeVisualMath';

export interface FloatingTopPillProps {
  materialType: MaterialType;
  nodeKind?: NodeKind;
  selected?: boolean;
  onOpenResourcePicker?: () => void;
  onStartTextEdit?: () => void;
  onCopyText?: () => void;
  onSplitText?: () => void;
}

const FloatingTopPill: React.FC<FloatingTopPillProps> = ({
  materialType,
  nodeKind = 'generate',
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

  // 节点标题高度（20px）+ 标题与卡片间隙（4px）+ 工具栏与标题间隙（6px）
  const headerTotalOffset = 30;

  // 生成类媒体节点：不再提供单独导入入口
  if (nodeKind === 'generate' && materialType !== 'text') {
    return null;
  }

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
      ) : nodeKind === 'import' ? (
        <div className="wf-floating-top-pill__single">
          <button
            type="button"
            className="wf-floating-top-pill__btn"
            onClick={onOpenResourcePicker}
          >
            <Upload size={13} className="wf-floating-top-pill__icon" />
            <span>{t('pill.import')}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default memo(FloatingTopPill);
