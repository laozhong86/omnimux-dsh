#!/usr/bin/env node
/**
 * scripts/verify-stage-contracts.mjs
 *
 * OmniMux Stage 与 StageStore 契约防回归静态门禁：
 * 1. 遍历 plugins 下所有 client Stage 组件（*Stage.jsx），严格断言：
 *    - 必须包含 display: open ? undefined : 'none' 内联样式；
 *    - 必须实现 everOpened 惰性常驻与保活模式；
 *    - useSyncExternalStore 必须用箭头函数包装，禁止裸传 stage.subscribe / stage.getSnapshot；
 *    - 必须在顶层执行 inject*Styles()。
 * 2. 遍历 plugins 下所有 stage-store.js，严格断言：
 *    - 必须导出 createStageStore 工厂函数；
 *    - 实例必须实现/具备全部标准方法：getSnapshot, subscribe, open, close, set, readBox。
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

// --- Part 2: Audit StageStore Modules ---
const REQUIRED_STORE_METHODS = ['getSnapshot', 'subscribe', 'open', 'close', 'set', 'readBox']

for (const file of storeFiles) {
  const relPath = path.relative(rootDir, file)
  const content = fs.readFileSync(file, 'utf8')

  // 必须导出 createStageStore
  if (!/export\s+(function\s+createStageStore|const\s+createStageStore)/.test(content)) {
    console.error(`❌ [Store Contract Error] ${relPath}: Must export createStageStore factory function!`)
    errors++
  }

  // 如果是直接引入 dsh-ui-kit 的 createStageStore，标准接口天然具备
  const isKitConsumer = /import\s+.*createStageStore.*from\s+['"]dsh-ui-kit['"]/.test(content)
  if (!isKitConsumer) {
    // 检查是否完整实现了 REQUIRED_STORE_METHODS
    for (const method of REQUIRED_STORE_METHODS) {
      const methodRegex = new RegExp(`\\b${method}\\s*[:(]`, 'm')
      if (!methodRegex.test(content)) {
        console.error(`❌ [Store Contract Error] ${relPath}: Custom stageStore is missing required method '${method}()'!`)
        errors++
      }
    }
  }
}

if (errors > 0) {
  console.error(`\n❌ Found ${errors} Stage/Store contract violations!`)
  process.exit(1)
} else {
  console.log(`✅ All ${stageFiles.length} Stage components & ${storeFiles.length} StageStores satisfy architectural contracts perfectly.\n`)
}
