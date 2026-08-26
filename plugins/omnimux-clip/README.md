# omnimux-clip

OmniMux Clip / AI 剪辑工坊。独立 `shell.overlay` 剪辑工作台；与画布只交换 JSON（`omnimux-clip-*` CustomEvent + Host HTTP `/omnimux-clip/api`）。

Phase 1 交付：插件脚手架、存储域、HTTP 工程读写、JSON 通信桥、空 Overlay chrome。OpenReel 引擎与 `clip_*` tools 在后续阶段接入。

## 身份

| 项 | 值 |
|---|---|
| id | `omnimux-clip` |
| tier | `tier-1-app` |
| storage | `$DSH_HOME/omnimux/clip/{projects,exports,snapshots,tmp}/` |
| HTTP | `/omnimux-clip/api` |

## 本地验证

```sh
npm install
node scripts/build-client.mjs
node --test src/*.test.js
```

加载走绝对路径 patch，禁止杀桌面 App。L2：`node scripts/omnimux.mjs dev start <task> omnimux-clip`。
