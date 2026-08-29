import { useEffect, useState } from 'react'
import { Button, IconButton } from 'dsh-ui-kit'
import {
  coverGlyph,
  pickCoverSrc,
  resolveCreatorProfileUrl,
  resolveTikTokEmbedUrl,
  triggerAnalyzeInspiration,
} from './api.js'

export function InspirationPreviewModal({ row, t, onClose, onItemUpdated }) {
  const [item, setItem] = useState(row)
  const [viewMode, setViewMode] = useState('player') // 'player' | 'deconstruct'
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzeError, setAnalyzeError] = useState(null)

  useEffect(() => {
    setItem(row)
  }, [row])

  const safeItem = item || {}
  const analysis = safeItem.analysis && typeof safeItem.analysis === 'object' ? safeItem.analysis : (safeItem.deconstruction || {})
  const title = String(safeItem.title || analysis.video_name || '灵感详情')
  const caption = typeof safeItem.content === 'string' ? safeItem.content : (safeItem.caption || safeItem.description || '')
  const videoDescription = typeof analysis.video_description === 'string' ? analysis.video_description : ''
  const rawEmbed = analysis.embed_player_url || safeItem.source_url
  const embedUrl = resolveTikTokEmbedUrl(rawEmbed) || (safeItem.source_url ? resolveTikTokEmbedUrl(safeItem.source_url) : null)
  const cover = pickCoverSrc(safeItem)
  const tags = Array.isArray(safeItem.tags) ? safeItem.tags : []
  const creator = analysis.creator || safeItem.author || { name: 'Creator', handle: safeItem.source_platform || 'social' }
  const creatorProfileUrl = resolveCreatorProfileUrl(creator, safeItem.source_url, safeItem.platform || safeItem.source_platform)

  const localVideoUrl = safeItem.local_paths?.video ? `/omnimux/inspiration/local/media/${encodeURIComponent(safeItem.id)}/video.mp4` : null

  const hook = analysis.hook_highlight || analysis.hook || analysis['3s_hook'] || ''
  const targetGoal = analysis.target_goal || analysis.goal || ''
  const narrative = analysis.narrative_strategy || analysis.narrative || ''
  const breakdown = analysis.visual_breakdown || analysis.breakdown || analysis.content_breakdown || ''
  const replication = analysis.replication_action || analysis.replication_guide || ''
  const rawMarkdown = analysis.markdown || analysis.raw_markdown || (typeof safeItem.deconstruction === 'string' ? safeItem.deconstruction : '')

  const hasDeconstruction = Boolean(hook || targetGoal || narrative || breakdown || replication || rawMarkdown)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleTriggerAnalyze = async () => {
    if (analyzing || !safeItem.id) return
    setAnalyzing(true)
    setAnalyzeError(null)
    try {
      const res = await triggerAnalyzeInspiration(safeItem.id)
      if (res.ok && res.body?.data) {
        setItem(res.body.data)
        if (onItemUpdated) onItemUpdated(res.body.data)
        setViewMode('deconstruct')
      } else {
        setAnalyzeError(res.body?.error || '解析服务暂时不可用')
      }
    } catch (err) {
      setAnalyzeError(String(err.message || err))
    } finally {
      setAnalyzing(false)
    }
  }

  if (!row) return null

  return (
    <div className="omnimux-inspiration-modal-backdrop" onClick={onClose}>
      <div className="omnimux-inspiration-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <IconButton
          className="omnimux-inspiration-modal-close"
          variant="ghost"
          size="sm"
          aria-label={t('close')}
          onClick={onClose}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </IconButton>

        <div className="omnimux-inspiration-modal-container">
          {/* 左侧：大画幅视窗（作品 ↔ 作品解析） */}
          <div className="omnimux-inspiration-modal-left">
          {/* 模式切换 Header */}
          <div className="omnimux-inspiration-preview-switch">
            <div
              className="omnimux-inspiration-switch-group"
              role="tablist"
              aria-label={t('view.switch')}
            >
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'player'}
                className={`omnimux-inspiration-switch-btn ${viewMode === 'player' ? 'active' : ''}`}
                onClick={() => setViewMode('player')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M3.2 2.1v11.8L13.6 8 3.2 2.1z" />
                </svg>
                <span>{t('view.player')}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'deconstruct'}
                className={`omnimux-inspiration-switch-btn ${viewMode === 'deconstruct' ? 'active' : ''}`}
                onClick={() => setViewMode('deconstruct')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 5 8 2.2 14 5" />
                  <path d="M2 8.4 8 5.6 14 8.4" />
                  <path d="M2 11.8 8 9 14 11.8" />
                </svg>
                <span>{t('view.deconstruct')}</span>
              </button>
            </div>
          </div>

          {/* 视窗内容 A：作品播放器 */}
          {viewMode === 'player' ? (
            <div className="omnimux-inspiration-preview-player">
              <div className="omnimux-inspiration-modal-player-box">
                {embedUrl ? (
                  <iframe
                    title={title}
                    src={embedUrl}
                    className="omnimux-inspiration-player-frame"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : localVideoUrl ? (
                  <video
                    src={localVideoUrl}
                    controls
                    autoPlay
                    className="omnimux-inspiration-player-frame"
                  />
                ) : cover ? (
                  <img src={cover} alt={title} className="omnimux-inspiration-modal-cover-bg" />
                ) : (
                  <div className="omnimux-inspiration-cover-fallback">
                    {coverGlyph(title)}
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {/* 视窗内容 B：作品解析看板 */}
          {viewMode === 'deconstruct' ? (
            <div className="omnimux-inspiration-deconstruct-view">
              {hasDeconstruction ? (
                <div className="omnimux-inspiration-dim-content">
                  {hook ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.hook')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{hook}</div>
                    </div>
                  ) : null}

                  {targetGoal ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.goal')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{targetGoal}</div>
                    </div>
                  ) : null}

                  {narrative ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.narrative')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{narrative}</div>
                    </div>
                  ) : null}

                  {breakdown ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.visual')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{breakdown}</div>
                    </div>
                  ) : null}

                  {replication ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.replication')}</h3>
                      </div>
                      <div className="omnimux-inspiration-dim-body">{replication}</div>
                    </div>
                  ) : null}

                  {rawMarkdown && !hook && !targetGoal && !narrative && !breakdown && !replication ? (
                    <div className="omnimux-inspiration-dim-card">
                      <div className="omnimux-inspiration-dim-header">
                        <h3 className="omnimux-inspiration-dim-title">{t('dim.title.raw')}</h3>
                      </div>
                      <pre className="omnimux-inspiration-dim-code">{rawMarkdown}</pre>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="omnimux-inspiration-deconstruct-empty">
                  <div className="omnimux-inspiration-fallback-icon omnimux-inspiration-fallback-icon--lg">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="omnimux-inspiration-empty-breakdown-title">
                      {analyzing ? t('empty.breakdownAnalyzing') : t('empty.breakdownTitle')}
                    </h3>
                    <p className="omnimux-inspiration-empty-breakdown-desc">
                      {t('empty.breakdownDesc')}
                    </p>
                  </div>
                  {analyzeError ? (
                    <div className="omnimux-inspiration-error-text">{analyzeError}</div>
                  ) : null}
                  <Button
                    variant="primary"
                    className="omnimux-inspiration-trigger-btn"
                    onClick={handleTriggerAnalyze}
                    loading={analyzing}
                    disabled={analyzing}
                  >
                    {analyzing ? t('action.analyzing') : t('action.triggerAnalyze')}
                  </Button>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* 右侧：元数据信息面板（创作者、原帖链接、数据指标、标签） */}
        <div className="omnimux-inspiration-modal-right">
          {/* 创作者卡片 */}
          <div className="omnimux-inspiration-creator-card">
            {creatorProfileUrl ? (
              <a
                href={creatorProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="omnimux-inspiration-creator-left omnimux-inspiration-creator-link"
                title={`访问 @${creator.handle || creator.name} 的主页`}
              >
                <div className="omnimux-inspiration-modal-avatar">
                  {creator.avatar ? (
                    <img
                      src={creator.avatar}
                      alt={creator.name || creator.handle}
                      className="omnimux-inspiration-avatar-img"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  ) : null}
                  <span>{(creator.name || creator.handle || 'U').slice(0, 1).toUpperCase()}</span>
                </div>
                <div className="omnimux-inspiration-creator-info">
                  <div className="omnimux-inspiration-modal-handle">
                    <span>{creator.name || creator.handle || 'Creator'}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="omnimux-inspiration-ext-icon">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </div>
                  {creator.handle ? <div className="omnimux-inspiration-creator-handle">@{creator.handle.replace(/^@+/, '')}</div> : null}
                </div>
              </a>
            ) : (
              <div className="omnimux-inspiration-creator-left">
                <div className="omnimux-inspiration-modal-avatar">
                  {creator.avatar ? (
                    <img
                      src={creator.avatar}
                      alt={creator.name || creator.handle}
                      className="omnimux-inspiration-avatar-img"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  ) : null}
                  <span>{(creator.name || creator.handle || 'U').slice(0, 1).toUpperCase()}</span>
                </div>
                <div className="omnimux-inspiration-creator-info">
                  <div className="omnimux-inspiration-modal-handle">{creator.name || creator.handle || 'Creator'}</div>
                  {creator.handle ? <div className="omnimux-inspiration-creator-handle">@{creator.handle.replace(/^@+/, '')}</div> : null}
                </div>
              </div>
            )}

            {safeItem.source_url ? (
              <a
                href={safeItem.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="omnimux-inspiration-modal-link"
              >
                <span>{t('openSource')}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            ) : null}
          </div>

          {/* 互动数据 Stats 矩阵 */}
          {safeItem.stats && Object.keys(safeItem.stats).length > 0 ? (
            <div className="omnimux-inspiration-stats-grid">
              <div className="omnimux-inspiration-stat-item">
                <span className="omnimux-inspiration-stat-label">点赞</span>
                <span className="omnimux-inspiration-stat-val">{safeItem.stats.likes ?? safeItem.stats.digg_count ?? '-'}</span>
              </div>
              <div className="omnimux-inspiration-stat-item">
                <span className="omnimux-inspiration-stat-label">评论</span>
                <span className="omnimux-inspiration-stat-val">{safeItem.stats.comments ?? safeItem.stats.comment_count ?? '-'}</span>
              </div>
              <div className="omnimux-inspiration-stat-item">
                <span className="omnimux-inspiration-stat-label">分享</span>
                <span className="omnimux-inspiration-stat-val">{safeItem.stats.shares ?? safeItem.stats.share_count ?? '-'}</span>
              </div>
            </div>
          ) : null}

          {/* 标签 Tags */}
          {tags.length > 0 ? (
            <div className="omnimux-inspiration-modal-tags">
              {tags.map((tag) => (
                <span key={tag} className="omnimux-inspiration-modal-tag">#{tag}</span>
              ))}
            </div>
          ) : null}

          {/* 作品标题与原贴文案 / 描述 */}
          <div className="omnimux-inspiration-caption-block">
            {title ? (
              <div className="omnimux-inspiration-modal-title-text">{title}</div>
            ) : null}
            {caption ? (
              <div className="omnimux-inspiration-caption-section">
                <span className="omnimux-inspiration-caption-label">{t('meta.originalText')}</span>
                <p className="omnimux-inspiration-caption-text">{caption}</p>
              </div>
            ) : null}
            {videoDescription && videoDescription !== caption ? (
              <div className="omnimux-inspiration-caption-section">
                <span className="omnimux-inspiration-caption-label">视频概要</span>
                <p className="omnimux-inspiration-summary-text">{videoDescription}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
