/**
 * Pure helpers for inspiration → chat replication.
 * Zero DOM. Safe for node:test.
 *
 * Title sanitizer copies workflow folderName rules (do NOT import workflow).
 */

export const REPLICATION_SKILL = 'video-deconstruct'
/** Align with workflow MAX_PROJECT_TITLE_LENGTH; copy the constant, never import. */
export const MAX_TITLE = 200
export const FALLBACK_TITLE = '灵感复刻'

/**
 * @param {unknown} title
 * @returns {string}
 */
export function sanitizeFolderName(title) {
  const trimmed = String(title ?? '').trim()
  const replaced = trimmed
    .replace(/[<>:"/\\|?*\u0000-\u001f]/gu, '_')
    .replace(/[. ]+$/u, '')
  return replaced.replace(/^\.+$/u, '')
}

/**
 * Derive a Host-legal project title from an inspiration row.
 * @param {{ title?: unknown, source_url?: unknown, id?: unknown } | null | undefined} row
 * @returns {string}
 */
export function deriveProjectTitle(row) {
  const raw = String(row?.title || row?.source_url || row?.id || FALLBACK_TITLE).trim()
  const stripped = raw.replace(/^https?:\/\/(www\.)?/i, '')
  let name = sanitizeFolderName(stripped)
  if (name === '') name = FALLBACK_TITLE
  if (name.length > MAX_TITLE) name = name.slice(0, MAX_TITLE)
  return name
}

/**
 * @param {{ type?: unknown, local_paths?: { video?: unknown } } | null | undefined} row
 * @returns {'video' | 'image' | 'link'}
 */
export function resolveMediaType(row) {
  const t = String(row?.type || '').toLowerCase()
  if (t === 'video' || t === 'image' || t === 'link') return t
  if (row?.local_paths?.video) return 'video'
  return 'video'
}

/**
 * @param {unknown} value
 * @returns {number | null}
 */
function readFiniteSeconds(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value)
    if (Number.isFinite(n)) return n
  }
  return null
}

/**
 * Duration waterfall for `duration_budget_seconds` / `duration_source`.
 * @param {object | null | undefined} row
 * @returns {{ seconds: number, source: 'stats' | 'deconstruction' | 'default_15s' }}
 */
export function resolveDurationBudget(row) {
  const stats = row?.stats && typeof row.stats === 'object' ? row.stats : {}
  const fromStats = readFiniteSeconds(row?.duration)
    ?? readFiniteSeconds(stats.duration)
    ?? readFiniteSeconds(stats.video_duration)
  if (fromStats != null) return { seconds: fromStats, source: 'stats' }

  const decon = row?.deconstruction && typeof row.deconstruction === 'object' ? row.deconstruction : {}
  const fromDecon = readFiniteSeconds(decon.duration)
    ?? readFiniteSeconds(decon.video_duration)
    ?? readFiniteSeconds(decon.length_seconds)
  if (fromDecon != null) return { seconds: fromDecon, source: 'deconstruction' }

  return { seconds: 15, source: 'default_15s' }
}

/**
 * Composer prompt: PRD §5 template. P0 `opts.product` is ignored.
 * @param {object | null | undefined} row
 * @param {{ product?: unknown }} [opts]
 * @returns {string}
 */
export function buildReplicationPrompt(row, opts = {}) {
  void opts.product
  const id = String(row?.id || '')
  const title = String(row?.title || '').trim()
  const url = String(row?.source_url || '').trim()
  const media = resolveMediaType(row)
  const budget = resolveDurationBudget(row)
  return [
    `/${REPLICATION_SKILL}`,
    '',
    '请完全复刻原视频的脚本和画面，仅将原视频中的商品替换成我的商品。',
    '',
    '元数据：',
    `- inspiration_id: ${id}`,
    `- media_type: ${media}`,
    `- title: ${title}`,
    `- source_url: ${url}`,
    `- duration_budget_seconds: ${budget.seconds}`,
    `- duration_source: ${budget.source}`,
    '',
    '执行步骤：',
    '1. 读取 /video-deconstruct 技能说明书。未安装时不要改用其他 skill、不要搜索「爆款」或近义技能；按本提示词继续，发送后由运行时 JIT 安装。',
    '2. 调用 inspiration_get，传入上述 inspiration_id，读取五维拆解与本地媒体。会话附件槽已挂 kind=inspiration 的同一条目，不要再向用户索要原片。',
    '3. 完全复刻原片脚本结构、镜头、节奏、画面语法与出场顺序；只把原片中的商品替换为我的商品。',
    '',
    '硬约束：',
    '- 商品：若用户消息或会话附件已提供商品图 / 产品库条目，用其替换原片商品，保持原片机位与卖点节奏。若尚未提供任何商品，停止出片，明确请用户补充商品主图或从产品库挂到附件，不要编造商品外观或品牌。',
    '- 口播：仅当原片确有口播时，结合我的商品改写口播；原片没有口播则不要出现口播，禁止编口播。',
    '- 字幕：新视频不要出现字幕。',
    '- 出镜：原视频有出镜人物，新视频也必须有对应出镜；原片无出镜则不要强行加人。',
    '- 时长：新脚本时长必须控制在 duration_budget_seconds 以内（可短，不可无故加长）。若能从本地成片或附件量到真实时长，以实测为准，但仍不得超过该上限。',
    '- 媒体类型降级：media_type=image 时，复刻构图/光影/主体关系，不编造不存在的镜头运动，时长约束可忽略。media_type=link 且本地无成片时，用 source_url + 拆解报告复刻，不要假装已经下载原片。',
    '- 不要假装已经出片。等待用户补充商品或确认后再生成。',
  ].join('\n')
}
