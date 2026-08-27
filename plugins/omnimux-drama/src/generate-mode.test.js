import assert from 'node:assert/strict'
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { apply } from './index.js'

const fixtureRoot = join(dirname(fileURLToPath(import.meta.url)), '../../../fixtures/demo-series')

function mount(options = {}) {
  const tools = new Map()
  let jobStarts = 0
  const ctx = {
    get(name) {
      if (name === 'videoGenerate') return options.video
      if (name === 'jobs') return options.jobs
      return undefined
    },
    effect(fn) { fn() },
    systemPrompt: { section() {} },
    tools: { register(tool) { tools.set(tool.name, tool) } },
  }
  if (options.jobs === true) {
    ctx.get = (name) => {
      if (name === 'videoGenerate') return options.video
      if (name === 'jobs') {
        return {
          start() {
            jobStarts += 1
            return 'job-1'
          },
        }
      }
      return undefined
    }
  }
  apply(ctx)
  return {
    tools,
    jobStarts: () => jobStarts,
  }
}

describe('drama_generate_shot execution mode', () => {
  /** @type {string} */
  let root

  it('setup', () => {
    root = mkdtempSync(join(tmpdir(), 'drama-mode-'))
    cpSync(fixtureRoot, root, { recursive: true })
  })

  it('stays synchronous when jobs exist and background is omitted', async () => {
    const calls = []
    const { tools, jobStarts } = mount({
      jobs: true,
      video: {
        async execute(req) {
          calls.push(req)
          if (req.wait === false) {
            return { mode: 'submitted', taskId: 'task-sync', url: null }
          }
          writeFileSync(req.dest, 'live-bytes')
          return { mode: 'live', taskId: req.taskId, url: 'https://cdn.example/a.mp4' }
        },
      },
    })
    const result = await tools.get('drama_generate_shot').execute(
      { shot_id: 'e01-s01' },
      { agent: { session: { header: { cwd: root } } } },
    )
    assert.equal(jobStarts(), 0)
    assert.equal(result.mode, 'live')
    assert.equal(readFileSync(join(root, 'series/assets/e01-s01.mp4'), 'utf8'), 'live-bytes')
    const shots = JSON.parse(readFileSync(join(root, 'series/shots.json'), 'utf8'))
    const shot = shots.find((row) => row.shot_id === 'e01-s01')
    assert.equal(shot.status, 'ready')
    assert.equal(shot.job_id, 'task-sync')
    assert.equal(calls.length, 2)
    assert.equal(calls[0].wait, false)
    assert.equal(calls[1].taskId, 'task-sync')
  })

  it('resumes a generating shot from job_id', async () => {
    const rootResume = mkdtempSync(join(tmpdir(), 'drama-resume-'))
    cpSync(fixtureRoot, rootResume, { recursive: true })
    const shotsPath = join(rootResume, 'series/shots.json')
    const rows = JSON.parse(readFileSync(shotsPath, 'utf8'))
    const row = rows.find((item) => item.shot_id === 'e01-s01')
    row.status = 'generating'
    row.job_id = 'task-resume'
    writeFileSync(shotsPath, `${JSON.stringify(rows, null, 2)}\n`)
    const calls = []
    const { tools } = mount({
      video: {
        async execute(req) {
          calls.push(req)
          writeFileSync(req.dest, 'resumed-bytes')
          return { mode: 'live', taskId: req.taskId, url: 'https://cdn.example/r.mp4' }
        },
      },
    })
    const result = await tools.get('drama_generate_shot').execute(
      { shot_id: 'e01-s01' },
      { agent: { session: { header: { cwd: rootResume } } } },
    )
    assert.equal(result.mode, 'live')
    assert.equal(calls.length, 1)
    assert.equal(calls[0].taskId, 'task-resume')
    assert.equal(calls[0].wait, undefined)
    assert.equal(readFileSync(join(rootResume, 'series/assets/e01-s01.mp4'), 'utf8'), 'resumed-bytes')
    rmSync(rootResume, { recursive: true, force: true })
  })

  it('starts a job only when background is true', async () => {
    const root2 = mkdtempSync(join(tmpdir(), 'drama-bg-'))
    cpSync(fixtureRoot, root2, { recursive: true })
    const { tools, jobStarts } = mount({
      jobs: true,
      video: {
        async execute() {
          throw new Error('job body should not run in this stub start()')
        },
      },
    })
    const result = await tools.get('drama_generate_shot').execute(
      { shot_id: 'e01-s01', background: true },
      { agent: { session: { header: { cwd: root2 } } } },
    )
    assert.equal(jobStarts(), 1)
    assert.equal(result.mode, 'live')
    assert.equal(result.jobId, 'job-1')
    rmSync(root2, { recursive: true, force: true })
  })

  it('cleanup', () => {
    rmSync(root, { recursive: true, force: true })
  })
})
