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

const TAB_ID = 'omnimux-assets:library'

function AssetsHeader(props) {
  const { t, stage, busy, refreshState, setBusy } = props
  const onRefresh = () => {
    setBusy(true)
    void refreshState(true).finally(() => setBusy(false))
  }
  const onClose = () => {
    const api = typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
    if (api && typeof api.closeTab === 'function') {
      api.closeTab(TAB_ID)
    } else {
      stage?.set?.(false)
    }
  }

  return (
    <PageHeader
      title={t('stage.title')}
      subtitle={t('stage.subtitle')}
      onRefresh={onRefresh}
      refreshing={busy}
      refreshTitle={t('stage.refresh')}
      onClose={onClose}
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
        variant="ghost"
        size="sm"
        aria-label={t('view.grid')}
        aria-pressed={viewMode === 'grid'}
        onClick={() => onViewModeChange('grid')}
      >
        <GridIcon />
      </IconButton>
      <IconButton
        variant="ghost"
        size="sm"
        aria-label={t('view.list')}
        aria-pressed={viewMode === 'list'}
        onClick={() => onViewModeChange('list')}
      >
        <ListIcon />
      </IconButton>
    </div>
  )
}

function AssetsFilterBar(props) {
  const { t, feed } = props
  const sortOptions = [
    { value: 'updatedAt_desc', label: t('sort.updatedAt_desc') },
    { value: 'updatedAt_asc', label: t('sort.updatedAt_asc') },
    { value: 'name_asc', label: t('sort.name_asc') },
    { value: 'name_desc', label: t('sort.name_desc') },
  ]

  return (
    <FilterBar
      className="omnimux-assets-stage-toolbar"
      leading={<AssetsFilterChips t={t} filterType={feed.filterType} onTypeChange={feed.setFilterType} />}
      tools={
        <div className="omnimux-assets-tools-cluster">
          <div className="omnimux-assets-search-wrap">
            <SearchField
              placeholder={t('search.placeholder')}
              value={feed.query}
              onChange={feed.setQuery}
              onClear={() => feed.setQuery('')}
            />
          </div>
          <div className="omnimux-assets-sort-wrap">
            <DropdownSelect
              options={sortOptions}
              value={feed.sortBy}
              onChange={feed.setSortBy}
              triggerTitle={t('sort.label')}
            />
          </div>
          <AssetsViewToggle t={t} viewMode={feed.viewMode} onViewModeChange={feed.setViewMode} />
        </div>
      }
    />
  )
}

function AssetsTableItem(props) {
  const { t, item, feed } = props
  const { selectedIds, toggleSelect, handleRemoveSingle, setDetail } = feed
  const isSelected = selectedIds.includes(item.id)
  return (
    <tr
      key={item.id}
      aria-selected={isSelected}
      className="omnimux-assets-list-row"
      onClick={() => setDetail(item)}
    >
      <td className="omnimux-assets-td-check" onClick={(e) => { e.stopPropagation(); toggleSelect(item.id) }}>
        <input type="checkbox" checked={isSelected} readOnly />
      </td>
      <td className="omnimux-assets-td-name">{item.name}</td>
      <td className="omnimux-assets-td-type">{t(`type.${item.type}`)}</td>
      <td className="omnimux-assets-td-desc">{item.description || '-'}</td>
      <td className="omnimux-assets-td-files">{item.fileCount ?? (item.files?.length || 0)}</td>
      <td className="omnimux-assets-td-actions" onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" size="sm" onClick={() => handleRemoveSingle(item.id)}>
          {t('stage.delete')}
        </Button>
      </td>
    </tr>
  )
}

function AssetsTableView(props) {
  const { t, feed } = props
  const { visible, selectedIds, toggleSelectAll } = feed
  const isAllSelected = visible.length > 0 && visible.every((item) => selectedIds.includes(item.id))
  return (
    <div className="omnimux-assets-list-wrap">
      <table className="omnimux-assets-list-table">
        <thead>
          <tr>
            <th className="omnimux-assets-th-check">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="omnimux-assets-th-name">{t('field.name')}</th>
            <th className="omnimux-assets-th-type">{t('field.type')}</th>
            <th className="omnimux-assets-th-desc">{t('field.description')}</th>
            <th className="omnimux-assets-th-files">{t('field.files')}</th>
            <th className="omnimux-assets-th-actions">{t('field.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((item) => (
            <AssetsTableItem key={item.id} t={t} item={item} feed={feed} />
          ))}
        </tbody>
      </table>
    </div>
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
      onBrowse={setDetail}
    />
  )
}

function AssetsBody(props) {
  const { t, feed, emptyProps } = props
  const onOpenAdd = () => {
    feed.setCreating(feed.filterType || 'character')
    feed.setFormError('')
  }
  return (
    <div className="omnimux-assets-body">
      <div className="omnimux-assets-main">
        {feed.viewMode === 'list' && !feed.detail ? (
          <AssetsTableView t={t} feed={feed} />
        ) : (
          <AssetsMainView t={t} feed={feed} emptyProps={emptyProps} onOpenAdd={onOpenAdd} />
        )}
      </div>
      {feed.detail && (
        <AssetDetail
          t={t}
          asset={feed.detail}
          busy={feed.busy}
          onClose={() => feed.setDetail(null)}
          onSave={feed.handleSaveDetail}
        />
      )}
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
      presetType={feed.creating || 'character'}
      error={feed.formError}
      onCancel={onCancel}
      onPick={feed.handlePick}
      onSubmit={feed.handleCreate}
    />
  )
}

function ConfirmRemoveDialogItem(props) {
  const { t, feed } = props
  const { pendingRemove, setPendingRemove, busy, handleConfirmDelete } = feed
  const removeTitle = pendingRemove.isBatch
    ? t('confirm.deleteSelected').replace('{n}', String(pendingRemove.ids.length))
    : t('confirm.deleteTitle').replace('{name}', String(pendingRemove.names[0] ?? ''))
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

/**
 * Creative asset library workbench tab component mounted in dsh-better-sidebar.
 * @param {{
 *   t: (key: string) => string,
 *   stage?: { getSnapshot: () => boolean, subscribe: Function, set: Function },
 *   store?: { reduce?: Function, getSnapshot?: Function },
 *   visible?: boolean,
 * }} props
 */
export function AssetsStage(props) {
  const { t, stage, store, visible = true } = props
  useEffect(() => { injectAssetsStyles() }, [])
  const everOpened = true

  useEffect(() => {
    const api = typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
    if (!api || typeof api.attachStore !== 'function' || !store) return undefined
    api.attachStore(store)
    return () => { api.detachStore?.(store) }
  }, [store])

  const feed = useAssetsFeed({ t, open: visible })
  const emptyProps = computeEmptyState(feed.filterType, feed.query, t)

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
      aria-hidden={visible ? undefined : 'true'}
      className="omnimux-assets-stage"
      data-visible={visible ? 'true' : 'false'}
      style={{ display: visible ? 'flex' : 'none', position: 'relative', width: '100%', height: '100%', flexDirection: 'column', overflow: 'hidden' }}
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
