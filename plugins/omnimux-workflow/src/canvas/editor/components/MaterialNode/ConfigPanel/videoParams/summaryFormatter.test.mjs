/**
 * Unit tests for summaryFormatter
 *
 * 遵循 Node 纯单测规范，覆盖：
 * 1. 全量参数 -> '全能参考 · 16:9 · 2K · 8s · 有声'
 * 2. 无分辨率无音效 -> '全能参考 · 16:9 · 5s'
 * 3. 首尾帧 + 9:16 -> '首尾帧 · 9:16 · 5s'
 * 4. fullText 无连续分隔符、无首尾分隔符
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { formatVideoSummary } from './summaryFormatter.ts';

describe('summaryFormatter - 胶囊摘要格式化引擎', () => {
  it('场景 1: 全量参数 -> 全能参考 · 16:9 · 2K · 8s · 有声', () => {
    const result = formatVideoSummary({
      model: 'veo-3.1',
      generationMode: 'reference',
      aspectRatio: '16:9',
      resolution: '2K',
      duration: 8,
      sound: true,
      hasSoundSupport: true,
    });

    assert.equal(result.modeText, '全能参考');
    assert.equal(result.ratioText, '16:9');
    assert.equal(result.resolutionText, '2K');
    assert.equal(result.durationText, '8s');
    assert.equal(result.soundText, '有声');
    assert.equal(result.fullText, '全能参考 · 16:9 · 2K · 8s · 有声');
  });

  it('场景 2: 无分辨率无音效 -> 全能参考 · 16:9 · 5s', () => {
    const result = formatVideoSummary({
      model: 'veo-3.1',
      generationMode: 'reference',
      aspectRatio: '16:9',
      duration: 5,
      sound: false,
      hasSoundSupport: false,
    });

    assert.equal(result.modeText, '全能参考');
    assert.equal(result.ratioText, '16:9');
    assert.equal(result.resolutionText, null);
    assert.equal(result.durationText, '5s');
    assert.equal(result.soundText, null);
    assert.equal(result.fullText, '全能参考 · 16:9 · 5s');
  });

  it('场景 3: 首尾帧 + 9:16 -> 首尾帧 · 9:16 · 5s', () => {
    const result = formatVideoSummary({
      model: 'kling-v3',
      generationMode: 'first_last_frame',
      aspectRatio: '9:16',
      duration: 5,
      sound: false,
      hasSoundSupport: false,
    });

    assert.equal(result.modeText, '首尾帧');
    assert.equal(result.ratioText, '9:16');
    assert.equal(result.resolutionText, null);
    assert.equal(result.durationText, '5s');
    assert.equal(result.soundText, null);
    assert.equal(result.fullText, '首尾帧 · 9:16 · 5s');
  });

  it('场景 4: fullText 无连续分隔符、无首尾分隔符', () => {
    const samples = [
      {
        generationMode: 'reference',
        aspectRatio: '16:9',
        resolution: '1080P',
        duration: 10,
        sound: true,
        hasSoundSupport: true,
      },
      {
        generationMode: 'first_last_frame',
        aspectRatio: '9:16',
        duration: 8,
        sound: false,
        hasSoundSupport: false,
      },
      {
        generationMode: 'reference',
        aspectRatio: '1:1',
        resolution: '4K',
        duration: 5,
        sound: true,
        hasSoundSupport: true,
      },
    ];

    for (const sample of samples) {
      const result = formatVideoSummary({ model: 'm', ...sample });
      assert.ok(!result.fullText.includes('··'), `不应存在连续分隔符: ${result.fullText}`);
      assert.ok(!result.fullText.startsWith('·'), `不应以分隔符开头: ${result.fullText}`);
      assert.ok(!result.fullText.endsWith('·'), `不应以分隔符结尾: ${result.fullText}`);
      assert.ok(!result.fullText.includes(' · · '), `不应存在空白包裹的连续分隔符: ${result.fullText}`);
      // 非空段落的节数应正确反映到分隔符数量（n 段 -> n-1 个 ' · '）
      const expectedSegments = [
        result.modeText,
        result.ratioText,
        result.resolutionText,
        result.durationText,
        result.soundText,
      ].filter((s) => s !== null && s !== undefined && String(s).trim() !== '');

      const sepCount = (result.fullText.match(/ · /g) || []).length;
      assert.equal(sepCount, expectedSegments.length - 1, `分隔符数量错误: ${result.fullText}`);
    }
  });

  it('场景 5: 分辨率小写自动标准化为大写', () => {
    const result = formatVideoSummary({
      model: 'm',
      generationMode: 'reference',
      aspectRatio: '16:9',
      resolution: '1080p',
      duration: 5,
      sound: false,
      hasSoundSupport: false,
    });

    assert.equal(result.resolutionText, '1080P');
    assert.ok(result.fullText.includes('1080P'));
  });
});
