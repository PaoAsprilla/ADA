// Ejemplo verificar si una persona es mayor de edad

// 1 - Importación de la librería 
const prompt = require("prompt-sync")();

// 2 - Entrada de datos: Ingresar la edad 
let edad = parseInt(prompt("Ingrese su edad: "));

// 3 - Lógica con el IF Ternario
// if ternario tiene una forma abreviada en una sola linea
// Estructura: (Condición) ? "Valor si es verdadero" : "Valor si es falso";

// El signo de interrogación (?) actua como el "if" (Se cumple esto?)
// Los puntos (:) actuan como el "else" (Si no, esto otro)

let mensaje = (edad >=21) ? "Es mayor de edad" : "Eres menor de edad";

console.log(mensaje);

 