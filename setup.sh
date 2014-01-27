#!usr/bin/bash

# Set up virtual environment
virtualenv venv
source venv/bin/activate

# Install python packages
pip install -r requirements.txt

# install node modules for testing
npm install karma karma-ng-scenario