import { Button, IconButton } from 'dsh-ui-kit'
import { activateRowKeydown } from './a11y.js'
import { CheckIcon, FileIcon } from './icons.jsx'

/**
 * @param {{
 *   t: (key: string) => string,
 *   assets: any[],
 *   emptyLabel: string,
 *   emptyActionLabel?: string,
 *   showEmptyAction?: boolean,
 *   onEmptyAction?: () => void,
 *   onOpen: (asset: any) => void,
 *   onCopy: (asset: any) => void,
 *   onRemove: (asset: any) => void,
 *   copiedId?: string,
 *   selectedIds?: Set<string>,
 *   onToggleSelect?: (asset: any) => void,
 * }} props
 */
export function AssetGrid({ t, assets, emptyLabel, emptyActionLabel, showEmptyAction = true, onEmptyAction, onOpen, onCopy, onRemove, copiedId, selectedIds, onToggleSelect }) {
  if (assets.length === 0) {
    return (
      <div className="omnimux-assets-empty">
        <p>{emptyLabel}</p>
        {emptyActionLabel && onEmptyAction && showEmptyAction ? (
          <Button variant="primary" size="sm" onClick={onEmptyAction}>
            {emptyActionLabel}
          </Button>
        ) : null}
      </div>
    )
  }

  return (
    <div className="omnimux-assets-grid">
      {assets.map((asset) => {
        const missing = Number(asset.missing_file_count) > 0 && (!asset.files || asset.files.length === 0)
        const selected = selectedIds?.has(asset.id)
        return (
          <article
            key={asset.id}
            className="omnimux-assets-focusable omnimux-assets-card"
            tabIndex={0}
            role="button"
            aria-selected={selected ? 'true' : 'false'}
            onClick={() => { onOpen(asset) }}
            onKeyDown={activateRowKeydown(() => { onOpen(asset) })}
          >
            <div className="omnimux-assets-card-thumb">
              {onToggleSelect ? (
                <IconButton
                  variant="ghost"
                  size="xs"
                  className="omnimux-assets-check"
                  data-selected={selected ? 'true' : 'false'}
                  aria-label={t('select.toggle')}
                  aria-pressed={selected ? 'true' : 'false'}
                  title=""
                  onClick={(event) => { event.stopPropagation(); onToggleSelect(asset) }}
                >
                  {selected ? <CheckIcon size={12} /> : <span />}
                </IconButton>
              ) : null}
              <FileIcon size={22} />
              <span className="omnimux-assets-badge">{t(`type.${asset.type}`)}</span>
              {missing ? <span className="omnimux-assets-missing">{t('card.missing')}</span> : null}
            </div>
            <div className="omnimux-assets-card-body">
              <div className="omnimux-assets-card-title">{asset.name}</div>
              <div className="omnimux-assets-card-desc">{asset.description || '—'}</div>
              <div className="omnimux-assets-card-actions">
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={(event) => { event.stopPropagation(); onCopy(asset) }}
                >
                  {copiedId === asset.id ? t('card.copied') : t('card.copyCite')}
                </Button>
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={(event) => { event.stopPropagation(); onRemove(asset) }}
                >
                  {t('mapping.remove')}
                </Button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
