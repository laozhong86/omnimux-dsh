# dsh-omnimux

Public dsh bundle: OmniMux as the model and media plane.

`ctx.omnimuxVideo.execute({ prompt, dest, duration, signal })` and `omnimux_video_submit` POST `/v1/video/generations`, poll, download the mp4.

Env: `OMNIMUX_API_KEY` or `OMNIMUX_TOKEN`. Optional `OMNIMUX_BASE_URL` (default `https://api.omnimux.ai/v1`) and `OMNIMUX_VIDEO_MODEL` (default `seedance-2-0-fast`). Inject keys with `omnimux tokens exec`.

Do not put `series/` or Drama Center logic here.
