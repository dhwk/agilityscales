#!/bin/bash

#PLATFORMS=ios android
PLATFORMS=ios


CURRENT_PATH="$(pwd)"

pushd `dirname $0` > /dev/null
SCRIPT_PATH=`pwd`
popd > /dev/null

PROJECT_PATH="${SCRIPT_PATH}/../"

rm -rf "${PROJECT_PATH}/apps/www"
cp -r "${PROJECT_PATH}/build" "${PROJECT_PATH}/apps/www"
sed -i '' 's/\/static/static/g' "${PROJECT_PATH}/apps/www/index.html"

cd "${PROJECT_PATH}/apps"
cordova build ${PLATFORMS}
#cordova run ${PLATFORMS}

cd "${CURRENT_PATH}"
