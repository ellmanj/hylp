from app import db


class Review(db.EmbeddedDocument):
    wheelchair = False
    vision = False
    hearing = False
    comment = db.StringField()
    rating = db.IntField()


class YelpVenue(db.Document):
    yelp_id = db.StringField()
    reviews = db.ListField(db.EmbeddedDocumentField(Review))
