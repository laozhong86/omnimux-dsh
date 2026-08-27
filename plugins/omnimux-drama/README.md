# omnimux-drama

First vertical on this repo's OmniMux × dsh line: open-source short-drama production. Session logs are not the product store. Generate inputs through the hub `videoGenerate` seam and writes only `series/`. Do not ship an OmniMux HTTP client. Hub I/O: repo `docs/contracts/hub.md`.

Field list and error codes: `docs/contracts/series.md`.

```
<project>/
  series/
    series.yaml
    bible.yaml
    episodes/<id>.yaml
    shots.json
    assets/
```

| Tool | Writes |
|---|---|
| `drama_project_status` | none |
| `drama_init_project` | empty `series/` (no stub mp4) |
| `drama_upsert_series` | `series.yaml` and optional episode yaml |
| `drama_confirm_bible` | `bible.yaml` `confirmed: true` |
| `drama_upsert_shot` | `shots.json` (not `ready` / `generating`) |
| `drama_generate_shot` | live via `videoGenerate` (`mode: "live"`), writes `job_id` on submit, resumes if `generating` + `job_id`, explicit stub copy, or `needs-provider` |

Domain errors throw `DramaDomainError`. Do not wrap them as `{ ok: false }`.
