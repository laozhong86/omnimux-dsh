import React from 'react'
import { TABLE_COLUMNS, formatMetric } from '../metrics-display.js'
import { displayStatus, statusText } from '../status-display.js'
import { RowActionMenu } from './RowActionMenu.jsx'

/**
 * 14 列完整数据表格视图 (RecordsTable)
 * 依据 spec-ui-client-v2.4.md 规范定义。
 * 列宽/对齐全部走 CSS 类（dsh-pub-col-*），JSX 内零业务内联样式（UI02）。
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   records: Array<Record<string, unknown>>,
 *   selectedIds: Set<string>,
 *   onToggleSelect: (id: string) => void,
 *   onToggleAll: (allSelected: boolean) => void,
 *   onView: (record: Record<string, unknown>) => void,
 *   onEdit: (record: Record<string, unknown>) => void,
 *   onDelete: (record: Record<string, unknown>) => void,
 *   onRetry: (record: Record<string, unknown>) => void,
 *   sortField: string,
 *   sortOrder: 'asc' | 'desc',
 *   onSort: (field: string) => void,
 * }} props
 */
export function RecordsTable({
  t,
  records,
  selectedIds,
  onToggleSelect,
  onToggleAll,
  onView,
  onEdit,
  onDelete,
  onRetry,
  sortField,
  sortOrder,
  onSort,
}) {
  const allSelected = records.length > 0 && records.every((r) => selectedIds.has(String(r.id)))

  if (!records || records.length === 0) {
    return (
      <div className="dsh-pub-table-wrap">
        <table className="dsh-pub-table">
          <thead>
            <tr>
              <th className="dsh-pub-col-check" />
              <th className="dsh-pub-col-content">Content</th>
              <th className="dsh-pub-col-platforms">Platforms</th>
              {TABLE_COLUMNS.map((col) => (
                <th key={col.key} style={{ '--pub-min-w': col.minWidth ? `${col.minWidth}px` : undefined }}>
                  {col.label}
                </th>
              ))}
              <th className="dsh-pub-col-menu" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={14} className="dsh-pub-table-empty">
                {t('records.empty.all')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="dsh-pub-table-wrap">
      <table className="dsh-pub-table">
        <thead>
          <tr>
            <th className="dsh-pub-col-check">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(e) => onToggleAll(e.target.checked)}
                aria-label={t('action.selectAll')}
              />
            </th>
            <th className="dsh-pub-col-content">Content</th>
            <th className="dsh-pub-col-platforms">Platforms</th>
            <th
              className="dsh-pub-col-sort dsh-pub-col-date"
              onClick={() => onSort('date')}
            >
              Date {sortField === 'date' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th
              className="dsh-pub-col-sort dsh-pub-col-status"
              onClick={() => onSort('status')}
            >
              Status {sortField === 'status' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            {/* 8 维指标表头 (包含 14px SVG 图标 + 短名，锁定 56px 宽) */}
            {TABLE_COLUMNS.slice(5, 13).map((col) => {
              const IconComp = col.icon
              return (
                <th
                  key={col.key}
                  className="dsh-pub-th-metric"
                  title={col.label}
                >
                  <div className="dsh-pub-th-metric-inner">
                    {IconComp ? <IconComp /> : null}
                    <span>{col.label}</span>
                  </div>
                </th>
              )
            })}
            <th className="dsh-pub-col-menu" />
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            const id = String(record.id)
            const isSelected = selectedIds.has(id)
            const status = displayStatus(record)
            const statusLabel = statusText(status)
            const isDraft = record.status === 'draft' || status === 'draft'
            const title = String(record.title || record.description || id)
            const isVideo = record.type === 'video'
            const dateStr = record.submitted_at || record.updated_at || record.created_at || '-'

            const subtasks = Array.isArray(record.subtasks) ? record.subtasks : []
            const platforms = isDraft
              ? ['draft']
              : subtasks.map((st) => st.platform || 'unknown')

            return (
              <tr
                key={id}
                className={isSelected ? 'dsh-pub-row selected' : 'dsh-pub-row'}
                onClick={() => (isDraft ? onEdit(record) : onView(record))}
              >
                <td className="dsh-pub-td-center" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleSelect(id)}
                    aria-label={`Select ${title}`}
                  />
                </td>
                <td>
                  <div className="dsh-pub-td-content">
                    <div className="dsh-pub-td-thumb">
                      {isVideo ? (
                        <span className="dsh-pub-type-icon">🎬</span>
                      ) : (
                        <span className="dsh-pub-type-icon">🖼</span>
                      )}
                    </div>
                    <div className="dsh-pub-td-title-wrap">
                      <span className="dsh-pub-td-title" title={title}>
                        {title}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="dsh-pub-platforms-cluster">
                    {platforms.length > 0 ? (
                      platforms.map((p, idx) => (
                        <span key={idx} className={`dsh-pub-plat-tag ${p}`} title={p}>
                          {p === 'tiktok' ? '🎵' : p === 'xiaohongshu' || p === 'xhs' ? '小' : p === 'wechat_channels' || p === 'sph' ? '视' : p.slice(0, 1).toUpperCase()}
                        </span>
                      ))
                    ) : (
                      <span className="dsh-pub-muted">-</span>
                    )}
                  </div>
                </td>
                <td className="dsh-pub-td-datetime">{dateStr.slice(0, 16).replace('T', ' ')}</td>
                <td>
                  <span className={`dsh-pub-status-pill ${status}`}>
                    {statusLabel}
                  </span>
                </td>
                {/* 8 维指标单元格：全部使用 formatMetric 渲染为诚实空槽 '-' */}
                <td className="dsh-pub-td-metric">{formatMetric(record.likes)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.comments)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.shares)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.saves)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.clicks)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.views)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.impressions)}</td>
                <td className="dsh-pub-td-metric">{formatMetric(record.reach)}</td>
                <td className="dsh-pub-td-center" onClick={(e) => e.stopPropagation()}>
                  <RowActionMenu
                    t={t}
                    record={record}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onRetry={onRetry}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
