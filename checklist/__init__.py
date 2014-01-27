import os, json
from flask import Flask, request, Response, render_template, send_from_directory, url_for

app = Flask(__name__)

app.config.from_object('checklist.settings')

app.url_map.strict_slashes = False

import checklist.core
import checklist.models
import checklist.controllers