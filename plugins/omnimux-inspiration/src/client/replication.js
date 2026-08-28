/**
 * Pure helpers for inspiration → chat replication.
 * Zero DOM. Safe for node:test.
 *
 * Title sanitizer copies workflow folderName rules (do NOT import workflow).
 */

export const REPLICATION_SKILL = 'video-replication'
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
 * Composer prompt: skill gesture + inspiration_id / media_type / title / url.
 * @param {{ id?: unknown, title?: unknown, source_url?: unknown, type?: unknown, local_paths?: object } | null | undefined} row
 * @returns {string}
 */
export function buildReplicationPrompt(row) {
  const id = String(row?.id || '')
  const title = String(row?.title || '').trim()
  const url = String(row?.source_url || '').trim()
  const media = resolveMediaType(row)
  return [
    `/${REPLICATION_SKILL}`,
    '',
    '请复刻灵感库条目。',
    `- inspiration_id: ${id}`,
    `- media_type: ${media}`,
    `- title: ${title}`,
    `- source_url: ${url}`,
    '',
    '步骤：',
    '1. 若已安装对应 skill，先读取技能说明书。',
    '2. 调用 inspiration_get，传入上述 inspiration_id，读取五维拆解。',
    '3. 在当前工作流画布上创建复刻编排（按媒体类型选择视频/图片节点）。',
    '4. 等待用户补充或替换主体人物、商品图后再生成。不要假装已经出片。',
  ].join('\n')
}
