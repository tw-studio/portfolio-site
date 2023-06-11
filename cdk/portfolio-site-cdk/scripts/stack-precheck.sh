#!/bin/bash
#
# stack-precheck.sh
# run with 'pnpm cdk:precheck'

set -e # errexit

# |1| Prepare formatting variables
# colors
blue="\033[0;34m"
color_reset="\033[0m"
cyan="\033[0;36m"
red="\033[0;31m"
# content
arrow="\xE2\x86\x92"
error="error"
info="info"

# |2| Confirm .env directory
if [[ ! -d .env ]]; then
  echo -e "$red$error$color_reset .env directory not found. Run$cyan pnpm cdk:precheck$color_reset from inside cdk/portfolio-site-cdk/"
  exit 1
fi

# |3| Rename secrets file if not already renamed
if [[ -f .env/.secrets.js ]]; then
  : # echo "Found cdk/portfolio-site-cdk/.env/.secrets.js"
elif [[ -f .env/RENAME_TO.secrets.js ]]; then
  echo "Copying RENAME_TO.secrets.js to .secrets.js in cdk/portfolio-site-cdk/.env/..."
  cp .env/RENAME_TO.secrets.js .env/.secrets.js
else
  echo -e "$red$error$color_reset No secrets files found in cdk/portfolio-site-cdk/.env/"
  exit 1
fi
