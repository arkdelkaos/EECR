'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var DeckSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  comentarios: [{
    usuario: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    cometario: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
});

export default mongoose.model('Deck', DeckSchema);
