#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SVG="$ROOT_DIR/assets/favicon-export.svg"
OUT="$ROOT_DIR/assets/favicon.png"

if ! command -v inkscape >/dev/null 2>&1; then
  echo "Error: inkscape is required to export the PNG." >&2
  exit 1
fi

inkscape --export-type=png --export-width=1024 --export-height=1024 --export-text-to-path "$SVG" --export-filename "$OUT"

echo "Wrote $OUT"
