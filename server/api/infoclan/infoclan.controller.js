/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/infoclan              ->  index
 * POST    /api/infoclan              ->  create
 * GET     /api/infoclan/:id          ->  show
 * PUT     /api/infoclan/:id          ->  upsert
 * PATCH   /api/infoclan/:id          ->  patch
 * DELETE  /api/infoclan/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Infoclan from './infoclan.model';
import _ from 'lodash';


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

// Gets a list of Infoclans
export function index(req, res) {
  return Infoclan.findOne({identificador: '1'}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Infoclan in the DB
export function create(req, res) {
  var newInfoclan = new Infoclan(req.body);
  newInfoclan.identificador = '1';
  newInfoclan.nombre = 'Elite España';
  newInfoclan.twitter = 'EliteEspanaCR';
  newInfoclan.homeTexto = 'Cambiar!test';
  newInfoclan.clanTexto = 'Cambiar!test';

  return newInfoclan.saveAsync()
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Infoclan in the DB at the specified ID
export function upsert(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  var id = 1;
  return Infoclan.findOneAndUpdate(id, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}
