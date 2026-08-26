---
title: "Briefing contract"
id: "contract-briefing"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-26"
authors: ["x", "agent-architect"]
subsystem: "dsh-drama"
---

# Briefing contract

Project briefing process. Memory, not truth.

Entries live only in `docs/briefing.md`. This file is the process. The log body is not an authority.

## Rank

```
live code / tests
  > AGENTS.md hard bounds
  > docs/contracts/*   (this file's process duties; not the log body)
  > CONTEXT.md
  > docs/decisions/*   (rare ADRs)
  > docs/briefing.md
  > current session
```

On conflict: name it, follow the higher rank, then offer to update the briefing. Do not treat a log line as a hard bound.

## When to write

Write after a confirmation gate: the human said the decision is settled, asked to record it, or approved a plan.

Record: a direction that must survive this session; an explicit non-goal; a rejection that will otherwise recur; a confirmed trade-off that is not yet worth AGENTS, a contract, or an ADR.

Do not record: implementation detail the code already shows; a `series/` mutation; a restatement of an existing rule; an unconfirmed option list; session scratch.

Do not write a briefing on every turn.

## Who

| Actor | Rule |
|---|---|
| Coding agent in this checkout | Read and write per this contract |
| Human | Confirmation gate; may edit the file directly |
| `dsh --profile drama` | MUST NOT write briefing. It only mutates `series/` |

## Status

| status | Meaning | Agent use |
|---|---|---|
| `open` | Topic opened, not nailed | Continue the topic. Not a constraint |
| `decided` | Current working memory | Last lean. Still overridable |
| `superseded` | Replaced by another entry or a higher authority | History only. Follow `superseded_by` |
| `retracted` | Taken back | Treat as absent |

## Id

`YYYY-MM-DD-<slug>`. One topic, one id, same day.

## Create

Done when the Index has a new row and the entry has `status`, `topic`, one `decision` or `open question`, and one `why` or "pending".

1. Confirmation gate has passed.
2. Scan the Index. Do not open a parallel entry for the same topic.
3. Allocate the id. Edit the Index first, then append the entry.
4. Point at an existing authority when one already holds the statement. Do not copy that file's body into the log.

## Update

Done when the current statement at the top is current, `## Amendments` has a new one-line row, and the Index `status` matches.

1. Edit the same id. Do not open a parallel entry.
2. Rewrite the current statement in place.
3. Append one amendment line: date + what changed.
4. On status change or promotion: sync the Index and set `superseded_by`.
5. On a mis-record: the amendment says the previous line was wrong. Do not pretend the original wording was always correct.

Default change is Update, not Create and not Delete.

## Delete

Done when the matching branch below was taken, and a hard delete has no Index row left.

| Case | Action |
|---|---|
| Reversal, stale, or promoted | Do not delete. Set `retracted` or `superseded` |
| Duplicate, never should exist, or noise | Confirm with the human, then hard-delete and drop the Index row |
| Secret or private leak | Hard-delete immediately. Leave no body tombstone |

After a hard delete, do not recreate the same memory from the session. A replacement is a new Create and must say why the old entry was not enough.

## Read

When the task is project direction, a prior decision, or a cross-session design: read the Index, then open only the matching entries. Do not load the whole log every turn.

## Promote

When a statement graduates to `CONTEXT.md`, `docs/contracts/*`, `AGENTS.md`, or `docs/decisions/*`: set the entry `superseded`, point `superseded_by` at the new home, and leave the destination body in the destination.

Promote to an ADR only when all three hold: hard to reverse, surprising without context, real trade-off.

## Entry shape

```markdown
## <id>

- **status:** open | decided | superseded | retracted
- **topic:** …
- **decision:** …          # use open question when status is open
- **why:** …
- **not:** …               # omit the line if empty
- **authority:** none | path
- **superseded_by:** —     # only when superseded
- **updated:** —

### Amendments
- YYYY-MM-DD — …
```

Omit `### Amendments` when there are none.
