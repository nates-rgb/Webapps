const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://root:H0rSR3P0weR@cluster0.gj4xmja.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

    client.connect();
    const db = client.db('horsepower');
    const collection = db.collection('cars');

    // Find the first document in the collection
    const first = collection.findOne();
    callback(first);
    console.log(first);
