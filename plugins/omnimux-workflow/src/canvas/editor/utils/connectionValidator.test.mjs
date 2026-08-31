/**
 * Phase 2: Two-Stage Connection Validator Tests
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateConnection,
  validateConnectionDetailed,
  validateDynamicModelCapacity,
  rejectReasonKey,
} from './connectionValidator.ts';
import zh from '../../i18n/dict.zh.ts';
import en from '../../i18n/dict.en.ts';

function createMaterialNode(id, materialType, tool, model) {
  return {
    id,
    type: 'material',
    data: {
      label: `Node ${id}`,
      materialType,
      selectedTool: tool,
      nodeKind: 'generate',
      params: model ? { model } : {},
    },
  };
}

test('目标 model=gpt-image-2(max1) 已有1张图，再加1条连边 → capacity_exceeded', () => {
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'gpt-image-2');
  const img1 = createMaterialNode('img1', 'image', 'text-to-image');
  const img2 = createMaterialNode('img2', 'image', 'text-to-image');

  const nodes = [targetNode, img1, img2];
  const edges = [
    { id: 'e1', source: 'img1', target: 'target' },
  ];

  // Adding 2nd image connection to target (which allows max 1 reference image)
  const connection = { source: 'img2', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges);

  assert.equal(detail.valid, false);
  assert.equal(detail.blockedBy, 'model-capability');
  assert.equal(detail.reasonCode, 'capacity_exceeded');
  assert.equal(detail.meta?.modelId, 'gpt-image-2');
  assert.equal(detail.meta?.maxAllowed, 1);
  assert.equal(detail.meta?.currentCount, 2);

  // validateConnection boolean check
  assert.equal(validateConnection(connection, nodes, edges), false);
});

test('目标 model=nanobanana-2(max4) 第5条连边 → capacity_exceeded', () => {
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'nanobanana-2');
  const images = Array.from({ length: 5 }, (_, i) =>
    createMaterialNode(`img${i + 1}`, 'image', 'text-to-image')
  );

  const nodes = [targetNode, ...images];
  const edges = [
    { id: 'e1', source: 'img1', target: 'target' },
    { id: 'e2', source: 'img2', target: 'target' },
    { id: 'e3', source: 'img3', target: 'target' },
    { id: 'e4', source: 'img4', target: 'target' },
  ];

  // 4 existing images + 1 new = 5 images (> max 4)
  const connection = { source: 'img5', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges);

  assert.equal(detail.valid, false);
  assert.equal(detail.blockedBy, 'model-capability');
  assert.equal(detail.reasonCode, 'capacity_exceeded');
  assert.equal(detail.meta?.modelId, 'nanobanana-2');
  assert.equal(detail.meta?.maxAllowed, 4);
  assert.equal(detail.meta?.currentCount, 5);
});

test('视频节点连图片节点 → type_contract（Stage 1 仍生效）', () => {
  const targetNode = createMaterialNode('target', 'image', 'text-to-image', 'gpt-image-2');
  const videoNode = createMaterialNode('video1', 'video', 'video-generation');

  const nodes = [targetNode, videoNode];
  const edges = [];

  const connection = { source: 'video1', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges);

  assert.equal(detail.valid, false);
  assert.equal(detail.blockedBy, 'type-contract');
  assert.equal(detail.reasonCode, 'type_contract');
});

test('未知模型 / 无能力定义模型：放行连线（宽松回退）', () => {
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'unknown-model-xyz');
  const img1 = createMaterialNode('img1', 'image', 'text-to-image');
  const img2 = createMaterialNode('img2', 'image', 'text-to-image');

  const nodes = [targetNode, img1, img2];
  const edges = [
    { id: 'e1', source: 'img1', target: 'target' },
  ];

  const connection = { source: 'img2', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges);

  assert.equal(detail.valid, true);
  assert.equal(validateConnection(connection, nodes, edges), true);
});

test('rejectReasonKey：新增 capacity_exceeded 与 model_incompatible 在双语字典中均可取到', () => {
  assert.equal(rejectReasonKey('capacity_exceeded'), 'edge.reject.capacityExceeded');
  assert.equal(rejectReasonKey('model_incompatible'), 'edge.reject.modelIncompatible');

  const zhKeys = ['capacity_exceeded', 'model_incompatible', 'type_contract', 'cycle', 'self_connection', 'duplicate_edge', 'missing_node'];
  for (const code of zhKeys) {
    const key = rejectReasonKey(code);
    assert.ok(zh[key], `zh dictionary must contain ${key}`);
    assert.ok(en[key], `en dictionary must contain ${key}`);
  }
});
