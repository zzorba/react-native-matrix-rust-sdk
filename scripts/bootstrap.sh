#!/bin/bash
set -e
ROOT=$(dirname "$0")/..
ROOT=$(cd "$ROOT" && pwd)

REPO="matrix-org/matrix-rust-sdk"
BRANCH_NAME="main"
CRATE_DIR=bindings/matrix-sdk-ffi
GENERATE_CPP="true"

while (( "$#" )); do
  case "$1" in
    --repo)
      REPO="$2"
      shift 2
      ;;
    --branch)
      BRANCH_NAME="$2"
      shift 2
      ;;
    --crate)
      CRATE_DIR="$2"
      shift 2
      ;;
    --no-cpp)
      GENERATE_CPP="false"
      shift
      ;;
    -f|--force)
      rm -Rf ./rust_modules 2>/dev/null
      shift
      ;;
    -vv|--verbose)
      set -x
      shift
      ;;
    *)
      echo "Error: Invalid argument"
      exit 1
  esac
done

# Calculate from the passed variables.
REPO_URL="https://github.com/${REPO}.git"
REPO_NAME=$(basename "$REPO_URL" .git)
REPO_DIR="$ROOT/rust_modules/${REPO_NAME}"

mkdir -p rust_modules

# Clone the repository.
if [ ! -d "$REPO_DIR" ]; then
    git clone $REPO_URL "$REPO_DIR" --branch "$BRANCH_NAME" --single-branch
fi

find_lib_file() {
    local crate_name=$(basename "$CRATE_DIR")
    local CRATE_LIB="lib${crate_name//-/_}"

    local lib_file=$(find ${REPO_DIR}/target \( -name "${CRATE_LIB}*.dylib" -o -name "${CRATE_LIB}*.a" -o -name "${CRATE_LIB}*.so" \) -print -quit)
    if [[ -n $lib_file ]]; then
        echo $lib_file
    else
        echo ""
    fi
}

# We need a shared object file for uniffi to get the Rust API from.
# We'll try and find it, but if it doesn't exist, then we have to build it
# ourselves.
LIB_FILE=$(find_lib_file)
if [ -z "$LIB_FILE" ]; then
    pushd "${REPO_DIR}" > /dev/null || exit 1
    # For now, we're not cross-compiling.
    cargo build --manifest-path ./${CRATE_DIR}/Cargo.toml
    popd >/dev/null || exit 1

    LIB_FILE=$(find_lib_file)
fi

# Now generate the typescript and cpp.
pushd "${REPO_DIR}" > /dev/null || exit 1
UNIFFI_BINDGEN_DIR=$ROOT/node_modules/uniffi-bindgen-react-native
cargo run --manifest-path "$UNIFFI_BINDGEN_DIR/Cargo.toml" --bin uniffi-bindgen-react-native -- \
    bindings \
    --library \
    --ts-dir "$ROOT/src/generated" \
    --cpp-dir "$ROOT/cpp/generated" \
    "$LIB_FILE"
popd >/dev/null || exit 1

if [ "$GENERATE_CPP" == "false" ] ; then
  rm -Rf "$ROOT/cpp/generated"
fi
