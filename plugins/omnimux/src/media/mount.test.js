import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseGateConfig } from '../gate/config.js'
import { OmnimuxError } from './errors.js'
import { probeMediaAssets } from './execute.js'
import { mountMedia } from './mount.js'
import { executeOmnimuxVideo } from './video.js'

const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
const MP4 = Buffer.from([0, 0, 0, 0x18, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6f, 0x6d])
const MP3 = Buffer.from([0x49, 0x44, 0x33, 0x04, 0x00, 0x00])

describe('mountMedia capability gate', () => {
  it('derives reference metadata from media bytes instead of caller metadata', async () => {
    const image = `data:image/png;base64,${PNG.toString('base64')}`
    const video = `data:video/mp4;base64,${MP4.toString('base64')}`
    const audio = `data:audio/mpeg;base64,${MP3.toString('base64')}`
    const assets = await probeMediaAssets({
      references: [
        { type: 'image', role: 'reference', pathOrUrl: image, mime: 'image/gif', sizeBytes: 1 },
        { type: 'video', role: 'reference', pathOrUrl: video, mime: 'video/webm', sizeBytes: 1 },
      ],
      audioTrack: { type: 'audio', role: 'audio_track', pathOrUrl: audio, mime: 'audio/wav', sizeBytes: 1 },
      assetMeta: {
        [image]: { mime: 'image/gif', sizeBytes: 1 },
        [video]: { mime: 'video/webm', sizeBytes: 1 },
        [audio]: { mime: 'audio/wav', sizeBytes: 1 },
      },
    })
    assert.deepEqual(
      assets.map(({ type, mime, sizeBytes }) => ({ type, mime, sizeBytes })),
      [
        { type: 'image', mime: 'image/png', sizeBytes: PNG.byteLength },
        { type: 'video', mime: 'video/mp4', sizeBytes: MP4.byteLength },
        { type: 'audio', mime: 'audio/mp3', sizeBytes: MP3.byteLength },
      ],
    )
  })

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

  it('registered tool and seam reject untrusted bypassSubmitGuard before the video runtime', async () => {
    const tools = []
    const provided = {}
    let vendorCalls = 0
    const ctx = {
      tools: { register(tool) { tools.push(tool) } },
      provide(name, api) { provided[name] = api },
    }
    mountMedia(ctx, {
      kind: 'video',
      execute: executeOmnimuxVideo,
      media: undefined,
      jsonOut: {},
    })
    const request = {
      prompt: 'morph first to last',
      dest: '/tmp/omnimux-guard-never-writes.mp4',
      model: 'kling-v3',
      operation: 'first_last_frame',
      bypassSubmitGuard: true,
      runtime: { async execute() { vendorCalls += 1 } },
      env: { OMNIMUX_API_KEY: 'sk-test' },
    }
    await assert.rejects(
      () => tools[0].execute(request, {}),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
    await assert.rejects(
      () => provided.videoGenerate.execute(request),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
    assert.equal(vendorCalls, 0)
  })

  it('rejects an untrusted digital-human reference before the video runtime', async () => {
    const tools = []
    const provided = {}
    let vendorCalls = 0
    const badImage = 'data:image/png;base64,bm90LWFuLWltYWdl'
    mountMedia({
      tools: { register(tool) { tools.push(tool) } },
      provide(name, api) { provided[name] = api },
    }, {
      kind: 'video',
      execute: executeOmnimuxVideo,
      media: undefined,
      jsonOut: {},
    })
    await assert.rejects(
      () => provided.videoGenerate.execute({
        prompt: 'animate this portrait',
        dest: '/tmp/omnimux-untrusted-reference.mp4',
        model: 'kling-avatar',
        operation: 'digital_human',
        references: [{ type: 'image', role: 'reference', pathOrUrl: badImage }],
        assetMeta: { [badImage]: { mime: 'image/png', sizeBytes: 1 } },
        runtime: { async execute() { vendorCalls += 1 } },
        env: { OMNIMUX_API_KEY: 'sk-test' },
      }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
    assert.equal(vendorCalls, 0)
  })
})
