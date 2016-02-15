'use strict';

import config from '../../config/environment';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TorneoSchema = new mongoose.Schema({
  name: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  info: String,
  active: Boolean,
  date: {
    type: Date, default: Date.now
  },
  open: Boolean,
  official: Boolean,
  clan: {
    type: String,
    enum: config.clanes
  },
  size: {
    type: String,
    enum: config.torneoSize
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  rounds: [{
    active: Boolean,
    date: {
      type: Date, default: Date.now
    },
    user1: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    user2: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    score1: {
      user1: Number,
      user2: Number
    },
    score2: {
      user1: Number,
      user2: Number
    },
    scoreFinal: {
      user1: Number,
      user2: Number
    }
  }]
});

export default mongoose.model('Torneo', TorneoSchema);
