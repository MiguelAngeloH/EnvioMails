document.addEventListener('DOMContentLoaded',function() {
          const email={
            email:'',
            asunto:'',
            mensaje:''
          }
         // console.log(email);

  
  //selecionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type = "submit"]');
    const btnReset = document.querySelector('#formulario button[type = "reset"]');
    const spiners = document.querySelector('#spiners');

   

    //asignar eventos
    inputEmail.addEventListener(  'input',validar);  
    inputAsunto.addEventListener( 'input', validar);
    inputMensaje.addEventListener('input', validar);
    
    

    btnReset.addEventListener( 'click',function(e){
      e.preventDefault();
      
      email.email='';
      email.asunto='';
      email.mensaje='';
      
      formulario.reset();
      comprobarEmail();

});

          function enviarEmail(e){
              e.preventDefault();
             // console.log('enviando...');
             spiners.classList.add('flex');
             spiners.classList.add('hidden');
             
             setTimeout(() => {
             spiners.classList.remove('flex');
             spiners.classList.add('hidden');
             }, 3000);


          }


  
    //realizaamos la funcion Validar ok 
        function validar(e) {
          //  console.log(e.target.parentElement.nextElementSibling);
            if(e.target.value.trim() === ''){
               // console.log('Esta vacio el Campo ');
                mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
                email[e.target.name]='';
                comprobarEmail();   
            return;
            }

            if (e.target.id ==='email' && !validarEmail(e.target.value)) {
              mostrarAlerta('El email no es valido', e.target.parentElement);
              email[e.target.name]='';
              comprobarEmail();
              return;
            } 
            
            limpiarAlerta(e.target.parentElement);
            //console.log("Despues del IF");

            //Asignar los valores ok ok 
            email[e.target.name] =e.target.value.trim().toLowerCase();
            console.log(email);

            //comporobar email
            comprobarEmail();
            







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
       //usuario@dominio

      }

          function comprobarEmail(){            
            if (Object.values(email).includes('')) {
              btnSubmit.classList.add('opacity-50');
                  btnSubmit.disabled = true; 
                  return;
            }
                  btnSubmit.classList.remove('opacity-50');
                  btnSubmit.disabled = false; 
          }



      });//cierra el principio ok 
