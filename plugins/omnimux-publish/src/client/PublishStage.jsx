import { useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { PageHeader } from 'dsh-ui-kit'
import { injectPublishStyles } from './styles.js'
import { usePublishFeed } from './usePublishFeed.js'
import { PublishActionRow } from './views/PublishActionRow.jsx'
import { PublishControlBar } from './views/PublishControlBar.jsx'
import { PublishViewport } from './views/PublishViewport.jsx'
import { PublishOverlays, PublishDeleteConfirmModal } from './views/PublishOverlays.jsx'

const DEFAULT_BOX = { top: 0, left: 0, width: 0, height: 0 }

function createBatchActions(feed) {
  return {
    onToggleAll: feed.handleToggleAll,
    onBatchRetry: feed.handleBatchRetry,
    onBatchDeleteDrafts: feed.handleBatchDeleteDrafts,
    onExitBatch: () => feed.setIsBatchMode(false),
  }
}

function createItemActions(feed, setView) {
  return {
    onToggleSelect: feed.handleToggleSelect,
    onView: (record) => setView({ name: 'detail', recordId: String(record.id) }),
    onEdit: (record) => setView({ name: 'composer', draftId: String(record.id) }),
    onDelete: feed.setPendingDelete,
    onRetry: feed.handleSingleRetry,
  }
}

function buildStageStyle(box, open) {
  return {
    '--stage-top': `${box.top}px`,
    '--stage-left': `${box.left}px`,
    '--stage-width': `${box.width}px`,
    '--stage-height': `${box.height}px`,
    display: open ? undefined : 'none',
  }
}

export function PublishStageContent(props) {
  const { t, feed, viewMode, setViewMode, setView } = props
  return (
    <>
      <PublishActionRow
        t={t}
        onNew={() => setView({ name: 'composer' })}
        onToggleBatch={() => feed.setIsBatchMode((prev) => !prev)}
        onExport={feed.handleExport}
      />
      <PublishControlBar
        t={t}
        tab={feed.tab}
        counts={feed.counts}
        onTabChange={feed.setTab}
        searchQuery={feed.searchQuery}
        onSearchChange={feed.setSearchQuery}
        sortOption={feed.sortOption}
        onSortChange={feed.setSortOption}
        typeFilter={feed.typeFilter}
        onTypeChange={feed.setTypeFilter}
        modeFilter={feed.modeFilter}
        onModeChange={feed.setModeFilter}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
    </>
  )
}

export function PublishStageModals(props) {
  const { t, feed, view, setView } = props
  const handleBack = () => setView({ name: 'list' })
  const handleSubmitted = (recordId) => {
    setView({ name: 'detail', recordId })
    feed.startTracking()
  }
  const handleSaved = () => {
    void feed.loadList()
    setView({ name: 'list' })
  }
  const handleChange = () => {
    void feed.loadList()
  }
  const handleConfirm = () => {
    void feed.confirmDelete()
  }
  const handleClose = () => {
    if (!feed.busyDelete) feed.setPendingDelete(null)
  }

  return (
    <>
      <PublishOverlays
        t={t}
        view={view}
        onBack={handleBack}
        onSubmitted={handleSubmitted}
        onSaved={handleSaved}
        onChanged={handleChange}
        detailTick={feed.detailTick}
      />
      <PublishDeleteConfirmModal
        t={t}
        pendingDelete={feed.pendingDelete}
        busyDelete={feed.busyDelete}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </>
  )
}

function resolveInitialBox(stage) {
  if (!stage) return DEFAULT_BOX
  return stage.readBox()
}

export function useStageGeometry(stage) {
  const open = useSyncExternalStore(
    stage ? (cb) => stage.subscribe(cb) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => resolveInitialBox(stage))

  if (open && !everOpened) setEverOpened(true)
  useLayoutEffectBox(stage, open, setBox)
  return { open, everOpened, box }
}

export function PublishStageView(props) {
  const { t, stage, feed, viewMode, setViewMode, view, setView, open, box } = props
  const stageStyle = buildStageStyle(box, open)
  const batchActions = createBatchActions(feed)
  const itemActions = createItemActions(feed, setView)
  const handleClose = () => stage.set(false)

  return (
    <div
      role="region"
      aria-label={t('title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-publish-stage"
      data-visible={open ? 'true' : 'false'}
      style={stageStyle}
    >
      <PageHeader
        title={t('title')}
        subtitle={t('subtitle')}
        onRefresh={feed.loadList}
        refreshing={feed.listLoading}
        refreshTitle={t('records.refresh')}
        onClose={handleClose}
        closeTitle={t('close')}
      />
      <PublishStageContent t={t} feed={feed} viewMode={viewMode} setViewMode={setViewMode} setView={setView} />
      <PublishViewport
        t={t}
        viewMode={viewMode}
        filteredRecords={feed.filteredRecords}
        selectedIds={feed.selectedIds}
        isBatchMode={feed.isBatchMode}
        toastMsg={feed.toastMsg}
        batchActions={batchActions}
        itemActions={itemActions}
      />
      <PublishStageModals t={t} feed={feed} view={view} setView={setView} />
    </div>
  )
}

/**
 * Publish first-level page orchestrator.
 */
export function PublishStage({ t, stage }) {
  injectPublishStyles()
  const { open, everOpened, box } = useStageGeometry(stage)
  const [viewMode, setViewMode] = useState('grid')
  const [view, setView] = useState({ name: 'list' })
  const feed = usePublishFeed({ open, view, t })

  if (!stage || !everOpened) return null

  return (
    <PublishStageView
      t={t}
      stage={stage}
      feed={feed}
      viewMode={viewMode}
      setViewMode={setViewMode}
      view={view}
      setView={setView}
      open={open}
      box={box}
    />
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
