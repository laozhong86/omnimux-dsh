/**
 * 画布资源面板：搜索 + CustomSelect 分类 + 网格/列表 + 已添加标记。
 */

import React, { useMemo, useState } from 'react';
import { Check, LayoutGrid, List, Search } from 'lucide-react';
import { CustomSelect } from '../../../ui';
import { useT } from '../../../i18n';
import type { MaterialType } from '../../../types/materialNode';
import {
  filterCanvasResources,
  type CanvasResourceItem,
  type ResourceTypeFilter,
  type ResourcePickerView,
} from '../../utils/resourcePickerPolicy.ts';

export interface CanvasResourcePaneProps {
  items: CanvasResourceItem[];
  selectedIds: string[];
  onToggle: (nodeId: string, alreadyConnected: boolean) => void;
}

function typeLabelKey(type: MaterialType): string {
  switch (type) {
    case 'image':
      return 'node.type.image';
    case 'video':
      return 'node.type.video';
    case 'audio':
      return 'node.type.audio';
    default:
      return 'node.type.text';
  }
}

const CanvasResourcePane: React.FC<CanvasResourcePaneProps> = ({
  items,
  selectedIds,
  onToggle,
}) => {
  const t = useT();
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<ResourceTypeFilter>('all');
  const [view, setView] = useState<ResourcePickerView>('grid');

  const filterOptions = useMemo(
    () => [
      { value: 'all' as const, label: t('picker.filter.all') },
      { value: 'image' as const, label: t('picker.filter.image') },
      { value: 'video' as const, label: t('picker.filter.video') },
      { value: 'audio' as const, label: t('picker.filter.audio') },
    ],
    [t],
  );

  const visible = useMemo(
    () => filterCanvasResources(items, query, typeFilter),
    [items, query, typeFilter],
  );

  const emptyKey = items.length === 0 ? 'picker.empty' : 'picker.emptyFilter';

  return (
    <div className="wf-picker-pane">
      <div className="wf-picker-toolbar">
        <label className="wf-picker-search">
          <Search size={14} className="wf-picker-search__icon" />
          <input
            type="text"
            className="wf-picker-search__input"
            value={query}
            placeholder={t('picker.search')}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <CustomSelect
          className="wf-picker-filter"
          variant="standard"
          value={typeFilter}
          options={filterOptions}
          onChange={(value) => setTypeFilter(value)}
        />
        <div className="wf-picker-view-toggle" role="group" aria-label={t('picker.view.grid')}>
          <button
            type="button"
            className={`wf-picker-view-btn ${view === 'grid' ? 'wf-picker-view-btn--active' : ''}`}
            onClick={() => setView('grid')}
            title={t('picker.view.grid')}
            aria-pressed={view === 'grid'}
          >
            <LayoutGrid size={14} />
          </button>
          <button
            type="button"
            className={`wf-picker-view-btn ${view === 'list' ? 'wf-picker-view-btn--active' : ''}`}
            onClick={() => setView('list')}
            title={t('picker.view.list')}
            aria-pressed={view === 'list'}
          >
            <List size={14} />
          </button>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="wf-picker-empty">{t(emptyKey)}</div>
      ) : view === 'grid' ? (
        <div className="wf-picker-grid">
          {visible.map((item) => {
            const selected = selectedIds.includes(item.nodeId);
            return (
              <button
                key={item.nodeId}
                type="button"
                className={`wf-picker-card ${selected ? 'wf-picker-card--selected' : ''} ${
                  item.alreadyConnected ? 'wf-picker-card--added' : ''
                }`}
                onClick={() => onToggle(item.nodeId, item.alreadyConnected)}
                disabled={item.alreadyConnected}
                title={item.title}
              >
                <div className="wf-picker-card__thumb">
                  {item.previewUrl && item.materialType === 'image' ? (
                    <img src={item.previewUrl} alt="" className="wf-picker-card__media" />
                  ) : item.previewUrl && item.materialType === 'video' ? (
                    <video src={item.previewUrl} className="wf-picker-card__media" muted />
                  ) : (
                    <span className={`wf-picker-card__fallback wf-picker-card__fallback--${item.materialType}`}>
                      {t(typeLabelKey(item.materialType))}
                    </span>
                  )}
                  {item.alreadyConnected ? (
                    <span className="wf-picker-added-badge">
                      <Check size={11} />
                      {t('picker.added')}
                    </span>
                  ) : (
                    <span className={`wf-picker-check ${selected ? 'wf-picker-check--on' : ''}`}>
                      {selected ? <Check size={11} /> : null}
                    </span>
                  )}
                </div>
                <div className="wf-picker-card__meta">
                  <span className="wf-picker-card__name">{item.title}</span>
                  <span className="wf-picker-type-tag">{t(typeLabelKey(item.materialType))}</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="wf-picker-list">
          {visible.map((item) => {
            const selected = selectedIds.includes(item.nodeId);
            return (
              <button
                key={item.nodeId}
                type="button"
                className={`wf-picker-row ${selected ? 'wf-picker-row--selected' : ''} ${
                  item.alreadyConnected ? 'wf-picker-row--added' : ''
                }`}
                onClick={() => onToggle(item.nodeId, item.alreadyConnected)}
                disabled={item.alreadyConnected}
              >
                <div className="wf-picker-row__thumb">
                  {item.previewUrl && item.materialType === 'image' ? (
                    <img src={item.previewUrl} alt="" className="wf-picker-card__media" />
                  ) : item.previewUrl && item.materialType === 'video' ? (
                    <video src={item.previewUrl} className="wf-picker-card__media" muted />
                  ) : (
                    <span className={`wf-picker-card__fallback wf-picker-card__fallback--${item.materialType}`}>
                      {t(typeLabelKey(item.materialType))}
                    </span>
                  )}
                </div>
                <div className="wf-picker-row__body">
                  <span className="wf-picker-card__name">{item.title}</span>
                  <span className="wf-picker-row__sub">
                    {item.subtitle || item.nodeId}
                    {' · '}
                    {t(typeLabelKey(item.materialType))}
                  </span>
                </div>
                {item.alreadyConnected ? (
                  <span className="wf-picker-added-badge wf-picker-added-badge--inline">
                    <Check size={11} />
                    {t('picker.added')}
                  </span>
                ) : (
                  <span className={`wf-picker-check ${selected ? 'wf-picker-check--on' : ''}`}>
                    {selected ? <Check size={11} /> : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CanvasResourcePane;
