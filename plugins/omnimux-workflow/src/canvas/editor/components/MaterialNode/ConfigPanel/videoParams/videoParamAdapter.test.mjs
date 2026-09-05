/**
 * Unit tests for videoParamAdapter (Issue #467 / W2).
 *
 * Operation resolution is catalog-driven. Without a catalog the adapter still
 * scrubs aspect/duration/resolution/sound using canonical params.operation.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createCompatTestCatalog } from '../../../../../../shared/validation/compatTestCatalog.ts';
import {
  resolveEffectiveVideoParams,
  validateAndFallbackVideoParams,
  validateVideoParamsForUi,
} from './videoParamAdapter.ts';

const catalog = createCompatTestCatalog();

const klingSchema = {
  aspectRatio: {
    options: [
      { value: '16:9', label: '16:9' },
      { value: '9:16', label: '9:16' },
      { value: '1:1', label: '1:1' },
    ],
    defaultValue: '16:9',
  },
  resolution: {
    options: [
      { value: '1080P', label: '1080P' },
      { value: '4K', label: '4K' },
    ],
    defaultValue: '1080P',
  },
  duration: {
    options: [
      { value: 5, label: '5s' },
      { value: 10, label: '10s' },
    ],
    defaultValue: 10,
  },
  sound: { supported: true, defaultValue: true },
};

const veoSchema = {
  aspectRatio: {
    options: [
      { value: '16:9', label: '16:9' },
      { value: '9:16', label: '9:16' },
    ],
    defaultValue: '16:9',
  },
  duration: {
    options: [
      { value: 5, label: '5s' },
      { value: 8, label: '8s' },
    ],
    defaultValue: 8,
  },
};

const klingItem = { id: 'vid-frames', label: 'vid-frames', parameters: klingSchema };
const veoItem = { id: 'vid-frames', label: 'vid-frames', parameters: veoSchema };

describe('videoParamAdapter - resolveEffectiveVideoParams (W2)', () => {
  it('catalog + no media → operation set; schema fields scrubbed', () => {
    const result = resolveEffectiveVideoParams({
      params: { model: 'vid-frames', operation: 'video_multi_ref', aspectRatio: '9:16', duration: 10, sound: true },
      schema: klingSchema,
      modelItem: klingItem,
      catalog,
      upstreams: [],
      prompt: 'hi',
    });
    assert.equal(result.model, 'vid-frames');
    assert.equal(typeof result.operation, 'string');
    assert.ok(result.operation.length > 0);
    // Kernel treats min-unsatisfied as accepts+pending, so multiple listed video
    // ops may still be effective with empty media — mode UI follows count.
    assert.ok(result.effectiveOperations.length >= 1);
    assert.equal(result.showModeUi, result.effectiveOperations.length >= 2);
    assert.equal(result.aspectRatio, '9:16');
    assert.equal(result.duration, 10);
    assert.equal(result.sound, true);
    assert.equal(result.hasSoundSupport, true);
  });

  it('canonical operation remains selected when effective', () => {
    const result = resolveEffectiveVideoParams({
      params: { model: 'vid-frames', operation: 'first_last_frame', aspectRatio: '16:9' },
      schema: klingSchema,
      modelItem: klingItem,
      catalog,
      upstreams: [],
    });
    // Preferred first_last_frame stays selected when still effective (accepts with pending min).
    assert.equal(result.operation, 'first_last_frame');
    assert.equal(typeof result.operationLabel, 'string');
  });

  it('schema scrubbing: unsupported aspect/duration fall back to defaults', () => {
    const result = resolveEffectiveVideoParams({
      params: { model: 'vid-frames', aspectRatio: 'bogus', duration: 99, resolution: '8K' },
      schema: klingSchema,
      modelItem: klingItem,
      catalog,
    });
    assert.equal(result.aspectRatio, '16:9');
    assert.equal(result.duration, 10);
    assert.equal(result.resolution, '1080P');
  });

  it('no catalog → still returns shape; operation may be empty; block via showModeUi false', () => {
    const result = resolveEffectiveVideoParams({
      params: { model: 'x', aspectRatio: '16:9', duration: 5 },
      schema: veoSchema,
      modelItem: veoItem,
      catalog: null,
    });
    assert.equal(result.showModeUi, false);
    assert.equal(result.effectiveOperations.length, 0);
    assert.equal(result.hasSoundSupport, false);
    assert.equal(result.sound, false);
  });
});

describe('videoParamAdapter - validateAndFallbackVideoParams (W2)', () => {
  it('keeps canonical params.operation when changing model', () => {
    const next = validateAndFallbackVideoParams(
      { model: 'old', operation: 'text_to_video', aspectRatio: '9:16', duration: 10, sound: true, resolution: '4K' },
      klingItem,
      { catalog, upstreams: [], prompt: '' },
    );
    assert.equal(next.model, 'vid-frames');
    assert.equal(typeof next.operation, 'string');
    assert.ok(next.operation.length > 0);
    assert.equal(next.aspectRatio, '9:16');
    assert.equal(next.resolution, '4K');
    assert.equal(next.sound, true);
  });

  it('target schema without resolution/sound keeps dormant values for a reversible switch', () => {
    const next = validateAndFallbackVideoParams(
      { model: 'vid-frames', operation: 'text_to_video', aspectRatio: '16:9', duration: 5, resolution: '4K', sound: true },
      veoItem,
      { catalog },
    );
    assert.equal(next.resolution, '4K');
    assert.equal(next.sound, true);
    assert.equal(next.duration, 5);
  });

  it('explicit nextOperationId is migrated onto params.operation', () => {
    const next = validateAndFallbackVideoParams(
      { model: 'vid-frames' },
      klingItem,
      { catalog, nextOperationId: 'text_to_video' },
    );
    assert.equal(next.operation, 'text_to_video');
  });


});

describe('videoParamAdapter - immediate combined-duration validation', () => {
  const params = {
    model: 'wan-3.0',
    operation: 'video_multi_ref',
    operationLabel: '全能参考生视频',
    effectiveOperations: [
      {
        id: 'video_multi_ref',
        label: '全能参考生视频',
        slots: [
          {
            slot: 'reference_videos',
            type: 'video',
            role: 'reference',
            source: 'upstream_edge',
            min: 1,
            max: 5,
            combinedOutputMaxDurationSec: 30,
          },
        ],
        bindings: [
          {
            edgeId: 'edge-video',
            sourceNodeId: 'video-1',
            slot: 'reference_videos',
            role: 'reference',
            type: 'video',
          },
        ],
        effective: true,
        ready: true,
      },
    ],
    showModeUi: false,
    schema: {},
    aspectRatio: '16:9',
    duration: 15,
    sound: true,
    hasSoundSupport: true,
  };

  it('accepts a 15s reference plus 15s output', () => {
    assert.deepEqual(validateVideoParamsForUi({
      params,
      upstreams: [{ nodeId: 'video-1', edgeId: 'edge-video', materialType: 'video', durationSec: 15 }],
    }), []);
  });

  it('blocks a 16s reference plus 15s output', () => {
    assert.deepEqual(validateVideoParamsForUi({
      params,
      upstreams: [{ nodeId: 'video-1', edgeId: 'edge-video', materialType: 'video', durationSec: 16 }],
    }), ['参考视频与输出时长合计不能超过 30 秒']);
  });
});

describe('videoParamAdapter - document URL validation', () => {
  const baseParams = {
    model: 'wan-3.0',
    operation: 'document_to_video',
    operationLabel: '文档参考生视频',
    effectiveOperations: [{
      id: 'document_to_video',
      label: '文档参考生视频',
      slots: [{
        slot: 'file_url',
        type: 'document',
        role: 'document',
        source: 'node_field',
        min: 1,
        max: 1,
        allowedMimes: ['application/pdf', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
      }],
      bindings: [],
      effective: true,
      ready: true,
    }],
    showModeUi: true,
    schema: {},
    aspectRatio: '16:9',
    duration: 5,
    sound: true,
    hasSoundSupport: true,
  };

  it('accepts a documented file extension and preserves signed query parameters', () => {
    assert.deepEqual(validateVideoParamsForUi({
      params: { ...baseParams, fileUrl: 'https://cdn.example.com/deck.pptx?signature=fixed' },
    }), []);
  });

  it('blocks a document extension outside the contract MIME list', () => {
    assert.deepEqual(validateVideoParamsForUi({
      params: { ...baseParams, fileUrl: 'https://cdn.example.com/archive.zip' },
    }), ['文档格式不在当前模型支持列表']);
  });
});
