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
 *   viewMode?: 'grid' | 'list',
 * }} props
 */
export function AssetGrid({ t, assets, emptyLabel, emptyActionLabel, showEmptyAction = true, onEmptyAction, onOpen, onCopy, onRemove, copiedId, selectedIds, onToggleSelect, viewMode = 'grid' }) {
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

  if (viewMode === 'list') {
    return (
      <div className="omnimux-assets-list-wrap">
        <table className="omnimux-assets-list-table">
          <thead>
            <tr>
              <th style={{ width: 40 }} />
              <th>{t('detail.name')}</th>
              <th style={{ width: 100 }}>{t('detail.type')}</th>
              <th>{t('detail.description')}</th>
              <th style={{ width: 120 }}>{t('detail.files')}</th>
              <th style={{ width: 160, textAlign: 'right' }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => {
              const selected = selectedIds?.has(asset.id)
              const missing = Number(asset.missing_file_count) > 0 && (!asset.files || asset.files.length === 0)
              return (
                <tr
                  key={asset.id}
                  className="omnimux-assets-list-row"
                  aria-selected={selected ? 'true' : 'false'}
                  onClick={() => { onOpen(asset) }}
                >
                  <td onClick={(e) => e.stopPropagation()}>
                    {onToggleSelect ? (
                      <IconButton
                        variant="ghost"
                        size="xs"
                        aria-label={t('select.toggle')}
                        aria-pressed={selected ? 'true' : 'false'}
                        onClick={() => { onToggleSelect(asset) }}
                      >
                        {selected ? <CheckIcon size={12} /> : <span />}
                      </IconButton>
                    ) : null}
                  </td>
                  <td>
                    <div className="omnimux-assets-list-cell-name">
                      <FileIcon size={16} />
                      <span>{asset.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="omnimux-assets-badge" style={{ position: 'static' }}>
                      {t(`type.${asset.type}`)}
                    </span>
                  </td>
                  <td style={{ color: 'var(--dsw-alias-label-secondary)', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {asset.description || '—'}
                  </td>
                  <td>
                    {asset.files?.length ? `${asset.files.length} 个素材` : '无素材'}
                    {missing ? <span className="omnimux-assets-missing" style={{ position: 'static', marginLeft: 6 }}>{t('card.missing')}</span> : null}
                  </td>
                  <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={() => { onCopy(asset) }}
                    >
                      {copiedId === asset.id ? t('card.copied') : t('card.copyCite')}
                    </Button>
                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={() => { onRemove(asset) }}
                    >
                      {t('mapping.remove')}
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
