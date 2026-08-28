# 画布数据模型（canvas.json）

> 快照 schema 单一事实来源：`src/shared/canvasTypes.ts` + `src/workflow/workspace/snapshotSchema.ts`（zod）。窄化自 Gxgen `CanvasWorkspaceSnapshot`（裁掉 tracks / textOverlays / previewSettings —— 时间线域，V1 不做）。

## 磁盘布局

```
$DSH_HOME/omnimux/workflow/
├── workspaces/<workspaceId>/canvas.json    # 本文档的快照（原子写：tmp + rename）
├── executions/<executionId>/               # M3：dag-state.json + task-ledger.json
└── media/<workspaceId>/<executionId>/      # M4：seam 产物落盘（静态路由回显）
```

本地导入**不**复制进上述目录：源文件留在用户磁盘，`canvas.json` 只记 `realPath`。`media/` 仍仅服务 AI 生成产物。见 [workflow-media-asset-indexing.md](./workflow-media-asset-indexing.md)。

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

裁掉：预设服务绑定（sceneId/modelOptions/parameterTemplate…）、输入槽位、角色设计、字幕样式。
island 内部注入键（`__catalog`）保存前剥离，永不落盘。
瞬时 `blob:` URL（弹窗预览）保存前剥离或改写，**禁止**出现在 `canvas.json`。

xyflow 运行时字段（`measured` / `dragging` / `positionAbsolute` / `resizing` / `selected`）也不落盘：
客户端 `persistSanitize` 白名单消毒（脏签名与 PUT 共用）；Host `WorkspaceStore.save` 落盘 zod `strict.data`（默认 strip）。
仅选中或首次布局量尺寸不得抬 `version`。

### 字段表

| 字段 | 类型 | 落盘 | 说明 |
|---|---|---|---|
| `label` | `string` | 是 | 空串时 UI 回退 i18n `node.type.<materialType>` |
| `materialType` | `'text' \| 'image' \| 'video' \| 'audio'` | 是 | 素材族 |
| `status` | 见下方状态机 | 是 | 导入节点含 `offline` |
| `content` | `string?` | 是 | 文本正文或导入文件显示名 |
| `mediaUrl` | `string?` | 是 | **派生**预览 URL，禁止 `blob:` |
| `mediaAssets` | `{ type, url }[]?` | 是 | `url` 与 `mediaUrl` 同规则；禁止 `blob:` |
| `taskId` | `string?` | 是 | 生成任务 id |
| `errorMessage` | `string?` | 是 | 失败文案 |
| `generatedContent` | `string?` | 是 | 生成文本预览 |
| `selectedTool` | `MaterialTool` | 是 | 导入默认为 `'import'` |
| `prompt` | `string?` | 是 | 生成指令 |
| `params` | `Record<string, unknown>` | 是 | 生成参数 |
| `failStrategy` | `'abort' \| 'skip'` | 是 | 节点失败策略 |
| `nodeWidth` / `nodeHeight` | `number?` | 是 | 卡片尺寸 |
| `dimensions` | `{ width, height }?` | 是 | 媒体像素尺寸 |
| `aspectRatio` | `number?` | 是 | 宽高比 |
| `duration` | `number?` | 是 | 音视频时长（秒） |
| `realPath` | `string?` | 是 | 本地导入绝对路径。索引，不复制源文件。Issue #122 |
| `originalName` | `string?` | 是 | 导入显示名，默认 `basename(realPath)` |
| `fileSize` | `number?` | 是 | 字节；`stat.size` |
| `mimeType` | `string?` | 是 | 白名单 MIME（image / video / audio） |
| `isMissing` | `boolean?` | 是 | `true` ⇔ 导入节点 `status === 'offline'` |

本地导入字段的语义、派生公式与 Relink 见 [workflow-media-asset-indexing.md](./workflow-media-asset-indexing.md)。

`mediaUrl` 两条互斥来源（不得混写）：

1. **本地导入**：`/omnimux-workflow/api/local-file?path=` + `encodeURIComponent(realPath)`。
2. **AI 生成产物**（本 Issue 不改）：`/omnimux-workflow/media/executions/<id>/…`，对应磁盘 `$DSH_HOME/omnimux/workflow/media/executions/`。

### 状态机

```
empty | ready | offline | generating | completed | failed
```

| 状态 | 谁用 | 含义 |
|---|---|---|
| `empty` | 全部 | 无输出。导入节点无 `realPath` |
| `ready` | 导入 / 手工文本 | 可预览或可连线。导入节点：源文件在盘且 `isMissing === false` |
| `offline` | **仅本地导入** | 源文件丢失或不可读。保留 `realPath`，UI = Media Offline + Relink。画布不崩 |
| `generating` | 生成管线 | 任务进行中 |
| `completed` | 生成管线 | 产物已回填 |
| `failed` | 生成管线 | 任务失败 |

不变量：导入节点 `ready` ⇔ `isMissing === false`；`offline` ⇔ `isMissing === true`。生成节点无 `realPath`，hydrate probe 不得把它们改成 `offline`。
