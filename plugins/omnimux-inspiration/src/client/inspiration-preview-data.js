import {
  formatInspirationDate,
  formatTimecode,
  parseDurationSeconds,
  segmentsFromTimecodeLines,
} from '../structure-script.js'

function text(value) {
  return typeof value === 'string' ? value : ''
}

function analysisOf(item) {
  if (item.analysis && typeof item.analysis === 'object') return item.analysis
  if (item.deconstruction && typeof item.deconstruction === 'object') return item.deconstruction
  return {}
}

function collectSegments(item, analysis, script) {
  const raw = Array.isArray(analysis.segments) ? analysis.segments : (Array.isArray(item.segments) ? item.segments : [])
  const normalized = raw
    .map((row, index) => {
      if (!row || typeof row !== 'object') return null
      const value = text(row.text)
      if (!value) return null
      const start = parseDurationSeconds(row.start)
      const end = parseDurationSeconds(row.end)
      return {
        id: text(row.id) || `seg_${index + 1}`,
        start,
        end,
        text: value,
        section: text(row.section),
        startLabel: start == null ? '' : formatTimecode(start),
      }
    })
    .filter(Boolean)
  if (normalized.length) return normalized
  return segmentsFromTimecodeLines(script).map((row) => ({
    ...row,
    startLabel: row.start == null ? '' : formatTimecode(row.start),
  }))
}

function collectSections(analysis) {
  const raw = Array.isArray(analysis.sections) ? analysis.sections : []
  return raw
    .map((row, index) => {
      if (!row || typeof row !== 'object') return null
      const title = text(row.title)
      const analysisText = text(row.analysis)
      const quote = text(row.quote)
      if (!title && !analysisText && !quote) return null
      return {
        id: text(row.id) || `sec_${index + 1}`,
        title: title || `Section ${index + 1}`,
        quote,
        analysis: analysisText,
        source_segment_ids: Array.isArray(row.source_segment_ids)
          ? row.source_segment_ids.filter((id) => typeof id === 'string' && id)
          : [],
      }
    })
    .filter(Boolean)
}

export function getInspirationPreviewData(item = {}) {
  const safeItem = item && typeof item === 'object' ? item : {}
  const analysis = analysisOf(safeItem)
  const content = text(safeItem.content)
  const caption = text(safeItem.caption) || text(safeItem.description)
  const narrative = text(analysis.narrative_strategy) || text(analysis.narrative)
  const script = content || narrative || caption
  const creator = (analysis.creator && typeof analysis.creator === 'object')
    ? analysis.creator
    : (safeItem.author && typeof safeItem.author === 'object' ? safeItem.author : {})
  const stats = safeItem.stats && typeof safeItem.stats === 'object' ? safeItem.stats : {}
  const durationSeconds = parseDurationSeconds(safeItem.duration)
    ?? parseDurationSeconds(analysis.duration)
    ?? parseDurationSeconds(stats.duration)
    ?? parseDurationSeconds(stats.video_duration)
  const segments = collectSegments(safeItem, analysis, script)
  const translation = safeItem.script_translation && typeof safeItem.script_translation === 'object'
    ? safeItem.script_translation
    : {}
  return {
    safeItem,
    analysis,
    title: String(safeItem.title || analysis.video_name || '灵感详情'),
    script,
    caption,
    durationSeconds,
    durationLabel: durationSeconds == null ? '' : formatTimecode(durationSeconds),
    platform: text(safeItem.platform) || text(safeItem.source_platform),
    creator,
    stats,
    createdAt: formatInspirationDate(text(safeItem.created_at)),
    publishedAt: formatInspirationDate(text(safeItem.published_at)),
    favoritedAt: formatInspirationDate(text(safeItem.favorited_at)),
    isFavorite: Boolean(safeItem.is_favorite),
    hook: text(analysis.hook_highlight) || text(analysis.hook) || text(analysis['3s_hook']),
    targetGoal: text(analysis.target_goal) || text(analysis.goal),
    narrative,
    visual: text(analysis.visual_breakdown) || text(analysis.breakdown) || text(analysis.content_breakdown),
    replication: text(analysis.replication_action) || text(analysis.replication_guide),
    rawMarkdown: text(analysis.markdown) || text(analysis.raw_markdown) || (typeof safeItem.deconstruction === 'string' ? safeItem.deconstruction : ''),
    tags: Array.isArray(safeItem.tags) ? safeItem.tags : [],
    segments,
    hasTimecodes: segments.some((row) => row.start != null),
    segmentCount: segments.length,
    sections: collectSections(analysis),
    translationText: text(translation.text),
    translationLang: text(translation.lang),
    translationSegments: Array.isArray(translation.segments) ? translation.segments : [],
    analyzedAt: formatInspirationDate(text(analysis.analyzed_at)),
  }
}

export function hasDeconstruction(data) {
  return Boolean(data && (
    data.hook
    || data.targetGoal
    || data.narrative
    || data.visual
    || data.replication
    || data.rawMarkdown
    || (data.sections && data.sections.length)
  ))
}

export function scriptCopyText(data, translated) {
  if (translated && data.translationText) return data.translationText
  if (data.segments?.length) {
    return data.segments.map((row) => (row.startLabel ? `${row.startLabel}  ${row.text}` : row.text)).join('\n')
  }
  return data.script || ''
}

export function deconstructionCopyText(data) {
  if (data.sections?.length) {
    return data.sections.map((section) => {
      const quote = section.quote ? `\n> ${section.quote}` : ''
      return `## ${section.title}${quote}\n${section.analysis}`.trim()
    }).join('\n\n')
  }
  const blocks = [
    ['Hook', data.hook],
    ['Goal', data.targetGoal],
    ['Narrative', data.narrative],
    ['Visual', data.visual],
    ['Replication', data.replication],
  ].filter(([, value]) => value)
  if (blocks.length) return blocks.map(([title, value]) => `## ${title}\n${value}`).join('\n\n')
  return data.rawMarkdown || ''
}
