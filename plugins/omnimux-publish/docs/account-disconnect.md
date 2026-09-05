# 发布账号断开连接

账号列表的每一行提供一个可访问的更多操作菜单；菜单仅含危险操作“断开连接”。用户确认后，`omnimux-publish` 通过本插件的同源 `api.js` 封装请求 `DELETE /omnimux/accounts/{encoded-id}`。这会移除 OmniMux 内的指定账号连接，**不表示撤销 TikTok 的全局授权或 token**。

入口仅接受非空字符串 `id`；缺失、空白或非字符串 id 在发起请求前返回 400 结果，且不会调用 fetch。实现按账号 `id` 精确执行，即使显示名重复也不会批量清除。取消确认框不会发请求；发送期间以同步 ref 锁禁止同 tick 的重复确认；请求失败时保留账号和确认框，展示可重试错误；成功后重新读取账号列表；卸载后的迟到回调不更新组件状态。菜单由现有 `Menu` 组件托管，确认框由 `ConfirmModal` 托管，以保持外部点击、Esc 和焦点行为。

## 自动化覆盖

- `src/client/api.test.js`：mock fetch 验证精确编码 DELETE，并对 `undefined`、`null`、非字符串、空/空白字符串验证 **零 fetch**。
- `src/client/AccountsSidebar.disconnect.test.js`：通过 esbuild 构建真实 `AccountsSidebar`，使用 React DOM + jsdom 渲染和 mock fetch 触发“更多→断开→确认”交互；覆盖同名不同 id 的精确 DELETE、取消零请求、同 tick 双确认仅一次请求、失败 alert 可见并重试、成功后的 GET 刷新，以及卸载后的迟到 DELETE 回调。

结果：`corepack pnpm --filter omnimux-publish test` 通过（221 tests, 0 failures）。`lint:i18n` 通过；授权确认按钮中文文案为“完成授权”。这是隔离 mock 组件交互验证；未启动服务器、未物化，也未宣称 live 验收。
