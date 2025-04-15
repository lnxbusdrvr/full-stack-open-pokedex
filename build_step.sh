#!/bin/bash

set -e # Stops script if failure

echo "build"
npm install
npm run eslint
npm run test
npm run start &
SERVER_PID=$! 
npm run test:e2e
kill $SERVER_PID
npm run build
