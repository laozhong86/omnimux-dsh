---
title: "Issue 552: blank-session prefill acceptance"
date: "2026-09-05"
type: "evidence"
status: "verified"
---

# Issue 552 acceptance

## Final source rerun

Product source: `c191663a109ff7a94bca3d16faa4f0e60bfc21ac`, based on main `c30cad16ed41beb00d784bde637726180bf6dc7b`. Built inspiration bundle SHA-256: `4af12003f02aded394e96a0d837f968f51972e1434645785fcc5512469b7d533` (229293 bytes). The history below records the earlier, narrower acceptance, not final approval of its unresolved edge cases.

Independent review subsequently reproduced two defects: an immediate snapshot could select blank B before the official asynchronous action selected blank A; writing the prompt before a failed attachment made retries hit draft protection. The final implementation observes the official session-list selection notification and executes the empty-draft guard, synchronous attachment result, then official `setDraft` in the session-bound input slot. Missing attachment store fails explicitly.

Built-in browser 1 / tab 5 reloaded the real linked L2 `http://127.0.0.1:44202/` and exercised the authorized local fixture again. The existing task-local browser authentication and QA session were reused; this was not a fresh profile. No model round or send action ran.

- A: library-only CTA produced the exact three-paragraph prompt and one `inspiration/qa552-live-fixture` attachment, retaining the library Tab.
- C: a second CTA left editor HTML, attachment titles and open Tabs byte-for-byte unchanged.
- B: after clearing only the task's generated draft and attachment with real UI actions, an open canvas and library both survived the CTA. The canvas remained at zero nodes, zero edges and `transform: translate(0px, 0px) scale(1);`.
- Independent executable orchestration reproduction: attachment quota failure left an empty draft; freeing quota allowed retry; the subsequent CTA protected the existing draft and attachment count.
- Multiple-blank asynchronous selection and same-ID reuse have deterministic regression coverage; they are not claimed as browser scenarios.

This evidence covers isolated L2 preparation. Shared 45120 post-merge verification remains a separate required delivery step. The PR GIF identifies its exact demonstrated head separately; subsequent test/evidence-only commits do not change the product source above.

## Earlier Hero-slot correction

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
