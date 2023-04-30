var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:H0rSR3P0weR@cluster0.gj4xmja.mongodb.net";

console.log("testing");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("here I am");
  var dbo = db.db("horsepower");
  console.log("still here");
  var query = { address: "Park Lane 38" };
  dbo.collection("cars").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
