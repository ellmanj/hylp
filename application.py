#!venv/bin/python

import sys
import os
import app

application = app.app

application.config['MONGODB_DB'] = 'hylp'
application.config['MONGODB_USERNAME'] = 'hylp'
application.config['MONGODB_PASSWORD'] = 'hylp'
# application.config['MONGODB_HOST'] = 'localhost'
application.config['MONGODB_HOST'] ='ds047752.mongolab.com'
# application.config['MONGODB_PORT'] = 27017
application.config['MONGODB_PORT'] = 47752


application.run(host='0.0.0.0', debug=True)
