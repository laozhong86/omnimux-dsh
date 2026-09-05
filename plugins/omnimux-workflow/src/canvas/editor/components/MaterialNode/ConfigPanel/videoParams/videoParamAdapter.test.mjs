/**
 * Unit tests for videoParamAdapter (Issue #467 / W2).
 *
 * Operation resolution is catalog-driven. Without a catalog the adapter still
 * scrubs aspect/duration/resolution/sound and migrates legacy generationMode
 * onto params.operation via migrateParamsOperation.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createCompatTestCatalog } from '../../../../../../shared/validation/compatTestCatalog.ts';
import {
  resolveEffectiveVideoParams,
  validateAndFallbackVideoParams,
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
      params: { model: 'vid-frames', generationMode: 'reference', aspectRatio: '9:16', duration: 10, sound: true },
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

  it('legacy generationMode is read but EffectiveVideoParams exposes operation', () => {
    const result = resolveEffectiveVideoParams({
      params: { model: 'vid-frames', generationMode: 'first_last_frame', aspectRatio: '16:9' },
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
  it('strips generationMode and writes params.operation', () => {
    const next = validateAndFallbackVideoParams(
      { model: 'old', generationMode: 'reference', aspectRatio: '9:16', duration: 10, sound: true, resolution: '4K' },
      klingItem,
      { catalog, upstreams: [], prompt: '' },
    );
    assert.equal(next.model, 'vid-frames');
    assert.equal('generationMode' in next, false);
    assert.equal(typeof next.operation, 'string');
    assert.ok(next.operation.length > 0);
    assert.equal(next.aspectRatio, '9:16');
    assert.equal(next.resolution, '4K');
    assert.equal(next.sound, true);
  });

  it('target schema without resolution/sound deletes those fields', () => {
    const next = validateAndFallbackVideoParams(
      { model: 'vid-frames', operation: 'text_to_video', aspectRatio: '16:9', duration: 5, resolution: '4K', sound: true },
      veoItem,
      { catalog },
    );
    assert.equal('resolution' in next, false);
    assert.equal('sound' in next, false);
    assert.equal(next.duration, 5);
  });

  it('explicit nextOperationId is migrated onto params.operation', () => {
    const next = validateAndFallbackVideoParams(
      { model: 'vid-frames' },
      klingItem,
      { catalog, nextOperationId: 'text_to_video' },
    );
    assert.equal(next.operation, 'text_to_video');
    assert.equal('generationMode' in next, false);
  });

  it('A2: generationMode on EffectiveVideoParams is view-only; store write path never persists it', () => {
    const view = resolveEffectiveVideoParams({
      params: { model: 'vid-frames', operation: 'text_to_video', aspectRatio: '16:9' },
      schema: klingSchema,
      modelItem: klingItem,
      catalog,
      upstreams: [],
      prompt: 'hi',
    });
    // Local view-model may mirror operation for transitional summary paths.
    assert.equal(view.operation, 'text_to_video');
    if (view.generationMode !== undefined) {
      assert.equal(view.generationMode, view.operation);
    }

    // Store-bound write helper must only emit params.operation.
    const persisted = validateAndFallbackVideoParams(
      { model: 'vid-frames', generationMode: 'reference', aspectRatio: '16:9' },
      klingItem,
      { catalog, upstreams: [], prompt: 'hi' },
    );
    assert.equal('generationMode' in persisted, false);
    assert.equal(typeof persisted.operation, 'string');
    assert.ok(String(persisted.operation).length > 0);

    // Even when view.generationMode is present, callers must not spread it into store.
    const accidentalSpread = { ...view };
    const scrubbed = validateAndFallbackVideoParams(
      accidentalSpread,
      klingItem,
      { catalog },
    );
    assert.equal('generationMode' in scrubbed, false);
    assert.equal(typeof scrubbed.operation, 'string');
  });
});
