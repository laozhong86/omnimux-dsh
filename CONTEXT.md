# Domain

This repo lands OmniMux on official dsh. `omnimux` is the execution hub, not a gateway. Platform and domain plugins send requests into hub seams and manage their respective stores. I/O: `docs/contracts/hub.md`.

## Architecture & Responsibilities

| Role | Responsibility |
|---|---|
| **Execution Hub (`omnimux`)** | Chrome/brand identity, auth/identity, model routing, execution seams (`videoGenerate`, `imageGenerate`, `textComplete`), official tools (`omnimux_*`). |
| **Workflow Canvas (`omnimux-workflow`)** | Visual DAG node orchestration, text/image/video generation node pipeline, workflow execution tools (`workflow_*`). |
| **Asset Library (`omnimux-assets`)** | Reusable characters, scenes, styles, props, and prompt packages (`assets_*`). |
| **Product Library (`omnimux-products`)** | E-commerce product catalog with selling points, target audience, and media assets (`products_*`). |
| **Video Clip Studio (`omnimux-clip`)** | Timeline video editing studio based on OpenReel engine integration (`clip_*`). |
| **Social Matrix & Accounts (`omnimux-accounts`)** | Social accounts authorization and status matrix. |
| **Inspiration Library (`omnimux-inspiration`)** | Community trends, prompt inspirations, and creative ideas. |
| **Publishing Center (`dsh-publish`)** | Cross-platform multi-account post publishing and schedule ledger (`publish_*`). |
| **Market & Skills (`omnimux-market`)** | Plaza catalog, SkillHub skill integration, and connector manager. |
| **Analytics (`omnimux-analytics`)** | Cross-plugin tool execution metrics and social posting analytics. |

## Seams & Contracts

- Hub I/O: `docs/contracts/hub.md`.
- What is real vs stub: `docs/capabilities.md`.
- UI Design System: `design.md` and `docs/contracts/ui-design-guidelines.md`.
