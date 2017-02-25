(function(){
  angular
  .module('myApp')
  .service('sesionServicio', sesionServicio);

  function sesionServicio(){
    var usuarios = [];
    var publicAPI = {
      enviarUsuarios : _enviarUsuarios,
      obtenerUsuarios : _obtenerUsuarios
    };
    return publicAPI;


    function _enviarUsuarios(pUsuario){
      usuarios.push(pUsuario);

      localStorageListaUsuarios(usuarios);
    }

    function _obtenerUsuarios(){

      var listaLocal = localStorage.getItem("listaLocalUsuarios");
      if ( listaLocal.toLowerCase() == null){
        usuarios = [];
      }else{
        usuarios = JSON.parse(listaLocal);
      }

      return usuarios;
    }



  function localStorageListaUsuarios(plista){
      localStorage.setItem("listaLocalUsuarios", JSON.stringify(plista));

    }


  }

})();
