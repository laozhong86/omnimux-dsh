/**
 * Agent 工具层：把 esc-gallery 的目录（专家/技能/连接器）暴露给对话模型。
 * 命名 esc_* 与 skillhub 插件的 skillhub_* 分离，语义互补：
 *   - esc_search 覆盖本地 WorkBuddy 目录，hub:true 时合并 SkillHub 在线结果
 *   - esc_install 按 catalog id 安装（git 技能、MCP 连接器、本地技能目录）
 *   - esc_uninstall 卸载本地技能目录
 *   - esc_summon 把专家召唤成 /技能名 手势
 *   - esc_list 列本机已装技能与连接器
 */

import { existsSync, readFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { isSkillInstalled, listInstalledSkills, searchSkills } from './hub.js'
import { findItem, installItem } from './install.js'
import { skillDir } from './paths.js'
import { summonItem } from './summon.js'

/** @typedef {{ home: string, profileDir: string, packageRoot: string }} Roots */

/**
 * 组装 esc_* 工具集合。
 * @param {() => Roots} roots
 * @param {() => import('./catalog.js').parseCatalog extends Function ? ReturnType<import('./catalog.js').parseCatalog> : never} catalog
 */
export function createAgentTools(roots, catalog) {
  return [
    searchTool(roots, catalog),
    installTool(roots, catalog),
    uninstallTool(roots),
    listTool(roots),
    summonTool(roots, catalog),
  ]
}

/** @param {() => Roots} roots */
function searchTool(roots, catalog) {
  return {
    name: 'esc_search',
    description: 'Search the local Experts · Skills · Connectors gallery and optionally merge SkillHub online results. Use when the user wants a skill, expert, or connector from the gallery (专家馆 / 技能 / 连接器), or wants both local and SkillHub sources. For pure SkillHub browsing prefer skillhub_search.',
    parameters: {
      query: { type: 'string', description: 'Keyword in title, summary, tags or id. Optional to browse all.' },
      tab: { type: 'string', description: 'experts | skills | connectors. Default all.' },
      hub: { type: 'boolean', description: 'Also query SkillHub online and merge results (default false).' },
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: renderSearch(value) }],
      presentationMeta: (_args, value) => ({ kind: 'esc-search', ...value }),
    },
    presentCall: (args) => ({
      card: 'generic',
      title: `画廊 · ${String(args.tab || '全部')}${args.query ? ` ${args.query}` : ''}`,
      kind: 'search',
      content: [],
    }),
    presentResult: (_args, { isError, meta }) => ({
      card: 'generic',
      title: isError ? '画廊搜索失败' : `画廊 · ${meta?.localCount ?? meta?.items?.length ?? 0} 条`,
      content: [],
    }),
    async execute(args) {
      const q = String(args.query || '').trim().toLowerCase()
      const tab = String(args.tab || '').trim()
      const r = roots()
      const found = listLocal(catalog(), q, tab)
      const result = {
        source: 'gallery',
        localCount: found.total,
        items: found.list.map((item) => decorateLocal(item)),
        tabs: ['experts', 'skills', 'connectors'],
      }
      if (args.hub === true) {
        try {
          const hubResult = await searchSkills({ query: String(args.query || ''), limit: 24 })
          result.source = 'gallery+hub'
          result.hubTotal = hubResult.total
          result.hubItems = hubResult.items.map((it) => ({
            id: `hub:${it.slug}`,
            tab: 'skills',
            kind: 'skill',
            title: it.name,
            summary: it.description.slice(0, 200),
            category: it.categoryLabel,
            installed: isSkillInstalled(r.home, it.slug),
            downloads: it.downloads,
            version: it.version,
          }))
        } catch (err) {
          result.hubError = err instanceof Error ? err.message : String(err)
        }
      }
      return result
    },
  }
}

/**
 * 从本地目录筛选。
 * @param {import('./catalog.js').parseCatalog extends Function ? ReturnType<import('./catalog.js').parseCatalog> : never} catalog
 * @param {string} q
 * @param {string} tab
 */
function listLocal(catalog, q, tab) {
  const list = catalog.items.filter((item) => {
    if (tab && item.tab !== tab) return false
    if (!q) return true
    return `${item.title} ${item.subtitle || ''} ${item.summary} ${item.tags.join(' ')} ${item.id}`.toLowerCase().includes(q)
  })
  return { list: list.slice(0, 40), total: list.length }
}

/**
 * @param {{ id: string, tab: string, kind: string, title: string, summary: string, category: string, tags?: string[], installed?: boolean, hub?: object }} item
 */
function decorateLocal(item) {
  return {
    id: item.id,
    tab: item.tab ?? '',
    kind: item.kind ?? '',
    title: item.title ?? '',
    summary: (item.summary || '').slice(0, 200),
    category: item.category ?? '',
    tags: item.tags ?? [],
    installed: Boolean(item.installed),
    hubDuplicate: Boolean(item.hub),
  }
}

/** @param {{ items?: Array<Record<string, any>>, hubItems?: Array<Record<string, any>>, hubError?: string, hubTotal?: number }} value */
function renderSearch(value) {
  const out = []
  const local = value.items || []
  out.push(`本地画廊 ${local.length} 条：`)
  if (!local.length) out.push('（无匹配）')
  for (const item of local) {
    const flags = []
    if (item.installed) flags.push('已安装')
    if (item.hubDuplicate) flags.push('SkillHub 新版本可用')
    out.push(`- [${item.id}] ${item.tab}/${item.kind} ${item.title}${flags.length ? `（${flags.join('，')}）` : ''} — ${item.summary.slice(0, 60)}`)
  }
  if (value.hubItems?.length) {
    out.push(`SkillHub 在线 ${value.hubItems.length} 条（共 ${value.hubTotal || '?'}）：`)
    for (const item of value.hubItems) {
      const flags = []
      if (item.installed) flags.push('已安装')
      out.push(`- [${item.id}] ${item.title}${flags.length ? `（${flags.join('，')}）` : ''}${item.downloads ? ` · ${item.downloads} 下载` : ''}${item.version ? ` v${item.version}` : ''}`)
    }
  }
  if (value.hubError) out.push(`SkillHub 在线源不可用：${value.hubError}`)
  return out.join('\n')
}

/** @param {() => Roots} roots */
function installTool(roots, catalog) {
  return {
    name: 'esc_install',
    description: 'Install a gallery item by catalog id (e.g. sk-xxx skill, exp-xxx expert, cn-xxx connector). For SkillHub-only skills use skillhub_install with the slug.',
    parameters: {
      id: { type: 'string', required: true, description: 'Catalog id, e.g. sk-pdf-ocr, exp-a-share-analysis, cn-github' },
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: renderInstall(value) }],
      presentationMeta: (_args, value) => ({ kind: 'esc-install', ...value }),
    },
    presentCall: (args) => ({ card: 'generic', title: `安装 · ${args.id}`, kind: 'search', content: [] }),
    presentResult: (_args, { isError, meta }) => ({
      card: 'generic',
      title: isError ? '安装失败' : `已安装 · ${meta?.id || ''}`,
      content: [],
    }),
    async execute(args) {
      const id = String(args.id || '').trim()
      if (!id) throw new Error('缺少 id')
      const doc = catalog()
      const item = findItem(doc, id)
      if (!item) throw new Error(`unknown item ${id}`)
      const r = roots()
      const result = installItem({
        catalog: doc,
        id,
        home: r.home,
        profileDir: r.profileDir,
        packageRoot: r.packageRoot,
      })
      return { id, installed: result.installed, skill: result.skill || '', kind: result.kind || '', already: Boolean(result.already) }
    },
  }
}

/** @param {{ id: string, installed: boolean, skill?: string, kind?: string, already?: boolean }} value */
function renderInstall(value) {
  const stat = value.already ? '（已存在）' : ''
  return `✅ ${value.id} 已装到本地${stat}${value.skill ? ` · 技能 ${value.skill}` : ''}${value.kind ? ` · ${value.kind}` : ''}。新对话即被 skill 工具发现。`
}

/** @param {() => Roots} roots */
function listTool(roots) {
  return {
    name: 'esc_list',
    description: 'List installed gallery skills (from $DSH_HOME/skills) and installed connectors (from the profile cordis.patch.yml).',
    parameters: {},
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: renderInstalled(value) }],
      presentationMeta: (_args, value) => ({ kind: 'esc-list', ...value }),
    },
    presentCall: () => ({ card: 'generic', title: '已装条目', kind: 'search', content: [] }),
    presentResult: (_args, { isError, meta }) => ({
      card: 'generic',
      title: isError ? '列出失败' : `已装 · ${meta?.skills?.length ?? 0} 技能 / ${meta?.connectors?.length ?? 0} 连接器`,
      content: [],
    }),
    async execute() {
      const r = roots()
      const skills = listInstalledSkills(r.home)
      const connectors = listConnectors(r.profileDir)
      return { home: r.home, skills, connectors }
    },
  }
}

/** @param {{ home: string, skills?: Array<{ slug: string, name: string }>, connectors?: string[] }} value */
function renderInstalled(value) {
  const out = []
  const skills = value.skills || []
  out.push(`本机已装 ${skills.length} 个技能（${value.home}/skills）：`)
  for (const s of skills) out.push(`- ${s.slug}${s.name !== s.slug ? ` (${s.name})` : ''}`)
  const conns = value.connectors || []
  out.push(`${conns.length} 个连接器：`)
  for (const name of conns) out.push(`- ${name}`)
  return out.join('\n')
}

/** @param {() => Roots} roots */
function uninstallTool(roots) {
  return {
    name: 'esc_uninstall',
    description: 'Uninstall a locally installed gallery skill by directory slug. Only removes a $DSH_HOME/skills/<slug> directory that contains SKILL.md. For SkillHub-managed skills prefer skillhub_uninstall.',
    parameters: {
      slug: { type: 'string', required: true, description: 'Installed skill directory name' },
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: `已卸载 ${value.slug}` }],
      presentationMeta: (_args, value) => ({ kind: 'esc-uninstall', ...value }),
    },
    presentCall: (args) => ({ card: 'generic', title: `卸载 · ${args.slug}`, content: [] }),
    presentResult: (_args, { isError, meta }) => ({
      card: 'generic',
      title: isError ? '卸载失败' : `已卸载 · ${meta?.slug || ''}`,
      content: [],
    }),
    async execute(args) {
      return uninstallSkill(roots(), String(args.slug || ''))
    },
  }
}

/**
 * @param {Roots} roots
 * @param {string} slug
 */
function uninstallSkill(roots, slug) {
  const target = skillDir(roots.home, slug)
  if (!existsSync(join(target, 'SKILL.md'))) throw new Error(`未安装或不含 SKILL.md: ${slug}`)
  rmSync(target, { recursive: true, force: true })
  return { slug, path: target }
}

/** 读取 profile 里 esc 管理的 MCP 连接器 id。 */
function listConnectors(profileDir) {
  const patch = join(profileDir, 'cordis.patch.yml')
  if (!existsSync(patch)) return []
  const text = readFileSync(patch, 'utf8')
  return [...new Set(
    [...text.matchAll(/-\s+id:\s+(esc-mcp-[a-z0-9-]+)/g)].map((m) => m[1].replace(/^esc-mcp-/, '')),
  )]
}

/** @param {() => Roots} roots */
function summonTool(roots, catalog) {
  return {
    name: 'esc_summon',
    description: 'Summon a gallery expert into the current session. Returns the /skill-name gesture. Use for expert/team cards.',
    parameters: {
      id: { type: 'string', required: true, description: 'Expert or team catalog id, e.g. exp-ai-expert' },
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: `召唤 ${value.id} → ${value.gesture}` }],
      presentationMeta: (_args, value) => ({ kind: 'esc-summon', ...value }),
    },
    presentCall: (args) => ({ card: 'generic', title: `召唤 · ${args.id}`, content: [] }),
    presentResult: (_args, { isError, meta }) => ({
      card: 'generic',
      title: isError ? '召唤失败' : `召唤 · ${meta?.gesture || ''}`,
      content: [],
    }),
    async execute(args) {
      const id = String(args.id || '').trim()
      if (!id) throw new Error('缺少 id')
      const doc = catalog()
      const item = findItem(doc, id)
      if (!item) throw new Error(`unknown item ${id}`)
      if (item.tab !== 'experts') throw new Error(`${id} 不是专家/团队条目`)
      const r = roots()
      const result = summonItem({
        catalog: doc,
        id,
        sessionState: 'locked',
        home: r.home,
        profileDir: r.profileDir,
        packageRoot: r.packageRoot,
      })
      return { id, skill: result.skill, gesture: result.gesture }
    },
  }
}