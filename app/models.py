from app import db


class Review(db.EmbeddedDocument):
    wheelchairRating = db.IntField()
    visionRating = db.IntField()
    hearingRating = db.IntField()
    comment = db.StringField()


class YelpVenue(db.Document):
    yelp_id = db.StringField()
    reviews = db.ListField(db.EmbeddedDocumentField(Review))
