db.carts.find({"total": {"$gte":0} }).count();
db.carts.find().count();
db.carts.find({"total":{"$type":2}});
db.carts.update({"_id" : ObjectId("5b9a6c4ba53b72a264054b03")},{"$set" : {"total": 162632000}});
db.carts.update({"_id" : ObjectId("5b9a6c52a53b72a264057e45")},{"$set" : {"total": 45213444000}});
