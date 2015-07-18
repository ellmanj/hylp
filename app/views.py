
from app import app
from flask import render_template, jsonify
from .models import *


@app.route('/hello/', methods=['GET'])
def hello():
    return render_template('hello.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ping', methods=['GET', 'POST'])
def ping():
    return jsonify(
        status='OK'
    )

@app.route('/venue/<venue_id>', methods=['GET'])
def get_venue(venue_id):
    venue = YelpVenue.objects(yelp_id=venue_id).first()
    return jsonify(
        venue=venue)
