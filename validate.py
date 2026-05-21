#!/usr/bin/env python3

from __future__ import annotations

from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parent

REQUIRED_FILES = [
    "README.md",
    "CHANGELOG.md",
    "DEPLOYMENT_GUIDE.md",
    "GO_TO_MARKET.md",
    "BRAND_GUIDELINES.md",
    "SECURITY.md",
    "AGENTS.md",
    "src/App.tsx",
    "src/App.css",
    "src/index.css",
    "package.json",
]

REQUIRED_README_PHRASES = [
    "S2M",
    "ship to market",
    "validate.py",
]

REQUIRED_GTM_PHRASES = [
    "Market signals",
    "Project value analysis",
    "Launch channels",
    "Success metrics",
]

REQUIRED_AGENTS_PHRASES = [
    "## S2M Protocol",
    "If the issue title, PR title, or explicit user request includes `S2M`",
    "Do not split S2M work into staged follow-ups",
]

REQUIRED_APP_PHRASES = [
    "S2M = ship to market",
    "Putting S2M in the title should already imply the whole shebang.",
    "The four Leaf2Tree stages",
    "Offers",
]


def require_file(relative_path: str, errors: list[str]) -> None:
    path = ROOT / relative_path
    if not path.exists():
        errors.append(f"Missing required file: {relative_path}")


def require_phrases(relative_path: str, phrases: list[str], errors: list[str]) -> None:
    path = ROOT / relative_path
    if not path.exists():
        errors.append(f"Cannot inspect missing file: {relative_path}")
        return

    content = path.read_text(encoding="utf-8")
    for phrase in phrases:
        if phrase not in content:
            errors.append(f"Missing phrase in {relative_path}: {phrase}")


def main() -> int:
    errors: list[str] = []

    for relative_path in REQUIRED_FILES:
        require_file(relative_path, errors)

    require_phrases("README.md", REQUIRED_README_PHRASES, errors)
    require_phrases("GO_TO_MARKET.md", REQUIRED_GTM_PHRASES, errors)
    require_phrases("AGENTS.md", REQUIRED_AGENTS_PHRASES, errors)
    require_phrases("src/App.tsx", REQUIRED_APP_PHRASES, errors)

    if errors:
        print("Leaf2Tree validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Leaf2Tree validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
