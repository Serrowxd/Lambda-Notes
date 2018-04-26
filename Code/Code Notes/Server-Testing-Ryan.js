describe('Bands', () => {
  let bandId;
  before(done => {
    mongoose.connect('mongodb://localhost/test', {}, err => {});
  });

  // watch video and finish this upper block

  beforeEach(done => {
    const newBand = new Band({
      name: 'Radiohead',
      genre: 'Alt-rock',
    });
    newBand
      .save()
      .then(savedBand => {
        bandId = savedBand._id.toString(); // _id comes from Mongo - it is a unique object id that you would see on the saved array of objects, or binary json object. bandId is a global variable that we modify based on what we're using it for, and _id is pulled from the database.
      })
      .catch(err => {
        console.log(err);
      });
    done();
  });
  afterEach(done => {
    Band.remove({}, err => {
      if (err) console.log(err);
      return done();
    });
  });

  describe(`[GET] /api/bands`, () => {
    it('should get a list of all the bands in the db', done => {
      chai
        .request(server)
        .get('/api/bands')
        .end((err, response) => {
          // if (err) {
          // assert that err should be type status etc.
          //   console.log(err);
          //   done(); // done here is trying to break the code and avoid the bottom section.
          // }
          const { _id, name, genre } = response.body[0]; // this is what is being required to be sent to the server - name/genre
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array');
          expect(_id).to.equal(bandId);
          expect(name).to.equal('Radiohead');
          // Ryan's Code
        });
      // check if it's an array
      // check if 200
      // check body
      // check id
      done();
    });
    it.skip('Should fail if bad URL is provided', () => {});
  });

  describe(`[POST] /api/bands`, () => {
    it('should save a document to the db', done => {
      chai
        .request(server)
        .post('/api/bands')
        .send({ name: 'Modest Mouse', genre: 'Indy' }) // being sent to the server as requested - name/genre
        .end((err, response) => {
          console.log(response);
        })
        .catch(err => {
          throw err;
        });
    });
    // it.skip(`Should fail if bad name or genre aren't provided`, () => {});
    it.skip(`Should fail if bad name or genre aren't provided`, done => {
      chai
        .request(server)
        .post('/api/bands')
        .send({ genre: 'Indy' })
        .then(response => {
          done();
        })
        .catch(err => {
          throw err; // Big error? Throw it.
        });
    });
  });
});

// TESTS ARE JUST LIKE USING POSTMAN

// Server

server.post('api/bands', (req, res) => {
  const { name, genre } = req.body;
  const newBand = new Band({ name, genre });
  newBand.save().then(savedBand => {
    res
      .json(savedBand => {
        Band.find({}, (err, allBands) => {
          // finds all the bands
          // handle that error!
          res.json(allBands);
        });
      })
      .catch(errr => {
        res.status(422).json(errr);
      });
  });
});

// Band.js

const monogoose = require('mongoose');
const { Schema } = mongoose;

const BandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

BandSchema.methods.getName = function() {
  return this.name;
};

BandSchema.statics.getAllBands = function(callBack) {
  Band.find({})
    .then(allBands => {
      calLback(allBands);
    })
    .catch(err => {
      callBack(err);
    });
};

const Band = mongoose.model('Band', BandSchema);

module.exports = Band;
