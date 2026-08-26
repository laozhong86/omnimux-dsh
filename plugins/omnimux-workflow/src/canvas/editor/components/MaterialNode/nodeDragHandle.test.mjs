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
  assert.match(nodeSrc, /className="wf-material-node__text-shell"/);
  assert.match(nodeSrc, /wf-material-node__text-editor nowheel/);
  assert.match(nodeSrc, /textEditing \? ' nodrag'/);
  assert.match(nodeSrc, /readOnly=\{!textEditing\}/);
  assert.match(nodeSrc, /onDoubleClick/);
  assert.match(nodeSrc, /if \(!textEditing\) e\.preventDefault\(\)/);
});

test('文本壳有 padding 作为拖拽边', () => {
  assert.match(cssSrc, /\.wf-material-node__text-shell \{[\s\S]*?padding:\s*12px/);
});
