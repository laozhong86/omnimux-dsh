#!/usr/bin/env bash
# sync-agent-presets.sh — 把 OmniMux 出厂三项 Agent Preset 物化进 OmniMux 运行时
#
# 范围仅限 OmniMux 系列 App 与 omnimux profile。
# 严禁写入 /Applications/DSH Desktop.app、desktop profile、dsh-plugin-desktop
# vendor 副本、或 ~/.dsh/.agent-presets（那是 DSH 开发工具自己的花名册）。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/presets"
KEEP=(standard social-content-team social-engagement-team)

if [ ! -d "$SRC/standard" ] || [ ! -d "$SRC/social-content-team" ] || [ ! -d "$SRC/social-engagement-team" ]; then
  echo "❌ presets/ 缺少三项出厂预设" >&2
  exit 1
fi

is_omnimux_profile() {
  local home="$1"
  local base
  base=$(basename "$home")
  case "$base" in
    omnimux|omnimux-*) return 0 ;;
    *) return 1 ;;
  esac
}

materialize_into() {
  local dest="$1"
  if [ ! -d "$dest" ]; then
    echo "· skip missing $dest"
    return 0
  fi
  echo "==> 物化 Agent Presets → $dest"
  for child in "$dest"/*; do
    [ -e "$child" ] || continue
    base=$(basename "$child")
    keep=0
    for k in "${KEEP[@]}"; do
      if [ "$base" = "$k" ]; then keep=1; break; fi
    done
    if [ "$keep" -eq 0 ]; then
      rm -rf "$child"
      echo "  - removed $base"
    fi
  done
  for k in "${KEEP[@]}"; do
    rm -rf "$dest/$k"
    mkdir -p "$dest/$k"
    cp -R "$SRC/$k/." "$dest/$k/"
    echo "  + synced $k"
  done
}

# 1) OmniMux profiles only（跳过 desktop / web / 其它 DSH 开发 profile）
shopt -s nullglob
for profile_home in "$HOME/.dsh/profiles"/* "$HOME/.omnimux/profiles"/* "$HOME/.omnimux-dev/profiles"/*; do
  [ -d "$profile_home" ] || continue
  is_omnimux_profile "$profile_home" || { echo "· skip non-omnimux profile $profile_home"; continue; }
  dest="$profile_home/node_modules/@deepseek-ai/dsh/config/agent-presets"
  materialize_into "$dest"
done

# 2) OmniMux App unpacked copies only — never DSH Desktop, never dsh-plugin-desktop
for app_presets in \
  "/Applications/OmniMux.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "/Applications/OmniMux Dev.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"; do
  materialize_into "$app_presets"
done

patch_asar_preset_header() {
  local asar="$1"
  local unpacked="$2"
  [ -f "$asar" ] && [ -d "$unpacked" ] || return 0
  ELECTRON_NO_ASAR=1 node "$ROOT/scripts/patch-asar-agent-presets.mjs" "$asar" "$unpacked" || echo "· asar header patch failed for $asar"
}

for pair in \
  "/Applications/OmniMux.app/Contents/Resources/app.asar|/Applications/OmniMux.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "/Applications/OmniMux Dev.app/Contents/Resources/app.asar|/Applications/OmniMux Dev.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"; do
  asar="${pair%%|*}"
  unpacked="${pair#*|}"
  patch_asar_preset_header "$asar" "$unpacked"
done

# 3) OmniMux profile patch only — never desktop / web
patch_profile() {
  local patch="$1"
  [ -f "$patch" ] || return 0
  if grep -q "id: agent-presets" "$patch" 2>/dev/null; then
    echo "· $patch 已含 agent-presets，跳过自动改写（请人工确认 includeUserRoot: false）"
    return 0
  fi
  if grep -qE '^\[\]\s*$' "$patch"; then
    cat > "$patch" <<'YAML'
# Product defaults for the OmniMux desktop profile. Edit freely.
# Applied after every bundle layer. Do not put API keys here.

# OmniMux 出厂会话预设：只保留标准模式 + 两个社媒专家团
- id: agent-presets
  config:
    default: standard
    includeUserRoot: false
YAML
    echo "  ✓ wrote agent-presets patch → $patch"
  else
    cat >> "$patch" <<'YAML'

# OmniMux 出厂会话预设：只保留标准模式 + 两个社媒专家团
- id: agent-presets
  config:
    default: standard
    includeUserRoot: false
YAML
    echo "  ✓ appended agent-presets patch → $patch"
  fi
}

for patch in \
  "$HOME/.dsh/profiles/omnimux/cordis.patch.yml" \
  "$HOME/.omnimux/profiles/omnimux/cordis.patch.yml" \
  "$HOME/.omnimux-dev/profiles/omnimux/cordis.patch.yml"; do
  patch_profile "$patch"
done

echo "✅ OmniMux Agent Presets 物化完成。请重启 OmniMux / OmniMux Dev（不要动 DSH Desktop）。"
