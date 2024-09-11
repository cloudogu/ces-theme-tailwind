#!/bin/bash

function release_warning() {
  TYPE="$(
    cat .npmrc | grep "npm-releases" >/dev/null
    echo $?
  )"
  if [[ "$TYPE" == "0" ]]; then
    echo "Note: You are publishing a production release. You cannot skip any step."
    SKIP_LINT="false"
    SKIP_BUILD="false"
    SKIP_TESTS="false"
    SKIP_IMPORT_CHECKS="false"
    SKIP_CIRCULAR="false"
  fi
}

function lint_components() {
  yarn eslint "src/components/**"
}

function build() {
  yarn build
}

function execute_tests() {
  FILES_TO_TEST="$(find ./src/components ! \(  -name "*.spec.ts" -o -name "*.spec.tsx" -o -wholename "*/hooks/*" \) -name '*.tsx')"
  ERROR="false"
  echo "Check if there is a test file for all components..."
  for f in ${FILES_TO_TEST}; do
    CODE="$(
      find . -wholename "${f/tsx/spec.tsx}" | grep . >/dev/null
      echo $?
    )"
    if [[ "${CODE}" != "0" ]]; then
      echo "No Test file found for ${f}"
      ERROR="true"
    fi
  done

  if [[ "${ERROR}" != "false" ]]; then
    echo "ERROR: Some components do not have test files..."
    exit 1
  fi

  yarn test
}

function check_story_imports() {
  FOUND_WRONG_IMPORTS_1="$(
    grep -R 'from "../../components' src/stories >/dev/null
    echo $?
  )"
  FOUND_WRONG_IMPORTS_2="$(
    grep -R 'from "@components' src/stories >/dev/null
    echo $?
  )"
  FOUND_WRONG_IMPORTS_3="$(
   grep -R 'from "@src/components' src/stories >/dev/null
    echo $?
  )"
  if [ "${FOUND_WRONG_IMPORTS_1}" == "0" ] || [ "${FOUND_WRONG_IMPORTS_2}" == "0" ] || [ "${FOUND_WRONG_IMPORTS_3}" == "0" ] ; then
    echo "Check for imports"
    grep -R 'from "../../components' src/stories || true
    grep -R 'from "@components' src/stories || true
    grep -R 'from "@src/components' src/stories || true
    echo "=========================="
    printf "\n\nERROR: Stories should represent the public API. Please do not import from 'components', only import from index.ts\n"
    exit 1
  fi
}

function check_circular() {
  yarn circular
}
