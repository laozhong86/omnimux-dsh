---
title: "Web Plugin Pages QA Evidence — 2026-08-27"
id: "evidence-web-plugin-pages-qa"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-08-27"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# Web Plugin Pages QA Evidence — 2026-08-27

## Service Info

- **Entry**: fork `yarn omnimux:dev start plugin-pages omnimux`
- **URL**: `http://127.0.0.1:44200`
- **Profile**: `omnimux-dev-plugin-pages`

## Page Ledger

| Page | Result | Evidence |
|---|---|---|
| Accounts (`omnimux-accounts`) | PASS | header visible; signed-in state lists 1 account, overview bar 4 metric cards; no hidden children |
| Projects / Workflow (`omnimux-workflow`) | PASS | header + action row + toolbar + project list all visible |
| Publish (`dsh-publish`) | PASS | header / action row / control bar / viewport visible; empty-state copy renders |
| Analytics (`omnimux-analytics`) | PASS | claim -> loading skeleton -> ready dashboard ~3s; KPI grid and charts render |
| Assets (`omnimux-assets`) | PASS | header / action toolbar / body visible with add-asset flows |
| Inspiration (`omnimux-inspiration`) | PASS | header + body chips render |
| Products (`omnimux-products`) | PASS | header / toolbar / body visible; product library empty state |
| Extension Market plaza (`omnimux-market`) | PASS | page rect {280,0,1624x913}; Plugins/Skills/Experts/Connectors tabs each render catalog lists |
| Clip direct route | PASS | overlay flex full viewport 1904x913; timeline UI present |
| Settings dialog | PASS | opens with General/Profile/Models/Plugins/Agent presets/Subscriptions sections |
