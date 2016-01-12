/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/infoclan              ->  index
 * PUT     /api/infoclan              ->  update
 */

'use strict';

import _ from 'lodash';
import Infoclan from './infoclan.model';

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

// Gets Infoclans
export function index(req, res) {
  Infoclan.findOneAsync({'identificador': '1'}, '-_id nombre twitter texto')
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Infoclan in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Infoclan.findOneAsync({'identificador': '1'})
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Creates a new infoclan
 */
export function create(req, res, next) {
  var newInfoclan = new Infoclan(req.body);
  newInfoclan.identificador = '1';
  newInfoclan.nombre = 'Elite España';
  newInfoclan.twitter = 'EliteEspanaCR';
  newInfoclan.texto = 'Cambiar!test';
  newInfoclan.saveAsync()
    .catch(validationError(res));
}
