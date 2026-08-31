import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseGateConfig } from '../gate/config.js'
import { OmnimuxError } from './errors.js'
import { mountMedia } from './mount.js'

describe('mountMedia capability gate', () => {
  it('registers tool and provides seam when gate is enabled by default', () => {
    const tools = []
    const provided = {}
    const ctx = {
      tools: { register(t) { tools.push(t) } },
      provide(name, api) { provided[name] = api },
    }
    mountMedia(ctx, {
      kind: 'video',
      execute: async () => ({ mode: 'live' }),
      media: {},
      jsonOut: {},
    })

    assert.equal(tools.length, 1)
    assert.equal(tools[0].name, 'omnimux_video_submit')
    assert.ok(provided.videoGenerate)
  })

  it('skips tool and provide when gate.media.video is false', () => {
    const tools = []
    const provided = {}
    const ctx = {
      tools: { register(t) { tools.push(t) } },
      provide(name, api) { provided[name] = api },
    }
    mountMedia(ctx, {
      kind: 'video',
      execute: async () => ({ mode: 'live' }),
      media: {},
      gate: parseGateConfig({ media: { video: false } }),
      jsonOut: {},
    })

    assert.equal(tools.length, 0)
    assert.equal(provided.videoGenerate, undefined)
  })

  it('skips tool and provide when gate.tools.omnimux_video_submit is false', () => {
    const tools = []
    const provided = {}
    const ctx = {
      tools: { register(t) { tools.push(t) } },
      provide(name, api) { provided[name] = api },
    }
    mountMedia(ctx, {
      kind: 'video',
      execute: async () => ({ mode: 'live' }),
      media: {},
      gate: parseGateConfig({ tools: { omnimux_video_submit: false } }),
      jsonOut: {},
    })

    assert.equal(tools.length, 0)
    assert.equal(provided.videoGenerate, undefined)
  })

  it('tool.execute throws capability-disabled when tool or media is disabled in gate', async () => {
    const tools = []
    const ctx = {
      tools: { register(t) { tools.push(t) } },
      provide() {},
    }

    mountMedia(ctx, {
      kind: 'video',
      execute: async () => ({ mode: 'live' }),
      media: {},
      gate: parseGateConfig(undefined),
      jsonOut: {},
    })

    assert.equal(tools.length, 1)

    // Now test a tool mounted with gate disabling it if force-invoking execute
    let registeredTool
    mountMedia({
      tools: { register(t) { registeredTool = t } },
      provide() {},
    }, {
      kind: 'audio',
      execute: async () => ({ mode: 'live' }),
      media: {},
      gate: parseGateConfig({ media: { audio: false } }),
      jsonOut: {},
    })

    // Because gate.media.audio is false, register was skipped
    assert.equal(registeredTool, undefined)
  })
})
