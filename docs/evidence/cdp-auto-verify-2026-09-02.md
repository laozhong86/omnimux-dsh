# CDP 自动验收：Dev App 配置面板间距 (2026-09-02)

## 背景
Dev App(Electron) 与 web 差异问题此前无法自动验收——Agent 只能触达 host web 口(45120)，量不到 Electron renderer。
本次打通 CDP(Dev-only remote-debugging-port=9229)后，用 CDP 直接连 Dev App 窗口自动测量。

## 证据(CDP Runtime.evaluate)
Target: http://127.0.0.1:45120/?dsh-desktop-mode=compatibility&dsh-desktop-platform=darwin&dsh-desktop-version=2.0.4...

```
cardPadding: "12px 14px"
cardPaddingTop: "12px"
matchingPaddingRules: [ { sel: ".wf-panel-shell__card", paddingTop: "12px", important: "" } ]
```

## 关键对比
- 修复前(Dev App)：`cardPadding: "0px 14px 12px"`，`cardPaddingTop: "0px"`，
  命中 `body[data-dsh-desktop-platform="darwin"] [class*="panel"] { padding-top:0 !important }`(误伤 `.wf-panel-shell__card`)
- 修复后(Dev App)：`cardPadding: "12px 14px"`，`cardPaddingTop: "12px"`，
  `matchingPaddingRules` 只剩 `.wf-panel-shell__card`(12px)，`[class*="panel"]` 覆盖已消失

## 涉及 PR
- #32(desktop-fork): 收窄 shell `[class*="panel"]` → `[class*="_panel"]`，消除误伤
- #33(desktop-fork): Dev-only CDP 端口 9229(resolveDevCdpPort)，打通自动验收通道

## 结论
配置面板 + 间距已修复(12px 14px)；CDP 自动验收跑通，Agent 可不再依赖人工反馈，
用 `http://127.0.0.1:9229/json` 连接 Dev App 自动断言 Electron 窗口。
