import angular from 'angular';

export class cofresComponent {

  isAdmin: Function;

  constructor(Auth, $scope, socket, $log, lodash) {
    this.isAdmin = Auth.isAdmin;
    this._ = lodash;
    this.log = $log;


    this.ciclo = [
      '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '3', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '3', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '3', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '2', '1',
      '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '3'
    ];
    this.tres1 = 11;
    this.tres2 = 131;
    this.tres3 = 203;
    this.tres4 = 251;

    this.miCiclo = [];

    this.resultados = [];
  }

  buscar() {
    var sig = true;
    this.resultados = [];

    //creamos los resultados preelimiares
    for(var i in this.ciclo) {
      sig = true;
      var k = i;
      for(var j in this.miCiclo) {
        if (!this._.isEqual(this.ciclo[k], this.miCiclo[j].num)) {
          sig = false;
          break;
        }
        k++;
      }
      if (sig) {
        this.resultados.push({'pos': i, 'res': ''});
      }
    }

    for(var x in this.resultados) {
      if (this.resultados[x].pos < this.tres1) {
        this.resultados[x].res = this.tres1 - this.resultados[x].pos;
      } else if (this.resultados[x].pos < this.tres2) {
        this.resultados[x].res = this.tres2 - this.resultados[x].pos;
      } else if (this.resultados[x].pos < this.tres3) {
        this.resultados[x].res = this.tres3 - this.resultados[x].pos;
      } else {
        this.resultados[x].res = this.tres4 - this.resultados[x].pos;
      }
    }
  }

  addCofre(cofre) {
    if (cofre === 1) {
      this.miCiclo.push({calidad: 'plata', num: cofre});
    } else {
      this.miCiclo.push({calidad: 'oro', num: cofre});
    }
    this.log.info(this.miCiclo);
    if (this.miCiclo.length > 2) {
      this.buscar();
    }
    if (this.miCiclo.length > 7) {
      this.limpiarCofre();
    }
  }

  limpiarCofre() {
    this.miCiclo = [];
    this.resultados = [];
  }
}

export default angular.module('directives.cofres', [])
  .component('cofres', {
    template: require('./cofres.jade'),
    controller: cofresComponent
  })
  .name;
