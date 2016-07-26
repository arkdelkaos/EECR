/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pgo              ->  index
 * POST    /api/pgo              ->  create
 * GET     /api/pgo/:id          ->  show
 * PUT     /api/pgo/:id          ->  update
 * DELETE  /api/pgo/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Pgo from './pgo.model';
import PokemonGO from 'pokemon-go-node-api'
import getPokemonList from './getPokemonList.js'

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
    return updated.save()
      .then(updated => {
        return updated;
      });
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
  let username = req.params.usr
  let password = req.params.pass
  let prov = req.params.prov
  let loc = {
    type: 'name',
    name: req.params.loc
  }

  getPokemonList(username, password, prov, loc)
    .then((list) => {
      res.status(200).json(list)
    }, (err) => {
      if (err.statusCode == 403) {
        return res.status(403).json({ errorCode: 403, message: 'Authentication failed' })
      }
      console.log(err)
      res.status(500).send({ errorCode: 500, message: 'Internal Server Error' })
    })


  // return Pgo.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
}

// Creates a new Pgo in the DB
export function create(req, res) {
  return Pgo.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Pgo in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Pgo.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
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
