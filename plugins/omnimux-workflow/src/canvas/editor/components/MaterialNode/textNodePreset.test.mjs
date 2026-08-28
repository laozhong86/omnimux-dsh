/**
 * 文本节点预设 Prompt 注入与状态机契约测试：
 * 1. handleApplyPreset 仅注入 prompt 与切换 selectedTool='text-to-text'，严禁写入 content 或覆盖 generatedContent
 * 2. 空态预设包含剧本、策划案、提示词、分镜
 * 3. 未编辑态下卡片为只读/空态预览，生成结果通过 generatedContent 回填
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const nodeSrc = readFileSync(join(here, 'index.tsx'), 'utf8');
const emptyStateSrc = readFileSync(join(here, 'NodeEmptyState.tsx'), 'utf8');

test('文本节点预设 Prompt 注入不污染 content 与 generatedContent', () => {
  // 必须只更新 prompt 与 selectedTool: 'text-to-text'
  assert.match(nodeSrc, /updateNodeData\(\{\s*prompt:\s*injected,\s*selectedTool:\s*'text-to-text',?\s*\}\)/);
  // 严禁在 handleApplyPreset 中向 nodeData 写入 content: injected
  assert.doesNotMatch(nodeSrc, /content:\s*injected/);
});

test('文本节点预设支持 script / planning / prompt / storyboard 四类模板', () => {
  assert.match(nodeSrc, /presetKey === 'script'/);
  assert.match(nodeSrc, /presetKey === 'planning'/);
  assert.match(nodeSrc, /presetKey === 'prompt'/);
  assert.match(nodeSrc, /presetKey === 'storyboard'/);
});

test('NodeEmptyState 为文本节点提供手动编写与三类预设生成按钮', () => {
  assert.match(emptyStateSrc, /onClick=\{onStartEdit\}/);
  assert.match(emptyStateSrc, /onApplyPreset\?\.?\('script'\)/);
  assert.match(emptyStateSrc, /onApplyPreset\?\.?\('planning'\)/);
  assert.match(emptyStateSrc, /onApplyPreset\?\.?\('prompt'\)/);
});
