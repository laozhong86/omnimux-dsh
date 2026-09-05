import { spawnSync } from 'node:child_process'
import { globSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const TEST_GLOBS = [
  'src/**/*.test.js',
  'src/**/*.test.ts',
]

const EXCLUDED_GLOBS = [
  'src/**/node_modules/**',
  'src/**/fixture/**',
  'src/**/fixtures/**',
  'src/**/vendor/**',
  'src/**/build/**',
  'src/**/dist/**',
]
const NETWORK_GUARD_TEST = 'src/media/test-network-guard.test.js'

export function discoverTestFiles(cwd = process.cwd()) {
  return globSync(TEST_GLOBS, {
    cwd,
    exclude: EXCLUDED_GLOBS,
  }).map((file) => file.replaceAll('\\', '/')).sort()
}

export function assertTestFiles(files) {
  if (files.length === 0) {
    throw new Error('No Hub test files matched the source test globs')
  }
}

export function runTests(cwd = process.cwd()) {
  const files = discoverTestFiles(cwd)
  assertTestFiles(files)
  if (!files.includes(NETWORK_GUARD_TEST)) {
    throw new Error(`Missing required network guard test: ${NETWORK_GUARD_TEST}`)
  }
  console.log(`[omnimux:test] discovered ${files.length} test files`)

  const preload = new URL('./test-network-guard.mjs', import.meta.url).href
  const run = (testFiles) => spawnSync(process.execPath, ['--import', preload, '--test', ...testFiles], {
    cwd,
    stdio: 'inherit',
  })
  const guardResult = run([NETWORK_GUARD_TEST])
  if (guardResult.error) throw guardResult.error
  if (guardResult.signal) {
    throw new Error(`Hub network guard test terminated by ${guardResult.signal}`)
  }
  if (guardResult.status !== 0) return guardResult.status ?? 1

  const result = run(files.filter((file) => file !== NETWORK_GUARD_TEST))
  if (result.error) throw result.error
  if (result.signal) {
    throw new Error(`Hub test runner terminated by ${result.signal}`)
  }
  return result.status ?? 1
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    process.exitCode = runTests()
  } catch (error) {
    console.error(`[omnimux:test] ${error instanceof Error ? error.message : String(error)}`)
    process.exitCode = 1
  }
}
