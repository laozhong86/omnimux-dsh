/**
 * ReferenceSlots — W2 T2.5，参考媒体槽位（虚线占位 → 实线槽卡片）。
 *
 * 从 canvasStore 读入边（edge.target === 本节点）的上游节点，解析其
 * mediaUrl/mediaAssets 渲 32px 缩略图（image→img、video→video、audio→图标）；
 * 无上游连线时显示占位文案。不接上传（计划 T2.5 明确裁剪）。
 */

import React, { memo } from 'react';
import { Music, Paperclip, FileText, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { useUpstreamMedia, type UpstreamMediaItem } from '../../../hooks/useUpstreamMedia';
import { useT } from '../../../../i18n';

export interface ReferenceSlotsProps {
  /** 本节点 id（入边 target） */
  nodeId: string;
}

const ReferenceSlots: React.FC<ReferenceSlotsProps> = ({ nodeId }) => {
  const t = useT();
  const upstreams = useUpstreamMedia(nodeId);

  return (
    <div className="wf-ref-slot">
      <span className="wf-ref-slot__title">
        <Paperclip size={12} />
        {t('panel.refsTitle')}
      </span>
      {upstreams.length === 0 ? (
        <span className="wf-ref-slot__empty">{t('panel.refsEmpty')}</span>
      ) : (
        <div className="wf-ref-slot__list">
          {upstreams.map((upstream) => (
            <div key={upstream.nodeId} className="wf-ref-slot__card" title={upstream.label}>
              {upstream.url && upstream.materialType === 'image' ? (
                <img className="wf-ref-slot__thumb" src={upstream.url} alt={upstream.label} />
              ) : upstream.url && upstream.materialType === 'video' ? (
                <video className="wf-ref-slot__thumb" src={upstream.url} muted />
              ) : upstream.materialType === 'audio' ? (
                <span className="wf-ref-slot__thumb wf-ref-slot__thumb--icon">
                  <Music size={14} />
                </span>
              ) : upstream.materialType === 'text' ? (
                <span className="wf-ref-slot__thumb wf-ref-slot__thumb--icon">
                  <FileText size={14} />
                </span>
              ) : (
                <span className="wf-ref-slot__thumb wf-ref-slot__thumb--pending" />
              )}
              <span className="wf-ref-slot__name">{upstream.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ReferenceSlots);
