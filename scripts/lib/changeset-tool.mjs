import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

/**
 * 增加或生成一条 Agent 变更意图声明 (Changeset)
 */
export function addChangeset(repoRoot, data) {
  const { plugin, bumpType, summary, author, breakingDetails } = data
  const changesetDir = join(repoRoot, '.changeset')
  if (!existsSync(changesetDir)) {
    mkdirSync(changesetDir, { recursive: true })
  }

  const timestamp = Date.now()
  const agentTag = author || process.env.DSH_AGENT_SESSION || process.env.AGENT_ROLE || 'agent'
  const filename = `${timestamp}-${agentTag.replace(/[^a-zA-Z0-9_-]/g, '_')}.md`
  const filePath = join(changesetDir, filename)

  const content = `---
"${plugin}": ${bumpType}
---

${summary}

${breakingDetails ? `### 契约/破坏性变更说明\n${breakingDetails}\n` : ''}
`
  writeFileSync(filePath, content, 'utf8')
  return { filename, filePath }
}

/**
 * 读取当前所有未消费的 Changeset 列表
 */
export function listChangesets(repoRoot) {
  const changesetDir = join(repoRoot, '.changeset')
  if (!existsSync(changesetDir)) return []

  const files = readdirSync(changesetDir).filter((f) => f.endsWith('.md') && f !== 'README.md')
  const results = []

  for (const file of files) {
    const raw = readFileSync(join(changesetDir, file), 'utf8')
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (match) {
      const header = match[1]
      const body = match[2].trim()
      const packages = {}
      for (const line of header.split('\n')) {
        const pMatch = line.match(/^"([^"]+)":\s*(patch|minor|major)$/)
        if (pMatch) {
          packages[pMatch[1]] = pMatch[2]
        }
      }
      results.push({ file, packages, body })
    }
  }

  return results
}

/**
 * 计算语义化版本 Bump
 */
export function bumpSemver(currentVersion, bumpType) {
  const parts = currentVersion.split('.').map((p) => parseInt(p, 10))
  if (parts.length < 3 || parts.some(isNaN)) {
    return currentVersion
  }
  let [major, minor, patch] = parts
  if (bumpType === 'major') {
    major += 1
    minor = 0
    patch = 0
  } else if (bumpType === 'minor') {
    minor += 1
    patch = 0
  } else if (bumpType === 'patch') {
    patch += 1
  }
  return `${major}.${minor}.${patch}`
}

/**
 * 消费并聚合所有 Changeset，执行版本 Bump 与 CHANGELOG 追加
 */
export function consumeChangesets(repoRoot) {
  const changesets = listChangesets(repoRoot)
  if (changesets.length === 0) {
    return { applied: false, message: '没有发现待消费的 Changeset' }
  }

  const packageBumps = {} // { "omnimux-assets": { type: 'minor', logs: [] } }
  const weight = { patch: 1, minor: 2, major: 3 }

  for (const cs of changesets) {
    for (const [pkg, type] of Object.entries(cs.packages)) {
      if (!packageBumps[pkg]) {
        packageBumps[pkg] = { type, logs: [] }
      } else {
        if (weight[type] > weight[packageBumps[pkg].type]) {
          packageBumps[pkg].type = type
        }
      }
      packageBumps[pkg].logs.push(cs.body)
    }
  }

  const updatedPackages = []

  for (const [pkg, bumpInfo] of Object.entries(packageBumps)) {
    const pkgDir = join(repoRoot, 'plugins', pkg)
    const pkgFile = join(pkgDir, 'package.json')
    if (!existsSync(pkgFile)) continue

    const pkgData = JSON.parse(readFileSync(pkgFile, 'utf8'))
    const oldVersion = pkgData.version
    const newVersion = bumpSemver(oldVersion, bumpInfo.type)

    pkgData.version = newVersion
    writeFileSync(pkgFile, JSON.stringify(pkgData, null, 2) + '\n', 'utf8')

    // 更新或创建 CHANGELOG.md
    const changelogFile = join(pkgDir, 'CHANGELOG.md')
    const dateStr = new Date().toISOString().slice(0, 10)
    const changelogEntry = `\n## ${newVersion} (${dateStr})\n\n${bumpInfo.logs.map((l) => `- ${l}`).join('\n')}\n`

    let existingChangelog = existsSync(changelogFile) ? readFileSync(changelogFile, 'utf8') : `# ${pkg} Changelog\n`
    existingChangelog = existingChangelog.replace(/(# [^\n]+\n)/, `$1${changelogEntry}`)
    writeFileSync(changelogFile, existingChangelog, 'utf8')

    updatedPackages.push({ pkg, oldVersion, newVersion, bumpType: bumpInfo.type })
  }

  // 清理已消费的 changeset 文件
  for (const cs of changesets) {
    try {
      unlinkSync(join(repoRoot, '.changeset', cs.file))
    } catch {}
  }

  return { applied: true, updatedPackages }
}
