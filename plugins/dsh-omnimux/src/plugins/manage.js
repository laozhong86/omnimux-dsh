import { spawnSync } from 'node:child_process'
import { homedir } from 'node:os'
import { join } from 'node:path'
import { readFileSync } from 'node:fs'

/** Bundles that Settings must not uninstall. */
export const PROTECTED_BUNDLES = Object.freeze([
  '@deepseek-ai/dsh-base',
  '@deepseek-ai/dsh-web-app',
  'dsh-omnimux',
])

const NPM_SPEC = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*(@[A-Za-z0-9._+-]+)?$/

/**
 * @param {string} spec
 * @returns {string}
 */
export function assertNpmSpec(spec) {
  if (typeof spec !== 'string' || spec.trim() === '') {
    throw new Error('plugin spec is required')
  }
  const value = spec.trim()
  if (/^(file|link|git\+|github|http|https):/i.test(value) || value.startsWith('.') || value.includes('\\')) {
    throw new Error('only npm package names are allowed')
  }
  if (value.includes('/') && !value.startsWith('@')) {
    throw new Error('only npm package names are allowed')
  }
  if (!NPM_SPEC.test(value)) {
    throw new Error('only npm package names are allowed')
  }
  return value
}

/**
 * @param {string} name
 */
export function assertRemovable(name) {
  if (PROTECTED_BUNDLES.includes(name)) {
    throw new Error(`${name} cannot be removed`)
  }
}

/**
 * @param {NodeJS.ProcessEnv} [env]
 */
export function resolvePluginCli(env = process.env) {
  const cli = env.OMNIMUX_DSH_CLI
  if (cli === undefined || cli.trim() === '') return undefined
  return {
    node: env.OMNIMUX_NODE && env.OMNIMUX_NODE.trim() !== '' ? env.OMNIMUX_NODE : process.execPath,
    cli,
    profile: env.OMNIMUX_PLUGIN_PROFILE && env.OMNIMUX_PLUGIN_PROFILE.trim() !== ''
      ? env.OMNIMUX_PLUGIN_PROFILE
      : 'omnimux',
  }
}

/**
 * @param {string} profile
 * @param {NodeJS.ProcessEnv} [env]
 */
export function readProfilePlugins(profile, env = process.env) {
  const home = env.DSH_HOME && env.DSH_HOME.trim() !== '' ? env.DSH_HOME : join(homedir(), '.dsh')
  const path = join(home, 'profiles', profile, 'package.json')
  const raw = readFileSync(path, 'utf8')
  const manifest = JSON.parse(raw)
  const bundles = manifest?.dsh?.profile?.bundles
  const list = Array.isArray(bundles) ? bundles.filter((name) => typeof name === 'string') : []
  return list.map((name) => ({
    name,
    protected: PROTECTED_BUNDLES.includes(name),
  }))
}

/**
 * @param {{
 *   args: string[],
 *   env?: NodeJS.ProcessEnv,
 *   spawn?: typeof spawnSync,
 * }} options
 */
export function runDshPlugin(options) {
  const env = options.env ?? process.env
  const exe = resolvePluginCli(env)
  if (exe === undefined) throw new Error('desktop plugin CLI is not configured')
  const spawn = options.spawn ?? spawnSync
  const result = spawn(exe.node, ['--expose-internals', exe.cli, 'plugin', '--profile', exe.profile, ...options.args], {
    env,
    encoding: 'utf8',
    timeout: 180_000,
    windowsHide: true,
  })
  const stdout = result.stdout ?? ''
  const stderr = result.stderr ?? ''
  const output = `${stdout}${stderr}`.trim()
  if (result.error) throw result.error
  if ((result.status ?? 1) !== 0) {
    throw new Error(output === '' ? `dsh plugin exited ${String(result.status)}` : output)
  }
  return output
}
