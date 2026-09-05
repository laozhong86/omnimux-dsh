---
title: "增量 PRD：模型证据补齐（Evidence Backfill）与分批上架 #530"
id: "spec-model-evidence-backfill-prd"
type: "spec"
status: "proposed"
authority: "L2"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["xu-qingchu"]
subsystem: "omnimux/catalog"
tags:
  - "model-contract"
  - "catalog"
  - "evidence-backfill"
  - "operation-listed"
  - "h2-followup"
supersedes: []
superseded_by: null
related:
  - "docs/specs/2026-09-04-model-io-contract-h2-catalog-prd.md"
  - "docs/specs/2026-09-04-model-io-contract-h2-catalog-design.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-prd.md"
  - "docs/contracts/model-capabilities-matrix.md"
  - "docs/contracts/model-list-ownership.md"
  - "docs/contracts/plugin-git-pr.md"
---

# 增量 PRD：模型证据补齐（Evidence Backfill）与分批上架 #530

> **文档地位**：L2 增量 PRD（Epic #463 / Issue #530）。**只描述相对 H2（#465 / PR #507 已合入 main）的变更**；契约 schema、op 级五元判定、dispositions 机器真源、Catalog v1.1 投影、facade fail-closed、`--strict` 红灯门禁等以 H1/H2 文档为准，本文不推倒。
> **作者**：许清楚（产品经理） · 2026-09-05
> **工作树**：`omnimux-dsh-wt-model-evidence-backfill-530` / 分支 `agent/omnimux-model-evidence-backfill-issue-530`
> **用户原话**：「证据不够就补齐证据，目标是全量接入」。
> **术语**：`omnimux` 一律称**执行中枢**；禁止称「网关」。
> **原则金句（#530 增量）**：**listed 的唯一瓶颈是证据，不是意愿**；**每个拟 listed op 必须有独立 dated 证据，禁止挪用别家模型的证据**；**不接就留 draft/quarantine 也是合法交付，不强行全 listed**；**每批 PR 独立可合、独立可回滚、`--strict` 常绿**。

---

## 1. 项目信息

| 字段 | 值 |
|---|---|
| Language | 中文 |
| Project Name | `model_evidence_backfill` |
| 主责子系统 | `omnimux/catalog`（契约 YAML + dispositions + `docs/evidence/` 证据仓） |
| 关联 | Epic #463 · Issue #530 · 依赖 H1 #485 合入、H2 #507 合入（当前 main 已含 Catalog v1.1 投影） |
| 风险与合入 | **R1**；**分批 PR**（PR-A/B/C/D，单插件 `omnimux`）；**每批人工合并**；`pre-authorized: false`；禁止 auto-enqueue；**不写 Prod**；合入前不物化公共 45120 |

### 1.1 原始需求复述

H2 交付后，43 个 runtime ID 已 100% 处置、`--strict` 常绿，但 `listedOperations` 只有 Batch A 三键。本 Issue 要把「全量接入」推进为**证据驱动的逐 op 上架**：对每一个有契约但 research/execution 未达标（draft/stub）的 operation，补齐独立 dated 证据后翻 verified+live 进入 listed；补不了证据的，显式留在 draft/quarantine，同样算交付。

### 1.2 strict 基线快照（主仓 @ 2026-09-05，`node scripts/verify-model-contracts.mjs --strict --json`）

| 项 | 值 |
|---|---|
| mode / exitCode | `strict` / **0**（当前绿，#530 全程不得转红） |
| schemaVersion | `1.1` |
| contentFingerprint | `d5b707939b03f837` |
| runtimeCount | 43 |
| contractCount | 41 |
| missingInYaml | `nanobanana-2` · `nanobanana-pro`（**均为 alias 处置，按设计无 YAML 行，不需要证据**，随 canonical 归一） |
| extraInYaml | 0 |
| listedOperations | `gpt-image-2#text_to_image` · `grok-imagine-image#text_to_image` · `seedance-2-0-fast#text_to_video`（**仅 3 键**） |
| dispositions | 43 行：canonical 25 · draft 10 · alias 2 · unavailable 2 · quarantine 4；forbiddenListed = whisper-1 / kling-avatar / kling-o1 / kling-o3 / kling-v3-motion-control / omni_flash |

> 结论：`missingInYaml` 的两个 ID 是 alias 设计内空缺，**不构成补证对象**。#530 的真实补证面 = **41 个契约模型中所有未 listed 的 operation**（当前 65 个 op 处于 draft/stub 或 verified/stub 态），逐 op 见 §7。

---

## 2. 与 H1 / H2 的关系（增量边界）

| 维度 | H1+H2（已合入，不变） | #530（本 PRD） |
|---|---|---|
| 契约机器真源 / schema / admission / coverage strict | 已建成并常绿 | **只消费**；不改判定规则、不放宽门禁 |
| dispositions.json | 43 行处置已定 | **不新增/删除处置行**；仅允许随证据结论更新 `evidence` / `notes` 字段 |
| listed 五元判定（contractComplete ∧ research=verified ∧ execution=live ∧ profile 相容 ∧ gate） | 机器已锁 | **不改判定**；本 Issue 只补证据让真值翻转 |
| YAML op 状态 | 全量 draft/stub（除 Batch A 三键 + claude-opus-5#chat research=verified） | **逐 op 补证后翻 verified/live**；无证据保持 draft |
| Catalog v1.1 投影 / facade / fingerprint | 已切换 | 不动；listed 变化自动反映到四列表与 fingerprint |
| 执行码（protocol/execute/mapper） | 不属于 H2 | **仍不改**；whisper-1 / kling-avatar 所需 seam/mapper 缺口不在本 Issue 修 |

**一句话边界**：#530 是纯「证据 + YAML 状态 + dispositions 注记」的数据迭代，不改任何判定代码与执行代码。

---

## 3. 产品目标（正交 ×3）

| # | 目标 | 可度量口径 |
|---|---|---|
| G1 | **证据驱动的 listed 扩容** | `listedOperations` 从 3 键单调增长；每把新键都能在 diff 中指出对应 dated 证据文件（docUrl + verifiedAt） |
| G2 | **补证纪律可审计** | 每个拟 listed op 的证据覆盖四要素：existence / 最小生成 / 输入数量与角色边界 / MIME·size·duration；**禁止跨模型挪用证据**；抽查任一 listed 键可复现证据链 |
| G3 | **不接也闭环** | 补不出证据的 op 有书面结论（留 draft / 确认 quarantine），dispositions `notes` 注明原因；全 Issue 结束时 65 个候选 op **每一个**要么 listed 要么有书面「不接」结论，零悬挂 |

---

## 4. 用户故事

| ID | 故事 |
|---|---|
| US-530-1 | 作为创作者，我希望目录里每种模态可选的真实模型越来越多，而且列出来的都真能跑通，而不是「看着全量、点了就挂」。 |
| US-530-2 | 作为录入 Agent，我希望每个 op 的上架证据标准被写成清单（existence→最小生成→边界递增），我照单探测、照单归档，不需要猜什么叫「证据够了」。 |
| US-530-3 | 作为 QA，我希望每次 listed 扩容都能被 `--strict` 绿 + 单测绿 + dated 证据文件三者交叉证明，且任何一批回滚不影响其它批。 |
| US-530-4 | 作为维护者，我希望 whisper-1 / kling-avatar / 四个 quarantine ID 在本 Issue 继续锁死，不被「全量接入」的口号冲开。 |

---

## 5. 非目标

| 非目标 | 说明 |
|---|---|
| 改契约 schema / listed 五元判定 / coverage 规则 | 机器真源不动 |
| 新增/删除 runtime ID、改处置枚举值 | 处置表结构不动；仅 evidence/notes 可更新 |
| 修 `speechToText` seam、video mapper audioTrack | 属后续 Issue；修完前 whisper-1 / kling-avatar **保持 unavailable** |
| quarantine 四 ID（omni_flash / kling-o1 / kling-o3 / kling-v3-motion-control）上架 | **无证据不接**；本 Issue 不安排探测 |
| Workflow 画布 UI / Hide Don't Grey / submit guard | W1–W3 / H3 |
| 定价 / HITL / Prod 物化 | 禁止 |

---

## 6. 需求池（P0 / P1 / P2）

### 6.1 P0 — Must have

| ID | 需求 | 验收要点 |
|---|---|---|
| **P0-1 补证四要素标准** | 每个拟 listed op 的 dated 证据必须覆盖：① **existence**（runtime/上游可达，HTTP 200 或等价）；② **最小生成**（最小输入真实跑通一次，产物落盘/回包可验）；③ **输入数量与角色边界**（参考图/视频/音频 slot 的 min/max 与 role 实测递增到拒绝点）；④ **MIME / size / duration**（允许格式、体积、时长上限实测或官方文档注明来源） | 证据文件为 `docs/evidence/2026-09-XX-omnimux-<domain>.md`；YAML `research.docUrl` + `verifiedAt` 引用之；四要素缺一则该 op 不得 listed |
| **P0-2 证据独立性** | 每份证据只证明它实测的模型与 op；**禁止**把 `2026-08-14-omnimux-video.md`（seedance 系）挪给 kling/veo/wan，禁止把 image 证据挪给 video，禁止同族 SKU 互相背书（如 gpt-image-2 ≠ gpt-image2-hd，seedance-2-0-fast ≠ seedance-2-0） | PR 审查逐键核对证据文件中的实测 ID；挪用 = 驳回 |
| **P0-3 既有证据复用纪律** | 仓内已有 dated 证据（`2026-08-14-video` / `2026-08-16-image` / `2026-08-18-modality` / `2026-08-20-reasoning` / `2026-08-23-brand-four`）**只允许**为其原本覆盖的模型+op 继续使用；覆盖不到的维度（如 vision_chat 的 image 边界）须补探针 | 复用时 notes 注明原文件与覆盖缺口 |
| **P0-4 分批独立可合** | PR-A（text）→ PR-B（image）→ PR-C（video）→ PR-D（audio）；**每批单独** `pnpm --filter omnimux test` + `node scripts/verify-model-contracts.mjs --strict` 全绿；批次间无代码耦合，任一批可独立回滚（revert 该批 YAML/evidence/notes） | 每批 PR 描述附：本批新 listed 键清单、证据文件路径、`--strict` 输出摘录；顺序合入，不并发开 PR |
| **P0-5 锁定纪律不动摇** | whisper-1 / kling-avatar 保持 **unavailable**（执行不闭环）；quarantine 四 ID **不接**；nanobanana hyphen=alias 不双列；Grok video max1 / Seedance multi-ref 保守值在取得 dated 复测证据前**不放宽** | `--strict` 的 `forbiddenListed ∩ listedOperations = ∅` 恒成立；alias 双列测试常绿 |
| **P0-6 「不接」也是交付** | 任何 op 探测后证据不足：保持 draft，dispositions `notes` 写明「YYYY-MM-DD 探测结论 + 缺哪项要素」；**严禁**为凑全量而标 verified | Issue 关闭条件 = 65 个候选 op 全部有「listed ∨ 书面不接结论」，而非「全部 listed」 |
| **P0-7 execution 翻转需 live 证据** | text 全部 op 当前 `execution: stub`（含 research 已 verified 的 claude-opus-5#chat）；翻 `live` 必须有本 Issue 内的 dated 真实调用记录（可 keyless 引用既有 report 的，须注明缺口并补 dated 复核行） | 无 dated live 记录的 op 不得翻 execution.live |
| **P0-8 合入纪律** | R1、每批人工合入、不写 Prod、不合入前不物化 45120；本 Issue 无创作者 UI 变更 → 无 GIF/ego-browser 强制项 | 见 §10 |

### 6.2 P1 — Should have

| ID | 需求 | 验收要点 |
|---|---|---|
| P1-1 | 探测脚本/记录模板沉淀为可复用 SOP（录入 Agent 照单执行） | evidence 文件有统一小节：existence / minimal / boundary / mime-size-duration / conclusion |
| P1-2 | Grok video 参考图 max、Seedance multi-ref 上限取得 dated 复测证据后放宽并注明 | 无证据前维持 `policy_conservative` |
| P1-3 | 每批合入后更新 `docs/contracts/model-capabilities-matrix.md` 的覆盖注记（updated 日期） | 文档可发现 |

### 6.3 P2 — Nice to have

| ID | 需求 |
|---|---|
| P2-1 | 覆盖率人读报告加「证据完备度」列（四要素打勾矩阵） |
| P2-2 | 有 key 环境的 live gateway 复测归档节奏化 |

---

## 7. 逐 ID 补证清单（按模态分组 · 现状来自 strict JSON + specs YAML 实读）

> 口径：`missingInYaml` 的两个 alias ID（nanobanana-2 / nanobanana-pro）**不在补证面**（设计内无 YAML 行，随 canonical `nano_banana_2` / `nano_banana_pro` 归一）。下表 = 65 个候选 op 全集。

### 7.1 Text（11 model · 19 op）— PR-A

| runtime ID | 候选 op | 现状 | 补证要点 |
|---|---|---|---|
| `claude-opus-5` | `chat` | research=verified / execution=**stub** | 缺 dated live 调用记录 → 补 existence+最小生成即可翻 live |
| `claude-opus-4-6` | `chat` · `vision_chat` | draft/stub | 四要素全补；vision 需 image 输入边界实测 |
| `gpt-5.6-sol` | `chat` · `vision_chat` | draft/stub | 同上 |
| `gpt-5.5` | `chat` · `vision_chat` | draft/stub | 同上（brand-four 已有 chat 线索，vision 需独立 dated 图证据） |
| `grok-4.6` | `chat` · `vision_chat` | draft/stub | 同上 |
| `kimi-k3` | `chat` · `vision_chat` | draft/stub | 同上 |
| `deepseek-v4-pro` | `chat` | draft/stub | text-only（上游拒 image_url）；不声明 vision_chat |
| `deepseek-v4-flash-vision-exp` | `chat` · `vision_chat` | draft/stub | chat 可补；**vision_chat 无独立 dated 图证据 → 可留 draft 并写不接结论** |
| `gemini-3.7-flash` | `chat` · `vision_chat` | draft/stub | vision 含 video 槽；slot 上限实测前维持 policy_conservative |
| `gemini-3.1-pro-preview` | `chat` · `vision_chat` | draft/stub | 四要素全补 |
| `glm-5.3` | `chat` | draft/stub | text-only（上游仅允许 text） |

### 7.2 Image（10 model · 20 op）— PR-B

| runtime ID | 候选 op | 现状 | 补证要点 |
|---|---|---|---|
| `gpt-image-2` | `multi_reference` | draft/stub（t2i 已 listed） | 多参考图数量/角色边界递增实测；**禁止**用 t2i 证据顶替 |
| `grok-imagine-image` | `multi_reference` | draft/stub（t2i 已 listed） | 同上 |
| `gpt-image2-hd` | `text_to_image` · `multi_reference` | draft/stub | 独立 SKU，禁止借 gpt-image-2 证据 |
| `grok-imagine-image-quality` | `text_to_image` · `multi_reference` | draft/stub | 独立 SKU，同上 |
| `midjourney` | `text_to_image` · `multi_reference` | draft/stub | 四要素全补 |
| `midjourney-8.1` | `text_to_image` · `multi_reference` | draft/stub | 同上 |
| `midjourney-7` | `text_to_image` · `multi_reference` | draft/stub | 同上 |
| `midjourney-niji-7` | `text_to_image` · `multi_reference` | draft/stub | 同上 |
| `nano_banana_2` | `text_to_image` · `multi_reference` | draft/stub | tokens-flow 403 史：先复通 existence 再谈生成；hyphen alias 不双列 |
| `nano_banana_pro` | `text_to_image` · `multi_reference` | draft/stub | 同上 |
| `seedream-5.0-pro` | `text_to_image` · `multi_reference` | draft/stub | 四要素全补 |
| `seedream-4.5` | `text_to_image` · `multi_reference` | draft/stub | 同上 |

### 7.3 Video（10 model · 24 op）— PR-C

| runtime ID | 候选 op | 现状 | 补证要点 |
|---|---|---|---|
| `seedance-2-0-fast` | `first_frame` · `video_multi_ref` | draft/stub（t2v 已 listed） | 首帧/多参考独立探测；multi-ref 未实测前维持 max1 保守 |
| `seedance-2-5` | `text_to_video` · `first_frame` · `video_multi_ref` | draft/stub | 禁止借 seedance-2-0-fast 证据 |
| `seedance-2-0` | `text_to_video` · `first_frame` | draft/stub | 同上 |
| `seedance2.5-stable-max-720p` | `text_to_video` · `first_frame` | draft/stub | 独立 SKU；duration/分辨率上限实测 |
| `kling-v3` | `text_to_video` · `first_frame` · `first_last_frame` | draft/stub | 四要素全补 |
| `kling-v2-6` | `text_to_video` · `first_frame` · `first_last_frame` | draft/stub | 同上 |
| `veo-3.1` | `text_to_video` · `video_multi_ref` | draft/stub | 同上 |
| `veo-3.1-fast` | `text_to_video` · `video_multi_ref` | draft/stub | 与 veo-3.1 分开处置，独立证据 |
| `grok-imagine-video-1-5` | `text_to_video` · `first_frame` · `video_multi_ref` | draft/stub | 参考图 max1 保守；dated 复测后才可放宽（P1-2） |
| `wan-3.0` | `text_to_video` · `first_frame` | draft/stub | 四要素全补 |

**锁定不接（本 Issue 不安排探测）**：`kling-avatar#digital_human`（unavailable：mapper 丢 audioTrack，执行未闭环）；`kling-o1` / `kling-o3` / `kling-v3-motion-control` / `omni_flash`（quarantine：无证据不接）。

### 7.4 Audio（2 model · 2 op）— PR-D

| runtime ID | 候选 op | 现状 | 补证要点 |
|---|---|---|---|
| `suno` | `text_to_music` | draft/stub | existence + 最小生成 + duration 上限实测 |
| `gpt-4o-mini-tts` | `text_to_speech` | draft/stub | existence + 最小生成 + 输入文本长度/MIME 边界 |

**锁定不接**：`whisper-1#speech_to_text`（unavailable：无 speechToText live seam；seam 落地前任何证据都不翻 listed）。

---

## 8. 分批策略

```text
PR-A  text   19 op（11 model）   证据：docs/evidence/2026-09-XX-omnimux-text-backfill.md
PR-B  image  20 op（10 model）   证据：docs/evidence/2026-09-XX-omnimux-image-backfill.md
PR-C  video  24 op（10 model）   证据：docs/evidence/2026-09-XX-omnimux-video-backfill.md
PR-D  audio   2 op（2 model）    证据：docs/evidence/2026-09-XX-omnimux-audio-backfill.md
```

| 规则 | 说明 |
|---|---|
| 顺序合入 | A → B → C → D，前一个合入 main 后下一个 rebase 再开；**不并发开 PR**（避免 YAML/dispositions 冲突与指纹抖动） |
| 批内可再分 | 单批探测量过大时允许按厂商拆子批（如 PR-C1 seedance/veo、PR-C2 kling/wan/grok），规则不变 |
| 每批门禁 | `pnpm --filter omnimux test` 绿 + `node scripts/verify-model-contracts.mjs --strict` 绿（exit 0）+ 新 listed 键与证据文件一一对应 |
| 每批回滚 | revert 该批 commit 即回到上一稳定态；投影/facade/判定代码全程不动，回滚零代码风险 |
| 批内「不接」 | 同批允许部分 op 留 draft + 书面结论；不阻塞该批合入 |
| 人工合入 | 每批 R1，老板人工合入；`pre-authorized: false` |

---

## 9. 验收矩阵（DoD）

| # | 完成标准 | 优先级 |
|---|---|---|
| 530-D1 | 本 PRD 评审后转 `accepted`；架构师/工程按批次出实现卡 | P0 |
| 530-D2 | 65 个候选 op 每个终态为「listed（有独立 dated 证据）∨ draft/quarantine（有书面不接结论）」，零悬挂 | P0 |
| 530-D3 | 每个新 listed 键：证据四要素齐全、docUrl+verifiedAt 入 YAML、无跨模型挪用 | P0 |
| 530-D4 | 每批 PR 独立 `pnpm --filter omnimux test` + `--strict` 绿；`forbiddenListed ∩ listedOperations = ∅` 全程成立 | P0 |
| 530-D5 | whisper-1 / kling-avatar 仍 unavailable；quarantine 四 ID 零 listed；nanobanana 无双列 | P0 |
| 530-D6 | 无证据上限不放宽（Grok video max1 / Seedance multi-ref 保守值维持或经 dated 复测放宽） | P0 |
| 530-D7 | 不改契约判定码、不改执行码、不改 workflow、不写 Prod、不合入前不物化 45120 | P0 |

---

## 10. 环境与合并纪律

| 项 | 要求 |
|---|---|
| 风险 | **R1**（每批均 R1） |
| PR | 单插件（`omnimux`）指向 `omnimux-ai/omnimux-dsh` `main`；批批人工合入；禁止 Agent enqueue |
| UI 证据 | 无创作者 UI 变更 → 无 GIF / ego-browser 强制项 |
| 验证 | test + `verify:model-contracts --strict` + `verify:models`（keyless skip 须记录） |
| 物化 | **不写 Prod**；合入前不物化公共 45120 |
| 工作树 | `omnimux-dsh-wt-model-evidence-backfill-530`，自含 H2 的 main 切出，不叠未合并分支 |

---

## 11. 待确认问题

| # | 问题 | 默认假设（未回覆则按此） |
|---|---|---|
| Q1 | 探测是否需要 live key？无 key 环境怎么办？ | 优先复用仓内 dated 证据并补 keyless 可做的 existence/文档核查；必须 live 的维度无 key 则该 op 留 draft 并写明「待 key 复测」，不算阻塞 |
| Q2 | text 19 op 是否要求全 listed 才算 PR-A 完成？ | 否；按 P0-6，listed ∨ 书面不接均算交付 |
| Q3 | 批次顺序可否调整（如先 image 后 text）？ | 默认 A→B→C→D；老板可改顺序，但「顺序合入不并发」不变 |
| Q4 | midjourney 系四 SKU 若无官方文档源，边界上限怎么写？ | 实测递增到拒绝点为准；测不出则 `policy_conservative` + 该 op 不 listed |

---

## 12. 给架构师/工程的输入摘要（产品边界，不规定实现）

1. **纯数据迭代**：只动 `specs/*-models.yaml` 的 op 状态与证据字段、`dispositions.json` 的 evidence/notes、`docs/evidence/` 新增 dated 证据；判定码与执行码零改动。
2. **65 个候选 op 清单即 §7**；逐键「listed ∨ 书面不接」闭环。
3. **证据四要素 + 独立性**是上架硬门槛；verified 必须 docUrl + verifiedAt（H1 `evidence_missing_for_verified` 已机器兜底）。
4. **锁定集合不动**：whisper-1 / kling-avatar unavailable；quarantine 四 ID 不接；nanobanana hyphen 只作 alias。
5. **批次 A→B→C→D**，每批独立绿、独立回滚、人工合入；允许批内按厂商再拆子批。
6. 冲突上限无证据不放宽；放宽必须附 dated 复测。

---

## 13. 落盘与关联

| 项 | 路径 |
|---|---|
| 本增量 PRD | `docs/specs/2026-09-05-model-evidence-backfill-prd.md` |
| H2 PRD / Design（基线） | `docs/specs/2026-09-04-model-io-contract-h2-catalog-prd.md` / `...-design.md` |
| 处置机器真源 | `plugins/omnimux/src/catalog/contract/dispositions.json` |
| 既有证据 | `docs/evidence/2026-08-14-omnimux-video.md` / `2026-08-16-omnimux-image.md` / `2026-08-18-omnimux-modality.md` / `2026-08-20-omnimux-reasoning.md` / `2026-08-23-omnimux-brand-four.md` |
| Specs 索引 | `docs/specs/README.md` |
| Issue | https://github.com/omnimux-ai/omnimux-dsh/issues/530 |

---

**文档结束（许清楚 · 产品经理 · 2026-09-05 · status: proposed · #530 增量）**
