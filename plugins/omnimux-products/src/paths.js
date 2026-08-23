import { homedir } from 'node:os'
import { join } from 'node:path'

/**
 * Resolve the official DSH home, matching the hub / assets convention.
 * @param {string | undefined} homeDir
 * @param {{ DSH_HOME?: string }} [env]
 */
export function resolveDshHome(homeDir, env = process.env) {
  return homeDir || env.DSH_HOME || join(homedir(), '.dsh')
}

/**
 * All products state lives under `<dsh home>/omnimux/products/`.
 * This directory is the only disk area this plugin may write.
 * @param {{ homeDir?: string, env?: NodeJS.ProcessEnv }} [opts]
 */
export function resolveProductsPaths(opts = {}) {
  const home = resolveDshHome(opts.homeDir, opts.env)
  const dir = join(home, 'omnimux', 'products')
  return {
    dir,
    libraryFile: join(dir, 'library.json'),
  }
}
