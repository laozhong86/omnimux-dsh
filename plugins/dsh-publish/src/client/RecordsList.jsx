import { useState } from 'react'
import { IconArchiveOutline20, IconEditOutline16, IconRefreshOutline16, IconTrashOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { Button, ConfirmModal } from 'dsh-ui-kit'
import { deleteDraft, errorText, mediaContentUrl } from './api.js'
import { aggregateOf } from './capabilities.js'

/**
 * M1 列表：素材卡片（缩略图/类型图标、标题、聚合状态、账号覆盖数、时间）+
 * 三 tab 空态引导。草稿卡额外提供删除入口（ConfirmModal → Host delete）。
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   tab: 'records' | 'drafts' | 'reviewing',
 *   records: Array<Record<string, unknown>>,
 *   loading: boolean,
 *   onRefresh: () => void,
 *   onOpen: (record: Record<string, unknown>) => void,
 *   onEdit: (record: Record<string, unknown>) => void,
 *   onDeleted?: () => void,
 * }} props
 */
export function RecordsList({ t, tab, records, loading, onRefresh, onOpen, onEdit, onDeleted }) {
  const [busyId, setBusyId] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(null)

  const confirmDelete = async () => {
    const record = pending
    const id = String(record?.id || '')
    if (!id || busyId) return
    setBusyId(id)
    setError('')
    try {
      const result = await deleteDraft(id)
      if (!result.ok) {
        setError(t('records.deleteFailed', { reason: errorText(result.body, result.status) }))
        setBusyId('')
        return
      }
      setBusyId('')
      setPending(null)
      if (typeof onDeleted === 'function') onDeleted()
      else onRefresh()
    } catch (caught) {
      setError(t('records.deleteFailed', {
        reason: caught instanceof Error ? caught.message : String(caught),
      }))
      setBusyId('')
    }
  }

  if (loading) {
    return <div className="dsh-pub-muted">{t('loading')}</div>
  }
  if (!records || records.length === 0) {
    return <EmptyState t={t} tab={tab} />
  }
  const pendingTitle = String(pending?.title || pending?.description || pending?.id || '').slice(0, 40)
  return (
    <div>
      <div className="dsh-pub-list-head">
        <Button variant="ghost" size="sm" leadingIcon={<IconRefreshOutline16 />} onClick={onRefresh}>
          {t('records.refresh')}
        </Button>
      </div>
      {error ? (
        <div role="alert" className="dsh-pub-alert error">{error}</div>
      ) : null}
      <div className="dsh-pub-cards">
        {records.map((record) => (
          <RecordCard
            key={String(record.id)}
            t={t}
            record={record}
            busy={busyId === String(record.id)}
            onOpen={onOpen}
            onEdit={onEdit}
            onDelete={setPending}
          />
        ))}
      </div>
      <ConfirmModal
        open={Boolean(pending)}
        title={t('records.delete')}
        message={t('records.deleteConfirm', { title: pendingTitle })}
        confirmLabel={t('records.delete')}
        cancelLabel={t('close')}
        closeLabel={t('close')}
        confirmVariant="danger"
        confirmLoading={Boolean(busyId)}
        onConfirm={() => { void confirmDelete() }}
        onClose={() => { if (!busyId) setPending(null) }}
      />
    </div>
  )
}

/**
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   record: Record<string, unknown>,
 *   busy: boolean,
 *   onOpen: (record: Record<string, unknown>) => void,
 *   onEdit: (record: Record<string, unknown>) => void,
 *   onDelete: (record: Record<string, unknown>) => void,
 * }} props
 */
function RecordCard({ t, record, busy, onOpen, onEdit, onDelete }) {
  const aggregate = aggregateOf(record)
  const isDraft = String(record.status) === 'draft'
  const mediaIds = Array.isArray(record.media_ids) ? record.media_ids : []
  const summary = record.subtask_summary && typeof record.subtask_summary === 'object' ? record.subtask_summary : {}
  const accountCount = isDraft
    ? (Array.isArray(record.account_ids) ? record.account_ids.length : 0)
    : (Number(summary.total) || 0)
  return (
    <div
      className={busy ? 'dsh-pub-card busy' : 'dsh-pub-card'}
      onClick={() => { if (!busy) (isDraft ? onEdit : onOpen)(record) }}
    >
      <div className="dsh-pub-thumbs">
        {mediaIds.slice(0, 3).map((mediaId) => (
          <Thumb key={String(mediaId)} mediaId={String(mediaId)} />
        ))}
        {mediaIds.length === 0 ? <div className="dsh-pub-thumb xs"><IconEditOutline16 /></div> : null}
      </div>
      <div className="dsh-pub-card-top">
        <span className="dsh-pub-card-title">
          {String(record.title || record.description || '(untitled)').slice(0, 40)}
        </span>
        <StatusChip t={t} aggregate={aggregate} />
      </div>
      <div className="dsh-pub-meta">
        <span>{t('records.accounts', { count: accountCount })}</span>
        <span>{t('records.media', { count: mediaIds.length })}</span>
        <span className="end">{formatTime(String(record.updated_at || ''))}</span>
      </div>
      {isDraft ? null : (
        <div className="dsh-pub-sum">
          {t('agg.published')} {Number(summary.published) || 0}
          {' · '}
          {t('agg.publishing')} {Number(summary.reviewing) || 0}
          {' · '}
          {t('agg.failed')} {Number(summary.failed) || 0}
        </div>
      )}
      {record.error ? (
        <div className="dsh-pub-card-err">{String(record.error)}</div>
      ) : null}
      {isDraft ? (
        <div className="dsh-pub-card-foot">
          <Button
            type="button"
            size="xs"
            variant="danger"
            aria-label={t('records.delete')}
            disabled={busy}
            loading={busy}
            leadingIcon={<IconTrashOutline16 size={14} />}
            onClick={(event) => {
              event.stopPropagation()
              onDelete(record)
            }}
          >
            {t('records.delete')}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

/**
 * @param {{ mediaId: string }} props
 */
function Thumb({ mediaId }) {
  // 图片缩略图走 Host 只读内容路由；视频用类型图标（不抽帧）
  return (
    <img
      src={mediaContentUrl(mediaId)}
      alt=""
      loading="lazy"
      className="dsh-pub-thumb xs"
      onError={(event) => {
        const node = event.currentTarget
        node.style.display = 'none'
      }}
    />
  )
}

/**
 * @param {{ t: (key: string, vars?: Record<string, unknown>) => string, aggregate: string }} props
 */
function StatusChip({ t, aggregate }) {
  return (
    <span className="dsh-pub-chip" data-agg={aggregate}>
      {t(`agg.${aggregate}`)}
    </span>
  )
}

/**
 * @param {{ t: (key: string, vars?: Record<string, unknown>) => string, tab: string }} props
 */
function EmptyState({ t, tab }) {
  const title = t(`records.empty.${tab === 'records' ? 'records' : tab}`)
  const hint = t(`records.empty.${tab === 'records' ? 'records' : tab}.hint`)
  return (
    <div className="dsh-pub-empty">
      <div className="dsh-pub-empty-icon"><IconArchiveOutline20 /></div>
      <div className="dsh-pub-empty-title">{title}</div>
      <div className="dsh-pub-empty-hint">{hint}</div>
    </div>
  )
}

/** @param {string} iso */
function formatTime(iso) {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}
