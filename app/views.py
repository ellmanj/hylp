
from app import app
from app.yelp import search, get_business
from flask import render_template, jsonify, request
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

@app.route('/yelp', methods=['POST'])
def query_yelp():
    term = request.json['term']
    location = request.json['location']
    response = search(term, location)
    return jsonify(
        yelp_response=response
    )

@app.route('/yelp/<biz_id>', methods=['POST'])
def query_yelp_business(biz_id):
    response = get_business(biz_id)
    return jsonify(
        yelp_response=response
    )

@app.route('/yelp/<biz_id>/review', methods=['POST'])
def submit_review(biz_id):
    content = request.json['disabilities']
    comment = request.json['note']
    rating = request.json['rating']
