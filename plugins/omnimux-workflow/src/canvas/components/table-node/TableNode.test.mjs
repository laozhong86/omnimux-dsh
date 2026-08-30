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

test('TableNode 顶部胶囊栏契约：100% 复用通用 FloatingTopPill 组件，收敛为两个纯图标 Action（添加到会话、全屏编辑），移除添加行按钮', () => {
  // 1. 引用并消费全仓通用的 FloatingTopPill 抽象组件与 useAddToConversation Hook
  assert.match(tableNodeSrc, /import FloatingTopPill, \{ type FloatingPillAction \} from '\.\.\/\.\.\/editor\/components\/FloatingTopPill/);
  assert.match(tableNodeSrc, /useAddToConversation/);
  assert.match(tableNodeSrc, /<FloatingTopPill actions=\{pillActions\} \/>/);

  // 2. 包含「添加到会话」与「全屏编辑」两个纯图标 Action 配置项及 title 提示
  assert.match(tableNodeSrc, /key:\s*'add-to-conversation'/);
  assert.match(tableNodeSrc, /icon:\s*MessageSquarePlus/);
  assert.match(tableNodeSrc, /title:\s*'添加到会话'/);
  assert.match(tableNodeSrc, /key:\s*'fullscreen-edit'/);
  assert.match(tableNodeSrc, /icon:\s*Maximize2/);
  assert.match(tableNodeSrc, /title:\s*'全屏编辑'/);

  // 3. 胶囊栏中不再包含「添加行」按钮及 span 文字标签
  assert.doesNotMatch(tableNodeSrc, /title="添加数据行"/);
  assert.doesNotMatch(tableNodeSrc, /<span>添加到会话<\/span>/);
  assert.doesNotMatch(tableNodeSrc, /<span>添加行<\/span>/);
  assert.doesNotMatch(tableNodeSrc, /<span>全屏编辑<\/span>/);
});

