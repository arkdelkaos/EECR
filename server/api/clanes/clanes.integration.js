'use strict';

var app = require('../..');
import Clan from './clanes.model';
import request from 'supertest';

describe('Clanes API:', function() {
  var nuevoClan;

  before(function() {
    return Clan.remove().then(function() {
      nuevoClan = new Clan({
        info: {
          nombre: 'Elite España Test Integración',
          nick: 'EETC',
          nivel: '1',
          normas: 'Prueba de normas de **EE1**, con texto *en cursiva*.  \nTambién añado un salto de línea'
        },
        media: {
          color1: 'ff0048',
          color2: 'ff0000',
          logo: 'logo_1_claro_cuadrado.png',
          icono: '',
          telegram: '',
          telegramLogo: 'telegram_1.jpg',
          telegramLogoAdmins: 'telegram_admin_1.jpg'
        }
      });

      return nuevoClan.save();
    });
  });

  // Clear users after testing
  after(function() {
    return Clan.remove();
  });

  describe('GET /api/clanes', function() {
    var listaClanes;

    beforeEach(function(done) {
      request(app)
        .get('/api/clanes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          listaClanes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(listaClanes).to.be.instanceOf(Array);
    });
  });

  describe('GET /api/clanes/:id', function() {
    var listaClanes;

    beforeEach(function(done) {
      request(app)
        .get(`/api/clanes/${nuevoClan._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          listaClanes = res.body;
          done();
        });
    });

    afterEach(function() {
      listaClanes = {};
    });

    it('should respond with the requested clanes', function() {
      expect(listaClanes.info.nombre).to.equal('Elite España Test Integración');
      expect(listaClanes.info.nick).to.equal('EETC');
    });
  });
});
