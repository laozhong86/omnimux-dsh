---
name: "Bug fix or hotfix"
about: "Reproduce and fix an existing defect with bounded regression evidence"
title: "fix(<plugin>): <observed failure>"
labels: "status:triage, track:D-patch, risk:R1"
assignees: ""
---

---
type: fix
plugin: <plugin-or-common>
track: D
risk-tier: R1
pre-authorized: false
dependencies: none
acceptance: "Replace with a reproduction that fails before and passes after the fix"
non-goals: "Replace with unrelated refactors or behavior not changed by this fix"
---

## Observed failure

- Environment/version:
- Reproduction steps:
- Actual result and logs:
- Expected result:

## Root cause and bounded fix

- Root cause evidence:
- Proposed change:
- Regression surface:
- Rollback/recovery:

## Acceptance

- [ ] Reproduction or regression test demonstrates the original failure and fixed behavior.
- [ ] Relevant tests execute with counts; skips and environment limits are explicit.
- [ ] Runtime evidence follows `docs/contracts/plugin-qa.md` only when applicable.
- [ ] Independent final acceptance checks scope, regression risk, evidence, and authorization.

The R1 default is conservative and does not approve push or merge. Reclassify only from the actual diff under `docs/contracts/plugin-git-pr.md`; never use labels to lower real risk.
