const mongoose = require('mongoose');
const chai = require('chai');
const sinon = require('sinon');
const Band = require('./band');

const expect = chai.expect;

describe('Band', () => {
  let bandId;
  before(done => {
    mongoose.connect('mongodb://localhost/test', {}, err => {
      if (err) return console.log(err);
      console.log('TEST DB Connection Achieved');
    });
    done();
  });

  after(done => {
    mongoose.connection.close();
    done();
  });

  describe('getName', () => {
    it('should return the name of the band', done => {
      const band = new Band({ name: 'Radiohead', genre: 'Alt-rock' });
      expect(band.getName()).to.equal('Radiohead');
      done();
    });
  });

  describe('getAllBands', () => {
    it('should return all the bands', () => {
      sinon.stub(Band, 'find');
      Band.find.yields(null, [{ name: 'Radiohead', genre: 'Alt-rock' }]);
      Band.getAllBands(bands => {
        Band.find.restore();
        expect(bands).to.be.an('array');
      });
    });
  });
});
