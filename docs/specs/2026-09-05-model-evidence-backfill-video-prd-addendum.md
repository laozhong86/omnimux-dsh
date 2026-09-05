---
title: "增量产品附录：#530 视频优先范围修订（C1–C4 · Seedance / Wan / MiniMax H3 / Kling）"
id: "spec-model-evidence-backfill-video-prd-addendum"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["xu-qingchu"]
subsystem: "omnimux/catalog"
tags:
  - "model-contract"
  - "catalog"
  - "evidence-backfill"
  - "video"
  - "c1-c4"
  - "operation-listed"
  - "prd-addendum"
supersedes: []
superseded_by: null
related:
  - "docs/specs/2026-09-05-model-evidence-backfill-prd.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-design.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-video-design-addendum.md"
  - "docs/specs/2026-09-04-model-io-contract-h2-catalog-prd.md"
  - "plugins/omnimux/src/catalog/specs/video-models.yaml"
  - "plugins/omnimux/src/catalog/contract/dispositions.json"
  - "research/omnimux/sources/official/13-docs-llms.txt.md"
  - "research/omnimux/sources/official/11-updates-en.md"
---

# 增量产品附录：#530 视频优先范围修订（C1–C4）

> **文档地位**：L2 增量 **产品附录**（Epic #463 / Issue #530 · 视频优先批次）。相对 `2026-09-05-model-evidence-backfill-prd.md` / `...-design.md` 的 **PR-C 视频批局部产品修订**；不推倒 H1/H2 五元判定与 schema。
> **作者**：许清楚（产品经理） · 2026-09-05
> **用户批准**：全量接入路径 + **视频优先**（Seedance / Wan 3.0 / MiniMax H3 / Kling）；本附录 status = **`accepted`**。
> **配对架构附录**：`2026-09-05-model-evidence-backfill-video-design-addendum.md`（工程任务 / 探针 / BI）。
> **术语**：`omnimux` = **执行中枢**；禁止称「网关」。
> **原则金句**：**listed 的唯一瓶颈仍是证据**；**测不过不 listed**；**新 runtime 可入表，入表 ≠ 上架**；**bare 展示名 ≠ wire 能力**。

---

## 0. 对原 PRD / design 的局部产品修订（必读）

本附录**显式局部修订**原 PRD/design 下列产品约束。未列出的条款（证据四要素、一 op 一文件、禁止跨模型挪用、`--strict` 常绿、R1、不写 Prod、不改判定语义）**全部继承**。
**不修改**旧 PRD/design 文件的 `status` 字段。

| # | 原约束（PRD/design） | 本附录修订 | 生效范围 |
|---|---|---|---|
| **R-A** | dispositions **43 行恒定**；「不新增/删除处置行」 | **允许**为 C1–C4 **新 runtime ID** 追加 dispositions 行与 YAML `models[]` 行；alias/既有行仍禁止无故删除。行数从 43 **单调增** | C1–C4 |
| **R-B** | `kling-avatar` **unavailable**、本 Issue 不探测 | **#538 后** audioTrack 透传 + `videoDigitalHuman` 可闭环 → 处置 **draft-probeable**；允许 C4 探测；**无 dated 证据仍不得 listed** | C4 |
| **R-C** | `kling-o3` / `kling-v3-motion-control` quarantine 且本 Issue 不安排探测 | **可探测**，但**默认保持 quarantine**（探测成功也**不自动 listed**）；仅产品二次放行 + 证据齐全后才可降级上架 | C4 |
| **R-D** | PR-C 视频 24 op / 10 model 固定清单 | 视频**优先交付面**改为本附录 **C1–C4 锁定 ID**；原清单中的 veo / grok / `seedance2.5-stable-max-720p` 等 **不在本附录优先面**（可另开批或保持 draft） | 本附录 |
| **R-E** | #530「判定码/执行码零改动」 | **数据面**仍优先零改；执行层无法表达某 wire 时，探测前开 **执行层前置 Issue**，**禁止假测** | 执行缺口 |
| **R-F** | bare / 粗粒度 ID 策略未写 H3 | **`minimax-h3`（无后缀）不作为 generation wire listed**；合法 wire 仅四个后缀 ID | C3 |
| **R-G** | `end_frame` 语义 | registry 无独立 end-frame 时，**禁止**把 endframe 污染映射为 `first_frame`；draft + registry_gap + 另开 Issue | C3 |

---

## 1. 项目信息

| 字段 | 值 |
|---|---|
| Language | 中文 |
| Project Name | `model_evidence_backfill_video_c1_c4` |
| 主责 | `omnimux/catalog`（YAML + dispositions + evidence） |
| 关联 | Epic #463 · Issue #530 · 执行层前置 #538（avatar/STT）· 配对 design 附录 |
| 风险与合入 | **R1**；顺序 **C1 → C2 → C3 → C4**；每批人工合入；**不写 Prod**；合入前不物化 45120 |
| 原始需求复述 | 用户批准全量接入，并明确**视频优先**：Seedance 系列、Wan 3.0、MiniMax H3、Kling。runtime 已出现原 #530/H2 未覆盖的新 SKU；本附录做**视频批次增量范围修订**，坚持测不过不 listed。 |

---

## 2. 产品目标（正交 ×3）

| # | 目标 | 可度量口径 |
|---|---|---|
| **G1** | 视频优先 SKU 证据驱动上架 | C1–C4 锁定 ID 中，每个候选 op 终态 = **listed（独立 dated 证据）∨ 书面不接**；零悬挂 |
| **G2** | 真实 wire ID 与语义不漂移 | 文档 / YAML / dispositions / 探针请求体使用**同一 runtime 字符串**；H3 四 wire 分列；bare `minimax-h3` 无 generation listed 键 |
| **G3** | 批可独立合入与回滚 | C1–C4 顺序合入；每批 `--strict` 绿；listed 增量 = 探测成功键集合变量（非预设 +N） |

---

## 3. 用户故事

| ID | 故事 |
|---|---|
| US-V1 | 作为创作者，我希望 Seedance / Wan / MiniMax H3 / Kling 里**真能跑**的视频能力尽快出现在可选列表，而不是只看见旧 Batch A 的一个 fast t2v。 |
| US-V2 | 作为录入 Agent，我希望按 C1→C4 厂商批、按 existence→minimal→边界 探测，每个成功 op 一份证据文件，失败写不接结论即可合入。 |
| US-V3 | 作为维护者，我希望 H3 不会把「MiniMax H3」展示名当成单一 wire 上架；endframe / motion 不会被脏映射进 `first_frame`。 |
| US-V4 | 作为 QA，我希望 `kling-avatar` 走 digital_human 独立证据，`kling-o3` / motion 默 quarantine 即使探测也不自动 listed。 |

---

## 4. Priority runtime ID × contract/dispositions 差异（18+）

> 基线：主仓 / 本 worktree `dispositions.json` **43 行**（2026-09-05）；`video-models.yaml` 实读；官方 `11-updates-en.md` / `13-docs-llms.txt.md`。

### 4.1 总表

| runtime ID | 批 | YAML | disposition | 差异结论 | 本附录动作 |
|---|---|---|---|---|---|
| `seedance-2-0` | C1 | 有 | canonical | ops 多 draft | 逐 op 补证 |
| `seedance-2-0-fast` | C1 | 有 | canonical | **t2v 已 listed**；ff/multi draft | 只补未 listed op |
| `seedance-2-0-mini` | C1 | **无** | **无** | 官方 updates 在列；仓内缺 | **Y-new + D-new** |
| `seedance-2-5` | C1 | 有 | canonical | draft | 逐 op 补证；禁借 fast |
| `wan-3.0` | C2 | 有 | canonical | draft | 逐 op 补证 |
| `wan-3.0-prime` | C2 | **无** | **无** | **真实 runtime ID** | **Y-new + D-new**（existence 成功后） |
| `wan-3.0-ref` | C2 | **无** | **无** | 真实 runtime ID | **Y-new + D-new** |
| `wan-3.0-prime-ref` | C2 | **无** | **无** | 真实 runtime ID | **Y-new + D-new** |
| `minimax-h3-t2v` | C3 | **无** | **无** | 官方独立 model 页 | **Y-new + D-new**；op=`text_to_video` |
| `minimax-h3-flf` | C3 | **无** | **无** | first/last-frame I2V | **Y-new + D-new**；op=`first_last_frame`（依赖 last_frame 表达） |
| `minimax-h3-fl2va` | C3 | **无** | **无** | FL2VA / 图生路径 | **Y-new + D-new**；语义钉死后选 op |
| `minimax-h3-endframe` | C3 | **无** | **无** | end-frame reference | **Y-new + D-new draft**；**registry_gap**；不 listed |
| `minimax-h3`（bare） | C3 | **无** | **无** | 展示/聚合名风险 | **不接 generation listed**；可选 disposition notes「不接」 |
| `kling-v2-6` | C4 | 有 | canonical | draft | 逐 op 补证 |
| `kling-v3` | C4 | 有 | canonical | draft | 逐 op 补证 |
| `kling-avatar` | C4 | 有 | **draft**（#538） | 原 PRD 写 unavailable → **已过时** | draft-probeable；digital_human 补证 |
| `kling-o3` | C4 | 有 | quarantine | 可探测 | **默 quarantine**；不自动 listed |
| `kling-v3-motion-control` | C4 | 有 | quarantine | 可探测 | **默 quarantine**；执行表达缺口 |

### 4.2 本附录明确不交付（保持原状 / 非优先）

| ID | 说明 |
|---|---|
| `veo-3.1` / `veo-3.1-fast` | 原 PR-C 有；**非本视频优先批** |
| `grok-imagine-video-1-5` | 同上 |
| `seedance2.5-stable-max-720p` | 同上 |
| `kling-o1` / `omni_flash` | 继续 quarantine；**默认不探测**（除非产品另令） |

### 4.3 Wan 真实 wire ID（已与架构附录对齐）

| **真实 runtime ID（产品锁定）** | 用途 |
|---|---|
| **`wan-3.0-prime`** | C2 新 SKU；existence 成功后 Y-new + D-new |
| **`wan-3.0-ref`** | C2 参考路径；existence 成功后 Y-new + D-new |
| **`wan-3.0-prime-ref`** | C2 prime+ref 组合；existence 成功后 Y-new + D-new |

> 产品附录、配对架构附录与后续 YAML/dispositions/**探针 model 字段**一律使用上表 **`wan-3.0-*` 三件套** 完整字符串；**禁止**任何截断/别名 wire。

---

## 5. 候选 operation 语义映射（产品契约层）

> 下表为 **契约候选**；最终 listed 键 = 探测成功集合 `S_listed`，**禁止**在 PR 描述写成「必然 +N」。

| ID | 候选 op | 语义要点 | 成功终态 | 不接终态 |
|---|---|---|---|---|
| `seedance-2-0` | `text_to_video` · `first_frame` | 禁借 fast 证据；**禁** `first_last_frame`（家族铁律） | 有证 → listed | 缺要素 → draft + notes |
| `seedance-2-0-fast` | `first_frame` · `video_multi_ref` | t2v 已 listed 不重复；multi max1 无证不放宽 | 同上 | 同上 |
| `seedance-2-0-mini` | `text_to_video` · `first_frame`? | 成本向；existence 先钉 ID | 入表 + 成功 op listed | existence 失败 → 不 D-new 或书面不接 |
| `seedance-2-5` | `text_to_video` · `first_frame` · `video_multi_ref` | 独立 SKU | 同上 | 同上 |
| `wan-3.0` | `text_to_video` · `first_frame` | 已有行 | 同上 | 同上 |
| `wan-3.0-prime` | `text_to_video` · `first_frame`? | **wire = 完整 id** | existence→入表→op | 钉不死 wire → 不入表 |
| `wan-3.0-ref` | `video_multi_ref`（± t2v） | ref 字段须可表达；否则执行前置 | 同上 | 字段丢弃风险 → draft |
| `wan-3.0-prime-ref` | `video_multi_ref`（± t2v） | 同上 | 同上 | 同上 |
| `minimax-h3-t2v` | **`text_to_video`** | model 字段 = `minimax-h3-t2v` | 主路径可 listed | 失败书面不接 |
| `minimax-h3-flf` | **`first_last_frame`** | 需 first+last；依赖 last_frame wire | BI 关闭后可 listed | BI 未关 → 不假测 |
| `minimax-h3-fl2va` | `first_frame` 或专用 | 官方页钉语义；超 slots → gap | 语义匹配才 listed | 超表达力 → draft + Issue |
| `minimax-h3-endframe` | **不进既有 op 脏映射** | **registry_gap** | **默认不 listed** | draft + Issue |
| `minimax-h3` bare | — | **非 generation wire listed** | — | **书面不接** |
| `kling-v2-6` / `kling-v3` | `text_to_video` · `first_frame` · `first_last_frame` | flf 依赖 last_frame | 成功 op listed | flf 可延后不接 |
| `kling-avatar` | **`digital_human`** | profile `videoDigitalHuman`；audioTrack；禁借粗 videoGenerate | 独立证据后 listed | 无证保持 draft |
| `kling-o3` | 占位 t2v/flf | **默 quarantine** | 仅二次放行后 | 探测 notes；不自动 listed |
| `kling-v3-motion-control` | 运镜未建模 | **默 quarantine** + 执行前置 | 仅二次放行后 | 禁止用 t2v/flf 冒充 |

### 5.1 legacy 别名（人读，不新增机器真源）

| 上游/历史 | MCC op | 说明 |
|---|---|---|
| `t2v` | `text_to_video` | 已有 |
| `i2v` | `first_frame` | **不得**用于 endframe |
| `flf` | `first_last_frame` | H3-flf / Kling flf |
| `avatar` | `digital_human` | kling-avatar |
| `endframe` / `end_frame` | **无** | registry_gap |
| `fl2va` | 待钉 → 暂 `first_frame` 或新 op | 超 slots → gap |
| `motion` / `motion_control` | **无** | 未建模 |

---

## 6. PR-C 拆分：C1–C4（可独立合并）

### 6.1 批次定义

| 批 | 范围 | 合入顺序 | 回滚单位 |
|---|---|---|---|
| **C1 Seedance** | `seedance-2-0` · `seedance-2-0-fast` · `seedance-2-0-mini` · `seedance-2-5` | 1 | revert C1 only |
| **C2 Wan** | `wan-3.0` · `wan-3.0-prime` · `wan-3.0-ref` · `wan-3.0-prime-ref` | 2（C1 入 main 后） | revert C2；保留 C1 |
| **C3 MiniMax H3** | 四 wire + bare 不接结论 | 3 | revert C3；保留 C1/C2 |
| **C4 Kling** | `kling-v2-6` · `kling-v3` · `kling-avatar` · `kling-o3` · `kling-v3-motion-control` | 4 | revert C4；保留 C1–C3 |

### 6.2 每批探测节奏（产品要求）

```text
existence（runtime/上游可达）
  → minimal（最小输入真实 live 一次）
    → boundary（slot 数量/角色递增到拒绝点）
      → mime / size / duration
        → listed 或 书面不接
```

- 一 op 一 evidence：`docs/evidence/YYYY-MM-DD-model-<id>-<op>.md`
- 同族 SKU **禁止**互背书（fast ≠ 2-0 ≠ mini ≠ 2-5；wan 四 ID 分列；H3 四 wire 分列）
- 每批：`pnpm --filter omnimux test` + `node scripts/verify-model-contracts.mjs --strict --json` 绿
- listed 差集 **==** PR 声明的成功键集合；多出驳回；少于上界合法

### 6.3 每批成功 / 不接终态（产品声明）

| 批 | 成功终态（示例口径） | 默认不接 / 排除 |
|---|---|---|
| C1 | 未 listed 的 seedance op 有证则 listed；mini 入表 | multi 无证不放宽 max1；禁 flf |
| C2 | `wan-3.0` 补证；`wan-3.0-*` existence 成功才入表并上架成功 op | wire 钉不死 / ref 字段丢弃 → 不 listed |
| C3 | **期望主路径** `minimax-h3-t2v#text_to_video`；flf/fl2va 视执行力 | **bare 不接**；**endframe 不 listed**；禁脏 first_frame |
| C4 | v2-6/v3 成功 op；avatar#digital_human 独立证据 | **o3/motion 默 quarantine 不进声明 listed**；o1/omni_flash 不探 |

### 6.4 与「全量接入」的关系

| 声明 | 含义 |
|---|---|
| 用户目标 | 全量接入（证据驱动） |
| 本附录 | **视频优先切片**先落地 C1–C4 |
| 硬纪律 | **测不过不 listed**；不接 = 合法交付 |
| 原 PR-C 其余 ID | 仍属 #530 大盘，但不阻塞本优先批；可后续批或保持 draft |

---

## 7. 原 PRD/design 需修订的具体锚点（索引，不改旧文 status）

| 文档 | 锚点 | 原内容摘要 | 本附录效力 |
|---|---|---|---|
| PRD §2 | dispositions 不新增行 | 43 行恒定 | **R-A 覆盖**（视频新 ID 可增行） |
| PRD §5 / P0-5 | kling-avatar unavailable | 锁定不探测 | **R-B**：#538 后 draft-probeable |
| PRD §5 / §7.3 | quarantine 不安排探测 | o3/motion 锁死 | **R-C**：可探、默 quarantine、不自动 listed |
| PRD §7.3 | PR-C 10 model · 24 op | veo/grok/stable-max 在列 | **R-D**：优先面 = C1–C4 |
| PRD 530-D5 | avatar 仍 unavailable | DoD | 视频附录 DoD 以 R-B 为准；**whisper-1 仍按原 PRD**（非本附录范围除非 STT 另批） |
| design 530-C4 等 | 不新增处置行 | 同 R-A | 以本附录 + design 视频附录为准 |
| design 锁定段 | avatar/o3/motion | 同 R-B/C | 同上 |

> 旧文件保持历史快照 + `proposed`；**本文件 `accepted` 为视频优先范围的产品真源**。工程以本附录 ID 表 + 架构视频附录任务表执行；冲突时 **runtime 真源 ID 以本附录 §4 为准**。

---

## 8. 需求池（本附录增量）

### 8.1 P0

| ID | 需求 | 验收 |
|---|---|---|
| **VP0-1** | C1–C4 范围与 §4 ID 表一致；真实 ID 含 `wan-3.0-prime` / `wan-3.0-ref` / `wan-3.0-prime-ref` | 文档/PR/探针 wire 字段零短名残留 |
| **VP0-2** | H3 仅四 wire 可 generation listed；bare 不接 | `--strict` 无 `minimax-h3#*` generation listed |
| **VP0-3** | endframe 不映射 first_frame | 无脏 listed；draft + registry_gap |
| **VP0-4** | avatar draft-probeable；digital_human 独立证据 | profile 相容；禁粗 videoGenerate 背书 |
| **VP0-5** | o3/motion 默 quarantine | 默不进 Δ_listed；二次放行另议 |
| **VP0-6** | 每批独立绿与回滚 | test + strict；revert 批边界清晰 |
| **VP0-7** | 证据四要素 + 一 op 一文件 | 继承原 PRD P0-1/P0-2 |

### 8.2 P1

| ID | 需求 |
|---|---|
| VP1-1 | 每批后更新 `model-capabilities-matrix.md` 覆盖注记 |
| VP1-2 | Wan ref / fl2va 官方字段确认后放宽候选 op |
| VP1-3 | （已满足）产品/架构附录 Wan ID 逐字一致；工程探针继续守门 |
### 8.3 P2

| ID | 需求 |
|---|---|
| VP2-1 | 视频批证据完备度矩阵（人读） |
| VP2-2 | veo/grok 回流优先队列的产品排期另文 |

---

## 9. 验收矩阵（视频附录 DoD）

| # | 完成标准 | 优先级 |
|---|---|---|
| VD1 | 本附录 `accepted`；C1–C4 为视频优先交付面 | P0 |
| VD2 | §4 每个 ID：listed∨书面不接∨（o3/motion）quarantine 闭环 | P0 |
| VD3 | 真实 ID 统一为 `wan-3.0-prime` / `wan-3.0-ref` / `wan-3.0-prime-ref`；产品/架构附录零短名 wire | P0 |
| VD4 | H3 四 wire 分列；bare 无 generation listed；endframe 无脏映射 | P0 |
| VD5 | avatar 可探测可上架（有证）；o3/motion 不自动 listed | P0 |
| VD6 | 每批 strict 绿；Δ_listed == 声明成功键 | P0 |
| VD7 | 不写 Prod；R1 人工合入；不改旧 PRD/design status | P0 |

---

## 10. 待确认项（≤3 · 默认决策已拍板）

| # | 项 | **默认决策（已批准执行）** |
|---|---|---|
| Q1 | Wan 三 ID 官方字符串是否还有隐藏前后缀 | 以 **live runtime / pricing** 为准：`wan-3.0-prime` · `wan-3.0-ref` · `wan-3.0-prime-ref`；existence 钉不死则该 ID 不入表，**不阻塞** `wan-3.0` |
| Q2 | `minimax-h3-fl2va` 是否等于单首帧 I2V | 先读官方 model 页；仅单图 → `first_frame`；含音频/多帧超 slots → draft + 执行/registry Issue，不 listed |
| Q3 | o3/motion 是否在本 Issue 做完整出片 | **默认轻量 existence + notes**；**不 listed**；完整测须产品书面二次放行 |

---

## 11. 给架构师 / 工程的产品输入摘要

1. **视频优先 = C1 Seedance → C2 Wan → C3 H3 → C4 Kling**；测不过不 listed。
2. **新 runtime 可 Y-new/D-new**（修订原「43 行恒定」）；入表 ≠ listed。
3. **Wire 真源**：`wan-3.0-prime` / `wan-3.0-ref` / `wan-3.0-prime-ref`（与架构附录已对齐；短名不得作 wire）。
4. **H3**：只认 `minimax-h3-t2v` / `minimax-h3-flf` / `minimax-h3-fl2va` / `minimax-h3-endframe`；**bare `minimax-h3` 不 generation listed**；endframe 不进 first_frame。
5. **Kling**：avatar = #538 后 draft-probeable + digital_human；o3/motion = 可探、默 quarantine、不自动 listed。
6. **执行表达不了 → 前置 Issue → 禁止假测**（last_frame / endframe registry / motion / wan ref 字段）。
7. listed 增量是 **S_success 变量**，不是预设 +N。
8. 旧 PRD/design **不改 status**；本附录为视频范围 **accepted** 真源。

---

## 12. 交付物路径

| 路径 | 角色 |
|---|---|
| `docs/specs/2026-09-05-model-evidence-backfill-video-prd-addendum.md` | **本文件（产品附录）** |
| `docs/specs/2026-09-05-model-evidence-backfill-video-design-addendum.md` | 架构附录（任务/探针/BI） |
| `docs/specs/README.md` | 双附录索引 |

---

**文档结束（许清楚 · 产品经理 · 2026-09-05 · #530 视频优先 C1–C4 · status: accepted）**
