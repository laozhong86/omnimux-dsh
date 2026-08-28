import { execSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

/**
 * 计算文件的 SHA384 完整性哈希
 */
export function computeFileIntegrity(filePath) {
  if (!existsSync(filePath)) return null
  const content = readFileSync(filePath)
  const hash = createHash('sha384').update(content).digest('base64')
  return `sha384-${hash}`
}

/**
 * 获取 Git 仓库的提交与分支信息
 */
export function getGitProvenance(cwd = process.cwd()) {
  try {
    const gitCommitSha = execSync('git rev-parse HEAD', { cwd, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
    const gitBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
    const isDirty = execSync('git status --porcelain', { cwd, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim().length > 0
    return { gitCommitSha, gitBranch, isDirty }
  } catch {
    return {
      gitCommitSha: 'unknown-sha',
      gitBranch: 'unknown-branch',
      isDirty: false,
    }
  }
}

/**
 * 读取兼容性矩阵中的 Seam 与 Hub 版本信息
 */
export function getContractInfo(repoRoot) {
  const matrixPath = join(repoRoot, 'compatibility-matrix.json')
  if (!existsSync(matrixPath)) {
    return { hubSeamVersion: '^0.1.0', consumedSeamHashes: {} }
  }
  try {
    const matrix = JSON.parse(readFileSync(matrixPath, 'utf8'))
    return {
      hubSeamVersion: `^${matrix.hub?.currentVersion || '0.1.0'}`,
      supportedSeamVersions: matrix.hub?.supportedSeamVersions || ['1.0'],
    }
  } catch {
    return { hubSeamVersion: '^0.1.0' }
  }
}

/**
 * 为指定插件生成 build-manifest.json
 */
export function generateBuildManifest(pluginDir, options = {}) {
  const pkgFile = join(pluginDir, 'package.json')
  if (!existsSync(pkgFile)) {
    throw new Error(`无法生成 Manifest: 未找到 package.json (${pkgFile})`)
  }

  const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'))
  const repoRoot = resolve(pluginDir, '../..')
  const provenance = getGitProvenance(repoRoot)
  const contractInfo = getContractInfo(repoRoot)

  const agentId = options.builderAgentId ||
    process.env.DSH_AGENT_SESSION ||
    process.env.AGENT_ROLE ||
    process.env.USER ||
    'omnimux-agent'

  // 计算关键构建产物的完整性哈希
  const artifacts = {}
  if (existsSync(join(pluginDir, 'lib/client.js'))) {
    artifacts.clientBundle = 'lib/client.js'
    artifacts.integrity = computeFileIntegrity(join(pluginDir, 'lib/client.js'))
  } else if (existsSync(join(pluginDir, 'dist/index.js'))) {
    artifacts.entry = 'dist/index.js'
    artifacts.integrity = computeFileIntegrity(join(pluginDir, 'dist/index.js'))
  } else if (existsSync(join(pluginDir, 'src/index.js'))) {
    artifacts.entry = 'src/index.js'
    artifacts.integrity = computeFileIntegrity(join(pluginDir, 'src/index.js'))
  }

  const manifest = {
    $schema: 'https://omnimux.internal/schemas/build-manifest.v1.json',
    name: pkg.name,
    version: pkg.version,
    targetProfile: options.targetProfile || 'omnimux',
    environment: options.environment || 'L3-production',
    provenance: {
      gitCommitSha: provenance.gitCommitSha,
      gitBranch: provenance.gitBranch,
      isDirty: provenance.isDirty,
      buildTimestamp: new Date().toISOString(),
      builderAgentId: agentId,
    },
    contracts: {
      hubSeamVersion: contractInfo.hubSeamVersion,
      peerDependencies: pkg.peerDependencies || {},
      engines: pkg.engines || {},
    },
    artifacts,
  }

  const outputPath = options.outputPath || join(pluginDir, 'build-manifest.json')
  writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  return manifest
}

// CLI 直接调用支持
if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) {
  const targetDir = process.argv[2] || process.cwd()
  const manifest = generateBuildManifest(targetDir)
  console.log(`✓ 已生成 build-manifest.json: ${manifest.name}@${manifest.version}`)
}
