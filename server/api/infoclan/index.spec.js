'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var infoclanCtrlStub = {
  index: 'infoclanCtrl.index',
  create: 'infoclanCtrl.create',
  upsert: 'infoclanCtrl.upsert',
};

var routerStub = {
  get: sinon.spy(),
  post: sinon.spy(),
};

// require the index with our stubbed out modules
var infoclanIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './infoclan.controller': infoclanCtrlStub
});

describe('Infoclan API Router:', function() {
  it('should return an express router instance', function() {
    expect(infoclanIndex).to.equal(routerStub);
  });

  describe('GET /api/infoclan', function() {
    it('should route to infoclan.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'infoclanCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/infoclan', function() {
    it('should route to infoclan.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'infoclanCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/infoclan/update', function() {
    it('should route to infoclan.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('', 'infoclanCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });
});
