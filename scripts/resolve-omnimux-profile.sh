#!/usr/bin/env bash
# Shared target-home → profile resolver for sync-to-app.sh and sync-stable.sh.
# L2 task roots use the exact dev-env.sh convention:
# ~/.dsh-dev/tasks/<task>/profiles/omnimux-dev-<task>.

resolve_omnimux_profile_dir() {
  local home_dir="$1"
  local tasks_prefix="$HOME/.dsh-dev/tasks"

  case "$home_dir" in
    "$tasks_prefix"/*)
      local task_name="${home_dir#"$tasks_prefix/"}"
      local task_profile="$home_dir/profiles/omnimux-dev-$task_name"
      local conventional_profile="$home_dir/profiles/omnimux"
      if [ -z "$task_name" ] || [[ "$task_name" == */* ]]; then
        echo "❌ sync target [$home_dir] 必须是 ${tasks_prefix}/<task> 任务根目录。" >&2
        return 1
      fi
      if [ -e "$conventional_profile" ]; then
        if [ -e "$task_profile" ]; then
          echo "❌ L2 目标 [$home_dir] 同时存在 $conventional_profile 与 $task_profile，拒绝使用临时 alias。" >&2
        else
          echo "❌ L2 目标 [$home_dir] 只能使用 $task_profile，拒绝 profiles/omnimux alias。" >&2
        fi
        return 1
      fi
      printf '%s\n' "$task_profile"
      ;;
    *)
      printf '%s\n' "$home_dir/profiles/omnimux"
      ;;
  esac
}
