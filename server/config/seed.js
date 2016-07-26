/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Infoclan from '../api/infoclan/infoclan.model';

Thing.find({}).remove()
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
    "clanTexto" : "Nuestro clan fue creado el primer día, *siendo el primer clan Español del juego*.  \nPretendemos ser una **comunidad de jugadores, multi-clan**, con igualdad entre nuestros jugadores *(ver normas)*    \nNuestros clanes oficiales son: **Elite España (#LGJQ), EliteEspaña EVO (#YPPVUJR), EliteEspaña GEN (#8QRQ9CY), EliteEspaña ZEN (#9CU2YLL), EliteEspaña VIP (#Y2JVPJ2) y EliteEspaña V2P (#Y8U2GGJ)**.  \nNuestros clanes tienen **diferentes formulas organizativas**, para **adaptarse a las necesidades de la comunidad**. Por ejemplo, **EE1** fue creado con la intención de luchar por el **top de nuestro país**. Este objetivo es el fin último del clan, y su sistema de organización busca lograrlo. A su vez, **VIP** es una cantera, donde formar y ayudar a avanzar a sus jugadores a ser más competitivos y progresar en el juego de forma más eficaz.  \nCada vez que hay un cambio en la organización del clan, se avisa a todos nuestros clanes, con tiempo para ser comentado y votado por la comunidad.  \n\n# Normas\nLas normas del clan son simples, y su ejecución también: **No habrá un segundo aviso**.  \nEstá **prohibido**...\n\n- Hacer **comentarios despectivos hacia un compañero,** por cualquiera de los medios de clan. \n- Hacer **comentarios Fascistas, Xenófobos, Homófobos**.\n- Hacer **spam/publicidad**, incluído clanes externos a nuestra comunidad.\n- Desobedecer una orden directa de un colíder, entre las que incluimos:\n  - Peticiones por el *bien del clan*, como, por ejemplo, dejar de hacer spam.\n  - Peticiones de *mejora del esfuerzo*, como, por ejemplo, subida de los números de donaciones.  \n\n**El uso de telegram es *OBLIGATORIO* en toda la comunidad**, salvo caso extraordinario con permiso de los colideres). Telegram es una aplicación que nos permite una mejor comunicación entre jugadores de los clanes de la comunidad e indispensable para poder participar en torneos internos.\n\n**Salidas/Entradas**: Andar saliendo y entrando queda **totalmente prohibido sin autorización** expresa de un colíder o el líder del clan. Para garantizar la estabilidad del clan no se permitirán las *'visitas'* a otros clanes y, en caso de estar justificada una salida, siempre se notificará primero a un admin del clan.  \nEsto **incluye participación en torneos que requieran salir del clan**: Hay torneos de poca calidad o que tienen un funcionamiento con impacto negativo en la comunidad *(ligas que obligan a estar saliendo del clan cada poco tiempo, torneos montados por clanes de mala reputación, etc.)*, que serán vetados a nivel global. **Si vas a participar en un torneo, avisa *CON TIEMPO SUFICIENTE* a un colider para que te exima de cumplir esta norma**. **Los torneos *\"permitidos\"* serán anunciados para que toda la comunidad participe si lo desea**.  \n  \nRespecto a la repetición de peticiones de donación, hemos decidido eliminar la norma que lo prohibía. Es demasiado trabajo, y una gran fuente de problemas, moderar este tema; no tiene sentido generar problemas por un tema que debería caer por lógica.\n\n# Clanes y Organización  \n## **Elite España [EE1:#LGJQ]**\nNuestro clan bandera, siempre **buscará tener los mejores jugadores** posibles *(nº de copas)*. Si existen jugadores que cumplan el mínimo *\"del uno\"* en los demás clanes, se les pedirá que suban.  \nEs **prioridad para toda la comunidad que EE1 se mantenga en la lucha por el top**.  \n\n- Debido a la ideosincracia própia de la liga leyenda, cada Lunes de post-temporada se reinician las copas de todo el clan, bajando el mínimo de manera extraordinaria. Debido a este caso especial, EE1 ficha por 49 solo la segunda semana: **La primera semana se aceptarán jugadores por histórico** *(Siendo el mínimo aproximadamente el numero de copas que tenía el top25 el domingo anterior)*.  \n- Para no tener problemas a la hora de administrar estos fichajes, hemos eliminado los veteranos. Todo jugador es considerado igual al resto. **Sólo los colideres pueden aceptar un fichaje.**\n\n\n## **Sistema 49: La organización base**  \nTodos nuestros clanes, *salvo caso de fuerza mayor*, siguen el **sistema 49**:  \n\n- Los clanes se mantienen en **49 jugadores**, para poder **recibir peticiones de ingreso**.  \n- Si una petición de ingreso (externa, desde otro clan EE, etc.) tiene **mas copas que el top 25 del clan**, se acepta.  \n- Si el clan llega a 50 jugadores, **el jugador en la última posición es *expulsado* del clan**.  \n- Si un jugador tiene una **cuota de donaciones *MUY BAJA***, saldrá expulsado como si fuese el jugador 50º.\n\nEs vital **diferenciar entre *\"Expulsado del clan\"* y *\"Expulsado de la comunidad\"***.  \nLos jugadores que, por ejemplo, salen de EE1, si cumplen el mínimo para entrar *(recuerda: >top25)*, pueden pedir acceder a cualquier otro clan de la comunidad. Incluso en el extremo de no llegar al mínimo de los clanes VIP, aunque se esté en un clan extracomunitario se puede seguir formando parte de la comunidad EE, mediante el uso de los canales de Telegram, la web, y demás herramientas.  \n\n**Las expulsiones no tendrán por qué avisarse por privado**, puesto que, una vez leídas las normas, se entiende que **todos los jugadores saben que si se encuentran sin clan, es que han *\"salido por 49\"*, y pueden contactar por telegram con cualquier colider para pedir ayuda**.\n\nNuestra comunidad tiene **clanes para cada rango de trofeos**, y actividad. Y si descubrimos un area que no cubrimos...se crea! :)  \n*...siempre y cuando tengamos suficientes colideres para administrarlo!*\n\n\n## **Clanes VS: Guerra de Clanes**  \nEste sistema busca avanzar mediante la inclusión de un sistema de mini juegos *(desde ahora simplemente 'VS')* entre los clanes.\n**EliteEspaña EVO (#YPPVUJR), EliteEspaña GEN (#8QRQ9CY), y EliteEspaña ZEN (#9CU2YLL)** 'se enfrentan entre sí' por ser el clan con mayor progresión. Este sistema se alternará con el *sistema 49*:  \n\n- **Semana VS**: El clan queda cerrado a salidas del clan. Se tomará nota del número de copas y donaciones de todos los miembros que entren en competición VS y, durante la semana, se instará a mejorar las puntuaciones y a superar sus registros de la semana anterior ya que, llegado el fin de la semana, se compararán resultados y se puntuará en función de los datos obtenidos:  \n  - Las copas de los 10 primeros  \n  - Las copas de los 10 últimos  \n  - Donaciones de los 10 primeros  \n  - Donaciones de los 10 últimos  \n  - Incremento de copas generales del clan  \n  - Incremento de copas donaciones del clan  \n  - Jugador con mayor progresión copas y donaciones   \n  - Clan con mayor progresión en copas y donaciones  \n- **Sistema de Donaciones**: Cada semana se tomará nota de las donaciones de cada jugador y, según estipule cada clan, el jugador que esté por encima de un número de donaciones ascenderá a veterano. El jugador que se encuentre por debajo de el corte de donaciones conllevará las siguientes consecuencias:  \n  - Si es 'veterano' se le degradará a 'miembro'. Si es 'miembro' se avisará de inactividad.  \n  - Si es 'miembro' avisado, se le expulsará. Si es 'veterano' degradao a miembro, se avisará de inactividad.  \n  - 'Veterano' degradado y avisado, se le expulsará.  \n- **Sistema Draft y Balanceo de clanes**: Gracias a este sistema pretendemos hacer los tres clanes VS más competitivos en el ranking español, es decir, los fichajes nuevos de jugadores serán drafteados para que el clan con menor número de copas de los tres logre subir posiciones y tener así lo más alto posibles a los clanes VS.\n  - El balanceo de clanes funciona de forma que los jugadores más altos de copas de los clanes VS pasarán a la plantilla de Elite España 1, teniendo así bien nutrido a nuestro buque insignia **Elite España** con los mejores jugadores de la comunidad. Dado que no salen por Sistema 49, los jugadores que salgan de EE1 pasarán al clan VS del jugador que lo sustituye siendo también balanceados de esta forma. \n\n## **Clanes VIP: Nuestras canteras**  \nEn el clan **EliteEspaña VIP (#Y2JVPJ2) y EliteEspaña V2P (#Y8U2GGJ)** se seguirá el **formato clásico de los clanes cantera**: Desde un **mínimo de 2000 copas**, y siguiendo *\"49\"*, el clan irá formando jugadores con la intención de que pasen a formar parte de los clanes *\"VS\"* una vez cumplan su\nmínimo de entrada. Se usará el grado veterano para aquellos jugadores que se ganen la posición (antiguedad en el clan, fichajes extraordinarios, comportamiento o donaciones ejemplares), teniendo un trato preferencial en caso de que su puesto en el clan peligre.\n\n# Herramientas\nEl clan cuenta con varios grupos de **Telegram**, siendo 'el bar' el canal público desde el que puedes pedir entrar a los demás.  \nUsa este link para unirte: <https://telegram.me/EEtelegram>\n\nTambién tenemos la **cuenta oficial** del clan en **twitter**, **@EliteEspanaCR**"
  })
  .then(() => {
    console.log('finished populating infoclan');
  });
});

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
