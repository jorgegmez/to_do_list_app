(function(){
  angular
  .module('myApp')
  .service('tareaEmpresaServicio', tareaEmpresaServicio);

  function tareaEmpresaServicio(){
    var tareasEmpresas = [{
     prioridadTarea : 'Media',
     estadoTarea : 'En curso',
     fechaTarea : '02/19/2017',
     nombreTarea : 'Proyecto libreria',
     descripcionTarea : 'Crear una app que permita ver a los usuarior los productos que se venden.',
     costoTarea : '1560',
     empresaTarea : 'Universal',
     industriaEmpresaTarea : 'Papeleria',
     ubicacionEmpresaTarea : "N 9 55' 8.843 y E 84' 1548.14"
   },

   {
     prioridadTarea : 'Alta',
     estadoTarea : 'Pendiente',
     fechaTarea : '02/01/2017',
     nombreTarea : 'Proyecto pizzeria',
     descripcionTarea : 'Crear una app, para que los usuarios puedan, ordenar en linea de una forma mas rapida y segura.',
     costoTarea : '2000',
     empresaTarea : 'PizzaTeca',
     industriaEmpresaTarea : 'Alimenticia',
     ubicacionEmpresaTarea : "N 9 59' 8.943 y E 84' 1598.94"

   },

   {
     prioridadTarea : 'Critica',
     estadoTarea : 'Finalizado',
     fechaTarea : '02/19/2017',
     nombreTarea : 'Proyecto fotos',
     descripcionTarea : 'Desarrolar un sitio web donde el usuario pueda crear una galaria o portafolio de sus fotos',
     costoTarea : '1250',
     empresaTarea : 'Fotofolio',
     industriaEmpresaTarea : 'Fotografia',
     ubicacionEmpresaTarea : "N 95 55' 8.8543 y E 84' 15485.14"

   }];
    var publicAPI = {
      setTareasEmpresas : _setTareasEmpresas,
      getTareasEmpresas : _getTareasEmpresas
    };
    return publicAPI;

    function _setTareasEmpresas(pTareaEmpresa){
      tareasEmpresas.push(pTareaEmpresa);
      almacenarLocalStorage('listaTareas', tareasEmpresas);
      //$window.localStorage["listaTareas"] = JSON.stringify(value);
    }

    function _getTareasEmpresas(){
      var tareas = JSON.parse(localStorage.getItem("listaTareas")),
      listaTareas = '' ;

      if(tareas==null){
        listaTareas = tareasEmpresas;
      }else{
        listaTareas = tareas;
      }

      return listaTareas
    }

  }
  function almacenarLocalStorage (pNombreElemento, pElemento){

    localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

  }

})();
