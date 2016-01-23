'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
import {Schema} from 'mongoose';

var InfoclanSchema = new mongoose.Schema({
  identificador: { //Para que siempre se guarde en el mismo
    type: String,
    default: '1'
  },
  nombre: {
    type: String,
    default: 'Elite España'
  },
  twitter: {
    type: String,
    default: 'EliteEspanaCR'
  },
  homeTexto: {
    type: String,
    default: 'Cambiar!test'
  },
  clanTexto: {
    type: String,
    default: 'Normas BlaBlaBla'
  }
});

/**
 * Virtuals
 */

// Info pública del clan
InfoclanSchema
  .virtual('info')
  .get(function() {
    return {
      'nombre': this.nombre,
      'twitter': this.twitter,
      'homeTexto': this.homeTexto,
      'clanTexto': this.clanTexto
    };
  });

  /**
   * Validations
   */

// Validate empty Nombre
InfoclanSchema
 .path('nombre')
 .validate(function(nombre) {
   if (nombre.length > 0) {
     return true;
   }
   return nombre.length;
 }, 'Nombre cannot be blank');

// Validate empty Twitter
InfoclanSchema
.path('twitter')
.validate(function(twitter) {
  if (twitter.length > 0) {
    return true;
  }
  return twitter.length;
}, 'Twitter cannot be blank');


export default mongoose.model('Infoclan', InfoclanSchema);
