#!venv/bin/python

import flask

app = flask.Flask(__name__, static_url_path='')
app.debug = True

# database
from flask_mongoengine import MongoEngine
db = MongoEngine(app)

from models import *
import views

# admin
from flask_admin import Admin
from flask_admin.contrib.mongoengine import ModelView
admin = Admin(app, name='Hylp', template_mode='bootstrap3')
admin.add_view(ModelView(YelpVenue))
