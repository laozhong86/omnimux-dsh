/**
 * ReferenceSlots — 参考媒体槽位（容量指示 + 虚线/实线槽卡片 + 解绑）。
 *
 * 1. 顶部容量胶囊「参考图 x/y」（y = 当前模型 inputCapability.referenceImages.max，无则显示 --）；
 * 2. 超限时胶囊转警示态（var(--dsw-specific-danger) / alias），展示 model.compatibility.degradedWarning；
 * 3. 每个上游卡片右上角解绑 × 按钮（onUnbind prop 调用画布 mutation 断边）；
 * 4. 100% 消费 DSH --dsw-* token。
 */

import React, { memo, useMemo } from 'react';
import { Music, Paperclip, FileText, X } from 'lucide-react';
import { useUpstreamMedia, type UpstreamMediaItem } from '../../../hooks/useUpstreamMedia';
import { useT } from '../../../../i18n';
import type { CapabilityCatalog } from '../../../../../shared/api';
import type { ModelInputCapability } from '../../../../../shared/validation/modelCompatibilityEvaluator.ts';
import { calculateReferenceCapacity } from './referenceCapacity.ts';

export interface ReferenceSlotsProps {
  /** 本节点 id（入边 target） */
  nodeId: string;
  /** 上游媒体列表（可选，未传则从 useUpstreamMedia(nodeId) 获取） */
  upstreams?: UpstreamMediaItem[];
  /** 当前模型 ID */
  modelId?: string;
  /** 当前模型 Capability */
  modelCap?: ModelInputCapability;
  /** 最大参考图数（显式传入，优先于 modelCap/modelId 解析） */
  max?: number;
  /** Capability Catalog */
  catalog?: CapabilityCatalog | null;
  /** 解绑回调 */
  onUnbind?: (nodeId: string) => void;
}

const ReferenceSlots: React.FC<ReferenceSlotsProps> = ({
  nodeId,
  upstreams: propUpstreams,
  modelId,
  modelCap,
  max,
  catalog,
  onUnbind,
}) => {
  const t = useT();
  const hookUpstreams = useUpstreamMedia(nodeId);
  const upstreams = propUpstreams ?? hookUpstreams;

  const warningTemplate = t('model.compatibility.degradedWarning');

  const { isOver, capacityLabel, warningText } = useMemo(
    () =>
      calculateReferenceCapacity({
        upstreams,
        max,
        modelCap,
        modelId,
        catalog,
        warningTemplate,
      }),
    [upstreams, max, modelCap, modelId, catalog, warningTemplate],
  );

  return (
    <div className={`wf-ref-slot${isOver ? ' wf-ref-slot--over' : ''}`}>
      <div className="wf-ref-slot__header">
        <span className="wf-ref-slot__title">
          <Paperclip size={12} />
          {t('panel.refsTitle')}
        </span>
        <span
          className={`wf-ref-slot__capacity${isOver ? ' wf-ref-slot__capacity--over' : ''}`}
          title={warningText}
        >
          {capacityLabel}
        </span>
      </div>
      {isOver && warningText && (
        <div className="wf-ref-slot__warning" title={warningText}>
          {warningText}
        </div>
      )}
      {upstreams.length === 0 ? (
        <span className="wf-ref-slot__empty">{t('panel.refsEmpty')}</span>
      ) : (
        <div className="wf-ref-slot__list">
          {upstreams.map((upstream) => (
            <div key={upstream.nodeId} className="wf-ref-slot__card" title={upstream.label}>
              {onUnbind && (
                <button
                  type="button"
                  className="wf-ref-slot__unbind nodrag"
                  title={t('edge.disconnect')}
                  aria-label={t('edge.disconnect')}
                  onClick={(e) => {
                    e.stopPropagation();
                    onUnbind(upstream.nodeId);
                  }}
                >
                  <X size={10} />
                </button>
              )}
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
