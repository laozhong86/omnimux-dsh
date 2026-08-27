import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import {
  IconCloseOutline16,
  IconPlusOutline16,
  IconRefreshOutline16,
  IconDownloadOutline16,
} from '@deepseek-ai/dsh-client-ui-primitives'
import {
  IconFolderOutline16,
  IconGridOutline16,
  IconListOutline16,
  IconCalendarOutline16,
} from './icons/stage.js'
import { Button, IconButton, SearchField, DropdownSelect, FilterBar, ConfirmModal } from 'dsh-ui-kit'
import { listRecords, getState, deleteDraft, retryTask, errorText } from './api.js'
import { displayStatus } from './status-display.js'
import { RecordsTable } from './views/RecordsTable.jsx'
import { GridView } from './views/GridView.jsx'
import { CalendarView } from './views/CalendarView.jsx'
import { RecordDetail } from './RecordDetail.jsx'
import { Composer } from './Composer/index.jsx'
import { ensureCss, injectPublishStyles } from './styles.js'

/** tab → Host status_filter */
const TAB_FILTER = {
  all: 'submitted',
  drafts: 'draft',
  reviewing: 'reviewing',
  published: 'published',
  retry: 'failed',
}

const SUBMIT_POLL_MS = 2000
const SUBMIT_POLL_MAX_MS = 5 * 60 * 1000

/**
 * 发布中心一级页：严格对齐 AGENTS.md §88 一级页 4 层标准架构 + Layer 5 Overlay
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 *   stage: {
 *     getSnapshot: () => boolean,
 *     subscribe: Function,
 *     set: Function,
 *     readBox: () => { top: number, left: number, width: number, height: number }
 *   }
 * }} props
 */
export function PublishStage({ t, stage }) {
  injectPublishStyles()

  const open = useSyncExternalStore(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => (stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 }))

  if (open && !everOpened) setEverOpened(true)
  useLayoutEffectBox(stage, open, setBox)

  // 状态与筛选
  const [tab, setTab] = useState('all') // 'all' | 'drafts' | 'reviewing' | 'published' | 'retry'
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'table' | 'calendar'
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('recent')
  const [typeFilter, setTypeFilter] = useState('')
  const [modeFilter, setModeFilter] = useState('')

  // 页面导航视图
  const [view, setView] = useState({ name: 'list' }) // 'list' | 'composer' | 'detail'
  const [records, setRecords] = useState([])
  const [counts, setCounts] = useState({ total: 0, draft: 0, submitted: 0, reviewing: 0, published: 0, failed: 0 })
  const [listLoading, setListLoading] = useState(false)
  const [revision, setRevision] = useState(undefined)

  // 批量操作
  const [isBatchMode, setIsBatchMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [pendingDelete, setPendingDelete] = useState(null)
  const [busyDelete, setBusyDelete] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  // Submit tracking
  const [tracking, setTracking] = useState(false)
  const startedAtRef = useRef(0)
  const [detailTick, setDetailTick] = useState(0)

  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 3000)
  }

  // 加载列表与计数
  const loadList = useCallback(() => {
    setListLoading(true)
    const hostStatus = TAB_FILTER[tab] || 'submitted'
    return Promise.all([
      listRecords({ status: hostStatus }),
      getState(undefined),
    ])
      .then(([recRes, stateRes]) => {
        if (recRes.ok && recRes.body && Array.isArray(recRes.body.records)) {
          setRecords(recRes.body.records)
        }
        if (stateRes.ok && stateRes.body && stateRes.body.counts) {
          setCounts(stateRes.body.counts)
        }
        setListLoading(false)
        return true
      })
      .catch(() => {
        setListLoading(false)
        return false
      })
  }, [tab])

  useEffect(() => {
    if (!open || view.name !== 'list') return undefined
    void loadList()
    return undefined
  }, [open, view.name, loadList])

  // Submit 状态轮询
  useEffect(() => {
    if (!open || !tracking) return undefined
    let stopped = false
    let timer = 0
    const poll = async () => {
      if (stopped) return
      try {
        const result = await getState(revision)
        if (!stopped && result.ok && result.body) {
          if (result.body.unchanged === false) {
            setRevision(result.body.rev)
            if (result.body.counts) setCounts(result.body.counts)
            if (view.name === 'list') void loadList()
            if (view.name === 'detail') setDetailTick((n) => n + 1)
          }
        }
      } catch {}
      if (stopped) return
      if (Date.now() - startedAtRef.current > SUBMIT_POLL_MAX_MS) {
        setTracking(false)
        return
      }
      timer = setTimeout(() => { void poll() }, SUBMIT_POLL_MS)
    }
    timer = setTimeout(() => { void poll() }, SUBMIT_POLL_MS)
    return () => {
      stopped = true
      clearTimeout(timer)
    }
  }, [open, tracking, revision, view.name, loadList])

  // 客户端数据过滤与排序
  const filteredRecords = useMemo(() => {
    let list = [...records]
    const q = searchQuery.trim().toLowerCase()

    list = list.filter((rec) => {
      const status = displayStatus(rec)
      if (tab === 'all' && rec.status === 'draft') return false
      if (tab === 'drafts' && rec.status !== 'draft') return false
      if (tab === 'reviewing' && status !== 'reviewing') return false
      if (tab === 'published' && status !== 'published') return false
      if (tab === 'retry' && status !== 'failed' && status !== 'partial_failed') return false

      if (q) {
        const title = String(rec.title || '').toLowerCase()
        const desc = String(rec.description || '').toLowerCase()
        const topics = Array.isArray(rec.topics) ? rec.topics.join(' ').toLowerCase() : ''
        if (!title.includes(q) && !desc.includes(q) && !topics.includes(q)) return false
      }
      if (typeFilter && rec.type !== typeFilter) return false
      if (modeFilter && rec.mode !== modeFilter) return false
      return true
    })

    if (sortOption === 'recent') {
      list.sort((a, b) => String(b.updated_at || b.created_at || '').localeCompare(String(a.updated_at || a.created_at || '')))
    } else if (sortOption === 'dateDesc') {
      list.sort((a, b) => String(b.submitted_at || b.created_at || '').localeCompare(String(a.submitted_at || a.created_at || '')))
    } else if (sortOption === 'dateAsc') {
      list.sort((a, b) => String(a.submitted_at || a.created_at || '').localeCompare(String(b.submitted_at || b.created_at || '')))
    } else if (sortOption === 'title') {
      list.sort((a, b) => String(a.title || '').localeCompare(String(b.title || '')))
    }
    return list
  }, [records, tab, searchQuery, typeFilter, modeFilter, sortOption])

  // 单条/批量选择
  const handleToggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleToggleAll = (allSelected) => {
    if (allSelected) {
      setSelectedIds(new Set(filteredRecords.map((r) => String(r.id))))
    } else {
      setSelectedIds(new Set())
    }
  }

  // 单条删除草稿
  const confirmDelete = async () => {
    if (!pendingDelete) return
    const id = String(pendingDelete.id)
    setBusyDelete(true)
    try {
      const result = await deleteDraft(id)
      if (result.ok) {
        setPendingDelete(null)
        showToast('已删除草稿')
        void loadList()
      } else {
        showToast(t('records.deleteFailed', { reason: errorText(result.body, result.status) }))
      }
    } catch (e) {
      showToast(String(e))
    } finally {
      setBusyDelete(false)
    }
  }

  // 批量操作
  const handleBatchRetry = async () => {
    const ids = Array.from(selectedIds)
    let retryCount = 0
    for (const id of ids) {
      const rec = records.find((r) => String(r.id) === id)
      if (!rec || !Array.isArray(rec.subtasks)) continue
      for (const st of rec.subtasks) {
        if (st.status === 'failed') {
          await retryTask(id, st.platform, st.account_id || '')
          retryCount++
        }
      }
    }
    showToast(`已重试 ${retryCount} 个失败子任务`)
    setSelectedIds(new Set())
    setIsBatchMode(false)
    void loadList()
  }

  const handleBatchDeleteDrafts = async () => {
    const ids = Array.from(selectedIds)
    let deletedCount = 0
    for (const id of ids) {
      const rec = records.find((r) => String(r.id) === id)
      if (rec && rec.status === 'draft') {
        const res = await deleteDraft(id)
        if (res.ok) deletedCount++
      }
    }
    showToast(`已删除 ${deletedCount} 条草稿`)
    setSelectedIds(new Set())
    setIsBatchMode(false)
    void loadList()
  }

  // 导出 CSV
  const handleExport = () => {
    if (filteredRecords.length === 0) {
      showToast('当前无记录可导出')
      return
    }
    const headers = ['ID', 'Title', 'Type', 'Platforms', 'Date', 'Status', 'Mode']
    const rows = filteredRecords.map((r) => [
      `"${r.id}"`,
      `"${(r.title || '').replace(/"/g, '""')}"`,
      `"${r.type || 'image'}"`,
      `"${(r.subtasks || []).map((s) => s.platform).join(';')}"`,
      `"${r.submitted_at || r.created_at || ''}"`,
      `"${displayStatus(r)}"`,
      `"${r.mode || 'instant'}"`,
    ])
    const csv = '\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `publish_records_${Date.now()}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    showToast(`已导出 ${filteredRecords.length} 条记录`)
  }

  if (!stage || !everOpened) return null

  return (
    <div
      role="region"
      aria-label={t('title')}
      aria-hidden={open ? undefined : 'true'}
      className="dsh-pub-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
        display: open ? undefined : 'none',
      }}
    >
      {/* Layer 1: Page Header (16px 20px 8px) */}
      <header className="dsh-pub-header">
        <div className="dsh-pub-header-text">
          <h1 className="dsh-pub-title">{t('title')}</h1>
          <p className="dsh-pub-subtitle">{t('subtitle')}</p>
        </div>
        <div className="dsh-pub-header-actions">
          <IconButton
            aria-label={t('records.refresh')}
            variant="ghost"
            size="sm"
            onClick={loadList}
          >
            <IconRefreshOutline16 />
          </IconButton>
          <IconButton
            aria-label={t('close')}
            variant="ghost"
            size="sm"
            onClick={() => stage.set(false)}
          >
            <IconCloseOutline16 />
          </IconButton>
        </div>
      </header>

      {/* Layer 2: Action Row (8px 20px 14px) */}
      <section className="dsh-pub-action-row">
        <Button
          variant="primary"
          size="default"
          leadingIcon={<IconPlusOutline16 />}
          onClick={() => setView({ name: 'composer' })}
        >
          {t('action.new')}
        </Button>
        <Button
          variant="outline"
          size="default"
          leadingIcon={<IconFolderOutline16 />}
          onClick={() => setIsBatchMode((prev) => !prev)}
        >
          {t('action.batch')}
        </Button>
        <Button
          variant="outline"
          size="default"
          leadingIcon={<IconDownloadOutline16 />}
          onClick={handleExport}
        >
          {t('action.export')}
        </Button>
      </section>

      {/* Layer 3: Control Bar (Single FilterBar, 44px, 0 20px 12px) */}
      <section className="dsh-pub-control-bar">
        <FilterBar
          compact
          filters={[
            <Button
              key="all"
              variant={tab === 'all' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTab('all')}
            >
              {t('tab.all')}
            </Button>,
            <Button
              key="drafts"
              variant={tab === 'drafts' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTab('drafts')}
            >
              {t('tab.drafts')}
              {counts.draft > 0 ? <span className="dsh-pub-tab-badge">{counts.draft}</span> : null}
            </Button>,
            <Button
              key="reviewing"
              variant={tab === 'reviewing' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTab('reviewing')}
            >
              {t('tab.reviewing')}
              {counts.reviewing > 0 ? <span className="dsh-pub-tab-badge">{counts.reviewing}</span> : null}
            </Button>,
            <Button
              key="published"
              variant={tab === 'published' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTab('published')}
            >
              {t('tab.published')}
            </Button>,
            <Button
              key="retry"
              variant={tab === 'retry' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setTab('retry')}
            >
              {t('tab.retry')}
              {counts.failed > 0 ? <span className="dsh-pub-tab-badge retry">{counts.failed}</span> : null}
            </Button>,
          ]}
          tools={[
            <SearchField
              key="search"
              width={220}
              placeholder={t('search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />,
            <DropdownSelect
              key="sort"
              value={sortOption}
              onChange={(val) => setSortOption(val)}
              options={[
                { value: 'recent', label: t('sort.recent') },
                { value: 'dateDesc', label: t('sort.dateDesc') },
                { value: 'dateAsc', label: t('sort.dateAsc') },
                { value: 'title', label: t('sort.title') },
              ]}
            />,
            <DropdownSelect
              key="type"
              value={typeFilter}
              onChange={(val) => setTypeFilter(val)}
              options={[
                { value: '', label: t('filter.type.all') },
                { value: 'image', label: t('filter.type.image') },
                { value: 'video', label: t('filter.type.video') },
              ]}
            />,
            <DropdownSelect
              key="mode"
              value={modeFilter}
              onChange={(val) => setModeFilter(val)}
              options={[
                { value: '', label: t('filter.mode.all') },
                { value: 'scheduled', label: t('filter.mode.scheduled') },
                { value: 'instant', label: t('filter.mode.instant') },
              ]}
            />,
            <div key="view-switcher" className="dsh-pub-view-switcher">
              <IconButton
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size="xs"
                title={t('view.grid')}
                onClick={() => setViewMode('grid')}
              >
                <IconGridOutline16 />
              </IconButton>
              <IconButton
                variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                size="xs"
                title={t('view.table')}
                onClick={() => setViewMode('table')}
              >
                <IconListOutline16 />
              </IconButton>
              <IconButton
                variant={viewMode === 'calendar' ? 'secondary' : 'ghost'}
                size="xs"
                title={t('view.calendar')}
                onClick={() => setViewMode('calendar')}
              >
                <IconCalendarOutline16 />
              </IconButton>
            </div>,
          ]}
        />
      </section>

      {/* Layer 4: Content Viewport (padding: 16px; gap: 16px) */}
      <main className="dsh-pub-viewport">
        {toastMsg ? <div className="dsh-pub-alert">{toastMsg}</div> : null}

        {isBatchMode ? (
          <div className="dsh-pub-batch-bar">
            <span>已选 {selectedIds.size} 项</span>
            <div className="dsh-pub-batch-actions">
              <Button size="xs" variant="outline" onClick={() => handleToggleAll(selectedIds.size < filteredRecords.length)}>
                {selectedIds.size < filteredRecords.length ? t('action.selectAll') : '取消全选'}
              </Button>
              <Button size="xs" variant="outline" onClick={handleBatchRetry}>
                {t('action.batchRetry')}
              </Button>
              <Button size="xs" variant="outline" onClick={handleBatchDeleteDrafts}>
                {t('action.batchDeleteDrafts')}
              </Button>
              <Button size="xs" variant="ghost" onClick={() => setIsBatchMode(false)}>
                {t('action.exitBatch')}
              </Button>
            </div>
          </div>
        ) : null}

        {viewMode === 'table' ? (
          <RecordsTable
            t={t}
            records={filteredRecords}
            selectedIds={selectedIds}
            onToggleSelect={handleToggleSelect}
            onToggleAll={handleToggleAll}
            onView={(record) => setView({ name: 'detail', recordId: String(record.id) })}
            onEdit={(record) => setView({ name: 'composer', draftId: String(record.id) })}
            onDelete={setPendingDelete}
            onRetry={async (record) => {
              for (const st of record.subtasks || []) {
                if (st.status === 'failed') {
                  await retryTask(record.id, st.platform, st.account_id || '')
                }
              }
              showToast('已下发重试')
              void loadList()
            }}
            sortField="date"
            sortOrder="desc"
            onSort={() => {}}
          />
        ) : null}

        {viewMode === 'grid' ? (
          <GridView
            t={t}
            records={filteredRecords}
            selectedIds={selectedIds}
            isBatchMode={isBatchMode}
            onToggleSelect={handleToggleSelect}
            onOpen={(record) => setView({ name: 'detail', recordId: String(record.id) })}
            onEdit={(record) => setView({ name: 'composer', draftId: String(record.id) })}
            onDelete={setPendingDelete}
            onRetry={async (record) => {
              for (const st of record.subtasks || []) {
                if (st.status === 'failed') {
                  await retryTask(record.id, st.platform, st.account_id || '')
                }
              }
              showToast('已下发重试')
              void loadList()
            }}
          />
        ) : null}

        {viewMode === 'calendar' ? (
          <CalendarView
            t={t}
            records={filteredRecords}
            onOpen={(record) => setView({ name: 'detail', recordId: String(record.id) })}
          />
        ) : null}
      </main>

      {/* Layer 5: Overlay Subsystem (Composer & Detail) */}
      {view.name === 'composer' ? (
        <div className="dsh-pub-subscreen">
          <Composer
            t={t}
            draftId={view.draftId}
            onBack={() => setView({ name: 'list' })}
            onSubmitted={(recordId) => {
              setView({ name: 'detail', recordId })
              startedAtRef.current = Date.now()
              setTracking(true)
            }}
            onSaved={() => {
              void loadList()
              setView({ name: 'list' })
            }}
          />
        </div>
      ) : null}

      {view.name === 'detail' ? (
        <div className="dsh-pub-subscreen">
          <RecordDetail
            key={`${view.recordId}:${detailTick}`}
            t={t}
            recordId={view.recordId}
            onBack={() => setView({ name: 'list' })}
            onChanged={() => void loadList()}
          />
        </div>
      ) : null}

      {/* Delete Draft Confirm Modal */}
      <ConfirmModal
        open={Boolean(pendingDelete)}
        title={t('records.delete')}
        message={t('records.deleteConfirm', {
          title: String(pendingDelete?.title || pendingDelete?.description || pendingDelete?.id || ''),
        })}
        confirmLabel={t('records.delete')}
        cancelLabel={t('close')}
        closeLabel={t('close')}
        confirmVariant="danger"
        confirmLoading={busyDelete}
        onConfirm={() => { void confirmDelete() }}
        onClose={() => { if (!busyDelete) setPendingDelete(null) }}
      />
    </div>
  )
}

function useLayoutEffectBox(stage, open, setBox) {
  useLayoutEffect(() => {
    if (!open) return undefined
    const update = () => { setBox(stage.readBox()) }
    update()
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('resize', update) }
  }, [open, stage, setBox])
}
