const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/hack';

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

const db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB database.');
});

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB.');
});

const documents = testtop.find();

// Function to get a list of collections
async function getCollections() {
    try {
      // Get the default Mongoose connection
      const db = mongoose.connection;
  
      // Wait for the connection to be established
      await db.once('open', () => {
        console.log('Connected to MongoDB server.');
      });
  
      // Fetch the list of collections from the MongoDB server
      var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/local');

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

    connection.db.collection("YourCollectionName", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
       })
});

});
    
  
      // Iterate over the collections and print their names
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the function to get the list of collections
  getCollections();

process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed due to application termination.');
    process.exit(0);
  });
});
