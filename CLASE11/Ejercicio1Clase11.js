//Ejercicio 1: ¿Positivo, negativo o cero?
// 1 - Importación de la librería 
const prompt = require("prompt-sync")();

// 2 - Entrada de datos: Ingresar los números 
let números = parseInt(prompt("Ingrese un número: "));

// 3 - Lógica con el IF Ternario
// if ternario tiene una forma abreviada en una sola linea
// Estructura: (Condición) ? "Valor si es verdadero" : "Valor si es falso";

// El signo de interrogación (?) actua como el "if" (Se cumple esto?)
// Los puntos (:) actuan como el "else" (Si no, esto otro)

let números = (numero >0) ? "El número es positivo" : (numero <0) ? "El número es negativo" : "El número es cero";

console.log(números);

 