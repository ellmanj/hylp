#!venv/bin/python

import app

application = app.app

application.secret_key = 'super secret key'
application.config['SESSION_TYPE'] = 'mongodb'
application.config['MONGODB_DB'] = 'hylp'
application.config['MONGODB_USERNAME'] = 'hylp'
application.config['MONGODB_PASSWORD'] = 'hylp'
application.config['MONGODB_HOST'] = 'localhost'
application.config['MONGODB_PORT'] = 27017
# application.config['MONGODB_HOST'] ='ds047752.mongolab.com'
# application.config['MONGODB_PORT'] = 47752

if __name__ == '__main__':
    application.run()
