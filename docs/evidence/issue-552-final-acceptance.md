---
title: "Issue 552: blank-session prefill acceptance"
date: "2026-09-05"
type: "evidence"
status: "verified"
---

# Issue 552 acceptance

Verified product commit: `e711472e269c31bd028b9b16c4c9d9b3365948ef`.
Its parent `acbe4388b381e6928c0c1371217af2c556954767` failed the real CTA check and is not approved by this report.

The accepted source and generated bundle are identical to the three-file working diff exercised immediately before this commit. Bundle SHA-256: `7fac40e4a11847060be85c0196235934f68b50a06ddad76cd8656977f9ce5d2e`.

## Cause and correction

The official renderer omits `conversation.composer.dock` for a blank-session Hero. The queued prefill therefore had no mounted consumer and expired. The consumer now occupies `conversation.input.dock`, which renders for a live InputZone in both Hero and active-session layouts. It retains session identity checks, the non-empty-draft guard, intent subscription, and official `inputActions.setDraft` writes.

## Browser evidence

The flagship reviewer used Codex's built-in browser, browser 1 / tab 4, against the authorized isolated origin `http://127.0.0.1:44202/`. Normal launch-token authentication established a cookie and redirected to the clean URL. No proxy, protocol change, certificate exception, relay, or authentication bypass was used. The inspiration plugin was linked to this task's worktree; served application batch revision changed from `439ded5a2f07` (failing parent) to `5de5b041c79c` (accepted product tree).

The authorized local fixture was `qa552-live-fixture`, titled `QA-552 isolated inspiration fixture`. These checks exercise preparation only: no message was sent and no model or media-generation round ran. Full accessibility snapshots, screenshots, and structured DOM before/after outputs are in the flagship task transcript.

| Scenario | Observed result |
| --- | --- |
| A: library only | Real card CTA populated one `/video-deconstruct` command, one empty paragraph, and the complete replication constraint paragraph. One matching inspiration attachment appeared. Send became enabled without submission; library remained visible and conversation expanded. |
| B: library and canvas | Both tabs remained after the real CTA. Prompt and attachment appeared. The empty canvas retained zero nodes, zero edges, and `translate(0px, 0px) scale(1)`. This does not claim coverage of a populated canvas. |
| C: reused blank session with an unsent draft | A second real CTA displayed the draft-protection message. Editor HTML and attachment title array were identical before and after; no append, replacement, or additional attachment occurred. |

For B, only the isolated test draft produced by A was cleared using the actual editor keyboard interaction and attachment removal button. No direct DOM writes or simulated application handlers were used.

## Independent engineering verification

- Focused Node tests: 54 passed, zero failed or skipped.
- Inspiration package tests: 191 passed, zero failed, two existing skipped cases.
- Package build: passed; generated bundle 230247 bytes.
- `pnpm verify:slots`: 1497 files, zero violations.
- `pnpm verify:stages`: 10 Stage components and 8 StageStores passed.
- `git diff --check`: passed.

These checks ran on the exact product bytes committed as `e711472`; they are separate from the browser scenario verdicts. This report does not claim shared Dev App delivery, a merge, or production release. Those require subsequent remote checks and coordinated post-merge delivery.
