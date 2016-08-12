'use strict';

import mongoose from 'mongoose';
import config from '../../config/environment/shared.js';

var ClanesSchema = new mongoose.Schema({
  info: {
    nombre: {
      type: String, unique: true
    },
    nick: {
      type: String, unique: true
    },
    nivel: {
      type: String, enum: config.niveles
    },
    normas: String
  },
  media: {
    color1: String,
    color2: String,
    logo: String,
    icono: String,
    fondo: String,
    telegram: String,
    telegramLogo: String,
    telegramLogoAdmins: String
  },
  miembros: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  admins: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }]
});

export default mongoose.model('Clanes', ClanesSchema);
