
var nombre= document.getElementById('name'); 
var teléfono= document.getElementById('phone'); 
var email= document.getElementById('email'); 
var Mensaje= document.getElementById('message');

var error= document.getElementById("error");
error.style.color='red';

 
function enviarFormulario(){
    console.log("Enviando formulario...");

    var mensajesError=[]; //arreglo para poder almacenar un mensaje de error que puedan ocurrir al validar un formulario

    if(nombre.value === null || nombre.value=== ''){
        mensajesError.push('Ingresa tu nombre')
        
    }

    if(teléfono.value === null || teléfono.value=== ''){
        mensajesError.push('Ingresa tu teléfono')
    }

    if(email.value === null || email.value=== ''){
        mensajesError.push('Ingresa tu email')
    }
    
    error.innerHTML= mensajesError.join(' , ')

    return false;
}
