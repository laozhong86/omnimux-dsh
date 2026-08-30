/**
 * TableNode 顶部操作栏与组件结构契约测试
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const tableNodeSrc = readFileSync(join(here, 'TableNode.tsx'), 'utf8');

test('TableNode 顶部胶囊栏契约：收敛为两个纯图标按钮（添加到对话、全屏编辑），移除添加行按钮', () => {
  // 1. 包含顶部浮动胶囊栏结构
  assert.match(tableNodeSrc, /wf-floating-top-pill/);
  assert.match(tableNodeSrc, /wf-floating-top-pill__group/);

  // 2. 包含「添加到对话」与「全屏编辑」两个纯图标按钮及 title 提示
  assert.match(tableNodeSrc, /title="添加到对话"/);
  assert.match(tableNodeSrc, /title="全屏编辑"/);
  assert.match(tableNodeSrc, /<MessageSquarePlus/);
  assert.match(tableNodeSrc, /<Maximize2/);

  // 3. 顶部胶囊栏中不再包含「添加行」按钮及 span 文字标签
  assert.doesNotMatch(tableNodeSrc, /title="添加数据行"/);
  assert.doesNotMatch(tableNodeSrc, /<span>添加到对话<\/span>/);
  assert.doesNotMatch(tableNodeSrc, /<span>添加行<\/span>/);
  assert.doesNotMatch(tableNodeSrc, /<span>全屏编辑<\/span>/);
});
