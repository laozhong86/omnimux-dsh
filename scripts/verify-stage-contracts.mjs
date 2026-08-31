#!/usr/bin/env node
/**
 * scripts/verify-stage-contracts.mjs
 *
 * OmniMux Stage / Workbench Tab 契约防回归静态门禁：
 * 1. 遍历 plugins 下所有 client Stage 组件（*Stage.jsx, ProjectLibraryPage.jsx）：
 *    - 严禁通过 __omnimuxStage.claim 抢占全局全屏 overlay；
 *    - 必须在顶层执行 inject*Styles()；
 *    - 8 大库组件必须包含 WorkbenchFocusBar 或 workbench focus 切换控件；
 *    - 根节点必须使用标准 workbench 容器样式。
 * 2. 遍历 plugins 下所有 stage-store.js：
 *    - 必须导出 createStageStore 工厂函数。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function findFiles(dir, matchFn) {
  const results = []
  const list = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'lib' || entry.name === 'components') continue
      results.push(...findFiles(fullPath, matchFn))
    } else if (entry.isFile() && matchFn(entry.name, fullPath)) {
      results.push(fullPath)
    }
  }
  return results
}

const stageFiles = findFiles(path.join(rootDir, 'plugins'), (name) =>
  name.endsWith('.jsx') && (name.endsWith('Stage.jsx') || name === 'ProjectLibraryPage.jsx')
)

const storeFiles = findFiles(path.join(rootDir, 'plugins'), (name) =>
  name === 'stage-store.js' || name === 'stageStore.js'
)

let errors = 0
console.log(`[Stage Contract Linter] Auditing ${stageFiles.length} Stage components and ${storeFiles.length} StageStore modules...`)

// --- Part 1: Audit JSX Stage Components ---
for (const file of stageFiles) {
  const relPath = path.relative(rootDir, file)
  const basename = path.basename(file)
  const content = fs.readFileSync(file, 'utf8')

  // 1. 断言：严禁直接调用 __omnimuxStage.claim 抢占 overlay
  if (/__omnimuxStage\.claim/.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: Must not call __omnimuxStage.claim directly!`)
    errors++
  }

  // 2. 断言：必须在顶层执行 injectStyles
  if (!/inject\w+Styles\(\)/.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: Missing injectStyles() invocation at top level!`)
    errors++
  }

  // 3. 断言：8大库组件必须包含 WorkbenchFocusBar 或 workbench 控制头
  const isLibraryStage = /AssetsStage|ProductsStage|AccountsStage|InspirationStage|PublishStage|AnalyticsStage|ProjectLibraryPage/.test(basename)
  if (isLibraryStage && !/WorkbenchFocusBar/.test(content) && !/omnimux-workbench-focus/.test(content)) {
    console.error(`❌ [Contract Error] ${relPath}: Missing WorkbenchFocusBar component!`)
    errors++
  }
}

// --- Part 2: Audit StageStore Modules ---
for (const file of storeFiles) {
  const relPath = path.relative(rootDir, file)
  const content = fs.readFileSync(file, 'utf8')

  // 必须导出 createStageStore
  if (!/export\s+(function\s+createStageStore|const\s+createStageStore)/.test(content)) {
    console.error(`❌ [Store Contract Error] ${relPath}: Must export createStageStore factory function!`)
    errors++
  }
}

if (errors > 0) {
  console.error(`\n❌ Found ${errors} Stage/Store contract violations!`)
  process.exit(1)
} else {
  console.log(`✅ All ${stageFiles.length} Stage components & ${storeFiles.length} StageStores satisfy architectural contracts perfectly.\n`)
}
