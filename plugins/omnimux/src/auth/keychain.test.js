import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createKeychain } from './keychain.js'

describe('keychain adapter', () => {
  it('no-ops on non-darwin platforms', () => {
    let called = false
    const kc = createKeychain({
      platform: 'linux',
      runner: () => {
        called = true
        return { status: 0, stdout: 'pat-linux' }
      },
    })
    assert.equal(kc.get(), undefined)
    assert.equal(kc.set('pat-val'), false)
    assert.equal(kc.unset(), false)
    assert.equal(called, false)
  })

  it('invokes security CLI on darwin platform', () => {
    /** @type {Array<{ cmd: string, args: string[] }>} */
    const calls = []
    const memory = new Map()

    const kc = createKeychain({
      platform: 'darwin',
      runner: (cmd, args) => {
        calls.push({ cmd, args })
        if (args[0] === 'find-generic-password') {
          const val = memory.get('omnimux:access_token')
          if (val) return { status: 0, stdout: `${val}\n` }
          return { status: 44, stdout: '' }
        }
        if (args[0] === 'add-generic-password') {
          const wIdx = args.indexOf('-w')
          if (wIdx !== -1 && args[wIdx + 1]) {
            memory.set('omnimux:access_token', args[wIdx + 1])
            return { status: 0, stdout: '' }
          }
          return { status: 1, stdout: '' }
        }
        if (args[0] === 'delete-generic-password') {
          memory.delete('omnimux:access_token')
          return { status: 0, stdout: '' }
        }
        return { status: 1, stdout: '' }
      },
    })

    assert.equal(kc.get(), undefined)
    assert.equal(kc.set('pat-darwin'), true)
    assert.equal(kc.get(), 'pat-darwin')
    assert.equal(kc.unset(), true)
    assert.equal(kc.get(), undefined)

    assert.equal(calls.length, 5)
    assert.equal(calls[0].args[0], 'find-generic-password')
    assert.equal(calls[1].args[0], 'add-generic-password')
    assert.equal(calls[3].args[0], 'delete-generic-password')
  })

  it('handles execution failures and timeouts gracefully without throwing', () => {
    const kc = createKeychain({
      platform: 'darwin',
      runner: () => {
        throw new Error('spawn failure')
      },
    })
    assert.equal(kc.get(), undefined)
    assert.equal(kc.set('pat-val'), false)
    assert.equal(kc.unset(), false)
  })
})
