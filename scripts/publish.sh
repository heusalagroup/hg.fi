#!/bin/bash
cd "$(dirname "$0")/.."
set -x

(
  cd ./frontend
  npm run build
)

rm -rf ./docs/
rsync -a ./frontend/build/ ./docs/
echo -n hg.fi > ./docs/CNAME

git add ./docs/
