const express = require("express");
 
// itemRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with item /item.
const itemRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../connect/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the cars.
itemRoutes.route("/item").get(async function (req, res) {
 let db_connect = dbo.getDb();
 console.log(db_connect);
 var result = await db_connect
   .collection("cars")
   .find({}).toArray();
 //  .toArray(function (err, result) {
 //    
 //    if (err) throw err;
     res.json(result);
 //  });
  
  console.log("after db_connect")
});
 
// This section will help you get a single item by id
itemRoutes.route("/item/:id").get(function (req, res) {
 
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 db_connect
   .collection("cars")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new item.
itemRoutes.route("/item/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("cars").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a item by id.
itemRoutes.route("/update/:id").post(function (req, response) {
  console.log("edit requested");
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("cars")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a item
itemRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 db_connect.collection("cars").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = itemRoutes;
