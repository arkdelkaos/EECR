'use strict';

var app = require('../..');
import request from 'supertest';

var newTorneo;

describe('Torneo API:', function() {

  describe('GET /api/torneos', function() {
    var torneos;

    beforeEach(function(done) {
      request(app)
        .get('/api/torneos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          torneos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      torneos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/torneos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/torneos')
        .send({
          name: 'New Torneo',
          info: 'This is the brand new torneo!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTorneo = res.body;
          done();
        });
    });

    it('should respond with the newly created torneo', function() {
      newTorneo.name.should.equal('New Torneo');
      newTorneo.info.should.equal('This is the brand new torneo!!!');
    });

  });

  describe('GET /api/torneos/:id', function() {
    var torneo;

    beforeEach(function(done) {
      request(app)
        .get('/api/torneos/' + newTorneo._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          torneo = res.body;
          done();
        });
    });

    afterEach(function() {
      torneo = {};
    });

    it('should respond with the requested torneo', function() {
      torneo.name.should.equal('New Torneo');
      torneo.info.should.equal('This is the brand new torneo!!!');
    });

  });

  describe('PUT /api/torneos/:id', function() {
    var updatedTorneo;

    beforeEach(function(done) {
      request(app)
        .put('/api/torneos/' + newTorneo._id)
        .send({
          name: 'Updated Torneo',
          info: 'This is the updated torneo!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTorneo = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTorneo = {};
    });

    it('should respond with the updated torneo', function() {
      updatedTorneo.name.should.equal('Updated Torneo');
      updatedTorneo.info.should.equal('This is the updated torneo!!!');
    });

  });

  describe('DELETE /api/torneos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/torneos/' + newTorneo._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when torneo does not exist', function(done) {
      request(app)
        .delete('/api/torneos/' + newTorneo._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
