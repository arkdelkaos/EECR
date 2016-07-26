/**
 * Pgo model events
 */

'use strict';

import {EventEmitter} from 'events';
import Pgo from './pgo.model';
var PgoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PgoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Pgo.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PgoEvents.emit(event + ':' + doc._id, doc);
    PgoEvents.emit(event, doc);
  }
}

export default PgoEvents;
