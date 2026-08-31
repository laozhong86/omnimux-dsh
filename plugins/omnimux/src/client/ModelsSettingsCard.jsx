import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { Button, DropdownSelect } from 'dsh-ui-kit'

const FIELDS = [
  { key: 'defaultTextModel', labelKey: 'models.defaultText', hintKey: 'models.defaultTextHint', kind: 'text' },
  { key: 'defaultImageModel', labelKey: 'models.defaultImage', hintKey: 'models.defaultImageHint', kind: 'image' },
  { key: 'defaultVideoModel', labelKey: 'models.defaultVideo', hintKey: 'models.defaultVideoHint', kind: 'video' },
  { key: 'defaultAudioModel', labelKey: 'models.defaultAudio', hintKey: 'models.defaultAudioHint', kind: 'audio' },
]

/**
 * Compact defaults card for Settings → 插件 → 可配置.
 * Writes top-level fields through official settingsScope.set / unset.
 *
 * @param {{
 *   t: (key: string, params?: Record<string, string>) => string,
 *   scope?: {
 *     getSnapshot: () => object,
 *     subscribe: (listener: () => void) => () => void,
 *     set: (field: string, value: string) => Promise<void>,
 *     unset: (field: string) => Promise<void>,
 *   },
 * }} props
 */
export function ModelsSettingsCard({ t, scope }) {
  const snapshot = useSyncExternalStore(
    (listener) => {
      if (!scope || typeof scope.subscribe !== 'function') return () => {}
      return scope.subscribe(listener)
    },
    () => (scope && typeof scope.getSnapshot === 'function'
      ? scope.getSnapshot()
      : { status: 'unavailable', value: undefined, writable: false, user: undefined }),
  )

  const [catalog, setCatalog] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    fetch('/omnimux/model-catalog')
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then((body) => {
        if (!cancelled) setCatalog(body)
      })
      .catch((caught) => {
        if (!cancelled) setError(caught instanceof Error ? caught.message : String(caught))
      })
    return () => { cancelled = true }
  }, [])

  const value = snapshot?.value && typeof snapshot.value === 'object' ? snapshot.value : {}
  const user = snapshot?.user && typeof snapshot.user === 'object' ? snapshot.user : {}
  const writable = snapshot?.writable === true && snapshot?.status === 'ready'
  const available = snapshot?.status === 'ready'

  const optionsFor = useCallback((kind) => {
    const rows = Array.isArray(catalog?.[kind]) ? catalog[kind] : []
    return rows.map((row) => ({
      value: row.id,
      label: row.label || row.id,
    }))
  }, [catalog])

  const onChange = useCallback(async (field, next) => {
    if (!scope || typeof scope.set !== 'function' || !writable || busy) return
    setBusy(true)
    setError('')
    try {
      await scope.set(field, next)
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('omnimux:model-catalog-updated'))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setBusy(false)
    }
  }, [scope, writable, busy])

  const onReset = useCallback(async (field) => {
    if (!scope || typeof scope.unset !== 'function' || !writable || busy) return
    setBusy(true)
    setError('')
    try {
      await scope.unset(field)
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('omnimux:model-catalog-updated'))
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught))
    } finally {
      setBusy(false)
    }
  }, [scope, writable, busy])

  if (!available) return null

  return (
    <div className="omnimux-models-card">
      <div className="omnimux-models-card__head">
        <h3 className="omnimux-models-card__title">{t('models.title')}</h3>
        <p className="omnimux-models-card__desc">{t('models.description')}</p>
      </div>
      <div className="omnimux-models-card__body">
        {FIELDS.map((field) => {
          const options = optionsFor(field.kind)
          const current = typeof value[field.key] === 'string' && value[field.key]
            ? value[field.key]
            : (catalog?.defaults?.[field.kind] || options[0]?.value || '')
          const overridden = Object.prototype.hasOwnProperty.call(user, field.key)
          return (
            <div key={field.key} className="omnimux-models-card__field">
              <div className="omnimux-models-card__field-head">
                <label className="omnimux-models-card__label" htmlFor={`omnimux-${field.key}`}>
                  {t(field.labelKey)}
                </label>
                {overridden ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="omnimux-models-card__reset"
                    disabled={!writable || busy}
                    onClick={() => { void onReset(field.key) }}
                  >
                    {t('models.reset')}
                  </Button>
                ) : null}
              </div>
              <DropdownSelect
                id={`omnimux-${field.key}`}
                aria-label={t(field.labelKey)}
                value={current}
                options={options}
                disabled={!writable || busy || options.length === 0}
                placeholder={t('models.loading')}
                onChange={(next) => { void onChange(field.key, next) }}
              />
              <p className="omnimux-models-card__hint">{t(field.hintKey)}</p>
            </div>
          )
        })}
      </div>
      {error ? <p className="omnimux-models-card__error" role="status">{error}</p> : null}
    </div>
  )
}
