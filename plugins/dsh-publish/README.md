# dsh-publish

社媒内容发布中心插件（Host + Client 双半边）：从草稿到多账号分发到审核跟进的发布编排层。执行走 hub `omnimux_publish_*` 官方工具通道，本插件不直连任何平台、不存任何 `OMNIMUX_*` secret。

- PRD：`docs/PRD.md`（v1 Confirmed）
- 架构：`docs/architecture.md`（Phase 2 定稿）
- hub 工具契约核对：`docs/hub-tool-contracts.md`（T0 产出，含 statusMap 定稿依据）

## 形态

双半边（同 omnimux-accounts / omnimux-assets 范式）：

- **Host 半边**（`src/`）：9 个 `publish_*` 工具 + `publish:ops` systemPrompt section + `/dsh-publish` HTTP 前缀路由
- **客户端半边**（`src/client/` → esbuild → `lib/client.js`，ModuleLoader id = `dsh-publish`）：侧边栏「发布」行（协调器 rank 4.2，marker `data-omnimux-publish-entry`）+ `shell.overlay` 一级页（slot id `dsh-publish-stage`，order 22）三 tab + 发布页（视频/图文表单 + 媒体拾取 + 能力矩阵表单裁剪）+ 账号面板（平台→账号两级勾选，数据源 hub `GET /omnimux/accounts`）+ 一键发布（submit 立即返回 + `state?rev=` 轮询进度）+ 记录详情（per-account 子任务 + 手动刷新 + 单账号重试）

装载件：`package.json` 带 `dsh.bundle.patch` + `exports['./client']` + `files`；工具用 raw `ctx.tools.register` + objectParams（完整 JSON Schema，`additionalProperties:false`）。

## 安装（dev profile 验证用法）

```bash
# dev 环境（推荐，数据根 ~/.dsh-dev 与生产隔离）
PDIR=~/.dsh-dev/profiles/omnimux-dev-publish
mkdir -p "$PDIR" && cp ~/.dsh/profiles/omnimux/package.json ~/.dsh/profiles/omnimux/cordis.patch.yml "$PDIR/"
cp -Rc ~/.dsh/profiles/omnimux/node_modules "$PDIR/node_modules"
ln -s "$PWD" "$PDIR/node_modules/dsh-publish"
cat > "$PDIR/verify.patch.yml" <<'EOF'
- insert:
    - id: dsh-publish
      name: dsh-publish
EOF

# 配置树确认（应出现 dsh-publish 条目）
DSH_HOME=~/.dsh-dev node <harness>/apps/cli/lib/bin.js \
  --profile omnimux-dev-publish --patch "$PDIR/verify.patch.yml" --dump-config | grep dsh-publish

# 启动 Host（日志无 error 即装载成功；/dsh-publish 路由应答即 apply() 完整跑通）
DSH_HOME=~/.dsh-dev node <harness>/apps/cli/lib/bin.js \
  --profile omnimux-dev-publish --patch "$PDIR/verify.patch.yml" --host 127.0.0.1 --port 0 --no-open
```

生产 profile 走 `dsh plugin --profile <name> add <package>`（file: 物化形态，见 dev-doctor 规范）。

## 验证命令

```bash
npm test              # node --test src/*.test.js src/client/*.test.js —— L1 单测（Host + 客户端纯逻辑）
npm run build         # esbuild → lib/client.js（ModuleLoader 包裹，ID = dsh-publish）
curl "$B/dsh-publish/state"                # 修订号轮询
curl "$B/dsh-publish/capabilities"         # 合并后能力矩阵（UI 表单裁剪数据源）
curl "$B/dsh-publish/records?status=draft" # 三 tab 列表
curl -X POST "$B/dsh-publish/media?filename=a.png" -H "Origin: http://127.0.0.1:<port>" \
     -H "Content-Type: image/png" --data-binary @a.png   # 媒体入库（sha256）
# 客户端装载验证（boot manifest 与 client.js 可达，同 omnimux-assets 惯例）：
#   1) curl "$B/" | grep dsh-publish        → boot manifest 含 dsh-publish 条目
#   2) curl "$B/plugins/dsh-publish/client.js?rev=<manifest rev>" → 200 text/javascript
#   3) Host 日志 0 error
```

注意：POST 需同源（loopback origin 或无 Origin）；跨源 POST 一律 403（assertLocalWrite 自实现）。

## 数据位置

`$DSH_HOME/omnimux/publish/`（目录 0700 / JSON 0600 / tmp+rename 原子写）：

- `records.json` —— 单一账本：草稿 + 发布记录 + per-account 子任务（三类记录是状态机视图）
- `media.json` + `media/<sha256>` —— 内容寻址媒体仓（上传字节与本地路径导入统一入库）
- 只读依赖：`$DSH_HOME/omnimux/accounts.json`（omnimux-accounts overlay，数据文件耦合，不 import hub 模块）

## 配置（plugin config，坏配置显式失败）

| 字段 | 默认 | 说明 |
|---|---|---|
| `dataDir` | `$DSH_HOME/omnimux/publish` | 数据目录覆盖 |
| `platforms` | 内置矩阵 | 平台能力矩阵深合并覆盖（media_types/supports_cover/supports_schedule/max_images/声明槽位） |
| `statusMap` | 内置映射 | hub get 平台原始状态 → submitted/reviewing/published/failed（见 hub-tool-contracts.md §4） |
| `maxMediaMb` | 512 | 单媒体入库上限 |
| `submitTimeoutSeconds` | 120 | 单账号 create 超时 |
| `accountsOverlayPath` | `$DSH_HOME/omnimux/accounts.json` | overlay 只读路径 |

## 版本观察

- harness `141eb6fef8`（dsh-0.1.0-rc.8）；产品树 `e25b9cb`
- `ctx.tools.execute` 程序化调用通道：`packages/core/tools/src/index.ts:1342`（官方测试 tools.spec.ts:91）
