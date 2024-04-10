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
           // console.log(e.target.parentElement.nextElementSibling);
            if(e.target.value.trim() === ''){
                //console.log('Esta vacio el Campo ');
                mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);   
            return;
            }

            if (e.target.id ==='email' && !validarEmail(e.target.value)) {
              mostrarAlerta(`El email no es valido`, e.target.parentElement);
              return;
            } 
            limpiarAlerta(e.target.parentElement);
            //console.log("Despues del IF");
     }

     function mostrarAlerta(mensaje, referencia){
        //comprueba si ya existe una alerta
        //const alerta = referencia.querySelector('.bg-red-600');
        //if(alerta){
          //  alerta.remove();
          //ahora solo mandamos llamar la funcion ok 
          limpiarAlerta(referencia);
        

        //generar alerta en HTML
        const  error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white','p-2','text-center');

        // console.log(error);
        //inyectar el error al formulario
        //formulario.appendChild(error);
        referencia.appendChild(error);
       // formulario.innerHTML = error.innerHTML;
     }

     //creamos la funcion limpiar alerta 
     function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
     }

     function validarEmail(email){
      //esta es una expresion regular o k ok ok
       const regex = /^\W+([.-_+]?\W+)*@\W+([.-]?\W+)*(\.\W{2,10})+$/
       const resultado = regex.test(email);
       //console.log(resultado);  
       return resultado;   

      }
      });//cierra el principio ok 
