db.carts.find({"_id":ObjectId("5b9a6c3da53b72a26404e814")}).explain();
db.carts.find({"shopper": "shopper187"}).explain();
db.carts.ensureIndex({"shopper":1});
db.carts.find({"shopper": "shopper187"}).explain();
db.carts.ensureIndex({"items.name":1});
db.carts.find({"items.name":"beautiful sapphire"},{"shopper":1}).limit(2).pretty();
db.carts.find({"items.name":"beautiful sapphire"},{"shopper":1}).explain();
