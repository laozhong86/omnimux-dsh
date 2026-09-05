/**
 * Phase 2 + Issue #466: Two-Stage Connection Validator tests.
 *
 * Stage 2 is contract-driven now: a connection is valid iff at least one
 * LISTED operation in the catalog absorbs the simulated upstream fingerprint.
 * Unknown models / missing catalog / zero candidates fail closed.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateConnection,
  validateConnectionDetailed,
  validateDynamicModelCapacity,
  rejectReasonKey,
} from './connectionValidator.ts';
import { createCompatTestCatalog } from '../../../shared/validation/compatTestCatalog.ts';
import zh from '../../i18n/dict.zh.ts';
import en from '../../i18n/dict.en.ts';

const MB = 1024 * 1024;

function createMaterialNode(id, materialType, tool, model, extraData = {}) {
  return {
    id,
    type: 'material',
    data: {
      label: `Node ${id}`,
      materialType,
      selectedTool: tool,
      nodeKind: 'generate',
      params: model ? { model } : {},
      ...extraData,
    },
  };
}

function createImportNode(id, materialType, extraData = {}) {
  return {
    id,
    type: 'material',
    data: {
      label: `Node ${id}`,
      materialType,
      selectedTool: 'import',
      nodeKind: 'import',
      mimeType: 'image/png',
      fileSize: 1 * MB,
      ...extraData,
    },
  };
}

test('目标 model=img-hd(max1) 已有1张图：当前模型超限但 img-ref(max2) 可吸收 → 连线有效', () => {
  const catalog = createCompatTestCatalog();
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'img-hd');
  const img1 = createImportNode('img1', 'image');
  const img2 = createImportNode('img2', 'image');

  const nodes = [targetNode, img1, img2];
  const edges = [
    { id: 'e1', source: 'img1', target: 'target' },
  ];

  // 能连上 ⟺ 目录中至少一个 listed operation 能吸收（img-hd 不行，img-ref 行）。
  const connection = { source: 'img2', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges, catalog);

  assert.equal(detail.valid, true);
  assert.equal(validateConnection(connection, nodes, edges, catalog), true);
});

test('第5条连边（全目录最大 max4）→ slot_capacity', () => {
  const catalog = createCompatTestCatalog();
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'img-ref');
  const images = Array.from({ length: 5 }, (_, i) => createImportNode(`img${i + 1}`, 'image'));

  const nodes = [targetNode, ...images];
  const edges = [
    { id: 'e1', source: 'img1', target: 'target' },
    { id: 'e2', source: 'img2', target: 'target' },
    { id: 'e3', source: 'img3', target: 'target' },
    { id: 'e4', source: 'img4', target: 'target' },
  ];

  const connection = { source: 'img5', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges, catalog);

  assert.equal(detail.valid, false);
  assert.equal(detail.blockedBy, 'model-capability');
  assert.equal(detail.reasonCode, 'slot_capacity');
});

test('视频节点连图片节点 → type_contract（Stage 1 仍生效）', () => {
  const catalog = createCompatTestCatalog();
  const targetNode = createMaterialNode('target', 'image', 'text-to-image', 'img-ref');
  const videoNode = createImportNode('video1', 'video', { mimeType: 'video/mp4' });

  const nodes = [targetNode, videoNode];
  const edges = [];

  const connection = { source: 'video1', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges, catalog);

  assert.equal(detail.valid, false);
  assert.equal(detail.blockedBy, 'type-contract');
  assert.equal(detail.reasonCode, 'type_contract');
});

test('当前模型未知但目录中有兼容模型 → 连线有效（自动适配在 mutation 层切换）', () => {
  const catalog = createCompatTestCatalog();
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'unknown-model-xyz');
  const img1 = createImportNode('img1', 'image');

  const nodes = [targetNode, img1];
  const edges = [];

  const connection = { source: 'img1', target: 'target' };
  const detail = validateConnectionDetailed(connection, nodes, edges, catalog);
  assert.equal(detail.valid, true);
  assert.equal(validateConnection(connection, nodes, edges, catalog), true);
});

test('零候选（MIME 全面不允许）→ mime_unsupported（fail closed，不再宽松放行）', () => {
  const catalog = createCompatTestCatalog();
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'unknown-model-xyz');
  const gif = createImportNode('gif1', 'image', { mimeType: 'image/gif' });

  const nodes = [targetNode, gif];
  const detail = validateConnectionDetailed({ source: 'gif1', target: 'target' }, nodes, [], catalog);
  assert.equal(detail.valid, false);
  assert.equal(detail.reasonCode, 'mime_unsupported');
});

test('catalog 缺失 → catalog_unavailable（生成节点媒体连线 fail closed）', () => {
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'img-ref');
  const img1 = createImportNode('img1', 'image');

  const nodes = [targetNode, img1];
  const detail = validateConnectionDetailed({ source: 'img1', target: 'target' }, nodes, [], null);
  assert.equal(detail.valid, false);
  assert.equal(detail.reasonCode, 'catalog_unavailable');

  const withUndefined = validateConnectionDetailed({ source: 'img1', target: 'target' }, nodes, []);
  assert.equal(withUndefined.valid, false);
  assert.equal(withUndefined.reasonCode, 'catalog_unavailable');
});

test('纯文本上游不触发媒体硬闸（无 catalog 也可连）', () => {
  const targetNode = createMaterialNode('target', 'image', 'text-to-image', 'img-ref');
  const textNode = createMaterialNode('text1', 'text', 'text-editor');

  const nodes = [targetNode, textNode];
  const detail = validateConnectionDetailed({ source: 'text1', target: 'target' }, nodes, [], null);
  assert.equal(detail.valid, true);
});

test('体积超所有 slot 声明上限 → size_exceeded', () => {
  const catalog = createCompatTestCatalog();
  const targetNode = createMaterialNode('target', 'image', 'image-to-image', 'img-ref');
  const huge = createImportNode('huge1', 'image', { fileSize: 11 * MB });

  const nodes = [targetNode, huge];
  const detail = validateConnectionDetailed({ source: 'huge1', target: 'target' }, nodes, [], catalog);
  assert.equal(detail.valid, false);
  assert.equal(detail.reasonCode, 'size_exceeded');
});

test('rejectReasonKey：全部 typed code 在双语字典中可取到', () => {
  assert.equal(rejectReasonKey('slot_capacity'), 'edge.reject.capacityExceeded');
  assert.equal(rejectReasonKey('model_incompatible'), 'edge.reject.modelIncompatible');
  assert.equal(rejectReasonKey('mime_unsupported'), 'edge.reject.mimeUnsupported');
  assert.equal(rejectReasonKey('catalog_unavailable'), 'edge.reject.catalogUnavailable');

  const codes = [
    'capacity_exceeded', 'slot_capacity', 'model_incompatible', 'mime_unsupported',
    'size_exceeded', 'duration_exceeded', 'role_conflict', 'no_compatible_model',
    'unknown_model', 'contract_missing', 'catalog_unavailable', 'operation_incompatible',
    'min_unsatisfied', 'prompt_required',
    'type_contract', 'cycle', 'self_connection', 'duplicate_edge', 'missing_node',
  ];
  for (const code of codes) {
    const key = rejectReasonKey(code);
    assert.ok(zh[key], `zh dictionary must contain ${key} (code=${code})`);
    assert.ok(en[key], `en dictionary must contain ${key} (code=${code})`);
  }
});

test('validateDynamicModelCapacity：import 目标节点不触发校验', () => {
  const targetNode = createImportNode('target', 'image');
  const img1 = createImportNode('img1', 'image');
  const detail = validateDynamicModelCapacity(
    { source: 'img1', target: 'target' },
    [targetNode, img1],
    [],
    null,
  );
  assert.equal(detail.valid, true);
});
