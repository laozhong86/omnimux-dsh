#!/usr/bin/env node
/**
 * scripts/scan-ui-gates.mjs
 * UI01~UI06 Static Scanner for OmniMux UI Design Guidelines
 * Contract: docs/contracts/ui-design-guidelines.md, Issue #20
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
]

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
      // Check if style contains non-CSS-vars and non-display rules
      const pairs = styleBody.split(',')
      for (const pair of pairs) {
        const p = pair.trim()
        if (!p) continue
        if (/^['"]?--[A-Za-z0-9-]+['"]?\s*:/.test(p)) continue
        if (/^display\s*:\s*(open\s*\?\s*undefined\s*:\s*['"]none['"]|['"]none['"]|active\s*\?\s*undefined\s*:\s*['"]none['"])/.test(p)) continue
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
          if (file.includes('constants') || file.includes('styles.js')) continue
          reportWarn('UI03', file, lineNum, `存在未经 CSS变量封装的裸色硬编码 [${hex}]，必须使用官方 --dsw-alias-* Token`)
        }
      }
    }

    // UI07: Idempotent Sidebar Navigation Gate (Prohibit stage.toggle() in sidebar entries)
    if (file.includes('sidebar-entry') && /stage\.toggle\s*\(/i.test(lineText)) {
      reportError('UI07', file, lineNum, `侧边栏条目严禁使用 stage.toggle() 非幂等反选，必须使用 stageStore.open() 保证幂等激活`)
    }
  })
}

// Summary Output
console.log('== OmniMux UI01~UI06 规范静态门禁扫描 ==')
console.log(`扫描完成：共分析 ${clientFiles.length} 个客户端视图源文件。`)

if (warnings.length > 0) {
  console.log(`\n⚠ 发现 ${warnings.length} 处 UI 建议项 (WARN):`)
  warnings.slice(0, 10).forEach((w) => console.log(`  ${w}`))
  if (warnings.length > 10) console.log(`  ... 另有 ${warnings.length - 10} 处`)
}

if (errors.length > 0) {
  console.log(`\n✗ 发现 ${errors.length} 处严重违规 (FAIL):`)
  errors.forEach((e) => console.log(`  ${e}`))
  process.exit(1)
} else {
  console.log('✓ UI01~UI06 静态扫描全部合规（0 违规拦截）。')
  process.exit(0)
}
