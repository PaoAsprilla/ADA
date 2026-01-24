//Saludo personalizado. Manipulación de cadena de textos

//Mostrar mensaje usando concatenación de cadenas

const prompt = require("prompt-sync")(); //Solicita al usuario que de inputs

//Pedir al usuario que ingrese un nombre

let nombre = prompt("Cómo te llamas?: "); 

//Mostramos el saludito personalizado

console.log("Hola " + nombre + ", Qué lindo verte aquí! ");
