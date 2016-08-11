'use strict';

var app = require('../..');
import infoClan from './infoclan.model';
import request from 'supertest';

describe('Infoclan API:', function() {
  var nuevoInfoClan;

  before(function() {
    return infoClan.remove().then(function() {
      nuevoInfoClan = new infoClan({
        identificador: '1',
        nombre: 'Prueba',
        twitter: 'sbsebesb',
        homeTexto: 'gbshseb',
        clanTexto: 'Prueba'
      });

      return nuevoInfoClan.save();
    });
  });

  // Clear users after testing
  after(function() {
    return infoClan.remove();
  });

  describe('GET /api/infoclan', function() {
    var infoclans;

    beforeEach(function(done) {
      request(app)
        .get('/api/infoclan')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          infoclans = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(infoclans.nombre).to.equal('Prueba');
    });
  });
});
