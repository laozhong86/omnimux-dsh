---
title: "OmniMux 全模态模型能力契约与治理规范 (MCC 1.0)"
id: "contract-model-capability-governance"
type: "contract"
status: "living"
authority: "L1"
date: "2026-09-04"
updated: "2026-09-04"
authors: ["qi-huolin", "xu-qingchu", "gao-jianyuan"]
subsystem: "omnimux/catalog"
tags:
  - "mcc"
  - "model-contract"
  - "operation"
  - "catalog"
  - "schemaVersion-1.1"
supersedes: []
superseded_by: null
related:
  - "docs/contracts/hub.md"
  - "docs/contracts/model-list-ownership.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-prd.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-design.md"
---

# OmniMux 全模态模型能力契约与工程治理规范 (MCC 1.0)

> **执行中枢** = `omnimux`。能力校验与上架门禁发生在执行中枢 catalog / 提交路径，**不得**称网关。
> **机器真源**（与本文人读表双轨）：`plugins/omnimux/src/catalog/contract/operation-registry.json`、`model-capability.schema.json`、`adapter-profiles.json`、`specs/*.yaml`。
> **设计**：[2026-09-04 model I/O design](../specs/2026-09-04-model-io-contract-compatibility-design.md)（H1 shadow · **operation 级 listed** · Contract v1.1 **`schemaVersion: "1.1"`** · H2 投影）。
> **R1.1 合同纠偏**：model capability YAML/normalized **根字段 canonical 名是 `schemaVersion`**（值精确 `"1.1"`），**不是**根 `version`。把批准 Contract v1.1 改名为 `version` 属**未授权漂移**。

## 1. 核心治理原则

1. **单一真源 (Single Source of Truth)**
   模型支持的 **operation**、输入槽、**显式产出**、MIME / 数量 / 体积 / 时长、参数空间，定义在 `plugins/omnimux/src/catalog/specs/*.yaml`，并由 Hub `operation-registry.json` + `model-capability.schema.json` + `adapter-profiles.json` 机器校验。严禁在前端组件、Workflow 或私有适配器中硬编码第二套穷尽 operation 枚举。

2. **隐藏优于置灰 (Hide, Don't Grey)**
   选择 UI 中：不支持的模型 / operation **100% 隐藏**，禁止灰色不可用主路径。当有效 operation 为 0 或 1 时，不渲染生成方式分段栏；0 时并阻止生成。

3. **运行时前置拦截 (Fail-Fast + typed rejects)**
   执行中枢与画布提交路径在调用厂商前，按当前 model + **operation** + 输入槽契约校验。超标抛出**稳定英文字符串原因码**（typed reason），严禁把无效请求打给模型厂商。

4. **新模型准入 (No Spec, No Model)**
   新增模型必须先有完整 YAML 契约（含显式 `output.type`、槽位限制与上限来源）。无契约不得进入可选择目录。

5. **无执行面不上架 (No Executor / No Evidence, No List) — operation 原子**
   仅有纸面 YAML 不足。画布 / 选择列表资格见 §4：**listed 的原子单位是 operation**（键建议 `modelId#operationId`）。需要该 op 的 research 验证、execution live、**与 adapter profile 在 operation/output/seam 上相容**，且 gate 允许。
   - **禁止**仅因 model 级 `research: verified` + `execution: live` 把该模型**所有** operation 一并放行。
   - `model.listed` 若存在，仅为 `any(operation.listed)` 的**摘要**，不得作为 UI 放行全 op 的依据。
   - 无 speechToText 等执行缝时，对应 ASR **operation** 不得 listed。
   - 粗 `videoGenerate` profile **不得**自动使 `digital_human` listed。

6. **体积非全局 100MB**
   **不存在**「全平台统一 100MB 模型硬顶」作为 MCC 政策。每输入槽声明真实或保守政策上限，并记录 `limitSource`。无可信边界 → 该 **operation** draft / 不可 listed。禁止默填全局 ceiling。

7. **Prompt 政策由 registry 声明**
   每个标准 operation 在 `operation-registry.json` 携带 `promptPolicy: required | optional | none`。
   - YAML **应显式**列出所需 prompt slot（减少 normalize 魔法）。
   - 兼容 normalize 若补槽，**仅** `required` 可注入；`speech_to_text` / 明确 source-only / `promptPolicy: none` **不得**强制 prompt；`digital_human` 等为 `optional` 时不得自动 min=1。

8. **H1 诚实上架**
   H1（#464）shadow 阶段：现有实文件 specs **不得**对任何 operation 做 listed claim（normalize 后 `listedOperations = []`）。`verified`/`live` 正例仅用于 **fixtures** 验证判定逻辑。逐 op 补证上架与 runtime constraints 对账属 **H2**。

## 2. 全模态标准 operation（首批 17）

> 人读表。机器枚举以 `operation-registry.json` 为准（含 `promptPolicy`）；扩展先改 registry + 本表，再录入 YAML。
> **Workflow 不得复制本表为 TypeScript 穷尽联合真源**；DTO 使用 `string` + 中枢下发的 metadata。

| 模态族 | operation ID | 中文名 | 典型输入 | **output.type（必须显式）** | promptPolicy（机器表为准） |
|---|---|---|---|---|---|
| 文本 | `chat` | 纯文本对话 | prompt（可无媒体槽） | `text` | required |
| 文本 | `vision_chat` | 图文多模态对话 | prompt + reference 图 | `text` | required |
| 文本 | `document_analyze` | 文档解析 | document | `text` | optional/required（registry） |
| 图像 | `text_to_image` | 文生图 | prompt | `image` | required |
| 图像 | `image_to_image` | 图生图 | source 图 ± prompt | `image` | optional 或 required（registry） |
| 图像 | `multi_reference` | 多图主体参考 | reference 多图 | `image` | optional/required |
| 图像 | `inpaint_outpaint` | 局部重绘 | source + mask | `image` | optional/required |
| 视频 | `text_to_video` | 文生视频 | prompt | `video` | required |
| 视频 | `first_frame` | 首帧驱动 | first_frame 图 ×1 | `video` | optional/required |
| 视频 | `first_last_frame` | 首尾帧过渡 | first_frame + last_frame | `video` | optional/required |
| 视频 | `video_multi_ref` | 多图风格/主体参考 | reference 多图 | `video` | optional/required |
| 视频 | `digital_human` | 数字人/对口型 | 图/视频 + 音频驱动 | `video` | **optional**（不得强制 prompt） |
| 视频 | `video_edit` | 视频编辑/重绘 | source 视频 ± 参考 | `video` | optional/required |
| 音频 | `text_to_speech` | 语音合成 | 文本 | `audio` | required |
| 音频 | `voice_clone` | 声音克隆 | voice_sample 音频 | `audio` | optional/required |
| 音频 | `text_to_music` | 音乐创作 | 文本 ± 参考音频 | `audio` | required |
| 音频 | `speech_to_text` | 语音转文字 | source **音频** | **`text`（非 audio）** | **none** |

参数（aspectRatio、duration、seed…）**不是** operation，挂在 model/operation 的 `parameters` 上。

## 3. 契约字段（录入时必须研究清楚）

### 3.0 文档根与 Contract v1.1（**硬**）

每个 `specs/*-models.yaml`（及 normalize 后的 model capability 文档）**必须**：

| 字段 | 约束 |
|---|---|
| **`schemaVersion`** | **必填**；精确字符串 **`"1.1"`**（Contract v1.1）。**这是唯一契约 schema 版本根字段** |
| **`models`** | **必填** array |
| `managementGroup` / `modality` | 可选；仅文件管理，**不**推断 `output.type` |
| ~~根 `version`~~ | **非** formal 字段。H1 正式 specs **不得**再写。loader 可对 **fixture/历史输入** 将仅有的 legacy 根 `version` **迁移**为 `schemaVersion: "1.1"`；**不得**与 `schemaVersion` 并存；conflict / missing → admission **error**。normalize / index / fingerprint / audit **只暴露 `schemaVersion`** |

**不同文档、不要机械改名**：

- `operation-registry.json`、`adapter-profiles.json` 是**注册表文档**，可继续使用自身根字段 **`version`**（如 `"1.0.0"`）。
- **仅** model capability contract 根使用 **`schemaVersion`**。

Normative JSON Schema（`model-capability.schema.json`）`required` = **`["schemaVersion", "models"]`**；正式 schema **只写 canonical**（legacy 在 loader pre-normalization，不靠 schema anyOf 双根）。

### 3.1 Model metadata、Operation 与显式产出

每个 **model** 必须声明：

- `id` / `label`：非空
- **`aliases`（可选，model metadata）**：string[]；唯一、非空元素；用于 **runtime / wire model ID 归一**到 `model.id`；跨 model 全局唯一（含不得抢占他模 `id`）
- `operations`（或遗留 `modes`→normalize 为 operations）
- 可选 model 级 `parameters` / `research` / `execution`（**仅 defaults**）

每个模型的每个 **operation** 必须声明：

- `id` ∈ 上表 / registry
- **`output.type`**：`text` | `image` | `video` | `audio`（**禁止**从文件管理分组或输入模态推断）
- `output.allowedMimes` / `min` / `max`（可选；若出现则 allowedMimes 为非空字符串数组，min/max 为有限数字且 min≤max）
- `inputs[]`：输入槽列表
- **`research` / `execution`（operation 级）**：可省略并继承 model defaults，但 **normalize 后每个 operation 必须物化自身** research 与 execution
- **`aliases`（可选，operation 级）**：**仅** legacy **operation 名**附属声明（定界）；**不是** model wire-id 真源。全局旧 GenerationMode→标准 op 仍以 Hub `legacy-operation-map` 为准

**UI display label** ≠ `aliases`（见 model-display-label 合同）。

### 3.2 Input slot

| 字段 | 含义 |
|---|---|
| `slot` | 稳定名 |
| `type` | `text` / `image` / `video` / `audio` / `document` |
| `role` | `prompt` / `first_frame` / `last_frame` / `reference` / `source` / `voice_sample` / `mask` / … |
| `source` | `user` / `upstream_edge` / `node_field` |
| `min` / `max` | 数量（有限数字，min≤max，≥0） |
| `allowedMimes` | 允许 MIME（数组元素非空字符串） |
| `maxSizeMb` | 单素材体积上限（MB）；比较时按 MiB 字节 |
| `maxDurationSec` | 时长上限（秒） |
| `limitSource` | 上限来源：`official_docs` / `measured` / `policy_conservative` + url/note |

### 3.3 文件分组 vs Catalog 投影

- YAML 可按管理分组拆分文件（text/image/video/audio-models.yaml），**分组不是 output 真源**。
- Catalog v1.1 权威集合为 **`models[]`**。
- 对外四列表（text/image/video/audio）仅为 **按 `output.type` 的兼容投影**（H2 起；H1 shadow 不改 runtime 列表实现）。
- 投影与画布过滤必须以 **listed operation** 为准。

### 3.4 Adapter profile

`adapter-profiles.json` 为**独立注册表文档**（自身可有根 `version`，**不是** model `schemaVersion`）。每个 profile 至少声明：

| 字段 | 含义 |
|---|---|
| `id` | profileId |
| `seam` | 执行缝名或 null |
| `status` | `live` \| `stub` \| `unavailable` |
| `operations` | 该 profile **显式支持**的 operation id 列表；**每一项必须 ∈ operation-registry** |
| `outputTypes` | 相容的 output.type 列表 |
| `slotRoles` / `notes` | 可选 |

**Profile 文档合法性（H1 强制，不可推 H2）**：`validateAdapterProfiles` 必须拒绝 `operations[]` 中的未知 operation（code **`profile_operation_unknown`** 或可定位的 `schema_invalid`）。未知 op = **malformed profile**；**`--audit` 与 `--strict` 均为 error**（admission fail），不是 coverage 警告。

当 operation 声明 `execution.status: live` 时，admission 必须校验：profile 存在且 live，**且** `operation.id ∈ profile.operations`，**且** `output.type ∈ profile.outputTypes`，seam 一致（若两侧声明）。不相容 → `profile_incompatible`（不可 listed）。

## 4. research / execution / listed（operation 级）

| 维度 | 值 | 含义 |
|---|---|---|
| `research.status` | `draft` \| `verified` \| `rejected` | **该 operation** 研究完备；`verified` 需 docUrl 等依据 |
| `execution.status` | `none` \| `stub` \| `live` | **该 operation** 执行面 |
| `execution.profileId` | string | 映射 adapter profile |

Model 级 `research` / `execution` **仅作 defaults**：normalize 时写入每个未显式声明的 operation。Catalog / coverage / UI 门禁 **只读 operation 级结果**。

**operationListed**（可出现在画布/生成选择 UI 的原子资格）当且仅当：

1. **contract complete**（该 op schema 通过，slots/显式 output 齐备，有可信上限来源规则）；
2. **`op.research.status = verified`**；
3. **`op.execution.status = live`**；
4. **adapter profile compatible**（exists + live + operations/outputTypes/seam）；
5. **gate allowed**（`Config.gate` 未关闭该能力/模型/op；H1 可先 model 级钩子）。

派生：

- `listedOperations`: `modelId#operationId` 列表（**权威上架集合**）
- `model.listed`: `listedOperations` 对该 model 非空（**仅摘要**）

推论：

- Whisper 等 ASR 在 speechToText 执行面未 live 前，其 `speech_to_text` **不得 listed**。
- 同模型可以「仅 text_to_video listed、first_frame 仍 draft」。
- draft / 无执行面 / 无证据 / profile 不相容 → 对选择 UI **隐藏该 operation**。
- **H1 实 specs**：政策要求全部 operation 保持 draft 与/或 none|stub，使 **`listedOperations = []`**（不在 H1 审计并宣称厂商 live 事实）。

## 5. 拒绝与错误（typed rejects）

产品级原因码（非穷尽）包括：`mime_unsupported`、`size_exceeded`、`duration_exceeded`、`slot_capacity`、`role_conflict`、`no_compatible_model`、`model_incompatible`、`operation_incompatible`、`contract_missing`、`limit_source_missing`、`execution_unavailable`、`profile_incompatible`、`min_unsatisfied`、`prompt_required`、`metadata_required`、`configuration_error`。
UI 必须可解释；**Hide, Don't Grey**。

## 6. 门禁与演进

| 阶段 | 要求 |
|---|---|
| H1 | shadow loader + admission；**operation 级** status/listed；实 specs **零 listedOperations**；正式 specs **`schemaVersion: "1.1"`**（legacy 根 `version` 仅 fixture 输入迁移）；`pnpm verify:model-contracts` 默认 **admission 严格 / coverage 审计**；malformed YAML / **profile fake op** / schemaVersion conflict **必须失败**；CLI 用法错误 fail-closed；cache 用内容哈希；JSON Schema 与 JS validator parity（required=`schemaVersion`+`models`）；coverage 缺口可见但不因历史 missing 永久红灯；**不做** runtime constraints 对账 |
| H2 | 逐 operation 补证上架；runtime limits/mapper 对账（冲突取更严）；`buildModelCatalog` 切契约投影；coverage **strict** |
| 画布 | 消费 `modelCatalog` 目录缝；兼容判定按 listed operation；禁止 BUILTIN 第二真源长期并存 |

相关命令：`pnpm verify:model-contracts`（契约）、`pnpm verify:models`（聊天 patch / 在线存在性，职责不同）。

## 7. 非目标（指向 PRD / 设计）

定价 / HITL、本轮 ASR 真实 seam、document 画布消费、H1 生产 listed 声明、H1 runtime 对账：见 [PRD](../specs/2026-09-04-model-io-contract-compatibility-prd.md) 与 [Design R1 / R1.1](../specs/2026-09-04-model-io-contract-compatibility-design.md)。
