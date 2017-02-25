(function(){
  angular
    .module('myApp')
    .controller('tareaEmpresaControlador', tareaEmpresaControlador);
    function tareaEmpresaControlador(tareaEmpresaServicio){

      var tareaEmpresaCtrl = this;

      function init(){
        tareaEmpresaCtrl.tareasEmpresas = tareaEmpresaServicio.getTareasEmpresas();
      }init();
      tareaEmpresaCtrl.saveTarea= function(){

        var nuevaTareaEmpresa ={
          nombreTarea : tareaEmpresaCtrl.nombreTarea,
          descripcionTarea : tareaEmpresaCtrl.descripcionTarea,
          fechaTarea : tareaEmpresaCtrl.fechaTarea,
          prioridadTarea : tareaEmpresaCtrl.prioridadTarea,
          estadoTarea : tareaEmpresaCtrl.estadoTarea,
          costoTarea : tareaEmpresaCtrl.costoTarea,
          empresaTarea : tareaEmpresaCtrl.nombreEmpresaTarea,
          industriaEmpresaTarea : tareaEmpresaCtrl.industriaEmpresaTarea,
          ubicacionEmpresaTarea : tareaEmpresaCtrl.ubicacionEmpresaTarea
        }


        tareaEmpresaServicio.setTareasEmpresas(nuevaTareaEmpresa);

      }



    }

})();
