/**
 * W1 i18n 骨架测试（计划 §8）：字典 fallback 顺序 active → zh → en → key，
 * 未知 locale 回退 zh。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { t, setLocale, getLocale } from './index.ts';

test('i18n: zh 默认且未知 locale 回退 zh', () => {
  setLocale('zh');
  assert.equal(getLocale(), 'zh');
  assert.equal(t('node.generating'), '生成中…');

  setLocale('fr');
  assert.equal(getLocale(), 'zh');
  assert.equal(t('node.generating'), '生成中…');

  setLocale(undefined);
  assert.equal(getLocale(), 'zh');
});

test('i18n: en 字典与 zh 同形可取', () => {
  setLocale('en');
  assert.equal(getLocale(), 'en');
  assert.equal(t('node.generating'), 'Generating...');
  assert.equal(t('node.regenerate'), 'Regenerate');
  assert.equal(t('node.taskIdLabel'), 'Task ID:');
});

test('i18n: 缺失 key fallback 到 key 本身', () => {
  setLocale('en');
  assert.equal(t('no.such.key.exists'), 'no.such.key.exists');
  setLocale('zh');
  assert.equal(t('no.such.key.exists'), 'no.such.key.exists');
});

test('i18n: setLocale 幂等且可来回切换', () => {
  setLocale('en');
  setLocale('en');
  assert.equal(getLocale(), 'en');
  setLocale('zh');
  assert.equal(t('node.generationFailed'), '生成失败');
});
