import { activateRowKeydown } from './a11y.js'
import { previewUrl } from './api.js'
import { CheckIcon } from './icons.jsx'

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
 *   products: any[],
 *   emptyLabel: string,
 *   emptyActionLabel?: string,
 *   showEmptyAction?: boolean,
 *   onEmptyAction?: () => void,
 *   onOpen: (product: any) => void,
 *   onCopy: (product: any) => void,
 *   onRemove: (product: any) => void,
 *   copiedId?: string,
 *   selectedIds?: Set<string>,
 *   onToggleSelect?: (product: any) => void,
 * }} props
 */
export function ProductGrid({ t, products, emptyLabel, emptyActionLabel, showEmptyAction = true, onEmptyAction, onOpen, onCopy, onRemove, copiedId, selectedIds, onToggleSelect }) {
  if (products.length === 0) {
    return (
      <div style={{
        border: '1px dashed var(--dsw-alias-border-l4)',
        borderRadius: 12,
        minHeight: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: 'var(--dsw-alias-label-tertiary)',
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
              background: 'var(--dsw-alias-button-primary-fill)',
              color: 'var(--dsw-alias-label-primary-foreground)',
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
      {products.map((product) => {
        const glyph = (product.name || '?').trim().slice(0, 1)
        const cover = product.cover
        const preview = cover?.kind === 'image' && cover.id
          ? previewUrl(product.id, cover.id)
          : ''
        const selected = selectedIds?.has(product.id)
        return (
          <article
            key={product.id}
            className="omnimux-products-focusable"
            tabIndex={0}
            role="button"
            aria-selected={selected ? 'true' : 'false'}
            onClick={() => { onOpen(product) }}
            onKeyDown={activateRowKeydown(() => { onOpen(product) })}
            style={{
              border: selected
                ? '1px solid var(--dsw-alias-label-primary)'
                : '1px solid var(--dsw-alias-border-l2)',
              borderRadius: 12,
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'var(--dsw-alias-bg-base)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{
              height: 112,
              background: 'var(--dsw-alias-bg-module-platform)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--dsw-alias-label-tertiary)',
              overflow: 'hidden',
            }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt=""
                  onError={(event) => { event.currentTarget.style.display = 'none' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
              ) : null}
              <span style={{ fontSize: 28, fontWeight: 600, lineHeight: 1 }}>{glyph}</span>
              <span style={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontSize: 11,
                lineHeight: '16px',
                fontWeight: 500,
                padding: '2px 8px',
                borderRadius: 999,
                background: 'var(--dsw-alias-bg-base)',
                border: '1px solid var(--dsw-alias-border-l2)',
                color: 'var(--dsw-alias-label-secondary)',
                zIndex: 1,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
              >
                {product.kind === 'digital' ? t('kind.digital') : t('kind.physical')}
              </span>
              {onToggleSelect ? (
                <button
                  type="button"
                  className="omnimux-products-check"
                  data-selected={selected ? 'true' : 'false'}
                  aria-label={t('select.toggle')}
                  aria-pressed={selected ? 'true' : 'false'}
                  onClick={(event) => { event.stopPropagation(); onToggleSelect(product) }}
                  style={{
                    ...checkBase,
                    border: selected ? 'none' : '1px solid var(--dsw-alias-border-l3)',
                    background: selected
                      ? 'var(--dsw-alias-button-primary-fill)'
                      : 'var(--dsw-alias-bg-base)',
                    color: selected
                      ? 'var(--dsw-alias-label-primary-foreground)'
                      : 'inherit',
                  }}
                >
                  {selected ? <CheckIcon size={12} /> : null}
                </button>
              ) : null}
            </div>
            <div style={{ padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {product.name}
              </div>
              <div style={{
                fontSize: 12,
                lineHeight: '18px',
                color: 'var(--dsw-alias-label-secondary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
              >
                {product.kind === 'digital'
                  ? (product.link
                    || product.brand_strategy?.brand_basic_info?.product?.name
                    || product.description
                    || '—')
                  : (product.selling_points || product.description || '—')}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
