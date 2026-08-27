import { useCallback, useEffect, useState } from 'react'
import { IconChevronLeftOutline14, IconRefreshOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { Button } from 'dsh-ui-kit'
import { recordDetail, refreshRecord, retryTask } from './api.js'

/**
 * A6/M8 记录详情：per-account 子任务状态展开 + 手动刷新（POST /records/refresh）
 * + 单账号重试（POST /tasks/retry，复用已上传媒体）。
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   recordId: string,
 *   onBack: () => void,
 *   onChanged: () => void,
 * }} props
 */
export function RecordDetail({ t, recordId, onBack, onChanged }) {
  const [record, setRecord] = useState(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')

  const load = useCallback(() => {
    setBusy('load')
    return recordDetail(recordId).then((result) => {
      if (result.ok && result.body && result.body.record) {
        setRecord(result.body.record)
        setError('')
      } else {
        setError(String(result.body?.error || `HTTP ${result.status}`))
      }
      setBusy('')
      return true
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      setBusy('')
      return false
    })
  }, [recordId])

  useEffect(() => { void load() }, [load])

  /** 手动刷新：现拉 hub 平台状态再返回本地账本（与 publish_get_record refresh:true 同源）。 */
  const refresh = useCallback(() => {
    setBusy('refresh')
    return refreshRecord(recordId).then((result) => {
      if (result.ok && result.body && result.body.record) {
        setRecord(result.body.record)
        const syncErrors = Array.isArray(result.body.sync_errors) ? result.body.sync_errors : []
        setError(syncErrors.length > 0 ? t('detail.syncError', { reason: syncErrors[0].error }) : '')
      } else {
        setError(String(result.body?.error || `HTTP ${result.status}`))
      }
      setBusy('')
      onChanged()
      return true
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      setBusy('')
      return false
    })
  }, [recordId, t, onChanged])

  /** 单账号重试：失败子任务回 submitted（新 post_id）。 */
  const retry = useCallback((taskId) => {
    setBusy(taskId)
    return retryTask(taskId).then((result) => {
      if (result.ok && result.body && result.body.record) {
        setRecord(result.body.record)
        setError('')
      } else {
        setError(String(result.body?.error || `HTTP ${result.status}`))
      }
      setBusy('')
      onChanged()
      return true
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      setBusy('')
      return false
    })
  }, [onChanged])

  if (!record) {
    return (
      <div>
        <Button variant="ghost" size="sm" leadingIcon={<IconChevronLeftOutline14 />} onClick={onBack}>
          {t('detail.back')}
        </Button>
        <div className="dsh-pub-muted">{error || t('loading')}</div>
      </div>
    )
  }

  const tasks = Array.isArray(record.subtasks) ? record.subtasks : []
  return (
    <div>
      <div className="dsh-pub-detail-head">
        <Button variant="ghost" size="sm" leadingIcon={<IconChevronLeftOutline14 />} onClick={onBack}>
          {t('detail.back')}
        </Button>
        <strong className="dsh-pub-detail-title">
          {String(record.title || record.description || '(untitled)')}
        </strong>
        <Button
          variant="outline"
          size="sm"
          leadingIcon={<IconRefreshOutline16 />}
          loading={busy === 'refresh'}
          onClick={() => { void refresh() }}
        >
          {t('detail.refresh')}
        </Button>
      </div>

      {error ? <div role="alert" className="dsh-pub-alert warn">{error}</div> : null}
      {record.error ? (
        <div role="alert" className="dsh-pub-alert banner">{String(record.error)}</div>
      ) : null}

      <div className="dsh-pub-section">{t('detail.subtasks')}</div>
      <div className="dsh-pub-tasks">
        {tasks.map((task) => (
          <SubtaskRow key={String(task.id)} t={t} task={task} busy={busy} onRetry={retry} />
        ))}
        {tasks.length === 0 ? <div className="dsh-pub-hint">—</div> : null}
      </div>
    </div>
  )
}

/**
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   task: Record<string, unknown>,
 *   busy: string,
 *   onRetry: (taskId: string) => void,
 * }} props
 */
function SubtaskRow({ t, task, busy, onRetry }) {
  const status = String(task.status || '')
  const platformKey = `platform.${String(task.platform || '')}`
  const platformLabel = t(platformKey) !== platformKey ? t(platformKey) : String(task.platform || '')
  return (
    <div className="dsh-pub-task">
      <div className="dsh-pub-task-row">
        <span>{platformLabel}</span>
        <span className="dsh-pub-dot">·</span>
        <span>{String(task.account_id)}</span>
        <span className="dsh-pub-task-status" data-status={status}>{t(`task.${status}`)}</span>
      </div>
      {task.post_id ? (
        <div className="dsh-pub-task-meta">{t('task.post', { id: String(task.post_id) })}</div>
      ) : null}
      {task.raw_status ? (
        <div className="dsh-pub-task-meta">{t('task.rawStatus', { status: String(task.raw_status) })}</div>
      ) : null}
      {Number(task.attempts) > 1 ? (
        <div className="dsh-pub-task-meta">{t('task.attempts', { count: Number(task.attempts) })}</div>
      ) : null}
      {task.error ? (
        <div className="dsh-pub-task-err">{String(task.error)}</div>
      ) : null}
      {status === 'failed' ? (
        <div>
          <Button
            type="button"
            size="sm"
            variant="danger"
            loading={busy === String(task.id)}
            onClick={() => { onRetry(String(task.id)) }}
          >
            {t('task.retry')}
          </Button>
        </div>
      ) : null}
    </div>
  )
}
