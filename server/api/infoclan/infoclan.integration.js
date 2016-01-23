'use strict';

var app = require('../..');
import Infoclan from './infoclan.model';
import request from 'supertest';

describe('Infoclan API:', function() {
  var infoclan;

  // Clear Infoclan before testing
  before(function() {
    return Infoclan.removeAsync().then(function() {
      infoclan = new Infoclan({
        nombre: 'Clan Cataclan',
        twitter: 'twitterfalso',
        homeTexto: 'Asereje Ja Deje',
        clantexto: 'Normas'
      });

      return infoclan.saveAsync();
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
          res.body.nombre.should.equal(infoclan.nombre);
          res.body.twitter.should.equal(infoclan.twitter);
          res.body.homeTexto.should.equal(infoclan.homeTexto);
          res.body.clanTexto.should.equal(infoclan.clanTexto);
          done();
        });
    });
  });
});
