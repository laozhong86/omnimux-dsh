/**
 * 节点拖拽热区契约：标题栏不能整行 nodrag（Gxgen 只在重命名 input 上 nodrag），
 * 文本节点未聚焦不加 nodrag（点输入框也能拖），双击才进编辑。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const headerSrc = readFileSync(join(here, 'NodeHeader.tsx'), 'utf8');
const nodeSrc = readFileSync(join(here, 'index.tsx'), 'utf8');
const cssSrc = readFileSync(join(here, '../../../theme/components.css'), 'utf8');

test('标题栏根节点不是 nodrag，重命名输入才是', () => {
  assert.doesNotMatch(headerSrc, /className="wf-node-header nodrag"/);
  assert.match(headerSrc, /className="wf-node-header"/);
  assert.match(headerSrc, /className="wf-node-header__input nodrag"/);
});

test('文本节点 textarea 包在可拖壳里，未聚焦不加 nodrag', () => {
  // 生成态会追加 --gsc；壳类名仍以 wf-material-node__text-shell 为根
  assert.match(nodeSrc, /className=\{`wf-material-node__text-shell\$\{/);
  assert.match(nodeSrc, /wf-material-node__text-shell--gsc/);
  assert.match(nodeSrc, /wf-material-node__text-editor nowheel/);
  assert.match(nodeSrc, /textEditing \? ' nodrag'/);
  assert.match(nodeSrc, /readOnly=\{!textEditing\}/);
  assert.match(nodeSrc, /onDoubleClick/);
  assert.match(nodeSrc, /if \(!textEditing\) e\.preventDefault\(\)/);
});

test('文本壳有 padding 作为拖拽边', () => {
  assert.match(cssSrc, /\.wf-material-node__text-shell \{[\s\S]*?padding:\s*12px/);
});

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

test('MaterialNode 顶栏走通用 FloatingTopPill，有素材才显示，生成媒体也会话', () => {
  assert.match(nodeSrc, /from '\.\.\/FloatingTopPill'/);
  assert.match(nodeSrc, /hasNodeMaterial/);
  assert.match(nodeSrc, /shouldShowNodeToolbar/);
  assert.match(nodeSrc, /key:\s*'add-to-conversation'/);
  assert.doesNotMatch(nodeSrc, /from '\.\/FloatingTopPill'/);
  assert.match(nodeSrc, /showReplaceButton/);
});

test('MaterialNode chat 胶囊是次区图标：section secondary，无可见 label，title 仍走 i18n', () => {
  const chat = sliceActionBlock(nodeSrc, 'add-to-conversation');
  assert.match(chat, /section:\s*'secondary'/);
  assert.match(chat, /icon:\s*MessageSquarePlus/);
  assert.match(chat, /title:\s*t\('pill\.addToConversation'\)/);
  assert.doesNotMatch(chat, /label:\s*t\('pill\.addToConversation'\)/);
  assert.doesNotMatch(chat, /variant:\s*'primary'/);
  assert.doesNotMatch(chat, /label:\s*['"]/);

  const edit = sliceActionBlock(nodeSrc, 'edit');
  assert.match(edit, /section:\s*'primary'/);
  assert.match(edit, /label:\s*t\('pill\.edit'\)/);

  const copy = sliceActionBlock(nodeSrc, 'copy');
  assert.match(copy, /section:\s*'secondary'/);

  const split = sliceActionBlock(nodeSrc, 'split');
  assert.match(split, /section:\s*'secondary'/);
});
