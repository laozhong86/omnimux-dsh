/**
 * Phase 2: Model Compatibility Evaluator Unit Tests
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateModelCompatibility,
  resolveModelInputCapability,
  BUILTIN_MODEL_CAPABILITIES,
} from './modelCompatibilityEvaluator.ts';

test('单图模型(max1) + 2张图 → disabled', () => {
  const modelCap = {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 1 },
  };
  const upstreams = [
    { type: 'image' },
    { type: 'image' },
  ];
  const result = evaluateModelCompatibility('gpt-image-2', modelCap, upstreams);

  assert.equal(result.level, 'disabled');
  assert.equal(result.reasons.length, 1);
  assert.match(result.reasons[0], /超出模型最大参考图数量/);
  assert.match(result.reasons[0], /1/);
  assert.ok(result.adaptationAdvice);
  assert.match(result.adaptationAdvice, /截取前 1 张或更换模型/);
});

test('多图模型(max4) + 2张图 → available', () => {
  const modelCap = {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 4 },
  };
  const upstreams = [
    { type: 'image' },
    { type: 'image' },
  ];
  const result = evaluateModelCompatibility('nanobanana-2', modelCap, upstreams);

  assert.equal(result.level, 'available');
  assert.deepEqual(result.reasons, []);
  assert.equal(result.adaptationAdvice, undefined);
});

test('超限量(max8) + 9张图 → disabled', () => {
  const modelCap = {
    modalities: ['text', 'image'],
    referenceImages: { min: 0, max: 8 },
  };
  const upstreams = Array.from({ length: 9 }, () => ({ type: 'image' }));
  const result = evaluateModelCompatibility('seedream-5.0-pro', modelCap, upstreams);

  assert.equal(result.level, 'disabled');
  assert.equal(result.reasons.length, 1);
  assert.match(result.reasons[0], /超出模型最大参考图数量/);
  assert.match(result.reasons[0], /8/);
  assert.ok(result.adaptationAdvice);
});

test('未知模型 / 无 inputCapability → available（宽松回退，绝不误杀）', () => {
  const upstreams = [
    { type: 'image' },
    { type: 'image' },
    { type: 'video' },
  ];
  const result = evaluateModelCompatibility('custom-unknown-model', undefined, upstreams);

  assert.equal(result.level, 'available');
  assert.deepEqual(result.reasons, []);
});

test('推荐配额 (min, max] 且 min > 0 → degraded', () => {
  const modelCap = {
    modalities: ['text', 'image'],
    referenceImages: { min: 1, max: 4 },
  };
  const upstreams = [
    { type: 'image' },
    { type: 'image' },
  ];
  const result = evaluateModelCompatibility('custom-model', modelCap, upstreams);

  assert.equal(result.level, 'degraded');
  assert.equal(result.reasons.length, 1);
  assert.match(result.reasons[0], /超出推荐配额/);
  assert.ok(result.adaptationAdvice);
  assert.match(result.adaptationAdvice, /按前 4 张处理/);
});

test('max === 0 且存在非 text 上游 → disabled（不支持参考素材）', () => {
  const modelCap = {
    modalities: ['text'],
  };
  const upstreams = [
    { type: 'image' },
  ];
  const result = evaluateModelCompatibility('claude-opus-5', modelCap, upstreams);

  assert.equal(result.level, 'disabled');
  assert.equal(result.reasons.length, 1);
  assert.match(result.reasons[0], /该模型不支持参考素材/);
});

test('视频参考容量校验：超出 max -> disabled', () => {
  const modelCap = {
    modalities: ['text', 'image', 'video'],
    referenceVideos: { min: 0, max: 1 },
  };
  const upstreams = [
    { type: 'video' },
    { type: 'video' },
  ];
  const result = evaluateModelCompatibility('gemini-3.7-flash', modelCap, upstreams);

  assert.equal(result.level, 'disabled');
  assert.match(result.reasons[0], /超出模型最大参考视频数量/);
});

test('音频参考容量校验：超出 max -> disabled', () => {
  const modelCap = {
    modalities: ['text', 'image', 'audio'],
    referenceAudios: { min: 0, max: 1 },
  };
  const upstreams = [
    { type: 'audio' },
    { type: 'audio' },
  ];
  const result = evaluateModelCompatibility('kling-avatar', modelCap, upstreams);

  assert.equal(result.level, 'disabled');
  assert.match(result.reasons[0], /超出模型最大参考音频数量/);
});

test('resolveModelInputCapability: 支持从 catalog 和 BUILTIN 表解析', () => {
  // Builtin
  const gptImageCap = resolveModelInputCapability('gpt-image-2');
  assert.ok(gptImageCap);
  assert.equal(gptImageCap.referenceImages.max, 1);

  const bananaCap = resolveModelInputCapability('nanobanana-2');
  assert.ok(bananaCap);
  assert.equal(bananaCap.referenceImages.max, 4);

  // Catalog override
  const customCatalog = {
    image: [
      { id: 'custom-image', inputCapability: { modalities: ['text', 'image'], referenceImages: { min: 0, max: 6 } } },
    ],
  };
  const customCap = resolveModelInputCapability('custom-image', customCatalog);
  assert.ok(customCap);
  assert.equal(customCap.referenceImages.max, 6);

  // Unknown
  const unknown = resolveModelInputCapability('unknown-xyz-999');
  assert.equal(unknown, undefined);
});
