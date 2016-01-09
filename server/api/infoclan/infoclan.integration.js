'use strict';

var app = require('../..');
import User from './Infoclan.model';
import request from 'supertest';

describe('Infoclan API:', function() {
  var user;

  // Clear Infoclan before testing
  before(function() {
    return Infoclan.removeAsync().then(function() {
      Infoclan = new Infoclan({
        nombre: 'Clan Cataclan',
        twitter: 'twitterfalso',
        texto: 'Asereje Ja Deje'
      });

      return Infoclan.saveAsync();
    });
  });

  // Clear Infoclan after testing
  after(function() {
    return Infoclan.removeAsync();
  });

  describe('GET /api/infoclan/', function() {
    var token;

    before(function(done) {
      request(app)
        .get('/api/infoclan/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    it('should respond with a infoclan schema when asked', function(done) {
      request(app)
        .get('/api/infoclan/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.body.nombre.should.equal(Infoclan.nombre);
          res.body.twitter.should.equal(Infoclan.twitter);
          done();
        });
    });
  });
});
