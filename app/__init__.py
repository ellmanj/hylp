#!venv/bin/python

import flask
from flask_admin.contrib.mongoengine import ModelView

app = flask.Flask(__name__)
app.debug = True

# database
from flask_mongoengine import MongoEngine
db = MongoEngine(app)

from models import *
import views

# admin
from flask_admin import Admin
admin = Admin(app, name='Hylp', template_mode='bootstrap3')
admin.add_view(ModelView(YelpVenue))
