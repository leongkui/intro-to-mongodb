db.carts.aggregate([
  {"$unwind": "$items"},
  {"$match": {"items.name":"some junk"}},
  {"$group": {"_id": "$shopper", "bought": {"$sum":"$items.quantity"}} },
  {"$sort": {"bought":-1}},
  {"$limit": 10}
]);
