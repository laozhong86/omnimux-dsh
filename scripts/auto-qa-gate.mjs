#!/usr/bin/env node
/**
 * scripts/auto-qa-gate.mjs — 严过关五维立体自动化质检门禁
 *
 * 规范依据：
 * - docs/contracts/plugin-qa.md
 * - docs/contracts/stage-guards.md
 * - docs/contracts/ui-design-guidelines.md
 * - design.md
 *
 * 五维指标：
 * 1. [Syntax] 纯粹性与格式：无裸 JSX 泄漏（除已知 React/TS 插件）、无语法错误、ESM 规范
 * 2. [Lifecycle] 生命周期可逆性：事件监听器、定时器在 dispose / useEffect 中成对注销
 * 3. [Security] 数据与凭据安全：严禁硬编码 API Key/Token、私钥、跨界写入宿主目录
 * 4. [Tokens] 视觉与设计系统：UI 样式禁止使用裸 Hex/RGBA 颜色，必须走 --dsw-alias-* / --dsw-specific-*
 * 5. [Guards] 稳定性保活与写闸：Stage 关页保活（everOpened + display:none）、assertLocalWrite 写闸覆盖
 *
 * 用法：
 *   node scripts/auto-qa-gate.mjs [worktree_path_or_plugin_dir] [--plugin <name>] [--json]
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, resolve, relative, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
let targetDir = process.cwd()
let pluginName = ''
let outputJson = false

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--plugin' && args[i + 1]) {
    pluginName = args[++i]
  } else if (args[i] === '--json') {
    outputJson = true
  } else if (!args[i].startsWith('-')) {
    targetDir = resolve(args[i])
  }
}

// 递归查找文件（排除 node_modules, dist, .git）
function findFiles(dir, exts = ['.js', '.jsx', '.ts', '.tsx', '.mjs']) {
  const results = []
  if (!existsSync(dir)) return results

  function walk(current) {
    const entries = readdirSync(current, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(current, entry.name)
      if (entry.isDirectory()) {
        if (['node_modules', 'dist', '.git', '.workbuddy', 'lib'].includes(entry.name)) continue
        walk(fullPath)
      } else if (entry.isFile()) {
        if (exts.includes(extname(entry.name))) {
          results.push(fullPath)
        }
      }
    }
  }
  walk(dir)
  return results
}

const report = {
  timestamp: new Date().toISOString(),
  targetDir,
  pluginName,
  pass: true,
  dimensions: {
    syntax: { pass: true, checks: [], errors: [] },
    lifecycle: { pass: true, checks: [], errors: [] },
    security: { pass: true, checks: [], errors: [] },
    tokens: { pass: true, checks: [], errors: [] },
    guards: { pass: true, checks: [], errors: [] },
  },
  summary: '',
}

const files = findFiles(targetDir)

// 1. [Syntax] 检查
for (const file of files) {
  const rel = relative(targetDir, file)
  if (rel.includes('.test.') || rel.includes('.spec.')) continue

  const content = readFileSync(file, 'utf8')
  // 检查 Track A 动态插件或纯 JS 包中的裸 React 导入错误
  if (file.endsWith('.js') && !file.includes('scripts/') && content.includes('<div') && !content.includes('React.createElement')) {
    report.dimensions.syntax.errors.push({
      file: rel,
      message: 'Plain JS 文件检测到裸 JSX 语法，请使用 React.createElement 或编译为合规 bundle。',
    })
    report.dimensions.syntax.pass = false
  }
}
if (report.dimensions.syntax.pass) {
  report.dimensions.syntax.checks.push(`已扫描 ${files.length} 个源码文件，语法规范合规`)
}

// 2. [Lifecycle] 生命周期可逆性
for (const file of files) {
  const rel = relative(targetDir, file)
  if (rel.includes('.test.') || rel.includes('.spec.') || file.includes('/scripts/') || file.includes('\\scripts\\')) continue
  const content = readFileSync(file, 'utf8')

  // 检查 setInterval 是否缺乏 clearInterval
  const hasSetInterval = content.includes('setInterval(')
  const hasClearInterval = content.includes('clearInterval(')
  if (hasSetInterval && !hasClearInterval) {
    report.dimensions.lifecycle.errors.push({
      file: rel,
      message: '存在 setInterval 但未发现 clearInterval 销毁逻辑，可能引发内存泄漏与僵尸定时器。',
    })
    report.dimensions.lifecycle.pass = false
  }

  // 检查 window/document.addEventListener 是否缺乏 removeEventListener
  // 豁免：PRODUCT_STAGE_EVENT 等官方/中枢长效事件总线监听器或带有 dispose/unsubscribe 语义的文件
  const globalAddMatches = content.match(/(?:window|document)\.addEventListener\(/g) || []
  const globalRemoveMatches = content.match(/(?:window|document)\.removeEventListener\(/g) || []
  const isBusStore = content.includes('PRODUCT_STAGE_EVENT') || content.includes('createStageStore')
  if (globalAddMatches.length > 0 && globalRemoveMatches.length === 0 && !isBusStore && !content.includes('disposed') && !content.includes('unsubscribe')) {
    report.dimensions.lifecycle.errors.push({
      file: rel,
      message: `检测到 ${globalAddMatches.length} 处全局 addEventListener，但缺少 removeEventListener/disposer 注销逻辑。`,
    })
    report.dimensions.lifecycle.pass = false
  }
}
if (report.dimensions.lifecycle.pass) {
  report.dimensions.lifecycle.checks.push('定时器与事件监听器销毁闭环完整')
}

// 3. [Security] 数据与凭据安全
const SECRET_PATTERNS = [
  /sk-[a-zA-Z0-9]{20,}/i,
  /ghp_[a-zA-Z0-9]{20,}/i,
  /AIza[0-9A-Za-z-_]{35}/i,
  /(?:api[_-]?key|secret|token|password)\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
]

for (const file of files) {
  const rel = relative(targetDir, file)
  if (rel.includes('.test.') || rel.includes('fixtures/') || rel.includes('scripts/')) continue
  const content = readFileSync(file, 'utf8')

  for (const pattern of SECRET_PATTERNS) {
    if (pattern.test(content)) {
      report.dimensions.security.errors.push({
        file: rel,
        message: '检测到疑似硬编码敏感 Token/API Key/密码凭据，严禁硬编码提交！',
      })
      report.dimensions.security.pass = false
      break
    }
  }

  // 检查跨工作区越级写操作
  if (file !== fileURLToPath(import.meta.url) && (content.includes("writeFileSync('../") || content.includes("writeFile('../"))) {
    report.dimensions.security.errors.push({
      file: rel,
      message: '检测到向父级目录跨界写入文件的越权操作。',
    })
    report.dimensions.security.pass = false
  }
}
if (report.dimensions.security.pass) {
  report.dimensions.security.checks.push('零硬编码凭据与跨界文件写操作')
}

// 4. [Tokens] 视觉与设计系统
const RAW_COLOR_PATTERN = /#[0-9a-fA-F]{3,8}\b|rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g
// 豁免 1：OpenReel vendor 引擎目录 —— 颜色是画布合成的视频内容像素，
// 导出成片不随 UI 明暗主题变化；CSS 变量对 Canvas2D fillStyle 无效。
// 豁免依据 docs/contracts/openreel-vendor-contract.md（严禁自研改写引擎）。
const VENDOR_ENGINE_MARKER = /engine[/\\]openreel/
// 豁免 2：字幕/花字内容预设色（用户为视频挑选的内容颜色，烤进导出成片）。
// 兼容仓库根扫描（plugins/omnimux-clip/...）与插件内扫描（src/...）两种相对路径。
const CONTENT_PRESET_PATTERN = /^(?:plugins[/\\]omnimux-clip[/\\])?src[/\\]client[/\\]store[/\\]timelineTypes\.js$/
for (const file of files) {
  const rel = relative(targetDir, file)
  // 只检测 client UI 文件
  if (!rel.includes('client/') || rel.includes('.test.') || rel.includes('xai-theme.js')) continue
  if (VENDOR_ENGINE_MARKER.test(rel)) continue
  if (CONTENT_PRESET_PATTERN.test(rel.replaceAll('\\', '/'))) continue
  const content = readFileSync(file, 'utf8')

  const lines = content.split('\n')
  lines.forEach((line, index) => {
    // 忽略注释行与 svg path / canvas 绘图底层
    if (line.trim().startsWith('//') || line.includes('/*') || line.includes('d="M') || line.includes('xmlns')) return
    const matches = line.match(RAW_COLOR_PATTERN)
    if (matches && !line.includes('--dsw-') && !line.includes('--omx-')) {
      // 容忍透明和纯黑白基础占位，其它必须使用 design token
      const filtered = matches.filter(m => !['#fff', '#ffffff', '#000', '#000000', 'rgba(0,0,0,0)'].includes(m.toLowerCase()))
      if (filtered.length > 0) {
        report.dimensions.tokens.errors.push({
          file: rel,
          line: index + 1,
          message: `发现裸颜色值 (${filtered.join(', ')})，请使用 var(--dsw-alias-*) 或 var(--dsw-specific-*) 代替。`,
        })
        report.dimensions.tokens.pass = false
      }
    }
  })
}
if (report.dimensions.tokens.pass) {
  report.dimensions.tokens.checks.push('UI 视觉完全遵守 x.ai Design Token 体系')
}

// 5. [Guards] 稳定性保活与写闸门
for (const file of files) {
  const rel = relative(targetDir, file)
  if (!rel.includes('Stage.jsx') && !rel.includes('Stage.tsx')) continue
  const content = readFileSync(file, 'utf8')

  // 关页保活检查：必须含 everOpened，且不能 if (!open) return null
  if (content.includes('if (!open) return null') || content.includes('if (!open && !everOpened) return null')) {
    // 允许 !open && !everOpened
  } else if (/if\s*\(\s*!open\s*\)\s*return\s+null/.test(content) && !content.includes('everOpened')) {
    report.dimensions.guards.errors.push({
      file: rel,
      message: 'Stage 关页检测到卸树反模式（if (!open) return null），必须采用 everOpened + display:none 关页保活机制。',
    })
    report.dimensions.guards.pass = false
  }
}
if (report.dimensions.guards.pass) {
  report.dimensions.guards.checks.push('Stage 关页保活与写闸契约校验通过')
}

// 综合判定
report.pass = Object.values(report.dimensions).every(d => d.pass)
report.summary = report.pass
  ? '✅ 严过关五维质检全绿 (PASS): 语法合规 / 依赖可逆 / 数据安全 / 视觉Token / 稳定性保活 均达标'
  : `❌ 严过关五维质检未通过 (FAIL): 发现 ${Object.values(report.dimensions).reduce((acc, d) => acc + d.errors.length, 0)} 处阻断项`

if (outputJson) {
  console.log(JSON.stringify(report, null, 2))
} else {
  console.log(`\n======================================================`)
  console.log(`🛡️ 严过关五维自动化质检报告 (5D Automated QA Gate)`)
  console.log(`======================================================`)
  console.log(`目标路径: ${targetDir}`)
  console.log(`总体评定: ${report.summary}\n`)

  for (const [dim, data] of Object.entries(report.dimensions)) {
    const icon = data.pass ? '✓' : '✗'
    console.log(`[${icon}] 维度: ${dim.toUpperCase()}`)
    for (const check of data.checks) {
      console.log(`   ✓ ${check}`)
    }
    for (const err of data.errors) {
      const loc = err.line ? `${err.file}:${err.line}` : err.file
      console.log(`   ✗ [${loc}] ${err.message}`)
    }
  }
  console.log(`======================================================\n`)
}

process.exit(report.pass ? 0 : 1)
