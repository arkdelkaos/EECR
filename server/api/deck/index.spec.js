'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var deckCtrlStub = {
  index: 'deckCtrl.index',
  show: 'deckCtrl.show',
  create: 'deckCtrl.create',
  update: 'deckCtrl.update',
  destroy: 'deckCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var deckIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './deck.controller': deckCtrlStub
});

describe('Deck API Router:', function() {

  it('should return an express router instance', function() {
    deckIndex.should.equal(routerStub);
  });

  describe('GET /api/decks', function() {

    it('should route to deck.controller.index', function() {
      routerStub.get
        .withArgs('/', 'deckCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/decks/:id', function() {

    it('should route to deck.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'deckCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/decks', function() {

    it('should route to deck.controller.create', function() {
      routerStub.post
        .withArgs('/', 'deckCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/decks/:id', function() {

    it('should route to deck.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'deckCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/decks/:id', function() {

    it('should route to deck.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'deckCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/decks/:id', function() {

    it('should route to deck.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'deckCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
