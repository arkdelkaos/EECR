'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var clanesCtrlStub = {
  index: 'clanesCtrl.index',
  show: 'clanesCtrl.show',
  create: 'clanesCtrl.create',
  upsert: 'clanesCtrl.upsert',
  patch: 'clanesCtrl.patch',
  destroy: 'clanesCtrl.destroy'
};

var authServiceStub = {
  isAuthenticated() {
    return 'authService.isAuthenticated';
  },
  hasRole(role) {
    return `authService.hasRole.${role}`;
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
var clanesIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './clanes.controller': clanesCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Clanes API Router:', function() {
  it('should return an express router instance', function() {
    expect(clanesIndex).to.equal(routerStub);
  });

  describe('GET /api/clanes', function() {
    it('should route to clanes.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'clanesCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/clanes/:id', function() {
    it('should route to clanes.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'clanesCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/clanes', function() {
    it('should verify admin role and route to clanes.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'authService.hasRole.admin', 'clanesCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/clanes/:id', function() {
    it('should verify admin role and route to clanes.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'authService.hasRole.admin', 'clanesCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/clanes/:id', function() {
    it('should verify admin role and route to clanes.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'authService.hasRole.admin', 'clanesCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/clanes/:id', function() {
    it('should verify admin role and route to clanes.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'authService.hasRole.admin', 'clanesCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
