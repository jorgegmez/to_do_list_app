(function(){
  angular
  .module('myApp')
  .service('ingresosServicio', ingresosServicio);

  function ingresosServicio(){
    var listaProyectos = [
          empresa1 = {
            nombreEmpresa : 'Universal',
            nombreProyecto : 'Aplicación librería',
            ingreso : '1560'

          },

          empresa2 = {
            nombreEmpresa : 'Spoon',
            nombreProyecto : 'App cafetería',
            ingreso : '1200'

          },

          empresa3 = {
            nombreEmpresa : 'Bufete abogados',
            nombreProyecto : 'Página web',
            ingreso : '1000'

          }
        ];
    var publicAPI = {
      getDatosIngresos : _getListaIngresos
    };
    return publicAPI;

    function _getListaIngresos() {
      var listaLocalStorage = localStorage.getItem("listaTareas");
      return listaLocalStorage;
    }


    function almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }
  }

})();
