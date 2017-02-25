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
  
        $urlRouterProvider.otherwise('/inicio_registo'); //
    }
})();
