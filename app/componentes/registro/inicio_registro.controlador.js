(function(){
  angular
    .module('myApp')
    .controller('registro_sesionControlador',  registro_sesionControlador);

    function registro_sesionControlador(sesionServicio){

      var regSesionCtrl = this;

      function init(){
        regSesionCtrl.usuarios = sesionServicio.obtenerUsuarios();
      }init();

      regSesionCtrl.save= function(){

        var nuevoUsuario ={
          nombre : regSesionCtrl.nombre,
          fechaNacimiento : regSesionCtrl.fechaNacimiento,
          edad : regSesionCtrl.edad,
          correo : regSesionCtrl.correo,
          contrasenna : regSesionCtrl.contrasenna
        }


        sesionServicio.enviarUsuarios(nuevoUsuario);

      }




      regSesionCtrl.validar= function(){


        var usuariosRegistrados = sesionServicio.obtenerUsuarios();


            for (var i = 0; i < usuariosRegistrados.length; i++) {
            if ( regSesionCtrl.usuario == usuariosRegistrados[i].nombre && regSesionCtrl.contrasennaVal == usuariosRegistrados[i].contrasenna){

            window.location.href = '/#/perfil';

           }

        }

    }
    }



})();
