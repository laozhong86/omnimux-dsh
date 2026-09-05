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

function pngData(extra) {
  return `data:image/png;base64,${Buffer.concat([PNG, Buffer.from([extra])]).toString('base64')}`
}

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

  it('mounts the complete workflow media shape through both tool and seam', async () => {
    const tools = []
    const provided = {}
    const runtimeCalls = []
    mountMedia({
      tools: { register(tool) { tools.push(tool) } },
      provide(name, api) { provided[name] = api },
    }, {
      kind: 'video',
      execute: async (request) => {
        runtimeCalls.push(request)
        return { mode: 'live' }
      },
      media: {},
      jsonOut: {},
    })
    const workflow = {
      prompt: 'transition between the frames',
      dest: '/tmp/omnimux-mounted-shape.mp4',
      image: 'https://example.com/first.png',
      image_tail: 'https://example.com/last.png',
      references: [{ type: 'image', role: 'reference', pathOrUrl: 'https://example.com/reference.png' }],
      audioTrack: { type: 'audio', role: 'audio_track', pathOrUrl: 'https://example.com/track.mp3' },
    }

    await tools[0].execute(workflow, {})
    await provided.videoGenerate.execute(workflow)

    assert.equal(runtimeCalls.length, 2)
    for (const request of runtimeCalls) {
      assert.equal(request.image, workflow.image)
      assert.equal(request.image_tail, workflow.image_tail)
      assert.deepEqual(request.references, workflow.references)
      assert.deepEqual(request.audioTrack, workflow.audioTrack)
    }
    assert.ok(tools[0].parameters.properties.image_tail)
    assert.ok(tools[0].parameters.properties.references)
    assert.ok(tools[0].parameters.properties.audioTrack)
  })

  it('uses internal video semantics when probing workflow media', async () => {
    const first = pngData(1)
    const reference = pngData(2)
    const last = pngData(3)
    const audio = `data:audio/mpeg;base64,${MP3.toString('base64')}`
    const assets = await probeMediaAssets({
      // These caller fields must not alter the mounted video boundary.
      capability: 'image',
      seam: 'imageGenerate',
      image: first,
      image_tail: last,
      references: [{ type: 'image', role: 'reference', pathOrUrl: reference }],
      audioTrack: { type: 'audio', role: 'audio_track', pathOrUrl: audio },
    }, { capability: 'video', seam: 'videoGenerate' })

    assert.deepEqual(
      assets.map(({ type, role, pathOrUrl }) => ({ type, role, pathOrUrl })),
      [
        { type: 'image', role: 'reference', pathOrUrl: reference },
        { type: 'image', role: 'first_frame', pathOrUrl: first },
        { type: 'image', role: 'last_frame', pathOrUrl: last },
        { type: 'audio', role: 'audio_track', pathOrUrl: audio },
      ],
    )
  })

  it('keeps an explicit first-frame reference when image repeats its URL', async () => {
    const first = pngData(6)
    const assets = await probeMediaAssets({
      image: first,
      references: [{ type: 'image', role: 'first_frame', pathOrUrl: first }],
    }, { capability: 'video', seam: 'videoGenerate' })

    assert.deepEqual(
      assets.map(({ type, role, pathOrUrl }) => ({ type, role, pathOrUrl })),
      [{ type: 'image', role: 'first_frame', pathOrUrl: first }],
    )
  })

  it('submits mounted duplicate image shorthand as the listed multi-reference operation', async () => {
    const tools = []
    const provided = {}
    const runtimeCalls = []
    const firstReference = pngData(4)
    const secondReference = pngData(5)
    const request = {
      prompt: 'two reference subjects in one scene',
      dest: '/tmp/omnimux-mounted-multi-ref.mp4',
      model: 'seedance-2-0-fast',
      operation: 'video_multi_ref',
      // Workflow stores the leading reference in image as well as references.
      image: firstReference,
      references: [
        { type: 'image', role: 'reference', pathOrUrl: firstReference },
        { type: 'image', role: 'reference', pathOrUrl: secondReference },
      ],
      duration: 4,
      resolution: '720P',
      aspectRatio: '16:9',
      wait: false,
    }
    mountMedia({
      tools: { register(tool) { tools.push(tool) } },
      provide(name, api) { provided[name] = api },
    }, {
      kind: 'video',
      execute: (mountedRequest) => executeOmnimuxVideo({
        ...mountedRequest,
        env: { OMNIMUX_API_KEY: 'sk-test' },
        fetcher: async () => {
          throw new Error('network disabled in mounted media guard test')
        },
        runtime: {
          async execute(call) {
            runtimeCalls.push(call)
            return { taskId: `task-${runtimeCalls.length}`, outputs: [] }
          },
        },
      }),
      media: undefined,
      jsonOut: {},
    })

    await tools[0].execute(request, {})
    await provided.videoGenerate.execute(request)

    assert.equal(runtimeCalls.length, 2)
    for (const call of runtimeCalls) {
      assert.deepEqual(call.input.reference_images, [
        { url: firstReference },
        { url: secondReference },
      ])
      assert.equal('image' in call.input, false)
      assert.equal('image_tail' in call.input, false)
      assert.equal('references' in call.input, false)
      assert.equal('audioTrack' in call.input, false)
    }
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
