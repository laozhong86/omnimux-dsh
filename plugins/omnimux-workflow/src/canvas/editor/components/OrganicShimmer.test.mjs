/**
 * OrganicShimmerOverlay & GenerationStateContainer 动效结构契约门禁测试
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const shimmerSrc = readFileSync(join(here, 'OrganicShimmer.tsx'), 'utf8');
const gscSrc = readFileSync(join(here, 'GenerationStateContainer.tsx'), 'utf8');
const cssSrc = readFileSync(join(here, '../../theme/components.css'), 'utf8');
const themeCssSrc = readFileSync(join(here, '../../theme/workbench-theme.css'), 'utf8');

test('OrganicShimmerOverlay TSX 契约：完整挂载 components.css 定义的 5 大流光折射层级', () => {
  // 1. 宿主容器
  assert.match(shimmerSrc, /className=\{`wf-organic-shimmer \$\{className\}`\}/);
  assert.match(shimmerSrc, /data-playing=\{playing \? 'true' : 'false'\}/);

  // 2. 画布与光谱底光
  assert.match(shimmerSrc, /className="wf-organic-shimmer__canvas"/);
  assert.match(shimmerSrc, /className="wf-organic-shimmer__field"/);

  // 3. SVG 湍流折射液体波浪层
  assert.match(shimmerSrc, /className="wf-organic-shimmer__distortion"/);

  // 4. 三层边缘发光系统
  assert.match(shimmerSrc, /className="wf-organic-shimmer__glow-layer"/);
  assert.match(shimmerSrc, /className="wf-organic-shimmer__glow-wrap"/);
  assert.match(shimmerSrc, /className="wf-organic-shimmer__glow-deep"/);
  assert.match(shimmerSrc, /className="wf-organic-shimmer__glow-mid"/);
  assert.match(shimmerSrc, /className="wf-organic-shimmer__glow-border"/);

  // 5. 动态过渡遮罩与内容插槽
  assert.match(shimmerSrc, /className="wf-organic-shimmer__mask"/);
  assert.match(shimmerSrc, /className="wf-organic-shimmer__content"/);
});

test('components.css 契约：包含完整的 Transitions.dev 物理级流体微光动画规则', () => {
  assert.match(cssSrc, /@keyframes wf-organic-shimmer-sweep/);
  assert.match(cssSrc, /\.wf-organic-shimmer/);
  assert.match(cssSrc, /\.wf-organic-shimmer__field/);
  assert.match(cssSrc, /\.wf-organic-shimmer__distortion/);
  assert.match(cssSrc, /\.wf-organic-shimmer__glow-deep/);
  assert.match(cssSrc, /\.wf-organic-shimmer__glow-mid/);
  assert.match(cssSrc, /\.wf-organic-shimmer__glow-border/);
  assert.match(cssSrc, /\.wf-organic-shimmer__mask/);
  assert.match(cssSrc, /\.wf-organic-shimmer__content/);
});

test('workbench-theme.css 契约：定义双主题 SVG 湍流滤镜与物理流光 Token', () => {
  assert.match(themeCssSrc, /--wf-shimmer-dur:/);
  assert.match(themeCssSrc, /--wf-shimmer-ease:/);
  assert.match(themeCssSrc, /--wf-shimmer-svg-light:/);
  assert.match(themeCssSrc, /--wf-shimmer-svg-dark:/);
  assert.match(themeCssSrc, /--wf-shimmer-svg-url:/);
});

test('GenerationStateContainer 契约：渲染骨架屏接入 OrganicShimmerOverlay', () => {
  assert.match(gscSrc, /import \{ OrganicShimmerOverlay \} from '\.\/OrganicShimmer'/);
  assert.match(gscSrc, /<OrganicShimmerOverlay borderRadius="inherit">/);
  assert.match(gscSrc, /wf-gsc__progress-text/);
});
