/**
 * W1 节点视觉纯逻辑测试（计划 §8）：反缩放公式 + GSC 状态映射 +
 * MediaPreview URL 解析。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inverseScaleForZoom, isConfigPanelVisible, mapNodeToGenerationStatus } from './nodeVisualMath.ts';
import { resolveMediaPreviewUrl } from './mediaUrl.ts';

test('反缩放公式：zoom=1 → 1，zoom=0.5 → 2，zoom=2 → 0.5', () => {
  assert.equal(inverseScaleForZoom(1), 1);
  assert.equal(inverseScaleForZoom(0.5), 2);
  assert.equal(inverseScaleForZoom(2), 0.5);
  assert.equal(inverseScaleForZoom(0.25), 4);
});

test('反缩放公式：非法 zoom 回退 1（不产出 Infinity/NaN）', () => {
  assert.equal(inverseScaleForZoom(0), 1);
  assert.equal(inverseScaleForZoom(-1), 1);
});

test('GSC 映射：executionStatus（SSE）优先', () => {
  assert.equal(mapNodeToGenerationStatus('running', 'completed', true), 'generating');
  assert.equal(mapNodeToGenerationStatus('error', undefined, true), 'failed');
  assert.equal(mapNodeToGenerationStatus('completed', undefined, false), 'completed');
});

test('GSC 映射：回退本地 status', () => {
  assert.equal(mapNodeToGenerationStatus(undefined, 'generating', false), 'generating');
  assert.equal(mapNodeToGenerationStatus(undefined, 'failed', false), 'failed');
  assert.equal(mapNodeToGenerationStatus(undefined, 'completed', false), 'completed');
});

test('GSC 映射：无执行态有媒体 → completed；空态 → null', () => {
  assert.equal(mapNodeToGenerationStatus(undefined, 'ready', true), 'completed');
  assert.equal(mapNodeToGenerationStatus(undefined, 'empty', false), null);
  assert.equal(mapNodeToGenerationStatus(undefined, undefined, false), null);
});

test('GSC 映射：pending/skipped 不算生成中，按媒体与本地态落', () => {
  assert.equal(mapNodeToGenerationStatus('pending', 'empty', false), null);
  assert.equal(mapNodeToGenerationStatus('skipped', 'ready', true), 'completed');
});

test('panelVisible 语义（W2）：选中 且 未收起 且 非执行中', () => {
  // 展开：选中 + 未收起 + 无执行态
  assert.equal(isConfigPanelVisible(true, false, undefined), true);
  // 未选中 → 不展开
  assert.equal(isConfigPanelVisible(false, false, undefined), false);
  assert.equal(isConfigPanelVisible(undefined, false, undefined), false);
  // 本次选中周期内已收起 → 不展开
  assert.equal(isConfigPanelVisible(true, true, undefined), false);
  // 执行中（SSE running）→ 不展开
  assert.equal(isConfigPanelVisible(true, false, 'running'), false);
  // 其他执行态不阻塞面板
  assert.equal(isConfigPanelVisible(true, false, 'completed'), true);
  assert.equal(isConfigPanelVisible(true, false, 'error'), true);
  assert.equal(isConfigPanelVisible(true, false, 'pending'), true);
  // 生成节点显式 kind 不改变既有语义
  assert.equal(isConfigPanelVisible(true, false, undefined, 'generate'), true);
});

test('panelVisible：导入节点永不展开配置底栏', () => {
  assert.equal(isConfigPanelVisible(true, false, undefined, 'import'), false);
  assert.equal(isConfigPanelVisible(true, false, 'completed', 'import'), false);
  assert.equal(isConfigPanelVisible(true, false, 'pending', 'import'), false);
  assert.equal(isConfigPanelVisible(true, true, undefined, 'import'), false);
});

test('MediaPreview URL：mediaAssets 匹配类型优先，回退首条，再回退 mediaUrl', () => {
  assert.equal(
    resolveMediaPreviewUrl('video', [{ type: 'image', url: 'a.png' }, { type: 'video', url: 'b.mp4' }], 'c.mp4'),
    'b.mp4',
  );
  assert.equal(resolveMediaPreviewUrl('video', [{ type: 'image', url: 'a.png' }], undefined), 'a.png');
  assert.equal(resolveMediaPreviewUrl('image', undefined, 'fallback.png'), 'fallback.png');
  assert.equal(resolveMediaPreviewUrl('audio', [], undefined), undefined);
  assert.equal(resolveMediaPreviewUrl('audio', [{ type: 'audio' }], undefined), undefined);
});
