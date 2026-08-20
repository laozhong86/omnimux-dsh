# omnimux-gallery

侧栏 **新会话下方** 的一级页：**专家 · 技能 · 连接器**（`shell.overlay`，不是会话页签）。

- 专家卡：职称 + 花名 + 头像（WorkBuddy raw URL，失败回退首字）
- 技能卡：**WorkBuddy 本地源 + SkillHub 在线源**双数据源（技能 tab 右上角切换）
- 技能 / 连接器点 `+` 才落到本机；点专家在当前会话插入 `/技能名`
- 空白新会话若本机有 `expert-mode` preset，会顺带 staged 该 preset

## SkillHub 在线源

- 搜索 / 浏览走本插件 host 的 `GET /esc/hub/search`（直连 `api.skillhub.cn` 公开接口，无鉴权）
- **安装 / 已装 / 卸载**复用同 profile 的 `@cocofhu/skillhub` 插件本机 `/skillhub` HTTP 路由（`method: install|list|uninstall`）
- 离线时 SkillHub 面板报错，WorkBuddy 本地源不受影响
- 卡片带下载量 / 版本 / 分类标签；已装态标记来自 `$DSH_HOME/skills` 扫描

```sh
dsh plugin --profile omnimux add omnimux-gallery
```

重建客户端：`npm test && npm run build`。索引：`node scripts/sync-workbuddyskills.mjs`（需要本机 `Github/workbuddyskills`）；加 `--probe-hub` 会用 SkillHub 详情接口给重复技能条目打 `hub` 标记（离线安全，失败跳过）。

## 社媒运营内容筛选（OmniMux 定位过滤）

OmniMux 定位是**社交媒体运营自动化**（主要做海外社媒）。索引构建采用**四层漏斗 + 任务导向分类**，所有配置集中在 `sync-workbuddyskills.mjs` 顶部：

```
L0 源分类预筛（SOCIAL_CATEGORIES）—— 只放行社媒相关源分类，先粗筛收口
L2 黑名单规则（DROP_RULES）—— 条目级关键词剔除（法务/财税/HR/售前/小说/开发/出行…）
L3 人工清单 —— MANUAL_DROP（拍板剔除）/ MANUAL_KEEP（捞回误杀并指定分类）
L1 任务分类重映射（*_TASK_CATS）—— 按社媒任务链归类，映射不上的进 pending 待审
```

**任务导向分类**（替代源市场的职能分类，直接映射用户任务链「选题 → 创作 → 视觉视频 → 平台分发 → 增长 → 变现」）：

- **专家**：选题与热点 / 平台运营 / 电商与直播 / 视频与视觉 / 增长营销 / 内容创作
- **技能**：电商变现 / 营销增长 / 协作办公 / 视觉与视频 / 内容创作
- **连接器**：社媒与营销 / 协作办公 / 通讯沟通

**待审机制**：每次运行落盘三份文件——`index.json`（最终索引）、`pending.json`（待审，默认不显示）、`dropped.json`（剔除审计，含命中规则）。源仓库更新后新条目映射不上时自动进 pending，不会静默混入画廊；人工复核后把 id 移进 `MANUAL_KEEP` / `MANUAL_DROP` 重跑即可。`esc-demo-skill` 演示条目（`ALWAYS_KEEP`）强制保留，供安装/召唤单测使用。

调整任何配置后重跑同步脚本即可。

重启 OmniMux 后硬刷新。入口在「新会话」下面、「任务看板」后面。顶栏间距见 `omnimux-dsh/docs/contracts/sidebar-extra-entries.md`。
