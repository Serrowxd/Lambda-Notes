const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Band = require('./band');
const server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));

// ROUTES WILL BE BUILT HERE
server.get('/api/bands', (req, res) => {
  Band.find({})
    .then(bands => {
      res.json(bands);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot find your bands' });
    });

  // Band.find({}, (err, allBands) => {
  //   if (err) return res.status(500).json({ error: 'Cannot find your bands' });
  //   res.json(bands);
  // });
});

server.post('/api/bands', (req, res) => {
  const { name, genre } = req.body;
  const newBand = new Band({ name, genre });
  newBand
    .save()
    .then(savedBand => {
      Band.find({}, (err, allBands) => {
        // handle that error!
        res.json(allBands);
      });
    })
    .catch(errr => {
      res.status(422).json(errr);
    });
});

module.exports = server;
