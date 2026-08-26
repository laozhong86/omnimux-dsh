import { useEffect, useRef, useState } from 'react'
import { Button, DropdownSelect, IconButton, InputField } from 'dsh-ui-kit'
import { emptyBrandStrategy, isDigitalProduct, isPlainStrategy, normalizeBrandStrategy } from '../brand-strategy.js'
import { CloseIcon, FileIcon } from './icons.jsx'

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
          <div className="omnimux-products-grid-fields">
            <textarea className="omnimux-products-textarea omnimux-products-span2" rows={2} value={selling} placeholder={t('add.sellingPlaceholder')} onChange={(event) => { setSelling(event.target.value) }} />
            <InputField value={audience} placeholder={t('add.audiencePlaceholder')} onChange={(event) => { setAudience(event.target.value) }} />
            <InputField value={brand} placeholder={t('add.brandPlaceholder')} onChange={(event) => { setBrand(event.target.value) }} />
            <textarea className="omnimux-products-textarea omnimux-products-span2" rows={2} value={features} placeholder={t('add.featuresPlaceholder')} onChange={(event) => { setFeatures(event.target.value) }} />
            <InputField value={price} placeholder={t('add.pricePlaceholder')} onChange={(event) => { setPrice(event.target.value) }} />
            <InputField value={sku} placeholder={t('add.skuPlaceholder')} onChange={(event) => { setSku(event.target.value) }} />
            <InputField value={promotion} placeholder={t('add.promotionPlaceholder')} onChange={(event) => { setPromotion(event.target.value) }} />
            <InputField value={link} placeholder={t('add.linkPlaceholder')} onChange={(event) => { setLink(event.target.value) }} />
          </div>
        ) : (
          <InputField value={link} placeholder={t('add.digitalLinkPlaceholder')} onChange={(event) => { setLink(event.target.value) }} />
        )}

        {kind === 'digital' ? (
          <div className="omnimux-products-strategy">
            <div className="omnimux-products-strategy-head">
              <div>
                <div className="omnimux-products-strategy-title">{t('strategy.title')}</div>
                <div className="omnimux-products-strategy-hint">{t('strategy.hintDigital')}</div>
              </div>
              {strategyOpen ? (
                <Button variant="outline" size="xs" onClick={() => { setStrategyOpen(false) }}>{t('strategy.collapse')}</Button>
              ) : (
                <Button variant="outline" size="xs" onClick={openStrategy}>{t('strategy.expand')}</Button>
              )}
            </div>
            {strategyOpen ? <StrategyFields t={t} strategy={strategy} patchStrategy={patchStrategy} /> : null}
          </div>
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
          <ul className="omnimux-products-filelist">
            {media.map((file, index) => {
              const id = file.id || file.real_path
              const primary = coverId ? coverId === file.id : index === 0
              return (
                <li key={id}>
                  <FileIcon size={14} />
                  <span className="omnimux-products-filelist-name">
                    {file.original_name || file.real_path}
                  </span>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => {
                      setCoverId(file.id || null)
                      if (!file.id) {
                        setMedia((current) => {
                          const next = [...current]
                          const [picked] = next.splice(index, 1)
                          next.unshift(picked)
                          return next
                        })
                      }
                    }}
                  >
                    {t('detail.primary')}
                  </Button>
                  <IconButton
                    variant="ghost"
                    size="xs"
                    aria-label={t('remove.confirm')}
                    onClick={() => {
                      setMedia((current) => current.filter((_, i) => i !== index))
                      if (file.id && coverId === file.id) setCoverId(null)
                    }}
                  >
                    ×
                  </IconButton>
                </li>
              )
            })}
          </ul>
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

/**
 * @param {{
 *   t: (key: string) => string,
 *   strategy: ReturnType<typeof emptyBrandStrategy>,
 *   patchStrategy: (fn: (next: any) => void) => void,
 * }} props
 */
function StrategyFields({ t, strategy, patchStrategy }) {
  const basic = strategy.brand_basic_info
  const identity = strategy.identity_and_product
  const mission = strategy.mission_and_positioning
  const market = strategy.market_and_competition
  const priorityOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ]

  return (
    <div className="omnimux-products-form">
      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.basic')}</div>
        <div className="omnimux-products-grid-fields">
          <InputField value={basic.company.name} placeholder={t('strategy.companyName')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.name = event.target.value }) }} />
          <InputField value={basic.company.website} placeholder={t('strategy.companyWebsite')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.website = event.target.value }) }} />
          <InputField value={basic.company.locale} placeholder={t('strategy.companyLocale')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.company.locale = event.target.value }) }} />
          <InputField value={basic.product.name} placeholder={t('strategy.productName')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.product.name = event.target.value }) }} />
          <InputField className="omnimux-products-span2" value={basic.product.category} placeholder={t('strategy.productCategory')} onChange={(event) => { patchStrategy((next) => { next.brand_basic_info.product.category = event.target.value }) }} />
        </div>
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-head">
          <div className="omnimux-products-section-title">{t('strategy.angles')}</div>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              patchStrategy((next) => {
                if (next.content_angles.length >= 10) return
                next.content_angles.push({ id: '', title: '', description: '', target_audience: '', priority: 3 })
              })
            }}
          >
            {t('strategy.addAngle')}
          </Button>
        </div>
        {strategy.content_angles.map((angle, index) => (
          <div key={angle.id || `new-${index}`} className="omnimux-products-section">
            <div className="omnimux-products-angle-row">
              <InputField value={angle.title} placeholder={t('strategy.angleTitle')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].title = event.target.value }) }} />
              <DropdownSelect
                value={String(angle.priority || 3)}
                options={priorityOptions}
                aria-label={t('strategy.angleTitle')}
                onChange={(value) => { patchStrategy((next) => { next.content_angles[index].priority = Number(value) }) }}
              />
              <IconButton
                variant="ghost"
                size="xs"
                aria-label={t('remove.confirm')}
                onClick={() => { patchStrategy((next) => { next.content_angles.splice(index, 1) }) }}
              >
                ×
              </IconButton>
            </div>
            <textarea className="omnimux-products-textarea" rows={2} value={angle.description} placeholder={t('strategy.angleDesc')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].description = event.target.value }) }} />
            <InputField value={angle.target_audience} placeholder={t('strategy.angleAudience')} onChange={(event) => { patchStrategy((next) => { next.content_angles[index].target_audience = event.target.value }) }} />
          </div>
        ))}
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.tone')}</div>
        <p className="omnimux-products-label">{t('strategy.listHint')}</p>
        <textarea className="omnimux-products-textarea" rows={3} value={linesOf(strategy.tone_and_voice.dos)} placeholder={t('strategy.dos')} onChange={(event) => { patchStrategy((next) => { next.tone_and_voice.dos = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={3} value={linesOf(strategy.tone_and_voice.donts)} placeholder={t('strategy.donts')} onChange={(event) => { patchStrategy((next) => { next.tone_and_voice.donts = listOf(event.target.value) }) }} />
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.identity')}</div>
        <textarea className="omnimux-products-textarea" rows={2} value={identity.core_identity} placeholder={t('strategy.coreIdentity')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.core_identity = event.target.value }) }} />
        <p className="omnimux-products-label">{t('strategy.listHint')}</p>
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.product_offering)} placeholder={t('strategy.offering')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.product_offering = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.unique_advantage)} placeholder={t('strategy.advantage')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.unique_advantage = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.problems_solved)} placeholder={t('strategy.problems')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.problems_solved = listOf(event.target.value) }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(identity.solutions)} placeholder={t('strategy.solutions')} onChange={(event) => { patchStrategy((next) => { next.identity_and_product.solutions = listOf(event.target.value) }) }} />
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-title">{t('strategy.mission')}</div>
        <textarea className="omnimux-products-textarea" rows={2} value={mission.mission} placeholder={t('strategy.missionText')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.mission = event.target.value }) }} />
        <p className="omnimux-products-label">{t('strategy.listHint')}</p>
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(mission.differentiation)} placeholder={t('strategy.diff')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.differentiation = listOf(event.target.value) }) }} />
        <InputField value={mission.ownable_space.statement} placeholder={t('strategy.ownableStatement')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.statement = event.target.value }) }} />
        <InputField value={mission.ownable_space.category} placeholder={t('strategy.ownableCategory')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.category = event.target.value }) }} />
        <textarea className="omnimux-products-textarea" rows={2} value={linesOf(mission.ownable_space.is_not)} placeholder={t('strategy.ownableNot')} onChange={(event) => { patchStrategy((next) => { next.mission_and_positioning.ownable_space.is_not = listOf(event.target.value) }) }} />
      </section>

      <section className="omnimux-products-section">
        <div className="omnimux-products-section-head">
          <div className="omnimux-products-section-title">{t('strategy.market')}</div>
        </div>
        <div className="omnimux-products-section-head">
          <span className="omnimux-products-label">{t('strategy.segments')}</span>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              patchStrategy((next) => {
                if (next.market_and_competition.customer_segments.length >= 10) return
                next.market_and_competition.customer_segments.push({ name: '', percentage: 0 })
              })
            }}
          >
            {t('strategy.addSegment')}
          </Button>
        </div>
        {market.customer_segments.map((row, index) => (
          <div key={`seg-${index}`} className="omnimux-products-seg-row">
            <InputField value={row.name} placeholder={t('strategy.segmentName')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.customer_segments[index].name = event.target.value }) }} />
            <InputField
              type="number"
              min={0}
              max={100}
              value={row.percentage}
              onChange={(event) => { patchStrategy((next) => { next.market_and_competition.customer_segments[index].percentage = Number(event.target.value) }) }}
            />
            <IconButton
              variant="ghost"
              size="xs"
              aria-label={t('remove.confirm')}
              onClick={() => { patchStrategy((next) => { next.market_and_competition.customer_segments.splice(index, 1) }) }}
            >
              ×
            </IconButton>
          </div>
        ))}
        <div className="omnimux-products-section-head">
          <span className="omnimux-products-label">{t('strategy.competitors')}</span>
          <Button
            variant="outline"
            size="xs"
            onClick={() => {
              patchStrategy((next) => {
                if (next.market_and_competition.competitors.length >= 10) return
                next.market_and_competition.competitors.push({ name: '', website: '' })
              })
            }}
          >
            {t('strategy.addCompetitor')}
          </Button>
        </div>
        {market.competitors.map((row, index) => (
          <div key={`comp-${index}`} className="omnimux-products-comp-row">
            <InputField value={row.name} placeholder={t('strategy.competitorName')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.competitors[index].name = event.target.value }) }} />
            <InputField value={row.website} placeholder={t('strategy.competitorWebsite')} onChange={(event) => { patchStrategy((next) => { next.market_and_competition.competitors[index].website = event.target.value }) }} />
            <IconButton
              variant="ghost"
              size="xs"
              aria-label={t('remove.confirm')}
              onClick={() => { patchStrategy((next) => { next.market_and_competition.competitors.splice(index, 1) }) }}
            >
              ×
            </IconButton>
          </div>
        ))}
      </section>
    </div>
  )
}
