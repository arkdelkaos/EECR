'use strict';

import config from '../../config/environment';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TorneoSchema = new mongoose.Schema({
  name: String,
  owner: {
    _id: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    name: String
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
    _id: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    name: String
  }],
  rounds: [{
    active: Boolean,
    date: {
      type: Date, default: Date.now
    },
    user1: {
      _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
      },
      name: String
    },
    user2: {
      _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
      },
      name: String
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
