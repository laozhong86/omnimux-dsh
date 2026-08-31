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

test('TableNode 顶部胶囊栏契约：通用 FloatingTopPill + 有行才显示 + 图标短文案', () => {
  assert.match(tableNodeSrc, /import FloatingTopPill, \{ type FloatingPillAction \} from '\.\.\/\.\.\/editor\/components\/FloatingTopPill/);
  assert.match(tableNodeSrc, /useAddToConversation/);
  assert.match(tableNodeSrc, /hasNodeMaterial/);
  assert.match(tableNodeSrc, /shouldShowNodeToolbar/);
  assert.match(tableNodeSrc, /<FloatingTopPill actions=\{pillActions\}/);

  assert.match(tableNodeSrc, /key:\s*'add-to-conversation'/);
  assert.match(tableNodeSrc, /icon:\s*MessageSquarePlus/);
  assert.match(tableNodeSrc, /t\('pill\.addToConversation'\)/);
  assert.match(tableNodeSrc, /section:\s*'primary'/);
  assert.match(tableNodeSrc, /key:\s*'fullscreen-edit'/);
  assert.match(tableNodeSrc, /icon:\s*Maximize2/);
  assert.match(tableNodeSrc, /t\('pill\.fullscreen'\)/);

  assert.doesNotMatch(tableNodeSrc, /title="添加数据行"/);
  assert.doesNotMatch(tableNodeSrc, /title:\s*'添加到会话'/);
  assert.doesNotMatch(tableNodeSrc, /title:\s*'全屏编辑'/);
});
