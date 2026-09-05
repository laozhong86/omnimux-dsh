/**
 * ReferenceSlots 单元测试与契约验证：
 * 1. 空 / 未超限 / 超限三种态容量胶囊（参考图 x/y）计算与渲染正确；
 * 2. 超限状态下正确输出 model.compatibility.degradedWarning 警示文案；
 * 3. 点击解绑按钮触发 onUnbind(nodeId)；
 * 4. 100% 消费 DSH --dsw-* token，无裸色硬编码。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { calculateReferenceCapacity } from './referenceCapacity.ts';

const here = dirname(fileURLToPath(import.meta.url));
const refSlotsSrc = readFileSync(join(here, 'ReferenceSlots.tsx'), 'utf8');
const cssSrc = readFileSync(join(here, '../../../../theme/components.css'), 'utf8');
const nodeHeaderSrc = readFileSync(join(here, '../NodeHeader.tsx'), 'utf8');
const statusBadgeSrc = readFileSync(join(here, '../StatusBadge.tsx'), 'utf8');

test('calculateReferenceCapacity：空态渲染参考图 0/y 与非超限状态', () => {
  // 1. 指定 max=1，上游为空
  const emptyRes = calculateReferenceCapacity({
    upstreams: [],
    max: 1,
  });
  assert.equal(emptyRes.imageCount, 0);
  assert.equal(emptyRes.max, 1);
  assert.equal(emptyRes.isOver, false);
  assert.equal(emptyRes.capacityLabel, '参考图 0/1');
  assert.equal(emptyRes.warningText, undefined);

  // 2. 未声明 max（无能力模型）
  const noMaxRes = calculateReferenceCapacity({
    upstreams: [],
  });
  assert.equal(noMaxRes.imageCount, 0);
  assert.equal(noMaxRes.max, undefined);
  assert.equal(noMaxRes.isOver, false);
  assert.equal(noMaxRes.capacityLabel, '参考图 0/未公布');
  assert.equal(noMaxRes.warningText, undefined);
});

test('calculateReferenceCapacity：未超限状态正常展示当前容量', () => {
  // Issue #466: BUILTIN_MODEL_CAPABILITIES 已绞杀；容量必须来自显式 max / catalog。
  // 单图模型输入 1 张图片
  const singleImageRes = calculateReferenceCapacity({
    upstreams: [{ materialType: 'image' }],
    max: 1,
  });
  assert.equal(singleImageRes.imageCount, 1);
  assert.equal(singleImageRes.max, 1);
  assert.equal(singleImageRes.isOver, false);
  assert.equal(singleImageRes.capacityLabel, '参考图 1/1');
  assert.equal(singleImageRes.warningText, undefined);

  // 多图模型 max: 4 输入 3 张图片
  const multiImageRes = calculateReferenceCapacity({
    upstreams: [
      { materialType: 'image' },
      { materialType: 'image' },
      { materialType: 'image' },
    ],
    max: 4,
  });
  assert.equal(multiImageRes.imageCount, 3);
  assert.equal(multiImageRes.max, 4);
  assert.equal(multiImageRes.isOver, false);
  assert.equal(multiImageRes.capacityLabel, '参考图 3/4');
  assert.equal(multiImageRes.warningText, undefined);

  // catalog-driven 路径：modelId + catalog（无 BUILTIN 兜底）
  const catalog = {
    source: 'static-stub',
    text: [],
    image: [
      {
        id: 'catalog-img',
        label: 'Catalog Img',
        inputCapability: {
          modalities: ['text', 'image'],
          referenceImages: { min: 0, max: 2 },
        },
      },
    ],
    video: [],
    audio: [],
  };
  const viaCatalog = calculateReferenceCapacity({
    upstreams: [{ materialType: 'image' }],
    modelId: 'catalog-img',
    catalog,
  });
  assert.equal(viaCatalog.max, 2);
  assert.equal(viaCatalog.isOver, false);

  // 未知 modelId 且无 catalog → max undefined（fail closed，不回 BUILTIN）
  const unknown = calculateReferenceCapacity({
    upstreams: [{ materialType: 'image' }],
    modelId: 'gpt-image-2',
  });
  assert.equal(unknown.max, undefined);
  assert.equal(unknown.capacityLabel, '参考图 1/未公布');
});

test('calculateReferenceCapacity：超限状态转警示态并生成 degradedWarning', () => {
  // 单图模型（max: 1）输入 3 张图片
  const overRes = calculateReferenceCapacity({
    upstreams: [
      { materialType: 'image' },
      { materialType: 'image' },
      { materialType: 'image' },
    ],
    max: 1,
    warningTemplate: '输入超出模型推荐配额，执行时按前 {max} 张处理',
  });
  assert.equal(overRes.imageCount, 3);
  assert.equal(overRes.max, 1);
  assert.equal(overRes.isOver, true);
  assert.equal(overRes.capacityLabel, '参考图 3/1');
  assert.equal(overRes.warningText, '输入超出模型推荐配额，执行时按前 1 张处理');
});

test('ReferenceSlots 源码契约：包含容量胶囊、解绑按钮与 degradedWarning 警示', () => {
  assert.match(refSlotsSrc, /wf-ref-slot__capacity/);
  assert.match(refSlotsSrc, /wf-ref-slot--over/);
  assert.match(refSlotsSrc, /wf-ref-slot__warning/);
  assert.match(refSlotsSrc, /wf-ref-slot__unbind/);
  assert.match(refSlotsSrc, /onUnbind\?:\s*\(nodeId:\s*string\)\s*=>\s*void/);
  assert.match(refSlotsSrc, /onUnbind\(upstream\.nodeId\)/);
  assert.match(refSlotsSrc, /model\.compatibility\.degradedWarning/);
});

test('NodeHeader 与 StatusBadge 支持非破坏性降级/超限警示徽标', () => {
  assert.match(nodeHeaderSrc, /isDegraded/);
  assert.match(nodeHeaderSrc, /degradedWarning/);
  assert.match(nodeHeaderSrc, /wf-node-header__degraded-badge/);
  assert.match(statusBadgeSrc, /isDegraded/);
  assert.match(statusBadgeSrc, /wf-material-node__badge--degraded/);
});

test('ReferenceSlots 与降级徽标样式 100% 消费 DSH --dsw-* token', () => {
  assert.match(cssSrc, /\.wf-ref-slot__capacity/);
  assert.match(cssSrc, /\.wf-ref-slot__unbind/);
  assert.match(cssSrc, /\.wf-ref-slot--over/);
  assert.match(cssSrc, /\.wf-material-node__badge--degraded/);
  assert.match(cssSrc, /var\(--dsw-alias-warning/);
  assert.match(cssSrc, /var\(--dsw-alias-state-error-primary/);
});
