#!/usr/bin/env bash
# Regenerate the public ATS resume PDF from cv/Junaidh_CV_Dublin_ATS.html
# Source of truth for content: Obsidian CV Master.md (sync HTML before running).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HTML="$ROOT/cv/Junaidh_CV_Dublin_ATS.html"
OUT="$ROOT/public/Junaidh_CV_Dublin_ATS_v3.pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -f "$HTML" ]]; then
  echo "Missing $HTML" >&2
  exit 1
fi
if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at $CHROME" >&2
  exit 1
fi

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  --print-to-pdf-no-header \
  "file://$HTML"

cp "$OUT" "$ROOT/Junaidh_CV_Dublin_ATS_v3.pdf"
echo "Wrote $OUT"
