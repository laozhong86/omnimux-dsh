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

function sliceActionBlock(src, key) {
  const needle = `key: '${key}'`;
  const keyIdx = src.indexOf(needle);
  assert.ok(keyIdx >= 0, `missing action ${key}`);
  const start = src.lastIndexOf('{', keyIdx);
  assert.ok(start >= 0, `missing object start for ${key}`);
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    if (src[i] === '{') depth += 1;
    else if (src[i] === '}') {
      depth -= 1;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  throw new Error(`unclosed action ${key}`);
}

test('TableNode 顶部胶囊栏契约：通用 FloatingTopPill + 有行才显示 + chat 次区图标', () => {
  assert.match(tableNodeSrc, /import FloatingTopPill, \{ type FloatingPillAction \} from '\.\.\/\.\.\/editor\/components\/FloatingTopPill/);
  assert.match(tableNodeSrc, /useAddToConversation/);
  assert.match(tableNodeSrc, /hasNodeMaterial/);
  assert.match(tableNodeSrc, /shouldShowNodeToolbar/);
  assert.match(tableNodeSrc, /<FloatingTopPill actions=\{pillActions\}/);

  const chat = sliceActionBlock(tableNodeSrc, 'add-to-conversation');
  assert.match(chat, /icon:\s*MessageSquarePlus/);
  assert.match(chat, /section:\s*'secondary'/);
  assert.match(chat, /title:\s*t\('pill\.addToConversation'\)/);
  assert.doesNotMatch(chat, /label:\s*t\('pill\.addToConversation'\)/);
  assert.doesNotMatch(chat, /variant:\s*'primary'/);
  assert.doesNotMatch(chat, /label:\s*['"]/);

  const fullscreen = sliceActionBlock(tableNodeSrc, 'fullscreen-edit');
  assert.match(fullscreen, /icon:\s*Maximize2/);
  assert.match(fullscreen, /section:\s*'primary'/);
  assert.match(fullscreen, /label:\s*t\('pill\.fullscreen'\)/);
  assert.match(fullscreen, /title:\s*t\('pill\.fullscreen'\)/);

  assert.doesNotMatch(tableNodeSrc, /title="添加数据行"/);
  assert.doesNotMatch(tableNodeSrc, /title:\s*'添加到会话'/);
  assert.doesNotMatch(tableNodeSrc, /title:\s*'全屏编辑'/);
});
