
from app import db

#
# class Review(db.EmbeddedDocumentField):
#     rating = db.IntField()
#     comment = db.StringField()
#

class YelpVenue(db.Document):
    yelp_id = db.StringField()
    # reviews = db.ListField(db.EmbeddedDocumentField('Review'))