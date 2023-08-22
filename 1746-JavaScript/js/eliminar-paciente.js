var tabla = document.querySelector('#tabla-pacientes');

tabla.addEventListener('dblclick',function(event){ //"dblclick": es para el doble click
  event.target.parentNode.classList.add('fadeOut'); 
  setTimeout(function(){ //el "setTimeout" es para dar intervalos de tiempo a la accion
  event.target.parentNode.remove(); // "event.target" es el ejecutor del evento,especificamente donde se hace clic
  },500);
});


/*pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick',function(){//
      this.remove();//this (esto)es para eliminar
    }); 
});*/

/*Event bubbling: la caract principal es la propagacion de eventos
*/
