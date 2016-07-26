/**
 * Infoclan model events
 */

'use strict';

import {EventEmitter} from 'events';
import Infoclan from './infoclan.model';
var InfoclanEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
InfoclanEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Infoclan.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    InfoclanEvents.emit(event + ':' + doc._id, doc);
    InfoclanEvents.emit(event, doc);
  }
}

export default InfoclanEvents;
