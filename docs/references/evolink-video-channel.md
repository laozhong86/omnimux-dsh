---
title: "EvoLink 视频渠道独立记录"
id: "reference-evolink-video-channel"
type: "reference"
status: "living"
authority: "L4"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["x", "agent-architect"]
subsystem: "omnimux/catalog"
tags: ["video", "evolink", "channel"]
---

# EvoLink 视频渠道独立记录

EvoLink 是 OmniMux 的主要候选视频渠道之一，官网为 [evolink.ai](https://evolink.ai/)，官方文档入口为 [evolink.ai/docs](https://evolink.ai/docs)。渠道事实必须按 EvoLink 的具体模型版本与接口页单独建账。

## 当前适用边界

- 2026-09-05 的七款视频模型批次固定使用 APIMart；EvoLink 不参与该批路由，也不作为自动回退。
- 不把 EvoLink 的 model 名、字段、模式、输入数量、格式、价格或错误样例合并进 APIMart 合同。
- 本批没有逐型号完成 EvoLink 接口核对，因此这里不声明七款型号在 EvoLink 的支持情况；这些项目保持“待独立核对”。
- 后续启用 EvoLink 时，应新建逐型号来源表和独立 mapper/fixture，再由显式渠道选择生效。

本文只记录渠道边界，不是本批实现就绪或真实执行证据。
