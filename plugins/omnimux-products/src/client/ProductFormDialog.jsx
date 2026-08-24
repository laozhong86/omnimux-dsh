import { useEffect, useRef, useState } from 'react'
import { emptyBrandStrategy, isDigitalProduct, isPlainStrategy, normalizeBrandStrategy } from '../brand-strategy.js'
import { CloseIcon, FileIcon } from './icons.jsx'

const overlay = {
  position: 'fixed',
  inset: 0,
  zIndex: 320,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--dsw-alias-bg-mask-1)',
}

const sheet = {
  width: 560,
  maxWidth: 'calc(100vw - 48px)',
  maxHeight: 'calc(100vh - 48px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--dsw-alias-bg-base)',
  color: 'var(--dsw-alias-label-primary)',
  borderRadius: 16,
  border: '1px solid var(--dsw-alias-border-l2)',
}

const inputBare = {
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  width: '100%',
}

const field = {
  width: '100%',
  border: '1px solid var(--dsw-alias-border-l2)',
  borderRadius: 8,
  padding: '6px 10px',
  fontSize: 13,
  color: 'inherit',
  background: 'transparent',
  boxSizing: 'border-box',
}

const chip = {
  border: '1px solid var(--dsw-alias-border-l2)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 999,
  padding: '4px 10px',
  cursor: 'pointer',
  fontSize: 12,
}

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
 * @param {unknown} list
 */
function linesOf(list) {
  return Array.isArray(list) ? list.join('\n') : ''
}

/**
 * @param {string} text
 */
function listOf(text) {
  return String(text).split('\n').map((row) => row.trim()).filter(Boolean)
}

const miniBtn = {
  border: '1px solid var(--dsw-alias-border-l2)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 999,
  padding: '4px 10px',
  cursor: 'pointer',
  fontSize: 12,
}

/**
 * Create / edit overlay. Parent owns dirty banner + submit.
 * @param {{
 *   t: (key: string) => string,
 *   mode: 'create' | 'edit',
 *   busy: boolean,
 *   error?: string,
 *   dirty?: boolean,
 *   initial?: any,
 *   onCancel: () => void,
 *   onPick: (kind: 'file' | 'directory') => Promise<string[]>,
 *   onSubmit: (payload: Record<string, unknown>) => void,
 *   onReload?: () => void,
 * }} props
 */
export function ProductFormDialog({ t, mode, busy, error, dirty, initial, onCancel, onPick, onSubmit, onReload }) {
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

  const labelStyle = { fontSize: 12, color: 'var(--dsw-alias-label-secondary)', margin: '0 0 6px' }

  return (
    <div
      style={overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCancel()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={mode === 'edit' ? t('detail.title') : t('add.title')}
        style={sheet}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onCancel()
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 20px 8px' }}>
          <span style={{ color: 'var(--dsw-alias-label-tertiary)', fontSize: 18 }}>@</span>
          <input
            ref={nameRef}
            value={name}
            placeholder={t('add.namePlaceholder')}
            onChange={(event) => { setName(event.target.value) }}
            style={{ ...inputBare, fontSize: 18, fontWeight: 500, lineHeight: '28px' }}
          />
          <button
            type="button"
            aria-label={t('stage.close')}
            onClick={onCancel}
            style={{
              border: 'none', background: 'transparent', cursor: 'pointer',
              width: 28, height: 28, borderRadius: 8, color: 'inherit',
            }}
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {dirty ? (
          <div style={{
            margin: '0 20px 12px',
            padding: '8px 12px',
            borderRadius: 8,
            fontSize: 12,
            lineHeight: '18px',
            background: 'var(--dsw-alias-bg-module-platform)',
            color: 'var(--dsw-alias-label-secondary)',
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          >
            <span style={{ flex: 1, minWidth: 160 }}>{t('add.dirty.banner')}</span>
            <button
              type="button"
              onClick={() => { onReload?.() }}
              style={{
                border: '1px solid var(--dsw-alias-border-l2)',
                background: 'transparent',
                color: 'inherit',
                borderRadius: 999,
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: 12,
              }}
            >
              {t('add.dirty.reload')}
            </button>
            <span style={{ fontSize: 12 }}>{t('add.dirty.keep')}</span>
          </div>
        ) : null}

        <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-secondary)' }}>{t('kind.label')}</span>
          <button
            type="button"
            onClick={() => {
              setKind('physical')
              setStrategyOpen(false)
            }}
            style={{
              ...chip,
              background: kind === 'physical' ? 'var(--dsw-alias-bg-module-platform)' : 'transparent',
            }}
          >
            {t('kind.physical')}
          </button>
          <button
            type="button"
            onClick={() => {
              setKind('digital')
              const persisted = isPlainStrategy(initial?.brand_strategy)
              setStrategyOpen(persisted)
              if (persisted) setStrategyTouched(true)
            }}
            style={{
              ...chip,
              background: kind === 'digital' ? 'var(--dsw-alias-bg-module-platform)' : 'transparent',
            }}
          >
            {t('kind.digital')}
          </button>
        </div>

        {kind === 'physical' ? (
          <div style={{ padding: '0 20px 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <textarea rows={2} value={selling} placeholder={t('add.sellingPlaceholder')} onChange={(event) => { setSelling(event.target.value) }} style={{ ...field, gridColumn: '1 / -1', resize: 'vertical' }} />
            <input value={audience} placeholder={t('add.audiencePlaceholder')} onChange={(event) => { setAudience(event.target.value) }} style={field} />
            <input value={brand} placeholder={t('add.brandPlaceholder')} onChange={(event) => { setBrand(event.target.value) }} style={field} />
            <textarea rows={2} value={features} placeholder={t('add.featuresPlaceholder')} onChange={(event) => { setFeatures(event.target.value) }} style={{ ...field, gridColumn: '1 / -1', resize: 'vertical' }} />
            <input value={price} placeholder={t('add.pricePlaceholder')} onChange={(event) => { setPrice(event.target.value) }} style={field} />
            <input value={sku} placeholder={t('add.skuPlaceholder')} onChange={(event) => { setSku(event.target.value) }} style={field} />
            <input value={promotion} placeholder={t('add.promotionPlaceholder')} onChange={(event) => { setPromotion(event.target.value) }} style={field} />
            <input value={link} placeholder={t('add.linkPlaceholder')} onChange={(event) => { setLink(event.target.value) }} style={field} />
          </div>
        ) : (
          <div style={{ padding: '0 20px 12px' }}>
            <input value={link} placeholder={t('add.digitalLinkPlaceholder')} onChange={(event) => { setLink(event.target.value) }} style={field} />
          </div>
        )}

        {kind === 'digital' ? (
          <div style={{ borderTop: '1px solid var(--dsw-alias-border-l2)', padding: '12px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{t('strategy.title')}</div>
                <div style={{ fontSize: 12, color: 'var(--dsw-alias-label-tertiary)', marginTop: 2 }}>
                  {t('strategy.hintDigital')}
                </div>
              </div>
              {strategyOpen ? (
                <button type="button" onClick={() => { setStrategyOpen(false) }} style={miniBtn}>{t('strategy.collapse')}</button>
              ) : (
                <button type="button" onClick={openStrategy} style={miniBtn}>{t('strategy.expand')}</button>
              )}
            </div>

            {strategyOpen ? (
              <StrategyFields t={t} strategy={strategy} patchStrategy={patchStrategy} field={field} labelStyle={labelStyle} miniBtn={miniBtn} />
            ) : null}
          </div>
        ) : null}

        <div style={{ borderTop: '1px solid var(--dsw-alias-border-l2)', padding: 16 }}>
          <div
            onDragOver={(event) => { event.preventDefault() }}
            onDrop={(event) => {
              event.preventDefault()
              const dropped = Array.from(event.dataTransfer?.files ?? [])
              addPaths(dropped.map((file) => (typeof file.path === 'string' ? file.path : '')).filter(Boolean))
            }}
            style={{
              width: '100%',
              minHeight: 96,
              border: '1px dashed var(--dsw-alias-border-l4)',
              borderRadius: 12,
              color: 'var(--dsw-alias-label-tertiary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              fontSize: 13,
              padding: 16,
              boxSizing: 'border-box',
            }}
          >
            <FileIcon size={22} />
            {t('add.drop')}
            <button
              type="button"
              onClick={() => { void onPick('file').then(addPaths) }}
              style={{
                border: '1px solid var(--dsw-alias-border-l2)',
                background: 'transparent',
                color: 'inherit',
                borderRadius: 999,
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: 12,
              }}
            >
              {t('add.pickFiles')}
            </button>
          </div>
          {media.length > 0 ? (
            <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {media.map((file, index) => {
                const id = file.id || file.real_path
                const primary = coverId ? coverId === file.id : index === 0
                return (
                  <li key={id} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--dsw-alias-label-secondary)', alignItems: 'center' }}>
                    <FileIcon size={14} />
                    <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {file.original_name || file.real_path}
                    </span>
                    <button
                      type="button"
                      onClick={() => { setCoverId(file.id || null); if (!file.id) {
                        setMedia((current) => current.map((row, i) => i === index ? row : row))
                        // path-only rows: first item is cover after reorder
                        setMedia((current) => {
                          const next = [...current]
                          const [picked] = next.splice(index, 1)
                          next.unshift(picked)
                          return next
                        })
                      } }}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontSize: 11,
                        color: primary ? 'inherit' : 'var(--dsw-alias-label-tertiary)',
                      }}
                    >
                      {t('detail.primary')}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMedia((current) => current.filter((_, i) => i !== index))
                        if (file.id && coverId === file.id) setCoverId(null)
                      }}
                      style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'inherit' }}
                    >
                      ×
                    </button>
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>

        <div style={{ borderTop: '1px solid var(--dsw-alias-border-l2)', padding: '10px 16px 16px' }}>
          <div style={{ fontSize: 13, color: 'var(--dsw-alias-label-secondary)', marginBottom: 8 }}>{t('add.categories')}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {categories.map((tag) => (
              <span key={tag} style={{ fontSize: 12, padding: '2px 8px', borderRadius: 999, background: 'var(--dsw-alias-bg-module-platform)' }}>
                {tag}
                <button
                  type="button"
                  onClick={() => { setCategories(categories.filter((item) => item !== tag)) }}
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: 4 }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            value={tagDraft}
            placeholder={t('add.categoriesPlaceholder')}
            onChange={(event) => { setTagDraft(event.target.value) }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                addTag()
              }
            }}
            style={field}
          />
          {error ? (
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--dsw-alias-label-error)' }}>{error}</p>
          ) : null}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => { onSubmit(payload()) }}
              style={{
                border: 'none',
                background: canSubmit ? 'var(--dsw-alias-button-primary-fill)' : 'var(--dsw-alias-border-l2)',
                color: 'var(--dsw-alias-label-primary-foreground)',
                borderRadius: 999,
                padding: '8px 16px',
                fontSize: 14,
                fontWeight: 500,
                cursor: canSubmit ? 'pointer' : 'default',
              }}
            >
              {mode === 'edit' ? t('detail.save') : t('add.submit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   strategy: ReturnType<typeof emptyBrandStrategy>,
 *   patchStrategy: (fn: (next: any) => void) => void,
 *   field: object,
 *   labelStyle: object,
 *   miniBtn: object,
 * }} props
 */
function StrategyFields({ t, strategy, patchStrategy, field, labelStyle, miniBtn }) {
  const basic = strategy.brand_basic_info
  const identity = strategy.identity_and_product
  const mission = strategy.mission_and_positioning
  const market = strategy.market_and_competition

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
      <section>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{t('strategy.basic')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <input value={basic.company.name} placeholder={t('strategy.companyName')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.name = event.target.value }) }} style={field} />
          <input value={basic.company.website} placeholder={t('strategy.companyWebsite')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.website = event.target.value }) }} style={field} />
          <input value={basic.company.locale} placeholder={t('strategy.companyLocale')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.locale = event.target.value }) }} style={field} />
          <input value={basic.product.name} placeholder={t('strategy.productName')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.product.name = event.target.value }) }} style={field} />
          <input value={basic.product.category} placeholder={t('strategy.productCategory')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.product.category = event.target.value }) }} style={{ ...field, gridColumn: '1 / -1' }} />
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>{t('strategy.angles')}</div>
          <button
            type="button"
            onClick={() => {
              patchStrategy((next) => {
                if (next.content_angles.length >= 10) return
                next.content_angles.push({ id: '', title: '', description: '', target_audience: '', priority: 3 })
              })
            }}
            style={miniBtn}
          >
            {t('strategy.addAngle')}
          </button>
        </div>
        {strategy.content_angles.map((angle, index) => (
          <div key={angle.id || `new-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr 72px 28px', gap: 6, marginBottom: 8 }}>
            <input value={angle.title} placeholder={t('strategy.angleTitle')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].title = event.target.value }) }} style={field} />
            <select
              value={String(angle.priority || 3)}
              onChange={(event) => { patchStrategy((next) => { next.content_angles[index].priority = Number(event.target.value) }) }}
              style={{
                ...field,
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='12' height='12' fill='none' stroke='rgba(255,255,255,0.45)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 6px center',
                paddingRight: 22,
                cursor: 'pointer',
              }}
            >
              <option value="1" style={{ background: '#1c1c1f', color: '#ededed' }}>P1</option>
              <option value="2" style={{ background: '#1c1c1f', color: '#ededed' }}>P2</option>
              <option value="3" style={{ background: '#1c1c1f', color: '#ededed' }}>P3</option>
            </select>
            <button type="button" onClick={() => { patchStrategy((next) => { next.content_angles.splice(index, 1) }) }} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'inherit' }}>×</button>
            <textarea rows={2} value={angle.description} placeholder={t('strategy.angleDesc')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].description = event.target.value }) }} style={{ ...field, gridColumn: '1 / -1', resize: 'vertical' }} />
            <input value={angle.target_audience} placeholder={t('strategy.angleAudience')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].target_audience = event.target.value }) }} style={{ ...field, gridColumn: '1 / -1' }} />
          </div>
        ))}
      </section>

      <section>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{t('strategy.tone')}</div>
        <p style={labelStyle}>{t('strategy.listHint')}</p>
        <textarea rows={3} value={linesOf(strategy.tone_and_voice.dos)} placeholder={t('strategy.dos')} onChange={(event) => { patchStrategy((next) => { next.tone_and_voice.dos = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <textarea rows={3} value={linesOf(strategy.tone_and_voice.donts)} placeholder={t('strategy.donts')} onChange={(event) => { patchStrategy((next) => { next.tone_and_voice.donts = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical' }} />
      </section>

      <section>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{t('strategy.identity')}</div>
        <textarea rows={2} value={identity.core_identity} placeholder={t('strategy.coreIdentity')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.core_identity = event.target.value }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <p style={labelStyle}>{t('strategy.listHint')}</p>
        <textarea rows={2} value={linesOf(identity.product_offering)} placeholder={t('strategy.offering')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.product_offering = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <textarea rows={2} value={linesOf(identity.unique_advantage)} placeholder={t('strategy.advantage')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.unique_advantage = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <textarea rows={2} value={linesOf(identity.problems_solved)} placeholder={t('strategy.problems')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.problems_solved = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <textarea rows={2} value={linesOf(identity.solutions)} placeholder={t('strategy.solutions')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.solutions = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical' }} />
      </section>

      <section>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{t('strategy.mission')}</div>
        <textarea rows={2} value={mission.mission} placeholder={t('strategy.missionText')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.mission = event.target.value }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <p style={labelStyle}>{t('strategy.listHint')}</p>
        <textarea rows={2} value={linesOf(mission.differentiation)} placeholder={t('strategy.diff')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.differentiation = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical', marginBottom: 8 }} />
        <input value={mission.ownable_space.statement} placeholder={t('strategy.ownableStatement')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.statement = event.target.value }) }} style={{ ...field, marginBottom: 8 }} />
        <input value={mission.ownable_space.category} placeholder={t('strategy.ownableCategory')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.category = event.target.value }) }} style={{ ...field, marginBottom: 8 }} />
        <textarea rows={2} value={linesOf(mission.ownable_space.is_not)} placeholder={t('strategy.ownableNot')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.is_not = listOf(event.target.value) }) }} style={{ ...field, resize: 'vertical' }} />
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>{t('strategy.market')}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-secondary)' }}>{t('strategy.segments')}</span>
          <button
            type="button"
            onClick={() => {
              patchStrategy((next) => {
                if (next.market_and_competition.customer_segments.length >= 10) return
                next.market_and_competition.customer_segments.push({ name: '', percentage: 0 })
              })
            }}
            style={miniBtn}
          >
            {t('strategy.addSegment')}
          </button>
        </div>
        {market.customer_segments.map((row, index) => (
          <div key={`seg-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr 72px 28px', gap: 6, marginBottom: 6 }}>
            <input value={row.name} placeholder={t('strategy.segmentName')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.customer_segments[index].name = event.target.value }) }} style={field} />
            <input
              type="number"
              min={0}
              max={100}
              value={row.percentage}
              onChange={(event) => { patchStrategy((next) => { next.market_and_competition.customer_segments[index].percentage = Number(event.target.value) }) }}
              style={field}
            />
            <button type="button" onClick={() => { patchStrategy((next) => { next.market_and_competition.customer_segments.splice(index, 1) }) }} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'inherit' }}>×</button>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0 6px' }}>
          <span style={{ fontSize: 12, color: 'var(--dsw-alias-label-secondary)' }}>{t('strategy.competitors')}</span>
          <button
            type="button"
            onClick={() => {
              patchStrategy((next) => {
                if (next.market_and_competition.competitors.length >= 10) return
                next.market_and_competition.competitors.push({ name: '', website: '' })
              })
            }}
            style={miniBtn}
          >
            {t('strategy.addCompetitor')}
          </button>
        </div>
        {market.competitors.map((row, index) => (
          <div key={`comp-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 28px', gap: 6, marginBottom: 6 }}>
            <input value={row.name} placeholder={t('strategy.competitorName')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.competitors[index].name = event.target.value }) }} style={field} />
            <input value={row.website} placeholder={t('strategy.competitorWebsite')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.competitors[index].website = event.target.value }) }} style={field} />
            <button type="button" onClick={() => { patchStrategy((next) => { next.market_and_competition.competitors.splice(index, 1) }) }} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'inherit' }}>×</button>
          </div>
        ))}
      </section>
    </div>
  )
}
