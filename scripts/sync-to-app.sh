#!/bin/bash
# sync-to-app.sh — L2/L3 日常迭代：先构建产物，再物化进生产 profile。
#
# 默认不重启 App（避免打断正在用的会话）。同步完成后打印重启命令。
# 规范：docs/contracts/dev-pipeline.md
#
# 用法：
#   ./scripts/sync-to-app.sh                     # 全部默认同步清单插件
#   ./scripts/sync-to-app.sh omnimux-assets       # 只同步一个
#   ./scripts/sync-to-app.sh omnimux-assets omnimux-workflow
#   ./scripts/sync-to-app.sh --skip-build omnimux-assets
#
# 主入口（推荐）：在 omnimux-desktop-fork 里跑
#   yarn omnimux:sync [插件...]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-$ROOT/plugins}"
SKIP_BUILD=0
PLUGINS=()

assert_origin_main_aligned() {
  if [ "${OMNIMUX_ALLOW_UNMERGED_MATERIALIZE:-0}" = "1" ]; then
    echo "⚠ OMNIMUX_ALLOW_UNMERGED_MATERIALIZE=1：跳过 origin/main 对齐门禁（仅排障使用）"
    return 0
  fi
  if ! git -C "$ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "· 非 git 工作区，跳过远端对齐检查"
    return 0
  fi
  if ! git -C "$ROOT" rev-parse --verify origin/main >/dev/null 2>&1; then
    echo "⚠ origin/main 不可用，跳过远端对齐检查"
    return 0
  fi
  local branch ahead dirty
  branch=$(git -C "$ROOT" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")
  if [ "$branch" != "main" ]; then
    echo "❌ sync-to-app: 当前分支是 [$branch]，生产物化只允许在已对齐的 main 上执行。" >&2
    echo "   请等待 PR MERGED 后在主仓 git pull origin main，或显式设置 OMNIMUX_ALLOW_UNMERGED_MATERIALIZE=1。" >&2
    exit 1
  fi
  dirty=$(git -C "$ROOT" status --porcelain)
  if [ -n "$dirty" ]; then
    echo "❌ sync-to-app: 工作区有未提交改动，禁止把本地脏状态物化进 App。" >&2
    echo "$dirty" >&2
    exit 1
  fi
  ahead=$(git -C "$ROOT" rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
  if [ "${ahead:-0}" -gt 0 ]; then
    echo "❌ sync-to-app: 本地 main 领先 origin/main ${ahead} 个提交。禁止物化未推送/未 MERGED 的提交（上次丢代码事故路径）。" >&2
    echo "   正确流程: 推特性分支 → PR MERGED → git pull origin main → 再 pnpm sync。" >&2
    echo "   排障旁路: OMNIMUX_ALLOW_UNMERGED_MATERIALIZE=1" >&2
    exit 1
  fi
  echo "✓ HEAD 已对齐 origin/main，允许物化"
}

assert_origin_main_aligned

# ---------------------------------------------------------------------------
# dsh-ui-kit 版本漂移防护 (Issue #200)
#
# 背景：10 个插件通过 file: 依赖共享 kit，但构建与物化链路从未 build kit，
# 导致生产 profile 里的 kit 停留在旧版本（实测 ~/.dsh 缺 StageHeader 等 5 个导出，
# 而 ~/.omnimux 已是最新）——物化后会静默跑旧代码。
#
# 策略：物化前先构建 kit，再对所有 profile 副本做 sha256 指纹校验并自动补齐。
# ---------------------------------------------------------------------------
# 默认路径：优先同级 personal/dsh-ui-kit（worktree 与主仓均在 product/ 下）；
# 缺失时回退到 product/personal/dsh-ui-kit。可用 OMNIMUX_DSH_UI_KIT_DIR 显式覆盖。
if [ -z "${OMNIMUX_DSH_UI_KIT_DIR:-}" ]; then
  for candidate in \
    "$ROOT/../personal/dsh-ui-kit" \
    "$ROOT/../../personal/dsh-ui-kit" \
    "$ROOT/../../../personal/dsh-ui-kit"; do
    if [ -d "$candidate" ]; then
      DSH_UI_KIT_DIR="$candidate"
      break
    fi
  done
  DSH_UI_KIT_DIR="${DSH_UI_KIT_DIR:-$ROOT/../personal/dsh-ui-kit}"
fi

sync_kit_artifact() {
  local kit_dir="$1" profile="$2"
  local src="$kit_dir/lib/index.js"
  local dst="$profile/node_modules/dsh-ui-kit/lib/index.js"
  [ -f "$dst" ] || return 0
  if [ -f "$src" ]; then
    cp -f "$src" "$dst"
    local extra
    for extra in index.d.ts index.js.map index.d.ts.map; do
      [ -f "$kit_dir/lib/$extra" ] && cp -f "$kit_dir/lib/$extra" "$(dirname "$dst")/$extra"
    done
    echo "  ✓ 已同步 kit → $profile"
  fi
}

ensure_dsh_ui_kit_fresh() {
  if [ ! -d "$DSH_UI_KIT_DIR" ]; then
    echo "· 未发现 dsh-ui-kit ($DSH_UI_KIT_DIR)，跳过 kit 校验"
    return 0
  fi
  if [ "${OMNIMUX_SKIP_KIT_BUILD:-0}" = "1" ]; then
    echo "· OMNIMUX_SKIP_KIT_BUILD=1，跳过 kit 构建校验"
    return 0
  fi

  echo "== kit 校验: dsh-ui-kit =="
  if ! (cd "$DSH_UI_KIT_DIR" && corepack pnpm build >/dev/null 2>&1); then
    echo "❌ dsh-ui-kit 构建失败，禁止物化（否则插件会消费到残缺 kit）。" >&2
    echo "   请先在 $DSH_UI_KIT_DIR 修复构建，或设置 OMNIMUX_SKIP_KIT_BUILD=1 旁路。" >&2
    exit 1
  fi

  # pnpm 对 file: 依赖是硬拷贝到 .pnpm store，而非软链。
  # 因此 kit 重新 build 后必须刷新 store，否则插件仍消费旧拷贝（漂移的真正上游根因）。
  local store_kit
  store_kit=$(find "$ROOT/node_modules/.pnpm" -maxdepth 4 -type d -name 'dsh-ui-kit' \
    -path '*node_modules/dsh-ui-kit' 2>/dev/null | head -1)
  if [ -n "$store_kit" ] && [ -f "$store_kit/lib/index.js" ]; then
    local store_hash
    store_hash=$(shasum -a 256 "$store_kit/lib/index.js" 2>/dev/null | awk '{print $1}')
    local src_build_hash
    src_build_hash=$(shasum -a 256 "$DSH_UI_KIT_DIR/lib/index.js" 2>/dev/null | awk '{print $1}')
    if [ -n "$src_build_hash" ] && [ "$store_hash" != "$src_build_hash" ]; then
      echo "  ⚠ pnpm store 中的 kit 已过期，正在刷新（file: 依赖为硬拷贝）…"
      (cd "$ROOT" && corepack pnpm install --filter omnimux... --filter omnimux-assets... \
        --filter omnimux-accounts... --filter omnimux-products... --filter omnimux-inspiration... \
        --filter omnimux-publish... --filter omnimux-analytics... --filter omnimux-workflow... \
        --filter omnimux-clip... --filter omnimux-market... >/dev/null 2>&1) || \
      (cd "$ROOT" && corepack pnpm install >/dev/null 2>&1) || {
        echo "❌ pnpm store 刷新失败，禁止物化。" >&2
        exit 1
      }
      echo "  ✓ pnpm store 已刷新"
    else
      echo "  ✓ pnpm store 中的 kit 已是最新"
    fi
  fi

  local src="$DSH_UI_KIT_DIR/lib/index.js"
  local src_hash dst_hash profile drift=0
  src_hash=$(shasum -a 256 "$src" 2>/dev/null | awk '{print $1}')
  if [ -z "$src_hash" ]; then
    echo "· 无法计算 kit 指纹，跳过校验"
    return 0
  fi

  for profile in "$HOME/.dsh/profiles/omnimux" "$HOME/.omnimux/profiles/omnimux" "$HOME/.omnimux-dev/profiles/omnimux"; do
    local dst="$profile/node_modules/dsh-ui-kit/lib/index.js"
    [ -f "$dst" ] || continue
    dst_hash=$(shasum -a 256 "$dst" 2>/dev/null | awk '{print $1}')
    if [ "$src_hash" != "$dst_hash" ]; then
      echo "  ⚠ kit 漂移: $profile"
      drift=1
      sync_kit_artifact "$DSH_UI_KIT_DIR" "$profile"
    fi
  done
  [ "$drift" -eq 0 ] && echo "  ✓ 全部 profile 的 kit 与源码一致"
  return 0
}

ensure_dsh_ui_kit_fresh

# 与 sync-stable.sh 默认同步集合对齐（含 omnimux-market 与 omnimux-clip）
DEFAULT_PLUGINS=(omnimux omnimux-accounts omnimux-assets omnimux-products omnimux-workflow omnimux-market omnimux-inspiration omnimux-clip omnimux-video omnimux-analytics omnimux-publish)

usage() {
  sed -n '2,16p' "$0"
  exit 1
}

while [ $# -gt 0 ]; do
  case "$1" in
    -h|--help) usage ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    --*) echo "未知参数: $1" >&2; usage ;;
    *) PLUGINS+=("$1"); shift ;;
  esac
done

if [ ${#PLUGINS[@]} -eq 0 ]; then
  PLUGINS=("${DEFAULT_PLUGINS[@]}")
fi

build_one() {
  local name="$1"
  local dir="$PLUGINS_ROOT/$name"
  if [ ! -f "$dir/package.json" ]; then
    echo "✗ 源码缺失: $dir" >&2
    exit 1
  fi

  case "$name" in
    omnimux|omnimux-accounts|omnimux-assets|omnimux-products|omnimux-inspiration|omnimux-clip|omnimux-analytics|omnimux-publish)
      echo "→ build $name (client)"
      (cd "$dir" && node scripts/build-client.mjs)
      ;;
    omnimux-workflow)
      echo "→ build $name (host + client + canvas)"
      (cd "$dir" && node scripts/build-host.mjs && node scripts/build-client.mjs && node scripts/build-canvas.mjs)
      ;;
    omnimux-market)
      echo "→ build $name (tsc + concat-client)"
      (cd "$dir" && npm run build --silent)
      ;;
    omnimux-video|omnimux-analytics)
      echo "· $name 无构建产物（源码直读），跳过 build"
      ;;
    *)
      if [ -f "$dir/scripts/build-client.mjs" ]; then
        echo "→ build $name (client, 推断)"
        (cd "$dir" && node scripts/build-client.mjs)
      elif node --input-type=commonjs -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync(process.argv[1],'utf8'));process.exit(p.scripts&&p.scripts.build?0:1)" "$dir/package.json" >/dev/null 2>&1; then
        echo "→ build $name (package.json scripts.build)"
        (cd "$dir" && npm run build --silent)
      else
        echo "· $name 无已知构建步骤，跳过 build"
      fi
      ;;
  esac
}

echo "== sync-to-app: ${PLUGINS[*]} =="
if [ "$SKIP_BUILD" -eq 0 ]; then
  echo "== 1/2 build =="
  for name in "${PLUGINS[@]}"; do
    build_one "$name"
  done
else
  echo "== 1/2 build 跳过 (--skip-build) =="
fi

echo "== 2/3 物化进生产 profile =="
OMNIMUX_SYNC_VIA=sync-to-app "$ROOT/scripts/sync-stable.sh" "${PLUGINS[@]}"

echo "== 3/3 物化出厂 Agent Presets =="
"$ROOT/scripts/sync-agent-presets.sh"

cat <<EOF

✓ 已物化进生产 profile（零副作用，未重启任何进程）。
  【多 Agent 并发与生效规则】
  - 前端 Client 修改：在浏览器或已打开的客户端窗口中刷新（Cmd+R）即可加载最新 bundle。
  - 后端 Host/插件扩展修改：产物已静默就绪，在应用下次自然启动或用户闲时手动重启后生效。
  - 会话预设下拉：已同步为「标准模式 / 社媒内容创作专家团 / 社媒互动增长专家团」，需重启 Host 后生效。
  - 【安全红线】Agent 严禁强杀或重启任何桌面 App（测试验证一律在 L2 独立隔离环境内闭环）。
EOF
