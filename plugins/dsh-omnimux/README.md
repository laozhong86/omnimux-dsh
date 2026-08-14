# dsh-omnimux

Execution hub for landing OmniMux on official dsh. Domain plugins (drama, later verticals) reuse this package. Third-party compatible APIs are configured here, not in each vertical. OmniMux-only paid APIs stay here because their logic lives in the OmniMux gateway.

`ctx.provide('videoGenerate', api)` then `api.execute({ prompt, dest, duration, signal })` and `omnimux_video_submit` POST `/v1/video/generations`, poll, download the mp4.

Env: `OMNIMUX_API_KEY` or `OMNIMUX_TOKEN`. Optional `OMNIMUX_BASE_URL` (default `https://api.omnimux.ai/v1`) and `OMNIMUX_VIDEO_MODEL` (default `seedance-2-0-fast`). Inject keys with `omnimux tokens exec`.

Do not put `series/` or Drama Center logic here.
