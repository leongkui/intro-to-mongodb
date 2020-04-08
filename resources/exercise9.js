var mapFunction1 = function() {
  for (var i = 0; i < this.items.length; i++) {
    emit(this.items[i].name, {count: 1, quantity: this.items[i].quantity});
  }
};

var reduceFunction1 = function(thisId, emittedItems) {
  returnVal = {quantity:0, count:0}
  for (var i = 0; i < emittedItems.length; i++) {
    returnVal.quantity += emittedItems[i].quantity
    returnVal.count += emittedItems[i].count
  }
  return returnVal;
};

var finaliseFunction1 = function (key, reducedVal) {
  reducedVal.avg = reducedVal.quantity/reducedVal.count;
  return reducedVal;
};

db.carts.mapReduce(
  mapFunction1,
  reduceFunction1,
  {
    finalize: finaliseFunction1,
    out: "map_reduce_example"
  }
);
