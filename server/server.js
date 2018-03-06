require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const url = process.env.MONGO_URI;
const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

async function run() {
  const client = await mongoClient.connect(url);
  const cd3DB = await client.db('cd3');
  const cd3Collection = await cd3DB.collection('locations');

  console.log('Connected to the database');

  app.use(express.static(path.resolve(__dirname, '..', 'build')));

  // Always return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });

  app.get('/locations', async (req, res, next) => {
    try {
      const locations = await cd3Collection.find().toArray();
      return res.status(200).send({ locations });
    } catch (error) {
      return next(error);
    }
  });

  app.post('/locations', async (req, res, next) => {
    const location = req.body;

    try {
      const results = await cd3Collection.insert(location);
      return res.status(201).send(results.ops[0]);
    } catch (error) {
      return next(error);
    }
  });

  app.delete('/locations/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
      await cd3Collection.deleteOne({
        _id: ObjectId(id),
      });
      return res.sendStatus(204);
    } catch (error) {
      return next(error);
    }
  });

  // Error Handler
  app.use((err, req, res) => {
    console.error(err);
    res.status(err.status || 500)
      .send(err.message || 'Internal Server Error');
  });


  const portNumber = process.env.PORT || 3001;

  app.listen(portNumber, () => {
    console.log('RrrarrrrRrrrr server alive on port 3001');
  });
}

run().catch(error => console.error(error));
