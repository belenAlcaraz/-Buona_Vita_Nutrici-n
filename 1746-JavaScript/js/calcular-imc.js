var pacientes = document.querySelectorAll('.paciente');

/* Para acceder a una class: usamos un punto(.)
y para acceder a una id: usamos (#) */
/*dentro de querySelector tenemos a --> 'querySelectosAll'*/

for (var i = 0;i<pacientes.length;i++){ /*Parametros del for: 
    la var i = 0 comienza en 0 por la primera posicion o todo comienzo empieza en 0.
    pacientes.length:se usa la propiedad length para tener que evitar en caso de que suba la cantidad de
    pacientes se moficique automaticamente.
    */
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector('.info-imc');

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    //verdadero o  falso --> verdadero
    if(!pesoEsValido){ // el signo: ! es negacion en js
        console.log('Peso incorrecto');
        tdIMC.textContent = 'Peso incorrecto';
        pesoEsValido = false;
        paciente.classList.add('paciente-incorrecto');/*se llama a classList y se usa add para adicionar a esa clase un objeto/


        
        /*ejemplo de cambio de color:
        paciente.style.backgroundColor = 'lightcoral'; 'paciente.style.color=' me permite modificar el color de la fuente,
        para cambiar el color del  fondo se utilizaria 'paciente.style.backgroundColor'*/

    }

    //verdadero o falso --> verdadero
    if (!alturaEsValida){
        console.log('Altura incorrecta');
        tdIMC.textContent = 'Altura incorrecto';
        alturaEsValida = false;
        paciente.classList.add('paciente-incorrecto');
    }

    //verdadero Y verdadero --> verdadero
    // verdadero Y falso --> falso
    //falso y falso --> falso
    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);
        

    }
    /* un operador logico es || y significa o 
    otro operador logico es && simbolizan al y*/
    /* se uso estos console.log para ver en consola
    console.log(paciente);
    console.log(tdPeso);
    console.log(peso);
    console.log(tdAltura);
    console.log(altura);
    console.log(imc);*/

    function calcularIMC(peso,altura){
        var imc = peso / (altura * altura);
        return imc.toFixed(2);/* al imc se le agrega la propiedad toFixed(2), esto es para que tome o imprima solo 2 decimales */
    }
}

function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;    
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;    
    }else{
        return false;
    }
}




