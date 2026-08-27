#!/usr/bin/env node
/**
 * scripts/verify-stage-contracts.mjs
 *
 * OmniMux Stage 契约防回归静态门禁：
 * 遍历 plugins 下所有 client Stage 以及一级页面组件，严格断言：
 * 1. 必须包含 display: open ? undefined : 'none' 内联样式；
 * 2. 必须实现 everOpened 惰性常驻与保活模式；
 * 3. useSyncExternalStore 必须用箭头函数包装，禁止裸传 stage.subscribe / stage.getSnapshot；
 * 4. 必须在顶层执行 inject*Styles()。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function findStageFiles(dir) {
  const results = []
  const list = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'lib' || entry.name === 'components') continue
      results.push(...findStageFiles(fullPath))
    } else if (
      entry.isFile() &&
      entry.name.endsWith('.jsx') &&
      (entry.name.endsWith('Stage.jsx') || entry.name === 'ProjectLibraryPage.jsx')
    ) {
      results.push(fullPath)
    }
  }
  return results
}

const stageFiles = findStageFiles(path.join(rootDir, 'plugins'))

let errors = 0
console.log(`[Stage Contract Linter] Auditing ${stageFiles.length} first-level stage components...`)

for (const file of stageFiles) {
  const relPath = path.relative(rootDir, file)
  const content = fs.readFileSync(file, 'utf8')

  // 1. 断言：禁止裸传 stage.subscribe / stage.getSnapshot
  if (/useSyncExternalStore\(\s*stage\s*\?\s*stage\.subscribe/m.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: useSyncExternalStore must wrap stage methods in arrow functions to preserve context!`)
    errors++
  }

  // 2. 断言：必须包含 display: open ? undefined : 'none' 内联样式
  if (!/display:\s*open\s*\?\s*undefined\s*:\s*['"]none['"]/m.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: Missing inline style 'display: open ? undefined : "none"' on stage root element!`)
    errors++
  }

  // 3. 断言：必须包含 everOpened 惰性常驻模式
  if (!/everOpened/.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: Stage component must implement everOpened keep-alive pattern!`)
    errors++
  }

  // 4. 断言：必须在顶层执行 injectStyles
  if (!/inject\w+Styles\(\)/.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: Missing injectStyles() invocation at top level!`)
    errors++
  }
}

if (errors > 0) {
  console.error(`\n❌ Found ${errors} Stage contract violations!`)
  process.exit(1)
} else {
  console.log(`✅ All ${stageFiles.length} Stage components satisfy architectural contracts perfectly.\n`)
}
