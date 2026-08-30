---
title: "决策：画布与资产库 100% 物理实体化"
id: "decision-physical-materialization"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-30"
updated: "2026-08-30"
authors: ["x", "agent-architect"]
subsystem: "omnimux-workflow"
tags: ["assets", "ingestion", "relative-path", "adr"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/project-assets-contract.md"
  - "docs/specs/2026-08-30-omnimux-physical-materialization.md"
  - "docs/specs/2026-08-22-omnimux-assets-creative-library.md"
  - "docs/specs/2026-08-23-omnimux-local-project.md"
---

# 决策：画布与资产库 100% 物理实体化

> **权威**：L2 ADR。合入后正文只读；修正只能新增 ADR。  
> **合同真源**：[`docs/contracts/project-assets-contract.md`](../contracts/project-assets-contract.md)

---

## 1. 一句话

导入、主体入库、主体投入项目、画布生成物，全部在受管目录留下物理副本；项目元数据只记相对路径。废止「只记 `real_path`、零拷贝」作为画布与创作资产库的持久化策略。

---

## 2. 背景

2026-08-22 资产库规格拍板「只记 `real_path`」。Issue #122 画布导入同样索引绝对路径、不 copy。后果：原文件一动就红叉；作品包无法离线打包；Finder 打开项目几乎看不到片子。用户 2026-08-30 明确要求全部实体化：主体库作全局仓，项目资产与画布绑工作区目录。

---

## 3. 裁决

| 点 | 决定 |
|---|---|
| 存储 | 100% 物理深拷贝。禁止外链当 JSON 真源。无 50MB 外链例外。 |
| 路径 | 项目 POSIX 相对路径；全局仓相对 `$DSH_HOME/omnimux/assets/`。 |
| 主体投入 | 快照 copy 到 `assets/subjects/<id>/`，不回写全局。 |
| 提升全局 | copy 到 `data/files/<id>/`，项目副本保留。 |
| 删除项目 | 只摘账本，不 `rm` 文件夹。 |
| 删资产记录 | 可回收**受管副本**；永不碰用户原文件。 |
| HTTP | 沿用 `/omnimux-workflow/api/workspaces/:id/...` 与 `/omnimux/assets/library`。禁止新前缀 `/api/projects/:id`。 |
| 跨插件 | workflow 不 import assets 包。 |
| 无项目画布 | ingest 失败 `project-required`，不写 `$DSH_HOME` 黑盒。 |
| 存量 | 打开时按条惰性物化；不做开机全盘搬迁。 |
| 去重 | 本轮不做 hash hardlink。 |
| 产品库 / clip | 本 ADR 不动。 |

否决：混合模式（小文件 copy、大文件外链）。用户已排除链接方式。

---

## 4. 后果

- 磁盘占用上升（同文件多项目各一份）。接受。
- `GET /api/local-file` 降为 probe/读源，不再是节点真源。
- `POST .../assets/index` 废弃（410 或内部转 ingest）。
- 旧规格中「禁止 copy」条款由本 ADR + 新合同取代。

---

## 5. 实施顺序

文档金字塔（本决策所在 PR）→ Host ingest → 全局库 copy → 画布 DAG/产物迁入作品包 → 真机离线验收。每阶段可独立合入。
