const prompt = require ("prompt-sync")();
//Entrada de Datos
//Pedimos el número. Usamos parseFloat para que la calculadora sirva también para decimales.

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

// Pedimos la operación y usamos .toLowerCase para normalizar el texto.
//Esto ayuda a que si el usuario escribe SUMA en mayúsculas, el programa lo pueda reconocer y ejecutar.
let operacion = prompt("Ingresa la operación (suma, resta, división, multiplicación): ").toLowerCase();

//CREAR VARIABLE VACÍA
let resultado;

// Estructura Switch
// El switch evalúa la variable que se pone en paréntesis (operacion)
//Luego, evalua la operación que escribió el usuario

switch (operacion) {

    case "suma": 
   resultado = numero1 + numero2;
    console.log("El resultado de la suma es: " + resultado);
    break; // STOP. Importante agregarlo. Terminamos el caso de la suma
   case "resta": 
   resultado = numero1 - numero2;
    console.log("El resultado de la resta es: " + resultado);
    break; // STOP. Importante agregarlo. Terminamos el caso de la resta.
    case "multiplicacion": 
   resultado = numero1 * numero2;
    console.log("El resultado de la multiplicación es: " + resultado);
    break; // STOP. Importante agregarlo. Terminamos el caso de la multiplicación.
    case "división": 
    //Importante evitar que el usuario rompa el código, así que le explicamos al programa que si la division es por cero se puede detener.
   if (numero2 !== 0){ 
    //Si es distinto de 0, hacemos la cuenta tranquilas. 
    resultado = numero1 / numero2;
    console.log("El resultado de la división es: " + resultado);
   } else{
    //Si el usuario intentó dividir por ) le mostramos un error
    console.log("Error: No se puede dividir por cero. ");
   }
   break; // STOP. Importante agregarlo. Terminamos el caso de la división.
//Usar default para dar un mensaje por fuera de los parámetros que se establecieron, 1 al 7

default:
    console.log("Error, la operación que ingresaste no existe. Operaciones permitidas suma, restas, multiplicaciones y divisiones. ");
    
}