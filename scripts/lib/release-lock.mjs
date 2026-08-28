import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const DEFAULT_TTL_MS = 90 * 1000 // 90 秒租约

/**
 * 获取 Git 根目录
 */
export function getLockFilePath(repoRoot = process.cwd()) {
  return join(repoRoot, '.git', 'omnimux-release.lock')
}

/**
 * 尝试获取分布式发布锁
 */
export function acquireReleaseLock(pluginName, options = {}) {
  const repoRoot = options.repoRoot || process.cwd()
  const lockFile = getLockFilePath(repoRoot)
  const ttl = options.ttlMs || DEFAULT_TTL_MS
  const agentId = options.agentId ||
    process.env.DSH_AGENT_SESSION ||
    process.env.AGENT_ROLE ||
    process.env.USER ||
    'omnimux-agent'

  const now = Date.now()

  if (existsSync(lockFile)) {
    try {
      const lockData = JSON.parse(readFileSync(lockFile, 'utf8'))
      if (lockData.expiresAt > now) {
        if (lockData.holder === agentId && lockData.plugin === pluginName) {
          // 相同 Agent 重入续约
          lockData.expiresAt = now + ttl
          writeFileSync(lockFile, JSON.stringify(lockData, null, 2), 'utf8')
          return { acquired: true, lockData }
        }
        return {
          acquired: false,
          reason: `锁已被持有: holder=${lockData.holder}, plugin=${lockData.plugin}, 剩余有效=${Math.round((lockData.expiresAt - now) / 1000)}s`,
          lockData,
        }
      } else {
        // 租约已超时，合法抢占
        console.warn(`⚠ 发现超时的发布锁（持有者: ${lockData.holder}），已自动抢占自愈。`)
      }
    } catch {
      // 损坏的锁文件直接覆写
    }
  }

  const lockData = {
    holder: agentId,
    plugin: pluginName,
    acquiredAt: new Date(now).toISOString(),
    expiresAt: now + ttl,
    pid: process.pid,
  }

  try {
    writeFileSync(lockFile, JSON.stringify(lockData, null, 2), { flag: 'w' })
    return { acquired: true, lockData }
  } catch (err) {
    return { acquired: false, reason: err.message }
  }
}

/**
 * 释放发布锁
 */
export function releaseReleaseLock(options = {}) {
  const repoRoot = options.repoRoot || process.cwd()
  const lockFile = getLockFilePath(repoRoot)
  if (existsSync(lockFile)) {
    try {
      unlinkSync(lockFile)
      return true
    } catch {
      return false
    }
  }
  return true
}

/**
 * 带重试与指数退避的高阶执行器
 */
export async function withReleaseLock(pluginName, fn, options = {}) {
  const maxRetries = options.maxRetries || 6
  const baseDelayMs = options.baseDelayMs || 1000

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const res = acquireReleaseLock(pluginName, options)
    if (res.acquired) {
      const prevEnv = process.env.OMNIMUX_RELEASE_LOCK_HELD
      process.env.OMNIMUX_RELEASE_LOCK_HELD = '1'
      try {
        return await fn(res.lockData)
      } finally {
        if (prevEnv) {
          process.env.OMNIMUX_RELEASE_LOCK_HELD = prevEnv
        } else {
          delete process.env.OMNIMUX_RELEASE_LOCK_HELD
        }
        releaseReleaseLock(options)
      }
    }

    if (attempt === maxRetries) {
      throw new Error(`无法获取发布锁 [${pluginName}]: ${res.reason}`)
    }

    const delay = baseDelayMs * Math.pow(1.5, attempt - 1) + Math.random() * 200
    console.log(`⏳ 发布锁正忙，等待重试 (${attempt}/${maxRetries})，将在 ${Math.round(delay)}ms 后重试...`)
    await new Promise((resolve) => setTimeout(resolve, delay))
  }
}
