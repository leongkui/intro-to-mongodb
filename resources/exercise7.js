db.carts.find({"shopper": "shopper187"}, {"total": 1}).pretty();
db.carts.find({"shopper": "shopper187"}, {"total": 1}).count();
db.carts.find({"shopper": "shopper187"}, {"total": 1}).limit(1);
db.carts.find({"shopper": "shopper187"}, {"total": 1}).skip(2).limit(1);
db.carts.find({"shopper": "shopper187"}, {"total": 1}).sort({"total":-1}).limit(1);
db.carts.find({"shopper": "shopper187"}, {"total": 1}).sort({"total":1}).limit(1);
