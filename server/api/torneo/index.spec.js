'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var torneoCtrlStub = {
  index: 'torneoCtrl.index',
  show: 'torneoCtrl.show',
  create: 'torneoCtrl.create',
  update: 'torneoCtrl.update',
  destroy: 'torneoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var torneoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './torneo.controller': torneoCtrlStub
});

describe('Torneo API Router:', function() {

  it('should return an express router instance', function() {
    torneoIndex.should.equal(routerStub);
  });

  describe('GET /api/torneos', function() {

    it('should route to torneo.controller.index', function() {
      routerStub.get
        .withArgs('/', 'torneoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/torneos/:id', function() {

    it('should route to torneo.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'torneoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/torneos', function() {

    it('should route to torneo.controller.create', function() {
      routerStub.post
        .withArgs('/', 'torneoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/torneos/:id', function() {

    it('should route to torneo.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'torneoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/torneos/:id', function() {

    it('should route to torneo.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'torneoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/torneos/:id', function() {

    it('should route to torneo.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'torneoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
