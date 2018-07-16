'use strict';
// Declaracion de una excepcion

function userExc (mensaje){
    this.mensaje = mensaje;
    this.nombre = "userException";
}

userExc.prototype.toString = function (){
    return `${this.nombre} : "${this.mensaje}"`
};

// let excepcion =  new userExc('Todo Mal');
// throw excepcion.toString();

// Para qué nos serviria declarar una excepción

// let numero = prompt("ingresa 5 numeros");

// if(numero.length < 5){
//     let excepcion =  new userExc('El numero ingresado no tiene la longitud necesaria');
//     throw excepcion.toString();
// }

// TRY CATCH 

/*
Declarar un bloque try-catch indica que nuestro codigo puede o no ejecutarse, puede o no pasar
algo que dañe la ejecucion de nuestro codigo y puede que necesitamos saber exactamente que ocurrio
    1. TRY: Busca ejecutar el codigo sin problemas, 
    si un problema ocurre entonces se atrapan los errores arrojados (throw)
    2. CATCH: El bloque catch solo se ejecuta al recibir un error arrojado. 
    3. finally: Ejecuta las lineas de codigo que resultan despues del bloque try. 
*/
let nombre = prompt("ingresa un nombre de minimo 6 letras");
try{

    if(nombre.length < 6){
        let excepcion =  new userExc('El nombre ingresado no tiene la longitud necesaria');
        nombre = "nombre"
        throw excepcion.toString();
    }
}catch(e){
    console.log(e);
}finally{
    alert(`El nombre ingresado es ${nombre}`);
};