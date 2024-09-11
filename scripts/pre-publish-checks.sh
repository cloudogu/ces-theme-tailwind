#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

# shellcheck source=./functions.sh
source "./scripts/functions.sh" || source "./functions.sh"

release_warning

if [ "${SKIP_LINT:-false}" != "true" ]; then
  lint_components
fi

if [ "${SKIP_BUILD:-false}" != "true" ]; then
  build
fi

if [ "${SKIP_TESTS:-false}" != "true" ]; then
  execute_tests
fi

if [ "${SKIP_IMPORT_CHECKS:-false}" != "true" ]; then
  check_story_imports
fi

#if [ "${SKIP_CIRCULAR:-false}" != "true" ]; then
#  check_circular
#fi
