/**
 * Unit tests for videoParamAdapter
 *
 * 遵循 Node 纯单测规范，覆盖 4 大场景：
 * 1. Kling V3 型模型（仅 first_frame/last_frame，resolution 1080P/4K，sound 支持）下的有效参数解析（含非法 params 安全回退）
 * 2. Veo 3.1 型模型（仅 reference、无音效）下的解析与不支持项压制
 * 3. 模型切换：Kling V3 态参数切换到 Veo 型模型时 generationMode/resolution/sound 的降级与字段清除
 * 4. 空 params / 空 schema / 无 modelItem 的安全兜底
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  resolveEffectiveVideoParams,
  validateAndFallbackVideoParams,
} from './videoParamAdapter.ts';

/** Kling V3 型模型：仅支持 first_frame/last_frame，含分辨率与音效能力 */
const klingV3Model = {
  id: 'kling-v3',
  label: 'Kling V3',
  inputCapability: {
    referenceImages: {
      min: 0,
      max: 2,
      supportedRoles: ['first_frame', 'last_frame'],
    },
  },
  parameters: {
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
  },
};

/** Veo 3.1 型模型：仅支持 reference，无分辨率选项，无音效 */
const veoModel = {
  id: 'veo-3.1',
  label: 'Veo 3.1',
  inputCapability: {
    referenceImages: {
      min: 0,
      max: 1,
      supportedRoles: ['reference'],
    },
  },
  parameters: {
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
  },
};

describe('videoParamAdapter - resolveEffectiveVideoParams 有效参数解析', () => {
  it('场景 1a: Kling V3 型模型合法参数 -> 生成模式强制首尾帧、其余参数透传', () => {
    const params = {
      model: 'kling-v3',
      generationMode: 'reference', // 与能力冲突，应被强制为 first_last_frame
      aspectRatio: '9:16',
      resolution: '4K',
      duration: 10,
      sound: true,
    };

    const result = resolveEffectiveVideoParams(params, klingV3Model.parameters, klingV3Model);

    assert.equal(result.model, 'kling-v3');
    // 仅支持 first_frame/last_frame，不含 reference -> 强制 first_last_frame
    assert.equal(result.generationMode, 'first_last_frame');
    assert.equal(result.aspectRatio, '9:16');
    assert.equal(result.resolution, '4K');
    assert.equal(result.duration, 10);
    assert.equal(result.sound, true);
    assert.equal(result.hasSoundSupport, true);
  });

  it('场景 1b: Kling V3 型模型非法/脏参数 -> 安全回退到 schema 默认值', () => {
    const dirtyParams = {
      model: 'kling-v3',
      generationMode: 'bogus',
      aspectRatio: '999:999', // 不在选项中
      resolution: '8K', // 不在选项中
      duration: 999, // 不在选项中
      sound: 'yes', // 非布尔值
    };

    const result = resolveEffectiveVideoParams(dirtyParams, klingV3Model.parameters, klingV3Model);

    assert.equal(result.generationMode, 'first_last_frame');
    assert.equal(result.aspectRatio, '16:9'); // defaultValue
    assert.equal(result.resolution, '1080P'); // defaultValue
    assert.equal(result.duration, 10); // defaultValue
    assert.equal(result.sound, true); // 非布尔 -> 使用 schema 默认 true
    assert.equal(result.hasSoundSupport, true);
  });

  it('场景 2a: Veo 3.1 型模型 -> 生成模式强制 reference、分辨率压制、音效关闭', () => {
    const params = {
      model: 'veo-3.1',
      generationMode: 'first_last_frame', // 与能力冲突，应被强制为 reference
      aspectRatio: '9:16',
      resolution: '4K', // 目标模型无分辨率选项，应被压制为 undefined
      duration: 8,
      sound: true, // 目标模型不支持音效，应被强制为 false
    };

    const result = resolveEffectiveVideoParams(params, veoModel.parameters, veoModel);

    assert.equal(result.model, 'veo-3.1');
    // 仅支持 reference，不含 first/last frame -> 强制 reference
    assert.equal(result.generationMode, 'reference');
    assert.equal(result.aspectRatio, '9:16');
    assert.equal(result.resolution, undefined);
    assert.equal(result.duration, 8);
    assert.equal(result.sound, false);
    assert.equal(result.hasSoundSupport, false);
  });

  it('场景 4a: 空 params / 空 schema / 无 modelItem -> 全量安全兜底', () => {
    const result = resolveEffectiveVideoParams(undefined, undefined, undefined);

    assert.equal(result.model, '');
    assert.equal(result.generationMode, 'reference');
    assert.equal(result.aspectRatio, '16:9');
    assert.equal(result.resolution, undefined);
    assert.equal(result.duration, 5);
    assert.equal(result.sound, false);
    assert.equal(result.hasSoundSupport, false);
  });

  it('场景 4b: 空对象 params 与空 schema -> 仍安全兜底', () => {
    const result = resolveEffectiveVideoParams({}, {}, {});

    assert.equal(result.model, '');
    assert.equal(result.generationMode, 'reference');
    assert.equal(result.aspectRatio, '16:9');
    assert.equal(result.duration, 5);
    assert.equal(result.sound, false);
    assert.equal(result.hasSoundSupport, false);
  });

  it('场景 4c: supportedRoles 为空数组（无限定）-> 优先采纳 params.generationMode', () => {
    const unlimitedModel = {
      id: 'unlimited-model',
      inputCapability: { referenceImages: { supportedRoles: [] } },
      parameters: {
        aspectRatio: { options: [{ value: '16:9' }], defaultValue: '16:9' },
      },
    };

    const result = resolveEffectiveVideoParams(
      { generationMode: 'first_last_frame', aspectRatio: '16:9', duration: 5 },
      unlimitedModel.parameters,
      unlimitedModel,
    );

    assert.equal(result.generationMode, 'first_last_frame');
  });
});
describe('videoParamAdapter - validateAndFallbackVideoParams 模型切换降级', () => {
  it('场景 3: Kling V3 态参数切换到 Veo 型模型 -> generationMode 回退 reference、resolution 重置、sound 字段删除', () => {
    const klingState = {
      model: 'kling-v3',
      generationMode: 'first_last_frame',
      aspectRatio: '16:9',
      resolution: '4K',
      duration: 8,
      sound: true,
      firstFrameUrl: 'https://example.com/first.png',
    };

    const next = validateAndFallbackVideoParams(klingState, veoModel);

    // model 字段切换到目标模型
    assert.equal(next.model, 'veo-3.1');
    // generationMode 回退为 reference
    assert.equal(next.generationMode, 'reference');
    // aspectRatio 与 duration 目标模型支持，保留
    assert.equal(next.aspectRatio, '16:9');
    assert.equal(next.duration, 8);
    // firstFrameUrl 等未知/透传字段保留
    assert.equal(next.firstFrameUrl, 'https://example.com/first.png');

    // resolution：目标模型无选项 -> 彻底删除
    assert.equal(Object.prototype.hasOwnProperty.call(next, 'resolution'), false);
    // sound：目标模型不支持 -> 彻底删除
    assert.equal(Object.prototype.hasOwnProperty.call(next, 'sound'), false);
  });

  it('场景 3b: 目标模型为 undefined -> 仅继承旧参数并保留 model', () => {
    const oldParams = { model: 'legacy', generationMode: 'first_last_frame', aspectRatio: '9:16' };
    const next = validateAndFallbackVideoParams(oldParams, undefined);

    assert.equal(next.model, 'legacy');
    assert.equal(next.generationMode, 'first_last_frame');
    assert.equal(next.aspectRatio, '9:16');
  });
});

describe('videoParamAdapter - end_frame-only must not coerce to first_last_frame (#567 A3)', () => {
  const endOnlyModel = {
    id: 'minimax-h3-endframe',
    label: 'MiniMax H3 End-frame',
    inputCapability: {
      referenceImages: {
        min: 1,
        max: 1,
        supportedRoles: ['last_frame'],
      },
    },
    parameters: {
      aspectRatio: {
        options: [
          { value: '16:9', label: '16:9' },
        ],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
        ],
        defaultValue: 5,
      },
    },
  };

  it('resolveEffectiveVideoParams: last_frame-only stays default mode, not first_last_frame', () => {
    const result = resolveEffectiveVideoParams(
      { model: 'minimax-h3-endframe', generationMode: 'first_last_frame' },
      endOnlyModel.parameters,
      endOnlyModel,
    );
    assert.equal(result.model, 'minimax-h3-endframe');
    assert.notEqual(result.generationMode, 'first_last_frame');
    assert.equal(result.generationMode, 'reference');
  });

  it('validateAndFallbackVideoParams: last_frame-only does not open FLF mode', () => {
    const next = validateAndFallbackVideoParams(
      { generationMode: 'first_last_frame', aspectRatio: '16:9', duration: 5 },
      endOnlyModel,
    );
    assert.equal(next.model, 'minimax-h3-endframe');
    assert.notEqual(next.generationMode, 'first_last_frame');
    assert.equal(next.generationMode, 'reference');
  });
});
