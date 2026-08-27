import React from 'react'
import { displayStatus, statusText } from '../status-display.js'
import { RowActionMenu } from './RowActionMenu.jsx'

/**
 * 现代资产卡片组件 (AssetCard)
 * 严格对齐 spec-ui-client-v2.4.md: 112px 封面高度、六态中文 Pill、平台状态点。
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   record: Record<string, unknown>,
 *   isSelected: boolean,
 *   isBatchMode: boolean,
 *   onToggleSelect: (id: string) => void,
 *   onOpen: (record: Record<string, unknown>) => void,
 *   onEdit: (record: Record<string, unknown>) => void,
 *   onDelete: (record: Record<string, unknown>) => void,
 *   onRetry: (record: Record<string, unknown>) => void,
 * }} props
 */
export function AssetCard({
  t,
  record,
  isSelected,
  isBatchMode,
  onToggleSelect,
  onOpen,
  onEdit,
  onDelete,
  onRetry,
}) {
  const id = String(record.id)
  const status = displayStatus(record)
  const statusLabel = statusText(status)
  const isDraft = record.status === 'draft' || status === 'draft'
  const isVideo = record.type === 'video'
  const title = String(record.title || record.description || id)
  const dateStr = record.submitted_at || record.updated_at || record.created_at || '-'

  const subtasks = Array.isArray(record.subtasks) ? record.subtasks : []
  const platforms = isDraft
    ? ['draft']
    : subtasks.map((st) => ({ platform: st.platform || 'unknown', status: st.status }))

  const handleClick = () => {
    if (isBatchMode) {
      onToggleSelect(id)
    } else {
      if (isDraft) onEdit(record)
      else onOpen(record)
    }
  }

  return (
    <div
      className={`dsh-pub-asset-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {/* 112px 封面区 */}
      <div className="dsh-pub-card-cover">
        <div className="dsh-pub-card-thumb-icon">
          {isVideo ? '🎬 视频' : '🖼 图文'}
        </div>
        <span className="dsh-pub-card-type-badge">
          {isVideo ? t('type.video') : t('type.image')}
        </span>
        {isBatchMode ? (
          <div className="dsh-pub-card-checkbox" onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleSelect(id)}
              aria-label={`Select ${title}`}
            />
          </div>
        ) : null}
      </div>

      {/* 内容信息区 */}
      <div className="dsh-pub-card-body">
        <div className="dsh-pub-card-title-row">
          <span className="dsh-pub-card-title" title={title}>
            {title}
          </span>
          <div onClick={(e) => e.stopPropagation()}>
            <RowActionMenu
              t={t}
              record={record}
              onView={onOpen}
              onEdit={onEdit}
              onDelete={onDelete}
              onRetry={onRetry}
            />
          </div>
        </div>

        <div className="dsh-pub-card-meta">
          <span>{dateStr.slice(0, 10)}</span>
          <span>{subtasks.length > 0 ? `${subtasks.length} 渠道` : ''}</span>
        </div>

        {/* 底部平台与状态 Pill */}
        <div className="dsh-pub-card-footer">
          <div className="dsh-pub-platforms-cluster">
            {platforms.length > 0 ? (
              platforms.map((pObj, idx) => {
                const p = typeof pObj === 'string' ? pObj : pObj.platform
                const st = typeof pObj === 'string' ? 'draft' : pObj.status
                return (
                  <span key={idx} className={`dsh-pub-plat-tag ${p}`} title={`${p} (${st})`}>
                    {p === 'tiktok' ? '🎵' : p === 'xiaohongshu' || p === 'xhs' ? '小' : p === 'wechat_channels' || p === 'sph' ? '视' : p.slice(0, 1).toUpperCase()}
                    <span className={`dsh-pub-plat-dot ${st}`} />
                  </span>
                )
              })
            ) : (
              <span className="dsh-pub-muted">-</span>
            )}
          </div>
          <span className={`dsh-pub-status-pill ${status}`}>
            {statusLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
