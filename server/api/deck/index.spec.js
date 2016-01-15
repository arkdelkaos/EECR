'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var DeckControllerStub = {
  index: 'DeckController.index',
  show: 'DeckController.show',
  create: 'DeckController.create',
  update: 'DeckController.update',
  destroy: 'DeckController.destroy'
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
  './deck.controller': DeckControllerStub
});

describe('Deck API Router:', function() {

  it('should return an express router instance', function() {
    deckIndex.should.equal(routerStub);
  });

  describe('GET /api/decks', function() {

    it('should route to deck.controller.index', function() {
      routerStub.get
        .withArgs('/', 'DeckController.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/decks/:id', function() {

    it('should route to deck.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'DeckController.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/decks', function() {

    it('should route to deck.controller.create', function() {
      routerStub.post
        .withArgs('/', 'DeckController.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/decks/:id', function() {

    it('should route to deck.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'DeckController.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/decks/:id', function() {

    it('should route to deck.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'DeckController.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/decks/:id', function() {

    it('should route to deck.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'DeckController.destroy')
        .should.have.been.calledOnce;
    });

  });

});
