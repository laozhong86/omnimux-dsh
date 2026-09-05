import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { mountMedia } from './mount.js'
import { executeOmnimuxVideo } from './video.js'
import { resetTestNetworkAttempts, testNetworkAttempts } from '../../scripts/test-network-guard.mjs'

describe('test network guard', () => {
  it('blocks the protocol POST when a mounted tool drops an injected runtime', async () => {
    resetTestNetworkAttempts()
    const tools = []
    let injectedRuntimeCalls = 0
    mountMedia({
      tools: { register(tool) { tools.push(tool) } },
      provide() {},
    }, {
      kind: 'video',
      execute: executeOmnimuxVideo,
      media: {
        defaultProvider: 'omnimux',
        providers: {
          omnimux: {
            protocol: 'openai-media',
            baseUrl: 'https://external.test/v1',
            apiKey: 'test-network-guard-key',
            models: { video: 'seedance-2-0-fast' },
          },
        },
      },
      jsonOut: {},
    })

    await assert.rejects(
      () => tools[0].execute({
        prompt: 'offline guard probe',
        dest: '/tmp/omnimux-network-guard.mp4',
        model: 'seedance-2-0-fast',
        operation: 'text_to_video',
        duration: 4,
        wait: false,
        // Tools deliberately do not accept this test-only field. The test
        // proves that losing it cannot create an external request.
        runtime: { async execute() { injectedRuntimeCalls += 1 } },
      }, {}),
      (error) => error?.message.includes('omnimux test network guard blocked'),
    )
    assert.equal(injectedRuntimeCalls, 0)
    assert.deepEqual(testNetworkAttempts(), [{
      url: 'https://external.test/v1/video/generations',
      method: 'POST',
    }])
  })
})
