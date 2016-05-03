'use strict';

import config from '../../config/environment';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TorneoSchema = new mongoose.Schema({
  name: String,
  owner: {
    userId: {
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
    userId: {
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
      userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
      },
      name: String
    },
    user2: {
      userId: {
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
  }],
  chat: [{
    date: {
      type: Date, default: Date.now
    },
    msg: String,
    nick: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
  }]
});

export default mongoose.model('Torneo', TorneoSchema);
