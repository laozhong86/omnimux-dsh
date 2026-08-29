import { useEffect, useState, useSyncExternalStore } from 'react'
import { Button, DropdownSelect, FilterBar, IconButton, PageHeader, SearchField } from 'dsh-ui-kit'
import { GridIcon, ImportIcon, ListIcon, PlusIcon } from './icons.jsx'
import { AddAssetDialog, ASSET_TYPE_KEYS } from './AddAssetDialog.jsx'
import { AssetBrowse } from './AssetBrowse.jsx'
import { AssetGrid } from './AssetGrid.jsx'
import { AssetDetail } from './AssetDetail.jsx'
import { ConfirmRemoveDialog } from './ConfirmRemoveDialog.jsx'
import { computeEmptyState } from './feed-helpers.js'
import { injectAssetsStyles } from './styles.js'
import { useAssetsFeed } from './use-assets-feed.js'
import { useStageBox } from './use-stage-box.js'

function AssetsHeader(props) {
  const { t, stage, busy, refreshState, setBusy } = props
  const onRefresh = () => {
    setBusy(true)
    void refreshState(true).finally(() => setBusy(false))
  }

  return (
    <PageHeader
      title={t('stage.title')}
      subtitle={t('stage.subtitle')}
      onRefresh={onRefresh}
      refreshing={busy}
      refreshTitle={t('stage.refresh')}
      onClose={() => { stage.set(false) }}
      closeTitle={t('stage.close')}
    />
  )
}

function AssetsActionRow(props) {
  const { t, feed } = props
  const onAdd = () => {
    feed.setCreating(feed.filterType || 'character')
    feed.setFormError('')
  }
  const onImport = () => {
    feed.setError(t('import.notice'))
    setTimeout(() => feed.setError(''), 3000)
  }

  return (
    <div className="omnimux-assets-action-row">
      <Button variant="primary" leadingIcon={<PlusIcon />} onClick={onAdd}>
        {t('add.button')}
      </Button>
      <Button variant="outline" leadingIcon={<ImportIcon />} onClick={onImport}>
        {t('import.button')}
      </Button>
    </div>
  )
}

function AssetsFilterChips(props) {
  const { t, filterType, onTypeChange } = props
  const filterChips = [
    { key: '', label: t('chip.all') },
    ...ASSET_TYPE_KEYS.map((k) => ({ key: k, label: t(`type.${k}`) })),
  ]
  return filterChips.map((chip) => (
    <Button
      key={chip.key || 'all'}
      variant={filterType === chip.key ? 'secondary' : 'ghost'}
      size="sm"
      aria-pressed={filterType === chip.key}
      onClick={() => onTypeChange(chip.key)}
    >
      {chip.label}
    </Button>
  ))
}

function AssetsViewToggle(props) {
  const { t, viewMode, onViewModeChange } = props
  return (
    <div className="omnimux-assets-view-toggle">
      <IconButton
        variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
        size="xs"
        aria-pressed={viewMode === 'grid'}
        aria-label={t('view.grid')}
        title={t('view.grid')}
        onClick={() => onViewModeChange('grid')}
      >
        <GridIcon size={14} />
      </IconButton>
      <IconButton
        variant={viewMode === 'list' ? 'secondary' : 'ghost'}
        size="xs"
        aria-pressed={viewMode === 'list'}
        aria-label={t('view.list')}
        title={t('view.list')}
        onClick={() => onViewModeChange('list')}
      >
        <ListIcon size={14} />
      </IconButton>
    </div>
  )
}

function AssetsToolsCluster(props) {
  const { t, query, sortKey, viewMode, onQueryChange, onSortChange, onViewModeChange } = props
  const sortOptions = [
    { value: 'updated_at', label: t('sort.updated') },
    { value: 'name', label: t('sort.name') },
  ]

  return (
    <div className="omnimux-assets-tools-cluster">
      <div className="omnimux-assets-search-wrap">
        <SearchField
          value={query}
          placeholder={t('search.placeholder')}
          aria-label={t('search.placeholder')}
          debounceMs={0}
          stretch
          onValueChange={onQueryChange}
        />
      </div>
      <div className="omnimux-assets-sort-wrap">
        <DropdownSelect value={sortKey} options={sortOptions} onChange={onSortChange} />
      </div>
      <AssetsViewToggle t={t} viewMode={viewMode} onViewModeChange={onViewModeChange} />
    </div>
  )
}

function AssetsFilterBar(props) {
  const { t, feed } = props
  const onTypeChange = (key) => {
    feed.setFilterType(key)
    feed.setDetail(null)
    feed.clearSelection()
  }

  const filterButtons = <AssetsFilterChips t={t} filterType={feed.filterType} onTypeChange={onTypeChange} />
  const tools = (
    <AssetsToolsCluster
      t={t}
      query={feed.query}
      sortKey={feed.sortKey}
      viewMode={feed.viewMode}
      onQueryChange={feed.setQuery}
      onSortChange={feed.setSortKey}
      onViewModeChange={feed.setViewMode}
    />
  )

  return (
    <FilterBar
      className="omnimux-assets-stage-toolbar"
      compact
      filters={filterButtons}
      tools={tools}
    />
  )
}

function AssetsSelectionBar(props) {
  const { t, feed } = props
  if (!feed.selecting) return null

  return (
    <div className="omnimux-assets-selection">
      <span>{t('select.count').replace('{n}', String(feed.selectedCount))}</span>
      <div className="omnimux-assets-selection-actions">
        <Button variant="ghost" size="sm" onClick={feed.clearSelection}>
          {t('select.clear')}
        </Button>
        <Button variant="danger" size="sm" disabled={feed.busy} onClick={feed.handleOpenBatchDelete}>
          {t('select.delete').replace('{n}', String(feed.selectedCount))}
        </Button>
      </div>
    </div>
  )
}

function AssetsMainView(props) {
  const { t, feed, emptyProps, onOpenAdd } = props
  const { detail, setDetail, visible, viewMode, copyCite, copiedId, selectedIds, toggleSelect, handleRemoveSingle } = feed
  const { emptyLabel, emptyActionLabel, searching } = emptyProps

  if (detail) {
    return (
      <AssetBrowse
        key={detail.id}
        t={t}
        asset={detail}
        onBack={() => setDetail(null)}
      />
    )
  }

  return (
    <AssetGrid
      t={t}
      assets={visible}
      viewMode={viewMode}
      emptyLabel={emptyLabel}
      emptyActionLabel={emptyActionLabel}
      showEmptyAction={!searching}
      onEmptyAction={onOpenAdd}
      onOpen={setDetail}
      onCopy={copyCite}
      onRemove={handleRemoveSingle}
      copiedId={copiedId}
      selectedIds={selectedIds}
      onToggleSelect={toggleSelect}
    />
  )
}

function AssetsBody(props) {
  const { t, feed, emptyProps } = props
  const { detail, setDetail, busy, handleSaveDetail, filterType } = feed
  const onOpenAdd = () => {
    feed.setCreating(filterType || 'character')
    feed.setFormError('')
  }

  return (
    <div className="omnimux-assets-body">
      <div className="omnimux-assets-main">
        <AssetsMainView t={t} feed={feed} emptyProps={emptyProps} onOpenAdd={onOpenAdd} />
      </div>
      {detail ? (
        <AssetDetail
          key={detail.id}
          t={t}
          asset={detail}
          busy={busy}
          onClose={() => setDetail(null)}
          onSave={handleSaveDetail}
        />
      ) : null}
    </div>
  )
}

function AddAssetDialogItem(props) {
  const { t, feed } = props
  const onCancel = () => {
    feed.setCreating(null)
    feed.setFormError('')
  }

  return (
    <AddAssetDialog
      t={t}
      busy={feed.busy}
      presetType={feed.creating}
      error={feed.formError}
      onCancel={onCancel}
      onPick={feed.handlePick}
      onSubmit={feed.handleCreate}
    />
  )
}

function ConfirmRemoveDialogItem(props) {
  const { t, feed } = props
  const { pendingRemove, busy, setPendingRemove, handleConfirmDelete } = feed
  const removeTitle = pendingRemove && pendingRemove.ids.length > 1
    ? t('select.removeTitle').replace('{n}', String(pendingRemove.ids.length))
    : undefined

  return (
    <ConfirmRemoveDialog
      t={t}
      name={String(pendingRemove.names[0] ?? '')}
      title={removeTitle}
      busy={busy}
      onCancel={() => setPendingRemove(null)}
      onConfirm={handleConfirmDelete}
    />
  )
}

function AssetsDialogs(props) {
  const { t, feed } = props
  return (
    <>
      {feed.creating ? <AddAssetDialogItem t={t} feed={feed} /> : null}
      {feed.pendingRemove ? <ConfirmRemoveDialogItem t={t} feed={feed} /> : null}
    </>
  )
}

function createStageStyle(open, box) {
  return {
    display: open ? undefined : 'none',
    '--stage-top': `${box.top}px`,
    '--stage-left': `${box.left}px`,
    '--stage-width': `${box.width}px`,
    '--stage-height': `${box.height}px`,
  }
}

function useStageState(stage) {
  const open = useSyncExternalStore(
    stage ? (cb) => stage.subscribe(cb) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  if (open && !everOpened) setEverOpened(true)
  return { open, everOpened }
}

/**
 * Creative asset library first-level page.
 * After first open, keep the subtree with display:none — never `if (!open) return null`.
 * @param {{
 *   t: (key: string) => string,
 *   stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: Function },
 * }} props
 */
export function AssetsStage(props) {
  const { t, stage } = props
  useEffect(() => { injectAssetsStyles() }, [])
  const { open, everOpened } = useStageState(stage)
  const box = useStageBox(open, stage)
  const feed = useAssetsFeed({ t, open })

  if (!stage || !everOpened) return null

  const emptyProps = computeEmptyState(feed.filterType, feed.query, t)

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-assets-stage"
      data-visible={open ? 'true' : 'false'}
      style={createStageStyle(open, box)}
    >
      <AssetsHeader t={t} stage={stage} busy={feed.busy} refreshState={feed.refreshState} setBusy={feed.setBusy} />
      <AssetsActionRow t={t} feed={feed} />
      <AssetsFilterBar t={t} feed={feed} />
      <AssetsSelectionBar t={t} feed={feed} />
      {feed.error !== '' ? <p className="omnimux-assets-error">{feed.error}</p> : null}
      <AssetsBody t={t} feed={feed} emptyProps={emptyProps} />
      <AssetsDialogs t={t} feed={feed} />
    </div>
  )
}
