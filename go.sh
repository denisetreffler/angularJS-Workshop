#!/bin/sh

set -e

echo "Configure git to use https instead of ssh for github URLs"
git config --global url."https://github".insteadOf git://github

echo "Installing bower globally"
sudo npm install bower -g

echo "Installing sass)"
sudo gem install sass

echo "Running npm install'"
npm install

echo "Running bower install'"
export http_proxy = http://proxy.corproot.net:8079/
bower install

echo "Running grunt build'"
grunt

echo "You're all set."