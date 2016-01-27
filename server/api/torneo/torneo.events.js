/**
 * Torneo model events
 */

'use strict';

import {EventEmitter} from 'events';
var Torneo = require('./torneo.model');
var TorneoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TorneoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Torneo.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TorneoEvents.emit(event + ':' + doc._id, doc);
    TorneoEvents.emit(event, doc);
  }
}

export default TorneoEvents;
