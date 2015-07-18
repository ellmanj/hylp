
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
    print "{}, {}, {}".format(request.path, request.method, request.data)
    term = request.json['term']
    location = request.json['location']
    print term
    print location
    response = search(term, location)
    for (index, business) in list(enumerate(response['businesses'])):
        id = business['id']
        biz = YelpVenue.objects(yelp_id=id).first()
        if biz:
            response['businesses'][index]['hylp_wheelchair'] = biz.wheelchair_rating()
            response['businesses'][index]['hylp_vision'] = biz.vision_rating()
            response['businesses'][index]['hylp_hearing'] = biz.hearing_rating()
        else:
            response['businesses'][index]['hylp_wheelchair'] = 0
            response['businesses'][index]['hylp_vision'] = 0
            response['businesses'][index]['hylp_hearing'] = 0
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
    biz = YelpVenue.objects(yelp_id=biz_id).first()
    # if no business already, create it
    if biz is None:
        biz = YelpVenue(yelp_id=biz_id,
                        reviews=[])

    content = request.json['disabilities']
    comment = request.json['note']
    rating = request.json['rating']

    review = Review(wheelchair=bool(content[0]),
                    vision=bool(content[1]),
                    hearing=bool(content[2]),
                    comment=comment,
                    rating=rating)
    biz.reviews.append(review)
    biz.save()
    return jsonify(dict(
        success=True
    ))