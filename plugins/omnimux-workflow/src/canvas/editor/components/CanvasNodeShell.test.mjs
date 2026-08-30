/**
 * CanvasNodeShell & 基础抽象组件与 VideoCompositionNode 重构验证测试
 * （T4 四分支状态机 / T5 CSS 清洗 契约门禁）
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
const resultSrc = readFileSync(join(here, '../../nodes/definitions/videoCompositionResult.tsx'), 'utf8');
const statusModuleSrc = readFileSync(join(here, '../../nodes/definitions/videoCompositionStatus.ts'), 'utf8');
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

test('VideoCompositionNode 契约：接入 Shell/Header/Pill/Launcher/GSC 与状态映射模块', () => {
  assert.match(videoNodeSrc, /<CanvasNodeShell/);
  assert.match(videoNodeSrc, /<FloatingTopPill/);
  assert.match(videoNodeSrc, /<NodeHeader/);
  assert.match(videoNodeSrc, /<NodeLauncherState/);
  assert.match(videoNodeSrc, /mapVideoCompositionToBadge/);
  assert.match(videoNodeSrc, /mapVideoCompositionToView/);
  assert.doesNotMatch(videoNodeSrc, /<VideoCompositionResult/);
  assert.match(videoNodeSrc, /<GenerationStateContainer/);
  assert.match(videoNodeSrc, /loadingAspectRatio="video"/);
  // 旧私有产物态 DOM / 内联裸色彻底移除
  assert.doesNotMatch(videoNodeSrc, /wf-clip-launcher/);
  assert.doesNotMatch(videoNodeSrc, /rgba\(|#[0-9a-fA-F]{3,8}/);
  // 功能契约 100% 保留：事件桥、上游收集、executorKey、尺寸
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_OPEN/);
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_SAVE/);
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_PROGRESS/);
  assert.match(videoNodeSrc, /OMNIMUX_CLIP_CLOSE/);
  assert.match(videoNodeSrc, /collectUpstreamInputs/);
  assert.match(videoNodeSrc, /executorKey: 'video_composition'/);
  assert.match(videoNodeSrc, /VIDEO_COMPOSITION_NODE_WIDTH = 350/);
  assert.match(videoNodeSrc, /VIDEO_COMPOSITION_NODE_HEIGHT = 440/);
});

test('videoCompositionStatus 模块契约：三条映射矩阵导出（纯逻辑已由同名单测断言）', () => {
  assert.match(statusModuleSrc, /mapVideoCompositionToBadge/);
  assert.match(statusModuleSrc, /mapVideoCompositionToGeneration/);
  assert.match(statusModuleSrc, /mapVideoCompositionToView/);
  assert.match(statusModuleSrc, /export function formatDuration/);
  assert.match(statusModuleSrc, /export function formatResolution/);
  assert.match(statusModuleSrc, /export function projectFileName/);
});

test('VideoCompositionResult 契约：Props 驱动纯展示、内联播放切换、无裸色', () => {
  assert.match(resultSrc, /export interface VideoCompositionResultProps/);
  for (const prop of ['outputVideoUrl', 'thumbnailUrl', 'durationMs', 'width', 'height', 'title', 'onReEdit', 'onDownload']) {
    assert.match(resultSrc, new RegExp(prop), `缺 props 字段 ${prop}`);
  }
  assert.match(resultSrc, /isPlayingInline/);
  assert.match(resultSrc, /wf-vc-result/);
  assert.match(resultSrc, /formatDuration/);
  assert.match(resultSrc, /formatResolution/);
  assert.doesNotMatch(resultSrc, /rgba\(|#[0-9a-fA-F]{3,8}/);
});

test('components.css 契约：wf-clip-launcher 私有族彻底删除，补齐 launcher/vc-result 标准类', () => {
  assert.doesNotMatch(cssSrc, /\.wf-clip-launcher/);
  assert.doesNotMatch(cssSrc, /\.wf-clip-status/);
  assert.match(cssSrc, /\.wf-node-launcher-state/);
  assert.match(cssSrc, /\.wf-node-launcher-state__icon-box/);
  assert.match(cssSrc, /\.wf-node-launcher-state__sub-icon/);
  assert.match(cssSrc, /\.wf-node-launcher-state__pill-btn/);
  assert.match(cssSrc, /\.wf-vc-result__preview/);
  assert.match(cssSrc, /\.wf-vc-result__play-chip/);
  assert.match(cssSrc, /\.wf-vc-result__meta/);
  assert.match(cssSrc, /\.wf-vc-result__btn/);
  assert.match(cssSrc, /\.wf-vc-result__btn--primary/);
  // Mono 数字时长
  assert.match(cssSrc, /\.wf-vc-result__mono/);
  assert.match(cssSrc, /ui-monospace/);
  assert.match(cssSrc, /var\(--dsw-alias-/);
  assert.match(cssSrc, /height:\s*32px;/);
  assert.match(cssSrc, /border-radius:\s*8px;/);
});

test('components.css 契约：wf-vc-result 新块 100% DSW Token 消费，0 裸色、0 私有变量', () => {
  const start = cssSrc.indexOf('.wf-vc-result');
  assert.ok(start >= 0, '缺少 .wf-vc-result 标准块');
  const nextSectionMatch = cssSrc.slice(start + 1).match(/\/\*\s*={3,}/);
  const nextSection = nextSectionMatch ? start + 1 + nextSectionMatch.index : -1;
  const block = nextSection > start ? cssSrc.slice(start, nextSection) : cssSrc.slice(start);
  assert.doesNotMatch(block, /#[0-9a-fA-F]{3,8}/);
  assert.doesNotMatch(block, /rgba?\(/);
  assert.doesNotMatch(block, /--omx-|--wb-/);
  assert.doesNotMatch(block, /wf-clip-launcher/);
  assert.match(block, /var\(--dsw-alias-/);
  // 空白注释前置行（T5 块头注释）之后才是规则体
  assert.ok(block.includes('.wf-vc-result {'), '缺 .wf-vc-result 根规则');
  assert.ok(block.includes('height: 32px;'), '操作按钮未达 32px 控件高');
  assert.ok(block.includes('border-radius: 8px;'), '未声明 8px 圆角');
});