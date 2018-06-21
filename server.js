const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(parser.urlencoded({extended: true}));
server.use(express.static('client/build'))

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect("mongodb://localhost:27017", function(err, client) {
  if (err) {
    console.log(err);
    return;
  }

  db = client.db('bucket_list');
  console.log('Connected to database!');

  server.post('/api/bucket-list', function(req, res, next) {
  const bucketList = db.collection('countries');
  const newCountry = req.body;
  bucketList.save(newCountry, function(err, result) {
    if (err) next(err);
    res.status(201);
    res.json(result.ops[0])
    console.log('yaaassss!!! saved to database!!');
  });
});

  server.get('/api/bucket-list', function(req, res, next) {
    const bucketList = db.collection('countries');
    bucketList.find().toArray(function(err, allCountries) {
      if (err) next(err);
      res.json(allCountries);
    })
  })

  server.delete("/api/bucket-list", function(req, res, next) {
  const countriesCollection = db.collection("countries");
  countriesCollection.remove({}, function(err, result) {
    if (err) next(err);
    res.status(201).send();
  });
});


  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
})
