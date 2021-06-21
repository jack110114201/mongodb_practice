import pprint
import pymongo
from pymongo import MongoClient
client = MongoClient()
db = client['tfb102']
for d in db.iiiCollection.find():
    pprint.pprint(d)