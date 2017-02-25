(function(){
  angular
    .module('myApp')
    .controller('ingresosControlador', ingresosControlador);
    function ingresosControlador(ingresosServicio, tareaEmpresaServicio){
      //controlador
      var ingresosCtrl = this;

      function init(){
        ingresosCtrl.listaProyectos = ingresosServicio.getDatosIngresos();
      }init();
      //ingresosServicio.getDatosIngresos();

      }
})();
