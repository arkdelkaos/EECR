/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/clanes              ->  index
 * POST    /api/clanes              ->  create
 * GET     /api/clanes/:id          ->  show
 * PUT     /api/clanes/:id          ->  upsert
 * PATCH   /api/clanes/:id          ->  patch
 * DELETE  /api/clanes/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Clanes from './clanes.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
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

// Gets a list of Claness
export function index(req, res) {
  return Clanes.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Clanes from the DB
export function show(req, res) {
  return Clanes.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Clanes in the DB
export function create(req, res) {
  return Clanes.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Clanes in the DB at the specified ID
export function upsert(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Clanes.findOneAndUpdate(req.params.id, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Clanes in the DB
export function patch(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Clanes.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Clanes from the DB
export function destroy(req, res) {
  return Clanes.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
