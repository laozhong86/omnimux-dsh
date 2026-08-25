# 【PRD & 技术调研规范】画布结构化数据表节点（Canvas Table Node / `.htable`）

> **文档版本**：v1.0.0  
> **文档密级**：内部技术方案与开发 PRD  
> **适用范围**：DSH / OmniMux / MiniMax Design 类 AI 无限画布工作流的结构化数据表节点开发

---

## 1. 业务背景与设计定位

在 AI 多模态生成与无限画布（Canvas / Node DAG Workflow）交互中，用户不仅需要处理单点的文本、图片、音视频生成，更需要**批量化、结构化、多模态联动**的数据组织能力：
* **角色/资产库管理**：分镜剧本、人物设定、Prompt 模板、参考图/视频附件的结构化归档；
* **批量生产分发（Batch Dispatching）**：以表格每一行为输入，批量驱动下游文生图、图生视频、音频合成等生成节点；
* **人机协作界面**：既支持人类进行类似 Airtable / Excel 的精细化表格编辑，又支持 AI Agent（通过 MCP/Tool）以结构化 JSON 进行高频自动读写。

为此，系统引入 **结构化数据表节点（Table Node）**，并采用**画布元数据与表体数据分离**的 `.htable` 存储规范。

---

## 2. 架构设计与存储规范

### 2.1 双层解耦存储模型（Dual-layer Storage）

为避免因庞大的表格数据（数千行或大量 Base64/Asset 引用）造成画布主索引文件 `canvas.json` 膨胀及渲染卡顿，采用**两层分离存储机制**：

```
工作区目录 / (Workspace Root)
├── .hilo/ (或 .omnimux/)
│   ├── canvas.json              # [L1 画布层] 记录节点几何位置、连接边、元数据索引
│   ├── tables/
│   │   ├── oyrvzzq6gyan.htable  # [L2 表体层] 独立的结构化数据表文件 (JSON 规范)
│   │   └── <tableId>.htable
│   ├── storage.json             # 工作区全局配置与偏好
│   └── index.sqlite             # 资产与版本索引数据库
```

```
┌────────────────────────────────────────────────────────┐
│  canvas.json (轻量节点索引)                             │
│  {                                                     │
│    "id": "node_tbl_01",                                │
│    "type": "table",                                    │
│    "data": { "path": ".hilo/tables/tbl_01.htable" }    │
│  }                                                     │
└──────────────────────────┬─────────────────────────────┘
                           │ 异步加载 / 引用解耦
                           ▼
┌────────────────────────────────────────────────────────┐
│  .hilo/tables/tbl_01.htable (完整表体 Payload)           │
│  { "version": 1, "columns": [...], "rows": [...] }     │
└────────────────────────────────────────────────────────┘
```

### 2.2 存储原子性与并发安全
* **路径命名约束**：工作区相对路径 `\.hilo\/tables\/[A-Za-z0-9_-]+\.htable$`；
* **原子写入**：采用 `tmp_file -> rename` 模式落地，杜绝并发写入时产生残缺 JSON；
* **文件锁/节点互斥锁**：后端提供基于 `nodeId / tablePath` 的读写互斥锁，避免前端编辑器与后台 Agent/MCP 工具同时覆写产生竞态。

---

## 3. 数据模型与 Schema 规范（`.htable`）

### 3.1 完整 Schema 定义（TypeScript 描述）

```typescript
/** 表格存储主格式 */
export interface HTableDocument {
  /** 格式版本号，当前固定为 1 */
  version: number;
  /** 字段列定义列表 */
  columns: HTableColumn[];
  /** 行数据列表 */
  rows: HTableRow[];
  /** 视图持久化筛选规则（可选） */
  filter?: HTableFilter;
  /** 行高显示模式（可选，默认 "low"） */
  rowHeight?: 'low' | 'medium' | 'tall' | 'extraTall';
}

/** 字段类型定义 */
export type HTableFieldType = 'text' | 'number' | 'attachment';

/** 字段列定义 */
export interface HTableColumn {
  /** 列唯一标识 (如 col_xehuo4mi) */
  id: string;
  /** 列名 / 字段标题 */
  title: string;
  /** 字段类型 */
  type: HTableFieldType;
  /** 是否显示在表格视图中 */
  visible: boolean;
  /** 列宽（像素，范围 40 ~ 2000，默认 200） */
  width?: number;
}

/** 附件单元格结构 */
export interface HTableAttachment {
  /** 资产 ID */
  assetId: string;
  /** 资产文件名 */
  name: string;
  /** 资产多模态分类 */
  kind: 'image' | 'video' | 'audio' | 'text';
  /** 可选缩略图 URL / 相对路径 */
  thumbnailUrl?: string;
}

/** 单元格值类型：文本 | 数值 | 附件列表 | 空值 */
export type HTableCellValue = string | number | HTableAttachment[] | null;

/** 行记录定义 */
export interface HTableRow {
  /** 单元格数组，下标严格对应 columns[i] */
  cells: HTableCellValue[];
}

/** 筛选匹配策略 */
export type FilterMatchPolicy = 'all' | 'any'; // all: 且, any: 或

/** 筛选运算符 */
export type FilterOperator =
  | 'equals'      // 等于
  | 'notEquals'   // 不等于
  | 'contains'    // 包含
  | 'notContains' // 不包含
  | 'gt'          // 大于 (数值)
  | 'gte'         // 大于等于 (数值)
  | 'lt'          // 小于 (数值)
  | 'lte'         // 小于等于 (数值)
  | 'empty'       // 为空
  | 'notEmpty';   // 不为空

/** 单条筛选条件 */
export interface HTableFilterCondition {
  /** 目标列索引下标 (0-based) */
  columnIndex: number;
  /** 匹配运算符 */
  op: FilterOperator;
  /** 比较值 (empty / notEmpty 时可缺省) */
  value?: string | number;
}

/** 筛选器配置 */
export interface HTableFilter {
  match: FilterMatchPolicy;
  conditions: HTableFilterCondition[];
}
```

---

## 4. UI 界面与交互行为规格（PRD 详情）

根据逆向与真实产品交互分析，表格系统提供 **画布缩略卡片态** 与 **全屏电子表格编辑态** 两个核心视图，以及 3 个关键配置弹层。

```
+-------------------------------------------------------------------------+
| [视图 1] 画布卡片态 (Canvas Preview Card)                                 |
| ┌─────────────────────────────────────────────────────────────┐         |
| │ ▦ 未命名表格                                [⧉ 展开] [⛶ 全屏]│         |
| │ ┌─────────────────────────────────────────────────────────┐ │         |
| │ │ A= 文本                                                  │ │         |
| │ ├─────────────────────────────────────────────────────────┤ │  ( + )  |
| │ │ 暂无数据 — 点击下方 + 添加一行                          │ │ 衍生端口 |
| │ └─────────────────────────────────────────────────────────┘ │         |
| └─────────────────────────────────────────────────────────────┘         |
+-------------------------------------------------------------------------+
                                    │ 点击全屏 / 双击展开
                                    ▼
+-------------------------------------------------------------------------+
| [视图 2] 全屏电子表格编辑态 (Full-screen Spreadsheet Stage Overlay)       |
| ┌─────────────────────────────────────────────────────────────────────┐ │
| │ 未命名表格          [⚙ 字段配置] [T 筛选●] [三 行高] | [↶] [↷] | [✕ 关闭] │ │
| ├─────────────────────────────────────────────────────────────────────┤ │
| │ [ ] │ A= 文本                │ + 新增列                             │ │
| ├─────┼────────────────────────┼──────────────────────────────────────┤ │
| │  1  │ 提示词模板 A           │                                      │ │
| │  2  │ 提示词模板 B           │                                      │ │
| ├─────┴────────────────────────┴──────────────────────────────────────┤ │
| │ + 添加行                                                            │ │
| └─────────────────────────────────────────────────────────────────────┘ │
+-------------------------------------------------------------------------+
```

### 4.1 视图 1：画布缩略卡片态（Canvas Preview Node）
1. **头部区域**：
   - 节点图标 + 表格标题（支持双击内联重命名）。
   - 右上角快捷操作：`[+] 添加行`、`[⛶] 全屏进入详情编辑`。
2. **内容区域**：
   - 渲染前 N 行（带滚动截断）；
   - 空数据时显示空状态占位引导：*“暂无数据 — 点击下方 + 添加一行”*。
3. **连接端口（DAG Handles）**：
   - 右侧中央提供输出端口 `(+)`，支持拖拽连线至下游下游生成节点（如 Video / Image / LLM Node），作为批处理数据源驱动。

### 4.2 视图 2：全屏沉浸式电子表格态（Spreadsheet Overlay）
1. **顶部导航栏（Toolbar）**：
   - **标题区**：左侧显示表名，可直接点选编辑。
   - **工具区**：
     - `[⚙ 字段配置]`：呼出字段抽屉/弹层，管理列属性。
     - `[T 筛选]`：呼出过滤条件配置弹层；当存在有效过滤规则时，图标右上角显示蓝色高亮徽标（Active Dot Indicator）。
     - `[三 行高]`：呼出行高预设切换弹层。
     - `[↶ 撤销] / [↷ 重做]`：单表历史栈，支持 `Cmd+Z` / `Cmd+Shift+Z`。
     - `[✕ 关闭]`：退出全屏，返回主画布。
2. **数据表格区域（DataGrid）**：
   - **序号/选择列**：首列固定为行号与复选框（用于批量删除/批量衍生）。
   - **表头（Header Row）**：显示字段类型图标（`A=` 文本、`#` 数值、`📎` 附件）与字段名称；末尾提供 `+` 快捷新增列按钮。
   - **数据行（Rows）**：支持键盘光标导航、Tab 切换、双击编辑单元格、拖拽选区。
   - **底部动作行**：`+ 添加行` 快捷按钮。

---

### 4.3 核心配置弹层规格

#### 弹层 1：【字段配置】面板（Field Configuration）
* **展示形式**：Popover / 右侧抽屉。
* **功能清单**：
  * **排序**：列表项左侧包含 6 触点拖拽把手（`::`），支持拖拽调整列顺序。
  * **类型与名称**：展示字段类型图标与列名。
  * **显隐控制**：点击眼睛图标（`visible: true/false`）切换该列在视图中的展示状态。
  * **更多操作菜单（`...`）**：
    * `[✏ 编辑]`：修改字段标题、修改列宽、设置默认值。
    * `[🗑 删除]`：删除该列（级联清理所有行的对应单元格数据）。
  * **底部入口**：`+ 新增字段`（选择类型：文本 / 数值 / 附件）。

#### 弹层 2：【设置筛选条件】弹层（Filter Builder）
* **展示形式**：Dropdown Popover（附带条件组合控制器）。
* **匹配模式**：当多于 1 条条件时，提供 `符合以下所有条件(all)` / `符合以下任一条件(any)` 切换。
* **单条件行构成**：
  1. **字段下拉框**：选择目标列（如“文本”）。
  2. **运算符下拉框**：
     * 文本类：`等于` (`equals`)、`不等于` (`notEquals`)、`包含` (`contains`)、`不包含` (`notContains`)、`为空` (`empty`)、`不为空` (`notEmpty`)。
     * 数值类：`大于` (`gt`)、`大于等于` (`gte`)、`小于` (`lt`)、`小于等于` (`lte`)。
  3. **值输入框**：支持文本输入；若运算符为“为空/不为空”，输入框自动隐藏或置灰。
  4. **删除按钮（`✕`）**：移除当前条件。
* **底部动作**：`+ 添加条件`。

#### 弹层 3：【行高】切换弹层（Row Height Preset）
* **展示形式**：单选 Menu Popover（当前项右侧展示勾选符号 `✓`）。
* **预设档位**：
  1. **低 (`low`)**：行高 ~32px，适合高密度纯文本排查。
  2. **中等 (`medium`)**：行高 ~48px（默认），适合常规文本与单标签展示。
  3. **高 (`tall`)**：行高 ~72px，适合多行文本预览与小型附件缩略图。
  4. **超高 (`extraTall`)**：行高 ~120px，适合图片、视频分镜大图卡片预览。

---

## 5. 多模态附件与 DAG 批量衍生协同

### 5.1 附件单元格设计（Multi-modal Attachment）
* **数据结构**：单元格存储为 `HTableAttachment[]` 数组。
* **交互行为**：
  * 支持从系统本地拖拽文件直接放入单元格；
  * 支持点击弹出多模态资产选择器（结合工作区资产库）；
  * 支持右键将上游生成节点（图片/视频）“写入表格指定单元格”。

### 5.2 表格驱动的 DAG 批处理机制（Batch Derivation）
* 当从表格节点的右侧端口连线到下游任务节点时：
  * **参数映射**：下游节点可绑定表格字段作为输入变量（如 `Prompt = {{row.分镜描述}}`，`ReferenceImage = {{row.角色参考图}}`）；
  * **并发控制**：工作区执行器（DAG Executor）根据表格的有效行列表进行并行或串行迭代调度，并将生成的产物资产写回下游节点或生成新的资产行。

---

## 6. AI Agent / MCP 工具协议标准

系统需暴露标准 MCP Tools，让 AI Agent 可以直接读写表格：

### 6.1 `canvas_write_table_node`（创建 / 覆写表格节点）
* **入参格式（Input Schema）**：
  ```json
  {
    "nodeId": "optional string (有值则更新现有表格，缺省则新建节点)",
    "title": "表格名称 (如: '短剧分镜表')",
    "columns": [
      { "title": "场次", "type": "number", "width": 80 },
      { "title": "分镜描述", "type": "text", "width": 300 },
      { "title": "参考图", "type": "attachment", "width": 150 }
    ],
    "rows": [
      {
        "cells": [
          1,
          "动态高速平行跟随镜头。非洲大草原上猎豹冲刺",
          [{ "assetId": "ast_123", "name": "ref.png", "kind": "image" }]
        ]
      }
    ],
    "filter": {
      "match": "all",
      "conditions": []
    },
    "rowHeight": "tall",
    "position": { "x": 100, "y": 200 },
    "sourceNodeIds": ["node_upstream_script"]
  }
  ```
* **出参格式（Output Schema）**：
  ```json
  {
    "nodeId": "node_tbl_xxxx",
    "tablePath": ".hilo/tables/xxxx.htable",
    "columnCount": 3,
    "rowCount": 1,
    "created": true
  }
  ```

### 6.2 `canvas_get_node`（读取表格节点详情）
* 对 Agent 返回清洗后的 `tableContent`（包含 `columns`、`rows`、`filter`、`rowHeight`），屏蔽底层的物理存储逻辑，方便 LLM 快速结构化理解和二次编辑。

---

## 7. 前端实现技术选型建议

| 模块 | 推荐选型 | 理由与考量 |
|:---|:---|:---|
| **表格渲染引擎** | `@tanstack/react-table` + 虚拟滚动 (`@tanstack/react-virtual`) | 无头（Headless）架构，完全解耦 UI，能 100% 还原自定义的主题 Token 与圆角卡片视觉；支持超大表性能。 |
| **画布节点集成** | `@xyflow/react` (React Flow 12) 自定义节点 | 标准节点包装器，将卡片态注册到 `nodeTypes.table`，与工作区 DAG 连线无缝打通。 |
| **状态与历史管理** | `zustand` + `immer` + 自建 Command History Stack | 保证全屏编辑态与画布卡片态的状态一致性，实现轻量可靠的单元格级 Undo/Redo。 |
| **持久化存储** | NodeJS / Electron `fs/promises` 原子写入 | 写入临时文件后重命名，配合互斥锁保障本地文件一致性。 |

---

## 8. 里程碑交付计划

* **M1（核心存储与 Schema 验证）**：实现 `.htable` 的 Zod Schema 校验、Node 读写互斥锁与底层原子读写 API。
* **M2（画布卡片节点实现）**：实现 React Flow `TableNode` 卡片视图、空状态引导、行数据简易渲染与衍生端口。
* **M3（全屏沉浸式电子表格与弹层）**：交付全屏 Stage Overlay，完成字段配置（排序/显隐/新增/删除）、条件筛选器（All/Any、多运算符）、行高预设器、Undo/Redo。
* **M4（多模态附件与 Agent MCP 工具接通）**：支持单元格拖拽绑定多模态图片/视频资产，上线 `canvas_write_table_node` 与 `canvas_get_node` MCP 工具链路。
