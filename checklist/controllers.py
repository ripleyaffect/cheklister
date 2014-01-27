import os

from flask import Flask, request, Response
from flask import render_template, url_for, redirect, send_from_directory
from flask import send_file, make_response, abort

from checklist import app

# Routing for API endpoints (generated from the models designated as API_MODELS)
# from checklist.core import api_manager
# from checklist.models import *

# for model_name in app.config['API_MODELS']:
# 	model_class = app.config['API_MODELS'][model_name]
# 	api_manager.create_api(model_class, models=['GET', 'POST'])

# session = api_manager.session

@app.route('/')
@app.route('/index')
def basic_pages(**kwargs):
	return make_response(open('checklist/templates/index.html').read())