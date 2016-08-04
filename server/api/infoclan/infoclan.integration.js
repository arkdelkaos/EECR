'use strict';

var app = require('../..');
import request from 'supertest';

var newInfoclan;

describe('Infoclan API:', function() {
  describe('GET /api/infoclan', function() {
    var infoclans;

    beforeEach(function(done) {
      request(app)
        .get('/api/infoclan')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          infoclans = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(infoclans).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/infoclan', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/infoclan')
        .send({
          name: 'New Infoclan',
          info: 'This is the brand new infoclan!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newInfoclan = res.body;
          done();
        });
    });

    it('should respond with the newly created infoclan', function() {
      expect(newInfoclan.name).to.equal('New Infoclan');
      expect(newInfoclan.info).to.equal('This is the brand new infoclan!!!');
    });
  });

  describe('GET /api/infoclan/:id', function() {
    var infoclan;

    beforeEach(function(done) {
      request(app)
        .get(`/api/infoclan/${newInfoclan._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          infoclan = res.body;
          done();
        });
    });

    afterEach(function() {
      infoclan = {};
    });

    it('should respond with the requested infoclan', function() {
      expect(infoclan.name).to.equal('New Infoclan');
      expect(infoclan.info).to.equal('This is the brand new infoclan!!!');
    });
  });

  describe('PUT /api/infoclan/:id', function() {
    var updatedInfoclan;

    beforeEach(function(done) {
      request(app)
        .put(`/api/infoclan/${newInfoclan._id}`)
        .send({
          name: 'Updated Infoclan',
          info: 'This is the updated infoclan!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedInfoclan = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInfoclan = {};
    });

    it('should respond with the original infoclan', function() {
      expect(updatedInfoclan.name).to.equal('New Infoclan');
      expect(updatedInfoclan.info).to.equal('This is the brand new infoclan!!!');
    });

    it('should respond with the updated infoclan on a subsequent GET', function(done) {
      request(app)
        .get(`/api/infoclan/${newInfoclan._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let infoclan = res.body;

          expect(infoclan.name).to.equal('Updated Infoclan');
          expect(infoclan.info).to.equal('This is the updated infoclan!!!');

          done();
        });
    });
  });

  describe('PATCH /api/infoclan/:id', function() {
    var patchedInfoclan;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/infoclan/${newInfoclan._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Infoclan' },
          { op: 'replace', path: '/info', value: 'This is the patched infoclan!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedInfoclan = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedInfoclan = {};
    });

    it('should respond with the patched infoclan', function() {
      expect(patchedInfoclan.name).to.equal('Patched Infoclan');
      expect(patchedInfoclan.info).to.equal('This is the patched infoclan!!!');
    });
  });

  describe('DELETE /api/infoclan/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/infoclan/${newInfoclan._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when infoclan does not exist', function(done) {
      request(app)
        .delete(`/api/infoclan/${newInfoclan._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
