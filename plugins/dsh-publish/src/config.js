/**
 * dsh-publish config: builtin platform capability matrix + builtin status
 * mapping, Standard-Schema-flavoured parse with explicit failure on bad
 * config (never a silent fallback). Same shape as the hub config module
 * (parse + `~standard` export).
 *
 * 矩阵是数据不是代码：平台能力变更改 cordis 配置的 `platforms` 深合并覆盖，不改代码。
 * 内置矩阵数值为运营常识近似值（v1 自用打磨），已全部开放 Config 覆盖。
 */

export class PublishConfigError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message)
    this.name = 'PublishConfigError'
  }
}

/** v1 落三字段 + 声明类预留槽位（PRD §5.4）。 */
export const BUILTIN_PLATFORMS = Object.freeze({
  xiaohongshu: { media_types: ['image', 'video'], supports_cover: false, supports_schedule: false, max_images: 18, supports_original_declaration: true, supports_ai_declaration: false },
  douyin: { media_types: ['video', 'image'], supports_cover: true, supports_schedule: true, max_images: 35, supports_original_declaration: true, supports_ai_declaration: true },
  kuaishou: { media_types: ['video', 'image'], supports_cover: true, supports_schedule: false, max_images: 35, supports_original_declaration: true, supports_ai_declaration: false },
  weibo: { media_types: ['image', 'video'], supports_cover: false, supports_schedule: false, max_images: 9, supports_original_declaration: false, supports_ai_declaration: false },
  bilibili: { media_types: ['video'], supports_cover: true, supports_schedule: false, supports_original_declaration: true, supports_ai_declaration: false },
  wechat_channels: { media_types: ['video', 'image'], supports_cover: true, supports_schedule: false, max_images: 9, supports_original_declaration: true, supports_ai_declaration: false },
  tiktok: { media_types: ['video', 'image'], supports_cover: false, supports_schedule: true, max_images: 35, supports_original_declaration: true, supports_ai_declaration: true },
  instagram: { media_types: ['image', 'video'], supports_cover: false, supports_schedule: false, max_images: 10, supports_original_declaration: false, supports_ai_declaration: true },
  youtube: { media_types: ['video'], supports_cover: true, supports_schedule: true, supports_original_declaration: false, supports_ai_declaration: true },
  x: { media_types: ['image', 'video'], supports_cover: false, supports_schedule: false, max_images: 4, supports_original_declaration: false, supports_ai_declaration: true },
})

const TASK_STATUS = new Set(['submitted', 'reviewing', 'published', 'failed'])

/**
 * hub `omnimux_publish_get` 平台原始状态 → 子任务状态。
 * 依据 docs/hub-tool-contracts.md §4（文档两点实证 + 保守猜测，Config 可覆盖校准）。
 * 未知 raw 值不映射（调用方保留子任务当前状态，只存 raw_status）。
 */
export const BUILTIN_STATUS_MAP = Object.freeze({
  scheduled: 'submitted',
  pending: 'submitted',
  queued: 'submitted',
  processing: 'submitted',
  in_progress: 'submitted',
  publishing: 'submitted',
  submitted: 'submitted',
  review: 'reviewing',
  reviewing: 'reviewing',
  pending_review: 'reviewing',
  under_review: 'reviewing',
  in_review: 'reviewing',
  audit: 'reviewing',
  auditing: 'reviewing',
  published: 'published',
  success: 'published',
  done: 'published',
  completed: 'published',
  failed: 'failed',
  error: 'failed',
  rejected: 'failed',
  reject: 'failed',
  blocked: 'failed',
  removed: 'failed',
  deleted: 'failed',
})

/**
 * @param {string} where
 * @param {unknown} value
 * @param {string} expect
 */
function fail(where, value, expect) {
  const shown = value === undefined ? 'undefined' : JSON.stringify(value)
  throw new PublishConfigError(`publish config: ${where} must be ${expect}, got ${shown}`)
}

/**
 * @param {unknown} value
 * @returns {Record<string, unknown>}
 */
function asObject(value, where) {
  if (value === undefined || value === null) return {}
  if (typeof value !== 'object' || Array.isArray(value)) fail(where, value, 'an object')
  return /** @type {Record<string, unknown>} */ (value)
}

/**
 * @param {unknown} value
 * @param {string} where
 * @returns {number}
 */
function asPositiveNumber(value, where, fallback) {
  if (value === undefined) return fallback
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
    fail(where, value, 'a positive number')
  }
  return value
}

/**
 * @param {unknown} value
 * @param {string} where
 * @returns {string | undefined}
 */
function asOptionalString(value, where) {
  if (value === undefined || value === null || value === '') return undefined
  if (typeof value !== 'string') fail(where, value, 'a string')
  return value
}

/**
 * 深合并平台矩阵：override 逐平台逐字段覆盖/补充 builtin。
 * 每个字段的类型都必须正确，否则显式抛错（坏配置显式失败）。
 * @param {Record<string, Record<string, unknown>>} base
 * @param {Record<string, Record<string, unknown>>} override
 * @returns {Record<string, Record<string, unknown>>}
 */
export function deepMergePlatforms(base, override) {
  const out = {}
  for (const [platform, row] of Object.entries(base)) {
    out[platform] = { ...row }
  }
  for (const [platform, rawPatch] of Object.entries(override)) {
    const patch = asObject(rawPatch, `platforms.${platform}`)
    const target = out[platform] || {}
    for (const [key, value] of Object.entries(patch)) {
      const where = `platforms.${platform}.${key}`
      if (key === 'media_types') {
        if (!Array.isArray(value) || value.length === 0 || value.some((v) => v !== 'video' && v !== 'image')) {
          fail(where, value, "a non-empty array of 'video' | 'image'")
        }
        target[key] = [...value]
      } else if (key.startsWith('supports_')) {
        if (typeof value !== 'boolean') fail(where, value, 'a boolean')
        target[key] = value
      } else if (key === 'max_images') {
        if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
          fail(where, value, 'a positive integer')
        }
        target[key] = value
      } else {
        // 未知字段拒绝而不是丢弃：能力矩阵是契约数据，拼错字段名必须显式失败
        fail(where, value, "one of media_types | supports_cover | supports_schedule | supports_original_declaration | supports_ai_declaration | max_images")
      }
    }
    out[platform] = target
  }
  return out
}

/**
 * @param {unknown} rawValue
 * @returns {Record<string, string>}
 */
function parseStatusMap(rawValue) {
  const raw = asObject(rawValue, 'statusMap')
  if (Object.keys(raw).length === 0) return { ...BUILTIN_STATUS_MAP }
  /** @type {Record<string, string>} */
  const out = {}
  for (const [key, value] of Object.entries(raw)) {
    if (typeof value !== 'string' || !TASK_STATUS.has(value)) {
      fail(`statusMap.${key}`, value, "one of 'submitted' | 'reviewing' | 'published' | 'failed'")
    }
    out[key] = value
  }
  return out
}

/**
 * @param {unknown} value
 * @returns {import('./config.js').PublishConfig}
 */
export function parsePublishConfig(value) {
  const raw = asObject(value, 'the plugin config')
  return {
    dataDir: asOptionalString(raw.dataDir, 'dataDir'),
    accountsOverlayPath: asOptionalString(raw.accountsOverlayPath, 'accountsOverlayPath'),
    platforms: deepMergePlatforms(
      /** @type {Record<string, Record<string, unknown>>} */ (BUILTIN_PLATFORMS),
      asObject(raw.platforms, 'platforms'),
    ),
    statusMap: parseStatusMap(raw.statusMap),
    maxMediaMb: asPositiveNumber(raw.maxMediaMb, 'maxMediaMb', 512),
    submitTimeoutSeconds: asPositiveNumber(raw.submitTimeoutSeconds, 'submitTimeoutSeconds', 120),
  }
}

/**
 * @type {{ '~standard': { version: 1, vendor: string, validate: (value: unknown) => { value: import('./config.js').PublishConfig } | { issues: Array<{ message: string }> } } }}
 */
export const Config = {
  '~standard': {
    version: 1,
    vendor: 'dsh-publish',
    validate(value) {
      try {
        return { value: parsePublishConfig(value) }
      } catch (error) {
        return { issues: [{ message: error instanceof Error ? error.message : String(error) }] }
      }
    },
  },
}
