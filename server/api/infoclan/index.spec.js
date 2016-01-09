'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var infoclanCtrlStub = {
  info: 'infoclanCtrl.info',
  updateInfo: 'infoclanCtrl.updateInfo',
  texto: 'infoclanCtrl.texto',
  updateTexto: 'infoclanCtrl.updateTexto',
  create: 'infoclanCtrl.create'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy()
};

// require the index with our stubbed out modules
var infoclanIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './infoclan.controller': infoclanCtrlStub
});

describe('Infoclan API Router:', function() {

  it('should return an express router instance', function() {
    infoclanIndex.should.equal(routerStub);
  });

  describe('GET /api/infoclan', function() {

    it('should route to infoclan.controller.info', function() {
      routerStub.get
        .withArgs('/', 'infoclanCtrl.info')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/infoclan', function() {

    it('should route to infoclan.controller.updateInfo', function() {
      routerStub.put
        .withArgs('/', 'infoclanCtrl.updateInfo')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/infoclan/texto', function() {

    it('should route to infoclan.controller.texto', function() {
      routerStub.get
        .withArgs('/', 'infoclanCtrl.texto')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/infoclan/texto', function() {

    it('should route to infoclan.controller.updateTexto', function() {
      routerStub.put
        .withArgs('/', 'infoclanCtrl.updateTexto')
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
