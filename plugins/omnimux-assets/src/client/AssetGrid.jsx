import { activateRowKeydown } from './a11y.js'
import { CheckIcon, FileIcon } from './icons.jsx'

const checkBase = {
  position: 'absolute',
  top: 8,
  left: 8,
  width: 22,
  height: 22,
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  cursor: 'pointer',
  zIndex: 1,
}

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
      <div style={{
        border: '1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border-l3, currentColor))',
        borderRadius: 12,
        minHeight: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: 'var(--dsw-alias-label-tertiary, inherit)',
        fontSize: 13,
      }}
      >
        <p style={{ margin: 0 }}>{emptyLabel}</p>
        {emptyActionLabel && onEmptyAction && showEmptyAction ? (
          <button
            type="button"
            onClick={onEmptyAction}
            style={{
              border: 'none',
              background: 'var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))',
              color: 'var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))',
              borderRadius: 999,
              padding: '6px 14px',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {emptyActionLabel}
          </button>
        ) : null}
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
      {assets.map((asset) => {
        const missing = Number(asset.missing_file_count) > 0 && (!asset.files || asset.files.length === 0)
        const selected = selectedIds?.has(asset.id)
        return (
          <article
            key={asset.id}
            className="omnimux-assets-focusable"
            tabIndex={0}
            role="button"
            aria-selected={selected ? 'true' : 'false'}
            onClick={() => { onOpen(asset) }}
            onKeyDown={activateRowKeydown(() => { onOpen(asset) })}
            style={{
              border: selected
                ? '1px solid var(--dsw-alias-label-primary, currentColor)'
                : '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
              borderRadius: 12,
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{
              height: 112,
              background: 'var(--dsw-alias-bg-module-platform, var(--dsw-alias-interactive-bg-hover-solid, inherit))',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--dsw-alias-label-tertiary, inherit)',
            }}
            >
              {onToggleSelect ? (
                <button
                  type="button"
                  className="omnimux-assets-check"
                  data-selected={selected ? 'true' : 'false'}
                  aria-label={t('select.toggle')}
                  aria-pressed={selected ? 'true' : 'false'}
                  onClick={(event) => { event.stopPropagation(); onToggleSelect(asset) }}
                  style={{
                    ...checkBase,
                    border: selected ? 'none' : '1px solid var(--dsw-alias-border-l3, currentColor)',
                    background: selected
                      ? 'var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))'
                      : 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
                    color: selected
                      ? 'var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, inherit))'
                      : 'inherit',
                  }}
                >
                  {selected ? <CheckIcon size={12} /> : null}
                </button>
              ) : null}
              <FileIcon size={22} />
              <span style={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontSize: 11,
                lineHeight: '16px',
                padding: '2px 8px',
                borderRadius: 999,
                background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
                border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
              }}
              >
                {t(`type.${asset.type}`)}
              </span>
              {missing ? (
                <span style={{
                  position: 'absolute',
                  bottom: 8,
                  left: 8,
                  fontSize: 11,
                  color: 'var(--dsw-alias-state-warn-primary, inherit)',
                }}
                >
                  {t('card.missing')}
                </span>
              ) : null}
            </div>
            <div style={{ padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: 4, minHeight: 72 }}>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{asset.name}</div>
              <div style={{
                fontSize: 12,
                lineHeight: '18px',
                color: 'var(--dsw-alias-label-secondary, inherit)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
              >
                {asset.description || '—'}
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); onCopy(asset) }}
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 12, color: 'var(--dsw-alias-label-secondary, inherit)', padding: 0 }}
                >
                  {copiedId === asset.id ? t('card.copied') : t('card.copyCite')}
                </button>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); onRemove(asset) }}
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 12, color: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))', padding: 0 }}
                >
                  {t('mapping.remove')}
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
