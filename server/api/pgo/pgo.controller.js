/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pgo              ->  index
 * POST    /api/pgo              ->  create
 * GET     /api/pgo/:id          ->  show
 * PUT     /api/pgo/:id          ->  upsert
 * PATCH   /api/pgo/:id          ->  patch
 * DELETE  /api/pgo/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Pgo from './pgo.model';
// import PokemonGO from 'pokemon-go-node-api';
import getPokemonList from './getPokemonList.js';

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

// Gets a list of Pgos
export function index(req, res) {
  return Pgo.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Pgo from the DB
export function show(req, res) {
  let username = req.params.usr;
  let password = req.params.pass;
  let prov = req.params.prov;
  let loc = {
    type: 'name',
    name: req.params.loc
  };

  getPokemonList(username, password, prov, loc)
    .then(list => {
      res.status(200).json(list);
    }, err => {
      if (err.statusCode === 403) {
        return res.status(403).json({ errorCode: 403, message: 'Authentication failed' });
      }
      console.log(err);
      res.status(500).send({ errorCode: 500, message: 'Internal Server Error' });
    });
}

// Creates a new Pgo in the DB
export function create(req, res) {
  return Pgo.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Pgo in the DB at the specified ID
export function upsert(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Pgo.findOneAndUpdate(req.params.id, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Pgo in the DB
export function patch(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Pgo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Pgo from the DB
export function destroy(req, res) {
  return Pgo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
