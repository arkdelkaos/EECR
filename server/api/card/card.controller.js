/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cards              ->  index
 * POST    /api/cards              ->  create
 * GET     /api/cards/:id          ->  show
 * PUT     /api/cards/:id          ->  update
 * DELETE  /api/cards/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Card from './card.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cards
export function index(req, res) {
  Card.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Card from the DB
export function show(req, res) {
  Card.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Card in the DB
export function create(req, res) {
  Card.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Card in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Card.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Card from the DB
export function destroy(req, res) {
  Card.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

//
export function usoGet(req, res) {
  Card.findByIdAsync(req.params.id, '-_id uso')
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//
export function usoUpdate(req, res) {
  Card.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(card => {
        if(req.body.voto==0){
          card.uso--;
        }else{
          card.uso++;
        }
        return card.saveAsync()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//
export function msgIndex(req, res) {
}

//
export function msgCreate(req, res) {
}
//
export function msgDestroy(req, res) {
}
