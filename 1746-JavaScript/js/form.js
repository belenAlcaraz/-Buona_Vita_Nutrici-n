/* ejemplos con fines academicos:
var titulo = document.querySelector('.titulo');
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = 'Buena Vida Nutricion';
----------------------------------------------------------
la etiqueta query.Selector es un nexo o puente que conecta el html con el js
al utilizar console.log --> podemos visualizar el titulo en la consola.
console.log(titulo); ---> nos permite visualizar el titulo
console.log(titulo.textContent) --> nos permite imprimir solo el contenido del mismo*/

var botonAdicionar = document.querySelector("#adicionar-paciente");
  
botonAdicionar.addEventListener('click',function(event){ /*addEventListener es para capturar un evento.dentro
    puede ir lo que se llama una "funcion anonimas":las cuales no tienen nombres;generalmente son muy
    utilizadas con los eventos,ayudan a reducion codigo y a tener un mayor entendimiento de que realizan los
    eventos*/
    event.preventDefault(); //"event.preventDefaul, --> previene lo que pasa con ese boton(que era cue se cargaba la pag una y otra vez)
    
    var form = document.querySelector('#form-adicionar');
    var paciente = capturarDatosPaciente(form);
    
   
    var errores = validarPaciente(paciente);
  

    if(errores.length > 0){
      exhibirMensajesErrores(errores);
      return;    // Aquí el return es vacio, el if no tiene return
    }
        
    adicionarPacienteEnLaTabla(paciente);
    form.reset();//Sirve para limpiar las casillas que ingresan los datos
    
    var mensajesErrores = document.querySelector('#mensajes-errores');
    mensajesErrores.innerHTML = '';
});

function adicionarPacienteEnLaTabla(paciente){
  var pacienteTr = construirTr(paciente); 
  var tabla = document.querySelector('#tabla-pacientes');
  tabla.appendChild(pacienteTr);
}


function capturarDatosPaciente(form){
  //capturando los datos del formulario
  /*Lo siguiente es una clase, se la crea haciendo una var 
  y lo que va adentro va sin el (var), sin los (=) y sin el (;)
  se remplaza por (:) y (,) */
  var paciente = {
    nombre:form.nombre.value,
    peso:form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value,form.altura.value) //va sin la coma (el ultimo va sin coma)
  }
  return paciente;
 
}

/*Clases y Objetos:
Las clases yo creo una abstracción de un concepto general en el cual identifico características comunes entre los objetos.
(Y haciendo uso de la clase, ya puedo crear objetos.).
Los objetos, es la instancia o la llamada a cada una de esas clases, ya representando algo del mundo real. */

function construirTr(paciente){
 
  var pacienteTr = document.createElement ('tr');//RECORDAR: document hacer referencia a todo el html!
  pacienteTr.classList.add('paciente');
    
  /*Funcion "AppendChild":es como decirle 'estoy asignando este hijo para que que forme parte de ti'*/
  pacienteTr.appendChild(construirTd(paciente.nombre,'info-nombre'));
  pacienteTr.appendChild(construirTd (paciente.altura,'info-peso'));
  pacienteTr.appendChild(construirTd(paciente.peso,'info-altura'));
  pacienteTr.appendChild(construirTd(paciente.gordura,'info-gordura'));
  pacienteTr.appendChild(construirTd(paciente.imc,'info-imc'));

  return pacienteTr;
}

function construirTd(dato,clase){
  var td = document.createElement('td'); 
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

function validarPaciente(paciente){
  var errores = []  

  if(paciente.nombre.length == 0){
    errores.push('El nombre no puede estar vacio');
  }

  if(paciente.peso.length == 0){
    errores.push('El peso no puede estar vacio');
  }

  if(paciente.altura.length == 0){
    errores.push('La altura no puede estar vacio');
  }

  if(paciente.nombre.length == 0){
    errores.push('el %gordura no puede estar vacio');
  }

  if(!validarPeso(paciente.peso)){
    errores.push('El peso es incorrecto');
  }

  if(!validarAltura(paciente.altura)){
    errores.push('La altura es incorrecta');
  }
  return errores;
}

function exhibirMensajesErrores(errores){
  var ul = document.querySelector('#mensajes-errores');
  ul.innerHTML = '' // es para limpiar la lista

  errores.forEach(function(error){
      var li = document.createElement('li');
      li.textContent = error;
      ul.appendChild(li);
  });

}