/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/torneos              ->  index
 * POST    /api/torneos              ->  create
 * GET     /api/torneos/:id          ->  show
 * PUT     /api/torneos/:id          ->  update
 * DELETE  /api/torneos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Torneo from './torneo.model';

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

// Gets a list of Torneos
export function index(req, res) {
  Torneo.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Torneo from the DB
export function show(req, res) {
  Torneo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Torneo in the DB
export function create(req, res) {
  Torneo.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Torneo in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Torneo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Torneo from the DB
export function destroy(req, res) {
  Torneo.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
