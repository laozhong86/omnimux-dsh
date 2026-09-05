---
name: "Dynamic lightweight extension"
about: "Define a bounded session tool or lightweight dynamic UI extension"
title: "feat(dynamic): <outcome>"
labels: "status:triage, track:A-dynamic, risk:R2"
assignees: ""
---

---
type: feature
plugin: dynamic
track: A
risk-tier: R2
pre-authorized: false
dependencies: none
acceptance: "Replace with the observable session behavior and clean teardown result"
non-goals: "Replace with persistent product-plugin or platform work excluded from this Issue"
---

## Session outcome

- User goal:
- Mount/tool surface:
- Lifetime and cleanup boundary:

## Constraints

- Implementation shape required by the selected extension seat:
- Side effects and stored state:
- Failure and teardown behavior:

## Acceptance

- [ ] The extension performs the bounded behavior in the target session.
- [ ] Unload/teardown removes listeners, timers, UI, and temporary state.
- [ ] Relevant deterministic checks run; runtime evidence is added only when applicable.
- [ ] Independent final acceptance reviews side effects, evidence, and authorization.

This template does not approve creating a persistent plugin tree or using the unattended merge channel. Placement and risk must be re-evaluated if the scope becomes a product plugin or shared service.
