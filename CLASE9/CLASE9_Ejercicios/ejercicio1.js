//Declara dos variables numéricas numero1 y munero2
//Pida al usuario que ingrese dos numeros y muestra cual es mayor o si son inguales 

const prompt = require("prompt-sync")();

let primerNum = parseFloat(prompt("Ingresa el primer número:"));

let segundoNum = parseFloat(prompt("Ingresa el segundo número:"));

//Evalua que número es mayor o si son iguales

if(primerNum > segundoNum){
    console.log("El número ("+ primerNum +") es mayor.");
}else if(segundoNum > primerNum){
    console.log("El segundo número ("+ segundoNum +") es mayor. ");
}else{
    console.log("Los números son iguales. ")
}

