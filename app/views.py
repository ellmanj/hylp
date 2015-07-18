
from app import app
from .models import *

# @app.before_request
# def before_request():
#     req_id = str(uuid4())
#     request.req_id = req_id
#
#     log.info('request : %s %s %s', request.path, request.method, request.data)
#
#     g.current_date = dateutils.current_datetime()
#     g.current_day = dateutils.current_day()
#     log.info('default current_date : %s', g.current_date)
#
#     g.is_testing = os.environ.get('CLIQ_TESTING', False) == 'True'
#     log.info('current_day=%d', g.current_day)


# @app.after_request
# def per_request_callbacks(response):
#
#     # log the response
#     try:
#         json_dict = json.loads(response.data)
#         log.info('response : %s', json.dumps(json_dict))
#     except Exception, e:
#         pass
#
#     response.headers['Cliq-Request-Id'] = request.req_id
#     return response


@app.route('/ping', methods=['GET', 'POST'])
def ping():
    return {'status': 'OK'}