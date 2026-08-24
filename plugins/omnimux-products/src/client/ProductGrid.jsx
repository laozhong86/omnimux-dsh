import { activateRowKeydown } from './a11y.js'
import { previewUrl } from './api.js'

/**
 * @param {{
 *   t: (key: string) => string,
 *   products: any[],
 *   emptyLabel: string,
 *   emptyActionLabel?: string,
 *   onEmptyAction?: () => void,
 *   onOpen: (product: any) => void,
 *   onCopy: (product: any) => void,
 *   onRemove: (product: any) => void,
 *   copiedId?: string,
 * }} props
 */
export function ProductGrid({ t, products, emptyLabel, emptyActionLabel, onEmptyAction, onOpen, onCopy, onRemove, copiedId }) {
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
        {emptyActionLabel && onEmptyAction ? (
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
        return (
          <article
            key={product.id}
            className="omnimux-products-focusable"
            tabIndex={0}
            role="button"
            onClick={() => { onOpen(product) }}
            onKeyDown={activateRowKeydown(() => { onOpen(product) })}
            style={{
              border: '1px solid var(--dsw-alias-border-l2)',
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
            </div>
            <div style={{ padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: 4, minHeight: 72 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, lineHeight: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>{product.name}</div>
                <span style={{
                  flex: 'none',
                  fontSize: 11,
                  lineHeight: '16px',
                  padding: '1px 6px',
                  borderRadius: 999,
                  background: 'var(--dsw-alias-bg-module-platform)',
                  color: 'var(--dsw-alias-label-secondary)',
                }}
                >
                  {product.kind === 'digital' ? t('kind.digital') : t('kind.physical')}
                </span>
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
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); onCopy(product) }}
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 12, color: 'var(--dsw-alias-label-secondary)', padding: 0 }}
                >
                  {copiedId === product.id ? t('card.copied') : t('card.copyCite')}
                </button>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); onRemove(product) }}
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 12, color: 'var(--dsw-alias-label-error)', padding: 0 }}
                >
                  {t('remove.confirm')}
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
