'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CardSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  calidad: String,
  arena: String,
  coste: {
    type: Number,
    min: 1,
    max: 10
  },
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

export default mongoose.model('Card', CardSchema);
