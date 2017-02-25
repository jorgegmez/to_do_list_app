(function(){
  angular
    .module('myApp')
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider

      .state('registroysesion',{
        url: '/inicio_registo',
        templateUrl: 'componentes/registro/inicio_registro.vista.html',
        controller: 'registro_sesionControlador',
        controllerAs: 'regSesionCtrl'
      })
      .state('registroysesion.inicioSesion',{
        templateUrl: 'componentes/registro/inicioSesion/inicioSesion.view.html',
        //controller: 'inicioSesionControlador',
        //controllerAs: 'inicioSesionCtrl'
      })
      .state('registroysesion.registro',{
        templateUrl: 'componentes/registro/registro/registro.view.html'
      })
        .state('tareaEmpresa',{
          url: '/tareaEmpresa',
          templateUrl: 'componentes/tareasEmpresas/tareasEmpresas.view.html',
          controller: 'tareaEmpresaControlador',
          controllerAs: 'tareaEmpresaCtrl'
        })
        .state('perfil',{
          url: '/perfil',
          templateUrl: 'componentes/perfil/perfil.vista.html',
          controller: 'perfilControlador',
          controllerAs: 'perfilTCtrl'
        })
        .state('ingesos',{
          url: '/ingresos',
          templateUrl: 'componentes/ingresos/tabla.vista.html',
          controller: 'ingresosControlador',
          controllerAs: 'ingresosCtrl'
        })



        $urlRouterProvider.otherwise('/inicio_registo');
    }
})();
