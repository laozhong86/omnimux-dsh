/**
 * CanvasNodeShell & 基础抽象组件与 VideoCompositionNode 重构验证测试
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const shellSrc = readFileSync(join(here, 'CanvasNodeShell.tsx'), 'utf8');
const pillSrc = readFileSync(join(here, 'FloatingTopPill.tsx'), 'utf8');
const headerSrc = readFileSync(join(here, 'MaterialNode/NodeHeader.tsx'), 'utf8');
const launcherStateSrc = readFileSync(join(here, 'NodeEmptyState/NodeLauncherState.tsx'), 'utf8');
const videoNodeSrc = readFileSync(join(here, '../../nodes/definitions/videoComposition.tsx'), 'utf8');
const cssSrc = readFileSync(join(here, '../../theme/components.css'), 'utf8');

test('CanvasNodeShell 契约：统一包裹类名、反缩放、四角标与连接桩插槽', () => {
  assert.match(shellSrc, /wf-node-shell wf-material-node/);
  assert.match(shellSrc, /wf-material-node--selected/);
  assert.match(shellSrc, /wf-material-node__card--dragover/);
  assert.match(shellSrc, /useViewport/);
  assert.match(shellSrc, /inverseScaleForZoom/);
  assert.match(shellSrc, /wf-node-corner--tl/);
  assert.match(shellSrc, /wf-node-corner--tr/);
  assert.match(shellSrc, /wf-node-corner--bl/);
  assert.match(shellSrc, /wf-node-corner--br/);
  assert.match(shellSrc, /CanvasNodeHandle/);
  assert.match(shellSrc, /renderFloatingPill/);
  assert.match(shellSrc, /renderHeader/);
  assert.match(shellSrc, /renderConfigPanel/);
});

test('FloatingTopPill 契约：支持声明式 actions 数组与反向缩放', () => {
  assert.match(pillSrc, /export interface FloatingPillAction/);
  assert.match(pillSrc, /wf-floating-top-pill nodrag nowheel/);
  assert.match(pillSrc, /wf-floating-top-pill__btn--primary/);
  assert.match(pillSrc, /useViewport/);
  assert.match(pillSrc, /inverseScaleForZoom/);
});

test('NodeHeader 契约：支持 customIcon、扩展 materialType、双击重命名与 StatusBadge', () => {
  assert.match(headerSrc, /customIcon/);
  assert.match(headerSrc, /video_composition/);
  assert.match(headerSrc, /className="wf-node-header"/);
  assert.match(headerSrc, /handleDoubleClick/);
  assert.match(headerSrc, /onLabelChange/);
  assert.match(headerSrc, /trailing/);
});

test('NodeLauncherState 契约：统一主图标、次级图标、blurb、建议与药丸按钮组', () => {
  assert.match(launcherStateSrc, /wf-node-launcher-state/);
  assert.match(launcherStateSrc, /wf-node-launcher-state__icon-box/);
  assert.match(launcherStateSrc, /wf-node-launcher-state__sub-icon/);
  assert.match(launcherStateSrc, /wf-node-launcher-state__blurb/);
  assert.match(launcherStateSrc, /wf-node-empty__try-label/);
  assert.match(launcherStateSrc, /wf-node-launcher-state__pill-btn/);
  assert.match(launcherStateSrc, /wf-node-launcher-state__pill-btn--primary/);
});

test('VideoCompositionNode 契约：接入 CanvasNodeShell、NodeHeader、FloatingTopPill 与 NodeLauncherState', () => {
  assert.match(videoNodeSrc, /<CanvasNodeShell/);
  assert.match(videoNodeSrc, /<FloatingTopPill/);
  assert.match(videoNodeSrc, /<NodeHeader/);
  assert.match(videoNodeSrc, /<NodeLauncherState/);
  // 确认已移除废弃的手写 header 与 open 按钮
  assert.doesNotMatch(videoNodeSrc, /wf-clip-launcher__header/);
  assert.doesNotMatch(videoNodeSrc, /wf-clip-launcher__open/);
  // 确认关键事件与属性完整保留
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_OPEN/);
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_SAVE/);
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_PROGRESS/);
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_CLOSE/);
});

test('components.css 契约：清理废弃私有规则，补齐 LauncherState 与 DSW 原生 Token 对齐', () => {
  assert.doesNotMatch(cssSrc, /\.wf-clip-launcher__header/);
  assert.doesNotMatch(cssSrc, /\.wf-clip-launcher__open/);
  assert.doesNotMatch(cssSrc, /\.wf-clip-status/);
  assert.match(cssSrc, /\.wf-node-launcher-state/);
  assert.match(cssSrc, /\.wf-node-launcher-state__icon-box/);
  assert.match(cssSrc, /\.wf-node-launcher-state__sub-icon/);
  assert.match(cssSrc, /\.wf-node-launcher-state__pill-btn/);
  assert.match(cssSrc, /var\(--dsw-alias-/);
  assert.match(cssSrc, /height:\s*32px;/);
  assert.match(cssSrc, /border-radius:\s*8px;/);
});
