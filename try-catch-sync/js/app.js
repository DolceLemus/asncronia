'use strict';
// Declaracion de una excepcion

function userExc (mensaje){
    this.mensaje = mensaje;
    this.nombre = "userException";
}

userExc.prototype.toString = function (){
    return `${this.nombre} : "${this.mensaje}"`
};

let excepcion =  new userExc('Todo Mal');
throw excepcion.toString();


// let numero = prompt("ingresa 5 numeros");

// if(numero.length < 5){
//     let excepcion =  new userExc('El numero ingresado no tiene la longitud necesaria');
//     throw excepcion.toString();
// }