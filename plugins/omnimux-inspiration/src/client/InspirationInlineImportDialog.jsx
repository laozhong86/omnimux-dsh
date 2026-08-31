import { useState } from 'react'
import { Button, InputField, ModalDialog } from 'dsh-ui-kit'
import { importLocalInspiration } from './api.js'
import {
  AutoAnalyzeSwitch,
  CollapsibleTagsField,
} from './import-dialog-controls.jsx'
import { readAutoAnalyzePreference } from './import-dialog-prefs.js'

export function InspirationInlineImportDialog({ open, t, onClose, onImported }) {
  const [url, setUrl] = useState('')
  const [tags, setTags] = useState('')
  const [autoAnalyze, setAutoAnalyze] = useState(() => readAutoAnalyzePreference())
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
        <CollapsibleTagsField
          t={t}
          value={tags}
          disabled={loading}
          onChange={setTags}
        />
        <AutoAnalyzeSwitch
          t={t}
          checked={autoAnalyze}
          disabled={loading}
          onChange={setAutoAnalyze}
        />
      </form>
    </ModalDialog>
  )
}
