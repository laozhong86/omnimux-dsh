#!/usr/bin/env node
/**
 * auto-qa-gate.mjs — diff-aware L0 static quality gate.
 *
 * This is intentionally a deterministic scanner, not the complete QA process.
 * Real package tests, integration checks, and ego-browser evidence are separate
 * gates. A report is PASS only when every requested dimension and every required
 * evidence check passes.
 *
 * Usage:
 *   node scripts/auto-qa-gate.mjs [target] [--plugin <name>] [--diff]
 *     [--base <ref>] [--require-browser] [--evidence-dir <dir>]
 *     [--output <file>] [--json]
 */

import { spawnSync } from 'node:child_process'
import {
  existsSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs'
import { extname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx'])
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.workbuddy', 'lib', 'openreel', 'coverage'])
const TEST_RE = /(?:^|[./\\])[^/\\]*\.(?:test|spec)\.[^/\\]+$/
const RAW_COLOR_RE = /#[0-9a-fA-F]{3,8}\b|rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g
const VENDOR_ENGINE_RE = /(?:^|[\\/])engine[\\/]openreel(?:[\\/]|$)/
const CONTENT_PRESET_RE = /^(?:plugins[\\/]omnimux-clip[\\/])?src[\\/]client[\\/]store[\\/]timelineTypes\.js$/

export function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    targetDir: process.cwd(),
    pluginName: '',
    outputJson: false,
    diff: false,
    base: 'origin/main',
    requireBrowser: false,
    evidenceDir: '',
    output: '',
  }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--plugin' && argv[i + 1]) options.pluginName = argv[++i]
    else if (arg === '--base' && argv[i + 1]) options.base = argv[++i]
    else if (arg === '--evidence-dir' && argv[i + 1]) options.evidenceDir = resolve(argv[++i])
    else if (arg === '--output' && argv[i + 1]) options.output = resolve(argv[++i])
    else if (arg === '--json') options.outputJson = true
    else if (arg === '--diff') options.diff = true
    else if (arg === '--require-browser') options.requireBrowser = true
    else if (!arg.startsWith('-')) options.targetDir = resolve(arg)
  }
  return options
}

function gitRoot(start) {
  const result = spawnSync('git', ['-C', start, 'rev-parse', '--show-toplevel'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  })
  if (result.status !== 0) return null
  return result.stdout.trim() || null
}

function isInside(parent, candidate) {
  const root = resolve(parent)
  const path = resolve(candidate)
  return path === root || path.startsWith(`${root}${sep}`)
}

export function findFiles(dir, extensions = SOURCE_EXTENSIONS) {
  const results = []
  if (!existsSync(dir)) return results
  function walk(current) {
    let entries
    try {
      entries = readdirSync(current, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      const fullPath = join(current, entry.name)
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(fullPath)
      } else if (entry.isFile() && extensions.has(extname(entry.name))) {
        results.push(fullPath)
      }
    }
  }
  walk(resolve(dir))
  return results.sort()
}

function parseGitNames(output, { porcelain = false } = {}) {
  const records = String(output || '').includes('\0')
    ? String(output).split('\0').filter(Boolean)
    : String(output).split(/\r?\n/).filter(Boolean)
  const names = []
  for (let index = 0; index < records.length; index += 1) {
    const record = records[index]
    if (!porcelain) {
      names.push(record.trim())
      continue
    }
    // Porcelain v1 -z stores the two-column status followed by a path. Rename
    // and copy records carry the second path in the next NUL-delimited field.
    const status = record.slice(0, 2)
    const path = record.slice(3)
    if (path) names.push(path)
    if (/[RC]/.test(status) && records[index + 1]) names.push(records[++index])
  }
  return names
    .map(name => name.trim())
    .filter(Boolean)
}

export function changedFilesFromGit(root, base = 'origin/main', { strict = false } = {}) {
  const changed = new Set()
  const diff = spawnSync('git', ['-C', root, 'diff', '--name-only', '-z', `${base}...HEAD`], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (diff.status !== 0) {
    if (strict) throw new Error(`无法计算 ${base}...HEAD diff：${(diff.stderr || '').trim()}`)
  } else {
    for (const name of parseGitNames(diff.stdout)) changed.add(resolve(root, name))
  }
  const status = spawnSync('git', ['-C', root, 'status', '--porcelain=v1', '-z', '--untracked-files=all'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (status.status !== 0) {
    if (strict) throw new Error(`无法读取工作树状态：${(status.stderr || '').trim()}`)
  } else {
    for (const name of parseGitNames(status.stdout, { porcelain: true })) changed.add(resolve(root, name))
  }
  return [...changed].filter(file => isInside(root, file)).sort()
}

function emptyDimension() {
  return { pass: true, checks: [], errors: [] }
}

export function createReport(options) {
  return {
    timestamp: new Date().toISOString(),
    targetDir: options.targetDir,
    pluginName: options.pluginName,
    diffMode: options.diff,
    base: options.base,
    changedFiles: [],
    scannedFiles: [],
    pass: true,
    dimensions: {
      syntax: emptyDimension(),
      lifecycle: emptyDimension(),
      security: emptyDimension(),
      tokens: emptyDimension(),
      guards: emptyDimension(),
    },
    browser: {
      required: options.requireBrowser,
      pass: !options.requireBrowser,
      evidenceDir: options.evidenceDir || null,
      errors: options.requireBrowser ? ['未提供 ego-browser evidence'] : [],
    },
    summary: '',
  }
}

function addError(report, dimension, error) {
  report.dimensions[dimension].errors.push(error)
  report.dimensions[dimension].pass = false
}

function readText(file, report, dimension = 'syntax') {
  try {
    return readFileSync(file, 'utf8')
  } catch (error) {
    addError(report, dimension, {
      file: relative(report.targetDir, file),
      message: `无法读取文件：${error.message}`,
    })
    return null
  }
}

function isTestFile(file) {
  return TEST_RE.test(file)
}

// Remove comments and quoted literals before syntax heuristics. HTML strings
// used by a client module are data, not JSX; actual JSX tags remain visible.
export function maskNonCode(source) {
  let output = ''
  let index = 0
  while (index < source.length) {
    const char = source[index]
    const next = source[index + 1]
    if (char === '/' && next === '/') {
      output += '  '
      index += 2
      while (index < source.length && source[index] !== '\n') {
        output += ' '
        index += 1
      }
      continue
    }
    if (char === '/' && next === '*') {
      output += '  '
      index += 2
      while (index < source.length) {
        if (source[index] === '*' && source[index + 1] === '/') {
          output += '  '
          index += 2
          break
        }
        output += source[index] === '\n' ? '\n' : ' '
        index += 1
      }
      continue
    }
    if (char === '\'' || char === '"' || char === '`') {
      const quote = char
      output += ' '
      index += 1
      while (index < source.length) {
        const current = source[index]
        if (current === '\\') {
          output += current
          index += 1
          if (index < source.length) {
            output += source[index] === '\n' ? '\n' : ' '
            index += 1
          }
          continue
        }
        if (current === quote) {
          output += ' '
          index += 1
          break
        }
        output += current === '\n' ? '\n' : ' '
        index += 1
      }
      continue
    }
    output += char
    index += 1
  }
  return output
}

function normalizedRelative(root, file) {
  return relative(root, file).replaceAll('\\', '/')
}

function staticScan(report, files, root) {
  for (const file of files) {
    const rel = normalizedRelative(root, file)
    const content = readText(file, report)
    if (content === null) continue
    report.scannedFiles.push(rel)

    // Syntax: node can validate JavaScript without executing it. TS/JSX files
    // are validated by the package's real test/build gate instead.
    if (!isTestFile(file) && ['.js', '.mjs', '.cjs'].includes(extname(file))) {
      const syntax = spawnSync(process.execPath, ['--check', file], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      })
      if (syntax.status !== 0) {
        addError(report, 'syntax', {
          file: rel,
          message: `Node 语法检查失败：${(syntax.stderr || syntax.stdout || '').trim()}`,
        })
      }
    }

    // Dynamic/plain JS must not contain JSX. Keep this scoped to source files;
    // static .jsx/.tsx bundles are validated by their package toolchain.
    if (!isTestFile(file) && extname(file) === '.js' && !rel.startsWith('scripts/')) {
      const codeOnly = maskNonCode(content)
      const hasJsxTag = /<[A-Za-z][A-Za-z0-9._-]*(?:\s+[^>]*)?(?:\/>|>[^<]*<\/[A-Za-z][A-Za-z0-9._-]*>)/.test(codeOnly)
        || /return\s+<[A-Za-z][A-Za-z0-9._-]*/.test(codeOnly)
      if (hasJsxTag && !content.includes('React.createElement')) {
        addError(report, 'syntax', {
          file: rel,
          message: 'Plain JS 文件检测到疑似 JSX 语法，请使用 React.createElement 或合规编译入口。',
        })
      }
    }

    if (!isTestFile(file) && !rel.startsWith('scripts/') && !VENDOR_ENGINE_RE.test(rel)) {
      const codeOnly = maskNonCode(content)
      const hasSetInterval = /\bsetInterval\s*\(/.test(codeOnly)
      const hasClearInterval = /\bclearInterval\s*\(/.test(codeOnly)
      const hasSetTimeout = /\bsetTimeout\s*\(/.test(codeOnly)
      const hasClearTimeout = /\bclearTimeout\s*\(/.test(codeOnly)
      const hasDisposer = /\b(?:dispose|disposed|unsubscribe|unmount|destroy|stop|clear)\b/i.test(codeOnly)
      const hasEffectCleanup = /useEffect\s*\(\s*(?:async\s*)?\(\s*\)\s*=>\s*\{[\s\S]*return\s+[\s\S]*\}\s*,\s*\[/.test(content)
      const hasContextTimeout = /\bctx\.(?:timeout|effect|disposer)\b/.test(codeOnly)
      const hasOneShotFeedback = /\bsetTimeout\s*\(\s*(?:\(\s*\)\s*=>|\bfunction\b)[^{}]*(?:setCopied|setStatus|setNotice|setMessage|setFeedback|setShowToast|toast|copied|notice)\b[^{}]*,\s*(?:[1-9][0-9]{2,3})\s*\)/.test(codeOnly)
        || /\bsetTimeout\s*\(\s*(?:\(\s*\)\s*=>|\bfunction\b)\s*\{[^;{}]{1,160}\}\s*,\s*(?:[1-9][0-9]{2,3})\s*\)/.test(codeOnly)
      const hasTimerRef = /\b(?:timer|timerRef|timeoutRef|pollTimer|debounceTimer|idleTimer|intervalRef)\b/i.test(codeOnly)

      if (hasSetInterval && !hasClearInterval && !hasContextTimeout && !hasDisposer && !hasEffectCleanup) {
        addError(report, 'lifecycle', {
          file: rel,
          message: '存在 setInterval 但未发现 clearInterval、ctx.timeout 或 ctx.effect 清理路径。',
        })
      }
      if (hasSetTimeout && !hasClearTimeout && !hasContextTimeout && !hasDisposer && !hasEffectCleanup && !hasOneShotFeedback && hasTimerRef) {
        addError(report, 'lifecycle', {
          file: rel,
          message: '存在带持久引动的 setTimeout 但未发现 clearTimeout、ctx.timeout 或 ctx.effect 清理路径。',
        })
      }
      const adds = content.match(/(?:window|document)\.addEventListener\s*\(/g) || []
      const removes = content.match(/(?:window|document)\.removeEventListener\s*\(/g) || []
      const exempt = content.includes('PRODUCT_STAGE_EVENT') || content.includes('createStageStore')
      if (adds.length > 0 && removes.length < adds.length && !exempt && !content.includes('unsubscribe')) {
        addError(report, 'lifecycle', {
          file: rel,
          message: `检测到 ${adds.length} 处全局 addEventListener，但可见注销数仅 ${removes.length}。`,
        })
      }
    }

    if (!isTestFile(file) && !rel.startsWith('scripts/') && !rel.includes('fixtures/')) {
      const secretPatterns = [
        /sk-[a-zA-Z0-9]{20,}/i,
        /ghp_[a-zA-Z0-9]{20,}/i,
        /AIza[0-9A-Za-z-_]{35}/i,
        /(?:api[_-]?key|secret|token|password)\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
      ]
      if (secretPatterns.some(pattern => pattern.test(content))) {
        addError(report, 'security', {
          file: rel,
          message: '检测到疑似硬编码敏感凭据。',
        })
      }
      if (/JSON\.(?:stringify|parse)\s*\(\s*(?:ctx|service|session|props)\b/.test(content)) {
        addError(report, 'security', {
          file: rel,
          message: '禁止直接序列化 live ctx/Service/Session/Props。',
        })
      }
      if (/writeFile(?:Sync)?\s*\(\s*['"]\.\.\//.test(content)) {
        addError(report, 'security', {
          file: rel,
          message: '检测到向父级目录跨界写入。',
        })
      }
    }

    if (rel.includes('/client/') && !isTestFile(file) && !VENDOR_ENGINE_RE.test(rel) && !CONTENT_PRESET_RE.test(rel)) {
      if (content.includes('--omx-')) {
        addError(report, 'tokens', {
          file: rel,
          message: '使用了已废弃的 --omx-* 变量。',
        })
      }
      for (const [index, line] of content.split('\n').entries()) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.includes('/*')) continue
        if (/data:image\/|url\(|content\s*:/.test(line)) continue
        const matches = line.match(RAW_COLOR_RE) || []
        const filtered = matches.filter(value => !['#fff', '#ffffff', '#000', '#000000', 'rgba(0,0,0,0)'].includes(value.toLowerCase()))
        if (filtered.length > 0) {
          const isFallback = /var\(\s*--dsw-[a-z0-9_-]+\s*,\s*[^)]+\)/.test(line)
          if (!isFallback && !line.includes('--dsw-')) {
            addError(report, 'tokens', {
              file: rel,
              line: index + 1,
              message: `发现裸颜色值 (${filtered.join(', ')})，必须使用 --dsw-* token。`,
            })
          }
        }
      }
    }

    if (/(?:^|\/)[^/]*Stage\.(?:jsx|tsx|js|ts)$/.test(rel)) {
      const hasOpenState = /\b(?:open|isOpen|visible|active)\b/.test(content)
      const hasEverOpened = content.includes('everOpened')
      const hasHiddenState = /display\s*:\s*['"]?none|hidden\s*[:=]/.test(content)
      if (hasOpenState && (!hasEverOpened || !hasHiddenState)) {
        addError(report, 'guards', {
          file: rel,
          message: 'Stage 文件缺少 everOpened + 隐藏而不卸载的保活证据。',
        })
      }
      if (/if\s*\(\s*!\w+\s*\)\s*return\s+null/.test(content) && !hasEverOpened) {
        addError(report, 'guards', {
          file: rel,
          message: '检测到关页 return null 卸树反模式。',
        })
      }
    }
  }

  const checks = [
    ['syntax', `已检查 ${files.length} 个变更源码文件的 JavaScript 语法与动态插件语法`],
    ['lifecycle', '已检查定时器、全局事件与 disposer 线索'],
    ['security', '已检查凭据、live data 序列化与跨界写入'],
    ['tokens', '已检查 UI 裸颜色与废弃 token（无 UI 变更时为空检查）'],
    ['guards', '已检查 Stage 保活线索（无 Stage 变更时为空检查）'],
  ]
  for (const [dimension, message] of checks) {
    if (report.dimensions[dimension].pass) report.dimensions[dimension].checks.push(message)
  }
}

export function validateBrowserEvidence(evidenceDir) {
  const result = { pass: false, errors: [], report: null }
  if (!evidenceDir) {
    result.errors.push('未提供 ego-browser evidence 目录')
    return result
  }
  const reportPath = join(evidenceDir, 'ego-browser-report.json')
  if (!existsSync(reportPath)) {
    result.errors.push(`缺少 ${reportPath}`)
    return result
  }
  try {
    const browserReport = JSON.parse(readFileSync(reportPath, 'utf8'))
    result.report = browserReport
    const screenshot = browserReport.screenshot
      ? (isAbsolute(browserReport.screenshot) ? browserReport.screenshot : join(evidenceDir, browserReport.screenshot))
      : null
    if (browserReport.tool !== 'ego-browser') result.errors.push('证据工具不是 ego-browser')
    if (!browserReport.pass) result.errors.push('ego-browser 报告结论不是 pass')
    if (!browserReport.taskSpaceId) result.errors.push('缺少 task space id')
    if (!/^https?:\/\//.test(browserReport.actualUrl || '')) result.errors.push('缺少真实 L2 URL')
    if (!(browserReport.snapshot || '').trim()) result.errors.push('缺少 snapshotText 语义证据')
    if (!browserReport.dom) result.errors.push('缺少 DOM 断言证据')
    if (!screenshot || !existsSync(screenshot)) result.errors.push('缺少 captureScreenshot 截图工件')
  } catch (error) {
    result.errors.push(`无法解析 ego-browser 报告：${error.message}`)
  }
  result.pass = result.errors.length === 0
  return result
}

export function runGate(options) {
  const report = createReport(options)
  const root = gitRoot(options.targetDir) || options.targetDir
  let files
  if (options.diff) {
    const changed = changedFilesFromGit(root, options.base)
    report.changedFiles = changed.map(file => normalizedRelative(root, file))
    files = changed.filter(file => isInside(options.targetDir, file) && SOURCE_EXTENSIONS.has(extname(file)))
  } else {
    files = findFiles(options.targetDir)
    report.changedFiles = files.map(file => normalizedRelative(root, file))
  }

  staticScan(report, files, root)

  if (options.requireBrowser) {
    report.browser = {
      required: true,
      evidenceDir: options.evidenceDir || null,
      ...validateBrowserEvidence(options.evidenceDir),
    }
  } else {
    report.browser = {
      required: false,
      pass: true,
      evidenceDir: options.evidenceDir || null,
      errors: [],
    }
  }

  report.pass = Object.values(report.dimensions).every(dimension => dimension.pass) && report.browser.pass
  const errorCount = Object.values(report.dimensions).reduce((sum, dimension) => sum + dimension.errors.length, 0) + report.browser.errors.length
  report.summary = report.pass
    ? `PASS: L0 diff-aware 静态门禁通过（扫描 ${files.length} 个文件）`
    : `FAIL: L0 静态/浏览器证据门禁发现 ${errorCount} 项阻断`
  return report
}

function renderHuman(report) {
  const lines = [
    '',
    '======================================================',
    '🛡️ 严过关 L0 Diff-aware 自动化质检报告',
    '======================================================',
    `目标路径: ${report.targetDir}`,
    `变更文件: ${report.changedFiles.length} | 扫描文件: ${report.scannedFiles.length}`,
    `总体评定: ${report.summary}`,
    '',
  ]
  for (const [name, dimension] of Object.entries(report.dimensions)) {
    lines.push(`[${dimension.pass ? '✓' : '✗'}] ${name.toUpperCase()}`)
    for (const check of dimension.checks) lines.push(`   ✓ ${check}`)
    for (const error of dimension.errors) lines.push(`   ✗ [${error.file}${error.line ? `:${error.line}` : ''}] ${error.message}`)
  }
  lines.push(`[${report.browser.pass ? '✓' : '✗'}] EGO-BROWSER (${report.browser.required ? 'required' : 'not required'})`)
  for (const error of report.browser.errors || []) lines.push(`   ✗ ${error}`)
  lines.push('======================================================', '')
  return lines.join('\n')
}

export function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv)
  const report = runGate(options)
  if (options.output) writeFileSync(options.output, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 })
  if (options.outputJson) process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
  else process.stdout.write(renderHuman(report))
  return report.pass ? 0 : 1
}

if (import.meta.url === `file://${process.argv[1]}`) process.exitCode = main()
