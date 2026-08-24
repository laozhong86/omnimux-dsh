/**
 * 画布左侧 Toolbar 不被 xyflow pan/select 抢走点击。
 * 本包测试不装 jsdom，源码契约 + 抽出的 stopPropagation handler 一起测。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  preventToolbarAddContextMenu,
  stopToolbarNativeEvent,
} from './toolbarPointerGuard.ts';

const here = dirname(fileURLToPath(import.meta.url));
const toolbarSrc = readFileSync(join(here, 'Toolbar.tsx'), 'utf8');
const themeSrc = readFileSync(
  join(here, '../../theme/workbench-theme.css'),
  'utf8',
);

test('根节点 class 带 nodrag nopan（xyflow 约定）', () => {
  assert.match(toolbarSrc, /className="wf-canvas-toolbar nodrag nopan"/);
});

test('根节点 onPointerDown / onMouseDown 走 stopToolbarNativeEvent', () => {
  assert.match(toolbarSrc, /onPointerDown=\{stopToolbarNativeEvent\}/);
  assert.match(toolbarSrc, /onMouseDown=\{stopToolbarNativeEvent\}/);
});

test('所有 button 显式 type="button"，添加按钮点击仍调 onAddNode', () => {
  const buttons = [...toolbarSrc.matchAll(/<button\b([^>]*)>/g)].map((m) => m[1]);
  assert.equal(buttons.length >= 3, true, `expected ≥3 buttons, got ${buttons.length}`);
  for (const attrs of buttons) {
    assert.match(attrs, /\btype="button"/);
  }
  assert.match(toolbarSrc, /handleSelectNodeType\(item\.type\)/);
});

test('四个添加按钮有 onContextMenu，不新做工具栏右键菜单', () => {
  assert.match(toolbarSrc, /onContextMenu=\{preventToolbarAddContextMenu\}/);
  assert.equal(toolbarSrc.includes('ToolbarContextMenu'), false);
  assert.equal(toolbarSrc.includes('<ContextMenu'), false);
});

test('stopToolbarNativeEvent 只 stopPropagation，不 preventDefault', () => {
  let stopped = 0;
  let prevented = 0;
  stopToolbarNativeEvent({
    stopPropagation() {
      stopped += 1;
    },
    preventDefault() {
      prevented += 1;
    },
  });
  assert.equal(stopped, 1);
  assert.equal(prevented, 0);
});

test('preventToolbarAddContextMenu 同时 preventDefault + stopPropagation', () => {
  let stopped = 0;
  let prevented = 0;
  preventToolbarAddContextMenu({
    preventDefault() {
      prevented += 1;
    },
    stopPropagation() {
      stopped += 1;
    },
  });
  assert.equal(prevented, 1);
  assert.equal(stopped, 1);
});

test('.wf-canvas-toolbar 有 pointer-events: auto 且 z-index ≥ 10', () => {
  const block = themeSrc.match(/\.wf-canvas-toolbar\s*\{[^}]+\}/);
  assert.ok(block, 'missing .wf-canvas-toolbar rule');
  assert.match(block[0], /pointer-events:\s*auto/);
  const z = block[0].match(/z-index:\s*(\d+)/);
  assert.ok(z, 'missing z-index');
  assert.equal(Number(z[1]) >= 10, true);
});
