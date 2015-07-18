#!venv/bin/python

import app

application = app.app

application.secret_key = 'super secret key'
application.config['SESSION_TYPE'] = 'mongodb'

application.config['MONGODB_SETTINGS'] = {
    'db': 'hylp',
    'username':'hylp',
    'password':'hylp',
    'host': 'localhost',
    'port': 27017,
    # 'host': 'ds047752.mongolab.com',
    # 'port': 47752,
}


if __name__ == '__main__':
    application.run()
