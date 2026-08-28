/**
 * videoCompositionStatus 纯函数单测（T1）。
 *
 * 断言范围：
 * 1. 状态映射矩阵（Badge / Generation / View 三条），含 hasOutput 组合分支；
 * 2. 格式化边界（时长：正常 / 取整 / 零 / 非法；分辨率：缺失 / 合法）；
 * 3. projectFileName 清洗（非法字符折叠、CJK 保留、截断、空兜底）。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  formatDuration,
  formatResolution,
  mapVideoCompositionToBadge,
  mapVideoCompositionToGeneration,
  mapVideoCompositionToView,
  projectFileName,
} from './videoCompositionStatus.ts';

// .mjs 由 node --test 直跑：不要出现 import type（Node 不对 .mjs 做类型剥离）
const ALL_STATUSES = ['idle', 'editing', 'rendering', 'completed', 'error'];

// ==================== Badge 映射矩阵 ====================

test('mapVideoCompositionToBadge：五种状态全矩阵', () => {
  assert.equal(mapVideoCompositionToBadge('completed'), 'completed');
  assert.equal(mapVideoCompositionToBadge('rendering'), 'generating');
  assert.equal(mapVideoCompositionToBadge('editing'), 'generating');
  assert.equal(mapVideoCompositionToBadge('error'), 'failed');
  assert.equal(mapVideoCompositionToBadge('idle'), undefined);
});

// ==================== Generation 映射矩阵 ====================

test('mapVideoCompositionToGeneration：五种状态全矩阵', () => {
  assert.equal(mapVideoCompositionToGeneration('completed'), 'completed');
  assert.equal(mapVideoCompositionToGeneration('rendering'), 'generating');
  assert.equal(mapVideoCompositionToGeneration('editing'), 'generating');
  assert.equal(mapVideoCompositionToGeneration('error'), 'failed');
  assert.equal(mapVideoCompositionToGeneration('idle'), null);
});

// ==================== View 映射矩阵（含 hasOutput 分支） ====================

test('mapVideoCompositionToView：错误态优先 error，且与 hasOutput 无关', () => {
  assert.equal(mapVideoCompositionToView('error', false), 'error');
  assert.equal(mapVideoCompositionToView('error', true), 'error');
});

test('mapVideoCompositionToView：渲染态固定 rendering，与 hasOutput 无关', () => {
  assert.equal(mapVideoCompositionToView('rendering', false), 'rendering');
  assert.equal(mapVideoCompositionToView('rendering', true), 'rendering');
});

test('mapVideoCompositionToView：completed/idle/editing 由 hasOutput 分流 result/launcher', () => {
  assert.equal(mapVideoCompositionToView('completed', true), 'result');
  assert.equal(mapVideoCompositionToView('completed', false), 'launcher');
  assert.equal(mapVideoCompositionToView('idle', true), 'result');
  assert.equal(mapVideoCompositionToView('idle', false), 'launcher');
  // editing（编辑器打开）时卡片保持原产物/空态，与旧行为一致
  assert.equal(mapVideoCompositionToView('editing', true), 'result');
  assert.equal(mapVideoCompositionToView('editing', false), 'launcher');
});

test('mapVideoCompositionToView：映射不抛异常且返回值都在四分支集合内', () => {
  const branches = new Set(['result', 'rendering', 'error', 'launcher']);
  for (const status of ALL_STATUSES) {
    for (const hasOutput of [false, true]) {
      const view = mapVideoCompositionToView(status, hasOutput);
      assert.ok(branches.has(view), `未知分支：${status}/${hasOutput} → ${view}`);
    }
  }
});

// ==================== formatDuration 边界 ====================

test('formatDuration：正常值与零', () => {
  assert.equal(formatDuration(0), '00:00.000');
  assert.equal(formatDuration(65_000), '01:05.000');
  assert.equal(formatDuration(61_234), '01:01.234');
  assert.equal(formatDuration(3_599_999), '59:59.999');
});

test('formatDuration：毫秒取整（Math.round）', () => {
  assert.equal(formatDuration(999.4), '00:00.999');
  assert.equal(formatDuration(1000.6), '00:01.001');
});

test('formatDuration：非法输入兜底占位符', () => {
  assert.equal(formatDuration(undefined), '—');
  assert.equal(formatDuration(Number.NaN), '—');
  assert.equal(formatDuration(-1), '—');
  assert.equal(formatDuration(Number.POSITIVE_INFINITY), '—');
});

// ==================== formatResolution 边界 ====================

test('formatResolution：合法与缺失维度', () => {
  assert.equal(formatResolution(1920, 1080), '1920×1080');
  assert.equal(formatResolution(720), '—');
  assert.equal(formatResolution(undefined, 1080), '—');
  assert.equal(formatResolution(0, 1080), '—');
  assert.equal(formatResolution(undefined, undefined), '—');
});

// ==================== projectFileName ====================

test('projectFileName：非法字符折叠、CJK 保留、-/. 放行语义', () => {
  assert.equal(projectFileName('我的 视频!@#$%'), '我的_视频_');
  // 旧函数原样迁移：连字符与点属于白名单（文件名片段分隔符），原样保留
  assert.equal(projectFileName('final-cut v2'), 'final-cut_v2');
  assert.equal(projectFileName('a.b-1_2'), 'a.b-1_2');
});

test('projectFileName：截断 48 字符与空兜底', () => {
  assert.equal(projectFileName('a'.repeat(60)).length, 48);
  assert.equal(projectFileName(''), 'clip');
  // 旧函数行为原样迁移：纯符号串折叠为下划线后仍为真值，不回退 'clip'
  assert.equal(projectFileName('!!!'), '_');
});