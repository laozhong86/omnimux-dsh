# DeepSeek Harness 开发者预览版：一切皆插件

> Source: https://www.deepseek.com/harness/zh/

Harness

中文EN

中文EN

DeepSeek Harness 开发者预览版

一切皆插件

DeepSeek Harness 开发者预览版面向全球 Harness 开发者开放测试，并同步开放源代码。

模型、工具、技能、会话、沙箱、存储、循环、调度、UI 等所有 Agent 能力均由插件组合而成，可以自由替换和灵活重组。

查看 GitHub开发者文档社区插件Cordis 论文

一键使用源码安装

复制

$ npx @deepseek-ai/dsh web$ git clone https://github.com/deepseek-ai/deepseek-harness

查看 GitHub开发者文档社区插件Cordis 论文

Agent = Model + Harness
Harness 让 Agent 在真实场景中持续工作

模型是 Agent 的灵魂。

Harness 给予 Agent 理解环境、使用工具，并在真实场景中持续工作的能力。

Cordis 内核
CORDIS KERNEL
Cordis 内核只负责插件的加载、卸载和依赖关系，不承载 Agent 的具体能力。

插件提供能力
CAPABILITIES AS PLUGINS
模型、工具、技能、会话、沙箱、存储、循环、调度、UI 等所有 Agent 能力均由插件提供，并通过 Cordis 服务与事件彼此协作。

配置层自由组合
COMPOSE IN CONFIGURATION
开发者无需改动源码，即可在配置层选择、替换或扩展任一能力。

设计思路
一切皆插件，运行有迹可循

一切皆插件

DeepSeek Harness 基于 Cordis 插件系统构建。模型、工具、技能、会话、沙箱、存储、循环、调度、UI 等所有 Agent 能力均由插件提供，并通过 Cordis 服务与事件彼此协作。开发者无需改动 DeepSeek Harness 源码，即可在配置层选择、替换或扩展任一能力。

每一次运行都有迹可循

模型看到的一切都会写入仅追加设计的会话日志，包括系统提示词、思维链、工具调用与结果、子 Agent 调度，以及每一次上下文注入。在 Trajectory 视图中，你可以按来源查看这些信息。恢复、分叉、检索与回放也共享同一份事件流。

多种运行模式

标准模式提供完整的工具组合；PTC 模式通过模型生成的一段代码组合多轮工具调用；极简模式仅保留一个 shell 工具与一个文件编辑工具，用于最小化环境下的模型基准测试；创造模式可以检查当前运行时、在内存中试验 Cordis 插件，并据此组合和创作新的模式。

dsh-demo创造模式

描述你想要构建的内容

标准模式

功能完整的编码 Agent，支持文件编辑、Shell、文件与网页检索、Skills、计划、目标、子代理和工作流。

PTC 模式

具备标准模式的全部能力，并通过 Code Mode SDK 呈现工具，让模型用一个 TypeScript 程序组合多步操作。

极简模式

仅提供持久 bash 与 str_replace_editor 的双工具编码 Agent。

创造模式

用于创建自定义 Agent preset：具备标准模式的全部能力，并提供运行时检查、插件实验和 preset 创作指导。

设计思路
一切皆插件，运行有迹可循

一切皆插件

DeepSeek Harness 基于 Cordis 插件系统构建。模型、工具、技能、会话、沙箱、存储、循环、调度、UI 等所有 Agent 能力均由插件提供，并通过 Cordis 服务与事件彼此协作。开发者无需改动 DeepSeek Harness 源码，即可在配置层选择、替换或扩展任一能力。

每一次运行都有迹可循

模型看到的一切都会写入仅追加设计的会话日志，包括系统提示词、思维链、工具调用与结果、子 Agent 调度，以及每一次上下文注入。在 Trajectory 视图中，你可以按来源查看这些信息。恢复、分叉、检索与回放也共享同一份事件流。

多种运行模式

标准模式提供完整的工具组合；PTC 模式通过模型生成的一段代码组合多轮工具调用；极简模式仅保留一个 shell 工具与一个文件编辑工具，用于最小化环境下的模型基准测试；创造模式可以检查当前运行时、在内存中试验 Cordis 插件，并据此组合和创作新的模式。

dsh-demo创造模式

描述你想要构建的内容

标准模式

功能完整的编码 Agent，支持文件编辑、Shell、文件与网页检索、Skills、计划、目标、子代理和工作流。

PTC 模式

具备标准模式的全部能力，并通过 Code Mode SDK 呈现工具，让模型用一个 TypeScript 程序组合多步操作。

极简模式

仅提供持久 bash 与 str_replace_editor 的双工具编码 Agent。

创造模式

用于创建自定义 Agent preset：具备标准模式的全部能力，并提供运行时检查、插件实验和 preset 创作指导。

自定义你的 DeepSeek Harness

开始使用
快速体验或从源码安装

快速体验

安装 Node.js 后，可通过 npx 启动 Web UI。

$ npx @deepseek-ai/dsh web复制

源码安装

获取完整项目源码，并按照仓库说明完成安装。

$ git clone https://github.com/deepseek-ai/deepseek-harness复制

加入 DSH 插件生态

DeepSeek Harness 开发者预览版仍处于面向 Harness 开发者的测试阶段，核心插件和基础 API 将持续迭代。我们期待与全球开发者一起，在开源、开放、可复用、可组合的基础设施之上，共同探索智能上限。

查看 GitHub开发者文档社区插件
