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
      homeTexto: "<p></p><h1>Estamos en BETA!...</h1><h3>Bienvenido a nuestra Web App</h3><p>Aquí podrás encontrar toda la <b>información sobre nuestro clan, sus normas y funcionamiento</b></p><p>Aún no está preparado para ser testado nuestro ranking de mazos, así como el sistema de torneos, pero será abierto en breve <i>(si al vago del dev le da por trabajar, en vez de buscar reproducirse (• ε •) )</i></p><p>Si quieres recomendar mejoras, dínoslas en <a href=\"http://feathub.com/arkdelkaos/EECR\">FeatHub</a>. Si has encontrado errores en la app, el diseño, o quieres ayudarnos con el código, usa <a href=\"https://github.com/arkdelkaos/EECR/issues\">Github - EECR/issues</a></p><p></p>",
      clanTexto : "Nuestro clan fue creado el primer día, *siendo el primer clan Español del juego*.  \nPretendemos ser una **comunidad de jugadores, multi-clan**, con igualdad entre nuestros jugadores *(ver normas)*    \n**Cada clan puede decidir un sistema de organización diferente**, si sus líderes así lo deciden. Por ejemplo, **EE1** fue creado con la intención de ser en **top1 de nuestro país**. Este objetivo es el fin último del clan, y su sistema de organización busca lograrlo. A su vez, **VIP** prefiere un sistema que mantenga la comunidad antes que las coronas.  \nEstas decisiones son avisadas a los miembros de cada clan, con tiempo para ser comentadas y votadas por la comunidad.  \n\n### Herramientas\nEl clan cuenta con varios grupos de **Telegram**, siendo 'el bar' el canal público desde el que puedes pedir entrar a los demás.  \nUsa este link para unirte: <https://telegram.me/EEtelegram>\n\nTambién tenemos la **cuenta oficial** del clan en **twitter**, **@EliteEspanaCR**\n\n## Normas\nLas normas del clan son simples, y su ejecución también: **No habrá un segundo aviso**.  \nEstá **prohibido**...\n\n- Hacer **comentarios despectivos hacia un compañero,** por cualquiera de los medios de clan. \n- Hacer **comentarios Fascistas, Xenófobos, Homófobos**.\n- Desobedecer una orden directa de un líder, entre las que incluimos:\n  - Peticiones por el bien del clan, como, por ejemplo, dejar de hacer spam.\n  - Peticiones de mejora del esfuerzo, como, por ejemplo, subida de los números de donación.  \n  \nEstas normas se aplicarán a todo el mundo, tenga el grado que tenga.\n\n#Clanes y Organización  \n\n##**[SISTEMA 3000]**  \n- Este sistema es la evolución del sistema 49 que se usa en los demás clanes, y que se queda corto cuando se tiene todo el clan en liga *'leyenda'*.  \n- **Elite España (#LGJQ) y Elite España 2 (#2YGP9)**  se convierten en un solo clan, con un solo grupo de administradores, y un solo canal de chat de telegram (obligatorio). **Todos los jugadores de ambos clanes pertenecen 'al 1', y se consideran del mismo clan**.  \n  - **EE2 será la puerta de entrada de nuevos fichajes**.\n  - Los **ascensos y descensos** se harán manualmente mediante la interacción de nuestros colideres, el primer lunes (post-temporada) y el siguiente lunes (mitad de temporada). \n     - Los ascensos/descensos post-temporada se harán respecto a la posición en la liga legendaria; los ascensos de mitad de temporada se harán por número de copas actual. Una vez avisado, el jugador tiene 24h para pedir la entrada en el clan correspondiente.  \n  - Si EE2 se llena, pero no hay nadie bajo 2800 (200 copas como colchón de seguridad), se parará de fichar. Hablando en plata, si bajas de 2800 se te sacará (recuerda que puedes contactar con un colider para pedir ser recolocado en otro clan EE).  \n  - Cualquier jugador que no siga el ritmo o de problemas, independientemente de copas o nivel, será transladado a otro de nuestros clanes, o expulsado.  \n- **Si un jugador requiere salir para jugar torneos**, debe avisar a un colider para recibir información.  \n- **Las donaciones pueden sigificar expulsión** si incumplen la siguiente regla: **NO PEDIR LO MISMO QUE YA ESTÁ PEDIDO (en cola)**. La primera vez que se incumpla, se dará un aviso. La segunda significará expulsión.  \n\n## **[SISTEMA VS]: 'CLANES VERSUS'**  \nEste sistema busca ayudar a avanzar a los jugadores, incluyendo un sistema de mini juegos *(desde ahora simplemente 'VS')* entre los clanes. Telegram es obligatorio para poder participar en VS.  \n **EliteEspaña EVO (#YPPVUJR), EliteEspaña GEN (#8QRQ9CY), y EliteEspaña ZEN (#9CU2YLL)** 'se enfrentan entre sí' por ser el clan con mayor progresión. Este sistema se alternará con el sistema 49:  \n\n- **Semana 49**: El clan queda abierto a fichajes mediante solicitud. Cada clan estipulará el corte según las fluctuaciones de jugadores teniendo en cuenta siempre el número de copas del jugador nº25 del clan. En el caso de que un candidato solicite entrar con más copas que el corte estipulado, el jugador nº49 saldrá del clan dejando su plaza al nuevo jugador. El objetivo de este sistema es hacer que los jugadores se esfuercen por mantener sus copas altas y a ser competitivos para llevar el clan a lo más alto. Aún así, siempre se tendrá en cuenta antigüedad, actividad (donaciones) y membresía en telegram a la hora de que salga un jugador u otro.  \n- **Semana VS**: El clan queda cerrado a salidas del clan. Se tomará nota del número de copas y donaciones de todos los miembros que entren en competición VS y, durante la semana, se instará a mejorar las puntuaciones y a superar sus registros de la semana anterior ya que, llegado el fin de la semana, se compararán resultados y se puntuará en función de los datos obtenidos:  \n  - Las copas de los 10 primeros  \n  - Las copas de los 10 últimos  \n  - Donaciones de los 10 primeros  \n  - Donaciones de los 10 últimos  \n  - Incremento de copas generales del clan  \n  - Incremento de copas donaciones del clan  \n  - Jugador con mayor progresión copas y donaciones   \n  - Clan con mayor progresión en copas y donaciones  \n- **Sistema de Doble Petición**: Gracias a este sistema, evitaremos la saturación de peticiones de cartas 'de moda'. Es decir, para evitar que haya varias peticiones de una misma carta, se estipula que, habiendo una petición activa y sin rellenar, no se podrá pedir esa misma carta hasta que no se haya rellenado la primera. Cada clan estipulará de manera interna cuales son las cartas vetadas.  \n- **Sistema de Donaciones**: Cada semana se tomará nota de las donaciones de cada jugador y, según estipule cada clan, el jugador que esté por encima de un número de donaciones ascenderá a veterano. El jugador que se encuentre por debajo de el corte de donaciones conllevará las siguientes consecuencias:  \n  - Si es 'veterano' se le degradará a 'miembro'. Si es 'miembro' se avisará de inactividad.  \n  - Si es 'miembro' avisado, se le expulsará. Si es 'veterano' degradao a miembro, se avisará de inactividad.  \n  - 'Veterano' degradado y avisado, se le expulsará.  \n- **Sistema de Salidas/Entradas**: El tema de salidas y entradas queda totalmente prohibido sin la autorización expresa de un colíder o el líder del clan. Para garantizar la estabilidad del clan no se permitirán las 'visitas' a otros clanes y, en caso de estar justificada una salida, siempre se notificará primero a un admin del clan.  \n- **Organigramas de clan**: Los clanes VS tienen un sistema piramidal a través del cual se gestiona todo lo que sucede en los clanes:  \n  - *Líder*: Máxima autoridad del clan y jugador de la máxima confianza del clan. Su palabra es ley dentro de cada clan.  \n  - *Colíder*: Administradores y gestores del clan, ojos y oídos del líder. Su labor será aplicación de normas, mediación en conflictos y motivación de los jugadores. Ellos son a los que hay que acudir en caso de duda y/o problema dentro del clan.  \n  - *Veteranos VIP*: Veteranos de confianza demostrada que son los únicos autorizados a 'Aceptar' solicitudes de ingreso al clan.  \n\n\n## **[SISTEMA VIP] CLAN VIP**  \n En el clan **EliteEspaña VIP (#Y2JVPJ2)** se tiene un ritmo más pausado, y se le da más importancia a la antigüedad (vip) y a comportarse como un adulto, que a ninguna otra opción. Aquí pueden tomarse un descanso los jugadores veteranos que por falta de tiempo, problemas familiares o laborales, etc, lo necesitan.  \n Se tiene en cuenta un mínimo de actividad, pero solo se sacaría un compañero en casos extremos.  \n\n***  \nSobre las **donaciones**, en general: Debemos intentar pedir con cabeza; **si un compañero está en cola para recibir su donación**, no **debemos pedir mas de lo mismo hasta que él lo reciba**. Este caso se ha hado bastante con magos y bárbaros, por ejemplo. Además es lógico pesar que si hay algo en cola, probablemente hay mucha demanda y/o poca oferta, por lo que pedir de lo mismo es contraproducente."
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
                          owner: {
                            userId: usr1._id,
                            name: usr1.name
                          },
                          info: 'Prueba 1',
                          active: true,
                          open: true,
                          official: true,
                          size: '16',
                          clan: 'EE1',
                          users: [{
                            userId: usr1._id,
                            name: usr1.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          }],
                        },{
                          name: 'Prueba 2',
                          owner: {
                            userId: usr2._id,
                            name: usr2.name
                          },
                          info: 'Prueba 2',
                          active: true,
                          open: false,
                          size: '32',
                          official: true,
                          clan: 'EE2',
                          chat: [{
                            userId: usr1._id,
                            nick: usr1.name,
                            msg: 'Prueba 1'
                          },{
                            userId: usr2._id,
                            nick: usr2.name,
                            msg: 'Prueba 2'
                          },{
                            userId: usr3._id,
                            nick: usr3.name,
                            msg: 'Prueba 3'
                          },{
                            userId: usr1._id,
                            nick: usr1.name,
                            msg: 'Prueba 1-2 ojfgafgiabfiwbfawfiwfiwvfiwafvliawfvaiwlfvfvawlfvalwifvwaif                             fwabfiawfvilawfvwailfv\nawilfvwailfvawilfvawfliwavf'
                          }],
                          users: [{
                            userId: usr3._id,
                            name: usr3.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr3._id,
                            name: usr3.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr3._id,
                            name: usr3.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr3._id,
                            name: usr3.name
                          },{
                            userId: usr1._id,
                            name: usr1.name
                          }],
                        },{
                          name: 'Prueba 1.2',
                          owner: {
                            userId: usr3._id,
                            name: usr3.name
                          },
                          info: 'Prueba 1.2',
                          active: true,
                          open: true,
                          size: '16',
                          official: true,
                          clan: 'EE1',
                          users: [{
                            userId: usr3._id,
                            name: usr3.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          }],
                        },{
                          name: 'Inactivo 1',
                          owner: {
                            userId: usr3._id,
                            name: usr3.name
                          },
                          info: 'Inactivo 1',
                          active: false,
                          open: true,
                          size: '8',
                          official: true,
                          clan: 'EE4',
                          users: [{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          }],
                        },{
                          name: 'No Oficial 1',
                          owner: {
                            userId: usr3._id,
                            name: usr3.name
                          },
                          info: 'Prueba No Oficial 1',
                          active: true,
                          open: false,
                          size: '32',
                          official: false,
                          clan: 'EE3',
                          users: [{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr1._id,
                            name: usr1.name
                          },{
                            userId: usr3._id,
                            name: usr3.name
                          }],
                        },{
                          name: 'Aserejéjadejémejebeedurejebere',
                          owner: {
                            userId: usr2._id,
                            name: usr2.name
                          },
                          info: 'Prueba Borjonuda Tocahuevos 1',
                          active: true,
                          open: true,
                          size: '8',
                          official: true,
                          clan: 'EE2',
                          users: [{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          },{
                            userId: usr2._id,
                            name: usr2.name
                          }],
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
