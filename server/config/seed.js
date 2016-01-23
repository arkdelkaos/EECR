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
      homeTexto: "<p></p><h1>Estamos en SUPER ALPHA!...</h1><h3>Bienvenido a nuestra web y aplicación de gestión de mazos</h3><p>Aquí podrás encotrar toda la <b>información sobre nuestro clan, sus normas y funcionamiento</b></p><p>Pero, sobre todo, te invitamos a que pruebes nuestro <strong><a href=\"/deck\">Gestor de Mazos</a></strong>. Con él podrás:</p><ul><li>Ver cuales son los mazos <b>mas usados</b>, y los mazos <b>mas votados</b>.<span>        </span></li></ul><ul><li><b>Comentar cada mazo<b>, y poder conocer las mejores estratégias para sacarle el máximo partido</b></b><span>        </span></li><li>Ver cuales son las <b>cartas mas usadas</b>...y comentar sobre ellas, individualmente</li></ul><p>Si quieres recomendar mejoras, dínoslas en <a href=\"http://feathub.com/arkdelkaos/EECR\">FeatHub</a>. Si has encotrado errores en la app, el diseño, o quieres ayudarnos con el código, usa <a href=\"https://github.com/arkdelkaos/EECR/issues\">Github - EECR/issues</a></p><p></p>",
      clanTexto: "# Normas del Clan **Elite España**\nBievenido al Clan **Elite España** de **Clash Royale**.  \nNuestro clan fue creado el primer día, *siendo el primer clan Español de juego*, con la intención de ser en **top1 de nuestro país**.  \nEste objetivo es nuestra razón de ser, el fin último del clan. Nuestro sistema de organización se *irá mejorando* par ayudar a lograrlo.\n\n## Herramientas\nEl clan cuenta con un **grupo de Whatsapp**, al que se puede acceder cumpliendo los siguientes criterios:  \n\n  - Ser miembro del clan principal, Elite España  \n  - Ser Elder o superior en las canteras.  \nSi cumples estas condiciones, pide acceder a un colider.  \n\nTambién tenemos la **cuenta oficial** del clan en **twitter**, **@EliteEspanaCR**\n\n\n## Normas\nLas normas del clan son simples, y su ejecución también: **No habrá un segundo aviso**.  \nEstá **prohibido**...\n\n- Hacer **comentarios despectivos hacia un compañero,** por cualquiera de los medios de clan. \n- Hacer **comentarios Fascistas, Xenófobos, Homófobos**.\n- Desobedecer una orden directa de un lider, entre las que incluimos:\n  - Peticiones por el bien del clan, como, por ejemplo, dejar de hacer spam.\n  - Peticiones de mejora del esfuerzo, como, por ejemplo, subida de los números de donación.  \n  \nEstas normas se aplicarán a todo el mundo, tenga el grado que tenga.\n\n## Organización\nEn nuestros clanes siempre existirán al menos **5 co-lideres** (5/50), **elegidos de entre los elders mas activos**. Los **elders** se asciende teniendo en cuenta el **numero de donaciones**.  \nTenemos 2 tipos de clanes:  \n\n1. **Clan principal**, **Elite España**, el original. Aquí jugarán los compañeros con mayor número de trofeos. \n  - El **mínimo de copas** en el clan principal se irá actualizando según avance el juego. Los clanes cantera tendrán como objetivo llegar a ese mínimo para que la gente pueda ascender, y dotar de mas trofeos al clan principal. \n  - Si el **numero de copas de un jugador baja 200 copas del mínimo del clan, bajará a las canteras** automáticamente.  \n  - Para que esto no sea un desmadre, cada **Lunes se procederá a subir y bajar jugadores entre el clan principal y las canteras**, y estableceremos un nuevo mínimo.  \n  - En caso de duda, Elder o superior tendrán un trato de favor. Por ejemplo, si la diferecia de trofeos entre subir y bajar es menor a 100, se le podrá dar una semana extra al jugador para que mejore.\n- **Clanes cantera**, numerados, como por ejemplo **Elite España 2**. Sin mínimo, los jugadores que cumplan los criterios del primer clan subirán. Cuando un clan cantera esté lleno, se podrá rear un nuevo clan cantera siguiendo este proceso:\n  - 3 de los 5 co-lideres empezarán el nuevo clan cantera. Entre ellos decidirán quien será el lider.\n  - Una vez creado, en el clan de origen se elegirá 3 nuevos co-lideres. Y se pedirá a parte de los elders que vayan al nuevo can cantera a ayudar, siempre que no se vacíe el clan origen a menos de 25 (1/2 max)\n  - Cuando os co-lideres crea oportuno podra ascender a los 3 co-lideres que faltan en el cla nuevo, de entre los elders que vayan ascediendo.  \n\nPor último, un apunte: **Quien se va...que no vuelva**. No podemos estar con gente dentro-fuera contínuamente."
    })
    .then(() => {
      console.log('finished populating infoclan');
    });
  });

Card.find({}).removeAsync()
  .then(() => {
    Card.createAsync({
      nombre: 'Arrows',
      tipo: 'Spell',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'Bomber',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'Archers',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'Knight',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Training Camp',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'Fireball',
      tipo: 'Spell',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Mini P.E.K.K.A',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Musketeer',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Giant',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Prince',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Baby Dragon',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Skeleton Army',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Witch',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Training Camp',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Spear Goblins',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Goblin Stadium',
      coste: 2,
      comentarios: []
    }, {
      nombre: 'Goblins',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Goblin Stadium',
      coste: 2,
      comentarios: []
    }, {
      nombre: 'Goblin Hut',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Goblin Stadium',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Valkyrie',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Goblin Stadium',
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Lightning',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Goblin Stadium',
      coste: 6,
      comentarios: []
    }, {
      nombre: 'Goblin Barrel',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Goblin Stadium',
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Skeletons',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Bone Pit',
      coste: 1,
      comentarios: []
    }, {
      nombre: 'Minions',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Bone Pit',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'Tombstone',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Bone Pit',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'Bomb Tower',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Bone Pit',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Giant Skeleton',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Bone Pit',
      coste: 6,
      comentarios: []
    }, {
      nombre: 'Balloon',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: 'Bone Pit',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Cannon',
      tipo: 'Building',
      calidad: 'Common',
      arena: 'Barbarian Bowl',
      coste: 6,
      comentarios: []
    }, {
      nombre: 'Barbarians',
      tipo: 'Troop',
      calidad: 'Common',
      arena: 'Barbarian Bowl',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Rocket',
      tipo: 'Spell',
      calidad: 'Rare',
      arena: 'Barbarian Bowl',
      coste: 6,
      comentarios: []
    }, {
      nombre: 'Barbarian Hut',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Barbarian Bowl',
      coste: 7,
      comentarios: []
    }, {
      nombre: 'Rage',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Barbarian Bowl',
      coste: 3,
      comentarios: []
    }, {
      nombre: 'X-Bow',
      tipo: 'Building',
      calidad: 'Epic',
      arena: 'Barbarian Bowl',
      coste: 6,
      comentarios: []
    }, {
      nombre: 'Tesla',
      tipo: 'Building',
      calidad: 'Common',
      arena: "P.E.K.K.A's Playhouse",
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Minion Horde',
      tipo: 'Troop',
      calidad: 'Common',
      arena: "P.E.K.K.A's Playhouse",
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Inferno Tower',
      tipo: 'Building',
      calidad: 'Rare',
      arena: "P.E.K.K.A's Playhouse",
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Hog Rider',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: "P.E.K.K.A's Playhouse",
      coste: 4,
      comentarios: []
    }, {
      nombre: 'Freeze',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: "P.E.K.K.A's Playhouse",
      coste: 4,
      comentarios: []
    }, {
      nombre: 'P.E.K.K.A',
      tipo: 'Troop',
      calidad: 'Epic',
      arena: "P.E.K.K.A's Playhouse",
      coste: 8,
      comentarios: []
    }, {
      nombre: 'Zap',
      tipo: 'Spell',
      calidad: 'Common',
      arena: 'Spell Valley',
      coste: 2,
      comentarios: []
    }, {
      nombre: 'Wizard',
      tipo: 'Troop',
      calidad: 'Rare',
      arena: 'Spell Valley',
      coste: 5,
      comentarios: []
    }, {
      nombre: 'Mirror',
      tipo: 'Spell',
      calidad: 'Epic',
      arena: 'Spell Valley',
      coste: 1,
      comentarios: []
    }, {
      nombre: 'Mortar',
      tipo: 'Building',
      calidad: 'Common',
      arena: 'Royal Arena',
      coste: 6,
      comentarios: []
    }, {
      nombre: 'Elixir Collector',
      tipo: 'Building',
      calidad: 'Rare',
      arena: 'Royal Arena',
      coste: 5,
      comentarios: []
    }, {
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
          var cartas = ['Freeze', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Mortar', 'Elixir Collector', 'Golem'];
          var cartas2 = ['Arrows', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Mortar', 'Elixir Collector', 'Golem'];
          var cartas3 = ['Arrows', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Mortar', 'Elixir Collector', 'Witch'];
          var cartas4 = ['Arrows', 'P.E.K.K.A', 'Zap', 'Wizard', 'Mirror', 'Balloon', 'Witch', 'Golem'];
          var cartas5 = ['Arrows', 'Archers', 'Knight', 'Wizard', 'Mirror', 'Balloon', 'Witch', 'Golem'];
          var newMazo = [];
          var newMazo2 = [];
          var newMazo3 = [];
          var newMazo4 = [];
          var newMazo5 = [];

          function crearMazo(c, m) {
            return new Promise((resolve) => setTimeout(resolve, 0))
            .then(() => {
              var promises = c.map(n =>
                Card.findOneAndUpdate({'nombre': n}, {$inc: { uso: +1 }})
                    .then(carta => carta._id)
              );
              return Promise.all(promises);
            }).then(res =>
              m.concat(res)
            );
          }

          Promise.all([
            crearMazo(cartas, []),
            crearMazo(cartas2, []),
            crearMazo(cartas3, []),
            crearMazo(cartas4, []),
            crearMazo(cartas5, [])
          ]).then(([newMazo, newMazo2, newMazo3, newMazo4, newMazo5]) => {
              User.createAsync({
                  provider: 'local',
                  name: 'Test User',
                  email: 'test@example.com',
                  password: 'test',
                  mazo: newMazo
                }, {
                  provider: 'local',
                  role: 'admin',
                  name: 'Admin',
                  email: 'admin@example.com',
                  password: 'admin',
                  mazo: newMazo2
                }, {
                  provider: 'local',
                  name: 'Pepe',
                  email: 'pepe@example.com',
                  password: 'pepe',
                  mazo: newMazo3
                }, {
                  provider: 'local',
                  name: 'Paco',
                  email: 'paco@example.com',
                  password: 'paco',
                  mazo: newMazo4
                }, {
                  provider: 'local',
                  name: 'Antonio',
                  email: 'antonio@example.com',
                  password: 'antonio',
                  mazo: newMazo5
                })
                .then(() => {
                  console.log('finished populating users');
                  Deck.find({}).removeAsync()
                    .then(() => {
                      User.find({}).then(users => {
                        Deck.createAsync({
                          mazo: users[0].mazo,
                          users: users[0]._id
                        },{
                          mazo: users[1].mazo,
                          users: users[1]._id
                        },{
                          mazo: users[2].mazo,
                          users: users[2]._id
                        },{
                          mazo: users[3].mazo,
                          users: users[3]._id
                        },{
                          mazo: users[4].mazo,
                          users: users[4]._id
                        });
                      })
                      .then(() => {
                          console.log('finished populating deck');
                      });
                    });
                });
          });
        });
    });
  });
