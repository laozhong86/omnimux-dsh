function text(value) {
  return typeof value === 'string' ? value : ''
}

export function getInspirationPreviewData(item = {}) {
  const safeItem = item && typeof item === 'object' ? item : {}
  const analysis = safeItem.analysis && typeof safeItem.analysis === 'object'
    ? safeItem.analysis
    : (safeItem.deconstruction && typeof safeItem.deconstruction === 'object' ? safeItem.deconstruction : {})
  const content = text(safeItem.content)
  const caption = text(safeItem.caption) || text(safeItem.description)
  const narrative = text(analysis.narrative_strategy) || text(analysis.narrative)
  const script = content || narrative || caption
  const creator = (analysis.creator && typeof analysis.creator === 'object')
    ? analysis.creator
    : (safeItem.author && typeof safeItem.author === 'object' ? safeItem.author : {})
  const stats = safeItem.stats && typeof safeItem.stats === 'object' ? safeItem.stats : {}
  const durationRaw = safeItem.duration ?? analysis.duration
  const duration = typeof durationRaw === 'number' || typeof durationRaw === 'string' ? String(durationRaw) : ''
  return {
    safeItem,
    analysis,
    title: String(safeItem.title || analysis.video_name || '灵感详情'),
    script,
    caption,
    duration,
    platform: text(safeItem.platform) || text(safeItem.source_platform),
    creator,
    stats,
    createdAt: text(safeItem.created_at),
    // P0: do not surface published_at — UI only shows 入库于 created_at
    hook: text(analysis.hook_highlight) || text(analysis.hook) || text(analysis['3s_hook']),
    targetGoal: text(analysis.target_goal) || text(analysis.goal),
    narrative,
    visual: text(analysis.visual_breakdown) || text(analysis.breakdown) || text(analysis.content_breakdown),
    replication: text(analysis.replication_action) || text(analysis.replication_guide),
    rawMarkdown: text(analysis.markdown) || text(analysis.raw_markdown) || (typeof safeItem.deconstruction === 'string' ? safeItem.deconstruction : ''),
    tags: Array.isArray(safeItem.tags) ? safeItem.tags : [],
  }
}

export function hasDeconstruction(data) {
  return Boolean(data && (data.hook || data.targetGoal || data.narrative || data.visual || data.replication || data.rawMarkdown))
}
