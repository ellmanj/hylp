
from app import app
from flask import render_template, jsonify
from .models import *


@app.route('/hello/', methods=['GET'])
def hello():
    return render_template('hello.html')

@app.route('/')
def index():
    return 'Index Page'

@app.route('/ping', methods=['GET', 'POST'])
def ping():
    return jsonify(
        status='OK'
    )