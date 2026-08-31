/**
 * Issue #314: canvas catalog rows sort by display name (A–Z).
 * Issue #332: Material node model whitelist governance for text and image models.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  MATERIAL_NODE_WHITELIST,
  NODE_MODEL_WHITELIST,
} from '../../../../shared/graph/materialNode.ts';
import { sortCatalogRows } from '../../../../shared/sortCatalog.ts';

const here = dirname(fileURLToPath(import.meta.url));

test('sortCatalogRows：按 label A–Z，numeric collation，不改原数组', () => {
  const rows = [
    { id: 'b', label: 'Seedance 2.0' },
    { id: 'a', label: 'Claude Opus 4.6' },
    { id: 'c', label: 'Seedance 10' },
  ];
  const snapshot = rows.map((row) => row.id);
  assert.deepEqual(
    sortCatalogRows(rows).map((row) => row.label),
    ['Claude Opus 4.6', 'Seedance 2.0', 'Seedance 10'],
  );
  assert.deepEqual(rows.map((row) => row.id), snapshot);
  assert.deepEqual(sortCatalogRows([]), []);
  assert.deepEqual(sortCatalogRows(null), []);
});

test('MATERIAL_NODE_WHITELIST & NODE_MODEL_WHITELIST 白名单定义完整性', () => {
  assert.equal(NODE_MODEL_WHITELIST, MATERIAL_NODE_WHITELIST);

  // 文本模型白名单
  assert.deepEqual(MATERIAL_NODE_WHITELIST.text, [
    'gemini-3.7-flash',
    'claude-opus-4-6',
    'gpt-5.5',
    'gemini-3.1-pro-preview',
  ]);

  // 图片模型白名单
  assert.deepEqual(MATERIAL_NODE_WHITELIST.image, [
    'nanobanana-2',
    'nano_banana_2',
    'nanobanana-pro',
    'nano_banana_pro',
    'seedream-5.0-pro',
    'seedream-4.5',
    'midjourney-8.1',
    'midjourney-7',
    'midjourney-niji-7',
    'gpt-image-2',
  ]);

  // 非白名单模态隔离（未定义白名单）
  assert.equal(MATERIAL_NODE_WHITELIST.video, undefined);
  assert.equal(MATERIAL_NODE_WHITELIST.audio, undefined);
});

test('canvas/types/materialNode.ts 兼容层正确导出白名单常量', async () => {
  const typesExport = await import('../../../types/materialNode.ts');
  assert.equal(typesExport.MATERIAL_NODE_WHITELIST, MATERIAL_NODE_WHITELIST);
  assert.equal(typesExport.NODE_MODEL_WHITELIST, MATERIAL_NODE_WHITELIST);
});

// 模拟 ConfigPanel 内部的模型列表推导纯函数
function deriveModelOptions(catalog, materialType, params = {}) {
  const rawRows = catalog?.[materialType] ?? [];
  const whitelist = MATERIAL_NODE_WHITELIST[materialType];
  const filteredRows = whitelist
    ? rawRows.filter((row) => whitelist.includes(row.id))
    : rawRows;
  const rows = sortCatalogRows(filteredRows);
  const savedModel = typeof params.model === 'string' ? params.model.trim() : '';
  const orphan = savedModel && !rows.some((row) => row.id === savedModel)
    ? [{
        id: savedModel,
        label: rawRows.find((r) => r.id === savedModel)?.label ?? savedModel,
        deprecated: true,
      }]
    : [];
  const combined = [...orphan, ...rows.map((row) => ({ ...row, deprecated: false }))];
  return combined.map((row) => ({
    value: row.id,
    label: row.deprecated ? `${row.label} (deprecated)` : row.label,
    deprecated: row.deprecated,
  }));
}

// 模拟 ConfigPanel 内部的 modelValue 默认值推导纯函数
function deriveModelValue(catalog, materialType, params = {}, modelOptions = []) {
  if (typeof params.model === 'string' && params.model.trim()) return params.model;
  const defaultId = catalog?.defaults?.[materialType];
  if (typeof defaultId === 'string' && defaultId.trim()) {
    if (modelOptions.some((row) => row.value === defaultId)) return defaultId;
  }
  const whitelist = MATERIAL_NODE_WHITELIST[materialType];
  const firstWhitelisted = whitelist?.find((id) => modelOptions.some((row) => row.value === id));
  if (firstWhitelisted) return firstWhitelisted;
  return modelOptions[0]?.value;
}

test('文本模型白名单过滤与 A-Z 排序', () => {
  const catalog = {
    text: [
      { id: 'gpt-4o', label: 'GPT-4o' }, // 非白名单
      { id: 'gemini-3.7-flash', label: 'Gemini 3.7 Flash' },
      { id: 'claude-opus-4-6', label: 'Claude Opus 4.6' },
      { id: 'gpt-5.5', label: 'GPT 5.5' },
      { id: 'deepseek-v3', label: 'DeepSeek V3' }, // 非白名单
      { id: 'gemini-3.1-pro-preview', label: 'Gemini 3.1 Pro Preview' },
    ],
  };

  const options = deriveModelOptions(catalog, 'text');
  // 过滤后仅保留白名单 4 项，并按 label A-Z 排序
  assert.deepEqual(
    options.map((o) => o.value),
    ['claude-opus-4-6', 'gemini-3.1-pro-preview', 'gemini-3.7-flash', 'gpt-5.5'],
  );
  assert.deepEqual(
    options.map((o) => o.label),
    ['Claude Opus 4.6', 'Gemini 3.1 Pro Preview', 'Gemini 3.7 Flash', 'GPT 5.5'],
  );
  assert.ok(options.every((o) => !o.deprecated));
});

test('图片模型白名单过滤与 A-Z 排序（不在白名单/不在中枢的模型自动忽略）', () => {
  const catalog = {
    image: [
      { id: 'dall-e-3', label: 'DALL-E 3' }, // 非白名单
      { id: 'nanobanana-2', label: 'NanoBanana 2' },
      { id: 'seedream-5.0-pro', label: 'Seedream 5.0 Pro' },
      { id: 'midjourney-8.1', label: 'Midjourney 8.1' },
      { id: 'midjourney-7', label: 'Midjourney 7' },
      { id: 'gpt-image-2', label: 'GPT Image 2' },
      { id: 'stable-diffusion-xl', label: 'SDXL' }, // 非白名单
      { id: 'seedream-4.5', label: 'Seedream 4.5' },
      // midjourney-8.2 未在中枢目录中，自然不存在
    ],
  };

  const options = deriveModelOptions(catalog, 'image');
  // 过滤后仅保留白名单内的 6 项，非白名单剔除，按 label A-Z 排序
  assert.deepEqual(
    options.map((o) => o.value),
    [
      'gpt-image-2',
      'midjourney-7',
      'midjourney-8.1',
      'nanobanana-2',
      'seedream-4.5',
      'seedream-5.0-pro',
    ],
  );
  assert.ok(options.every((o) => !o.deprecated));
});

test('存量已保存模型（params.model）不在白名单内时保留为 deprecated 孤儿项', () => {
  const catalog = {
    image: [
      { id: 'nanobanana-2', label: 'NanoBanana 2' },
      { id: 'seedream-5.0-pro', label: 'Seedream 5.0 Pro' },
      { id: 'midjourney-6', label: 'Midjourney 6' }, // 中枢有但不在白名单
    ],
  };

  // 1. 中枢存在但被白名单过滤的模型
  const options1 = deriveModelOptions(catalog, 'image', { model: 'midjourney-6' });
  assert.equal(options1[0].value, 'midjourney-6');
  assert.equal(options1[0].label, 'Midjourney 6 (deprecated)');
  assert.equal(options1[0].deprecated, true);
  assert.equal(options1.length, 3); // 1 孤儿 + 2 白名单

  // 2. 中枢完全不存在的历史老模型
  const options2 = deriveModelOptions(catalog, 'image', { model: 'legacy-unknown-model' });
  assert.equal(options2[0].value, 'legacy-unknown-model');
  assert.equal(options2[0].label, 'legacy-unknown-model (deprecated)');
  assert.equal(options2[0].deprecated, true);
  assert.equal(options2.length, 3);

  // 3. 已保存模型处于白名单内时不生成 deprecated 项
  const options3 = deriveModelOptions(catalog, 'image', { model: 'nanobanana-2' });
  assert.ok(options3.every((o) => !o.deprecated));
  assert.equal(options3.length, 2);
});

test('非白名单模态（video / audio）隔离：全量保留目录模型，不进行白名单过滤', () => {
  const catalog = {
    video: [
      { id: 'kling-o1', label: 'Kling O1' },
      { id: 'veo-3', label: 'Veo 3' },
      { id: 'wan-2.1', label: 'Wan 2.1' },
      { id: 'custom-video', label: 'Custom Video' },
    ],
    audio: [
      { id: 'eleven-multilingual', label: 'ElevenLabs' },
      { id: 'fish-speech', label: 'Fish Speech' },
    ],
  };

  const videoOptions = deriveModelOptions(catalog, 'video');
  assert.deepEqual(
    videoOptions.map((o) => o.value),
    ['custom-video', 'kling-o1', 'veo-3', 'wan-2.1'],
  );
  assert.ok(videoOptions.every((o) => !o.deprecated));

  const audioOptions = deriveModelOptions(catalog, 'audio');
  assert.deepEqual(
    audioOptions.map((o) => o.value),
    ['eleven-multilingual', 'fish-speech'],
  );
  assert.ok(audioOptions.every((o) => !o.deprecated));
});

test('modelValue 默认值优先级解析（优先已选 > catalog defaults > 白名单首项 > 排序首项）', () => {
  const catalog = {
    text: [
      { id: 'claude-opus-4-6', label: 'Claude Opus 4.6' },
      { id: 'gemini-3.7-flash', label: 'Gemini 3.7 Flash' },
      { id: 'gpt-5.5', label: 'GPT 5.5' },
    ],
    image: [
      { id: 'midjourney-8.1', label: 'Midjourney 8.1' },
      { id: 'nanobanana-2', label: 'NanoBanana 2' },
      { id: 'seedream-5.0-pro', label: 'Seedream 5.0 Pro' },
    ],
    video: [
      { id: 'wan-2.1', label: 'Wan 2.1' },
      { id: 'kling-o1', label: 'Kling O1' },
    ],
  };

  const textOptions = deriveModelOptions(catalog, 'text');
  const imageOptions = deriveModelOptions(catalog, 'image');
  const videoOptions = deriveModelOptions(catalog, 'video');

  // 1. 优先已选（即使是不在白名单的模型）
  assert.equal(
    deriveModelValue(catalog, 'text', { model: 'gpt-4o' }, textOptions),
    'gpt-4o',
  );

  // 2. catalog defaults 命中可用模型时优先
  const catalogWithDefaults = {
    ...catalog,
    defaults: { text: 'gpt-5.5', image: 'seedream-5.0-pro' },
  };
  assert.equal(
    deriveModelValue(catalogWithDefaults, 'text', {}, textOptions),
    'gpt-5.5',
  );
  assert.equal(
    deriveModelValue(catalogWithDefaults, 'image', {}, imageOptions),
    'seedream-5.0-pro',
  );

  // 3. 无 defaults 或 default 不在可用列表中时，命中白名单首项（文本默认 gemini-3.7-flash，图片默认 nanobanana-2）
  assert.equal(
    deriveModelValue(catalog, 'text', {}, textOptions),
    'gemini-3.7-flash',
  );
  assert.equal(
    deriveModelValue(catalog, 'image', {}, imageOptions),
    'nanobanana-2',
  );

  // 4. 白名单首项不存在但白名单别名/次项存在时，命中白名单首个可用项
  const catalogWithNanoAlias = {
    image: [
      { id: 'nano_banana_2', label: 'Nano Banana 2' },
      { id: 'midjourney-8.1', label: 'Midjourney 8.1' },
    ],
  };
  const imageAliasOptions = deriveModelOptions(catalogWithNanoAlias, 'image');
  assert.equal(
    deriveModelValue(catalogWithNanoAlias, 'image', {}, imageAliasOptions),
    'nano_banana_2',
  );

  // 5. 无白名单定义的模态（如 video）回退至排序首项
  assert.equal(
    deriveModelValue(catalog, 'video', {}, videoOptions),
    'kling-o1', // 按 A-Z kling-o1 排序在 wan-2.1 之前
  );
});

test('ConfigPanel 源码契约：消费 MATERIAL_NODE_WHITELIST 与 sortCatalogRows，正确管理 deprecated', () => {
  const src = readFileSync(join(here, 'ConfigPanel/index.tsx'), 'utf8');
  assert.match(src, /MATERIAL_NODE_WHITELIST/);
  assert.match(src, /sortCatalogRows/);
  assert.doesNotMatch(src, /orderTextModels/);
  assert.doesNotMatch(src, /nanobanana-2/);
  assert.doesNotMatch(src, /kling-o1/);
  assert.match(src, /defaults\?\.\[materialType\]/);
  assert.match(src, /deprecated/);
});

test('harness mock catalog 文本模型按 label A–Z', () => {
  const src = readFileSync(join(here, '../../../harness/harness.tsx'), 'utf8');
  const textBlock = src.slice(src.indexOf('text: ['), src.indexOf('image: ['));
  const labels = [...textBlock.matchAll(/label:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.deepEqual(labels, [...labels].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })));
});

test('seam capabilities 走 modelCatalog.list，不再引用 TEXT_MODEL_ORDER / SPECS', () => {
  const seamSrc = readFileSync(
    join(here, '../../../../workflow/seam/omnimuxGateway.ts'),
    'utf8',
  );
  assert.match(seamSrc, /modelCatalog/);
  assert.match(seamSrc, /\.list\(/);
  assert.doesNotMatch(seamSrc, /TEXT_MODEL_ORDER/);
  assert.doesNotMatch(seamSrc, /IMAGE_MODEL_SPECS/);
  assert.doesNotMatch(seamSrc, /VIDEO_MODEL_SPECS/);
});
