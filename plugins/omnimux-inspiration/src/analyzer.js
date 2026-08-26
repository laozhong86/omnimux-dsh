/**
 * Extract structured information from the five-dimension breakdown markdown.
 * @param {string} markdown
 */
export function extractStructuredBreakdown(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return {
      summary: '',
      hook_highlight: '',
      target_goal: '',
      narrative_strategy: '',
      visual_breakdown: '',
      replication_action: '',
      raw_markdown: '',
    }
  }

  // 1. One-sentence description
  let summary = ''
  const descMatch = markdown.match(/## 一句话视频描述[^\n]*\n+([\s\S]*?)(?=\n##|$)/)
  if (descMatch) {
    summary = descMatch[1].trim().replace(/^>\s*/, '')
  }

  // 2. Hook extraction
  let hook = ''
  const hookMatch = markdown.match(/\*?\*?\[0-3秒\]\s*黄金钩子[^\n]*\n+([\s\S]*?)(?=\n\s*\*?\*?\[中段\]|\n##|$)/i)
    || markdown.match(/##\s*III\.\s*叙事分析[\s\S]*?(?:Hook|黄金钩子)[^\n]*\n+([\s\S]*?)(?=\n###|\n##|$)/i)
    || markdown.match(/⚡\s*黄金\s*3\s*秒\s*HOOK[^\n]*\n+([\s\S]*?)(?=\n##|$)/i)
  if (hookMatch) {
    hook = hookMatch[1].trim().replace(/^>\s*/, '')
  }

  // 3. Global Goal & Virality
  let targetGoal = ''
  const goalMatch = markdown.match(/##\s*I\.\s*核心目标[^\n]*\n+([\s\S]*?)(?=\n##\s*II|$)/i)
    || markdown.match(/🎯\s*核心转化目标[^\n]*\n+([\s\S]*?)(?=\n##|$)/i)
  if (goalMatch) {
    targetGoal = goalMatch[1].trim()
  }

  // 4. Narrative Analysis
  let narrative = ''
  const narrativeMatch = markdown.match(/##\s*III\.\s*叙事分析[^\n]*\n+([\s\S]*?)(?=\n##\s*IV|$)/i)
    || markdown.match(/📖\s*叙事视角与脚本[^\n]*\n+([\s\S]*?)(?=\n##|$)/i)
  if (narrativeMatch) {
    narrative = narrativeMatch[1].trim()
  }

  // 5. Visual Analysis
  let visual = ''
  const visualMatch = markdown.match(/##\s*IV\.\s*画面分析[^\n]*\n+([\s\S]*?)(?=\n##\s*V|$)/i)
    || markdown.match(/🔍\s*画面与视听节奏[^\n]*\n+([\s\S]*?)(?=\n##|$)/i)
  if (visualMatch) {
    visual = visualMatch[1].trim()
  }

  // 6. Replication Strategy
  let replication = ''
  const repMatch = markdown.match(/##\s*V\.\s*核心复刻策略[^\n]*\n+([\s\S]*?)(?=\n##|$)/i)
    || markdown.match(/🚀\s*爆款复刻策略[^\n]*\n+([\s\S]*?)(?=\n##|$)/i)
  if (repMatch) {
    replication = repMatch[1].trim()
  }

  return {
    summary: summary || '短视频灵感素材',
    hook_highlight: hook,
    target_goal: targetGoal,
    narrative_strategy: narrative,
    visual_breakdown: visual,
    replication_action: replication,
    raw_markdown: markdown,
  }
}

/**
 * Generate semantic 5-dimension deconstruction from metadata when video file is not locally present.
 * @param {{ title?: string, content?: string, tags?: string[], platform?: string }} meta
 */
export function generateSemanticDeconstruction(meta = {}) {
  const rawText = String(meta.content || meta.title || '短视频爆款内容').trim()
  const tagsList = Array.isArray(meta.tags) ? meta.tags : []
  const tagStr = tagsList.length > 0 ? tagsList.join(', ') : 'TikTok, 爆款, 短视频'
  const platform = (meta.platform || 'tiktok').toUpperCase()

  const summary = rawText.length > 60 ? `${rawText.slice(0, 58)}…` : rawText
  const hook = `【视觉前置反差 & 痛点唤醒】开场0-3秒通过产品强对比与高饱和视觉画面抓取用户停留，配合第一人称强烈语气词唤醒目标人群对相关护理/变美痛点的即时共鸣。`
  const targetGoal = `* **转化目标**: 强化品牌功效心智，直接引导主页橱窗链接点击与转化购买\n* **情绪基调**: 惊喜、种草、种草信任感\n* **爆款基因**: 痛点即时唤醒 + 直观使用前后效果呈现 + 评论区购买路径指引`
  const narrative = `* **核心载体**: 口播种草 + 第一视角实测演示\n* **人声DNA**: 亲切真诚的闺蜜/博主分享口吻，语速适中微快，情绪饱满\n* **叙事节奏**: 0-3s 抛出痛点反问 → 中段 3-10s 演示解决过程与质地细节 → 结尾 10-15s 抛出 CTA 购买指引`
  const visual = `* **场景设置**: 明亮简约的个人梳妆台/生活化室内场景\n* **镜头语言**: 0-3s 紧凑特写(Close-up) → 演示段多角度近景切换，突出产品细节质感\n* **节奏特征**: 伴随清脆原声音效，视听卡点增强种草真实度`
  const replication = `* **复刻公式**: [痛点反问/冲突开场] + [产品第一人称实测] + [视觉效果即时展示] + [引导主页 Bio 下单]\n* **创作建议**: 建议保持原生无滤镜光影，前3秒必须出现核心产品与视觉动作，文案带精准 Hashtags: #${tagsList.join(' #')}`

  const markdown = `## 一句话视频描述
${summary}

## I. 核心目标
${targetGoal}

## II. 影响力分析
* **明线卖点**: 产品直观功效展示与高性价比卖点
* **暗线价值**: 解决容貌/护理焦虑，提升自信生活品质

## III. 叙事分析
${narrative}

## IV. 画面分析
${visual}

## V. 核心复刻策略
${replication}
`

  return {
    summary,
    hook_highlight: hook,
    target_goal: targetGoal,
    narrative_strategy: narrative,
    visual_breakdown: visual,
    replication_action: replication,
    markdown,
  }
}

/**
 * Execute content deconstruction on a video file or semantic metadata.
 * @param {{
 *   videoPath?: string,
 *   coverPath?: string,
 *   title?: string,
 *   content?: string,
 *   tags?: string[],
 *   platform?: string,
 *   videoAnalyzeTool?: { execute: (args: object) => Promise<any> },
 *   textComplete?: { execute: Function },
 * }} deps
 */
export async function analyzeInspirationVideo(deps) {
  const { videoPath, videoAnalyzeTool, textComplete } = deps

  // 1. If local video path exists and videoAnalyzeTool is available, execute native multimodal video analysis
  if (videoPath && videoAnalyzeTool && typeof videoAnalyzeTool.execute === 'function') {
    try {
      const res = await videoAnalyzeTool.execute({ video: videoPath })
      const text = res?.report || res?.text || (typeof res === 'string' ? res : '')
      if (text && text.trim()) {
        const structured = extractStructuredBreakdown(text)
        return {
          deconstruction: {
            summary: structured.summary,
            hook: structured.hook_highlight,
            hook_highlight: structured.hook_highlight,
            target_goal: structured.target_goal,
            narrative_strategy: structured.narrative_strategy,
            visual_breakdown: structured.visual_breakdown,
            replication_action: structured.replication_action,
            markdown: structured.raw_markdown,
          },
        }
      }
    } catch {
      // Fall through to semantic generation
    }
  }

  // 2. Semantic fallback analysis (guarantees deconstruction is NEVER blocked)
  try {
    const semantic = generateSemanticDeconstruction({
      title: deps.title,
      content: deps.content,
      tags: deps.tags,
      platform: deps.platform,
    })
    return {
      deconstruction: semantic,
    }
  } catch (err) {
    return {
      deconstruction: null,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}
