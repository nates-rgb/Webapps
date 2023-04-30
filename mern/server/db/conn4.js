const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
console.log(Db);
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
console.log("LetsGo"); 
module.exports = {
  connectToServer: function (callback) {
    console.log("Layer3");	  
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      console.log("Layer4");
      if (db)
      {
        _db = db.db("horsepower");
        console.log("Successfully connected to MongoDB."); 
      }
      
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};



// const client = new MongoClient('mongodb+srv://todoAppUser:<password>@cluster0.6lvjr.mongodb.net/myDatabase?retryWrites=true&w=majority')

// async function start(){
//   await client.connect()
//   console.log("Connected")
//   module.exports = client.db()
//   const app = require('./app')
//   app.listen(3000)
// }

//   start()
