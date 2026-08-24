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

# 与 sync-stable.sh 默认同步集合对齐（含 omnimux-market）
DEFAULT_PLUGINS=(omnimux omnimux-accounts omnimux-assets omnimux-products omnimux-gallery omnimux-workflow omnimux-market omnimux-inspiration dsh-video omnimux-analytics)

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
    omnimux|omnimux-accounts|omnimux-assets|omnimux-products|omnimux-gallery|omnimux-inspiration)
      echo "→ build $name (client)"
      (cd "$dir" && node scripts/build-client.mjs)
      ;;
    omnimux-workflow)
      echo "→ build $name (host + client + canvas)"
      (cd "$dir" && node scripts/build-host.mjs && node scripts/build-client.mjs && node scripts/build-canvas.mjs)
      ;;
    omnimux-market)
      echo "→ build $name (tsc + client copy)"
      (cd "$dir" && npm run build --silent)
      ;;
    dsh-video|omnimux-analytics|dsh-drama)
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

echo "== 2/2 物化进生产 profile =="
OMNIMUX_SYNC_VIA=sync-to-app "$ROOT/scripts/sync-stable.sh" "${PLUGINS[@]}"

cat <<EOF

✓ 已物化。App 不会自动重启。
  要加载新插件，请手动执行：
    pkill -f 'OmniMux.app' || true; open -a OmniMux
  或：
    yarn omnimux:restart
EOF
