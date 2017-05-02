#!/bin/bash

APP_ID=com.danielhopp.agilityscales
APP_NAME=AgilityScales
PLATFORMS="ios android"

CURRENT_PATH="$(pwd)"

pushd `dirname $0` > /dev/null
SCRIPT_PATH=`pwd`
popd > /dev/null

PROJECT_PATH="${SCRIPT_PATH}/.."

cd "${PROJECT_PATH}"
npm i cordova -g
cordova telemetry off
rm -rf "${PROJECT_PATH}/apps"
cordova create apps $APP_ID $APP_NAME
cd "${PROJECT_PATH}/apps"

# See: https://dpogue.ca/articles/cordova-xcode8.html
cp "${PROJECT_PATH}/etc/build.json" "${PROJECT_PATH}/apps/"

# See: http://stackoverflow.com/a/43364253
sed -i '' "s/'avds'/'avd'/g" "${PROJECT_PATH}/apps/platforms/android/cordova/lib/emulator.js"

cordova platform add $PLATFORMS
cordova prepare

cd "${CURRENT_PATH}"
