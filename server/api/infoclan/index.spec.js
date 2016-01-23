'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var infoclanCtrlStub = {
  index: 'infoclanCtrl.index',
  update: 'infoclanCtrl.update',
  create: 'infoclanCtrl.create'
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
  post: sinon.spy()
};

// require the index with our stubbed out modules
var infoclanIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './infoclan.controller': infoclanCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Infoclan API Router:', function() {

  it('should return an express router instance', function() {
    infoclanIndex.should.equal(routerStub);
  });

  describe('GET /api/infoclan', function() {

    it('should route to infoclan.controller.index', function() {
      routerStub.get
        .withArgs('/', 'infoclanCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/infoclan/update', function() {

    it('should route to infoclan.controller.update', function() {
      routerStub.post
        .withArgs('/update', 'authService.hasRole.admin', 'infoclanCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/infoclan', function() {

    it('should route to infoclan.controller.create', function() {
      routerStub.post
        .withArgs('/', 'infoclanCtrl.create')
        .should.have.been.calledOnce;
    });

  });

});
