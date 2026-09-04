/** Pure helpers for the Composer Skill picker. Importable by tests; the UI fragment inlines the same rules. */

export const PLAZA_INTENT_KEY = 'omnimux-market:plaza-intent'
export const PLAZA_TABS = Object.freeze(['plugins', 'skills', 'experts', 'connectors'])
export const CREATE_SKILL = Object.freeze({
  id: 'sk-omx-skill-creator',
  slug: 'skill-creator',
  skill: 'skill-creator',
  catalogId: 'sk-omx-skill-creator',
  name: '技能创建',
  description: '创建双语可复用Skill',
})
export const PICKER_SEARCH_LIMIT = 20
export const PICKER_DEBOUNCE_MS = 200

export const PICKER_TABS = Object.freeze([
  { id: 'all', kind: 'all' },
  { id: 'mine', kind: 'mine' },
  { id: 'featured', kind: 'featured' },
  { id: '短剧漫剧', kind: 'tag' },
  { id: '专业影视', kind: 'tag' },
  { id: '动画', kind: 'tag' },
])

export function skillToken(item) {
  const raw = String((item && (item.skill || item.slug)) || '').trim()
  const slug = raw.replace(/^\//, '')
  return slug
}

export function skillGesture(item) {
  const slug = skillToken(item)
  return slug ? `/${slug} ` : ''
}

export function appendSkillGesture(draft, gesture) {
  const token = String(gesture || '')
  if (!token) return String(draft || '')
  const withSpace = token.endsWith(' ') ? token : `${token} `
  const base = String(draft || '')
  const prefix = base && !/\s$/.test(base) ? `${base} ` : base
  return `${prefix}${withSpace}`
}

export function buildSearchPayload(tabId, query) {
  const q = String(query || '').trim()
  const tab = PICKER_TABS.find((row) => row.id === tabId) || PICKER_TABS[0]
  const payload = { query: q, limit: PICKER_SEARCH_LIMIT, offset: 0 }
  if (tab.kind === 'featured') payload.channels = ['custom']
  if (tab.kind === 'tag') payload.query = q ? `${q} ${tab.id}` : tab.id
  return payload
}

export function matchesDomainTag(item, tag) {
  if (!item || !tag) return true
  const tags = Array.isArray(item.tags) ? item.tags.map(String) : []
  if (tags.includes(tag)) return true
  const hay = [
    item.category,
    item.categoryLabel,
    item.name,
    item.title,
    item.description,
    item.summary,
    tags.join(' '),
  ].map((v) => String(v || '')).join(' ')
  return hay.includes(tag)
}

export function filterPickerItems(items, tabId) {
  const list = Array.isArray(items) ? items : []
  const tab = PICKER_TABS.find((row) => row.id === tabId) || PICKER_TABS[0]
  if (tab.kind === 'mine') return list.filter((it) => it && it.installed === true)
  if (tab.kind === 'tag') return list.filter((it) => matchesDomainTag(it, tab.id))
  return list
}

export function installPayload(item) {
  if (!item || item.installed === true) return null
  const slug = String(item.slug || item.skill || '').trim()
  if (!slug) return null
  const catalogId = String(item.catalogId || (String(item.id || '').startsWith('sk-') ? item.id : '') || '').trim()
  return catalogId ? { slug, catalogId } : { slug }
}

export function writePlazaIntent(tab, storage) {
  const next = PLAZA_TABS.includes(tab) ? tab : 'skills'
  if (!storage || typeof storage.setItem !== 'function') return next
  storage.setItem(PLAZA_INTENT_KEY, JSON.stringify({ tab: next }))
  return next
}

export function consumePlazaIntent(storage) {
  if (!storage || typeof storage.getItem !== 'function') return null
  let raw = null
  try {
    raw = storage.getItem(PLAZA_INTENT_KEY)
  } catch {
    return null
  }
  try {
    if (typeof storage.removeItem === 'function') storage.removeItem(PLAZA_INTENT_KEY)
  } catch { /* ignore */ }
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    const tab = parsed && parsed.tab
    return PLAZA_TABS.includes(tab) ? tab : null
  } catch {
    return null
  }
}
