import { useEffect, useMemo, useState } from 'react'
import { Button, IconButton } from 'dsh-ui-kit'
import { pickCoverSrc, resolveCreatorProfileUrl, resolveTikTokEmbedUrl, triggerAnalyzeInspiration } from './api.js'
import { getInspirationPreviewData, hasDeconstruction } from './inspiration-preview-data.js'

const ICON_COPY = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M4 16V6a2 2 0 0 1 2-2h10" /></svg>
const ICON_CLOSE = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
const ICON_REPLICATE = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M4 16V6a2 2 0 0 1 2-2h10" /></svg>

function CopyButton({ value, label, copiedLabel }) {
  const [copied, setCopied] = useState(false)
  if (!value) return null
  const copy = async () => {
    try { const clipboardApi = navigator['clipboard']; await clipboardApi?.writeText(String(value)); setCopied(true); window.setTimeout(() => setCopied(false), 1400) } catch { setCopied(false) }
  }
  return <button type="button" className="omnimux-inspiration-modal-copy" onClick={copy}>{ICON_COPY}<span>{copied ? copiedLabel : label}</span></button>
}

export function InspirationPreviewModal({ row, t, onClose, onItemUpdated, onReplicate, replicateBusy }) {
  const [item, setItem] = useState(row)
  const [activeTab, setActiveTab] = useState('video')
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzeError, setAnalyzeError] = useState(null)
  useEffect(() => setItem(row), [row])
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  const data = useMemo(() => getInspirationPreviewData(item), [item])
  if (!row) return null
  const sourceUrl = data.safeItem.source_url
  const embedUrl = resolveTikTokEmbedUrl(data.analysis.embed_player_url || sourceUrl)
  const localVideoUrl = data.safeItem.local_paths?.video ? `/omnimux/inspiration/local/media/${encodeURIComponent(data.safeItem.id)}/video.mp4` : null
  const cover = pickCoverSrc(data.safeItem)
  const creator = data.creator && typeof data.creator === 'object' ? data.creator : {}
  const creatorUrl = resolveCreatorProfileUrl(creator, sourceUrl, data.platform)
  const creatorLabel = creator.name || creator.handle || ''
  const dimensions = [['hook', t('modal.deconstruction.hook'), data.hook], ['goal', t('modal.deconstruction.goal'), data.targetGoal], ['narrative', t('modal.deconstruction.narrative'), data.narrative], ['visual', t('modal.deconstruction.visual'), data.visual], ['replication', t('modal.deconstruction.replication'), data.replication]]
  const handleAnalyze = async () => {
    if (analyzing || !data.safeItem.id) return
    setAnalyzing(true); setAnalyzeError(null)
    try {
      const response = await triggerAnalyzeInspiration(data.safeItem.id)
      if (response.ok && response.body?.data) { setItem(response.body.data); onItemUpdated?.(response.body.data); setActiveTab('deconstruction') }
      else setAnalyzeError(response.body?.error || t('modal.deconstruction.error'))
    } catch (error) { setAnalyzeError(String(error?.message || error)) } finally { setAnalyzing(false) }
  }
  return <div className="omnimux-inspiration-modal-backdrop" onClick={onClose}>
    <div className="omnimux-inspiration-modal-wrapper" onClick={(event) => event.stopPropagation()}>
      <div className="omnimux-inspiration-modal-container">
        <header className="omnimux-inspiration-modal-header">
          <div className="omnimux-inspiration-modal-heading"><h2>{data.title}</h2><CopyButton value={data.title} label={t('modal.header.copy')} copiedLabel={t('modal.header.copied')} /></div>
          <div className="omnimux-inspiration-modal-header-meta">{data.duration ? <span>{data.duration}</span> : null}{data.platform ? <span className="omnimux-inspiration-modal-platform">{data.platform}</span> : null}</div>
          <div className="omnimux-inspiration-modal-actions"><Button variant="secondary" onClick={handleAnalyze} loading={analyzing} disabled={analyzing}>{t('modal.header.analyze')}</Button><IconButton className="omnimux-inspiration-modal-close" variant="ghost" size="sm" aria-label={t('close')} onClick={onClose}>{ICON_CLOSE}</IconButton></div>
        </header>
        <nav className="omnimux-inspiration-modal-mobile-tabs" role="tablist" aria-label={t('modal.header.tabs')}>
          {['video', 'script', 'deconstruction'].map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)} key={tab}>{t(`modal.panel.${tab}`)}</button>)}
        </nav>
        <main className="omnimux-inspiration-modal-body">
          <section className={`omnimux-inspiration-modal-panel omnimux-inspiration-modal-video-panel ${activeTab === 'video' ? 'is-active' : ''}`}>
            <div className="omnimux-inspiration-modal-panel-heading"><h3>{t('modal.panel.video')}</h3></div>
            <div className="omnimux-inspiration-modal-player-box">{embedUrl ? <iframe title={data.title} src={embedUrl} className="omnimux-inspiration-player-frame" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : localVideoUrl ? <video src={localVideoUrl} controls className="omnimux-inspiration-player-frame" /> : cover ? <img src={cover} alt={data.title} className="omnimux-inspiration-modal-cover-bg" /> : <div className="omnimux-inspiration-cover-fallback">{data.title.slice(0, 1)}</div>}</div>
            {sourceUrl ? <a className="omnimux-inspiration-modal-link" href={sourceUrl} target="_blank" rel="noopener noreferrer">{t('modal.meta.source')}</a> : null}
            <div className="omnimux-inspiration-modal-meta-list">
              {creatorLabel ? (
                creatorUrl ? (
                  <a className="omnimux-inspiration-creator-link" href={creatorUrl} target="_blank" rel="noopener noreferrer">{t('modal.meta.author')}: {creatorLabel}</a>
                ) : (
                  <span>{t('modal.meta.author')}: {creatorLabel}</span>
                )
              ) : null}
              {data.createdAt ? <span>{t('modal.meta.createdAt')} {data.createdAt}</span> : null}
            </div>
            {Object.keys(data.stats).length ? <div className="omnimux-inspiration-stats-grid">{[['likes', 'stat.likes', 'digg_count'], ['comments', 'stat.comments', 'comment_count'], ['shares', 'stat.shares', 'share_count']].map(([key, label, fallback]) => <div className="omnimux-inspiration-stat-item" key={key}><span className="omnimux-inspiration-stat-label">{t(label)}</span><span className="omnimux-inspiration-stat-val">{data.stats[key] ?? data.stats[fallback] ?? '-'}</span></div>)}</div> : null}
          </section>
          <section className={`omnimux-inspiration-modal-panel omnimux-inspiration-modal-script-panel ${activeTab === 'script' ? 'is-active' : ''}`}>
            <div className="omnimux-inspiration-modal-panel-heading"><h3>{t('modal.panel.script')}</h3><CopyButton value={data.script} label={t('modal.script.copy')} copiedLabel={t('modal.header.copied')} /></div>
            {data.script ? <div className="omnimux-inspiration-modal-script-content">{data.script}</div> : <div className="omnimux-inspiration-modal-empty">{t('modal.script.empty')}</div>}
          </section>
          <section className={`omnimux-inspiration-modal-panel omnimux-inspiration-modal-deconstruction-panel ${activeTab === 'deconstruction' ? 'is-active' : ''}`}>
            <div className="omnimux-inspiration-modal-panel-heading"><h3>{t('modal.panel.deconstruction')}</h3><CopyButton value={data.rawMarkdown} label={t('modal.deconstruction.copy')} copiedLabel={t('modal.header.copied')} /></div>
            {hasDeconstruction(data) ? <div className="omnimux-inspiration-modal-dimensions">{dimensions.map(([key, label, value]) => value ? <article key={key}><h4>{label}</h4><p>{value}</p></article> : null)}{data.rawMarkdown && !dimensions.some(([, , value]) => value) ? <pre>{data.rawMarkdown}</pre> : null}</div> : <div className="omnimux-inspiration-modal-empty"><p>{analyzing ? t('modal.deconstruction.analyzing') : t('modal.deconstruction.empty')}</p>{analyzeError ? <div className="omnimux-inspiration-error-text">{analyzeError}</div> : null}<Button variant="primary" onClick={handleAnalyze} loading={analyzing} disabled={analyzing}>{t('modal.deconstruction.analyze')}</Button></div>}
          </section>
        </main>
        <footer className="omnimux-inspiration-modal-footer">{typeof onReplicate === 'function' ? <Button variant="primary" disabled={Boolean(replicateBusy)} onClick={() => { onReplicate(data.safeItem); onClose?.() }}>{ICON_REPLICATE}{t('card.cta.try')}</Button> : null}</footer>
      </div>
    </div>
  </div>
}
