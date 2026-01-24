const prompt = require("prompt-sync")(); //Solicita al usuario que de inputs

//Pedir al usuario que ingrese un número 

let numero = parseFloat(prompt("Ingrese un número: ")); //parsefloat decirle al usuario que ingrese el dato tipo número.

//Verificamos si el número es positivo, negativo o cero

if(numero >0){
    console.log("El número es positivo");
} else if("numero < 0"){
    console.log("El número es negativo");
}else{
    console.log("El número es cero.");
}