const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');

chai.use(chaiHTTP);

const Game = require('./models');
const server = require('./server');

describe('Games', () => {
  let gameId;
  let gameTitle;
  before(done => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/test');
    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('we are connected');
      done();
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
      console.log('we are disconnected');
    });
  });

  beforeEach(done => {
    const game = new Game({
      title: 'Game',
      genre: 'RPG',
      releaseDate: 'yes',
    });
    game.save((err, savedGame) => {
      if (err) return done();
      gameId = savedGame._id.toString();

      done();
    });
  });

  afterEach(done => {
    Game.remove();
    gameId = null; // resets the id to null whenever it runs.
    done();
  });

  // test the GET here
  describe('[GET] /api/game/get', () => {
    it('should retrieve information from the database', done => {
      chai
        .request(server)
        .get('/api/game/get')
        .then(res => {
          const { _id, title, genre, releaseDate } = res.body[0];
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          // expect(_id).to.equal(gameId);
          done();
        })
        .catch(err => {
          throw err;
        });
    });
  });

  // test the POST here

  // Test the DELETE here
  describe('Delete', () => {
    it('should delete a record removing it from db', done => {
      // this uses callbacks, done (above) insures that you actually call it.
      // it.skip will skip the block, which makes it easier than commenting it out.
      chai
        .request(server)
        .delete(`/api/game/destroy/${gameId}`) // the :id is set to the gameId
        .end((err, response) => {
          // can also be written as 'res' instead of 'response' - same with 'del' vs 'delete'.
          if (err) console.log(err);
          const { success } = response.body;
          expect(response.status).to.equal(200);
          expect(success).to.be.a('string');
          expect(success).to.equal(`${gameTitle} was removed from the DB`);
          // console.log(response.body);
          done();
        });
    });
    it.skip('should handle a bid id', () => {
      chai
        .request(server)
        .delete(`/api/game/destroy/noop`) // the :id is set to the gameId
        .end((err, response) => {
          // can also be written as 'res' instead of 'response' - same with 'del' vs 'delete'.
          const { error } = response.error;
          if (err) console.log(err);
          expect(response.status).to.equal(422);
          // console.log(response.body);
          done();
        });
    });
  });

  // --- Stretch Problem ---
  // test the PUT here
});

// testing is just faking what you're actually doing without poluting the database.
// mongoose.connect('mongodb://localhost/test'); -- this connects you to a "test" database, where you're not actually modifying anything.

// Ryan's Code for above.

describe('Delete', () => {
  it('should delete a record removing from db', done => {
    chai
      .request(server)
      .delete(`/api/game/destroy/${gameId}`)
      .end((err, response) => {
        if (err) console.log(err);
        const { success } = response.body;
        expect(response.status).to.equal(200);
        expect(success).to.be.a('string');
        expect(success).to.equal(`${gameTitle} was removed from the DB`);
        done();
      });
  });

  it('should handle a bad id', done => {
    chai
      .request(server)
      .delete(`/api/game/destroy/noop`)
      .end((err, response) => {
        if (err) {
          const { error } = err.response.body;
          expect(error).to.be.a('string');
          expect(error).to.equal('Cannot find game by that id');
          expect(err.response.clientError).to.be.ok;
          expect(err.response.status).to.equal(422);
        }
        done();
      });
  });
});
