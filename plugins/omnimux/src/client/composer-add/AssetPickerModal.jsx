import { useEffect, useMemo, useState } from 'react'
import { Button, ModalDialog } from 'dsh-ui-kit'
import { AssetPickerCard } from './AssetPickerCard.jsx'
import { ASSET_CATEGORIES, remainingQuota, toggleSelect } from './kind.js'

const STYLE_ID = 'omx-composer-add-asset-picker'

const CSS = `
.omx-asset-pick { display:flex; min-height:420px; max-height:70vh; }
.omx-asset-pick__nav {
  width: 148px; flex:none; display:flex; flex-direction:column; gap:4px;
  padding: 8px 8px 8px 0; border-right:1px solid var(--dsw-alias-border-l2);
  overflow:auto;
}
.omx-asset-pick__tab {
  appearance:none; font:inherit; text-align:left; cursor:pointer;
  height:32px; border:none; border-radius:8px; padding:0 10px;
  background:transparent; color:var(--dsw-alias-label-secondary);
}
.omx-asset-pick__tab[data-active="true"] {
  background: var(--dsw-alias-interactive-bg-hover-solid);
  color: var(--dsw-alias-label-primary);
}
.omx-asset-pick__main { flex:1; min-width:0; overflow:auto; padding: 0 0 0 12px; }
.omx-asset-pick__grid {
  display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:12px;
}
.omx-asset-pick__empty {
  border:1px dashed var(--dsw-alias-border-l4); border-radius:12px; min-height:160px;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;
  color:var(--dsw-alias-label-tertiary); font-size:13px;
}
.omx-asset-pick-card {
  border:1px solid var(--dsw-alias-border-l2); border-radius:12px; overflow:hidden; cursor:pointer;
  background: var(--dsw-alias-bg-base, var(--dsw-bg)); display:flex; flex-direction:column;
}
.omx-asset-pick-card[data-selected="true"] { border-color: var(--dsw-alias-label-primary); }
.omx-asset-pick-card[aria-disabled="true"] { cursor:default; opacity:0.72; }
.omx-asset-pick-card__thumb {
  height:112px; background:var(--dsw-alias-bg-module-platform); position:relative;
  display:flex; align-items:center; justify-content:center; color:var(--dsw-alias-label-tertiary);
}
.omx-asset-pick-card__check {
  position:absolute; top:8px; left:8px; width:22px; height:22px; border-radius:50%;
  display:inline-flex; align-items:center; justify-content:center;
  border:1px solid var(--dsw-alias-border-l3); background:var(--dsw-alias-bg-base, var(--dsw-bg));
}
.omx-asset-pick-card__check[data-selected="true"] {
  border:none; background:var(--dsw-alias-button-primary-fill); color:var(--dsw-alias-label-primary-foreground);
}
.omx-asset-pick-card__badge {
  position:absolute; top:8px; right:8px; font-size:11px; line-height:16px; padding:2px 8px;
  border-radius:999px; background:var(--dsw-alias-bg-base, var(--dsw-bg));
  border:1px solid var(--dsw-alias-border-l2);
}
.omx-asset-pick-card__missing, .omx-asset-pick-card__already {
  position:absolute; bottom:8px; left:8px; font-size:11px; color:var(--dsw-alias-state-warn-primary);
}
.omx-asset-pick-card__body { padding:10px 12px 12px; display:flex; flex-direction:column; gap:4px; min-height:72px; }
.omx-asset-pick-card__title { font-size:14px; font-weight:500; line-height:20px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.omx-asset-pick-card__desc { font-size:12px; line-height:18px; color:var(--dsw-alias-label-secondary); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.omx-asset-pick__footer { display:flex; align-items:center; justify-content:space-between; gap:12px; width:100%; }
.omx-asset-pick__meta { font-size:12px; color:var(--dsw-alias-label-secondary); }
.omx-asset-pick__error { color:var(--dsw-alias-state-error-primary); font-size:12px; margin:0 0 8px; }
`

function ensureStyles(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc || doc.getElementById(STYLE_ID)) return
  const style = doc.createElement('style')
  style.id = STYLE_ID
  style.textContent = CSS
  doc.head?.appendChild(style)
}

function interpolate(template, vars) {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (_, key) => (vars[key] == null ? '' : String(vars[key])))
}

/**
 * @param {{
 *   open: boolean,
 *   onClose: () => void,
 *   t: (key: string, vars?: object) => string,
 *   occupied: number,
 *   alreadyIds: Set<string> | string[],
 *   onConfirm: (assets: object[]) => void | Promise<void>,
 * }} props
 */
export function AssetPickerModal({ open, onClose, t, occupied, alreadyIds, onConfirm }) {
  const [category, setCategory] = useState('all')
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(() => new Set())
  const [busy, setBusy] = useState(false)

  useEffect(() => { ensureStyles() }, [])
  useEffect(() => {
    if (!open) return undefined
    setCategory('all')
    setSelected(new Set())
    setError('')
    setLoading(true)
    let cancelled = false
    fetch('/omnimux/assets/library')
      .then(async (response) => {
        let json = {}
        try { json = await response.json() } catch { json = {} }
        if (!response.ok) throw new Error(json.message || json.error || `HTTP ${response.status}`)
        return Array.isArray(json.assets) ? json.assets : []
      })
      .then((rows) => { if (!cancelled) setAssets(rows) })
      .catch((caught) => { if (!cancelled) setError(caught instanceof Error ? caught.message : String(caught)) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [open])

  const visible = useMemo(() => {
    if (category === 'all') return assets
    return assets.filter((row) => row && row.type === category)
  }, [assets, category])

  const quota = remainingQuota({ occupied, selectedCount: selected.size })
  const tabs = ['all', ...ASSET_CATEGORIES]

  const openLibrary = () => {
    try {
      window.__omnimuxWorkbench?.open?.({ tabId: 'omnimux-assets:library', title: t('composerAdd.libraryTitle') })
    } catch {
      // fall through to copy
    }
  }

  const confirm = async () => {
    const picked = assets.filter((row) => selected.has(row.id))
    if (picked.length === 0) return
    setBusy(true)
    try {
      await onConfirm(picked)
    } finally {
      setBusy(false)
    }
  }

  return (
    <ModalDialog
      open={open}
      onClose={onClose}
      title={t('composerAdd.fromLibrary')}
      size="lg"
      closeLabel={t('composerAdd.cancel')}
      footer={(
        <div className="omx-asset-pick__footer">
          <span className="omx-asset-pick__meta">
            {interpolate(t('composerAdd.selectedMeta'), { n: selected.size, m: quota.remaining })}
          </span>
          <span>
            <Button variant="outline" onClick={onClose} disabled={busy}>{t('composerAdd.cancel')}</Button>
            {' '}
            <Button variant="primary" onClick={() => { void confirm() }} disabled={busy || selected.size === 0}>
              {t('composerAdd.confirm')}
            </Button>
          </span>
        </div>
      )}
    >
      <div className="omx-asset-pick">
        <nav className="omx-asset-pick__nav" aria-label={t('composerAdd.categories')}>
          {tabs.map((id) => (
            <button
              key={id}
              type="button"
              className="omx-asset-pick__tab"
              data-active={category === id ? 'true' : 'false'}
              onClick={() => { setCategory(id) }}
            >
              {t(id === 'all' ? 'composerAdd.cat.all' : `composerAdd.cat.${id}`)}
            </button>
          ))}
        </nav>
        <div className="omx-asset-pick__main">
          {error ? <p className="omx-asset-pick__error">{error}</p> : null}
          {loading ? <p className="omx-asset-pick__meta">{t('composerAdd.loading')}</p> : null}
          {!loading && !error && visible.length === 0 ? (
            <div className="omx-asset-pick__empty">
              <p>{t('composerAdd.empty')}</p>
              <Button variant="primary" size="sm" onClick={openLibrary}>{t('composerAdd.goLibrary')}</Button>
            </div>
          ) : null}
          {!loading && visible.length > 0 ? (
            <div className="omx-asset-pick__grid">
              {visible.map((asset) => {
                const already = Array.isArray(alreadyIds)
                  ? alreadyIds.includes(asset.id)
                  : alreadyIds?.has?.(asset.id)
                const isSelected = selected.has(asset.id)
                const disableNew = !isSelected && !already && remainingQuota({ occupied, selectedCount: selected.size }).remaining === 0
                return (
                  <AssetPickerCard
                    key={asset.id}
                    asset={asset}
                    selected={isSelected}
                    alreadyAdded={already}
                    disabled={disableNew}
                    typeLabel={t(`composerAdd.cat.${asset.type || 'custom'}`)}
                    alreadyLabel={t('composerAdd.alreadyAdded')}
                    missingLabel={t('composerAdd.missing')}
                    onToggle={(row) => {
                      const next = toggleSelect({
                        selected,
                        id: row.id,
                        occupied,
                        alreadyIds,
                      })
                      setSelected(next.selected)
                    }}
                  />
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </ModalDialog>
  )
}
