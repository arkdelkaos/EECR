'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CardSchema = new mongoose.Schema({
  nombre: {
    type: String,
    unique: true
  },
  tipo: String,
  calidad: String,
  arena: String,
  coste: {
    type: Number,
    min: 1,
    max: 10
  },
  uso: Number,
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
