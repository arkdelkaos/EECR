'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cardCtrlStub = {
  index: 'cardCtrl.index',
  show: 'cardCtrl.show',
  create: 'cardCtrl.create',
  update: 'cardCtrl.update',
  destroy: 'cardCtrl.destroy'
};

var authServiceStub = {
  isAuthenticated() {
    return 'authService.isAuthenticated';
  },
  hasRole(role) {
    return 'authService.hasRole.' + role;
  }
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './card.controller': cardCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Card API Router:', function() {

  it('should return an express router instance', function() {
    cardIndex.should.equal(routerStub);
  });

  describe('GET /api/cards', function() {

    it('should route to card.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cardCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cards/:id', function() {

    it('should route to card.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cardCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cards', function() {

    it('should route to card.controller.create', function() {
      routerStub.post
        .withArgs('/', 'authService.hasRole.admin', 'cardCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cards/:id', function() {

    it('should route to card.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'authService.hasRole.admin', 'cardCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cards/:id', function() {

    it('should route to card.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'authService.hasRole.admin', 'cardCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cards/:id', function() {

    it('should route to card.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'authService.hasRole.admin', 'cardCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
