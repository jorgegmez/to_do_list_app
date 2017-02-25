(function(){
  angular
    .module('myApp')
    .controller('perfilControlador', perfilControlador);
    function perfilControlador(perfilServicio, tareaEmpresaServicio){
      //controlador
      var perfilTCtrl = this;

      function init(){
        perfilTCtrl.listaTareas = tareaEmpresaServicio.getTareasEmpresas();
      }init();


      }
})();
