/**
 * Card model events
 */

'use strict';

import {EventEmitter} from 'events';
var Card = require('./card.model');
var CardEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CardEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Card.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CardEvents.emit(event + ':' + doc._id, doc);
    CardEvents.emit(event, doc);
  }
}

export default CardEvents;
