/**
 * Direct unit tests for picker.js (native macOS file/folder chooser).
 * The runner and platform are injected so no real osascript ever runs.
 */
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { PickerError, pickNativePath } from './picker.js'

/** A run stub resolving with the given stdout. */
function runOk(stdout) {
  return async (command, argv) => {
    assert.equal(command, 'osascript')
    assert.equal(argv[0], '-e')
    return { stdout, stderr: '' }
  }
}

/** A run stub rejecting with an Error carrying the given message/stderr. */
function runFail(message, stderr = '') {
  return async () => {
    const error = new Error(message)
    error.stderr = stderr
    throw error
  }
}

describe('pickNativePath kind validation', () => {
  it('rejects an unknown kind with picker-invalid-kind before touching the platform', async () => {
    for (const kind of ['folder', 'dir', '', undefined, null, 42]) {
      await assert.rejects(
        () => pickNativePath(kind, { platform: 'darwin', run: runOk('/tmp/x\n') }),
        (error) => error instanceof PickerError && error.code === 'picker-invalid-kind',
        `kind=${JSON.stringify(kind)} should be rejected`,
      )
    }
  })
})

describe('pickNativePath platform gate', () => {
  it('throws picker-unsupported on non-darwin platforms', async () => {
    for (const platform of ['linux', 'win32', 'freebsd']) {
      await assert.rejects(
        () => pickNativePath('file', { platform, run: runOk('/tmp/x\n') }),
        (error) => error instanceof PickerError && error.code === 'picker-unsupported',
        `platform=${platform} should be unsupported`,
      )
    }
  })

  it('never invokes the runner on an unsupported platform', async () => {
    let called = false
    const run = async () => {
      called = true
      return { stdout: '', stderr: '' }
    }
    await assert.rejects(() => pickNativePath('directory', { platform: 'linux', run }))
    assert.equal(called, false)
  })
})

describe('pickNativePath happy path', () => {
  it('returns the picked file path with trailing newlines stripped', async () => {
    const result = await pickNativePath('file', {
      platform: 'darwin',
      run: runOk('/Users/x/Pictures/hero.png\n'),
    })
    assert.deepEqual(result, { path: '/Users/x/Pictures/hero.png' })
  })

  it('returns the picked folder path (macOS choose folder keeps its trailing slash)', async () => {
    // osascript `choose folder` answers POSIX paths with a trailing '/'.
    // The picker only strips line terminators; the slash is preserved and
    // downstream path handling (statSync/resolve/realpathSync) tolerates it.
    const result = await pickNativePath('directory', {
      platform: 'darwin',
      run: runOk('/Users/x/Projects/assets/\r\n'),
    })
    assert.deepEqual(result, { path: '/Users/x/Projects/assets/' })
  })

  it('builds a choose file / choose folder script with a fixed prompt', async () => {
    const scripts = []
    const run = async (_command, argv) => {
      scripts.push(argv[1])
      return { stdout: '/tmp/x\n', stderr: '' }
    }
    await pickNativePath('file', { platform: 'darwin', run })
    await pickNativePath('directory', { platform: 'darwin', run })
    assert.match(scripts[0], /choose file with prompt "选择要添加的文件"/)
    assert.match(scripts[1], /choose folder with prompt "选择要添加的文件夹"/)
    // The prompt is a constant — no user input is ever interpolated.
    assert.ok(!scripts[0].includes('$'))
  })

  it('treats empty stdout as a cancellation', async () => {
    const result = await pickNativePath('file', { platform: 'darwin', run: runOk('') })
    assert.deepEqual(result, { path: null })
  })
})

describe('pickNativePath cancellation', () => {
  it('maps "User canceled" in the message to { path: null }', async () => {
    const result = await pickNativePath('file', {
      platform: 'darwin',
      run: runFail('osascript exited with code 1', 'User canceled.'),
    })
    assert.deepEqual(result, { path: null })
  })

  it('maps a -128 exit reference (AppleScript user cancel) to { path: null }', async () => {
    const result = await pickNativePath('directory', {
      platform: 'darwin',
      run: runFail('osascript exited with code 1', 'execution error: User canceled. (-128)'),
    })
    assert.deepEqual(result, { path: null })
  })

  it('detects cancellation text case-insensitively in message or stderr', async () => {
    const result = await pickNativePath('file', {
      platform: 'darwin',
      run: runFail('USER CANCELED -128'),
    })
    assert.deepEqual(result, { path: null })
  })
})

describe('pickNativePath failures', () => {
  it('wraps a generic command failure in picker-failed', async () => {
    await assert.rejects(
      () => pickNativePath('file', { platform: 'darwin', run: runFail('osascript exited with code 1', 'syntax error') }),
      (error) =>
        error instanceof PickerError &&
        error.code === 'picker-failed' &&
        error.message.includes('syntax error'),
    )
  })

  it('wraps a spawn error (missing binary) in picker-failed', async () => {
    await assert.rejects(
      () => pickNativePath('file', { platform: 'darwin', run: runFail('spawn osascript ENOENT') }),
      (error) => error instanceof PickerError && error.code === 'picker-failed',
    )
  })

  it('wraps a non-Error rejection in picker-failed', async () => {
    const run = async () => {
      throw 'weird string failure'
    }
    await assert.rejects(
      () => pickNativePath('file', { platform: 'darwin', run }),
      (error) =>
        error instanceof PickerError &&
        error.code === 'picker-failed' &&
        error.message.includes('weird string failure'),
    )
  })
})
