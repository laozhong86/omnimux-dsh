#!/usr/bin/env node
/**
 * scripts/scan-ui-gates.mjs
 * UI01~UI10 Static Scanner for OmniMux UI Design Guidelines
 * Contract: docs/contracts/ui-design-guidelines.md, Issue #20
 *
 * UI08~UI10 由 Issue #200 (UI 共享收敛) 引入，起步为 WARN，待全量插件迁移完成后转 FATAL。
 * 详见 docs/contracts/ui-design-guidelines.md。
 */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')
const PLUGINS_DIR = process.env.OMNIMUX_PLUGINS_DIR || join(REPO_ROOT, 'plugins')

const EXEMPT_PATHS = [
  'node_modules',
  'lib',
  'dist',
  'tests',
  'fixtures',
  '.test.',
  '.spec.',
  // Vendored upstream OpenReel source tree
  'openreel',
  // React Flow / Canvas internals exemption (excluding canvas/ui)
  'src/canvas/nodes',
  'src/canvas/edges',
  'src/canvas/handles',
  // Workflow canvas engine: 画布节点/工具条属既有技术债，独立于页头收敛 (Issue #200) 处理
  'src/canvas/',
]

// UI10 合规字阶白名单 (design.md §4.2)。
// Hero 标题、KPI 大数字等特化场景请使用行级 `// exempt-ui10 <原因>` 豁免。
const FONT_SIZE_WHITELIST = [9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 24, 28, 32]
const ALLOWED_FONT_SIZES = new Set(FONT_SIZE_WHITELIST)

// 关页保活写法：display: none / open ? undefined : 'none' / active ? undefined : 'none'
const DISPLAY_KEEPALIVE_RE =
  /^display\s*:\s*(?:['"]none['"]|(?:open|active|visible)\s*\?\s*undefined\s*:\s*['"]none['"]|!\s*open\s*\?\s*['"]none['"]\s*:\s*undefined)/

/**
 * 按顶层逗号切分 style 对象体。
 * var(--x, #fff) 这类回退值、以及 rgb()/rgba()/数组字面量内部的逗号不是分隔符，
 * 必须跳过，否则会把一个合法的 CSS 变量切成碎片而误报（Issue #200）。
 */
function splitStyleProps(body) {
  const out = []
  let depth = 0
  let quote = null
  let buf = ''
  for (const ch of body) {
    if (quote) {
      buf += ch
      if (ch === quote) quote = null
      continue
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch
      buf += ch
      continue
    }
    if (ch === '(' || ch === '[' || ch === '{') depth += 1
    else if (ch === ')' || ch === ']' || ch === '}') depth = Math.max(0, depth - 1)
    if (ch === ',' && depth === 0) {
      out.push(buf.trim())
      buf = ''
      continue
    }
    buf += ch
  }
  if (buf.trim()) out.push(buf.trim())
  return out.filter(Boolean)
}

function isExempt(filePath) {
  const rel = relative(REPO_ROOT, filePath).replace(/\\/g, '/')
  for (const ex of EXEMPT_PATHS) {
    if (rel.includes(ex)) return true
  }
  return false
}

function walkFiles(dir, exts = ['.jsx', '.tsx', '.js', '.ts']) {
  const results = []
  if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) return results
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'lib' || entry.name === '.git') continue
      results.push(...walkFiles(fullPath, exts))
    } else if (entry.isFile()) {
      if (exts.some((ext) => entry.name.endsWith(ext)) && !isExempt(fullPath)) {
        results.push(fullPath)
      }
    }
  }
  return results
}

const errors = []
const warnings = []

function reportError(code, file, line, msg) {
  const rel = relative(REPO_ROOT, file).replace(/\\/g, '/')
  errors.push(`[${code}] ${rel}:${line} ${msg}`)
}

function reportWarn(code, file, line, msg) {
  const rel = relative(REPO_ROOT, file).replace(/\\/g, '/')
  warnings.push(`[${code}] ${rel}:${line} ${msg}`)
}

// 1. Collect all client files across plugins
const clientFiles = []
try {
  const pluginDirs = readdirSync(PLUGINS_DIR, { withFileTypes: true })
  for (const p of pluginDirs) {
    if (!p.isDirectory()) continue
    const clientDir = join(PLUGINS_DIR, p.name, 'src', 'client')
    if (statSync(clientDir, { throwIfNoEntry: false })?.isDirectory()) {
      clientFiles.push(...walkFiles(clientDir))
    }
  }
} catch {}

for (const file of clientFiles) {
  const content = readFileSync(file, 'utf8')
  const lines = content.split('\n')

  lines.forEach((lineText, idx) => {
    const lineNum = idx + 1

    // Skip comments
    const trimmed = lineText.trim()
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return

    // UI01: Raw Controls Check (<button, <select)
    // Exclude button inside SVG defs or exempt patterns. Note: <button is lowercase (HTML), <Button is dsh-ui-kit (React).
    if (/<button\b/.test(lineText)) {
      if (!lineText.includes('// exempt-ui01') && !lineText.includes('/* exempt-ui01 */')) {
        reportError('UI01', file, lineNum, `使用了原生 <button> 控件，必须使用 dsh-ui-kit (Button/IconButton) 替代`)
      }
    }
    if (/<select\b/.test(lineText)) {
      if (!lineText.includes('// exempt-ui01') && !lineText.includes('/* exempt-ui01 */')) {
        reportError('UI01', file, lineNum, `使用了原生 <select> 控件，必须使用 dsh-ui-kit (DropdownSelect) 替代`)
      }
    }

    // UI02: Non-CSS-variable Inline Styles (style={{ ... }})
    // Only allow display: open ? undefined : 'none', display: 'none', and CSS variables (--*)
    const styleMatch = lineText.match(/style=\{\{([^}]+)\}\}/)
    if (styleMatch) {
      const styleBody = styleMatch[1]
      // 按顶层逗号切分。注意：var(--x, #fff) 这类回退值内部含逗号，
      // 旧的 split(',') 会把一个合法 CSS 变量切成碎片而误报（Issue #200 修复）。
      for (const p of splitStyleProps(styleBody)) {
        if (!p) continue
        if (/^['"]?--[A-Za-z0-9-]+['"]?\s*:/.test(p)) continue
        if (DISPLAY_KEEPALIVE_RE.test(p)) continue
        if (p.includes('exempt-ui02')) continue
        reportError('UI02', file, lineNum, `禁止在 JSX 中使用内联业务样式属性 [${p}]，仅允许 CSS 变量 (--stage-*) 与关页保活 display:none`)
      }
    }

    // UI03: Bare Colors (hardcoded #fff / #123456 / rgb(...) not wrapped in CSS var or in SVG defs)
    if (!file.endsWith('.svg')) {
      const bareHexMatch = lineText.match(/#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g)
      if (bareHexMatch) {
        for (const hex of bareHexMatch) {
          // Exclude svg paths/icons defs or var fallback lines
          if (lineText.includes('var(') || lineText.includes('xmlns=') || lineText.includes('<path') || lineText.includes('<svg') || lineText.includes('exempt-ui03')) continue
          // Exclude color hex constants in theme mapping files
          if (file.includes('constants')) continue
          // styles.js 曾整体豁免，导致页头与组件样式成为裸色免检区。
          // 现仅豁免「Token 定义行」（形如 --foo: var(--bar, #hex)），业务样式照常告警。
          if (file.includes('styles.js') && /--[A-Za-z0-9-]+\s*:/.test(lineText)) continue
          reportWarn('UI03', file, lineNum, `存在未经 CSS变量封装的裸色硬编码 [${hex}]，必须使用官方 --dsw-alias-* Token`)
        }
      }
    }

    // UI07: Idempotent Sidebar Navigation Gate (Prohibit stage.toggle() in sidebar entries)
    if (file.includes('sidebar-entry') && /stage\.toggle\s*\(/i.test(lineText)) {
      reportError('UI07', file, lineNum, `侧边栏条目严禁使用 stage.toggle() 非幂等反选，必须使用 stageStore.open() 保证幂等激活`)
    }

    // UI08: Private Stage Header Class Ban
    // 各插件私建 .omnimux-*-stage-title / -stage-header / -stage-heading 是页头字号四档并存
    // (16/18/20/22px) 的直接成因。唯一真源为 dsh-ui-kit 的 PageHeader。
    const stageHeaderClassMatch = lineText.match(
      /\.[A-Za-z][A-Za-z0-9_-]*-(?:stage|page)-(?:title|header|heading|subtitle)\b/,
    )
    if (stageHeaderClassMatch && !lineText.includes('exempt-ui08')) {
      reportWarn(
        'UI08',
        file,
        lineNum,
        `禁止私建 Stage 页头样式类 [${stageHeaderClassMatch[0]}]，必须消费 dsh-ui-kit 的 PageHeader/StageHeader 统一排版`,
      )
    }

    // UI09: First-level Stage must consume the shared page header
    // 一级 Stage 直接手写 <h1> 即绕过共享页头。
    if (/Stage\.jsx$|Stage\.tsx$|Page\.jsx$|Page\.tsx$/.test(file)) {
      const consumesKitHeader = /import\s+[^;]*\b(?:PageHeader|StageHeader)\b[^;]*from\s+['"]dsh-ui-kit['"]/.test(content)
      if (/<h1\b/.test(lineText) && !consumesKitHeader && !lineText.includes('exempt-ui09')) {
        reportWarn(
          'UI09',
          file,
          lineNum,
          `一级 Stage 页面禁止直接手写 <h1> 页头，必须从 'dsh-ui-kit' 导入 PageHeader/StageHeader`,
        )
      }
    }

    // UI10: Type Scale Whitelist (design.md §4.2)
    const fontSizeMatch = lineText.match(/font-size\s*:\s*([0-9]+(?:\.[0-9]+)?)px/i)
    if (fontSizeMatch && !lineText.includes('exempt-ui10')) {
      const size = Number(fontSizeMatch[1])
      if (!ALLOWED_FONT_SIZES.has(size)) {
        reportWarn(
          'UI10',
          file,
          lineNum,
          `非标字号 [${size}px]，合规字阶白名单为 [${FONT_SIZE_WHITELIST.join(', ')}]px；特化场景请加 // exempt-ui10 <原因>`,
        )
      }
    }
  })
}

// Summary Output
console.log('== OmniMux UI01~UI10 规范静态门禁扫描 ==')
console.log(`扫描完成：共分析 ${clientFiles.length} 个客户端视图源文件。`)

// 按规则码汇总，避免 WARN 截断掩盖真实违规量
function summarize(list) {
  const byCode = new Map()
  for (const item of list) {
    const code = item.match(/^\[(UI\d+)\]/)?.[1] ?? 'OTHER'
    byCode.set(code, (byCode.get(code) ?? 0) + 1)
  }
  return [...byCode.entries()].sort((a, b) => a[0].localeCompare(b[0]))
}

if (warnings.length > 0) {
  console.log(`\n⚠ 发现 ${warnings.length} 处 UI 建议项 (WARN):`)
  for (const [code, n] of summarize(warnings)) console.log(`  ${code}: ${n} 处`)
  const WARN_PREVIEW = Number(process.env.OMNIMUX_UI_WARN_PREVIEW ?? 10)
  console.log(`  --- 明细预览 (前 ${WARN_PREVIEW} 条，全量设置 OMNIMUX_UI_WARN_PREVIEW=0 关闭预览) ---`)
  warnings.slice(0, WARN_PREVIEW).forEach((w) => console.log(`    ${w}`))
}

if (errors.length > 0) {
  console.log(`\n✗ 发现 ${errors.length} 处严重违规 (FAIL):`)
  for (const [code, n] of summarize(errors)) console.log(`  ${code}: ${n} 处`)
  errors.forEach((e) => console.log(`    ${e}`))
  process.exit(1)
} else {
  console.log('✓ UI01~UI10 静态扫描全部合规（0 违规拦截）。')
  process.exit(0)
}
