# API Updates - OmniMux

> Source: https://docs.omnimux.ai/en/updates

Documentation Index

Fetch the complete documentation index at: /llms.txt

Use this file to discover all available pages before exploring further.

Skip to main content

OmniMux home page
English

Search...

⌘KAsk Assistant

Search...

Navigation

Getting started

API Updates

API manual

Integration guide

User guide

FAQs

FiltersClear

New modelsTextVideoImagePlatformSocial dataAudio

Getting started

API Updates

Copy pageCopy page

Stay informed about the latest model launches, capability changes, pricing, and platform notes on OmniMux.

Copy pageCopy page

Stay up to date with OmniMux gateway model launches and platform changes. The full callable catalog is on console pricing / Pricing.

​

August 9, 2026
Platform

​

API Updates
OmniMux now publishes a dated API Updates feed so you can track gateway model launches and platform changes in one place.

​

What we log

New models — callable model IDs on live pricing

Model updates — modes, durations, resolutions, parameters

Pricing — material rate changes

Platform — auth, domains, public HTTP surfaces

​

How to call OmniMux

SurfaceURL

Consolehttps://omnimux.ai

OpenAI-compatible APIhttps://api.omnimux.ai/v1

Docshttps://docs.omnimux.ai

Statushttps://status.omnimux.ai

Auth for relay: Bearer sk-… from the console. Full catalog always lives on console pricing — this page is the change timeline.

​

Links

Quickstart

Pricing

​

August 9, 2026
New modelsSocial data

​

Social data (read-only)
Social data model IDs are available on OmniMux for read-only public profile and content style access. This is not social publishing.

​

Model IDs

PlatformIDs

TikToktiktok-user, tiktok-posts, tiktok-video, tiktok-search

Instagraminstagram-user, instagram-posts, instagram-post, instagram-search

Xx-user, x-posts, x-tweet, x-search

YouTubeyoutube-user, youtube-posts, youtube-video, youtube-search

​

Publishing (different surface)
Connect accounts and create posts use /api/social/v1/* with access token + New-Api-User. Do not mix that auth with gateway sk- Chat Completions.

​

Links

TikTok user profile

X tweet detail

Create post (publishing)

​

August 7, 2026
New modelsVideo

​

Seedance 2.5
Seedance 2.5 is now available on OmniMux for async video generation.

​

New model

Model ID: seedance-2-5

Create: POST /v1/video/generations

Poll: GET /v1/video/generations/{task_id}

Highlights: longer single-pass generation and multimodal reference inputs (text / image / video / audio style workflows)

Pin the exact ID from live pricing before integrating.

​

Links

Video task poll

Pricing

​

July 30, 2026
New modelsVideo

​

MiniMax H3
MiniMax H3 video models are now available on OmniMux.

​

New models

Model IDRole

minimax-h3-t2vText-to-video

minimax-h3-flfFirst/last-frame style I2V

minimax-h3-fl2vaFL2VA-oriented path

minimax-h3-endframeEnd-frame reference I2V

​

API

Create: POST /v1/video/generations

Poll: GET /v1/video/generations/{task_id}

Async only — submit once, then poll task status.

​

Links

MiniMax H3 T2V

Video task poll

​

July 28, 2026
New modelsVideo

​

Grok Imagine Video 1.5
Grok Imagine Video 1.5 is now available on OmniMux.

​

New model

Model ID: grok-imagine-video-1.5

Mode: image-to-video style generation via async video API

Create / poll: POST / GET /v1/video/generations

See the model page for parameters and the task poll contract.

​

Links

Grok Imagine Video 1.5

Video task poll

​

July 25, 2026
New modelsText

​

Claude Opus 5
Claude Opus 5 is now available on OmniMux through OpenAI-compatible Chat Completions.

​

New model

Model ID: claude-opus-5

Endpoint: https://api.omnimux.ai/v1 (Chat Completions)

Docs: one complete page per brand — model is an enum on the Claude complete page

Related Claude IDs on the gateway include other Opus / Sonnet / Haiku SKUs on live pricing.

​

Links

Claude complete

​

July 22, 2026
New modelsText

​

Gemini Flash models
New Gemini Flash-class models are available on OmniMux.

​

New models

Model IDs: gemini-3.6-flash, gemini-3.5-flash

API: OpenAI-compatible Chat Completions at https://api.omnimux.ai/v1

Additional Gemini IDs (Pro / preview / lite) may also appear on live pricing — pin the exact ID from the console or Gemini complete page.

​

Links

Gemini complete

​

July 17, 2026
New modelsText

​

Kimi K3
Kimi K3 is now available on OmniMux.

​

New model

Model ID: kimi-k3

API: Chat Completions at https://api.omnimux.ai/v1

Focus: long-context reasoning and agent-style workflows

See the Kimi complete page for the full model enum.

​

Links

Kimi complete

​

July 16, 2026
New modelsAudio

​

Suno
Suno music generation is now available on OmniMux.

​

New model

Model ID: suno

Use: AI music generation workflows via the gateway catalog

Confirm billing and request shape from live pricing / console before production traffic.

​

Links

Pricing

​

July 1, 2026
New modelsImage

​

Nano Banana
Nano Banana 2 and Nano Banana Pro are now available on OmniMux.

​

New models

Model IDs: nano_banana_2, nano_banana_pro

Modality: image generation

See each model page for request parameters.

​

Links

Nano Banana 2

Nano Banana Pro

​

June 25, 2026
New modelsVideo

​

Seedance 2.0
The Seedance 2.0 family is available on OmniMux for async video generation.

​

New models

Model IDRole

seedance-2-0Standard

seedance-2-0-miniLightweight / cost-oriented

seedance-2-0-fastSpeed-oriented

​

API

Create: POST /v1/video/generations

Poll: GET /v1/video/generations/{task_id}

​

Links

Video task poll

Pricing

​

June 17, 2026
New modelsText

​

GLM-5.2
GLM-5.2 is now available on OmniMux (with related GLM IDs on pricing).

​

New models

Model IDs: glm-5.2, glm-5.1

API: Chat Completions at https://api.omnimux.ai/v1

​

Links

GLM complete

​

June 16, 2026
New modelsVideo

​

Kling
Kling video models are available on OmniMux.

​

New models

Model IDs: kling-v3, kling-v2-6

API: async POST / GET /v1/video/generations

Pin IDs from live pricing; request parameters follow the video task contract.

​

Links

Video task poll

Pricing

​

June 15, 2026
New modelsImage

​

Midjourney
Midjourney is available on OmniMux as model ID midjourney.

​

New model

Model ID: midjourney

Modality: image generation via the gateway catalog

Confirm request shape and billing on console pricing before production use.

​

Links

Pricing

​

June 1, 2026
New modelsText

​

MiniMax M3
MiniMax M3 is now available on OmniMux Chat Completions.

​

New model

Model ID: minimax-m3

API: https://api.omnimux.ai/v1

​

Links

MiniMax complete

​

May 20, 2026
New modelsVideo

​

Omni Flash
The Omni Flash duration family is available on OmniMux.

​

New models

Model IDRole

omni_flashBase

omni_flash-4s4s-oriented SKU

omni_flash-6s6s-oriented SKU

omni_flash-10s10s-oriented SKU

​

API

Create: POST /v1/video/generations

Poll: GET /v1/video/generations/{task_id}

​

Links

Omni Flash

Video task poll

​

May 20, 2026
New modelsVideo

​

Veo 3.1
Veo 3.1 is now available on OmniMux.

​

New model

Model ID: veo_3_1

API: async video create + poll on /v1/video/generations

​

Links

Veo 3.1

Video task poll

​

May 5, 2026
New modelsText

​

Claude Opus 4.7 and DeepSeek V4
New language models are available on OmniMux Chat Completions.

​

New models

Model IDBrand

claude-opus-4-7Claude

deepseek-v4-flashDeepSeek

deepseek-v4-proDeepSeek

​

API

Endpoint: https://api.omnimux.ai/v1 (Chat Completions)

​

Links

Claude complete

DeepSeek complete

​

April 28, 2026
New modelsImage

​

GPT Image 2
GPT Image 2 is now available on OmniMux.

​

New models

Model IDs: gpt-image2, gpt-image2-hd

Modality: image generation

See model docs for size / quality parameters.

​

Links

GPT Image 2

GPT Image 2 HD

​

March 8, 2026
New modelsText

​

MiniMax M2.5
MiniMax M2.5 (and related MiniMax text IDs) are available on OmniMux.

​

New models

Model IDs: minimax-m2.5, minimax-m2.7

API: Chat Completions

​

Links

MiniMax complete

​

March 6, 2026
New modelsText

​

GPT-5.4
GPT-5.4 series models are available on OmniMux Chat Completions.

​

New models

Model IDs: gpt-5.4, gpt-5.4-mini

API: https://api.omnimux.ai/v1

Later GPT-5.x IDs (for example gpt-5.5, gpt-5.6-terra) may also appear on live pricing — always pin the ID from the console.

​

Links

GPT complete

Machine-readable: /data/changelog/index.json · /data/changelog/pages/1.json

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
