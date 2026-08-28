/**
 * ResourcePicker 源码契约：入口联动、CustomSelect、无裸 select。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const modalSrc = readFileSync(join(here, 'ResourcePickerModal.tsx'), 'utf8');
const canvasPaneSrc = readFileSync(join(here, 'CanvasResourcePane.tsx'), 'utf8');
const localPaneSrc = readFileSync(join(here, 'LocalUploadPane.tsx'), 'utf8');
const hookSrc = readFileSync(join(here, '../../hooks/useResourcePicker.ts'), 'utf8');
const pillSrc = readFileSync(join(here, '../MaterialNode/FloatingTopPill.tsx'), 'utf8');
const panelSrc = readFileSync(join(here, '../MaterialNode/ConfigPanel/index.tsx'), 'utf8');
const nodeSrc = readFileSync(join(here, '../MaterialNode/index.tsx'), 'utf8');
const cssSrc = readFileSync(join(here, '../../../theme/components.css'), 'utf8');

test('弹窗基于 CustomModal，含画布/本地 Tab 与 Footer 使用 N 项', () => {
  assert.match(modalSrc, /CustomModal/);
  assert.match(modalSrc, /picker\.tab\.canvas/);
  assert.match(modalSrc, /picker\.tab\.local/);
  assert.match(modalSrc, /picker\.use/);
  assert.match(modalSrc, /selectedCount === 0/);
});

test('画布面板使用 CustomSelect，禁止裸 select', () => {
  assert.match(canvasPaneSrc, /CustomSelect/);
  assert.equal(/<select\b/.test(canvasPaneSrc), false);
  assert.equal(/<select\b/.test(modalSrc), false);
  assert.equal(/<select\b/.test(localPaneSrc), false);
});

test('本地导入走系统选择器 + 带 path 的拖拽，不写 blob', () => {
  assert.match(localPaneSrc, /pickLocalFiles/);
  assert.match(localPaneSrc, /onDrop=\{handleDrop\}/);
  assert.match(localPaneSrc, /nativePathOf/);
  assert.match(localPaneSrc, /onRemove/);
  assert.equal(/createObjectURL/.test(localPaneSrc), false);
  assert.equal(/objectUrl/.test(localPaneSrc), false);
});

test('提交走 applyCanvasInputMutation / planResourcePickerCommit', () => {
  assert.match(hookSrc, /planResourcePickerCommit/);
  assert.match(hookSrc, /applyCanvasInputMutation/);
});

test('FloatingTopPill 导入按钮回调 onOpenResourcePicker，无私有 file input', () => {
  assert.match(pillSrc, /onOpenResourcePicker/);
  assert.equal(/type="file"/.test(pillSrc), false);
});

test('ConfigPanel Prompt 左上角 [+] 按钮唤起弹窗', () => {
  assert.match(panelSrc, /wf-config-panel__add-ref-btn/);
  assert.match(panelSrc, /onOpenResourcePicker/);
});

test('MaterialNode 挂载 ResourcePickerModal 与 useResourcePicker', () => {
  assert.match(nodeSrc, /useResourcePicker\(id\)/);
  assert.match(nodeSrc, /<ResourcePickerModal/);
  assert.match(nodeSrc, /importLocalFiles/);
  assert.match(nodeSrc, /openPicker\('canvas'\)/);
  assert.equal(/createObjectURL/.test(nodeSrc), false);
});

test('选择资源样式覆盖 Tab / 网格 / 拖拽区 / 已添加 / [+] 按钮', () => {
  assert.match(cssSrc, /\.wf-picker-tab--active/);
  assert.match(cssSrc, /\.wf-picker-grid/);
  assert.match(cssSrc, /\.wf-picker-dropzone/);
  assert.match(cssSrc, /\.wf-picker-added-badge/);
  assert.match(cssSrc, /\.wf-config-panel__add-ref-btn/);
});
