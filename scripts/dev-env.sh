#!/bin/bash
# dev-env.sh — 预发布/开发环境管理（L2 层）。规范：docs/contracts/dev-pipeline.md
# QA：docs/contracts/plugin-qa.md
#
# 模型：每个开发/测试任务一个独立 profile（omnimux-dev-<name>）。
# 默认 DSH_HOME=~/.dsh-dev/tasks/<name>（M2），与生产 ~/.dsh 零共享；任务之间数据隔离。
# 逃生：OMNIMUX_DEV_LEGACY_HOME=1 时回退到共用 ~/.dsh-dev（一迭代过渡）。
#
# 铁律：一个 dev profile 里 link 的在研插件不超过 1 个，其余全是物化稳定副本。
#
# 端口（M1）：L2 专用池 44200–44299。禁止占用：
#   43120–43151（DSH Desktop）/ 44120–44151（OmniMux App 默认+重试窗）。
# start 写入 cordis.patch.yml 的 webserver.port + port.txt，并以 --port <池口> 硬绑，避免照抄生产 44120。
# 任务名仅允许 [A-Za-z0-9_-]，且任务目录必须落在 ~/.dsh-dev/tasks/<name>/ 下（防 rm 路径穿越）。
#
# 用法：
#   ./scripts/dev-env.sh start <name> <plugin>   # 建环境 + Host + 插件 watch（后台）
#   ./scripts/dev-env.sh start <name> <plugin> --source=<worktree-root>
#                                                # 用指定插件树根（工作树）作为源码源
#   ./scripts/dev-env.sh stop <name>             # 停 Host + watch
#   ./scripts/dev-env.sh ls                      # 列出现有dev 环境
#   ./scripts/dev-env.sh rm <name>               # 停 Host/watch 并删除整个环境
#   ./scripts/dev-env.sh restart-host <name>     # 仅重启 L2 Host 进程（同端口/同 profile/保数据，不丢开发上下文）
#   ./scripts/dev-env.sh watch <name> <plugin>   # 只启/换在研插件的 watch（不重启 Host）
#   ./scripts/dev-env.sh unwatch <name>          # 只停 watch
#
# 例：./scripts/dev-env.sh start assets-v2 omnimux-assets
#     → 浏览器打开打印的 URL；改 src/client 后 watch 重建，官方 HMR 自动推浏览器。
#
# 【内部实现】日常入口请用 fork 仓库：
#   yarn omnimux:dev start <name> <plugin>
#   yarn omnimux:dev watch|stop|rm|ls ...
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLUGINS_ROOT="${OMNIMUX_PLUGINS_DIR:-$ROOT/plugins}"
DSH_SRC="${DSH_SRC:-/Users/x/Desktop/Project/Github/deepseek-harness}"
DEV_HOME="${DSH_DEV_HOME:-$HOME/.dsh-dev}"
PROD_HOME="${DSH_HOME:-$HOME/.dsh}"
PROD_PROFILE="$PROD_HOME/profiles/omnimux"
L2_PORT_POOL_START="${OMNIMUX_L2_PORT_POOL_START:-44200}"
L2_PORT_POOL_END="${OMNIMUX_L2_PORT_POOL_END:-44299}"
LEGACY_HOME="${OMNIMUX_DEV_LEGACY_HOME:-0}"

# Yarn Berry prepends a short-lived xfs bin directory to PATH. A detached
# child can outlive that directory and fail with
# "/private/.../xfs-.../node: No such file or directory". Resolve a durable
# absolute Node binary before spawning Host/watch children and remove the
# Yarn-only executable hints from their inherited environment.
resolve_node_bin() {
  local candidate
  if [ -n "${OMNIMUX_NODE_BIN:-}" ] && [ -x "$OMNIMUX_NODE_BIN" ]; then
    printf '%s\n' "$OMNIMUX_NODE_BIN"
    return 0
  fi
  if [ -n "${NVM_BIN:-}" ] && [ -x "$NVM_BIN/node" ]; then
    printf '%s\n' "$NVM_BIN/node"
    return 0
  fi
  candidate="$(command -v node 2>/dev/null || true)"
  case "$candidate" in
    */xfs-*/node|*/xfs-*/nodejs) candidate="" ;;
  esac
  if [ -n "$candidate" ] && [ -x "$candidate" ]; then
    printf '%s\n' "$candidate"
    return 0
  fi
  for candidate in /opt/homebrew/bin/node /usr/local/bin/node /usr/bin/node; do
    if [ -x "$candidate" ]; then
      printf '%s\n' "$candidate"
      return 0
    fi
  done
  printf '%s\n' node
}

NODE_BIN="$(resolve_node_bin)"
NODE_DIR="$(dirname "$NODE_BIN")"
CLEAN_PATH="$NODE_DIR"
OLD_IFS="$IFS"
IFS=':'
for path_entry in ${PATH:-}; do
  case "$path_entry" in
    */xfs-*) continue ;;
  esac
  [ -n "$path_entry" ] && CLEAN_PATH="$CLEAN_PATH:$path_entry"
done
IFS="$OLD_IFS"
export PATH="$CLEAN_PATH"
unset npm_execpath npm_node_execpath BERRY_BIN_FOLDER

usage() { sed -n '2,30p' "$0"; exit 1; }
[ $# -lt 1 ] && usage
cmd="$1"; name="${2:-}"

# --source=<path> / --source <path>：把「源码源」指到插件树根（如某工作树目录）。
# 未指定时保持默认（OMNIMUX_PLUGINS_DIR 或主仓 plugins）。归一化位置参数，
# 使 start/watch 的 <plugin> 仍位于 $3，命令语义不变。
SOURCE_DIR=""
_args=()
shift 2 2>/dev/null || true
while [ $# -gt 0 ]; do
  case "$1" in
    --source=*)
      SOURCE_DIR="${1#--source=}"
      ;;
    --source)
      if [ $# -ge 2 ]; then SOURCE_DIR="$2"; shift; fi
      ;;
    *)
      _args+=("$1")
      ;;
  esac
  shift
done
set -- "" "" ${_args[@]+"${_args[@]}"}

if [ -n "$SOURCE_DIR" ]; then
  case "$SOURCE_DIR" in
    /*|~*) eval SOURCE_DIR="$SOURCE_DIR" ;;
  esac
  SOURCE_DIR="$(cd "$SOURCE_DIR" 2>/dev/null && pwd -P || true)"
  if [ -z "$SOURCE_DIR" ]; then
    echo "✗ --source 目录不存在: ${SOURCE_DIR}" >&2
    exit 1
  fi
  if [ -d "$SOURCE_DIR/plugins" ]; then
    PLUGINS_ROOT="$SOURCE_DIR/plugins"
  elif [ "$(basename "$SOURCE_DIR")" = "plugins" ]; then
    PLUGINS_ROOT="$SOURCE_DIR"
  else
    echo "✗ --source 必须是插件树根（含 plugins/ 子目录）: $SOURCE_DIR" >&2
    exit 1
  fi
  # 子进程（watch-plugin.mjs）通过同一环境变量读取插件根
  export OMNIMUX_PLUGINS_DIR="$PLUGINS_ROOT"
  echo "· 源码源: $PLUGINS_ROOT"
fi

validate_task_name() {
  local n="$1"
  if [[ ! "$n" =~ ^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$ ]]; then
    echo "✗ 非法任务名: ${n}（仅允许字母/数字/_/-，1–64 字符，且以字母或数字开头）" >&2
    exit 1
  fi
}

task_home_for() {
  local n="$1"
  validate_task_name "$n"
  if [ "$LEGACY_HOME" = "1" ]; then
    echo "$DEV_HOME"
  else
    echo "$DEV_HOME/tasks/$n"
  fi
}

# 防御性守门：解析后的任务目录必须仍在 DEV_HOME（legacy）或 DEV_HOME/tasks 下。
assert_task_home_safe() {
  local thome="$1"
  local root real_root real_thome
  if [ "$LEGACY_HOME" = "1" ]; then
    root="$DEV_HOME"
  else
    root="$DEV_HOME/tasks"
  fi
  mkdir -p "$root" "$thome"
  real_root="$(cd "$root" && pwd -P)"
  real_thome="$(cd "$thome" && pwd -P)"
  case "$real_thome" in
    "$real_root"|"$real_root"/*) return 0 ;;
    *)
      echo "✗ 拒绝越界任务目录: ${thome} → ${real_thome}（必须在 ${root}/ 下）" >&2
      exit 1
      ;;
  esac
}

# L2 源依赖预检：L2 profile 从生产 dsh 层（PROD_PROFILE）克隆依赖。若生产层本身
# 缺核心包（如 @deepseek-ai/dsh-client-ui-chat 只有 README 无 lib），克隆后的 L2
# 必然启动失败且要干等 20s。此处提前检查哨兵入口，缺失立即报清晰指引。
assert_l2_source_deps() {
  local profile_dir="$1"
  [ -d "$profile_dir/node_modules" ] || { echo "· 生产 dsh 层无 node_modules，跳过预检" >&2; return 0; }
  local nm="$profile_dir/node_modules"
  local missing=0
  local entry
  for entry in \
    "@deepseek-ai/dsh-client-ui-chat/lib/index.js" \
    "@deepseek-ai/dsh-base/package.json" \
    "@deepseek-ai/dsh-web-app/package.json" \
    "dsh-better-sidebar/lib/client.js"; do
    if [ ! -f "$nm/$entry" ]; then
      echo "  - 缺失: $entry" >&2
      missing=1
    fi
  done
  if [ "$missing" -eq 1 ]; then
    echo "✗ L2 源依赖不完整（生产 dsh 层缺失上述包/入口）。" >&2
    echo "   这是 dsh 层依赖问题（从 ${profile_dir}/node_modules 克隆继承），不是本任务代码问题。" >&2
    echo "   请先修复 dsh 层：yarn omnimux:sync（或完整安装），再重建 L2 环境：dev-env.sh rm <name> && start。" >&2
    exit 1
  fi
  echo "✓ L2 源依赖完整"
}

# Resolve profile dir: prefer tasks/<name>/profiles/...；兼容旧 ~/.dsh-dev/profiles/...
profile_dir() {
  local n="$1"
  local neu old
  neu="$(task_home_for "$n")/profiles/omnimux-dev-$n"
  old="$DEV_HOME/profiles/omnimux-dev-$n"
  if [ -d "$neu" ]; then
    echo "$neu"
  elif [ -d "$old" ]; then
    echo "$old"
  else
    echo "$neu"
  fi
}

legacy_profile_dir() { echo "$DEV_HOME/profiles/omnimux-dev-$1"; }

# 保留窗：Desktop 43120–43151、OmniMux App 44120–44151
port_reserved() {
  local p="$1"
  { [ "$p" -ge 43120 ] && [ "$p" -le 43151 ]; } && return 0
  { [ "$p" -ge 44120 ] && [ "$p" -le 44151 ]; } && return 0
  return 1
}

port_in_use() {
  lsof -nP -iTCP:"$1" -sTCP:LISTEN >/dev/null 2>&1
}

port_in_pool() {
  local p="$1"
  [ "$p" -ge "$L2_PORT_POOL_START" ] && [ "$p" -le "$L2_PORT_POOL_END" ]
}

# 优先复用 port.txt（须在池内、空闲、不在保留窗）；否则扫 L2 池。
alloc_port() {
  local pdir="$1"
  local preferred="" candidate
  if [ -f "$pdir/port.txt" ]; then
    preferred="$(tr -d '[:space:]' < "$pdir/port.txt" || true)"
  fi
  if [ -n "$preferred" ] && [[ "$preferred" =~ ^[0-9]+$ ]] \
    && port_in_pool "$preferred" && ! port_reserved "$preferred"; then
    if ! port_in_use "$preferred"; then
      echo "$preferred"
      return 0
    fi
  fi
  candidate="$L2_PORT_POOL_START"
  while [ "$candidate" -le "$L2_PORT_POOL_END" ]; do
    if port_in_pool "$candidate" && ! port_reserved "$candidate" && ! port_in_use "$candidate"; then
      echo "$candidate"
      return 0
    fi
    candidate=$((candidate + 1))
  done
  echo "✗ L2 端口池 ${L2_PORT_POOL_START}-${L2_PORT_POOL_END} 已满" >&2
  return 1
}

# 幂等改写 webserver.config.port；若无 webserver 块则追加。
rewrite_patch_port() {
  local patch="$1"
  local port="$2"
  local tmp
  tmp="$(mktemp)"
  if [ ! -f "$patch" ]; then
    printf '%s\n' \
      '- id: webserver' \
      '  config:' \
      '    host: 127.0.0.1' \
      "    port: ${port}" > "$patch"
    return 0
  fi
  if grep -qE '^[[:space:]]*-[[:space:]]*id:[[:space:]]*webserver[[:space:]]*$' "$patch"; then
    awk -v port="$port" '
      BEGIN { in_ws=0; port_done=0 }
      /^[[:space:]]*-[[:space:]]*id:[[:space:]]*webserver[[:space:]]*$/ { in_ws=1; print; next }
      in_ws && /^[[:space:]]*-[[:space:]]*id:[[:space:]]*/ {
        if (!port_done) {
          print "  config:"
          print "    host: 127.0.0.1"
          print "    port: " port
          port_done=1
        }
        in_ws=0
      }
      in_ws && /^[[:space:]]*port:[[:space:]]*[0-9]+[[:space:]]*$/ {
        sub(/[0-9]+[[:space:]]*$/, port)
        port_done=1
      }
      { print }
      END {
        if (in_ws && !port_done) {
          print "  config:"
          print "    host: 127.0.0.1"
          print "    port: " port
        }
      }
    ' "$patch" > "$tmp"
    mv "$tmp" "$patch"
  else
    {
      cat "$patch"
      printf '\n%s\n' \
        '- id: webserver' \
        '  config:' \
        '    host: 127.0.0.1' \
        "    port: ${port}"
    } > "$tmp"
    mv "$tmp" "$patch"
  fi
}

read_assigned_port() {
  local pdir="$1"
  if [ -f "$pdir/port.txt" ]; then
    tr -d '[:space:]' < "$pdir/port.txt"
    return 0
  fi
  if [ -f "$pdir/cordis.patch.yml" ]; then
    awk '
      /^[[:space:]]*-[[:space:]]*id:[[:space:]]*webserver[[:space:]]*$/ { in_ws=1; next }
      in_ws && /^[[:space:]]*-[[:space:]]*id:[[:space:]]*/ { exit }
      in_ws && /^[[:space:]]*port:[[:space:]]*[0-9]+/ {
        if (match($0, /[0-9]+/)) { print substr($0, RSTART, RLENGTH); exit }
      }
    ' "$pdir/cordis.patch.yml"
  fi
}

ensure_task_credentials() {
  local thome="$1"
  local seed dest
  dest="$thome/.credentials.yaml"
  [ -f "$dest" ] && return 0
  seed=""
  if [ -f "$DEV_HOME/.credentials.yaml" ]; then
    seed="$DEV_HOME/.credentials.yaml"
  elif [ "${ALLOW_SEED_FROM_PROD:-0}" = "1" ] && [ -f "$PROD_HOME/.credentials.yaml" ]; then
    seed="$PROD_HOME/.credentials.yaml"
  fi
  if [ -n "$seed" ]; then
    cp "$seed" "$dest"
    chmod 600 "$dest" 2>/dev/null || true
    echo "✓ credentials ← ${seed}（任务内副本，非 symlink）"
  else
    echo "· 无 credentials 种子（可稍后写入 ${dest}；公共种子路径 $DEV_HOME/.credentials.yaml）"
  fi
}

# 旧 profile（~/.dsh-dev/profiles/...）迁到 tasks/<name>/profiles/...
migrate_legacy_profile_if_needed() {
  local n="$1"
  local thome neu old
  [ "$LEGACY_HOME" = "1" ] && return 0
  thome="$(task_home_for "$n")"
  neu="$thome/profiles/omnimux-dev-$n"
  old="$(legacy_profile_dir "$n")"
  if [ -d "$neu" ]; then
    return 0
  fi
  if [ ! -d "$old" ]; then
    return 0
  fi
  echo "→ 迁移旧 profile → tasks/${n}/profiles/omnimux-dev-${n}"
  mkdir -p "$thome/profiles"
  if cp -Rc "$old" "$neu" 2>/dev/null || cp -R "$old" "$neu"; then
    mv "$old" "${old}.migrated-$(date +%Y%m%d%H%M%S)"
    echo "✓ 旧目录已改名 *.migrated-*"
  else
    echo "✗ 迁移失败，仍使用旧路径 $old" >&2
  fi
}

resolve_runtime_home() {
  local n="$1"
  local pdir thome
  pdir="$(profile_dir "$n")"
  if [ -f "$pdir/dsh-home.txt" ]; then
    tr -d '[:space:]' < "$pdir/dsh-home.txt"
    return 0
  fi
  thome="$(task_home_for "$n")"
  case "$pdir" in
    "$thome"/profiles/*) echo "$thome" ;;
    "$DEV_HOME"/profiles/*) echo "$DEV_HOME" ;;
    *) echo "$thome" ;;
  esac
}

stop_watch() {
  local pdir="$1"
  if [ -f "$pdir/watch.pid" ]; then
    local wpid
    wpid="$(cat "$pdir/watch.pid" 2>/dev/null || true)"
    if [ -n "$wpid" ]; then
      kill "$wpid" 2>/dev/null || true
    fi
    rm -f "$pdir/watch.pid" "$pdir/watch.plugin"
    echo "✓ watch 已停止"
  fi
}

start_watch() {
  local pdir="$1"
  local plugin="$2"
  stop_watch "$pdir" >/dev/null 2>&1 || true
  mkdir -p "$pdir"
  echo "$plugin" > "$pdir/watch.plugin"
  nohup "$NODE_BIN" "$ROOT/scripts/watch-plugin.mjs" "$plugin" \
    > "$pdir/watch.log" 2>&1 &
  echo $! > "$pdir/watch.pid"
  echo "✓ watch → ${plugin}（日志: $pdir/watch.log）"
}

print_env_line() {
  local d="$1"
  local tag="${2:-}"
  local state=" stopped" wstate="watch:off" linked aport aport_disp home_disp
  [ -f "$d/host.pid" ] && kill -0 "$(cat "$d/host.pid")" 2>/dev/null && state=" running"
  if [ -f "$d/watch.pid" ] && kill -0 "$(cat "$d/watch.pid")" 2>/dev/null; then
    wstate="watch:$(cat "$d/watch.plugin" 2>/dev/null || echo on)"
  fi
  linked=$(find "$d/node_modules" -maxdepth 1 -type l 2>/dev/null | xargs -I{} basename {} 2>/dev/null | tr '\n' ' ')
  aport="$(read_assigned_port "$d")"
  aport_disp="${aport:-?}"
  if [ -f "$d/dsh-home.txt" ]; then
    home_disp="$(tr -d '[:space:]' < "$d/dsh-home.txt")"
  else
    home_disp="?"
  fi
  echo "$(basename "$d")${tag}  [$state]  port:${aport_disp}  home:${home_disp}  $wstate  link: ${linked:-（无）}"
}

case "$cmd" in
  start)
    plugin="${3:-}"
    if [ -z "$name" ] || [ -z "$plugin" ]; then usage; fi
    validate_task_name "$name"
    [ -f "$PLUGINS_ROOT/$plugin/package.json" ] || { echo "✗ 插件源码不存在: $PLUGINS_ROOT/$plugin" >&2; exit 1; }

    # 先停再建：避免 migrate 时从 running Host 脚下抽目录
    pdir="$(profile_dir "$name")"
    if [ -d "$pdir" ]; then
      stop_watch "$pdir" >/dev/null 2>&1 || true
      if [ -f "$pdir/host.pid" ]; then
        kill "$(cat "$pdir/host.pid")" 2>/dev/null || true
        rm -f "$pdir/host.pid"
        echo "· 已停止既有 Host（再 migrate/start）"
        sleep 1
      fi
    fi

    migrate_legacy_profile_if_needed "$name"
    TASK_HOME="$(task_home_for "$name")"
    assert_task_home_safe "$TASK_HOME"
    mkdir -p "$TASK_HOME"
    if [ "$LEGACY_HOME" != "1" ]; then
      ensure_task_credentials "$TASK_HOME"
    fi
    pdir="$(profile_dir "$name")"
    mkdir -p "$(dirname "$pdir")"

    if [ ! -d "$pdir/node_modules" ]; then
      # 新环境才做源依赖预检（既有环境已克隆过，直接复用）
      assert_l2_source_deps "$PROD_PROFILE"
      echo "→ 初始化环境 omnimux-dev-${name}（APFS 克隆生产依赖，秒级）"
      mkdir -p "$pdir"
      cp "$PROD_PROFILE/package.json" "$PROD_PROFILE/cordis.patch.yml" "$pdir/"
      echo "store-dir=$pdir/.pnpm-store/v10" > "$pdir/.npmrc"
      cp -Rc "$PROD_PROFILE/node_modules" "$pdir/node_modules" 2>/dev/null \
        || cp -R "$PROD_PROFILE/node_modules" "$pdir/node_modules"
    elif [ ! -f "$pdir/cordis.patch.yml" ]; then
      cp "$PROD_PROFILE/cordis.patch.yml" "$pdir/"
    fi

    # 记录本任务 DSH_HOME（Host 启动用）
    RUNTIME_HOME="$TASK_HOME"
    if [ "$LEGACY_HOME" = "1" ]; then
      RUNTIME_HOME="$DEV_HOME"
    fi
    echo "$RUNTIME_HOME" > "$pdir/dsh-home.txt"

    assigned_port="$(alloc_port "$pdir")" || exit 1
    rewrite_patch_port "$pdir/cordis.patch.yml" "$assigned_port"
    echo "$assigned_port" > "$pdir/port.txt"
    echo "✓ L2 port → ${assigned_port}（池 ${L2_PORT_POOL_START}-${L2_PORT_POOL_END}；保留窗 43120-43151 / 44120-44151）"

    rm -rf "${pdir:?}/node_modules/$plugin"
    ln -s "$PLUGINS_ROOT/$plugin" "$pdir/node_modules/$plugin"
    echo "✓ $plugin → link $PLUGINS_ROOT/$plugin"

    stop_watch "$pdir" >/dev/null 2>&1 || true
    [ -f "$pdir/host.pid" ] && kill "$(cat "$pdir/host.pid")" 2>/dev/null || true
    sleep 1
    : > "$pdir/host.log"

    # OMNIMUX_PLUGIN_PROFILE：symlink 装插件时显式注入 profile 名
    # 硬绑池口，避免 --port 0 与静态 patch 层叠碰巧生效
    DSH_HOME="$RUNTIME_HOME" OMNIMUX_PLUGIN_PROFILE="omnimux-dev-$name" nohup "$NODE_BIN" "$DSH_SRC/apps/cli/lib/bin.js" \
      --profile "omnimux-dev-$name" --host 127.0.0.1 --port "$assigned_port" --no-open \
      > "$pdir/host.log" 2>&1 &
    echo $! > "$pdir/host.pid"

    port=""
    for _ in $(seq 1 20); do
      sleep 1
      port=$(grep -oE 'http://127\.0\.0\.1:[0-9]+' "$pdir/host.log" 2>/dev/null | tail -1 | grep -oE '[0-9]+$' || true)
      [ -n "$port" ] && break
    done
    if [ -z "$port" ]; then
      echo "✗ Host 未在 20s 内监听，日志: $pdir/host.log" >&2
      echo "---- host.log 尾部 ----" >&2
      tail -n 15 "$pdir/host.log" 2>/dev/null >&2 || true
      if grep -q 'ERR_MODULE_NOT_FOUND' "$pdir/host.log" 2>/dev/null; then
        echo "⚠ Host 启动因依赖缺失失败（ERR_MODULE_NOT_FOUND）。" >&2
        echo "   L2 依赖克隆自生产 dsh 层；若生产层缺包，请先 yarn omnimux:sync 修复，再 dev-env.sh rm ${name} && start。" >&2
      fi
      exit 1
    fi
    if port_reserved "$port" || ! port_in_pool "$port"; then
      echo "✗ Host 听口 ${port} 不在 L2 池或落在保留窗（期望 ${assigned_port}）。查 $pdir/cordis.patch.yml / host.log" >&2
      kill "$(cat "$pdir/host.pid")" 2>/dev/null || true
      rm -f "$pdir/host.pid"
      exit 1
    fi
    if [ "$port" != "$assigned_port" ]; then
      echo "✗ Host 实际听口 ${port} ≠ 硬绑口 ${assigned_port}（fail-loud，不回写池外/错口）" >&2
      kill "$(cat "$pdir/host.pid")" 2>/dev/null || true
      rm -f "$pdir/host.pid"
      exit 1
    fi

    start_watch "$pdir" "$plugin"
    echo "✓ dev 环境已启动: omnimux-dev-$name"
    echo "  URL:   http://127.0.0.1:$port"
    echo "  port:  $port"
    echo "  link:  $plugin"
    echo "  watch: 已启用（改 client 源码 → 自动重建 → 浏览器 HMR）"
    echo "  数据:  ${RUNTIME_HOME}（生产 ~/.dsh 隔离；任务级子根）"
    echo "  profile: $pdir"
    ;;
  watch)
    plugin="${3:-}"
    if [ -z "$name" ] || [ -z "$plugin" ]; then usage; fi
    validate_task_name "$name"
    [ -f "$PLUGINS_ROOT/$plugin/package.json" ] || { echo "✗ 插件源码不存在: $PLUGINS_ROOT/$plugin" >&2; exit 1; }
    pdir="$(profile_dir "$name")"
    [ -d "$pdir" ] || { echo "✗ 环境不存在: omnimux-dev-${name}（先 start）" >&2; exit 1; }
    if [ ! -L "$pdir/node_modules/$plugin" ]; then
      rm -rf "${pdir:?}/node_modules/$plugin"
      ln -s "$PLUGINS_ROOT/$plugin" "$pdir/node_modules/$plugin"
      echo "✓ $plugin → link $PLUGINS_ROOT/$plugin"
    fi
    start_watch "$pdir" "$plugin"
    ;;
  restart-host)
    [ -z "$name" ] && usage
    validate_task_name "$name"
    pdir="$(profile_dir "$name")"
    [ -d "$pdir" ] || { echo "✗ 环境不存在: omnimux-dev-${name}（先 start）" >&2; exit 1; }

    # 1. 建立排他锁，防止同名任务并发重启竞争
    LOCK_FILE="$pdir/restart.lock"
    exec 200>"$LOCK_FILE"
    if ! flock -n 200 2>/dev/null; then
      # macOS flock 降级兼容：如果系统无 flock 命令，使用 mkdir 简单原子锁
      LOCK_DIR="$pdir/restart.lock.d"
      if ! mkdir "$LOCK_DIR" 2>/dev/null; then
        echo "✗ 当前任务正在被另一个进程重启中，操作已拒绝" >&2
        exit 1
      fi
      trap 'rm -rf "$LOCK_DIR"' EXIT
    fi

    echo "→ 开始原地重启 Host: omnimux-dev-$name"

    # 2. 严格 PID 校验与优雅停机
    if [ -f "$pdir/host.pid" ]; then
      old_pid="$(cat "$pdir/host.pid" 2>/dev/null || true)"
      if [ -n "$old_pid" ] && kill -0 "$old_pid" 2>/dev/null; then
        # 提取真实 cmdline 进行身份断言
        cmdline="$(ps -p "$old_pid" -o command= 2>/dev/null || true)"
        if [[ "$cmdline" =~ /Applications/OmniMux ]]; then
          echo "✗ 安全守卫拦截：目标 PID $old_pid 包含桌面应用路径，严禁杀死生产进程！" >&2
          exit 1
        fi
        if [[ ! "$cmdline" =~ "bin.js" ]] || [[ ! "$cmdline" =~ "omnimux-dev-$name" ]]; then
          echo "✗ PID 身份校验失败：PID ${old_pid} 不属于任务 omnimux-dev-${name}，跳过强杀以防误伤" >&2
        else
          echo "· 向旧 Host (PID: $old_pid) 发送 SIGTERM..."
          # 优先杀整个进程组
          kill -TERM -"$old_pid" 2>/dev/null || kill -TERM "$old_pid" 2>/dev/null || true
          
          # 等待优雅排水 (最多 5 秒)
          stopped=0
          for _ in $(seq 1 10); do
            if ! kill -0 "$old_pid" 2>/dev/null; then
              stopped=1
              break
            fi
            sleep 0.5
          done
          
          if [ "$stopped" = 0 ]; then
            echo "· 优雅停机超时，强制终止进程组..."
            kill -KILL -"$old_pid" 2>/dev/null || kill -KILL "$old_pid" 2>/dev/null || true
            sleep 0.5
          fi
        fi
      fi
      rm -f "$pdir/host.pid"
    fi

    # 3. 恢复配置并原地拉起
    assigned_port="$(read_assigned_port "$pdir")"
    if [ -z "$assigned_port" ] || [ "$assigned_port" = "?" ]; then
      assigned_port="$(alloc_port "$pdir")" || exit 1
      echo "$assigned_port" > "$pdir/port.txt"
    fi

    RUNTIME_HOME="$(resolve_runtime_home "$name")"

    # 日志保留并追加审计记录
    echo "--- [$(date '+%Y-%m-%d %H:%M:%S')] dev restart-host triggered ---" >> "$pdir/host.log"
    echo "$(date '+%Y-%m-%d %H:%M:%S') task=$name port=$assigned_port old_pid=${old_pid:-none}" >> "$pdir/restart-host.log"

    DSH_HOME="$RUNTIME_HOME" OMNIMUX_PLUGIN_PROFILE="omnimux-dev-$name" nohup "$NODE_BIN" "$DSH_SRC/apps/cli/lib/bin.js" \
      --profile "omnimux-dev-$name" --host 127.0.0.1 --port "$assigned_port" --no-open \
      >> "$pdir/host.log" 2>&1 &
    new_pid=$!
    echo "$new_pid" > "$pdir/host.pid"

    # 4. 监听端口探测
    port=""
    for _ in $(seq 1 20); do
      sleep 1
      port=$(grep -oE 'http://127\.0\.0\.1:[0-9]+' "$pdir/host.log" 2>/dev/null | tail -1 | grep -oE '[0-9]+$' || true)
      [ -n "$port" ] && break
    done

    if [ -z "$port" ]; then
      echo "✗ Host 原地重启后未在 20s 内成功监听，请检查日志: $pdir/host.log" >&2
      exit 1
    fi

    echo "✓ Host 已原地冷重启完成: omnimux-dev-$name"
    echo "  URL:     http://127.0.0.1:$port"
    echo "  PID:     $new_pid (原: ${old_pid:-none})"
    echo "  port:    $port (保持不变)"
    echo "  提示:    前端页面只需刷新 (F5/Cmd+R) 即可重新连接"
    ;;
  unwatch)
    [ -z "$name" ] && usage
    validate_task_name "$name"
    pdir="$(profile_dir "$name")"
    stop_watch "$pdir" || echo "· omnimux-dev-$name 无 watch"
    ;;
  stop)
    [ -z "$name" ] && usage
    validate_task_name "$name"
    pdir="$(profile_dir "$name")"
    stop_watch "$pdir" >/dev/null 2>&1 || true
    [ -f "$pdir/host.pid" ] && kill "$(cat "$pdir/host.pid")" 2>/dev/null && rm -f "$pdir/host.pid" \
      && echo "✓ omnimux-dev-$name Host 已停止" || echo "· omnimux-dev-$name Host 未在运行"
    ;;
  ls)
    found=0
    if [ -d "$DEV_HOME/tasks" ]; then
      for d in "$DEV_HOME"/tasks/*/profiles/omnimux-dev-*; do
        [ -d "$d" ] || continue
        found=1
        print_env_line "$d"
      done
    fi
    if [ -d "$DEV_HOME/profiles" ]; then
      for d in "$DEV_HOME"/profiles/omnimux-dev-*; do
        [ -d "$d" ] || continue
        # 跳过已迁移残留名
        case "$d" in
          *.migrated-*) continue ;;
        esac
        found=1
        print_env_line "$d" "  [legacy]"
      done
    fi
    if [ "$found" = 0 ]; then
      echo "（还没有 dev 环境）"
    fi
    ;;
  rm)
    [ -z "$name" ] && usage
    validate_task_name "$name"
    "$0" stop "$name" || true
    pdir="$(profile_dir "$name")"
    thome="$(task_home_for "$name")"
    assert_task_home_safe "$thome"
    if [ "$LEGACY_HOME" = "1" ]; then
      rm -rf "$pdir"
      echo "✓ omnimux-dev-$name 已删除（legacy profile）"
    else
      # 删整个任务子根（含数据）
      if [ -d "$thome" ]; then
        rm -rf "$thome"
        echo "✓ omnimux-dev-$name 已删除（任务子根 ${thome}）"
      else
        rm -rf "$pdir"
        echo "✓ omnimux-dev-$name 已删除"
      fi
      # 清遗留旧路径 / migrated
      old="$(legacy_profile_dir "$name")"
      rm -rf "$old" "${old}".migrated-* 2>/dev/null || true
    fi
    ;;
  *) usage ;;
esac
