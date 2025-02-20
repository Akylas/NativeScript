#!/bin/bash

function throwErrors()
{
  echo "Set exit on simple errors"
    set -e
}

function ignoreErrors()
{
  echo "ignore errors"
    set +e
}

throwErrors

echo "Use dumb gradle terminal"
export TERM=dumb

echo "Clean dist"
rm -rf dist

export SKIP_PACK=true

# we ignore android widgets lib build errors for scenarios like:
# macOS dev without android dev env
ignoreErrors
./build.android.sh
throwErrors


# only build ios widgets framework on macOS
if [[ "$OSTYPE" =~ "darwin" ]];
then
  ./build.ios.sh
fi

echo "Copy NPM artifacts"
cp .npmignore README.md package.json dist/package
cp ../../LICENSE dist/package


if [ "$1" ]
then
  echo "Suffix package.json's version with tag: $1"
  sed -i.bak 's/\(\"version\"\:[[:space:]]*\"[^\"]*\)\"/\1-'$1'"/g' ./dist/package/package.json
fi

echo "NPM pack"
cd dist/package
PACKAGE="$(npm pack)"
cd ../..
mv dist/package/$PACKAGE dist/$PACKAGE
echo "Output: dist/$PACKAGE"

