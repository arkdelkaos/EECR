'use strict';

import {Schema} from 'mongoose';
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DeckSchema = new Schema({
  mazo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
    limit: 8
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  votos: {
    type: Number,
    default: 0
  },
  comentarios: [{
    user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    text: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
});

export default mongoose.model('Deck', DeckSchema);
