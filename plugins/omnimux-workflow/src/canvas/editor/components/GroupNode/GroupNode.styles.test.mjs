/**
 * REQ-WF-GROUP-FILL 契约门禁：编组节点 fill token 必须落在实例级
 * `.wf-group-node`（消费 `--wf-group-accent`），不得写进 `.wf-canvas-root`。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const cssSrc = readFileSync(join(here, '../../../theme/components.css'), 'utf8');
const themeSrc = readFileSync(join(here, '../../../theme/workbench-theme.css'), 'utf8');
const tsxSrc = readFileSync(join(here, 'GroupNode.tsx'), 'utf8');

/**
 * 按选择器切出第一个精确匹配的 CSS 规则体。
 * 不把后面的 `.wf-group-header-pill` 等规则算进 `.wf-group-node` 块。
 */
function extractRule(src, selector) {
  const needle = `${selector} {`;
  const start = src.indexOf(needle);
  assert.ok(start >= 0, `缺少选择器 ${selector}`);
  let i = start + needle.length;
  let depth = 1;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (ch === '{') depth += 1;
    else if (ch === '}') depth -= 1;
    i += 1;
  }
  assert.ok(depth === 0, `${selector} 规则体未闭合`);
  return src.slice(start, i);
}

const groupNodeRule = extractRule(cssSrc, '.wf-group-node');
const selectedRule = extractRule(cssSrc, '.wf-group-node--selected');
const selectedExpandedRule = extractRule(
  cssSrc,
  '.wf-group-node--selected:not(.wf-group-node--collapsed)',
);
const collapsedRule = extractRule(cssSrc, '.wf-group-node--collapsed');
const canvasRootRule = extractRule(themeSrc, '.wf-canvas-root');
const rfGroupRule = extractRule(themeSrc, '.wf-canvas-root .react-flow__node-group');

test('REQ-WF-GROUP-FILL: .wf-group-node 声明三态 fill token', () => {
  assert.match(groupNodeRule, /--wf-group-fill\s*:/);
  assert.match(groupNodeRule, /--wf-group-fill-selected\s*:/);
  assert.match(groupNodeRule, /--wf-group-fill-collapsed\s*:/);
});

test('REQ-WF-GROUP-FILL: 默认 background 消费 --wf-group-fill', () => {
  assert.match(groupNodeRule, /background:\s*var\(--wf-group-fill\)/);
});

test('REQ-WF-GROUP-FILL: --selected:not(--collapsed) 消费 --wf-group-fill-selected', () => {
  assert.match(selectedExpandedRule, /background:\s*var\(--wf-group-fill-selected\)/);
});

test('REQ-WF-GROUP-FILL: --collapsed 消费 --wf-group-fill-collapsed', () => {
  assert.match(collapsedRule, /background:\s*var\(--wf-group-fill-collapsed\)/);
});

test('REQ-WF-GROUP-FILL: mix 比例 12% / 20% / 16%；collapsed 第二色是 surface', () => {
  const fillDecl = groupNodeRule.match(
    /--wf-group-fill:\s*color-mix\(\s*in srgb,\s*var\(--wf-group-accent,\s*var\(--wb-accent\)\)\s+12%,\s*transparent\s*\)/,
  );
  const selectedDecl = groupNodeRule.match(
    /--wf-group-fill-selected:\s*color-mix\(\s*in srgb,\s*var\(--wf-group-accent,\s*var\(--wb-accent\)\)\s+20%,\s*transparent\s*\)/,
  );
  const collapsedDecl = groupNodeRule.match(
    /--wf-group-fill-collapsed:\s*color-mix\(\s*in srgb,\s*var\(--wf-group-accent,\s*var\(--wb-accent\)\)\s+16%,\s*var\(--wb-surface\)\s*\)/,
  );
  assert.ok(fillDecl, '默认 fill 必须是 accent 12% + transparent');
  assert.ok(selectedDecl, 'selected fill 必须是 accent 20% + transparent');
  assert.ok(collapsedDecl, 'collapsed fill 必须是 accent 16% + var(--wb-surface)');
});

test('REQ-WF-GROUP-FILL: transition 含 background', () => {
  assert.match(groupNodeRule, /transition:[\s\S]*background 0\.15s ease/);
});

test('REQ-WF-GROUP-FILL: 组节点规则体不含 backdrop-filter', () => {
  assert.doesNotMatch(groupNodeRule, /backdrop-filter/);
  assert.doesNotMatch(selectedRule, /backdrop-filter/);
  assert.doesNotMatch(selectedExpandedRule, /backdrop-filter/);
  assert.doesNotMatch(collapsedRule, /backdrop-filter/);
});

test('REQ-WF-GROUP-FILL: .wf-group-node 规则体不含 pointer-events', () => {
  assert.doesNotMatch(groupNodeRule, /pointer-events/);
});

test('REQ-WF-GROUP-FILL: .react-flow__node-group 仍 background: transparent', () => {
  assert.match(rfGroupRule, /background:\s*transparent/);
});

test('REQ-WF-GROUP-FILL: GroupNode.tsx 注入 --wf-group-accent，无暗色开关 / 内联 background', () => {
  assert.match(tsxSrc, /--wf-group-accent/);
  assert.doesNotMatch(tsxSrc, /\bisDark\b/);
  assert.doesNotMatch(tsxSrc, /data-ds-dark-theme/);
  assert.doesNotMatch(tsxSrc, /background\s*:/);
});

test('REQ-WF-GROUP-FILL: fill token 不出现在 .wf-canvas-root 块', () => {
  assert.doesNotMatch(canvasRootRule, /--wf-group-fill/);
  assert.doesNotMatch(canvasRootRule, /--wf-group-fill-selected/);
  assert.doesNotMatch(canvasRootRule, /--wf-group-fill-collapsed/);
});

test('REQ-WF-GROUP-FILL: --selected 规则体不写 background（折叠选中走 collapsed fill）', () => {
  assert.doesNotMatch(selectedRule, /background\s*:/);
});
