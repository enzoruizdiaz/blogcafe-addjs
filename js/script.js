// querySelector

const heading = document.querySelector('.header__texto h2'); // 0 o 1 elementos
 heading.textContent = 'Nuevo Heading';
 

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

enlaces[0].textContent = 'Nuevo texto p/enlace';
// enlaces[0].classList.remove('navegacion__enlace');
enlaces[0].classList.add('esto-esunaclase');




// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

//gener un nuevo enlace

const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agreagarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//eventos
/*
console.log(1);

window.addEventListener('load', function() { // load espera a que el javascript  css  y lso archgivos que dependen del html esten listos.

    console.log(2);
} );

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // solo espera que se descargue el html
    console.log(4);
});


console.log(5);

function imprimir(){
    console.log(2);
}; */

/*window.onscroll = function(e){
    console.log(e);
    console.log('scrolling...');
}; */


//seleccionar elementos y asociarles un evento
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();

    //validar un formulario


    console.log('enviar formulario');
}); */


//eventos de los Imput y textArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email= document.querySelector('#email');
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


//el evento del submit


formulario.addEventListener('submit', function(e){
    e.preventDefault();


    //validar el formulario

    const {nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios',true);
        return;//corta la ejecucion del codigo
    }
    // crear la otra alerta de enviar correctamente
    mostrarAlerta('Mensaje Enviado correctamente');


});

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    

   // console.log(datos);
}

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent(mensaje);
    if(error){
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);

}
 /*
// muestra un alerta de que se enviuo correctamente

function mostrarMensaje(mensaje){
    
    
    
    formulario.appendChild(alerta);
   

}

// muestra un error en pantalla

function mostrarError(mensaje){

   
    error.classList.add('error');

    formulario.appendChild(error);

    //desaparezca despues de 5 segundos

    setTimeout(() => {
        error.remove();
    }, 5000);
} */