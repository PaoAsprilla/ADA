//Operadores aritméticos

//operador número de %

const prompt = require("prompt-sync")(); //Solicita al usuario que de inputs

//Pedir al usuario que ingrese un número entero

let numero = parseInt(prompt("Ingrese un número entero: ")); //parseInt decirle al usuario que ingrese el dato tipo número ENTERO.

//Verificamos si el número es par or impar. module de división 2

if(numero %2 === 0){
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

//Por qué debe ser === 0?
