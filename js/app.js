document.addEventListener('DOMContentLoaded',function() {
    //selecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
   

    //asignar eventos
    inputEmail.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputEmail.addEventListener('focus', validar);

    //realizaamos la funcion Validar ok 
        function validar(e) {
            console.log(e.target.parentElement.nextElementSibling);
            if(e.target.value.trim() === ''){
                //console.log('Esta vacio el Campo ');
                mostrarAlerta(`El campo ${e.target.id}es obligatorio`, e.target.parentElement);   
            }else{
                console.log("Ingreso un caracter");
            }
     }
     function mostrarAlerta(mensaje, referencia){
        //generar alerta en HTML
        const  error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white','p-2','textCenter');

        // console.log(error);
        //inyectar el error al formulario
        formulario.appendChild(error);
        referencia.appendChild(error);
       // formulario.innerHTML = error.innerHTML;


     }

});//cierra el principio ok 
