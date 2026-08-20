import { spawnSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { isInstalled } from './catalog.js'
import { MCP_BEGIN, MCP_END, mcpRowId, skillDir } from './paths.js'

/**
 * @param {ReturnType<typeof decorateCatalog> extends infer T ? any : never} catalog
 * @param {string} id
 */
export function findItem(catalog, id) {
  return catalog.items.find((item) => item.id === id)
}

/**
 * @param {{
 *   catalog: ReturnType<import('./catalog.js').parseCatalog>,
 *   id: string,
 *   home: string,
 *   profileDir: string,
 *   packageRoot: string,
 * }} opts
 */
export function installItem(opts) {
  const item = findItem(opts.catalog, opts.id)
  if (!item) throw new Error(`unknown item ${opts.id}`)
  const roots = { home: opts.home, profileDir: opts.profileDir, packageRoot: opts.packageRoot }
  if (isInstalled(item, roots)) return { id: item.id, installed: true, already: true }
  if (item.kind === 'connector') {
    writeMcpRow(opts.profileDir, item)
    return { id: item.id, installed: true, kind: 'connector' }
  }
  if (!item.skill) throw new Error(`item ${item.id} missing skill`)
  if (item.source.type === 'bundled') {
    const from = join(opts.packageRoot, item.source.path)
    if (!existsSync(from)) throw new Error(`bundled skill missing: ${item.source.path}`)
    const destDir = skillDir(opts.home, item.skill)
    mkdirSync(destDir, { recursive: true })
    copyFileSync(from, join(destDir, 'SKILL.md'))
    return { id: item.id, installed: true, kind: item.kind, skill: item.skill }
  }
  if (item.source.type === 'git') {
    installGitBundle(opts.home, item)
    return { id: item.id, installed: true, kind: item.kind, skill: item.skill, source: 'git' }
  }
  throw new Error(`item ${item.id} has no installable skill source`)
}

const LOCAL_WB = process.env.WORKBUDDYSKILLS_ROOT || '/Users/x/Desktop/Project/Github/workbuddyskills'

/**
 * Copy one archive directory. Prefer the local workbuddyskills clone.
 * @param {string} home
 * @param {{ skill?: string, title?: string, summary?: string, source: { type: string, repo?: string, path?: string, ref?: string } }} item
 */
export function installGitBundle(home, item) {
  if (!item.skill) throw new Error('git install missing skill')
  const destDir = skillDir(home, item.skill)
  if (existsSync(join(destDir, 'SKILL.md'))) return
  const sub = item.source.path
  const local = join(LOCAL_WB, sub)
  const from = existsSync(local) ? local : fetchGitTree(home, item)
  if (!existsSync(from)) throw new Error(`git bundle missing: ${sub}`)
  mkdirSync(dirname(destDir), { recursive: true })
  if (statSync(from).isDirectory()) cpRecursive(from, destDir)
  else {
    mkdirSync(destDir, { recursive: true })
    copyFileSync(from, join(destDir, 'SKILL.md'))
  }
  ensureSkillMd(destDir, item)
}

/**
 * @param {string} home
 * @param {{ source: { repo?: string, path?: string, ref?: string } }} item
 */
function fetchGitTree(home, item) {
  const cache = join(home, 'esc-gallery', 'cache', String(item.source.repo || 'repo').replace('/', '__'))
  mkdirSync(dirname(cache), { recursive: true })
  const ref = item.source.ref || 'main'
  const sub = item.source.path
  if (!existsSync(join(cache, '.git'))) {
    runGit(['clone', '--filter=blob:none', '--sparse', `https://github.com/${item.source.repo}.git`, cache])
  }
  runGit(['-C', cache, 'sparse-checkout', 'set', '--cone', sub])
  runGit(['-C', cache, 'fetch', '--depth', '1', 'origin', ref])
  runGit(['-C', cache, 'checkout', `origin/${ref}`])
  return join(cache, sub)
}

/**
 * Expert packs ship agents/*.md, not a root SKILL.md. Write a thin entry so dsh can discover them.
 * @param {string} destDir
 * @param {{ skill?: string, title?: string, summary?: string }} item
 */
export function ensureSkillMd(destDir, item) {
  const dest = join(destDir, 'SKILL.md')
  if (existsSync(dest)) return
  const pluginPath = join(destDir, '.codebuddy-plugin', 'plugin.json')
  let name = item.skill || 'expert'
  let title = item.title || name
  let summary = item.summary || title
  let lead = ''
  if (existsSync(pluginPath)) {
    try {
      const plugin = JSON.parse(readFileSync(pluginPath, 'utf8'))
      name = plugin.agentName || plugin.name || name
      title = plugin.displayName?.zh || plugin.displayName?.en || plugin.name || title
      summary = plugin.displayDescription?.zh || plugin.description || summary
      lead = plugin.agentName || plugin.teamInfo?.leadAgent || ''
    } catch {
      // keep fallbacks from the catalog row
    }
  }
  const leadFile = lead ? join(destDir, 'agents', `${lead}.md`) : ''
  const body = leadFile && existsSync(leadFile)
    ? readFileSync(leadFile, 'utf8')
    : `# ${title}\n\n${summary}\n`
  const header = `---\nname: ${name}\ndescription: ${JSON.stringify(summary)}\n---\n\n`
  writeFileSync(dest, body.startsWith('---') ? body : header + body)
}

/**
 * @param {string[]} args
 */
function runGit(args) {
  const result = spawnSync('git', args, { encoding: 'utf8' })
  if (result.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed: ${result.stderr || result.stdout || result.status}`)
  }
}

/**
 * @param {string} from
 * @param {string} to
 */
function cpRecursive(from, to) {
  mkdirSync(to, { recursive: true })
  for (const name of readdirSync(from)) {
    if (name === '.git') continue
    const src = join(from, name)
    const dest = join(to, name)
    if (statSync(src).isDirectory()) cpRecursive(src, dest)
    else copyFileSync(src, dest)
  }
}

/**
 * @param {string} profileDir
 * @param {{ id: string, serverName?: string, source: { type: string, transport?: string, command?: string, args?: string[], url?: string } }} item
 */
export function writeMcpRow(profileDir, item) {
  if (item.source.type !== 'mcp') throw new Error(`item ${item.id} is not an mcp source`)
  const patchPath = join(profileDir, 'cordis.patch.yml')
  mkdirSync(dirname(patchPath), { recursive: true })
  const existing = existsSync(patchPath) ? readFileSync(patchPath, 'utf8') : '[]\n'
  const row = formatMcpRow(item)
  const next = spliceManaged(existing, row)
  writeFileSync(patchPath, next)
}

/**
 * @param {{ id: string, serverName?: string, source: { transport?: string, command?: string, args?: string[], url?: string } }} item
 */
export function formatMcpRow(item) {
  const id = mcpRowId(item.id)
  const serverName = item.serverName || item.id
  const transport = item.source.transport || 'stdio'
  const lines = [
    `    - id: ${id}`,
    `      name: '@deepseek-ai/dsh-mcp-client'`,
    `      config:`,
    `        serverName: ${yamlScalar(serverName)}`,
    `        transport: ${transport}`,
  ]
  if (transport === 'stdio') {
    lines.push(`        command: ${yamlScalar(item.source.command || '')}`)
    const args = item.source.args || []
    if (args.length > 0) {
      lines.push(`        args: [${args.map(yamlScalar).join(', ')}]`)
    }
  } else {
    lines.push(`        url: ${yamlScalar(item.source.url || '')}`)
  }
  return lines.join('\n')
}

/**
 * @param {string} text
 * @param {string} row
 */
export function spliceManaged(text, row) {
  const begin = MCP_BEGIN
  const end = MCP_END
  const start = text.indexOf(begin)
  const stop = text.indexOf(end)
  if (start >= 0 && stop > start) {
    const before = text.slice(0, start)
    const block = text.slice(start, stop + end.length)
    const after = text.slice(stop + end.length)
    if (block.includes(row.split('\n')[0])) return text
    const inserted = block.replace(end, `${row}\n${end}`)
    return before + inserted + after
  }
  const trimmed = text.replace(/\s+$/, '')
  const prefix = trimmed === '[]' || trimmed === ''
    ? '- insert:\n'
    : `${trimmed.endsWith('\n') ? trimmed : `${trimmed}\n`}\n- insert:\n`
  return `${prefix}${begin}\n${row}\n${end}\n`
}

/**
 * @param {string} value
 */
function yamlScalar(value) {
  if (/^[A-Za-z0-9_./@+-]+$/.test(value)) return value
  return JSON.stringify(value)
}
