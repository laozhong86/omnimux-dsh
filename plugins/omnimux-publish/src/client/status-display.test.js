import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { aggregateOf, displayStatus, statusText, STATUS_LABEL } from './status-display.js'

describe('status-display: 六态中文单真源与派生算法', () => {
  it('STATUS_LABEL 六态完整且无死角', () => {
    assert.equal(STATUS_LABEL.draft, '草稿')
    assert.equal(STATUS_LABEL.publishing, '发布中')
    assert.equal(STATUS_LABEL.reviewing, '审核中')
    assert.equal(STATUS_LABEL.published, '已发布')
    assert.equal(STATUS_LABEL.partial_failed, '部分失败')
    assert.equal(STATUS_LABEL.failed, '失败')
    assert.equal(statusText('published'), '已发布')
    assert.equal(statusText('reviewing'), '审核中')
  })

  it('aggregateOf 保持 inflight-first 与 Host 同构', () => {
    // 1. [published, failed, reviewing] -> inflight=1 > 0 -> publishing
    assert.equal(
      aggregateOf({
        status: 'submitted',
        subtasks: [{ status: 'published' }, { status: 'failed' }, { status: 'reviewing' }],
      }),
      'publishing',
    )

    // 2. [published, failed] -> partial_failed (无 inflight)
    assert.equal(
      aggregateOf({
        status: 'submitted',
        subtasks: [{ status: 'published' }, { status: 'failed' }],
      }),
      'partial_failed',
    )

    // 3. all published -> published
    assert.equal(
      aggregateOf({
        status: 'submitted',
        subtasks: [{ status: 'published' }, { status: 'published' }],
      }),
      'published',
    )

    // 4. all failed -> failed
    assert.equal(
      aggregateOf({
        status: 'submitted',
        subtasks: [{ status: 'failed' }, { status: 'failed' }],
      }),
      'failed',
    )

    // 5. draft -> draft
    assert.equal(aggregateOf({ status: 'draft' }), 'draft')
  })

  it('displayStatus reviewing 派生覆盖与各态投影', () => {
    // 1. 子任务有 reviewing 且处于发布中 -> 派生 reviewing
    assert.equal(
      displayStatus({
        status: 'submitted',
        aggregate: 'publishing',
        subtasks: [{ status: 'published' }, { status: 'failed' }, { status: 'reviewing' }],
      }),
      'reviewing',
    )

    // 2. subtask_summary 有 reviewing -> 派生 reviewing
    assert.equal(
      displayStatus({
        status: 'submitted',
        aggregate: 'publishing',
        subtask_summary: { reviewing: 1, total: 2 },
      }),
      'reviewing',
    )

    // 3. published 无 reviewing -> published
    assert.equal(
      displayStatus({
        status: 'submitted',
        aggregate: 'published',
        subtasks: [{ status: 'published' }],
      }),
      'published',
    )

    // 4. partial_failed -> partial_failed
    assert.equal(
      displayStatus({
        status: 'submitted',
        aggregate: 'partial_failed',
        subtasks: [{ status: 'published' }, { status: 'failed' }],
      }),
      'partial_failed',
    )

    // 5. draft -> draft
    assert.equal(displayStatus({ status: 'draft' }), 'draft')
  })
})
