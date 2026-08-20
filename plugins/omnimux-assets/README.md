# omnimux-assets

OmniMux dual-core assets as an out-of-tree DSH plugin:

- **核 1 — 本地文件夹**：组头 `＋` → 「添加文件 / 添加文件夹」弹系统选择窗（macOS 原生 `choose file/folder`），选中即挂载，名称默认取路径末段可重命名。文件夹只读扫描一层文件列表（名称/大小/修改时间/类型）；文件挂载显示单条目。更多菜单：重命名 / 移除（确认弹窗：仅在当前列表移除，实际的文件不受影响）。
- **核 2 — AI 产物**：Agent 通过 `assets_upload` tool 把产出文件复制进插件自有存储（sha256 content-addressed 去重），带来源溯源元数据（agent / model / run_id / prompt_hash / traced）。

一级页入口：侧栏「资产库」行（新会话下方、排最末）。页面以 `shell.overlay` 座位覆盖会话列（z-index 200），与其他一级产品页（应用/任务看板/ESC）通过 `dsh-product-stage` 事件互斥。

## 安装与验证

```sh
dsh plugin --profile omnimux add /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins/omnimux-assets
dsh --profile omnimux --dump-config   # 应出现 omnimux-assets
# 重启 Host 后核对 boot manifest（window.__DSH_BOOT__）与 client.js 可达
```

开发：

```sh
npm test      # node --test src/*.test.js（Host 纯函数层，临时目录夹具）
npm run build # esbuild → lib/client.js（ModuleLoader 包裹，ID = omnimux-assets）
```

## 数据位置

全部落 `$DSH_HOME || ~/.dsh` → `omnimux/assets/`（本插件唯一可写区；目录 `0700`、JSON `0600`）：

```
omnimux/assets/
├── mappings.json          # 映射注册表（revision 单调递增）
├── artifacts.json         # 产物索引
├── scans/<mapping_id>.json    # 每映射最近一次扫描缓存（可随时重建）
└── artifacts/<aa>/<sha256>.<ext>   # 产物内容，content-addressed 去重
```

真实文件永远留在原地。

## 只读红线

- 扫描器（`src/scanner.js`）只 import 只读 fs API（`readdirSync` / `statSync`），永不写被扫描目录。
- 删除映射只删 `mappings.json` 里的记录（连带自有扫描缓存），**永不触碰 `real_path`**；UI 文案固定带「删除映射不会删除真实文件」。
- 不 import hub（`omnimux`）任何内部模块：chrome CSS、loopback 写校验、sendJson 均为本插件内等义自实现（id 隔离）。
- I/O 不经 hub：不调用 OmniMux cloud，不存任何 `OMNIMUX_*` secret；`assets_upload` 带 `sk-` token 正则拦截。
- POST 路由一律过 loopback 写校验（origin/referer 本机或 `sec-fetch-site: same-origin`，否则 403）。

## Agent tools

- `assets_list`：`scope=mappings | mapping_files(mapping_id) | artifacts(type)`，只读。
- `assets_upload`：`{ path, agent, run_id?, model?, prompt_hash?, title? }` → `{ artifact }`，复制进自有目录。

## 已知限制（v0.1）

- 系统选择窗仅支持 macOS（osascript `choose file/folder`）；其他平台返回 `picker-unsupported`。
- 只扫描映射目录一层（非递归）；无 FSEvents 监听，靠 5s revision 轮询近实时。
- 详情侧栏只做元数据 + 纯文本预览信息；图片缩略图、`input_refs` 回链、「发给 Agent」、分享链接留 v0.2/v0.3。
- 重命名暂用浏览器原生 prompt；移除确认已是内置弹窗。
- 上传的隐私扫描只做最简 `sk-` 正则拦截；响应侧 secret 过滤正则较宽，正常含 `sk-` 前缀的文本有极低概率被误拦（观察项）。
- 同一文件多次上传：磁盘内容按 sha256 去重一份，但索引追加多条记录（v0.2 做索引级去重）。
