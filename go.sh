#!/bin/sh

set -e

echo "Configure git to use https instead of ssh for github URLs"
git config --global url."https://github".insteadOf git://github

echo "Uninstalling old ruby1.8 installation"
sudo apt-get update
sudo apt-get remove ruby1.8

echo "Installing ruby 1.9.1 for the sass gem to work"
sudo apt-get update
sudo apt-get install ruby1.9.1 ruby1.9.1-dev \
  rubygems1.9.1 irb1.9.1 ri1.9.1 rdoc1.9.1 \
  build-essential libopenssl-ruby1.9.1 libssl-dev zlib1g-dev
sudo update-alternatives --install /usr/bin/ruby ruby /usr/bin/ruby1.9.1 400 \
         --slave   /usr/share/man/man1/ruby.1.gz ruby.1.gz \
                        /usr/share/man/man1/ruby1.9.1.1.gz \
        --slave   /usr/bin/ri ri /usr/bin/ri1.9.1 \
        --slave   /usr/bin/irb irb /usr/bin/irb1.9.1 \
        --slave   /usr/bin/rdoc rdoc /usr/bin/rdoc1.9.1

echo "Installing bower"
sudo npm install bower -g

echo "Installing sass (this will take while)"
sudo gem install sass

echo "Running npm install'"
npm install

echo "Running bower install'"
bower install

echo "Running grunt build'"
grunt

echo "You're all set."