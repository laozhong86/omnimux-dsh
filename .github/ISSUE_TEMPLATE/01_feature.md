---
name: "Feature or product change"
about: "Plan a plugin feature, Stage change, or shared service with observable acceptance"
title: "feat(<plugin>): <outcome>"
labels: "status:triage, track:B-stage, risk:R2"
assignees: ""
---

---
type: feature
plugin: <plugin-or-common>
track: B
risk-tier: R2
pre-authorized: false
dependencies: none
acceptance: "Replace with observable commands, responses, DOM behavior, or screenshots"
non-goals: "Replace with work explicitly excluded from this Issue"
---

## Goal and user outcome

- User/problem:
- Desired outcome:
- Existing code or upstream capability checked:

## Scope and design

- In scope:
- Contracts/interfaces affected:
- Failure and rollback behavior:

## Acceptance

- [ ] Metadata values and title scope match the intended plugin and actual risk.
- [ ] Relevant tests execute with counts; skips and environment limits are explicit.
- [ ] Runtime evidence follows `docs/contracts/plugin-qa.md` only when the changed surface requires it.
- [ ] Independent final acceptance reviews the diff, behavior, evidence, and authorization state.

`pre-authorized: false` is metadata, not approval. Do not change it or add authorization labels/comments unless an authorized maintainer actually grants the unattended R2/R3 channel defined in `docs/contracts/plugin-git-pr.md`.
