'use strict';

var app = require('../..');
import request from 'supertest';

var newPgo;

describe('Pgo API:', function() {
  describe('GET /api/pgo', function() {
    var pgos;

    beforeEach(function(done) {
      request(app)
        .get('/api/pgo')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pgos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(pgos).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/pgo', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/pgo')
        .send({
          name: 'New Pgo',
          info: 'This is the brand new pgo!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPgo = res.body;
          done();
        });
    });

    it('should respond with the newly created pgo', function() {
      expect(newPgo.name).to.equal('New Pgo');
      expect(newPgo.info).to.equal('This is the brand new pgo!!!');
    });
  });

  describe('PATCH /api/pgo/:id', function() {
    var patchedPgo;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/pgo/${newPgo._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Pgo' },
          { op: 'replace', path: '/info', value: 'This is the patched pgo!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          patchedPgo = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPgo = {};
    });

    it('should respond with the patched pgo', function() {
      expect(patchedPgo.name).to.equal('Patched Pgo');
      expect(patchedPgo.info).to.equal('This is the patched pgo!!!');
    });
  });

  describe('DELETE /api/pgo/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/pgo/${newPgo._id}`)
        .expect(204)
        .end(err => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pgo does not exist', function(done) {
      request(app)
        .delete(`/api/pgo/${newPgo._id}`)
        .expect(404)
        .end(err => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
});
