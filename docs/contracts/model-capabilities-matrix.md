---
title: "OmniMux 全模态模型能力契约与治理规范 (MCC 1.0)"
id: "contract-model-capability-governance"
type: "contract"
status: "living"
authority: "L1"
date: "2026-09-04"
authors: ["qi-huolin", "xu-qingchu", "gao-jianyuan"]
subsystem: "omnimux/catalog"
---

# OmniMux 全模态模型能力契约与工程治理规范 (MCC 1.0)

## 1. 核心治理原则
1. **单一真源 (Single Source of Truth)**：
   所有模型的支持模式、输入素材类型、数量上下限、格式/时长/体积约束、参数空间，必须定义在 `plugins/omnimux/src/catalog/specs/*.yaml` 中，严禁在前端组件或私有适配器中硬编码。
2. **隐藏优于置灰 (Hide, Don't Disable)**：
   前端面板呈现时，模型不支持的模式直接 100% 隐藏，严禁展示灰色不可用项；当模型仅支持单一模式（或无模式可选）时，不渲染生成方式分段栏。
3. **运行时前置拦截 (Fail-Fast Validation)**：
   网关收到任务请求时，先根据对应模式的输入插槽契约（Input Constraints）校验素材数量、MIME 与体积。超标直接在网关层抛出标准化业务错误，严禁把无效请求打给模型厂商。
4. **新模型准入门禁 (No Spec, No Model)**：
   新增任何模型必须先在 specs 目录补充完整 YAML 声明，附带官方文档 URL 与测试凭证，CI 门禁 `pnpm verify:models` 自动校验，缺失或格式错误直接红灯阻断。

## 2. 全模态标准模式分类 (Operation Modes)
- **文本 (Text)**: `chat` (纯文本对话), `vision_chat` (图文多模态对话), `document_analyze` (文档解析)
- **图像 (Image)**: `text_to_image` (文生图), `image_to_image` (图生图), `multi_reference` (多图主体参考), `inpaint_outpaint` (局部重绘)
- **视频 (Video)**: `text_to_video` (文生视频), `first_frame` (首帧驱动), `first_last_frame` (首尾帧过渡), `video_multi_ref` (多图风格/主体参考), `digital_human` (数字人/对口型), `video_edit` (视频编辑/重绘)
- **音频 (Audio)**: `text_to_speech` (语音合成), `voice_clone` (声音克隆), `text_to_music` (音乐创作), `speech_to_text` (语音转文字)
