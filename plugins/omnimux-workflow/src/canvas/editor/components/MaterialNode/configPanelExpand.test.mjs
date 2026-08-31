/**
 * Issue #325: ConfigPanel 提示词原地展开，不再走全局 CustomModal。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const panelSrc = readFileSync(join(here, 'ConfigPanel/index.tsx'), 'utf8');
const cssSrc = readFileSync(join(here, '../../../theme/components.css'), 'utf8');
const zhSrc = readFileSync(join(here, '../../../i18n/dict.zh.ts'), 'utf8');
const enSrc = readFileSync(join(here, '../../../i18n/dict.en.ts'), 'utf8');

test('ConfigPanel 已彻底移除 CustomModal 与 expandedModal 弹窗', () => {
  assert.doesNotMatch(panelSrc, /CustomModal/);
  assert.doesNotMatch(panelSrc, /expandedModal/);
  assert.doesNotMatch(panelSrc, /setExpandedModal/);
  assert.doesNotMatch(panelSrc, /wf-config-panel__modal-textarea/);
  assert.doesNotMatch(cssSrc, /\.wf-config-panel__modal-textarea/);
});

test('ConfigPanel 原地展开切换：isExpanded / Minimize2 / Maximize2 / 动态 rows', () => {
  assert.match(panelSrc, /const \[isExpanded, setIsExpanded\] = useState\(false\)/);
  assert.match(panelSrc, /setIsExpanded\(\(prev\) => !prev\)/);
  assert.match(panelSrc, /Minimize2/);
  assert.match(panelSrc, /Maximize2/);
  assert.match(panelSrc, /isExpanded \? <Minimize2 size=\{13\} \/> : <Maximize2 size=\{13\} \/>/);
  assert.match(panelSrc, /rows=\{isExpanded \? 8 : 3\}/);
  assert.match(panelSrc, /wf-config-panel__prompt-input--expanded/);
  assert.match(panelSrc, /t\('panel\.collapse'\)/);
  assert.match(panelSrc, /t\('panel\.expand'\)/);
});

test('展开态仍保留底部参数栏与生成按钮，不拆成第二套编辑面', () => {
  assert.match(panelSrc, /wf-config-panel__bottom-bar/);
  assert.match(panelSrc, /<GenerateButton/);
  assert.match(panelSrc, /<CustomSelect/);
  assert.match(panelSrc, /wf-config-panel__char-counter/);
  assert.match(panelSrc, /wf-config-panel__ref-slots-group/);
  assert.equal((panelSrc.match(/<textarea/g) || []).length, 1);
});

test('prompt 输入框展开样式提供更高编辑视野与过渡', () => {
  assert.match(cssSrc, /\.wf-config-panel__prompt-input--expanded \{[\s\S]*?min-height:\s*160px/);
  assert.match(cssSrc, /\.wf-config-panel__prompt-input \{[\s\S]*?transition:\s*min-height/);
  assert.match(cssSrc, /\.wf-config-panel__expand-btn \{[\s\S]*?width:\s*22px/);
});

test('展开 / 收起文案入典', () => {
  assert.match(zhSrc, /'panel\.expand': '展开'/);
  assert.match(zhSrc, /'panel\.collapse': '收起'/);
  assert.match(enSrc, /'panel\.expand': 'Expand'/);
  assert.match(enSrc, /'panel\.collapse': 'Collapse'/);
});
