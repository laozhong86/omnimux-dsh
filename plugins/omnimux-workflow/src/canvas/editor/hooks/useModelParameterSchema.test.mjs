import test from 'node:test';
import assert from 'node:assert/strict';

const host = await import('../../../../dist/index.js');

test('IMAGE_MODEL_SPECS: GPT Image 2 只包含 auto, 1:1, 16:9, 9:16 画幅', () => {
  const gpt = host.IMAGE_MODEL_SPECS.find((m) => m.id === 'gpt-image-2');
  assert.ok(gpt);
  assert.ok(gpt.parameters);
  const ratioValues = gpt.parameters.aspectRatio?.options.map((o) => o.value);
  assert.deepEqual(ratioValues, ['auto', '1:1', '16:9', '9:16']);
  assert.equal(gpt.parameters.aspectRatio?.defaultValue, '16:9');
});

test('IMAGE_MODEL_SPECS: Seedream 5.0 Pro 包含丰富画幅 (4:3, 21:9 等)', () => {
  const seedream = host.IMAGE_MODEL_SPECS.find((m) => m.id === 'seedream-5.0-pro');
  assert.ok(seedream);
  assert.ok(seedream.parameters);
  const ratioValues = seedream.parameters.aspectRatio?.options.map((o) => o.value);
  assert.ok(ratioValues?.includes('4:3'));
  assert.ok(ratioValues?.includes('21:9'));
  assert.ok(ratioValues?.includes('16:9'));
});

test('VIDEO_MODEL_SPECS: Kling O3 支持 5s, 10s, 15s 时长及 4K 分辨率', () => {
  const klingO3 = host.VIDEO_MODEL_SPECS.find((m) => m.id === 'kling-o3');
  assert.ok(klingO3);
  assert.ok(klingO3.parameters);
  const durations = klingO3.parameters.duration?.options?.map((o) => o.value);
  assert.deepEqual(durations, [5, 10, 15]);
  const resolutions = klingO3.parameters.resolution?.options?.map((o) => o.value);
  assert.deepEqual(resolutions, ['1080P', '4K']);
  assert.equal(klingO3.parameters.sound?.supported, true);
});

test('VIDEO_MODEL_SPECS: Veo 3.1 默认时长 8s', () => {
  const veo = host.VIDEO_MODEL_SPECS.find((m) => m.id === 'veo-3.1');
  assert.ok(veo);
  assert.ok(veo.parameters);
  assert.equal(veo.parameters.duration?.defaultValue, 8);
});
