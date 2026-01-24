// Practicar la entrada del ingreso de más de una variable

//Pedir al usuario que ingrese DOS números

const prompt = require("prompt-sync")(); //Solicita al usuario que de inputs

//Pedir al usuario que ingrese dos números 

let primerNum = parseFloat(prompt("Ingrese el primer número: ")); //parsefloat decirle al usuario que ingrese el dato tipo número.

let segundoNum= parseFloat(prompt("Ingrese el segundo número: ")); //parsefloat decirle al usuario que ingrese el dato tipo número.

let sumaNum = primerNum + segundoNum;

console.log("La suma de los dos números es: " + sumaNum);
