# omnimux-accounts

Pinned first-level plugin for listing OmniMux-connected social accounts. It renders its own sidebar row under 新会话 and opens a standalone product page over the conversation column — it does not go through the Apps catalog, the `omnimux-app-open` event, or a Settings seat. The browser only calls Host `/omnimux/accounts`. It does not import the hub and does not read `OMNIMUX_*` secrets.

Install:

```sh
dsh plugin --profile omnimux add ./plugins/omnimux-accounts
```

After install, restart the Host. The **账号** row appears under 新会话 (placed by the shared sidebar coordinator, rank 3) and opens the accounts stage directly. Filter by platform or group, connect a platform, or disconnect an id. Unsigned users see a sign-in hint; login stays on the hub Profile page. Placement: repo `docs/contracts/settings-ui.md`.
