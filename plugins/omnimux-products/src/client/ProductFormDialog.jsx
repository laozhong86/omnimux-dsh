import { useEffect, useRef, useState } from 'react'
import { Button, IconButton, InputField } from 'dsh-ui-kit'
import { emptyBrandStrategy, isDigitalProduct, isPlainStrategy, normalizeBrandStrategy } from '../brand-strategy.js'
import { CloseIcon, FileIcon } from './icons.jsx'
import { StrategyFields } from './ProductStrategyFields.jsx'

/**
 * @param {unknown} product
 */
function draftFrom(product) {
  try {
    const next = normalizeBrandStrategy(product?.brand_strategy)
    return next ? structuredCloneSafe(next) : emptyBrandStrategy()
  } catch {
    return emptyBrandStrategy()
  }
}

/**
 * @param {unknown} value
 */
function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value))
}

/**
 * Create / edit overlay. Parent owns dirty banner + submit.
 * @param {{
 *   t: (key: string) => string,
 *   data: { mode: 'create' | 'edit', busy: boolean, error?: string, dirty?: boolean, initial?: any },
 *   onAction: {
 *     onCancel: () => void,
 *     onPick: (kind: 'file' | 'directory') => Promise<string[]>,
 *     onSubmit: (payload: Record<string, unknown>) => void,
 *     onReload?: () => void,
 *   },
 * }} props
 */
export function ProductFormDialog({ t, data, onAction }) {
  const { mode, busy, error, dirty, initial } = data
  const { onCancel, onPick, onSubmit, onReload } = onAction
  const nameRef = useRef(null)
  const digitalAtOpen = isDigitalProduct(initial)
  const [name, setName] = useState(initial?.name ?? '')
  const [kind, setKind] = useState(initial?.kind === 'digital' ? 'digital' : 'physical')
  const [selling, setSelling] = useState(initial?.selling_points ?? '')
  const [audience, setAudience] = useState(initial?.target_audience ?? '')
  const [brand, setBrand] = useState(initial?.brand ?? '')
  const [features, setFeatures] = useState(initial?.features ?? '')
  const [price, setPrice] = useState(initial?.price ?? '')
  const [sku, setSku] = useState(initial?.sku ?? '')
  const [promotion, setPromotion] = useState(initial?.promotion ?? '')
  const [link, setLink] = useState(initial?.link ?? '')
  const [tagDraft, setTagDraft] = useState('')
  const [categories, setCategories] = useState(Array.isArray(initial?.categories) ? [...initial.categories] : [])
  const [media, setMedia] = useState(Array.isArray(initial?.media) ? initial.media.map((row) => ({ ...row })) : [])
  const [coverId, setCoverId] = useState(initial?.cover_media_id ?? null)
  const [strategyOpen, setStrategyOpen] = useState(digitalAtOpen)
  const [strategyTouched, setStrategyTouched] = useState(digitalAtOpen)
  const [strategy, setStrategy] = useState(() => draftFrom(initial))

  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCancel])

  // Re-hydrate only when the opened product identity / saved revision changes
  // (reload). Poll must not pass a new updated_at while the form is dirty.
  useEffect(() => {
    if (!initial) return
    applySnapshot(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- keyed reset
  }, [initial?.id, initial?.updated_at])

  const applySnapshot = (product) => {
    if (!product) return
    setName(product.name ?? '')
    setKind(product.kind === 'digital' ? 'digital' : 'physical')
    setSelling(product.selling_points ?? '')
    setAudience(product.target_audience ?? '')
    setBrand(product.brand ?? '')
    setFeatures(product.features ?? '')
    setPrice(product.price ?? '')
    setSku(product.sku ?? '')
    setPromotion(product.promotion ?? '')
    setLink(product.link ?? '')
    setCategories(Array.isArray(product.categories) ? [...product.categories] : [])
    setMedia(Array.isArray(product.media) ? product.media.map((row) => ({ ...row })) : [])
    setCoverId(product.cover_media_id ?? null)
    const asDigital = isDigitalProduct(product)
    setStrategyOpen(asDigital)
    setStrategyTouched(asDigital)
    setStrategy(draftFrom(product))
  }

  const openStrategy = () => {
    setStrategyOpen(true)
    setStrategyTouched(true)
  }

  const patchStrategy = (mutator) => {
    setStrategyTouched(true)
    setStrategy((current) => {
      const next = structuredCloneSafe(current)
      mutator(next)
      return next
    })
  }

  const addTag = () => {
    const next = tagDraft.trim()
    if (!next) return
    if (categories.length >= 5) {
      setTagDraft('')
      return
    }
    if (categories.some((tag) => tag.toLowerCase() === next.toLowerCase())) {
      setTagDraft('')
      return
    }
    setCategories([...categories, next])
    setTagDraft('')
  }

  const addPaths = (paths) => {
    const next = Array.isArray(paths) ? paths.filter((path) => typeof path === 'string' && path !== '') : []
    if (next.length === 0) return
    setMedia((current) => {
      const seen = new Set(current.map((file) => file.real_path))
      const extra = []
      for (const path of next) {
        if (seen.has(path)) continue
        seen.add(path)
        extra.push({ real_path: path, original_name: path.split('/').pop() || path })
      }
      return extra.length === 0 ? current : [...current, ...extra]
    })
  }

  const canSubmit = name.trim() !== '' && !busy

  const payload = () => {
    /** @type {Record<string, unknown>} */
    const body = {
      name: name.trim(),
      kind,
      link,
      categories,
      media: media.map((row) => ({
        id: row.id,
        real_path: row.real_path,
        original_name: row.original_name,
      })),
      cover_media_id: coverId,
    }
    if (kind === 'physical') {
      body.selling_points = selling
      body.target_audience = audience
      body.brand = brand
      body.features = features
      body.price = price
      body.sku = sku
      body.promotion = promotion
    }
    if (kind === 'digital' && strategyTouched) {
      try {
        body.brand_strategy = normalizeBrandStrategy(strategy)
      } catch {
        body.brand_strategy = null
      }
    }
    return body
  }

  return (
    <div className="omnimux-products-modal-backdrop" onClick={onCancel}>
      <div
        className="omnimux-products-modal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="omnimux-products-modal-title"
        onClick={(event) => { event.stopPropagation() }}
      >
        <IconButton
          className="omnimux-products-modal-close"
          variant="ghost"
          size="sm"
          aria-label={t('stage.close')}
          onClick={onCancel}
        >
          <CloseIcon size={14} />
        </IconButton>

        <div className="omnimux-products-modal-container">
          <div className="omnimux-products-modal-header">
            <h2 id="omnimux-products-modal-title" className="omnimux-products-modal-title">
              {mode === 'edit' ? t('detail.title') : t('add.title')}
            </h2>
          </div>

          <div className="omnimux-products-modal-body">
            <div className="omnimux-products-form">
        <div className="omnimux-products-name-row">
          <span className="omnimux-products-at" aria-hidden="true">@</span>
          <InputField
            ref={nameRef}
            className="omnimux-products-name-field"
            value={name}
            placeholder={t('add.namePlaceholder')}
            disabled={busy}
            onChange={(event) => { setName(event.target.value) }}
          />
        </div>

        {dirty ? (
          <div className="omnimux-products-dirty">
            <span className="omnimux-products-dirty-text">{t('add.dirty.banner')}</span>
            <Button variant="outline" size="xs" onClick={() => { onReload?.() }}>
              {t('add.dirty.reload')}
            </Button>
            <span className="omnimux-products-label">{t('add.dirty.keep')}</span>
          </div>
        ) : null}

        <div className="omnimux-products-kind-row">
          <span className="omnimux-products-kind-label">{t('kind.label')}</span>
          <Button
            variant="ghost"
            size="sm"
            className="omnimux-products-kind-chip"
            aria-pressed={kind === 'physical'}
            onClick={() => {
              setKind('physical')
              setStrategyOpen(false)
            }}
          >
            {t('kind.physical')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="omnimux-products-kind-chip"
            aria-pressed={kind === 'digital'}
            onClick={() => {
              setKind('digital')
              const persisted = isPlainStrategy(initial?.brand_strategy)
              setStrategyOpen(persisted)
              if (persisted) setStrategyTouched(true)
            }}
          >
            {t('kind.digital')}
          </Button>
        </div>

        {kind === 'physical' ? (
          <PhysicalFields
            t={t}
            values={{ selling, audience, brand, features, price, sku, promotion, link }}
            onChange={{ setSelling, setAudience, setBrand, setFeatures, setPrice, setSku, setPromotion, setLink }}
          />
        ) : (
          <InputField value={link} placeholder={t('add.digitalLinkPlaceholder')} onChange={(event) => { setLink(event.target.value) }} />
        )}

        {kind === 'digital' ? (
          <DigitalStrategyPanel
            t={t}
            strategyOpen={strategyOpen}
            strategy={strategy}
            patchStrategy={patchStrategy}
            onCollapse={() => { setStrategyOpen(false) }}
            onExpand={openStrategy}
          />
        ) : null}

        <div
          className="omnimux-products-drop"
          onDragOver={(event) => { event.preventDefault() }}
          onDrop={(event) => {
            event.preventDefault()
            const dropped = Array.from(event.dataTransfer?.files ?? [])
            addPaths(dropped.map((file) => (typeof file.path === 'string' ? file.path : '')).filter(Boolean))
          }}
        >
          <FileIcon size={22} />
          {t('add.drop')}
          <Button variant="outline" size="sm" onClick={() => { void onPick('file').then(addPaths) }}>
            {t('add.pickFiles')}
          </Button>
        </div>
        {media.length > 0 ? (
          <MediaList
            t={t}
            media={media}
            coverId={coverId}
            onSetCover={(file, index) => {
              setCoverId(file.id || null)
              if (file.id) return
              setMedia((current) => {
                const next = [...current]
                const [picked] = next.splice(index, 1)
                next.unshift(picked)
                return next
              })
            }}
            onRemove={(file, index) => {
              setMedia((current) => current.filter((_, i) => i !== index))
              if (file.id && coverId === file.id) setCoverId(null)
            }}
          />
        ) : null}

        <div>
          <div className="omnimux-products-label">{t('add.categories')}</div>
          <div className="omnimux-products-tags">
            {categories.map((tag) => (
              <span key={tag} className="omnimux-products-tag">
                {tag}
                <IconButton
                  variant="ghost"
                  size="xs"
                  aria-label={t('remove.confirm')}
                  onClick={() => { setCategories(categories.filter((item) => item !== tag)) }}
                >
                  ×
                </IconButton>
              </span>
            ))}
          </div>
          <InputField
            value={tagDraft}
            placeholder={t('add.categoriesPlaceholder')}
            onChange={(event) => { setTagDraft(event.target.value) }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                addTag()
              }
            }}
          />
        </div>
        {error ? <p className="omnimux-products-error">{error}</p> : null}
      </div>
          </div>

          <div className="omnimux-products-modal-footer">
            <Button
              variant="primary"
              disabled={!canSubmit}
              loading={busy}
              onClick={() => { onSubmit(payload()) }}
            >
              {mode === 'edit' ? t('detail.save') : t('add.submit')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhysicalFields({ t, values, onChange }) {
  const { selling, audience, brand, features, price, sku, promotion, link } = values
  return (
    <div className="omnimux-products-grid-fields">
      <textarea className="omnimux-products-textarea omnimux-products-span2" rows={2} value={selling} placeholder={t('add.sellingPlaceholder')} onChange={(event) => { onChange.setSelling(event.target.value) }} />
      <InputField value={audience} placeholder={t('add.audiencePlaceholder')} onChange={(event) => { onChange.setAudience(event.target.value) }} />
      <InputField value={brand} placeholder={t('add.brandPlaceholder')} onChange={(event) => { onChange.setBrand(event.target.value) }} />
      <textarea className="omnimux-products-textarea omnimux-products-span2" rows={2} value={features} placeholder={t('add.featuresPlaceholder')} onChange={(event) => { onChange.setFeatures(event.target.value) }} />
      <InputField value={price} placeholder={t('add.pricePlaceholder')} onChange={(event) => { onChange.setPrice(event.target.value) }} />
      <InputField value={sku} placeholder={t('add.skuPlaceholder')} onChange={(event) => { onChange.setSku(event.target.value) }} />
      <InputField value={promotion} placeholder={t('add.promotionPlaceholder')} onChange={(event) => { onChange.setPromotion(event.target.value) }} />
      <InputField value={link} placeholder={t('add.linkPlaceholder')} onChange={(event) => { onChange.setLink(event.target.value) }} />
    </div>
  )
}

function DigitalStrategyPanel({ t, strategyOpen, strategy, patchStrategy, onCollapse, onExpand }) {
  const toggleLabel = strategyOpen ? t('strategy.collapse') : t('strategy.expand')
  const onToggle = strategyOpen ? onCollapse : onExpand
  return (
    <div className="omnimux-products-strategy">
      <div className="omnimux-products-strategy-head">
        <div>
          <div className="omnimux-products-strategy-title">{t('strategy.title')}</div>
          <div className="omnimux-products-strategy-hint">{t('strategy.hintDigital')}</div>
        </div>
        <Button variant="outline" size="xs" onClick={onToggle}>{toggleLabel}</Button>
      </div>
      {strategyOpen ? <StrategyFields t={t} strategy={strategy} patchStrategy={patchStrategy} /> : null}
    </div>
  )
}

function MediaList({ t, media, coverId, onSetCover, onRemove }) {
  return (
    <ul className="omnimux-products-filelist">
      {media.map((file, index) => {
        const id = file.id || file.real_path
        return (
          <li key={id}>
            <FileIcon size={14} />
            <span className="omnimux-products-filelist-name">
              {file.original_name || file.real_path}
            </span>
            <Button
              variant="ghost"
              size="xs"
              onClick={() => { onSetCover(file, index) }}
            >
              {t('detail.primary')}
            </Button>
            <IconButton
              variant="ghost"
              size="xs"
              aria-label={t('remove.confirm')}
              onClick={() => { onRemove(file, index) }}
            >
              ×
            </IconButton>
          </li>
        )
      })}
    </ul>
  )
}
