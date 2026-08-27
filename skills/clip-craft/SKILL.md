---
name: clip-craft
description: "AI 剪辑工坊（OmniMux Clip）操作专家技能。支持自然语言智能粗剪、静音切除、字幕与花字添加、转场与变速微调、工程诊断与成片导出。"
version: 1.0.0
---

# OmniMux Clip Craft 剪辑专家技能

本技能负责指导 AI 剪辑助理与用户协同，通过 `clip_*` 6 大原子工具对 `TimelineSchema` 进行安全、可逆、多轨剪辑操作。

## 一、 口语化指令与原子工具映射规则

| 用户口语指令 | 目标工具 | 操作参数模式 (Operation Pattern) |
|---|---|---|
| “打开剪辑工坊” / “进入剪辑器” | 前端唤起 | 派发 `omnimux-clip-open` 或渲染直达交互卡片 |
| “把开头/结尾/中间无声部分切掉” | `clip_edit` | `operations: [{ type: 'cut_silences', minSilenceSec: 0.5 }]` |
| “在 2.5 秒处把视频切开” | `clip_edit` | `operations: [{ type: 'split', clipId: '...', atSec: 2.5 }]` |
| “把第 1 个片段截取前 5 秒” | `clip_edit` | `operations: [{ type: 'trim', clipId: '...', durationSec: 5 }]` |
| “加个‘今日精选’标题字幕” | `clip_edit` | `operations: [{ type: 'set_text', text: '今日精选', presetId: 'title', atSec: 0, durationSec: 3 }]` |
| “给这个片段加速到 1.5 倍” | `clip_edit` | `operations: [{ type: 'set_speed', clipId: '...', speed: 1.5 }]` |
| “把音频音量调小到 50%” | `clip_edit` | `operations: [{ type: 'set_volume', clipId: '...', volume: 0.5 }]` |
| “加个交叉溶解转场” | `clip_edit` | `operations: [{ type: 'set_transition', clipId: '...', transition: 'crossfade' }]` |
| “检查一下有没有黑场或素材丢失” | `clip_diagnostics` | `projectId: '...'`（返回 `timeline_gap` / `clip_overlap`） |
| “帮我把这个工程导出 1080p 成片” | `clip_export` | `projectId: '...', resolution: '1080p', fps: 30` |

---

## 二、 交互卡片唤起规范（GenUI Action Card）

当用户通过对话询问工程状态或要求“打开剪辑器”时，Agent 在回复中应使用结构化 `dsh-ui` 渲染直达卡片：

```json
{
  "title": "🎬 剪辑工坊：项目 demo_vlog",
  "gap": 10,
  "items": [
    {
      "type": "keyvalue",
      "entries": [
        { "key": "工程名称", "value": "demo_vlog" },
        { "key": "总时长", "value": "00:15.000" },
        { "key": "轨道数", "value": "3 轨 (视频/音频/字幕)" }
      ]
    },
    {
      "type": "button",
      "label": "🚀 打开全屏剪辑器",
      "variant": "primary",
      "action": "open_clip_editor",
      "data": { "projectId": "demo_vlog" }
    }
  ]
}
```

---

## 三、 状态隔离与并发保护规范

1. **工程隔离**：所有读写操作必须显式携带 `projectId`，严禁在未指定项目时操作；
2. **乐观重载**：在 Agent 执行 `clip_edit` 批量操作后，通过 Bridge 广播 `omnimux-clip-reload`，通知当前打开的 GUI 原地拉取最新时间轴，避免丢失更新；
3. **单步撤销保证**：每次 `clip_edit` 调用整体作为 1 个 Undo 历史步，用户在 GUI 顶栏随时可以撤销（Undo）。
