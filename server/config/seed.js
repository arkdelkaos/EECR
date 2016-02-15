/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Infoclan from '../api/infoclan/infoclan.model';
import Card from '../api/card/card.model';
import Deck from '../api/deck/deck.model';
import Torneo from '../api/torneo/torneo.model';




Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Prueba de mensaje',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Aserejé, ja, dejé',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Majavi Daundebugi',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'An dewii dipi',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Yo soy aquel, que por quererte, ya no vive...',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Nevah gona give u up, nevah gona give u down',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

Infoclan.find({}).removeAsync()
  .then(() => {
    Infoclan.createAsync({
      identificador: '1',
      nombre: 'Elite España',
      twitter: 'EliteEspanaCR',
      homeTexto: "<p></p><h1>Estamos en BETA!...</h1><h3>Bienvenido a nuestra Web App</h3><p>Aquí podrás encontrar toda la <b>información sobre nuestro clan, sus normas y funcionamiento</b></p><p>Aún no está preparado para ser testado nuestro ranking de mazos, así como el sistema de torneos, pero será abierto en breve <i>(si al vago del dev le da por trabajar, en vez de buscar reproducirse (• ε •) )</i></p><p>Si quieres recomendar mejoras, dínoslas en <a href=\"http://feathub.com/arkdelkaos/EECR\">FeatHub</a>. Si has encontrado errores en la app, el diseño, o quieres ayudarnos con el código, usa <a href=\"https://github.com/arkdelkaos/EECR/issues\">Github - EECR/issues</a></p><p></p>",
      clanTexto : "Nuestro clan fue creado el primer día, *siendo el primer clan Español de juego*.  \nPretendemos ser una **comunidad de jugadores, multi-clan**, con igualdad entre nuestros jugadores *(ver normas)*    \n**Cada clan puede decidir un sistema de organización diferente**, si sus líderes así lo deciden. Por ejemplo, **EE1** fue creado con la intención de ser en **top1 de nuestro país**. Este objetivo es el fin último del clan, y su sistema de organización busca lograrlo. A su vez, **EE3** prefiere un sistema que mantenga la comunidad antes que las coronas.  \nEstas decisiones son avisadas a los miembros de cada clan, con tiempo para ser comentadas y votadas por la comunidad.  \nActualmente tenemos 3 modelos organizativos:\n\n  - **Sistema 49** [EE1, EE4]: El clan se mantiene en 49 jugadores, y si se recibe una petición de ingreso cuyas coronas sean superiores  las del top25 del clan, se saca al jugador número 49 para hacer hueco al fichaje.  \nEste sistema es el mas duro, y supone que TODOS LOS JUGADORES ENTIENDEN QUE EN CUALQUIER MOMENTO SE LES PUEDE SACAR, así como que el hecho de ser expulsado no significa dejar de ser parte de la comunidad EE; pueden unirse a otro de nuestros clanes, y, si recuperan coronas, pedir entrar tantas veces como necesiten.  \nPara ser **elder**, hay que estar en nuestro grupo de telegram, y pedir ser ascendido a uno de los co-líderes del clan. Siempre se preferirá sacar un miembro a un elder, si la diferencia de copas es pequeña.\nLa única excepción al sistema 49 son los **co-líderes**, a los que en caso de quedarse rezagados se les daría un tiempo para recuperarse (pero en caso de no lograrlo, se les sacaría como a los demás)\n  - **Comunidad** [EE3]: El sistema clásico donde donar, participar *(charlar in-game, telegram, luchar en torneos)*, y ser fiel al clan, es lo principal.  \nLos **ascensos van ligados a la participación**, y serán otorgados por los co-líderes según estimen oportuno. Por ejemplo, Elder puede significar tener un **buen ratio de donaciones semanal**, y revisar dicho ratio cada domingo. Quienes no lleguen a un mínimo, pueden bajar a miembro (o incluso ser expulsado); las donaciones son un gran indicativo del grado de actividad diaria que tiene un jugador.\n  - **Cantera** [EE2]: Para ayudar y aprender sobre el juego. La finalidad del clan es que los jugadores mejoren lo antes posible, de la manera mas óptima.  \n\nSobre las **donaciones**: Debemos intentar pedir con cabeza; **si un compañero está en cola para recibir su donación**, no **debemos pedir mas de lo mismo hasta que él lo reciba**. Este caso se ha hado bastante con magos y bárbaros, por ejemplo.  \n\n## Normas\nLas normas del clan son simples, y su ejecución también: **No habrá un segundo aviso**.  \nEstá **prohibido**...\n\n- Hacer **comentarios despectivos hacia un compañero,** por cualquiera de los medios de clan. \n- Hacer **comentarios Fascistas, Xenófobos, Homófobos**.\n- Desobedecer una orden directa de un líder, entre las que incluimos:\n  - Peticiones por el bien del clan, como, por ejemplo, dejar de hacer spam.\n  - Peticiones de mejora del esfuerzo, como, por ejemplo, subida de los números de donación.  \n  \nEstas normas se aplicarán a todo el mundo, tenga el grado que tenga.\n\n## Herramientas\nEl clan cuenta con varios grupos de **Telegram**, siendo 'el bar' el canal público desde el que puedes pedir entrar a los demás.  \nUsa este link para unirte: <http://j.mp/EEtelegram>\n\nTambién tenemos la **cuenta oficial** del clan en **twitter**, **@EliteEspanaCR**"
    })
    .then(() => {
      console.log('finished populating infoclan');
    });
  });

Card.find({}).removeAsync()
  .then(() => {
    Card.createAsync({
      num: 1,
      nombre: 'Arrows',
      tipo: 'Spell',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      num: 2,
      nombre: 'Bomber',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      num: 3,
      nombre: 'Archers',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      num: 4,
      nombre: 'Knight',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      num: 5,
      nombre: 'Fireball',
      tipo: 'Spell',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      num: 6,
      nombre: 'Mini P.E.K.K.A',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      num: 7,
      nombre: 'Musketeer',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      num: 8,
      nombre: 'Giant',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      num: 9,
      nombre: 'Prince',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      num: 10,
      nombre: 'Baby Dragon',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      num: 11,
      nombre: 'Skeleton Army',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      num: 12,
      nombre: 'Witch',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      num: 13,
      nombre: 'Spear Goblins',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Goblin Stadium',
      coste: 2,
      comentarios: []
    }, {
      num: 14,
      nombre: 'Goblins',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Goblin Stadium',
      coste: 2,
      comentarios: []
    }, {
      num: 15,
      nombre: 'Goblin Hut',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Goblin Stadium',
      coste: 5,
      comentarios: []
    }, {
      num: 16,
      nombre: 'Valkyrie',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Goblin Stadium',
      coste: 4,
      comentarios: []
    }, {
      num: 17,
      nombre: 'Lightning',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Goblin Stadium',
      coste: 6,
      comentarios: []
    }, {
      num: 18,
      nombre: 'Goblin Barrel',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Goblin Stadium',
      coste: 4,
      comentarios: []
    }, {
      num: 19,
      nombre: 'Skeletons',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Bone Pit',
      coste: 1,
      comentarios: []
    }, {
      num: 20,
      nombre: 'Minions',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Bone Pit',
      coste: 3,
      comentarios: []
    }, {
      num: 21,
      nombre: 'Tombstone',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Bone Pit',
      coste: 3,
      comentarios: []
    }, {
      num: 22,
      nombre: 'Bomb Tower',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Bone Pit',
      coste: 5,
      comentarios: []
    }, {
      num: 23,
      nombre: 'Giant Skeleton',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Bone Pit',
      coste: 6,
      comentarios: []
    }, {
      num: 24,
      nombre: 'Balloon',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Bone Pit',
      coste: 5,
      comentarios: []
    }, {
      num: 25,
      nombre: 'Cannon',
      tipo: 'Building',
      calidad: 'Common',
      arena: 'Barbarian Bowl',
      coste: 6,
      comentarios: []
    }, {
      num: 26,
      nombre: 'Barbarians',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Barbarian Bowl',
      coste: 5,
      comentarios: []
    }, {
      num: 27,
      nombre: 'Rocket',
      tipo: 'Spell',
      calidad: 'Rare',
      arena: 'Barbarian Bowl',
      coste: 6,
      comentarios: []
    }, {
      num: 28,
      nombre: 'Barbarian Hut',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Barbarian Bowl',
      coste: 7,
      comentarios: []
    }, {
      num: 29,
      nombre: 'Rage',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Barbarian Bowl',
      coste: 3,
      comentarios: []
    }, {
      num: 30,
      nombre: 'X-Bow',
      tipo: 'Building',
      calidad: 'Epic',
      arena: 'Barbarian Bowl',
      coste: 6,
      comentarios: []
    }, {
      num: 31,
      nombre: 'Tesla',
      tipo: 'Building',
      calidad: 'Common',
      arena: "P.E.K.K.A's Playhouse",
      coste: 4,
      comentarios: []
    }, {
      num: 32,
      nombre: 'Minion Horde',
      tipo: 'Troop',
      calidad: 'Common',
      arena: "P.E.K.K.A's Playhouse",
      coste: 5,
      comentarios: []
    }, {
      num: 33,
      nombre: 'Inferno Tower',
      tipo: 'Building',
      calidad: 'Rare',
      arena: "P.E.K.K.A's Playhouse",
      coste: 5,
      comentarios: []
    }, {
      num: 34,
      nombre: 'Hog Rider',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: "P.E.K.K.A's Playhouse",
      coste: 4,
      comentarios: []
    }, {
      num: 35,
      nombre: 'Freeze',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: "P.E.K.K.A's Playhouse",
      coste: 4,
      comentarios: []
    }, {
      num: 36,
      nombre: 'P.E.K.K.A',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: "P.E.K.K.A's Playhouse",
      coste: 8,
      comentarios: []
    }, {
      num: 37,
      nombre: 'Zap',
      tipo: 'Spell',
      calidad: 'Common',
      arena: 'Spell Valley',
      coste: 2,
      comentarios: []
    }, {
      num: 38,
      nombre: 'Wizard',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Spell Valley',
      coste: 5,
      comentarios: []
    }, {
      num: 39,
      nombre: 'Mirror',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Spell Valley',
      coste: 1,
      comentarios: []
    }, {
      num: 40,
      nombre: 'Mortar',
      tipo: 'Building',
      calidad: 'Common',
      arena: 'Royal Arena',
      coste: 6,
      comentarios: []
    }, {
      num: 41,
      nombre: 'Elixir Collector',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Royal Arena',
      coste: 5,
      comentarios: []
    }, {
      num: 42,
      nombre: 'Golem',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Royal Arena',
      coste: 8,
      comentarios: []
    })
    .then(() => {
      console.log('finished populating cards');
      User.find({}).removeAsync()
        .then(() => {
          // var cartas = ['Freeze', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Mortar', 'Elixir Collector', 'Golem'];
          // var cartas2 = ['Arrows', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Mortar', 'Elixir Collector', 'Golem'];
          // var cartas3 = ['Arrows', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Mortar', 'Elixir Collector', 'Witch'];
          // var cartas4 = ['Arrows', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Balloon', 'Witch', 'Golem'];
          // var cartas5 = ['Arrows', 'Archers', 'Knight', 'Wizard', 'Mirror', 'Balloon', 'Witch', 'Golem'];
          // var newMazo = [];
          // var newMazo2 = [];
          // var newMazo3 = [];
          // var newMazo4 = [];
          // var newMazo5 = [];
          //
          // function crearMazo(c, m) {
          //   return new Promise((resolve) => setTimeout(resolve, 0))
          //   .then(() => {
          //     var promises = c.map(n =>
          //       Card.findOneAndUpdate({'nombre': n}, {$inc: { uso: +1 }})
          //           .then(carta => carta._id)
          //     );
          //     return Promise.all(promises);
          //   }).then(res =>
          //     m.concat(res)
          //   );
          // }

          // Promise.all([
          //   crearMazo(cartas, []),
          //   crearMazo(cartas2, []),
          //   crearMazo(cartas3, []),
          //   crearMazo(cartas4, []),
          //   crearMazo(cartas5, [])
          // ]).then(([newMazo, newMazo2, newMazo3, newMazo4, newMazo5]) => {
              User.createAsync({
                  provider: 'local',
                  name: 'Test User',
                  email: 'test@example.com',
                  password: 'test',
                  // mazo: newMazo
                }, {
                  provider: 'local',
                  role: 'admin',
                  name: 'Admin',
                  email: 'admin@example.com',
                  password: 'admin',
                  clan: 'EE1'
                  // mazo: newMazo2
                }, {
                  provider: 'local',
                  name: 'Pepe',
                  email: 'pepe@example.com',
                  password: 'pepe',
                  // mazo: newMazo3
                }, {
                  provider: 'local',
                  name: 'Paco',
                  email: 'paco@example.com',
                  password: 'paco',
                  // mazo: newMazo4
                }, {
                  provider: 'local',
                  name: 'Antonio',
                  email: 'antonio@example.com',
                  password: 'antonio',
                  // mazo: newMazo5
                })
                .then(() => {
                  console.log('finished populating users');

                  Torneo.find({}).removeAsync()
                    .then(() => {
                      Promise.all([
                        User.findOne({'name': 'Antonio'}),
                        User.findOne({'name': 'Pepe'}),
                        User.findOne({'name': 'Admin'})
                      ]).then(([usr1,usr2,usr3]) => {
                        Torneo.createAsync({
                          name: 'Prueba 1',
                          owner: usr1._id,
                          info: 'Prueba 1',
                          active: true,
                          open: true,
                          official: true,
                          size: '16',
                          clan: 'EE1',
                          users: [usr1._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id],
                        },{
                          name: 'Prueba 2',
                          owner: usr2._id,
                          info: 'Prueba 2',
                          active: true,
                          open: false,
                          size: '32',
                          official: true,
                          clan: 'EE2',
                          users: [usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id],
                        },{
                          name: 'Prueba 1.2',
                          owner: usr3._id,
                          info: 'Prueba 1.2',
                          active: true,
                          open: true,
                          size: '16',
                          official: true,
                          clan: 'EE1',
                          users: [usr3._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id],
                        },{
                          name: 'Inactivo 1',
                          owner: usr3._id,
                          info: 'Inactivo 1',
                          active: false,
                          open: true,
                          size: '8',
                          official: true,
                          clan: 'EE4',
                          users: [usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id],
                        },{
                          name: 'No Oficial 1',
                          owner: usr3._id,
                          info: 'Prueba No Oficial 1',
                          active: true,
                          open: false,
                          size: '32',
                          official: false,
                          clan: 'EE3',
                          users: [usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr3._id],
                        },{
                          name: 'Aserejéjadejémejebeedurejebere',
                          owner: usr2._id,
                          info: 'Prueba Borjonuda Tocahuevos 1',
                          active: true,
                          open: true,
                          size: '8',
                          official: true,
                          clan: 'EE2',
                          users: [usr2._id,usr2._id,usr2._id,usr2._id,usr2._id,usr2._id],
                        })
                        .then(() => {
                          console.log('finished populating torneos');
                        });
                      });
                  });
                });
        });
    });
});
