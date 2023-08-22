var botonBuscar = document.querySelector('#buscar-paciente');

botonBuscar.addEventListener('click',function(){
    console.log('buscando pacientes...');
    var xhr = new XMLHttpRequest;
    xhr.open('GET','https://alura-es-cursos.github.io/api-pacientes/pacientes.json');
    xhr.addEventListener('load',function(){
       var errorAjax = document.querySelector('#error-ajax');
       if(xhr.status == 200){
            errorAjax.classList.add('invisible');
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente){
                 adicionarPacienteEnLaTabla(paciente);
            });
       }else{
            errorAjax.classList.remove('invisible');
            console.log(xhr.status);
            console.log(xhr.responseText);
       }

    });
    xhr.send()
});

/*"XMLHttpRequest":este objeto ayuda intercambiar dato entre la web y servidores
Y ayuda a actualizar las paginas
el metodo (open) es como abrir el navegador; (get) es para obtener y lo demas es el vinculo que necesito,despues (send)*/