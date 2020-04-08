validator = {
      $jsonSchema: {
         bsonType: "object",
         required: [ "shopper" ],
         properties: {
            paymentMethod: {
               enum: [ "AMEX", "Master", "Visa", "SPCoin"],
               description: "can only be one of the enum values and is required"
            },
            total: {
               bsonType: [ "double" ],
               minimum: 0,
               description: "must be a double and is required"
            }
         }
      }
    };

db.runCommand({
  "collMod": "carts",
  "validator": validator,
  "validationLevel": "strict"
});

db.carts.update({"_id" : ObjectId("5b9a6c4ba53b72a264054b03")},{"$set" : {"total": "162632000"}});
