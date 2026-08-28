/**
 * status-display.js: 发布中心六态中文单真源、聚合与展示态派生算法。
 * 依据 spec-ui-client-v2.4.md 与 architecture-ui-table-v2.4.md 规范定义。
 */

/** @typedef {'draft' | 'publishing' | 'reviewing' | 'published' | 'partial_failed' | 'failed'} DisplayStatus */

/** 六态中文单真源对照字典 */
export const STATUS_LABEL = {
  draft: '草稿',
  publishing: '发布中',
  reviewing: '审核中',
  published: '已发布',
  partial_failed: '部分失败',
  failed: '失败',
}

/**
 * 客户端状态聚合辅助函数（与 Host store.aggregateStatus 严格同构）
 * 核心不变量：inflight > 0 优先返回 'publishing'，保障 reviewing 覆盖层能正确派生。
 * @param {{ status: string, subtasks?: Array<{ status: string }> }} record
 * @returns {'draft' | 'publishing' | 'partial_failed' | 'failed' | 'published'}
 */
export function aggregateOf(record) {
  if (!record || record.status === 'draft') return 'draft'
  const tasks = Array.isArray(record.subtasks) ? record.subtasks : []
  if (tasks.length === 0) return 'publishing'
  const published = tasks.filter((t) => t.status === 'published').length
  const failed = tasks.filter((t) => t.status === 'failed').length
  const inflight = tasks.length - published - failed
  if (inflight > 0) return 'publishing'
  if (failed === 0) return 'published'
  if (published === 0) return 'failed'
  return 'partial_failed'
}

/**
 * 将账本数据投影为前端展示态
 * 严格逐行对齐 architecture-ui-table-v2.4.md §5.2 伪代码
 * @param {{
 *   status: string,
 *   aggregate?: string,
 *   subtask_summary?: { reviewing?: number, failed?: number, published?: number, total?: number },
 *   subtasks?: Array<{ status: string }>
 * }} record
 * @returns {DisplayStatus}
 */
export function displayStatus(record) {
  if (!record || record.status === 'draft') {
    return 'draft'
  }
  const agg = record.aggregate || aggregateOf(record)
  const summary = record.subtask_summary
  const reviewingCount = summary && typeof summary.reviewing === 'number'
    ? summary.reviewing
    : (record.subtasks || []).filter((s) => s.status === 'reviewing').length

  if (reviewingCount > 0 && agg === 'publishing') {
    return 'reviewing'
  }
  if (agg === 'reviewing') {
    return 'reviewing'
  }
  if (agg === 'published' || agg === 'partial_failed' || agg === 'failed' || agg === 'publishing') {
    return agg
  }
  return 'draft'
}

/**
 * 返回状态的中文文本
 * @param {string} status
 */
export function statusText(status) {
  return STATUS_LABEL[status] || status || '草稿'
}
