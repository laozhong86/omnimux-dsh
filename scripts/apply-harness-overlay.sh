#!/usr/bin/env bash
# Apply remaining official-harness overlays onto a clean clone.
# Desktop packaging no longer overlays this clone.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd -P)"
pin_sha="b150a551b8d465e31e418e1b2eaf5e79bbb7d28e"
src="${DSH_SRC:-/Users/x/Desktop/Project/Github/deepseek-harness}"
patch_dir="$root/patches/dsh-0.1.1-rc.2"

if [[ ! -d "$src/.git" ]]; then
  echo "apply-harness-overlay: DSH_SRC is not a git clone: $src" >&2
  exit 1
fi

head="$(git -C "$src" rev-parse HEAD)"
if [[ "$head" != "$pin_sha" ]]; then
  echo "apply-harness-overlay: HEAD is $head; pin is $pin_sha (see docs/harness-pin.md)" >&2
  exit 1
fi

if [[ -d "$patch_dir" ]]; then
  shopt -s nullglob
  patches=("$patch_dir"/*.patch)
  shopt -u nullglob
  for patch in "${patches[@]}"; do
    name="$(basename "$patch")"
    if git -C "$src" apply --reverse --check "$patch" >/dev/null 2>&1; then
      echo "apply-harness-overlay: already applied $name"
      continue
    fi
    echo "apply-harness-overlay: git apply $name"
    git -C "$src" apply --check "$patch"
    git -C "$src" apply "$patch"
  done
fi

echo "apply-harness-overlay: desktop home is /Users/x/Desktop/Project/omnimux-desktop"
echo "apply-harness-overlay: pin ok on $src"
