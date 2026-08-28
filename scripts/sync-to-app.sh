#!/bin/bash
# sync-to-app.sh — 日常迭代：先构建产物，再物化进目标 profile（默认 Dev 开发版，--prod 进生产）。
#
# 规范：docs/contracts/dev-pipeline.md
#
# 用法：
#   ./scripts/sync-to-app.sh                     # 默认同步至 Dev 开发版 (~/.omnimux-dev)
#   ./scripts/sync-to-app.sh --prod              # 仅在人类明确指令下同步至生产正式版 (~/.dsh)
#   ./scripts/sync-to-app.sh omnimux-assets       # 只同步单个插件至 Dev 开发版
#   ./scripts/sync-to-app.sh --prod omnimux-workflow # 明确同步单个插件至生产正式版
#   ./scripts/sync-to-app.sh --skip-build omnimux-assets
#
# 主入口（推荐）：在 omnimux-desktop-fork 里跑
#   yarn omnimux:sync [插件...] [--prod]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-$ROOT/plugins}"
SKIP_BUILD=0
TARGET_ENV="dev"
PLUGINS=()

# 与 sync-stable.sh 默认同步集合对齐（含 omnimux-market 与 omnimux-clip）
DEFAULT_PLUGINS=(omnimux omnimux-accounts omnimux-assets omnimux-products omnimux-workflow omnimux-market omnimux-inspiration omnimux-clip omnimux-video omnimux-analytics dsh-publish)

usage() {
  sed -n '2,17p' "$0"
  exit 1
}

while [ $# -gt 0 ]; do
  case "$1" in
    -h|--help) usage ;;
    --skip-build) SKIP_BUILD=1; shift ;;
    --dev|--env=dev) TARGET_ENV="dev"; shift ;;
    --prod|--env=prod) TARGET_ENV="prod"; shift ;;
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
    omnimux|omnimux-accounts|omnimux-assets|omnimux-products|omnimux-inspiration|omnimux-clip|omnimux-analytics)
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

ENV_TITLE=$([ "$TARGET_ENV" = "prod" ] && echo "生产正式版 (Production)" || echo "开发版 (Dev)")

echo "== sync-to-app [目标环境: $ENV_TITLE]: ${PLUGINS[*]} =="
if [ "$SKIP_BUILD" -eq 0 ]; then
  echo "== 1/2 build =="
  for name in "${PLUGINS[@]}"; do
    build_one "$name"
  done
else
  echo "== 1/2 build 跳过 (--skip-build) =="
fi

echo "== 2/2 物化进 $ENV_TITLE profile =="
OMNIMUX_TARGET_ENV="$TARGET_ENV" OMNIMUX_SYNC_VIA=sync-to-app "$ROOT/scripts/sync-stable.sh" --"$TARGET_ENV" "${PLUGINS[@]}"

cat <<EOF

✓ 已完成物化进 $ENV_TITLE profile（零副作用，未重启任何进程）。
  【生效规则】
  - 前端 Client 修改：在浏览器或 OmniMux $ENV_TITLE 窗口中刷新（Cmd+R）即可加载最新 bundle。
  - 后端 Host/插件扩展修改：产物已就绪，在应用下次自然启动或闲时手动重启后生效。
  - 【权限红线】开发收尾默认仅推 Dev 态；正式版（生产）严格禁止 Agent 自主推送，必须等待人类显式指令！
EOF
