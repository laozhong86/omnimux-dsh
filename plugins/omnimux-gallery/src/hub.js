/**
 * SkillHub 云端技能源（脚本侧 skillhub 源）只读客户端。
 * esc-gallery 通过本模块把 SkillHub 技能注册表并进画廊的「技能」数据流；
 * 安装 / 已装 / 卸载沿用已加载的 skillhub 插件的本机 /skillhub HTTP 路由（同源）。
 */

import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { skillDir } from './paths.js'

const DEFAULT_API = 'https://api.skillhub.cn'
const DEFAULT_WEB = 'https://skillhub.cn'
const CATEGORY_KEYS = [
  'office-efficiency', 'content-creation', 'dev-programming', 'data-analysis',
  'design-media', 'ai-agent', 'knowledge-management', 'business-ops',
  'education', 'professional', 'it-ops-security', 'life-service',
]

const CATEGORY_ZH = {
  'office-efficiency': '办公效率',
  'content-creation': '内容创作',
  'dev-programming': '开发编程',
  'data-analysis': '数据分析',
  'design-media': '设计多媒体',
  'ai-agent': 'AI Agent',
  'knowledge-management': '知识管理',
  'business-ops': '商业运营',
  'education': '教育学习',
  'professional': '行业专业',
  'it-ops-security': 'IT 运维与安全',
  'life-service': '生活服务',
}

const CATEGORY_EN = {
  'office-efficiency': 'Office & Efficiency',
  'content-creation': 'Content Creation',
  'dev-programming': 'Development',
  'data-analysis': 'Data Analysis',
  'design-media': 'Design & Media',
  'ai-agent': 'AI Agent',
  'knowledge-management': 'Knowledge',
  'business-ops': 'Business Ops',
  'education': 'Education',
  'professional': 'Professional',
  'it-ops-security': 'IT Ops & Security',
  'life-service': 'Life Services',
}

/**
 * @param {string} [base]
 * @param {number} [timeoutMs]
 * @param {string} [userAgent]
 */
export function createHub({ base = DEFAULT_API, timeoutMs = 15000, userAgent = 'Mozilla/5.0 (compatible; omnimux-gallery)' } = {}) {
  return { base, timeoutMs, userAgent }
}

/**
 * 校验并规整分类参数，非法返回 ''（浏览全部）。
 * @param {string | undefined} category
 */
export function parseCategory(category) {
  const c = String(category || '').trim()
  return CATEGORY_KEYS.includes(c) ? c : ''
}

/**
 * @param {string | undefined} category
 * @param {'zh' | 'en'} [locale]
 */
export function categoryLabel(category, locale = 'zh') {
  const map = locale === 'en' ? CATEGORY_EN : CATEGORY_ZH
  return map[category] || ''
}

/**
 * 搜索 SkillHub（只读，无副作用）。
 * @param {{ query?: string, category?: string, limit?: number, offset?: number, base?: string, timeoutMs?: number, userAgent?: string }} opts
 */
export async function searchSkills(opts) {
  const { query = '', category = '', limit = 24, offset = 0, base = DEFAULT_API, timeoutMs = 15000, userAgent = 'Mozilla/5.0 (compatible; omnimux-gallery)' } = opts
  const params = new URLSearchParams()
  if (query) params.set('keyword', query)
  if (category) params.set('category', category)
  params.set('sortBy', query ? 'score' : 'downloads')
  params.set('order', 'desc')
  params.set('page', String(Math.max(1, Math.floor(offset / Math.max(1, limit)) + 1)))
  params.set('pageSize', String(limit))
  const url = `${base.replace(/\/$/, '')}/api/skills?${params.toString()}`
  const body = await hubFetch(url, { timeoutMs, userAgent })
  return parseSearch(body)
}

/**
 * 技能详情（供详情卡片/重复判定用）。找不到返回 null。
 * @param {string} slug
 * @param {{ base?: string, timeoutMs?: number, userAgent?: string }} [opts]
 */
export async function fetchSkillDetail(slug, opts = {}) {
  const { base = DEFAULT_API, timeoutMs = 15000, userAgent = 'Mozilla/5.0 (compatible; omnimux-gallery)' } = opts
  const url = `${base.replace(/\/$/, '')}/api/v1/skills/${encodeURIComponent(slug)}`
  try {
    const body = await hubFetch(url, { timeoutMs, userAgent })
    const card = mapCard(body)
    return card || null
  } catch {
    return null
  }
}

/**
 * 解析 /api/skills/{slug} 详情响应为卡片。形状与插件的 flattenDetail+mapSkill 对齐。
 * @param {unknown} raw
 */
export function mapCard(raw) {
  if (!raw || typeof raw !== 'object') return null
  const doc = /** @type {Record<string, any>} */ (raw)
  const skill = doc.skill || {}
  const stats = skill.stats || {}
  const namespace = doc.namespace || skill.namespace || {}
  const instance = skill.slug || doc.slug || namespace.publicSlug
  if (!instance) return null
  const category = String(skill.category || doc.category || '')
  return {
    slug: String(instance),
    name: String(skill.displayName || skill.name || doc.displayName || doc.name || instance),
    description: String(skill.summary_zh || skill.summary || skill.description || doc.summary_zh || doc.summary || doc.description || ''),
    category,
    categoryLabel: categoryLabel(category),
    version: String(doc.latestVersion?.version || skill.version || ''),
    downloads: Number(stats.downloads ?? skill.downloads ?? doc.downloads) || 0,
    stars: Number(stats.stars ?? skill.stars ?? doc.stars) || 0,
    owner: String(skill.ownerName || doc.ownerName || namespace.handle || ''),
    publisherVerified: Boolean(skill.publisher?.verified),
    pageUrl: `${DEFAULT_WEB}/skills/${encodeURIComponent(String(instance))}`,
  }
}

/**
 * 把 /api/skills 搜索响应解析为卡片列表。
 * @param {unknown} body
 */
export function parseSearch(body) {
  if (!body || typeof body !== 'object') throw new Error('SkillHub 响应异常')
  const doc = /** @type {Record<string, any>} */ (body)
  if (doc.code !== 0 || !doc.data) throw new Error(String(doc.message || 'SkillHub 返回错误'))
  const items = []
  for (const raw of doc.data.skills || []) {
    const card = mapCard(raw)
    if (card) items.push(card)
  }
  return { items, total: Number(doc.data.total) || items.length }
}

/**
 * 本机已安装技能（扫描 $DSH_HOME/skills 下含 SKILL.md 的目录）。
 * @param {string} home
 */
export function listInstalledSkills(home) {
  const root = join(home, 'skills')
  if (!existsSync(root)) return []
  const out = []
  for (const name of readdirSafe(root)) {
    if (name.startsWith('.')) continue
    const dir = join(root, name)
    const md = join(dir, 'SKILL.md')
    if (!isFile(md)) continue
    out.push({ slug: name, name })
  }
  return out
}

/**
 * @param {string} home
 * @param {string} slug
 */
export function isSkillInstalled(home, slug) {
  return isFile(join(skillDir(home, slug), 'SKILL.md'))
}

function readdirSafe(dir) {
  try {
    return readdirSync(dir)
  } catch {
    return []
  }
}

function isFile(path) {
  try {
    return statSync(path).isFile()
  } catch {
    return false
  }
}

/** @param {string} url */
async function hubFetch(url, { timeoutMs, userAgent }) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'user-agent': userAgent, accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}