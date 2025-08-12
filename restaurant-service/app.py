
from flask import Flask, jsonify
from flask_mongoengine import MongoEngine
from flask_restful import Api, Resource

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'restaurants',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine(app)
api = Api(app)

class Restaurant(db.Document):
    name = db.StringField(required=True)
    cuisine = db.StringField()
    location = db.PointField()
    menu = db.ListField(db.DictField())

class RestaurantResource(Resource):
    def get(self, restaurant_id=None):
        if restaurant_id:
            restaurant = Restaurant.objects.get(id=restaurant_id)
            return jsonify(restaurant)
        else:
            restaurants = Restaurant.objects.all()
            return jsonify(restaurants)

api.add_resource(RestaurantResource, '/restaurants', '/restaurants/<string:restaurant_id>')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
