#!/bin/bash

echo "Install packages"
npm install

echo "run lint"
npm run eslint

echo "run tests"
npm run test

echo "run e2e-tests"
npm start-prod
npm run test:e2e

echo "build"
npm run build
