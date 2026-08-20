# 画布数据模型（canvas.json）

> 快照 schema 单一事实来源：`src/shared/canvasTypes.ts` + `src/workflow/workspace/snapshotSchema.ts`（zod）。窄化自 Gxgen `CanvasWorkspaceSnapshot`（裁掉 tracks / textOverlays / previewSettings —— 时间线域，V1 不做）。

## 磁盘布局

```
$DSH_HOME/omnimux/workflow/
├── workspaces/<workspaceId>/canvas.json    # 本文档的快照（原子写：tmp + rename）
├── executions/<executionId>/               # M3：dag-state.json + task-ledger.json
└── media/<workspaceId>/<executionId>/      # M4：seam 产物落盘（静态路由回显）
```

workspaceId 形如 `ws_<12 hex>`（随机，UUID 派生）。

## 快照结构

```jsonc
{
  "schemaVersion": 2,            // 迁移判别（zod literal）
  "id": "ws_a1b2c3d4e5f6",
  "name": "我的工作流",
  "version": 42,                 // 乐观锁计数器：每次 PUT +1；创建时为 0
  "nodes": [ /* xyflow Node[]（窄化：id/type/position/data/尺寸/父子） */ ],
  "edges": [ /* xyflow Edge[]（id/source/target/handles/type/style/data） */ ],
  "settings": {
    "maxParallel": 3,            // 执行并发（串行 = 1；M4 消费）
    "failStrategy": "fail-fast"  // 'fail-fast' | 'continue'（M3 消费）
  },
  "metadata": {
    "createdAt": "2026-08-20T…Z",
    "updatedAt": "2026-08-20T…Z",
    "nodeCount": 12
  }
}
```

## 校验策略

- **读入宽松**：未知字段剥离、settings 缺省补默认（maxParallel 3 / fail-fast）；坏 JSON / 不合法 → 视为不存在（上层 404）
- **写入严格**：save 前整体 zod 校验，失败 → 400 `invalid-snapshot`（不落盘）
- **原子写**：`<file>.tmp-<pid>-<ts>` → rename，防半截 JSON

## 乐观锁协议

1. client 保存时携带 `expectedVersion`（其最后所见 version）
2. Host 比对不符 → 409 `version_conflict` + `current`（服务端当前版本）
3. client 拿 `current` 拉新快照合并重存（M2 交付完整 UX；M1 为提示文案）

单用户本地场景冲突概率低，机制防「两个 dsh 窗口同时开同一画布」。

## 节点 data（material 类型，窄化自 Gxgen MaterialNodeData）

保留字段：`label` / `materialType` / `status(empty|ready|generating|completed|failed)` / `content` / `mediaUrl` / `taskId` / `errorMessage` / `generatedContent` / `selectedTool` / `prompt` / `params` / `failStrategy` / 尺寸组（`nodeWidth` / `nodeHeight` / `dimensions` / `aspectRatio` / `duration`）。
裁掉：预设服务绑定（sceneId/modelOptions/parameterTemplate…）、输入槽位、角色设计、字幕样式。
island 内部注入键（`__catalog`）保存前剥离，永不落盘。
