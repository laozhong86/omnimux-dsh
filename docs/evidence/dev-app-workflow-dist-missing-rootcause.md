# 根因记录：Dev App 画布配�置面板未更新 (#386/#387)

## 症状
- web（浏览器直连 45120）节点配置面板 = 新（padding 12px 14px, + 32px）
- Dev App Electron 窗口 = 仍旧（旧间距）
- 用户强烈反馈：不是细微差别，是差别很大

## 排查过程（未找到根因的弯路）
1. 假设普通浏览器缓存 → 清 `OmniMux-Dev/Cache`（root，仅 16K）→ 无效
2. 假设 profile/preset 版本分裂 → 同步二者 → 仍旧
3. 假设兼容模式壳样式覆盖 → desktop injected CSS 无 `.wf-panel-shell__card` 规则 → 排除
4. 多次用 ego/opencli 测量 —— 但量的都是「另开浏览器打 45120」= web，从没量到 Electron 窗口
5. 一度把「?v=3f79（旧 hash）」当根因 → 补 client.js/preset → 仍旧

## 真正根因（日志实锤）
```
[E] host-resolved-root-include: Error: failed to import loader entry omnimux-workflow:
  Cannot find module '/Users/x/.omnimux-dev/profiles/omnimux/node_modules/omnimux-workflow/dist/index.js'
    imported from /Users/x/.omnimux-dev/profiles/omnimux/package.json
Error: dsh-plugin-desktop: plugin tree failed to load
```
**`dist/index.js` 在 Dev App host 启动时缺失**，导致 host 引擎加载 omnimux-workflow 插件失败，Web 资源全部走旧/降级。之前多次 `pnpm sync omnimux-workflow` 时 build 阶段在 profile 内因 `esbuild` 依赖缺失而**静默失败（exit code 被吞）**，`dist/`/`lib/client.js` 从未生成；host 一直抓旧。

## 为何 web 正常
浏览器直连 45120 直接请求 `GET /canvas.js`，host 的 web 路由按文件 serve —— 该文件其实早已是新的。而 Dev App 的 host 插件树（加载器入口）因 dist 缺失失败，整个 omnimux-workflow 未正常挂载，画布面板走的是失败前旧态。

## 已修复
1. 主仓完整 build（host/client/canvas）→ 产出 dist/index.js, lib/client.js, lib/canvas.js
2. `pnpm sync omnimux-workflow`（官方）→ 物化 dist 至 profile 被正确引用路径
3. 同步三层（main/profile/preset）哈希一致：
   - dist/index.js   = 5daa566ded95b664
   - lib/client.js   = 932aa2b8aaa3b459
   - lib/canvas.js   = d8292d9abc95a449
4. 清空 Dev App renderer 分区全缓存（Cache/CodeCache/SW/IndexedDB/LocalStorage）

## 待办 / 建议
- 让用户完全退出 Dev App 再启动（dist 已在位；host 需冷启动加载插件）
- 之后应确认 Network `canvas.js?v=d829…` 且面板 padding=12px 14px
- **基础设施改进**：sync/构建脚本应把 build 阶段失败（exit != 0）判定为硬失败并回传，避免 dist 静默缺失导致 host 加载失败 → 见 #386 相关风险
