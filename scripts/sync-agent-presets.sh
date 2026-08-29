#!/usr/bin/env bash
# sync-agent-presets.sh — 把 OmniMux 出厂三项 Agent Preset 物化进运行时
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/presets"
KEEP=(standard social-content-team social-engagement-team)

if [ ! -d "$SRC/standard" ] || [ ! -d "$SRC/social-content-team" ] || [ ! -d "$SRC/social-engagement-team" ]; then
  echo "❌ presets/ 缺少三项出厂预设" >&2
  exit 1
fi

materialize_into() {
  local dest="$1"
  if [ ! -d "$dest" ]; then
    echo "· skip missing $dest"
    return 0
  fi
  echo "==> 物化 Agent Presets → $dest"
  # remove non-keep children
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

# 1) every profile that vendors @deepseek-ai/dsh
shopt -s nullglob
for profile_home in "$HOME/.dsh/profiles"/* "$HOME/.omnimux/profiles"/* "$HOME/.omnimux-dev/profiles"/*; do
  [ -d "$profile_home" ] || continue
  dest="$profile_home/node_modules/@deepseek-ai/dsh/config/agent-presets"
  materialize_into "$dest"
done

# 2) DSH Desktop / OmniMux unpacked app copies + desktop-fork vendor copies (best-effort)
# Electron 把 shippedPresetRoot 解析到 app.asar 后再 rewrite 成 unpacked；
# 但 asar header 仍列出官方 code/cordis/minimal。仅改 unpacked 不够，
# 还要用同长度 header 补丁把目录改成三项（见 patch_asar_preset_header）。
for app_presets in \
  "/Applications/DSH Desktop.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "/Applications/OmniMux.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "/Applications/OmniMux Dev.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "$HOME/Desktop/Project/omnimux-desktop-fork/dsh-plugin-desktop/node_modules/@deepseek-ai/dsh/config/agent-presets"; do
  materialize_into "$app_presets"
done

patch_asar_preset_header() {
  local asar="$1"
  local unpacked="$2"
  [ -f "$asar" ] && [ -d "$unpacked" ] || return 0
  node "$ROOT/scripts/patch-asar-agent-presets.mjs" "$asar" "$unpacked" || echo "· asar header patch failed for $asar"
}

for pair in \
  "/Applications/DSH Desktop.app/Contents/Resources/app.asar|/Applications/DSH Desktop.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "/Applications/OmniMux.app/Contents/Resources/app.asar|/Applications/OmniMux.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets" \
  "/Applications/OmniMux Dev.app/Contents/Resources/app.asar|/Applications/OmniMux Dev.app/Contents/Resources/app.asar.unpacked/node_modules/@deepseek-ai/dsh/config/agent-presets"; do
  asar="${pair%%|*}"
  unpacked="${pair#*|}"
  patch_asar_preset_header "$asar" "$unpacked"
done

# 3) ensure profile patch disables user-root merge
patch_profile() {
  local patch="$1"
  [ -f "$patch" ] || return 0
  if grep -q "id: agent-presets" "$patch" 2>/dev/null; then
    echo "· $patch 已含 agent-presets，跳过自动改写（请人工确认 includeUserRoot: false）"
    return 0
  fi
  # If file is `[]` only, replace; else append
  if grep -qE '^\[\]\s*$' "$patch"; then
    cat > "$patch" <<'YAML'
# Product defaults for this dsh profile. Edit freely.
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
  "$HOME/.dsh/profiles/desktop/cordis.patch.yml" \
  "$HOME/.dsh/profiles/web/cordis.patch.yml"; do
  patch_profile "$patch"
done

# 4) retire obsolete user presets that would otherwise pollute dropdowns if includeUserRoot is re-enabled
USER_ROOT="$HOME/.dsh/.agent-presets"
if [ -d "$USER_ROOT" ]; then
  echo "==> 清理旧用户预设（保留目录，移除非出厂项）"
  for child in "$USER_ROOT"/*; do
    [ -e "$child" ] || continue
    base=$(basename "$child")
    case "$base" in
      standard|social-content-team|social-engagement-team) ;;
      .DS_Store) rm -f "$child" || true ;;
      *)
        # move aside rather than hard-delete for safety
        archive="$USER_ROOT/.retired"
        mkdir -p "$archive"
        rm -rf "$archive/$base"
        mv "$child" "$archive/$base"
        echo "  - retired $base → .retired/"
        ;;
    esac
  done
  # also sync product presets into user root for non-desktop / includeUserRoot=true fallbacks
  for k in "${KEEP[@]}"; do
    rm -rf "$USER_ROOT/$k"
    mkdir -p "$USER_ROOT/$k"
    cp -R "$SRC/$k/." "$USER_ROOT/$k/"
    echo "  + user-root synced $k"
  done
fi

echo "✅ Agent Presets 物化完成。请重启 Host / Desktop 后刷新会话模式下拉。"
