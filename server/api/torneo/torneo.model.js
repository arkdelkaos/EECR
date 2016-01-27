'use strict';

// - Los usuarios del clan tienen algo que he llamado 'Karma'. 
// --- El karma se gana participando en la web, y en torneos
// --- Y se pierde 'si hay problemas'
// --- El ejemplo mas simple: Los dos que luchan en una baza del torneo, cuando acaban sus 3 partidas, deben entrar en el torneo y poner el resultado. Si no 'se ponen de acuerdo', el sistema les resta Karma a ambos, y espera a que el creador del torneo marque el resultado correcto.
// --- También se puede perder Karma por malos comportamientos en los chats.
// --- El karma es lo que decide si se puede participar en un torneo, o no. O incluso si, llegado a una cantidad de Karma, se te habilita para poder crear torneos.
//
// - Los usuarios son los que se unen a un torneo.
// --- El creador lo monta, aparece en la web, y todos los usuarios que cumplen requisitos puede unirse.
// --- ¿Requisitos? Por ejemplo mínimo de karma, o pertenencia a un clan específico
//
// - El torneo una vez pasan 24h de que se abrió la inscripción, se cierra, y calcula random los enfrentamientos
// --- Pares? Debuti. Impares? El último pasa de ronda automáticamete.
// --- Cada ronda tiene 24h para realizarse
// --- Cada ve que una ronda acaba (se introduce el resultado), se crea automáticamente la siguiente. Y si está completa (1v2 terminada, 3v4 terminada >> 1vs3 jugable) se podrá jugar sin necesidad a esperar a que otras rondas acaben.
//
// - 1er, 2do, y 3er puesto, reciben un trofeo, que se muestra en su perfil de usuario
// --- A su vez se muestra en el perfil e cuantos torneos ha participado, y su indice G/P/E

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
  clan: Number,
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
