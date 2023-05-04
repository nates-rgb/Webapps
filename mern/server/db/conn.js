const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
console.log("LetsGo"); 
module.exports = {
  connectToServer: function (callback) {
    console.log("Layer3");	  
    
      // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    // Send a ping to confirm a successful connection
    _db = client.db("horsepower")
    if(_db){
      console.log(_db);
      
    
    }
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
