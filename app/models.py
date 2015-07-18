from app import db


class Review(db.EmbeddedDocument):
    wheelchair = db.BooleanField()
    vision = db.BooleanField()
    hearing = db.BooleanField()
    comment = db.StringField()
    rating = db.IntField()


class YelpVenue(db.Document):
    yelp_id = db.StringField()
    reviews = db.ListField(db.EmbeddedDocumentField(Review))

    def wheelchair_rating(self):
        ratings = [review.rating for review in self.reviews if review.wheelchair]
        rating = sum(ratings, 0.0)/len(ratings) if ratings else 0
        return rating

    def vision_rating(self):
        ratings = [review.rating for review in self.reviews if review.vision]
        rating = sum(ratings, 0.0)/len(ratings) if ratings else 0
        return rating

    def hearing_rating(self):
        ratings = [review.rating for review in self.reviews if review.hearing]
        rating = sum(ratings, 0.0)/len(ratings) if ratings else 0
        return rating