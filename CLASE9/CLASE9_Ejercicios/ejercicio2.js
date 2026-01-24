//Define dos constantes RANGO_MINIMO and RANGO_MAXIMO
//Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes

const prompt = require("prompt-sync")();

//Definir las dos constantes. Uso CONST en lugar de Let para definir mi variable
const RANGO_MINIMO = 100;

const RANGO_MAXIMO = 500;

//Pedir al usuario que ingrese un número
let numeroUsuario = parseFloat(prompt("Ingresa un número: "));


//Verificar si está dentro del rango

if(numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO){
    console.log("El número ingresado está dentro del rango establecido. Ganaste! ");
}else{
    console.log("El número ingresado está por fuera del rango. Intenta de nuevo! ");
}
