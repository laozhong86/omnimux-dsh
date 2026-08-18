# Settings plugin surfaces moved off the first-level nav

- **日期:** 2026-08-18
- **状态:** 已落地。`DSH 插件` 与 `账号` 改为 `settings.plugins.tab`；规范见 [docs/contracts/settings-ui.md](../contracts/settings-ui.md)。
- **触发:** 用户不要再往设置侧栏一级菜单塞插件配置。

## 改动

- `dsh-omnimux`：`omnimux-dsh-plugins` 从 `settings.section` 改到 `settings.plugins.tab`（order 20）。
- `dsh-omnimux-accounts`：`omnimux-accounts` 同样改到 `settings.plugins.tab`（order 30）。
- `omnimux-profile` 仍是 `settings.section`：登录/资料是产品 chrome，不是插件 knobs。
- 回归测试：`src/client/settings-placement.test.js` 禁止再给这两项注册一级导航。
