import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { extname, relative } from 'node:path'

const TEST_RE = /(?:^|[./\\])[^/\\]*\.(?:test|spec)\.[^/\\]+$/
const RAW_COLOR_RE = /#[0-9a-fA-F]{3,8}\b|rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g
const VENDOR_ENGINE_RE = /(?:^|[\\/])engine[\\/]openreel(?:[\\/]|$)/
const CONTENT_PRESET_RE = /^(?:plugins[\\/]omnimux-clip[\\/])?src[\\/]client[\\/]store[\\/]timelineTypes\.js$/
const JSX_TAG_RE = /<[A-Za-z][A-Za-z0-9._-]*(?:\s+[^>]*)?(?:\/>|>[^<]*<\/[A-Za-z][A-Za-z0-9._-]*>)/
const JSX_RETURN_RE = /return\s+<[A-Za-z][A-Za-z0-9._-]*/
const ONE_SHOT_FEEDBACK_RE = /\bsetTimeout\s*\(\s*(?:\(\s*\)\s*=>|\bfunction\b)[^{}]*(?:setCopied|setStatus|setNotice|setMessage|setFeedback|setShowToast|toast|copied|notice)\b[^{}]*,\s*(?:[1-9][0-9]{2,3})\s*\)/
const ONE_SHOT_BLOCK_RE = /\bsetTimeout\s*\(\s*(?:\(\s*\)\s*=>|\bfunction\b)\s*\{[^;{}]{1,160}\}\s*,\s*(?:[1-9][0-9]{2,3})\s*\)/
const EFFECT_CLEANUP_RE = /useEffect\s*\(\s*(?:async\s*)?\(\s*\)\s*=>\s*\{[\s\S]*return\s+[\s\S]*\}\s*,\s*\[/
const TRANSPARENT = new Set(['#fff', '#ffffff', '#000', '#000000', 'rgba(0,0,0,0)'])
const SECRET_PATTERNS = [
  /sk-[a-zA-Z0-9]{20,}/i,
  /ghp_[a-zA-Z0-9]{20,}/i,
  /AIza[0-9A-Za-z-_]{35}/i,
  /(?:api[_-]?key|secret|token|password)\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
]
const DIMENSION_CHECKS = [
  ['syntax', (count) => `已检查 ${count} 个变更源码文件的 JavaScript 语法与动态插件语法`],
  ['lifecycle', '已检查定时器、全局事件与 disposer 线索'],
  ['security', '已检查凭据、live data 序列化与跨界写入'],
  ['tokens', '已检查 UI 裸颜色与废弃 token（无 UI 变更时为空检查）'],
  ['guards', '已检查 Stage 保活线索（无 Stage 变更时为空检查）'],
]

export function isTestFile(file) {
  return TEST_RE.test(file)
}

export function normalizedRelative(root, file) {
  return relative(root, file).replaceAll('\\', '/')
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

function scanNodeSyntax(report, file, rel) {
  if (isTestFile(file)) return
  if (!['.js', '.mjs', '.cjs'].includes(extname(file))) return
  const syntax = spawnSync(process.execPath, ['--check', file], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (syntax.status === 0) return
  addError(report, 'syntax', {
    file: rel,
    message: `Node 语法检查失败：${(syntax.stderr || syntax.stdout || '').trim()}`,
  })
}

function scanJsxInPlainJs(report, file, rel, content) {
  if (isTestFile(file)) return
  if (extname(file) !== '.js') return
  if (rel.startsWith('scripts/')) return
  if (/(^|\/)(lib|dist)\//.test(rel)) return
  const codeOnly = maskNonCode(content)
  const hasJsxTag = JSX_TAG_RE.test(codeOnly) || JSX_RETURN_RE.test(codeOnly)
  if (!hasJsxTag) return
  if (content.includes('React.createElement')) return
  addError(report, 'syntax', {
    file: rel,
    message: 'Plain JS 文件检测到疑似 JSX 语法，请使用 React.createElement 或合规编译入口。',
  })
}

function lifecycleFlags(content) {
  const codeOnly = maskNonCode(content)
  return {
    setInterval: /\bsetInterval\s*\(/.test(codeOnly),
    clearInterval: /\bclearInterval\s*\(/.test(codeOnly),
    setTimeout: /\bsetTimeout\s*\(/.test(codeOnly),
    clearTimeout: /\bclearTimeout\s*\(/.test(codeOnly),
    disposer: /\b(?:dispose|disposed|unsubscribe|unmount|destroy|stop|clear)\b/i.test(codeOnly),
    effectCleanup: EFFECT_CLEANUP_RE.test(content),
    contextTimeout: /\bctx\.(?:timeout|effect|disposer)\b/.test(codeOnly),
    oneShotFeedback: ONE_SHOT_FEEDBACK_RE.test(codeOnly) || ONE_SHOT_BLOCK_RE.test(codeOnly),
    timerRef: /\b(?:timer|timerRef|timeoutRef|pollTimer|debounceTimer|idleTimer|intervalRef)\b/i.test(codeOnly),
    codeOnly,
  }
}

function scanLifecycle(report, file, rel, content) {
  if (isTestFile(file) || rel.startsWith('scripts/') || VENDOR_ENGINE_RE.test(rel)) return
  const flags = lifecycleFlags(content)
  const intervalCleanup = flags.clearInterval || flags.contextTimeout || flags.disposer || flags.effectCleanup
  if (flags.setInterval && !intervalCleanup) {
    addError(report, 'lifecycle', {
      file: rel,
      message: '存在 setInterval 但未发现 clearInterval、ctx.timeout 或 ctx.effect 清理路径。',
    })
  }
  const timeoutCleanup = flags.clearTimeout || flags.contextTimeout || flags.disposer || flags.effectCleanup || flags.oneShotFeedback
  if (flags.setTimeout && flags.timerRef && !timeoutCleanup) {
    addError(report, 'lifecycle', {
      file: rel,
      message: '存在带持久引动的 setTimeout 但未发现 clearTimeout、ctx.timeout 或 ctx.effect 清理路径。',
    })
  }
  const adds = content.match(/(?:window|document)\.addEventListener\s*\(/g) || []
  if (adds.length === 0) return
  const removes = content.match(/(?:window|document)\.removeEventListener\s*\(/g) || []
  const exempt = content.includes('PRODUCT_STAGE_EVENT') || content.includes('createStageStore')
  if (removes.length >= adds.length || exempt || content.includes('unsubscribe')) return
  addError(report, 'lifecycle', {
    file: rel,
    message: `检测到 ${adds.length} 处全局 addEventListener，但可见注销数仅 ${removes.length}。`,
  })
}

function scanSecurity(report, file, rel, content) {
  if (isTestFile(file) || rel.startsWith('scripts/') || rel.includes('fixtures/')) return
  if (SECRET_PATTERNS.some((pattern) => pattern.test(content))) {
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

function scanTokens(report, file, rel, content) {
  if (!rel.includes('/client/')) return
  if (isTestFile(file) || VENDOR_ENGINE_RE.test(rel) || CONTENT_PRESET_RE.test(rel)) return
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
    const filtered = matches.filter((value) => !TRANSPARENT.has(value.toLowerCase()))
    if (filtered.length === 0) continue
    if (/var\(\s*--dsw-[a-z0-9_-]+\s*,\s*[^)]+\)/.test(line)) continue
    if (line.includes('--dsw-')) continue
    addError(report, 'tokens', {
      file: rel,
      line: index + 1,
      message: `发现裸颜色值 (${filtered.join(', ')})，必须使用 --dsw-* token。`,
    })
  }
}

function scanGuards(report, rel, content) {
  if (!/(?:^|\/)[^/]*Stage\.(?:jsx|tsx|js|ts)$/.test(rel)) return
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

export function staticScan(report, files, root) {
  for (const file of files) {
    const rel = normalizedRelative(root, file)
    const content = readText(file, report)
    if (content === null) continue
    report.scannedFiles.push(rel)
    scanNodeSyntax(report, file, rel)
    scanJsxInPlainJs(report, file, rel, content)
    scanLifecycle(report, file, rel, content)
    scanSecurity(report, file, rel, content)
    scanTokens(report, file, rel, content)
    scanGuards(report, rel, content)
  }

  for (const [dimension, message] of DIMENSION_CHECKS) {
    if (!report.dimensions[dimension].pass) continue
    const text = typeof message === 'function' ? message(files.length) : message
    report.dimensions[dimension].checks.push(text)
  }
}
