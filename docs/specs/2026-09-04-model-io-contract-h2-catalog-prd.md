---
title: "增量 PRD：H2 审计 43 模型并切换 Catalog v1.1 契约投影"
id: "spec-model-io-contract-h2-catalog-prd"
type: "spec"
status: "proposed"
authority: "L2"
date: "2026-09-04"
updated: "2026-09-04"
authors: ["xu-qingchu"]
subsystem: "omnimux/catalog"
tags:
  - "model-contract"
  - "catalog"
  - "h2"
  - "operation-listed"
  - "coverage"
  - "mcc"
supersedes: []
superseded_by: null
related:
  - "docs/specs/2026-09-05-model-contract-docs-first.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-prd.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-design.md"
  - "docs/contracts/model-capabilities-matrix.md"
  - "docs/contracts/model-list-ownership.md"
  - "docs/contracts/hub.md"
  - "docs/contracts/docs-governance-standard.md"
  - "docs/contracts/plugin-git-pr.md"
  - "docs/contracts/dev-pipeline.md"
---

# 增量 PRD：H2 审计 43 模型并切换 Catalog v1.1 契约投影

> **2026-09-05 当前方法**：[模型合同文档优先方法修订](2026-09-05-model-contract-docs-first.md) 与 [模型 API 权威](../contracts/model-api-authority.md) 取代本文关于存在性、最小生成、边界探测、样本上限、真实执行和按执行翻转 `listed` 的可执行指令。本文保留原模型范围、历史快照与已发生执行；它们不得被当作当前输入合同。具体 EvoLink/APIMart 模型 API 文档未说明的字段、角色、数量、格式、时长和模式均为未知，不得猜测、试探或跨渠道借用。

> **文档地位**：L2 增量 PRD（Epic #463 / Issue #465）。**只描述相对 H1（#464 / PR #485 @ `b5652a1`）的变更**；全模态 I/O 契约原则、operation 原子、可见性三元组、Hide Don't Grey、accepts≠ready 等以 H1 正式 PRD 为准，本文不重复推倒。
> **作者**：许清楚（产品经理） · 2026-09-04
> **工作树**：`omnimux-dsh-wt-model-contract-catalog-465` / 分支 `agent/omnimux-model-contract-catalog-issue-465`
> **基线**：H1 foundation 已合入 main @ `b5652a1`；本轮 audit 快照见 §1.2。
> **原则金句（H2 增量）**：**43 ID 全处置，禁止无声遗漏**；**listed = operation 级，禁止 model 级一把梭**；**YAML 已声明 ≠ verified+live**；**强证据三路径仅 Batch A 单 op**；**冲突限制取更严**；**Catalog 权威 `models[]`，四列表按 `output.type` 派生**；**旧 JS 能力表降为 facade，解析失败不得回退**；**Hide Don't Grey 属 W2，H2 不做 Workflow UI**。
> **术语**：`omnimux` 一律称**执行中枢**；禁止称「网关」。
> **落盘**：`docs/specs/2026-09-04-model-io-contract-h2-catalog-prd.md`

---

## 1. 项目信息

| 字段 | 值 |
|---|---|
| Language | 中文 |
| Programming Language | 不规定实现栈（产品 PRD）；契约 SSOT 在 `omnimux/catalog`；投影切换在 hub `buildModelCatalog` / `modelCatalog` 缝 |
| Project Name | `model_io_contract_h2_catalog` |
| 主责子系统 | `omnimux/catalog`（审计 + Catalog v1.1 投影） |
| 关联 | Epic #463 · Issue #465 · 依赖 H1 #464 / PR #485 |
| 风险与合入 | **R1**；**单插件 PR**；**人工合并**；`pre-authorized: false`；**禁止** auto-enqueue；**不写 Prod**；合入前不物化公共 45120 |

### 1.1 原始需求复述（相对 H1）

H1 已建成 operation 级契约机器真源、admission、coverage auditor，且**故意**让实 YAML 全为 draft/none|stub、`listedOperations=[]`。H2 要在此基础上：

1. 把当前 **43** 个 runtime 模型 ID **100% 落到明确处置**（canonical / alias / verified+live / draft / unavailable / deprecated / quarantine），禁止无声遗漏；
2. 按 **operation 级**证据补证上架，只有 `research=verified ∧ execution=live ∧ profile 相容` 的 operation 进入 `listedOperations`；
3. 将 `buildModelCatalog()` **切换**为 Catalog v1.1 契约投影（权威扁平 `models[]`；兼容四列表仅按 operation `output.type` 派生）；
4. 旧 `media/catalog.js` / `text/catalog.js` 能力声明降为 **契约派生 facade**；契约解析失败 **不得**回退旧 JS 能力表；
5. 对账 runtime 与 YAML 冲突限制（Grok video max、Seedance multi-ref 等）**取更严**；清理 extra 幽灵 YAML；
6. **不**做 Workflow 兼容内核 / 模式 UI / 提交守卫（留给 W\* / H3）。

### 1.2 H1 合入后实测基线（本 worktree @ `b5652a1`）

| 项 | 值 |
|---|---|
| 命令 | `node scripts/verify-model-contracts.mjs --audit --json` |
| schemaVersion | `1.1` |
| contentFingerprint | `c4f4a78a53fce732` |
| admission | 0 error |
| runtime | **43** |
| contracts（YAML 模型行） | **17** |
| missing | **29** |
| extra | **3**（`deepseek-r1` · `deepseek-v3` · `gpt-4o`） |
| listedOperations | **`[]`**（H1 故意零 listed；H2 不得因「YAML 已有 op」自动放行） |

> 验收闸：H2 交付后 `--strict` 对 coverage 必须可成为失败门禁（见 §6）；fingerprint 须对 MIME/数量/大小/时长/op/output/准入/schemaVersion 变化敏感（继承 H1，H2 锁回归）。

---

## 2. 与 H1 的关系（增量边界）

| 维度 | H1（已合入，不变） | H2（本 PRD） |
|---|---|---|
| 契约机器真源 | registry / schema / loader / op 级 status / admission / coverage | **消费并补全**；不推倒 schemaVersion / op 级 listed 模型 |
| 实 YAML listed | 强制 `listedOperations=[]` | **逐 op 补证**后允许部分 `modelId#operationId` listed |
| `buildModelCatalog` | shadow only，仍读旧 JS SPECS | **切换**为契约 DTO 投影 |
| 旧 JS SPECS | runtime 列表真源 | **降为 facade**；解析失败不回退 |
| Workflow 画布 | 不改 | **仍不改**（W1–W3） |
| Hub submit guard | 不改 | **不改**（H3） |
| runtime limits / mapper 对账 | 明确非 H1 | **本轮做**（冲突取更严；无证据则 quarantine） |
| coverage CI | `--audit` 允许 missing | H2 起 **43 ID 全处置** 后 `--strict` 可红灯 missing/未处置 |

**非目标（本 Issue 明确不做）**见 §5。

---

## 3. 产品目标（正交 ×3）

| # | 目标 | 可度量口径 |
|---|---|---|
| G1 | **43 runtime ID 全处置闭环** | 每个 runtime ID ∈ {canonical 契约, alias→canonical, verified+live（至少一 op 可 listed）, draft, unavailable, deprecated, quarantine}；coverage 无「无声 missing」；测试锁定处置表 |
| G2 | **operation 级真实上架** | `listedOperations` 仅含证据充分且 profile 相容的 `modelId#operationId`；禁止 model 级 bool 一把梭；同模型未证 op 保持 draft/none|stub |
| G3 | **Catalog v1.1 投影为目录真源** | 权威 DTO = 扁平 `models[]`（透传 operations/inputs/output/research/execution/aliases/parameters/schemaVersion）；`text/image/video/audio` 四列表 **仅**按 `output.type` 派生；`speech_to_text` → text 列表侧（产出 text），**不得**因管理分组误入 audio 产出桶；旧 JS 表非真源 |

---

## 4. 用户故事

| ID | 故事 |
|---|---|
| US-H2-1 | 作为平台工程师，我希望 43 个 runtime 模型 ID 每一个都有书面处置（上架 / 别名 / 草稿 / 不可用 / 隔离），这样 CI `--strict` 不会放过无声遗漏。 |
| US-H2-2 | 作为创作者（经 Catalog 消费方），我希望目录里出现的生成能力都是 **operation 级**已验证且可执行的，而不是「模型名在列表里、点了某模式却挂」。 |
| US-H2-3 | 作为模型录入 Agent，我希望补证时按 Batch A/B/C 规则：强证据只放行单 op；冲突限制取更严；无 seam / 丢字段 / 403 的进 quarantine 或 unavailable，而不是伪造 official 上限。 |
| US-H2-4 | 作为执行中枢维护者，我希望 `buildModelCatalog` 与 verifier 读同一套 YAML 契约；契约坏了直接失败，而不是静默退回旧 JS 能力表继续「假目录」。 |
| US-H2-5 | 作为 QA，我希望 audit JSON 的 `listedOperations`、missing/extra、fingerprint 成为可回归金标；Batch A 三路径 listed 可测，且同模型其它 op **不**被顺带 listed。 |

---

## 5. 非目标

| 非目标 | 说明 |
|---|---|
| Workflow 兼容内核 / Fingerprint / CompatibilityEngine | W1 |
| Hide Don't Grey 列表 UI、自动选模、mode UI（0/1/≥2） | **W2**；H2 只提供正确的 listed 数据面 |
| Submit guard / 绞杀画布 BUILTIN 穷举 | W3 / H3 |
| 最终 Hub submit guard 产品化 | H3 |
| ASR 真实 `speechToText` seam 实现 | 契约可声明；seam 未 live 前 Whisper **unavailable**，画布不列 |
| document 画布消费 | 继承 H1 |
| 未经证据上架新厂商 / 新 SKU | 禁止 |
| 定价 / HITL | 主产品线 |
| Prod 物化 / 合入前公共 45120 物化 | 禁止 |
| 本 PRD 替代架构设计 | 架构师另出 H2 增量设计 / 任务表；本文不规定类名与文件级实现 |

---

## 6. 需求池（P0 / P1 / P2）

### 6.1 P0 — Must have（#465 闭环）

| ID | 需求 | 验收要点 |
|---|---|---|
| **P0-1 全量处置表** | 43 个 runtime ID **100%** 有处置结果；处置枚举：`canonical`（有正式 YAML 且 id 即真源）/ `alias`（归一到另一 canonical）/ `verified+live`（至少一 op listed，作为处置标签时须同时满足 op 级条件）/ `draft` / `unavailable` / `deprecated` / `quarantine` | 测试或固定 fixture 锁定 43 行处置；`coverage_missing` 在 strict 下为 0（或 missing 仅当显式非 runtime——本轮目标 runtime 全覆盖）；禁止「有 YAML 草稿但未标记处置」 |
| **P0-2 operation 级 listed** | listed 判定继承 H1：`contractComplete ∧ research=verified ∧ execution=live ∧ adapterProfileCompatible ∧ gate`；报告权威字段 **`listedOperations`**（`modelId#operationId`）；`model.listed` 仅摘要 | 不得因 model 级 verified/live 放行未证 op；Catalog/选择数据面以 op.listed 为准 |
| **P0-3 禁止 YAML 声明即上架** | H1 实 YAML 当前全 draft/none\|stub。H2 **不得**因「operations[] 已写」自动改 verified+live | 代码路径 / 录入 SOP：补证必须写 evidence（docUrl 与/或 dated probe）；无证据保持 draft |
| **P0-4 Batch A 强证据（仅三 op）** | 仅以下可在证据复核后标 verified+live 并 listed：① `seedance-2-0-fast` **`text_to_video`** ② `gpt-image-2` **`text_to_image`** ③ `grok-imagine-image` **`text_to_image`** | 同模型其它 op（如 multi_reference / first_frame / video_multi_ref）**必须另证**，默认保持 draft；测试断言这三键可在 listed 集合中，且不强制其它 op 同在 |
| **P0-5 Batch B 探针纪律** | 其余有希望上架的 ID：existence → 最小生成 → 输入数量/角色边界递增 probe；官方来源优先；探测注明日期 | 无可信输入上限或执行适配 → quarantine 或 draft，**不得**捏造 official 上限；可用 `limitSource.kind=policy_conservative` 并标注 |
| **P0-6 Batch C / 锁定 quarantine** | 无 seam、wire 丢字段、403 史未复测、表外/内部不明 SKU → unavailable 或 quarantine。**产品已锁定**（工程不得推翻）：见 §7 | 画布/Catalog listed 不含这些 ID 的任何 op（alias 指向 quarantine 的也不 listed） |
| **P0-7 冲突限制取更严** | Grok video：YAML max 与 runtime 冲突 → 验证前 **max1**；Seedance multi-ref：冲突 → 验证前 **单图/首帧**（不承诺 max4） | 契约与 runtime 对账后写入 YAML；over-claim 视为缺陷 |
| **P0-8 nanobanana 身份** | canonical = 官方 **underscore** ID（`nano_banana_*`）；**hyphen**（`nanobanana-*`）= **alias**；UI/目录 **禁止双列**；有 403 史 SKU 成功复测前 **quarantine** | resolveModelId 归一；duplicate 双列测试失败 |
| **P0-9 extra 幽灵清理** | YAML extra：`deepseek-v3` / `deepseek-r1` / `gpt-4o` → **删除或明确 alias** 到现存 runtime canonical；**禁止**进入 Catalog v1.1 listed；禁止无 runtime 的幽灵上架 | audit `extraInYaml` 对「未 alias 且未删除」为 0 或仅允许已声明 alias 行且不 listed |
| **P0-10 Catalog v1.1 投影** | `buildModelCatalog()`（及 `modelCatalog.list` 等价出口）改为契约 DTO：权威 **`models[]`**；兼容 `text/image/video/audio` **仅**由各 listed（或产品定义的可见）operation 的 **`output.type`** 派生 | `speech_to_text` 产出 text → 不得进 audio **产出**桶；透传 operations、slots、output、parameters、research、execution、aliases、schemaVersion |
| **P0-11 defaults** | `defaults.byOperation`（或等价）有稳定配置；旧 kind 级 defaults 仅兼容投影 | 新节点初始模型不依赖已删除幽灵 ID |
| **P0-12 旧真源收口** | `media/catalog.js` / `text/catalog.js` 能力声明由 contract **派生**或变为 **兼容 facade**；**契约解析失败不得回退旧表**（fail-fast + typed reason） | 故意损坏 specs 时 list/verify 失败，而非静默旧 SPECS |
| **P0-13 cordis 交叉验证** | `cordis.patch.yml` 仍拥有聊天 composer 列表，但须与 audited contracts **交叉验证**（composer 中的 id 须能 resolve 到契约 canonical/alias） | 漂移 → verifier 或专用门禁失败 |
| **P0-14 fingerprint 敏感** | 修改任一 MIME、数量、大小、时长、operation、输出或准入状态 → contentFingerprint 变化 | 回归测试锁定 |
| **P0-15 门禁** | `pnpm verify:model-contracts`（含 `--strict` 在处置完成后对 coverage 失败）；`pnpm verify:models` keyless 可 skip 但须记录；`pnpm --filter omnimux test`；`pnpm verify:gates` / diff-aware L0 | CI 红灯可解释；本 Issue **无 UI/GIF** 要求 |
| **P0-16 合入纪律** | R1、人工合入、不写 Prod、不合入前不物化 45120 | 见 §9 |

### 6.2 P1 — Should have

| ID | 需求 | 验收要点 |
|---|---|---|
| P1-1 | Batch B 中高流量 SKU（如 `veo-3.1-fast`、`seedream-*`、主路径 text 多模态）在证据充足时扩 listed | 仍 op 级；不降低 Batch A 标准 |
| P1-2 | 覆盖率 / 处置矩阵人读报告（模态 × ID × 处置 × listed ops） | 便于录入 Agent 补洞；非创作者 UI |
| P1-3 | alias 与 deprecated 的迁移说明写入 L1/ownership 交叉链接 | 文档可发现 |
| P1-4 | live gateway 探测（有 key）结果归档到 evidence，日期可追溯 | 缺 key 时 skip 有记录，不冒充 verified |

### 6.3 P2 — Nice to have

| ID | 需求 | 验收要点 |
|---|---|---|
| P2-1 | 批量录入向导 / 官方文档抓取辅助 | 仍须人工确认证据 |
| P2-2 | 处置状态对外只读 Admin 面 | 非本迭代必须 |
| P2-3 | 与定价 SKU 映射预研 | 本仓不实装定价 |

---

## 7. 历史处置与批次计划（输入合同方法已替代）

### 7.1 已锁定 quarantine / unavailable（不得推翻）

| ID / 范围 | 处置 | 理由（产品） |
|---|---|---|
| `whisper-1` | **unavailable** | audio→**text**；无 `speechToText` live seam；**画布/目录 listed 不列** |
| `kling-avatar` | **unavailable** | `digital_human` 需 audio；当前 video mapper 丢 `audioTrack`；执行未闭环 |
| `omni_flash` | **quarantine**（无证据时） | 内部/不明 SKU；禁止幽灵 alias |
| `kling-o1` / `kling-o3` / `kling-v3-motion-control` | **quarantine**（无证据时） | 无官方/执行证据不造 alias、不上架 |
| Grok video 参考图数量 | 契约 **max1**（验证前） | YAML 与 runtime 冲突取更严 |
| Seedance multi-ref | 验证前 **单图/首帧** | 不承诺未对账的 max4 |
| `nanobanana-*`（hyphen） | **alias** → underscore canonical | 禁止 UI 双列；403 史复测前 quarantine |
| extra `deepseek-v3` / `deepseek-r1` / `gpt-4o` | 删除或 **明确 alias**；**不 listed** | 禁止幽灵上架 |

### 7.2 已有契约且命中 runtime（14）— 仅按 op 补证

| YAML id | 已声明 operations（H1 现状均为 draft） | H2 默认 |
|---|---|---|
| `gpt-image-2` | `text_to_image`, `multi_reference` | **Batch A 仅 t2i**；multi_reference 另证 |
| `grok-imagine-image` | `text_to_image`, `multi_reference` | **Batch A 仅 t2i**；multi_ref 另证 |
| `seedance-2-0-fast` | `text_to_video`, `first_frame`, `video_multi_ref` | **Batch A 仅 t2v**；multi_ref 验证前保守 |
| `seedance-2-5` / `seedance-2-0` | t2v / first_frame /（部分 multi_ref） | **非**强证据默认，不得顺带 listed |
| `kling-v3` / `kling-v2-6` | t2v / first_frame / first_last_frame | Batch B 逐 op |
| `kling-avatar` | `digital_human` | **unavailable** |
| `veo-3.1` | t2v / video_multi_ref | 与 missing `veo-3.1-fast` **分开**处置 |
| `grok-imagine-video-1-5` | t2v / first_frame / video_multi_ref | max 冲突 → **max1** |
| `wan-3.0` | t2v / first_frame | Batch B |
| `suno` | `text_to_music` | 有 YAML ≠ live |
| `gpt-4o-mini-tts` | `text_to_speech` | 有 YAML ≠ live |
| `whisper-1` | `speech_to_text` | **unavailable** |

### 7.3 coverage_missing（29）— 必须逐 ID 落处置

**Text / 多模态（11）**
`claude-opus-4-6` · `claude-opus-5` · `deepseek-v4-flash-vision-exp` · `deepseek-v4-pro` · `gemini-3.1-pro-preview` · `gemini-3.7-flash` · `glm-5.3` · `gpt-5.5` · `gpt-5.6-sol` · `grok-4.6` · `kimi-k3`

**Image（12）**
`gpt-image2-hd` · `grok-imagine-image-quality` · `midjourney` · `midjourney-7` · `midjourney-8.1` · `midjourney-niji-7` · `nano_banana_2` · `nano_banana_pro` · `nanobanana-2` · `nanobanana-pro` · `seedream-4.5` · `seedream-5.0-pro`

**Video（6）**
`kling-o1` · `kling-o3` · `kling-v3-motion-control` · `omni_flash` · `seedance2.5-stable-max-720p` · `veo-3.1-fast`

### 7.4 批次顺序（产品）

```text
Batch A  强证据三 op → verified+live（仅这三键）
    ↓
Batch B  existence → 最小生成 → 槽位边界；冲突取更严
    ↓
Batch C  无 seam / 丢字段 / 403 / stale → unavailable | quarantine
    ↓
投影切换  buildModelCatalog → 契约 DTO；四列表 output.type 派生；facade 化旧表
    ↓
门禁      strict coverage + fingerprint + 处置表测试
```

---

## 8. 历史验收矩阵（输入合同部分已替代）

| # | 完成标准 | 优先级 |
|---|---|---|
| H2-D1 | 本增量 PRD `proposed`→评审后可 `accepted`；架构师输出 H2 增量设计/任务表（非本文职责） | P0 |
| H2-D2 | 43 runtime ID 处置表 100% 覆盖；strict 下无未处置 missing | P0 |
| H2-D3 | `listedOperations` 仅为 op 级；Batch A 三键可 listed；同模型未证 op **不** listed | P0 |
| H2-D4 | 实 YAML **无**「仅因声明 op」而产生的假 verified+live | P0 |
| H2-D5 | §7.1 锁定 quarantine/unavailable 生效；whisper / kling-avatar 不在 listed | P0 |
| H2-D6 | Grok video max1、Seedance multi-ref 保守限制已写入契约 | P0 |
| H2-D7 | nanobanana hyphen=alias、underscore=canonical；无双列 | P0 |
| H2-D8 | extra 三 ID 删除或明确 alias；不 listed；无幽灵上架 | P0 |
| H2-D9 | Catalog 权威 `models[]`；四列表按 `output.type`；STT→text 产出语义正确 | P0 |
| H2-D10 | 旧 JS 能力表 facade；解析失败不回退 | P0 |
| H2-D11 | cordis composer 与 contracts 交叉验证 | P0 |
| H2-D12 | fingerprint 对契约/defaults/gate/schemaVersion 变化敏感 | P0 |
| H2-D13 | `pnpm --filter omnimux test`、`verify:model-contracts`、`verify:models`（keyless 规则）、`verify:gates` 通过 | P0 |
| H2-D14 | 无 Workflow UI / 无 H3 submit guard / 无 Prod / 无合入前 45120 物化 | P0 |
| H2-D15 | Issue #465 DoD checkbox 与本文对齐并可勾选 | P0 |

### 附录 — listed 真值表示意（H2）

| modelId#operationId | 证据 | 期望 listed |
|---|---|---|
| `seedance-2-0-fast#text_to_video` | Batch A 强证据 + profile 相容 | 允许 true（复核后） |
| `seedance-2-0-fast#first_frame` | 未另证 | **false** |
| `gpt-image-2#text_to_image` | Batch A | 允许 true |
| `gpt-image-2#multi_reference` | 未另证 | **false** |
| `grok-imagine-image#text_to_image` | Batch A | 允许 true |
| `whisper-1#speech_to_text` | 无 seam | **false**（unavailable） |
| `kling-avatar#digital_human` | mapper 丢 audio | **false**（unavailable） |
| `deepseek-v3#chat` | extra 幽灵 | **不得** listed（删或 alias） |
| `omni_flash#*` | 无证据 | **false**（quarantine） |

---

## 9. 环境、证据与合并纪律

| 项 | 要求 |
|---|---|
| 风险 | **R1** |
| PR | 单插件（`omnimux`）指向 `omnimux-ai/omnimux-dsh` `main` |
| 合并 | **人工**；`pre-authorized: false`；**禁止** Agent enqueue |
| UI 证据 | 本 Issue **无**创作者 UI 变更 → **无** GIF / ego-browser 强制项 |
| 验证 | test + verify:model-contracts（audit→strict）+ verify:models + verify:gates |
| 物化 | **不写 Prod**；**合入前**不物化公共 45120 |
| 基线 | 自 `b5652a1`（或其后含 H1 的 main）开独立 worktree；禁止叠未合并分支 |

---

## 10. 待确认问题

| # | 问题 | 默认假设（未回覆则按此） | 影响 |
|---|---|---|---|
| Q1 | Batch A 三 op 的「强证据」是否仍需在 H2 内做一次 dated 回归 probe，还是采信既有仓内 evidence 即可？ | **需要一次可引用的 dated 复核记录**（可 keyless 引用既有 report + 注明日期）；不得无记录改 verified | 上架合规 |
| Q2 | text 11 个 missing：H2 是否要求全部达到 listed，还是允许大量 `draft` 契约占位只要「有处置」？ | **P0 只要求 100% 处置 + 合法契约或 alias/quarantine**；listed 不强制 11 全 live（聊天 composer 仍受 cordis 交叉验证约束） | 范围 |
| Q3 | `deepseek-v3/r1/gpt-4o` 优先「删除」还是「alias 到 v4/现行 id」？ | **能证明 wire 仍有流量则 alias；否则删除**；由架构师查 runtime 引用后定，产品禁止 listed | extra 清理 |
| Q4 | Catalog 投影切换是否分 feature flag 一版？ | **P0 直接切契约真源**；解析失败 fail-closed；不设长期双真源 flag | 回滚面 |
| Q5 | `verify:models` live gateway 无 key 时，是否阻断 H2 合入？ | **不阻断**；须在 PR 说明 skip；有 key 的环境应尽量跑 | CI |
| Q6 | quarantine 是否在 DTO 中对下游暴露 id（隐藏 vs 标记）？ | **H2：不进入 listed/四列表产出**；DTO 可保留治理字段供 verifier；创作者 UI 隐藏属 W2 | 数据面 |

---

## 11. 给架构师的输入摘要（产品边界，不规定实现）

1. **继承** H1 design：op 级 research/execution/listed、`schemaVersion: "1.1"`、profile 相容、promptPolicy、content-hash、fail-closed CLI。
2. **H2 增量核心**：43 处置表 + 逐 op 补证 + runtime 限制对账（更严）+ **投影切换** + facade 旧表 + strict coverage。
3. **Batch A 白名单仅三 op**；其余默认不 listed。
4. **锁定** whisper / kling-avatar / omni_flash / kling-o1·o3·motion-control / nanobanana 规则 / extra 三 ID。
5. **不做** W1–W3 / H3 / Prod / Workflow UI（含 Hide Don't Grey 交互）。
6. 输出：H2 增量设计 + 工程任务表 + 回滚策略（投影切换可回滚 list.js，YAML 证据保留）。

---

## 12. 落盘与关联

| 项 | 路径 |
|---|---|
| 本增量 PRD | `docs/specs/2026-09-04-model-io-contract-h2-catalog-prd.md` |
| H1 PRD（基线） | `docs/specs/2026-09-04-model-io-contract-compatibility-prd.md` |
| H1 Design（基线） | `docs/specs/2026-09-04-model-io-contract-compatibility-design.md` |
| Specs 索引 | `docs/specs/README.md` |
| YAML 真源 | `plugins/omnimux/src/catalog/specs/*-models.yaml` |
| Issue | https://github.com/omnimux-ai/omnimux-dsh/issues/465 |

---

**文档结束（许清楚 · 软件产品经理 · 2026-09-04 · status: proposed · H2 增量）**
