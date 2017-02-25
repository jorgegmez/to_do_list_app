angular
 .module('myApp')
 .service('perfilServicio', perfilServicio);

 function perfilServicio(){
   var listaTareas = [

       ];

   var publicAPI = {
     getDatosTareas : _getDatosTareas
   };
   return publicAPI;

   function _getDatosTareas() {
     return listaTareas;
   }

   /*function almacenarLocalStorage (pNombreElemento, pElemento){

     localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));*/

   };
