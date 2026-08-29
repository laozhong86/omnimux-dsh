import { useState } from 'react'
import { Button, InputField, ModalDialog } from 'dsh-ui-kit'
import { importLocalInspiration } from './api.js'

export function InspirationInlineImportDialog({ open, t, onClose, onImported }) {
  const [url, setUrl] = useState('')
  const [tags, setTags] = useState('')
  const [autoAnalyze, setAutoAnalyze] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url.trim()) return
    setLoading(true)
    setError(null)
    try {
      const tagList = tags.split(/[,，\s]+/).filter(Boolean)
      const res = await importLocalInspiration({
        url: url.trim(),
        tags: tagList,
        auto_analyze: autoAnalyze,
      })
      if (res.ok && res.body?.data) {
        onImported(res.body.data)
        onClose()
      } else if (res.status === 409 && res.body?.data) {
        // Anti-duplicate: navigate directly to existing item
        onImported(res.body.data)
        onClose()
      } else {
        setError(res.body?.error || t('add.error'))
      }
    } catch (err) {
      setError(String(err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <ModalDialog
      open={open}
      onClose={onClose}
      title={t('add.dialogTitle')}
      closeLabel={t('close')}
      footer={(
        <>
          <Button variant="outline" onClick={onClose} disabled={loading}>{t('close')}</Button>
          <Button
            variant="primary"
            loading={loading}
            disabled={loading || !url.trim()}
            onClick={(event) => { void handleSubmit(event) }}
          >
            {loading ? t('add.importing') : t('add.submit')}
          </Button>
        </>
      )}
    >
      <form className="omnimux-inspiration-import-body" onSubmit={handleSubmit}>
        {error ? <div className="omnimux-inspiration-error-text" role="alert">{error}</div> : null}
        <InputField
          type="url"
          required
          label={t('add.urlLabel')}
          placeholder={t('add.urlPlaceholder')}
          value={url}
          disabled={loading}
          onChange={(e) => setUrl(e.target.value)}
        />
        <InputField
          type="text"
          label={t('add.tagsLabel')}
          placeholder={t('add.tagsPlaceholder')}
          value={tags}
          disabled={loading}
          onChange={(e) => setTags(e.target.value)}
        />
        <label className="omnimux-inspiration-check">
          <input
            type="checkbox"
            checked={autoAnalyze}
            onChange={(e) => setAutoAnalyze(e.target.checked)}
            disabled={loading}
          />
          <span>{t('add.autoAnalyze')}</span>
        </label>
      </form>
    </ModalDialog>
  )
}
