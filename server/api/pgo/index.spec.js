'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var pgoCtrlStub = {
  index: 'pgoCtrl.index',
  show: 'pgoCtrl.show',
  create: 'pgoCtrl.create',
  upsert: 'pgoCtrl.upsert',
  patch: 'pgoCtrl.patch',
  destroy: 'pgoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var pgoIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './pgo.controller': pgoCtrlStub
});

describe('Pgo API Router:', function() {
  it('should return an express router instance', function() {
    expect(pgoIndex).to.equal(routerStub);
  });

  describe('GET /api/pgo', function() {
    it('should route to pgo.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'pgoCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/pgo/:id', function() {
    it('should route to pgo.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'pgoCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/pgo', function() {
    it('should route to pgo.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'pgoCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/pgo/:id', function() {
    it('should route to pgo.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'pgoCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/pgo/:id', function() {
    it('should route to pgo.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'pgoCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/pgo/:id', function() {
    it('should route to pgo.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'pgoCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
