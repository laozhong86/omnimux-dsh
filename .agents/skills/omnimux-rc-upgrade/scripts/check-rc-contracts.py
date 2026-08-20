#!/usr/bin/env python3
"""Mechanical OmniMux RC-upgrade gates. Fail closed. Visual screens stay in the skill."""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
DSH_SRC = Path(os.environ.get("DSH_SRC", "/Users/x/Desktop/Project/Github/deepseek-harness"))
PROFILE = Path(os.environ.get("OMNIMUX_PROFILE", Path.home() / ".dsh/profiles/omnimux"))
DESKTOP = Path(os.environ.get("OMNIMUX_DESKTOP", "/Users/x/Desktop/Project/omnimux-desktop"))
APP_HOST = Path("/Applications/OmniMux.app/Contents/Resources/host/node_modules/@deepseek-ai")
HUB = ROOT / "plugins/dsh-omnimux"
DEFAULTS = HUB / "src/brand/defaults.js"
OVERLAY_TEST = HUB / "src/brand/overlay.test.js"
HOST_TOOLS = DSH_SRC / "packages/core/tools/package.json"

HOST_PACKAGES = (
    "@deepseek-ai/dsh-tools",
    "@deepseek-ai/schemastery",
    "@deepseek-ai/cordis",
)


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def js_string(src: str, name: str) -> str | None:
    match = re.search(rf"export const {name} = '([^']+)'", src)
    return match.group(1) if match else None


def host_viewbox(rel: str, pattern: str) -> str | None:
    path = DSH_SRC / rel
    if not path.is_file():
        return None
    match = re.search(pattern, read(path))
    return match.group(1) if match else None


def pkg_version(path: Path) -> str | None:
    if not path.is_file():
        return None
    return json.loads(read(path)).get("version")


def fail(msg: str) -> None:
    print(f"FAIL {msg}", file=sys.stderr)
    raise SystemExit(1)


def main() -> None:
    errors: list[str] = []

    tools_ver = pkg_version(HOST_TOOLS)
    app_tools = pkg_version(APP_HOST / "dsh-tools/package.json")
    print(f"host DSH_SRC dsh-tools: {tools_ver}")
    print(f"host OmniMux.app dsh-tools: {app_tools}")
    print(f"pin file: {ROOT / 'docs/harness-pin.md'}")

    if not DEFAULTS.is_file():
        fail(f"missing {DEFAULTS}")
    defaults = read(DEFAULTS)
    fish = js_string(defaults, "FISH_VIEWBOX")
    word = js_string(defaults, "WORDMARK_VIEWBOX")
    name = js_string(defaults, "NAME_WORDMARK_VIEWBOX")
    host_fish = host_viewbox(
        "packages/client/ui-primitives/src/FishLogo.tsx",
        r'viewBox="([^"]+)"',
    )
    host_name = host_viewbox(
        "packages/client/ui-primitives/src/BrandWordmark.tsx",
        r"includeMark \? '[^']+' : '([^']+)'",
    )
    host_word = host_viewbox(
        "packages/client/ui-primitives/src/BrandWordmark.tsx",
        r"includeMark \? '([^']+)' :",
    )
    print(f"overlay FISH_VIEWBOX={fish} host={host_fish}")
    print(f"overlay WORDMARK_VIEWBOX={word} host={host_word}")
    print(f"overlay NAME_WORDMARK_VIEWBOX={name} host={host_name}")
    if host_fish and fish != host_fish:
        errors.append(f"FISH_VIEWBOX {fish} != host {host_fish}")
    if host_word and word != host_word:
        errors.append(f"WORDMARK_VIEWBOX {word} != host {host_word}")
    if host_name and name != host_name:
        errors.append(f"NAME_WORDMARK_VIEWBOX {name} != host {host_name}")

    test_src = read(OVERLAY_TEST) if OVERLAY_TEST.is_file() else ""
    if "data-composer-seat" not in test_src:
        errors.append("overlay.test.js missing composer-seat fixture")
    if "NAME_WORDMARK_VIEWBOX" not in test_src:
        errors.append("overlay.test.js missing NAME_WORDMARK_VIEWBOX")

    spawn = DESKTOP / "src/host-supervisor.ts"
    if spawn.is_file() and "--no-open" not in read(spawn):
        errors.append(f"{spawn} spawn args missing --no-open")

    copies: list[str] = []
    tools_dir = PROFILE / "node_modules/@deepseek-ai/dsh-tools"
    if tools_dir.exists() and not tools_dir.is_symlink():
        copies.append(str(tools_dir))
    print(f"profile dsh-tools copies: {copies or ['none']}")
    if copies:
        errors.append(f"profile materialized dsh-tools: {copies}")

    hard: list[str] = []
    nm = PROFILE / "node_modules"
    if nm.is_dir():
        for pkg_json in nm.glob("*/package.json"):
            try:
                data = json.loads(read(pkg_json))
            except json.JSONDecodeError:
                continue
            deps = data.get("dependencies") or {}
            name_ = data.get("name") or pkg_json.parent.name
            for host_pkg in HOST_PACKAGES:
                if host_pkg in deps:
                    hard.append(f"{name_}: dependencies.{host_pkg}={deps[host_pkg]}")
        for pkg_json in nm.glob("@*/*/package.json"):
            try:
                data = json.loads(read(pkg_json))
            except json.JSONDecodeError:
                continue
            if str(pkg_json).find("/node_modules/@deepseek-ai/") != -1 and pkg_json.parent.parent.name == "@deepseek-ai":
                continue
            deps = data.get("dependencies") or {}
            name_ = data.get("name") or str(pkg_json.parent)
            for host_pkg in HOST_PACKAGES:
                if host_pkg in deps:
                    hard.append(f"{name_}: dependencies.{host_pkg}={deps[host_pkg]}")
    print(f"hard Host deps: {hard or ['none']}")
    errors.extend(hard)

    if errors:
        for item in errors:
            print(f"FAIL {item}", file=sys.stderr)
        raise SystemExit(1)
    print("PASS mechanical RC contracts")


if __name__ == "__main__":
    main()
