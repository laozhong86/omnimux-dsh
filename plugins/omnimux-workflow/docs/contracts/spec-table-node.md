# 【技术实施规范】画布结构化数据表节点系统架构与实现规范 (Technical Spec)

> **文档标识**：`SPEC-CANVAS-TABLE-NODE-001`  
> **版本**：v1.0.0  
> **状态**：Approved / Ready for Implementation  
> **关联 PRD**：`docs/research/prd-canvas-table-node.md` (v1.1.0)  
> **交互原型**：`docs/research/table-node-fullscreen-demo.html`

---

## 1. 架构总览 (Architecture Overview)

画布结构化数据表节点由 **五大核心子系统** 构成：
1. **L1 画布节点层 (Canvas Node Layer)**：基于 `@xyflow/react` 封装的轻量预览卡片与 DAG 输出端口；
2. **L2 全屏电子表格层 (Spreadsheet Stage Layer)**：基于 `@tanstack/react-table` 与 `@tanstack/react-virtual` 的无头全功能表格网格；
3. **交互弹层与模态层 (Floating & Popover Layer)**：精准锚定在各个工具栏按钮下的配置抽屉（字段配置、多条件筛选、行高预设、列编辑模态）；
4. **状态与历史事务引擎 (State & Transaction Store)**：基于 `zustand` + `immer` 的不可变状态树与 Command-based Undo/Redo 历史栈；
5. **持久化与 MCP 服务层 (I/O & MCP Layer)**：原子文件系统写入、文件级读写互斥锁与 AI Agent 标准化读写 Tool 协议。

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          User Interface / View Layer                        │
├──────────────────────────────────────┬──────────────────────────────────────┤
│  [View A] Canvas Preview Node        │  [View B] Full-screen Stage Overlay  │
│  - TableNode.tsx (xyflow)            │  - SpreadsheetStage.tsx              │
│  - Top Toolbar (Add row, Fullscreen) │  - Topbar.tsx (Title, Popover Triggers)│
│  - Preview 3 Rows / Empty State      │  - VirtualDataGrid.tsx (TanStack)    │
│  - DAG Output Handle (+)             │  - PopoverFieldConfig.tsx            │
│                                      │  - PopoverFilterBuilder.tsx          │
│                                      │  - PopoverRowHeight.tsx              │
│                                      │  - ModalColumnEditor.tsx             │
└──────────────────────────────────────┴──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     Zustand State & Transaction Store                       │
│  - tableSlice: columns, rows, filter, rowHeight, metadata                   │
│  - historySlice: undoStack[], redoStack[], maxDepth: 50                     │
│  - uiSlice: activePopover, modalMode, editingCell, selectedRows             │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                   Storage & MCP IPC Layer (Cordis / Node)                   │
├──────────────────────────────────────┬──────────────────────────────────────┤
│  File Storage Engine (.htable)       │  AI Agent / MCP Protocol Engine      │
│  - Atomic write: tmp -> rename       │  - canvas_write_table_node           │
│  - Async Lock (AsyncMutex by path)   │  - canvas_get_node                   │
│  - Zod Document Schema Validator     │  - Downstream DAG Batch Dispatcher   │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

---

## 2. 目录结构与模块组织 (Directory Structure)

在工作流插件源码目录 `product/omnimux-dsh/plugins/omnimux-workflow/src/` 中，表节点模块严格组织如下：

```
plugins/omnimux-workflow/src/
├── components/
│   └── table-node/
│       ├── TableNode.tsx                  # 画布节点卡片主入口 (xyflow node)
│       ├── TableNodeHeader.tsx            # 卡片外部标题与顶部悬浮操作条
│       ├── TableNodeCardPreview.tsx       # 卡片内部前 3 行预览与空状态
│       └── stage/
│           ├── SpreadsheetStage.tsx       # 全屏独立表格主容器 (Stage Overlay)
│           ├── StageTopbar.tsx            # 顶部导航工具栏 (Title + 6 按钮群)
│           ├── VirtualDataGrid.tsx        # TanStack 虚拟滚动网格渲染
│           ├── CellRenderer.tsx           # 文本/数字/附件多模态单元格渲染器
│           ├── popovers/
│           │   ├── PopoverFieldConfig.tsx # 【字段配置】弹层 (拖拽排序/显隐/更多)
│           │   ├── PopoverFilterBuilder.tsx#【筛选条件】弹层 (多条件/操作符/蓝点联动)
│           │   └── PopoverRowHeight.tsx   # 【行高】预设弹层 (低/中/高/超高切换)
│           └── modals/
│               └── ModalColumnEditor.tsx  # 【添加列/编辑列】模态弹窗
├── store/
│   ├── table-store.ts                     # Zustand Store 根配置
│   ├── slices/
│   │   ├── tableDataSlice.ts              # 核心数据切片 (CRUD 列与行)
│   │   ├── tableHistorySlice.ts           # 历史事务栈 (Undo / Redo)
│   │   └── tableUiSlice.ts                # 弹层与选中态 UI 切片
├── services/
│   ├── TableStorageService.ts             # .htable 文件原子读写与互斥锁
│   ├── TableFilterEngine.ts               # 前端与内存级多条件匹配过滤计算
│   └── TableBatchDispatcher.ts            # DAG 批处理参数映射与多下游任务分发
└── types/
    ├── htable.ts                          # 纯 TypeScript 核心数据类型定义
    └── mcp-table.ts                       # MCP Tools 接口与 Zod Schemas
```

---

## 3. 核心类型定义与 Zod 校验 (Type Definitions & Schemas)

### 3.1 核心数据结构 (`types/htable.ts`)

```typescript
import { z } from 'zod';

/** 字段类型定义 */
export const HTableFieldTypeSchema = z.enum(['text', 'number', 'attachment']);
export type HTableFieldType = z.infer<typeof HTableFieldTypeSchema>;

/** 字段列定义 */
export const HTableColumnSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: HTableFieldTypeSchema,
  visible: z.boolean().default(true),
  width: z.number().min(60).max(2000).default(240),
});
export type HTableColumn = z.infer<typeof HTableColumnSchema>;

/** 附件多模态单元格结构 */
export const HTableAttachmentSchema = z.object({
  assetId: z.string(),
  name: z.string(),
  kind: z.enum(['image', 'video', 'audio', 'text']),
  thumbnailUrl: z.string().optional(),
  mimeType: z.string().optional(),
  size: z.number().optional(),
});
export type HTableAttachment = z.infer<typeof HTableAttachmentSchema>;

/** 单元格值类型 */
export const HTableCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.array(HTableAttachmentSchema),
  z.null(),
]);
export type HTableCellValue = z.infer<typeof HTableCellValueSchema>;

/** 行记录定义 */
export const HTableRowSchema = z.object({
  id: z.string().optional(),
  cells: z.array(HTableCellValueSchema),
});
export type HTableRow = z.infer<typeof HTableRowSchema>;

/** 筛选匹配操作符 */
export const FilterOperatorSchema = z.enum([
  'equals',
  'notEquals',
  'contains',
  'notContains',
  'gt',
  'gte',
  'lt',
  'lte',
  'empty',
  'notEmpty',
]);
export type FilterOperator = z.infer<typeof FilterOperatorSchema>;

/** 单条筛选条件 */
export const HTableFilterConditionSchema = z.object({
  columnIndex: z.number().int().min(0),
  op: FilterOperatorSchema,
  value: z.union([z.string(), z.number()]).optional(),
});
export type HTableFilterCondition = z.infer<typeof HTableFilterConditionSchema>;

/** 筛选配置 */
export const HTableFilterSchema = z.object({
  match: z.enum(['all', 'any']).default('all'),
  conditions: z.array(HTableFilterConditionSchema),
});
export type HTableFilter = z.infer<typeof HTableFilterSchema>;

/** 行高预设枚举 */
export const HTableRowHeightSchema = z.enum(['low', 'medium', 'tall', 'extraTall']);
export type HTableRowHeight = z.infer<typeof HTableRowHeightSchema>;

/** 表格主文档 Schema (.htable) */
export const HTableDocumentSchema = z.object({
  version: z.literal(1),
  title: z.string().default('未命名表格'),
  columns: z.array(HTableColumnSchema),
  rows: z.array(HTableRowSchema),
  filter: HTableFilterSchema.optional(),
  rowHeight: HTableRowHeightSchema.default('low'),
});
export type HTableDocument = z.infer<typeof HTableDocumentSchema>;
```

---

## 4. 状态机与历史事务引擎设计 (State & Undo/Redo Engine)

为支持全屏独立编辑态的高频单元格变更、列增删、行排序，以及无延迟的 `Cmd+Z` / `Cmd+Shift+Z` 撤销重做，采用 **Command Pattern（命令模式）+ Immer Patch** 机制：

```typescript
export interface TableCommand {
  type: string;
  description: string;
  timestamp: number;
  do: (draft: HTableDocument) => void;
  undo: (draft: HTableDocument) => void;
}

export interface TableStateStore {
  // Document State
  document: HTableDocument;
  
  // History Stack
  undoStack: TableCommand[];
  redoStack: TableCommand[];
  
  // UI Transient State
  activePopover: 'field-config' | 'filter' | 'row-height' | null;
  activeContextMenuColIdx: number | null;
  modalState: {
    isOpen: boolean;
    mode: 'add' | 'edit';
    targetColumnIndex: number | null;
    initialTitle: string;
    initialType: HTableFieldType;
  };
  
  // Actions
  executeCommand: (cmd: Omit<TableCommand, 'timestamp'>) => void;
  undo: () => void;
  redo: () => void;
  
  // Direct UI Setters
  setActivePopover: (popover: 'field-config' | 'filter' | 'row-height' | null) => void;
  openColumnModal: (mode: 'add' | 'edit', colIdx?: number) => void;
  closeColumnModal: () => void;
  
  // Mutation Helpers
  updateTitle: (newTitle: string) => void;
  updateCell: (rowIdx: number, colIdx: number, value: HTableCellValue) => void;
  addRow: (cells?: HTableCellValue[]) => void;
  deleteRow: (rowIdx: number) => void;
  addColumn: (title: string, type: HTableFieldType, width?: number) => void;
  updateColumn: (colIdx: number, title: string, type: HTableFieldType) => void;
  deleteColumn: (colIdx: number) => void;
  toggleColumnVisibility: (colIdx: number) => void;
  reorderColumns: (sourceIdx: number, targetIdx: number) => void;
  setRowHeight: (height: HTableRowHeight) => void;
  setFilterConditions: (conditions: HTableFilterCondition[]) => void;
}
```

### 4.1 自动持久化防抖 (Debounced Autosave)
```typescript
// 监听 Document 变更，自动触发原子写入 (防抖 300ms)
useTableStore.subscribe(
  (state) => state.document,
  debounce(async (doc: HTableDocument) => {
    await TableStorageService.saveTable(currentTablePath, doc);
  }, 300)
);
```

---

## 5. UI 交互与渲染引擎规格 (UI Implementation Specs)

### 5.1 顶部操作栏 (Stage Topbar) 布局规则
* **容器规格**：高度 `52px`，底边框 `1px solid #e5e6eb`，背景 `#ffffff`，左右内边距 `20px`；
* **左侧**：仅包含 `<input class="table-title-editable" />`，字号 `16px`，粗细 `600`，悬浮呈现浅灰边框背景，聚焦呈现蓝色外框，无任何模式切换按钮；
* **右侧按钮群**：
  * 胶囊按钮尺寸：高度 `32px`，内边距 `0 12px`，圆角 `8px`，背景 `#f2f3f5`，字号 `13px`；
  * `[⚙ 字段配置]`：激活态背景加深为 `#dcdfe6`；
  * `[▽ 筛选]`：当 `document.filter?.conditions.length > 0` 且包含有效值时，显示绝对定位在右上角的 `6px * 6px` 蓝色圆点；
  * `[三↕ 行高]`：激活态背景加深为 `#dcdfe6`；
  * 分隔符：高度 `16px`，宽度 `1px`，颜色 `#e5e6eb`；
  * `[↶ 撤销]` 与 `[↷ 重做]`：图标按钮，不可用时置灰（`opacity: 0.4; cursor: not-allowed`）；
  * `[✕ 关闭]`：点击触发退出全屏。

### 5.2 Popover 精准锚定与事件隔离
每个 Popover 均放置在对应按钮的父级包裹容器 `<div class="btn-menu-wrapper">` 内，并设置：
* `position: absolute; top: 40px;`（确保紧贴按钮下方弹出）；
* `z-index: 100`，外层带 `box-shadow: 0 10px 36px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.06)`；
* 弹层根元素及触发按钮均绑定 `e.stopPropagation()`，保证点击内部元素不向上传播导致误关；
* 全局 `window.addEventListener('click')` 统一负责关闭未锁定的 Popover。

### 5.3 虚拟滚动与行高映射规格
| 行高预设 (`rowHeight`) | 单元格高度 (`height`) | 垂直内边距 (`padding`) | 适用场景 |
|:---|:---|:---|:---|
| **`low` (低)** | `34px` | `2px 12px` | 密集纯文本排查、大批量脚本字段核对 |
| **`medium` (中等)** | `48px` | `6px 12px` | 标准表单与单标签展示（默认） |
| **`tall` (高)** | `72px` | `10px 12px` | 多行提示词换行展示、多模态小缩略图 |
| **`extraTall` (超高)** | `120px` | `12px 12px` | 图片卡片直接预览、视频分镜封面大图 |

---

## 6. 存储引擎与原子 I/O 规范 (Storage Engine)

### 6.1 `TableStorageService` 实现规格

```typescript
import fs from 'node:fs/promises';
import path from 'node:path';
import { AsyncMutex } from './AsyncMutex';
import { HTableDocument, HTableDocumentSchema } from '../types/htable';

export class TableStorageService {
  private static fileLocks = new Map<string, AsyncMutex>();

  private static getMutex(tablePath: string): AsyncMutex {
    if (!this.fileLocks.has(tablePath)) {
      this.fileLocks.set(tablePath, new AsyncMutex());
    }
    return this.fileLocks.get(tablePath)!;
  }

  /** 安全加载 .htable 表格文件 */
  static async loadTable(tablePath: string): Promise<HTableDocument> {
    const mutex = this.getMutex(tablePath);
    return await mutex.runExclusive(async () => {
      const raw = await fs.readFile(tablePath, 'utf-8');
      const json = JSON.parse(raw);
      return HTableDocumentSchema.parse(json);
    });
  }

  /** 原子化写入 .htable 文件 (tmp -> rename) */
  static async saveTable(tablePath: string, doc: HTableDocument): Promise<void> {
    const mutex = this.getMutex(tablePath);
    return await mutex.runExclusive(async () => {
      // 1. Zod 校验确保数据完整性
      const validated = HTableDocumentSchema.parse(doc);
      const content = JSON.stringify(validated, null, 2);

      // 2. 写入临时文件
      const dir = path.dirname(tablePath);
      await fs.mkdir(dir, { recursive: true });
      const tempPath = path.join(dir, `.${path.basename(tablePath)}.${Date.now()}.tmp`);

      await fs.writeFile(tempPath, content, 'utf-8');

      // 3. 原子重命名覆盖目标文件
      await fs.rename(tempPath, tablePath);
    });
  }
}
```

---

## 7. AI Agent / MCP 工具协议实现规格 (MCP Tools)

系统向 AI Agent 暴露两个标准 MCP 工具：

### 7.1 Tool: `canvas_write_table_node`
```typescript
export const canvasWriteTableNodeTool = {
  name: 'canvas_write_table_node',
  description: '在无限画布中创建或全量更新一个结构化数据表节点 (.htable)',
  parameters: z.object({
    nodeId: z.string().optional().describe('现有表节点 ID，留空则在画布新建'),
    title: z.string().describe('表格标题'),
    columns: z.array(HTableColumnSchema).describe('字段列定义列表'),
    rows: z.array(HTableRowSchema).describe('行记录数据列表'),
    filter: HTableFilterSchema.optional().describe('可选筛选配置'),
    rowHeight: HTableRowHeightSchema.optional().default('low').describe('行高预设'),
    position: z.object({ x: z.number(), y: z.number() }).optional().describe('画布坐标'),
    sourceNodeIds: z.array(z.string()).optional().describe('上游依赖节点 ID列表'),
  }),
  execute: async (args, context) => {
    // 1. 生成唯一 tableId 与物理路径 .hilo/tables/<tableId>.htable
    const tableId = args.nodeId || `tbl_${generateNanoid()}`;
    const tableRelPath = `.hilo/tables/${tableId}.htable`;
    const fullPath = path.join(context.workspaceRoot, tableRelPath);

    // 2. 保存表体文档
    const doc: HTableDocument = {
      version: 1,
      title: args.title,
      columns: args.columns,
      rows: args.rows,
      filter: args.filter,
      rowHeight: args.rowHeight || 'low',
    };
    await TableStorageService.saveTable(fullPath, doc);

    // 3. 登记/更新画布索引 canvas.json
    await context.canvasManager.upsertNode({
      id: tableId,
      type: 'table',
      position: args.position || { x: 100, y: 100 },
      data: {
        path: tableRelPath,
        title: args.title,
        columnCount: args.columns.length,
        rowCount: args.rows.length,
      },
    });

    return {
      nodeId: tableId,
      tablePath: tableRelPath,
      columnCount: args.columns.length,
      rowCount: args.rows.length,
      success: true,
    };
  },
};
```

### 7.2 Tool: `canvas_get_node` (表格类型解析)
当 `node.type === 'table'` 时，自动读取关联的 `.htable` 并以脱敏/清洗后的结构化 JSON 返回，供 LLM 分析或修改。

---

## 8. DAG 批处理分发引擎规范 (Batch Derivation Engine)

当用户从表格右侧的 `(+)` 端口拉线连接到下游生成节点（如 Video / Image / LLM Node）时，执行引擎按如下规范处理：

```
[ 表格节点 (N 行记录) ]
        │
        ▼ (右侧输出端口 +)
┌─────────────────────────────────────────────────────────────┐
│  DAG 批处理迭代器 (Batch Derivation Runner)                 │
│  - 过滤掉 filter 规则外的隐藏行                             │
│  - 提取每行有效字段字典: { '分镜描述': '...', '参考图': ... } │
└──────────────────────┬──────────────────────────────────────┘
                       │ 并发度控制 (Concurrency Limit = 3)
         ┌─────────────┼─────────────┐
         ▼             ▼             ▼
   [ 任务实例 1 ] [ 任务实例 2 ] [ 任务实例 N ]
   (下游节点 1)   (下游节点 2)   (下游节点 N)
```

1. **变量插值语法**：下游节点配置中支持使用 `{{row.<字段名>}}` 或 `{{row.<字段ID>}}`；
2. **多模态传递**：若绑定字段类型为 `attachment`，自动将该单元格的 `assetId` 转换为下游节点输入可识别的局部文件绝对路径或 Buffer；
3. **分发控制**：支持单行触发、选中行批量触发与全表全量批处理。

---

## 9. 验收测试与质量门禁 (Test Matrix & Quality Gates)

| 测试类别 | 测试用例 | 预期标准 |
|:---|:---|:---|
| **单元测试** | `TableStorageService` 原子写入测试 | 模拟异常断电与写入崩溃，目标文件无残缺损坏，tmp 自动回收 |
| **单元测试** | Zod Schema 校验与非法类型拦截 | 非法 fieldType 或缺少版本号时抛出明确异常 |
| **组件测试** | `StageTopbar` 三大按钮唤起与事件隔离 | 点击按钮展开对应弹层，点击外部自动关闭，面板内操作不触发关闭 |
| **组件测试** | 筛选蓝点徽标联动 | 添加有效筛选条件时蓝点亮起，清空/删除全部条件时蓝点消失 |
| **组件测试** | 撤销与重做历史事务栈 | 连续编辑 10 次单元格，按 10 次 `Cmd+Z` 100% 恢复初始状态 |
| **性能测试** | 1,000 行 * 20 列虚拟滚动渲染 | 帧率保持在 55fps 以上，滚动无白屏，内存占用 < 80MB |
| **MCP 工具测试** | `canvas_write_table_node` 端到端调用 | Agent 一次性写入 50 行分镜数据并能在全屏视图中毫秒级展现 |
