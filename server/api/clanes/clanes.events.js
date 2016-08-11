/**
 * Clanes model events
 */

'use strict';

import {EventEmitter} from 'events';
import Clanes from './clanes.model';
var ClanesEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClanesEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Clanes.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ClanesEvents.emit(event + ':' + doc._id, doc);
    ClanesEvents.emit(event, doc);
  };
}

export default ClanesEvents;
