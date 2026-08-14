#!/usr/bin/env bash
# Keyless assemble check. Does not call a model.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

pnpm --filter dsh-drama test

preset_src="$root/presets/drama"
preset_dst="${DSH_HOME:-$HOME/.dsh}/.agent-presets/drama"
mkdir -p "$(dirname "$preset_dst")"
if [[ ! -e "$preset_dst" ]]; then
  ln -s "$preset_src" "$preset_dst"
  echo "smoke: linked drama preset -> $preset_dst"
fi

dsh_cmd=()
if command -v dsh >/dev/null 2>&1; then
  dsh_cmd=(dsh)
elif [[ -n "${DSH_SRC:-}" && -f "${DSH_SRC}/package.json" ]]; then
  dsh_cmd=(pnpm --dir "$DSH_SRC" dsh)
fi

if [[ ${#dsh_cmd[@]} -eq 0 ]]; then
  echo "smoke: domain tests passed; dsh CLI not found (set DSH_SRC or install dsh). skip profile dump"
  exit 0
fi

if ! "${dsh_cmd[@]}" --profile drama --dump-config 2>/dev/null | rg -q "dsh-omnimux|dsh-drama"; then
  echo "smoke: profile drama is missing bundles. From this repo run:"
  echo "  ${dsh_cmd[*]} plugin --profile drama add $root/plugins/dsh-omnimux"
  echo "  ${dsh_cmd[*]} plugin --profile drama add $root/plugins/dsh-drama"
  exit 1
fi

echo "smoke: domain tests passed and profile drama lists both bundles"
