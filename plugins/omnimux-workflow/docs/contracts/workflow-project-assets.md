# 工作流项目私有资产（assets.json）

> Issue [#166](https://github.com/laozhong86/omnimux-dsh/issues/166) · 风险 **R1** · 插件 `omnimux-workflow`
> 压缩契约。Host 真源：`src/workflow/workspace/ProjectAssetsStore.ts`；路由常量：`src/shared/api.ts`。

## 1. 定界

| 决策 | 结论 |
|---|---|
| 磁盘 | `$DSH_HOME/omnimux/workflow/workspaces/<id>/assets.json`，与 `canvas.json` **并列** |
| 乐观锁 | 独立 `rev`；**不得**抬 `canvas.version` |
| 语义 | 只记绝对路径，**不 copy / move / unlink** 用户源文件 |
| 主体库 | Client 只 HTTP 消费 `GET/POST /omnimux/assets/library` 与 `POST /omnimux/assets/pick`；**禁止** `import omnimux-assets` |
| 画布导入 | 仍走 #122 `POST /omnimux-workflow/api/pick`；资产 Tab 才走 `/omnimux/assets/pick` |

非目标：Lightbox、批量框选、把 `assets.json` 塞进 `canvas.json`、隐藏 `<input type=file>` 当主路径、`blob:` 入盘。

## 2. Schema（schemaVersion = 1）

```jsonc
{
  "schemaVersion": 1,
  "rev": 1,
  "folders": [{ "id": "fld_…", "name": "角色", "parentId": null, "updatedAt": 0 }],
  "items": [{
    "id": "ast_…",
    "name": "hero.png",
    "type": "image",          // image | video | audio | doc
    "parentId": "fld_…",
    "real_path": "/abs/path/hero.png",
    "updatedAt": 0
  }]
}
```

- GET 缺失文件 / 坏 JSON → `{schemaVersion:1, rev:0, folders:[], items:[]}`，**不 404**。
- 无 `canvas.json`（workspace 不存在）→ 404 `workspace-not-found`。
- 原子写：`<file>.tmp-<pid>-<ts>` → rename。

## 3. REST

Canonical `/omnimux-workflow`；legacy `/dsh-workflow` in-memory 改写。写操作 `assertLocalWrite`。

| 方法 | 路径 | 行为 |
|---|---|---|
| GET | `/api/workspaces/:id/assets` | 读文档；空/坏 JSON → rev:0 |
| PUT | `/api/workspaces/:id/assets` | `{expectedRev, folders, items}`；错 rev → 409 `{error, current}` |
| POST | `/api/workspaces/:id/assets/mkdir` | `{name, parentId?, expectedRev?}`；同层重名 → 409 `name-conflict` |
| POST | `/api/workspaces/:id/assets/index` | `{paths, parentId?, expectedRev?}`：只索引绝对路径，不 copy |

错误码：`blob-url-forbidden` 400 · `invalid-path` 400 · `not-a-file` 400 · `name-invalid` 400 · `name-conflict` 409 · `version_conflict` 409 · `workspace-not-found` 404。

闸：`blob:` / 相对路径 / NUL → 400；目录进 `items` → `not-a-file`；directory 可进 `folders`（可记 `real_path`，不扁平展开）。删 JSON 记录不得 `unlink` 源文件。

## 4. 主体库 ACL（Client 复制最小 fetch）

| 方法 | 路径 | 用途 |
|---|---|---|
| GET | `/omnimux/assets/library?type=&q=` | 列表 |
| POST | `/omnimux/assets/library` | 最小创建 `{name, type:"custom"}` |
| POST | `/omnimux/assets/pick` | `{kind:"file"\|"directory"}` |
| GET | `/omnimux/assets/library/preview?id=&file=` | 预览 URL 拼接，不造 Unsplash |

胶囊 7 个，文案 = TYPE_CITE：全部 / 角色 / 场景 / 风格包 / 道具 / 知识包 / 自定义。未知 type → `custom`。404 / 网络失败返回 `ok:false` + 空列表，不抛。

取消 pick：`path:null, paths:[]` → 不 toast.error、不写盘。`picker-unsupported`（501）不得回退隐藏 file input。
