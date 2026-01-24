const prompt = require("prompt-sync")(); //Solicita al usuario que de inputs

//Pedir al usuario que ingrese un número 

let numero = parseFloat(prompt("Ingrese un número: ")); //parsefloat decirle al usuario que ingrese el dato tipo número.

//Calcular el doble de número ingresado

let dobleNumero = numero * 2;

//Mostramos el resultado en la consola
console.log("El doble de tu número es: " + dobleNumero);