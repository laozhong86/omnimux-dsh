# dsh-omnimux-accounts

Official Apps row for listing OmniMux-connected social accounts. The browser only calls Host `/omnimux/accounts`. It does not import the hub and does not read `OMNIMUX_*` secrets.

Install from the Apps shelf (`dsh-omnimux-accounts@0.1.0`) or:

```sh
dsh plugin --profile omnimux add ./plugins/dsh-omnimux-accounts
```

After install, restart the Host. Settings → 插件 then shows an **账号** tab (`settings.plugins.tab`, not a first-level Settings row). Filter by platform or group, connect a platform, or disconnect an id. Unsigned users see a sign-in hint; login stays on the hub Profile page. Placement: repo `docs/contracts/settings-ui.md`.
